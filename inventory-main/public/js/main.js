document.addEventListener('click', async (e) => {
  if (!e.target.classList.contains('details-btn')) return;
  const btn = e.target;
  const id = btn.getAttribute('data-product-id');
  const details = document.getElementById(`details-${id}`);

  if (!details.classList.contains('d-none')) {
    details.classList.add('d-none');
    btn.textContent = 'Show Price & Availability';
    return;
  }

  try {
    const res = await fetch(`/products/${id}`);
    if (!res.ok) throw new Error('Network');
    const data = await res.json();
    details.querySelector('.price').textContent = data.price;
    details.querySelector('.stock').textContent = data.in_stock;
    details.classList.remove('d-none');
    btn.textContent = 'Hide Price & Availability';
  } catch (err) {
    details.innerHTML = '<div class="alert alert-danger mb-0">Could not load details.</div>';
    details.classList.remove('d-none');
  }
});
