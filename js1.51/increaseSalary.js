const api = {
    _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 },
      { id: 3, name: 'Bob', salary: 80000 },
    ],
  
    getEmployees() {
      return new Promise((resolve) => {
        resolve(this._employees.slice());
      });
    },
  
    setEmployeeSalary(employeeId, newSalary) {
      return new Promise((resolve) => {
        const updatedEmployees = this._employees.map((employee) =>
          employee.id !== employeeId
            ? employee
            : {
                ...employee,
                salary: newSalary,
              }
        );
        this._employees = updatedEmployees;
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
  
    sendBudgetToAccounting(newBudget) {
      return new Promise((resolve) => {
        console.log(`Sending new budget to accounting: ${newBudget}`);
        resolve();
      });
    },
  };
  
  async function increaseSalary() {
    try {
      const employees = await api.getEmployees();
  
      const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
      const averageSalary = totalSalary / employees.length;
  
      let updatedCount = 0;
      let totalNewSalaries = 0;
  
      for (const employee of employees) {
        let newSalary;
        if (employee.salary < averageSalary) {
          newSalary = employee.salary * 1.2;
        } else {
          newSalary = employee.salary * 1.1;
        }
  
        try {
          const updatedEmployee = await api.setEmployeeSalary(employee.id, newSalary);
          totalNewSalaries += updatedEmployee.salary;
  
          await api.notifyEmployee(
            updatedEmployee.id,
            `Hello, ${updatedEmployee.name}! Congratulations, your new salary is ${updatedEmployee.salary}!`
          );
  
          updatedCount++;
        } catch (error) {
          await api.notifyAdmin(`Failed to update salary for employee ${employee.id}: ${error.message}`);
        }
      }
  
      await api.sendBudgetToAccounting(totalNewSalaries);
  
      return updatedCount;
    } catch (error) {
      console.error('Unexpected error:', error);
      return 0;
    }
  }
  
  increaseSalary().then((count) => {
    console.log(`${count} salaries were successfully increased.`);
  });