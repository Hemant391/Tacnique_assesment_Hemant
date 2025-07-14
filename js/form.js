document.getElementById('employeeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newEmployee = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    role: document.getElementById('role').value
  };
  alert('Employee added!');
  window.location.href = 'index.ftl';
});
