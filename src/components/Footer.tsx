import { navLinks } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="footer-email" href="mailto:waleed.me13@gmail.com">
          waleed.me13@gmail.com
        </a>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} Waleed Ahmed. Built with curiosity.</p>
      </div>
    </footer>
  );
}
