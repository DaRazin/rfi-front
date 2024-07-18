import React from "react";
import "./EmployeeForm.css";
function EmployeeForm(props) {
  return(
    <>
      <section className="employeeForm">
        {props.departmentName ? (
          <form className="employeeForm__content">
            <h2 className="employeeForm__title employeeForm__title_active">Форма для выхода нового сотрудника</h2>
            <h2 className="employeeForm__title employeeForm__title_active">{props.departmentName}</h2>
            <h3 className="employeeForm__title employeeForm__title_active">{props.groupName}</h3>
            
          </form>
          ) 
          : 
          (<h2 className="employeeForm__title employeeForm__title_default">Выберите структурное подразделение для отображения формы выхода нового сотрудника</h2>)
        }
      </section>
    </>
  )
}

export default EmployeeForm;