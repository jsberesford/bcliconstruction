import Link from "next/link";
import { company } from "@/content/company";
import { navCopy } from "@/content/copy";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule/60 bg-cream pt-section">
      <div className="container-x grid gap-12 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            {company.name}
          </p>
          <p className="mt-4 max-w-prose font-display text-display-sm text-ink text-balance">
            {company.tagline}.
          </p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-gray">
            {company.description}
          </p>
        </div>

        <div className="lg:col-span-3 lg:col-start-7">
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-base text-ink">
            <li>
              <a
                href={company.contact.phoneHref}
                className="underline-offset-4 hover:underline"
              >
                {company.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={company.contact.emailHref}
                className="underline-offset-4 hover:underline"
              >
                {company.contact.email}
              </a>
            </li>
            <li className="text-gray">
              {company.contact.address.line1}
              <br />
              {company.contact.address.line2}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-eyebrow uppercase tracking-eyebrow text-gray">
            Site
          </p>
          <ul className="mt-4 space-y-3 text-base text-ink">
            {navCopy.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-rule/60">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-sm text-gray sm:flex-row sm:items-center">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Built in Bath Settlement, Berbice.</p>
        </div>
      </div>
    </footer>
  );
}
