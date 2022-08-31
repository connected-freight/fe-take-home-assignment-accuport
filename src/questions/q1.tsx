import React, { useState, useEffect } from "react";
import type { EmployeeT } from "datasets/employees";
import { employeesDatasets } from "datasets/employees";

const defaultEmployeesJSON: EmployeeT[] = employeesDatasets;

const fetchEmployees = (): Promise<EmployeeT[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultEmployeesJSON);
    }, 0);
  });

const MainQuestionPage = () => {
  const [employees, setEmployees] = useState<EmployeeT[]>([]);

  useEffect(() => {
    fetchEmployees()
      .then((res) => setEmployees(res))
      .catch((reason) => {
        console.error(reason);
        setEmployees([]);
      });
  }, []);

  const handleOnChangeInput = (
    id: string,
    key: string,
    value: string
  ): void => {
    setEmployees((employees: EmployeeT[]) => [
      ...employees.map((employee: EmployeeT) => {
        if (employee.ID === id) {
          return {
            ...employee,
            [key]: value,
          };
        }
        return { ...employee };
      }),
    ]);
  };

  return (
    <div>
      hello, we are stuck at rendering this page. Please fix this!
      {employees.map((employee: EmployeeT) => {
        return (
          <div key={employee.ID}>
            <input
              value={employee.JobTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChangeInput(employee.ID, "JobTitle", e.target.value)
              }
            />
            <input
              value={employee.EmailAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChangeInput(employee.ID, "EmailAddress", e.target.value)
              }
            />
            <input
              value={employee.FirstNameLastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChangeInput(
                  employee.ID,
                  "FirstNameLastName",
                  e.target.value
                )
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MainQuestionPage;
