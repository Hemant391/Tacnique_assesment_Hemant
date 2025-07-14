function renderEmployees(data) {
  const container = document.getElementById('employeeContainer');
  container.innerHTML = '';
  data.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <strong>${emp.firstName} ${emp.lastName}</strong><br/>
      Email: ${emp.email}<br/>
      Department: ${emp.department}<br/>
      Role: ${emp.role}<br/><br/>
      <button>Edit</button>
      <button>Delete</button>
    `;
    container.appendChild(card);
  });
}

function toggleFilter() {
  const sidebar = document.getElementById('filterSidebar');
  sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

function applyFilters() {
  // Implement filtering logic
}

function resetFilters() {
  // Reset filter inputs
}

window.onload = () => renderEmployees(employees);