import Image from "next/image";
import Link from "next/link";
import { siteNavigation } from "@/components/site/site-navigation";

export default function SiteFooter() {
  return (
    <footer className="border-t border-bage-charcoal bg-bage-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bage-jalde"
          >
            <Image
              src="/images/brand/ge-bage-escudo.png"
              alt=""
              width={1280}
              height={1537}
              sizes="60px"
              className="h-18 w-auto shrink-0"
            />
            <span className="font-display text-2xl font-bold">
              GRÊMIO ESPORTIVO BAGÉ
            </span>
          </Link>
          <p className="mt-4 text-foreground-secondary">
            Fundado em 5 de agosto de 1920
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
            {siteNavigation.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center py-2 text-bage-ivory hover:text-bage-jalde focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bage-jalde"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
