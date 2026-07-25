let employees = JSON.parse(localStorage.getItem("employees")) || [];

document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("empId").value;
  const name = document.getElementById("empName").value;
  const dept = document.getElementById("empDept").value;
  const salary = document.getElementById("empSalary").value;

  employees.push({ id, name, dept, salary });
  localStorage.setItem("employees", JSON.stringify(employees));
  alert("Employee Added Successfully!");
  document.getElementById("employeeForm").reset();
  displayEmployees();
});

function displayEmployees(list = employees) {
  const tbody = document.querySelector("#empTable tbody");
  tbody.innerHTML = "";
  list.forEach(emp => {
    tbody.innerHTML += `<tr>
      <td>${emp.id}</td><td>${emp.name}</td><td>${emp.dept}</td><td>${emp.salary}</td>
      <td><button onclick="deleteEmployee('${emp.id}')">Delete</button></td>
    </tr>`;
  });
}

// Search Employee by ID
document.getElementById("searchBtn").addEventListener("click", function() {
  const searchId = document.getElementById("searchId").value;
  const result = employees.filter(emp => emp.id === searchId);
  if (result.length > 0) {
    displayEmployees(result);
  } else {
    alert("Employee not found!");
  }
});

displayEmployees();