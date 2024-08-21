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
  
    sendBudgetToAccounting(summarySalaries) {
      return new Promise((resolve) => {
        console.log(`Total salaries sent to accounting: ${summarySalaries}`);
        resolve(true);
      });
    },
  };
  
  async function increaseSalaries() {
    try {
      const employees = await api.getEmployees();
  
      // Считаем среднее арифметическое по зарплатам
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
  
  increaseSalaries().then((count) => {
    console.log(`${count} salaries were successfully increased.`);
  });