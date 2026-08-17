(() => {
  const STORAGE_KEY = 'core-getting-started-progress';
  const totalSteps = 7;
  const getComplete = () => { try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); } catch { return new Set(); } };
  let complete = getComplete();
  function renderProgress() {
    const count = complete.size;
    document.querySelector('[data-progress-label]').textContent = `${count} of ${totalSteps} complete`;
    document.querySelector('[data-progress-bar]').style.width = `${(count / totalSteps) * 100}%`;
    document.querySelectorAll('[data-step]').forEach(button => { const done = complete.has(button.dataset.step); button.classList.toggle('is-complete', done); button.textContent = done ? '✓ Step complete' : 'Mark step complete'; });
    document.querySelectorAll('.step-nav a').forEach((link, index) => link.classList.toggle('done', complete.has(String(index + 1))));
    document.querySelector('[data-celebration]').hidden = count !== totalSteps;
  }
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => { const step = button.dataset.step; complete.has(step) ? complete.delete(step) : complete.add(step); localStorage.setItem(STORAGE_KEY, JSON.stringify([...complete])); renderProgress(); }));
  const menuButton = document.querySelector('.menu-toggle'); const menu = document.querySelector('.main-nav');
  menuButton.addEventListener('click', () => { const isOpen = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(isOpen)); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
  const modal = document.querySelector('[data-video-modal]');
  const openModal = event => { event.preventDefault(); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); modal.querySelector('.modal-close').focus(); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  document.querySelectorAll('[data-video-trigger]').forEach(trigger => trigger.addEventListener('click', openModal));
  document.querySelectorAll('[data-modal-close]').forEach(trigger => trigger.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); renderProgress();
})();
