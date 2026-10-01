import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";
import "./matches.test.mjs";

const require = createRequire(import.meta.url);
const {
  professionalAthletes,
} = require("../src/features/athletes/data/professional-athletes.ts");
const {
  athleteGroups,
} = require("../src/features/athletes/domain/athlete-profile.ts");

test("dataset profissional: 30 atletas, slugs e nomes únicos, grupos válidos", () => {
  assert.equal(professionalAthletes.length, 30);
  const slugs = professionalAthletes.map(({ slug }) => slug);
  const names = professionalAthletes.map(({ name }) =>
    name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim()
      .toLocaleLowerCase("pt-BR"),
  );
  assert.equal(new Set(slugs).size, 30, "Slug duplicado");
  assert.equal(new Set(names).size, 30, "Atleta duplicado");
  const counts = { goalkeeper: 0, defender: 0, midfielder: 0, forward: 0 };
  for (const athlete of professionalAthletes) {
    assert.ok(Object.hasOwn(counts, athlete.group), "Grupo inválido");
    assert.match(athlete.slug, /^[a-z]+(?:-[a-z]+)*$/);
    counts[athlete.group]++;
  }
  assert.deepEqual(counts, {
    goalkeeper: 3,
    defender: 10,
    midfielder: 9,
    forward: 8,
  });
});

