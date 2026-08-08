const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const searchInput = document.querySelector('#projectSearch');

function applyFilters(){
  const active = document.querySelector('.filter.active')?.dataset.filter || 'all';
  const q = (searchInput?.value || '').trim().toLowerCase();
  cards.forEach(card => {
    const categories = (card.dataset.category || '').split(' ');
    const text = card.textContent.toLowerCase();
    const okFilter = active === 'all' || categories.includes(active);
    const okSearch = !q || text.includes(q);
    card.classList.toggle('hidden', !(okFilter && okSearch));
  });
}
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}));
searchInput?.addEventListener('input', applyFilters);
