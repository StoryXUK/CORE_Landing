(function () {
  const signupUrl = 'https://web.fibodo.com/signup/information?app=c1';
  const header = document.getElementById('navbar');
  const footer = document.getElementById('footer');

  if (header) {
    header.className = 'core-site-header';
    header.innerHTML = `
      <div class="core-top-strip"><span>CORE IS YOUR COMPETITIVE ADVANTAGE.</span><strong>Trainers build more than bodies.</strong><span>BUILT DIFFERENT.</span></div>
      <div class="core-nav-shell">
        <a class="core-brand" href="index.html" aria-label="CORE by fibodo home"><img src="assets/logo.svg" alt="CORE by fibodo"></a>
        <button class="core-nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">Menu</button>
        <nav class="core-main-nav" aria-label="Main navigation">
          <a href="index.html#why-core">Why CORE</a>
          <a href="index.html#included">Included</a>
          <a href="additional-features.html" aria-current="page">All features</a>
          <a href="index.html#pricing">Pricing</a>
        </nav>
        <div class="core-header-actions">
          <a class="core-login" href="#login">Login</a>
          <a class="core-button core-button--dark" href="${signupUrl}" target="_blank" rel="noopener noreferrer">Start with CORE</a>
        </div>
      </div>`;

    const toggle = header.querySelector('.core-nav-toggle');
    const nav = header.querySelector('.core-main-nav');
    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  const related = document.getElementById('additional-features');
  if (related && !document.body.classList.contains('feature-directory')) {
    related.className = 'core-related';
    related.innerHTML = `
      <div class="core-related__inner">
        <div><span class="core-eyebrow">One platform. More possibilities.</span><h2>Explore every tool inside <em>CORE.</em></h2></div>
        <a class="core-button" href="additional-features.html">View all features →</a>
      </div>`;
  }

  if (footer) {
    footer.className = 'core-site-footer';
    footer.innerHTML = `
      <div class="core-top-strip core-footer-strip"><span>+</span><strong>Trainers build more than bodies.</strong><span>+</span></div>
      <div class="core-footer-inner">
        <a class="core-brand" href="index.html"><img src="assets/logo.svg" alt="CORE by fibodo"></a>
        <nav class="core-footer-links" aria-label="Footer navigation"><a href="index.html#why-core">Why CORE</a><a href="index.html#included">Included</a><a href="additional-features.html">All features</a><a href="index.html#pricing">Pricing</a></nav>
        <p>© 2026 fibodo Ltd. All rights reserved.</p>
      </div>`;
  }
})();
