(function () {
  const search = document.querySelector('#publication-search');
  const type = document.querySelector('#publication-type');
  const year = document.querySelector('#publication-year');
  const items = Array.from(document.querySelectorAll('[data-publication]'));
  const count = document.querySelector('#publication-count');
  const empty = document.querySelector('#publication-empty');

  if (!search || !type || !year || !count || !empty) return;

  function updateResults() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;

    items.forEach(function (item) {
      const matchesSearch = !query || item.dataset.search.includes(query);
      const matchesType = type.value === 'all' || item.dataset.type === type.value;
      const matchesYear = year.value === 'all' || item.dataset.year === year.value;
      const show = matchesSearch && matchesType && matchesYear;

      item.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = visible + (visible === 1 ? ' publication' : ' publications');
    empty.hidden = visible !== 0;
  }

  search.addEventListener('input', updateResults);
  type.addEventListener('change', updateResults);
  year.addEventListener('change', updateResults);
  updateResults();
}());
