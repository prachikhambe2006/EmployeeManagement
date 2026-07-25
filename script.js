// Employee data store karne ke liye array
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Form submit hone par Add Employee
document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("empId").value;
  const name = document.getElementById("empName").value;
  const dept = document.getElementById("empDept").value;
  const salary = document.getElementById("empSalary").value;

  const employee = { id, name, dept, salary };
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));

  alert("Employee Added Successfully!");
  document.getElementById("employeeForm").reset();
  displayEmployees();
});

// Table mein employees dikhane ke liye
function displayEmployees() {
  const tbody = document.querySelector("#empTable tbody");
  tbody.innerHTML = "";
  employees.forEach(emp => {
    const row = `<tr>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.dept}</td>
      <td>${emp.salary}</td>
      <td><button onclick="deleteEmployee('${emp.id}')">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

displayEmployees();