test("numeração fornecida e retratos: 23 portraits e 7 fallbacks", () => {
  const expectedNumbers = {
    "marcos-monitou": 1,
    "enzo-de-leon": 12,
    "tom-fernandes": 1,
    "pedro-costa": 3,
    "edmilson-junior": 3,
    neto: 6,
    "nicolas-luft": 2,
    "enrique-hobuss": 4,
    jalison: 15,
    solivan: 2,
    yander: 15,
    "nicolas-marquez": 22,
    "gustavo-nogy": 6,
    "julio-rusch": 8,
    fernando: 20,
    givigi: 19,
    cunha: 20,
    "vitor-carre": 5,
    "elias-ceara": 25,
    "rafael-gelatti": 20,
    "gabriel-chaves": 5,
    "joao-castro": 16,
    "michel-henrique": 9,
    "kauan-mateus": 18,
    "vini-almeida": 11,
    rafinha: 22,
    "edson-silva": 18,
    dg: 17,
    cavani: 19,
    johann: 7,
  };
  const withoutPortrait = [
    "solivan",
    "cunha",
    "elias-ceara",
    "joao-castro",
    "kauan-mateus",
    "dg",
    "johann",
  ];
  assert.equal(
    professionalAthletes.filter((athlete) => athlete.portraitImage).length,
    23,
  );
  assert.deepEqual(
    professionalAthletes
      .filter((athlete) => !athlete.portraitImage)
      .map((athlete) => athlete.slug),
    withoutPortrait,
  );
  for (const athlete of professionalAthletes) {
    assert.equal(athlete.number, expectedNumbers[athlete.slug], athlete.slug);
    if (!athlete.portraitImage) continue;
    const filename = athlete.slug === "fernando" ? "fernandinho" : athlete.slug;
    assert.equal(
      athlete.portraitImage.src,
      `/images/athletes/portraits/${filename}.png`,
    );
    assert.equal(athlete.portraitImage.alt, `Retrato de ${athlete.name}`);
    assert.ok(
      existsSync(
        new URL("../public" + athlete.portraitImage.src, import.meta.url),
      ),
      athlete.slug,
    );
  }
});

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

    await t.test("Home em português, demonstrativa e sem indexação", () => {
      assert.match(html, /<html[^>]*lang="pt-BR"/);
      assert.match(html, /<h1[^>]*>Preparação em foco para o próximo desafio/);
      assert.match(html, /hero-jogador\.jpg/);
      assert.doesNotMatch(html, /Bagé agora|Notícia principal/i);
      assert.match(html, /Conteúdo demonstrativo/);
      assert.match(html, /Próximo jogo/);
      assert.match(html, /Último jogo/);
      assert.match(html, /<article\b/);
      assert.doesNotMatch(
        html,
        /Fundação técnica|Ambiente inicial da aplicação\./,
      );
      assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
    });

    await t.test(
      "Home-hub: vitrines, fontes compartilhadas e 12 patrocinadores",
      () => {
        const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
        assert.ok(main);
        for (const id of [
          "home-now",
          "home-squad",
          "home-season",
          "home-history",
          "home-sponsors",
        ]) {
          assert.ok(main.includes(`id="${id}"`), id);
        }
        assert.match(main, /Notícias aguardam conteúdo verificado/);
        const athleteLinks = [
          ...main.matchAll(/href="\/elenco\/([^"#?]+)"/g),
        ].map((match) => match[1]);
        assert.equal(athleteLinks.length, 8);
        assert.equal(new Set(athleteLinks).size, 8);
        for (const slug of athleteLinks)
          assert.ok(
            professionalAthletes.some((athlete) => athlete.slug === slug),
          );
        assert.equal((main.match(/data-home-match-id=/g) ?? []).length, 3);
        assert.match(main, /GE Bagé 4 a 1 Brasil de Pelotas/);
        assert.match(main, /dateTime="1920-08-05"|datetime="1920-08-05"/);
        for (const file of [
          "cc-corretora",
          "concrefort",
          "lenir",
          "peruzzo",
          "rct",
          "sao-jorge",
          "sbe",
          "sim",
          "sindicred",
          "singular",
          "ultra-med",
          "valcar",
        ]) {
          assert.ok(main.includes(`${file}.png`), file);
          assert.ok(existsSync(`public/images/sponsors/${file}.png`), file);
        }
        for (const route of ["/noticias", "/elenco", "/jogos", "/historia"])
          assert.ok(main.includes(`href="${route}"`), route);
        const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0];
        assert.ok(footer);
        assert.match(footer, /Voltar ao topo/);
        assert.match(footer, /Protótipo não oficial/);
        assert.doesNotMatch(footer, /Estádio Pedra Moura|Fundado em|wordmark/);
      },
    );

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
      assert.ok((await response.text()).trim().length > 0);
    });

    await t.test(
      "destinos da navegação respondem com placeholders",
      async () => {
        const routes = [
          ["/noticias", "Notícias"],
          ["/historia", "História"],
          ["/clube", "Clube"],
        ];

        for (const [path, title] of routes) {
          const response = await fetch(new URL(path, baseUrl));
          assert.equal(response.status, 200, path);
          const page = await response.text();
          assert.match(page, new RegExp(`<h1[^>]*>${title}</h1>`));
          assert.match(page, /Esta página está em desenvolvimento\./);
          assert.equal((page.match(/<main\b/g) ?? []).length, 1);
          assert.match(page, /<meta name="robots" content="noindex, nofollow"/);
        }
      },
    );

    await t.test(
      "Jogos 2026: 23 cards informativos, filtros e registro especial",
      async () => {
        const response = await fetch(new URL("/jogos", baseUrl));
        assert.equal(response.status, 200);
        const page = await response.text();
        const main = page.match(/<main\b[\s\S]*?<\/main>/)?.[0];
        assert.ok(main);
        assert.equal((main.match(/data-match-id=/g) ?? []).length, 23);
        assert.match(main, /Agregado/);
        assert.match(main, /Pênaltis/);
        assert.match(main, /Gol contra/);
        assert.match(main, /João Victor Castro/);
        assert.match(main, /20H/);
        assert.match(main, /Frederico Westphalen\/RS/);
        assert.match(main, /Escudo do União Frederiquense/);
        assert.doesNotMatch(
          main,
          /dia a confirmar|Estádio a confirmar|Registro especial|Memória da temporada|De maio a setembro|Uma camisa|valor entre parênteses|Registro especial preservado/,
        );
        assert.match(main, /aria-pressed="true"/);
        assert.match(main, /role="status"/);
        assert.doesNotMatch(main, /<a\b/);
        assert.match(page, /<meta name="robots" content="noindex, nofollow"/);
        assert.equal(
          (await fetch(new URL("/jogos/fgf-01", baseUrl))).status,
          404,
        );
      },
    );

    await t.test("elenco e todos os 30 perfis individuais", async () => {
      const response = await fetch(new URL("/elenco", baseUrl));
      assert.equal(response.status, 200);
      const squad = await response.text();
      const links = [
        ...squad.matchAll(/<a[^>]+href="(\/elenco\/[^"#?]+)"/g),
      ].map((match) => match[1]);
      assert.equal(links.length, 30);
      assert.equal(new Set(links).size, 30);
      assert.equal((squad.match(/alt="Retrato de [^"]+"/g) ?? []).length, 23);
      assert.match(squad, /role="tablist"/);
      assert.match(squad, /id="tab-professional"[^>]*aria-selected="true"/);
      assert.match(squad, /id="panel-youth"[^>]*hidden/);
      assert.match(squad, /id="panel-leadership"[^>]*hidden/);
      assert.match(squad, /Conteúdo em preparação/);
      assert.match(squad, /<meta name="robots" content="noindex, nofollow"/);
      assert.doesNotMatch(
        squad,
        /Esta página está em desenvolvimento|Atleta Modelo/,
      );
      for (const athlete of professionalAthletes) {
        const path = "/elenco/" + athlete.slug;
        assert.ok(links.includes(path), path);
        const profileResponse = await fetch(new URL(path, baseUrl));
        assert.equal(profileResponse.status, 200, path);
        const page = await profileResponse.text();
        const main = page.match(/<main\b[\s\S]*?<\/main>/)?.[0];
        assert.ok(main, path);
        const heading = main
          .match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]
          .replace(/<[^>]*>/g, "")
          .trim();
        assert.equal(heading, athlete.name, path);
        assert.ok(main.includes(athleteGroups[athlete.group].position));
        assert.match(
          main,
          new RegExp(
            `número documentado em 2026: (?:<!-- -->)?${athlete.number}(?:<!-- -->)?<`,
          ),
        );
        if (athlete.portraitImage) {
          assert.ok(main.includes(`alt="${athlete.portraitImage.alt}"`), path);
        } else {
          assert.doesNotMatch(main, /alt="Retrato de /);
        }
        assert.ok(
          page.includes(
            "<title>" + athlete.name + " | Grêmio Esportivo Bagé</title>",
          ),
        );
        assert.equal((page.match(/<main\b/g) ?? []).length, 1);
        assert.match(page, /<meta name="robots" content="noindex, nofollow"/);
        assert.doesNotMatch(
          main,
          /Nascimento|Naturalidade|No Bagé desde|<dl|Sobre |camisa|Atleta Modelo|Personagem|N\/D|Não informado|foto indisponível|hero-jogador/,
        );
      }
      for (const slug of ["slug-inexistente", "atleta-demonstracao"]) {
        assert.equal(
          (await fetch(new URL("/elenco/" + slug, baseUrl))).status,
          404,
        );
      }
    });

    await t.test("rota inexistente retorna 404", async () => {
      const response = await fetch(`${baseUrl}/__foundation_missing_route__`);
      assert.equal(response.status, 404);
    });
  },
);
