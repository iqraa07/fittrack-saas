function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function selectRole(role) {
  document.querySelectorAll('.role-opt').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  window.selectedRole = role;
}

function handleLogin() {
  showPage((window.selectedRole || 'pt') === 'pt' ? 'pt-dashboard' : 'client-dashboard');
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('show');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('show');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-text').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function addClient() {
  const name = document.getElementById('client-name')?.value;
  const weight = document.getElementById('client-weight')?.value;
  const target = document.getElementById('client-target')?.value;
  if (!name) return;
  const list = document.getElementById('client-list');
  if (!list) return;
  const colors = ['#4f46e5','#dc2626','#2563eb','#0f766e','#d97706'];
  const c = colors[Math.floor(Math.random()*colors.length)];
  const ini = name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  const el = document.createElement('div');
  el.className = 'cl-item';
  el.innerHTML = `<div class="cl-av" style="background:${c}">${ini}</div><div class="cl-info"><div class="cl-name">${name}</div><div class="cl-meta">${weight} kg · Target ${target} kg</div></div><span class="badge badge-ok">Aktif</span>`;
  list.prepend(el);
  closeModal('modal-client');
  showToast(name + ' berhasil ditambahkan');
  const s = document.getElementById('stat-total-clients');
  if (s) s.textContent = parseInt(s.textContent) + 1;
  document.getElementById('client-name').value = '';
  document.getElementById('client-weight').value = '';
  document.getElementById('client-target').value = '';
}

function logMeal() {
  const food = document.getElementById('meal-food')?.value;
  const cal = document.getElementById('meal-cal')?.value;
  const portion = document.getElementById('meal-portion')?.value;
  if (!food || !cal) return;
  const ml = document.getElementById('lunch-list');
  if (ml) {
    const el = document.createElement('div');
    el.className = 'meal-row';
    el.innerHTML = `<div><div class="m-food">${food}</div><div class="m-port">${portion||'1 porsi'}</div></div><div class="m-kcal">${cal} kcal</div>`;
    ml.appendChild(el);
  }
  closeModal('modal-meal');
  showToast(food + ' berhasil dicatat');
  document.getElementById('meal-food').value = '';
  document.getElementById('meal-cal').value = '';
  document.getElementById('meal-portion').value = '';
}

function sendWorkoutNotif() {
  showToast('Jadwal latihan terkirim ke semua klien');
}

document.addEventListener('DOMContentLoaded', () => {
  window.selectedRole = 'pt';
  showPage('landing');
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-bg')) e.target.classList.remove('show');
});
