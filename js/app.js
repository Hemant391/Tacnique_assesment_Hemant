 let filteredEmployees = [...employees];
    let currentPage = 1;

    function renderEmployees(data) {
      const container = document.getElementById('employeeContainer');
      container.innerHTML = '';
      const showCount = parseInt(document.getElementById('showCount').value);
      const paginated = data.slice((currentPage - 1) * showCount, currentPage * showCount);

      paginated.forEach(emp => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        card.innerHTML = `
          <strong>${emp.firstName} ${emp.lastName}</strong><br/>
          Email: ${emp.email}<br/>
          Department: ${emp.department}<br/>
          Role: ${emp.role}<br/><br/>
          <button onclick="editEmployee(${emp.id})">Edit</button>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        `;
        container.appendChild(card);
      });
    }

    function toggleFilter() {
      const sidebar = document.getElementById('filterSidebar');
      sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    }

    function applyFilters() {
      const firstName = document.getElementById('filterFirstName').value.toLowerCase();
      const department = document.getElementById('filterDepartment').value.toLowerCase();
      const role = document.getElementById('filterRole').value.toLowerCase();

      filteredEmployees = employees.filter(emp => {
        return (
          emp.firstName.toLowerCase().includes(firstName) &&
          emp.department.toLowerCase().includes(department) &&
          emp.role.toLowerCase().includes(role)
        );
      });
      currentPage = 1;
      renderEmployees(filteredEmployees);
    }

    function resetFilters() {
      document.getElementById('filterFirstName').value = '';
      document.getElementById('filterDepartment').value = '';
      document.getElementById('filterRole').value = '';
      filteredEmployees = [...employees];
      currentPage = 1;
      renderEmployees(filteredEmployees);
    }

    function searchEmployees() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      filteredEmployees = employees.filter(emp => {
        return (
          emp.firstName.toLowerCase().includes(query) ||
          emp.lastName.toLowerCase().includes(query) ||
          emp.email.toLowerCase().includes(query)
        );
      });
      currentPage = 1;
      renderEmployees(filteredEmployees);
    }

    function sortEmployees() {
      const sortBy = document.getElementById('sortSelect').value;
      if (sortBy) {
        filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        renderEmployees(filteredEmployees);
      }
    }

    function paginateEmployees() {
      currentPage = 1;
      renderEmployees(filteredEmployees);
    }

    function addEmployeePrompt() {
      const firstName = prompt('Enter first name:');
      const lastName = prompt('Enter last name:');
      const email = prompt('Enter email:');
      const department = prompt('Enter department:');
      const role = prompt('Enter role:');

      if (firstName && lastName && email && department && role) {
        const newId = employees.length ? employees[employees.length - 1].id + 1 : 1;
        const newEmployee = { id: newId, firstName, lastName, email, department, role };
        employees.push(newEmployee);
        filteredEmployees = [...employees];
        renderEmployees(filteredEmployees);
      } else {
        alert('All fields are required.');
      }
    }

    function deleteEmployee(id) {
      if (confirm('Are you sure you want to delete this employee?')) {
        const index = employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
          employees.splice(index, 1);
          filteredEmployees = [...employees];
          renderEmployees(filteredEmployees);
        }
      }
    }

    function editEmployee(id) {
      const emp = employees.find(e => e.id === id);
      if (!emp) return;

      const firstName = prompt('Edit first name:', emp.firstName);
      const lastName = prompt('Edit last name:', emp.lastName);
      const email = prompt('Edit email:', emp.email);
      const department = prompt('Edit department:', emp.department);
      const role = prompt('Edit role:', emp.role);

      if (firstName && lastName && email && department && role) {
        emp.firstName = firstName;
        emp.lastName = lastName;
        emp.email = email;
        emp.department = department;
        emp.role = role;
        filteredEmployees = [...employees];
        renderEmployees(filteredEmployees);
      } else {
        alert('All fields are required.');
      }
    }

    window.onload = () => renderEmployees(filteredEmployees);