import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-secondary/20 bg-black py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-secondary">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{site.description}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-secondary">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary">Contact</p>
            <a href={`mailto:${site.email}`} className="mt-4 block text-sm text-muted-foreground hover:text-secondary">{site.email}</a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} {site.name}. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Crafted with <span className="text-destructive">❤</span> by Pawan Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
