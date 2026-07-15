const isCoverageSubpath = window.location.pathname.includes('/coverage/');
const basePath = isCoverageSubpath ? '../' : '';

const navLinks = [
  { href: `${basePath}index.html`, label: 'Home' },
  { href: `${basePath}coverage/`, label: 'Coverage' },
  { href: `${basePath}about.html`, label: 'About' },
  { href: `${basePath}pricing.html`, label: 'Pricing' },
  { href: `${basePath}photographers.html`, label: 'Photographers' },
  { href: `${basePath}index.html#contact`, label: 'Contact' },
];

function ensureSiteNav() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let nav = header.querySelector('.site-nav');
  if (!nav) {
    nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Primary navigation');
    const cta = header.querySelector('.header-cta');
    if (cta) {
      header.insertBefore(nav, cta);
    } else {
      header.appendChild(nav);
    }
  }

  nav.innerHTML = '';
  navLinks.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });
}

function ensureSiteFooter() {
  if (document.querySelector('.site-footer')) return;

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="site-footer-inner">
      <p>APR Wire by All-Pro Reels</p>
      <nav class="site-footer-nav" aria-label="Footer navigation">
        <a href="${basePath}index.html">Home</a>
        <a href="${basePath}coverage/">Coverage</a>
        <a href="${basePath}about.html">About</a>
        <a href="${basePath}pricing.html">Pricing</a>
        <a href="${basePath}photographers.html">Photographers</a>
        <a href="${basePath}index.html#contact">Contact</a>
        <a href="${basePath}license.html">License Terms</a>
        <a href="${basePath}privacy.html">Privacy</a>
      </nav>
    </div>
  `;

  document.body.appendChild(footer);
}

function enableSmoothHashScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });
}

ensureSiteNav();
ensureSiteFooter();
enableSmoothHashScroll();
