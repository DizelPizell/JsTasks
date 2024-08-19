const api = {
    _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 },
      { id: 3, name: 'Bob', salary: 180000 },
    ],
  
    getEmployees() {
      return new Promise((resolve) => {
        resolve(this._employees.slice());
      });
    },
  
    setEmployeeSalary(employeeId, newSalary) {
      return new Promise((resolve) => {
        this._employees = this._employees.map((employee) =>
          employee.id !== employeeId
            ? employee
            : {
                ...employee,
                salary: newSalary,
              }
        );
        resolve(this._employees.find(({ id }) => id === employeeId));
      });
    },
  
    notifyEmployee(employeeId, text) {
      return new Promise((resolve) => {
        console.log(`Notifying employee ${employeeId}: ${text}`);
        resolve(true);
      });
    },
  
    notifyAdmin(error) {
      return new Promise((resolve) => {
        console.error(`Admin notified: ${error}`);
        resolve(true);
      });
    },
  
    setEmployees(newEmployees) {
      return new Promise((resolve) => {
        this._employees = newEmployees;
        resolve();
      });
    },
  };
  
  function increaseSalary() {
    return api.getEmployees()
      .then(employees => {
        const minSalaryEmployee = employees.reduce((min, employee) => 
          (min.salary < employee.salary ? min : employee)
        );
  
        const newSalary = minSalaryEmployee.salary * 1.20;
  
        return api.setEmployeeSalary(minSalaryEmployee.id, newSalary)
          .then(updatedEmployee => {
            return api.notifyEmployee(updatedEmployee.id, `Hello, ${updatedEmployee.name}! Congratulations, your new salary is ${updatedEmployee.salary}!`)
              .then(() => true)
              .catch(error => {
                api.notifyAdmin(`Failed to notify employee ${updatedEmployee.id}: ${error.message}`);
                return false;
              });
          })
          .catch(error => {
            api.notifyAdmin(`Failed to update salary for employee ${minSalaryEmployee.id}: ${error.message}`);
            return false;
          });
      });
  }
  
  increaseSalary()
    .then(success => {
      console.log(success ? 'Salary increase was successful' : 'Salary increase failed');
    });