import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const require = createRequire(import.meta.url);

// Exercita o mesmo servidor de produção usado por `pnpm start`, sem SDK de testes.
test(
  "aplicação compilada responde por HTTP",
  { timeout: 60_000 },
  async (t) => {
    const child = spawn(
      process.execPath,
      [
        require.resolve("next/dist/bin/next"),
        "start",
        "--hostname",
        "127.0.0.1",
        "--port",
        "0",
      ],
      {
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1", NO_COLOR: "1" },
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true,
      },
    );

    let output = "";
    let spawnError;
    child.on("error", (error) => {
      spawnError = error;
    });
    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      output += chunk.toString();
    });

    t.after(async () => {
      if (child.exitCode === null && child.signalCode === null) {
        const exited = once(child, "exit");
        child.kill();
        await exited;
      }
    });

    let baseUrl;
    let html;
    const deadline = Date.now() + 40_000;
    while (Date.now() < deadline) {
      if (spawnError) throw spawnError;
      assert.equal(
        child.exitCode,
        null,
        `Servidor encerrou antes de iniciar:\n${output}`,
      );
      baseUrl = output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
      if (baseUrl) {
        try {
          const response = await fetch(baseUrl, {
            signal: AbortSignal.timeout(2_000),
          });
          assert.equal(response.status, 200);
          html = await response.text();
          break;
        } catch {
          // O endereço pode ser anunciado antes de o servidor aceitar conexões.
        }
      }
      await delay(200);
    }
    assert.ok(html, `Servidor não ficou pronto:\n${output}`);

    await t.test("HTML em português e rota técnica sem indexação", () => {
      assert.match(html, /<html[^>]*lang="pt-BR"/);
      assert.match(html, /Fundação técnica/);
      assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
    });

    await t.test("CSS compilado está acessível", async () => {
      const cssPath = html.match(/href="([^\"]+\.css(?:\?[^\"]*)?)"/)?.[1];
      assert.ok(
        cssPath,
        "O HTML deve referenciar os estilos globais compilados.",
      );
      const response = await fetch(
        new URL(cssPath.replaceAll("&amp;", "&"), baseUrl),
      );
      assert.equal(response.status, 200);
      assert.match(response.headers.get("content-type"), /text\/css/);
      assert.match(await response.text(), /\.p-6\s*\{/);
    });

    await t.test("rota inexistente retorna 404", async () => {
      const response = await fetch(`${baseUrl}/__foundation_missing_route__`);
      assert.equal(response.status, 404);
    });
  },
);
