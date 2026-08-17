(function () {
  const footer = document.getElementById('footer');

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
        <nav class="core-footer-links" aria-label="Footer navigation"><a href="index.html">Home</a><a href="about-us.html">About</a><a href="additional-features.html">Features</a><a href="pricing.html">Pricing</a></nav>
        <p>© 2026 fibodo Ltd. All rights reserved.</p>
      </div>`;
  }
})();
