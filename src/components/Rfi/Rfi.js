import React, { useState } from 'react';
import "./Rfi.css";
import departmentList from '../../utils/constants';
import EmployeeForm from '../EmployeeForm/EmployeeForm.js';

function Rfi() {
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleClickDepartment = (departmentName) => {
    setActiveDepartment(departmentName === activeDepartment ? null : departmentName);
    if (activeDepartment) {
      const departmentElement = document.querySelector(`.active`);
      if (departmentElement) {
        const departmentPosition = departmentElement.getBoundingClientRect().top;
        const groupsElement = document.querySelector('.rfi__groups');
        // groupsElement.style.top = `${departmentPosition}px`;
      }
    }
  };

  const handleClickGroup = (groupName) => {
    setActiveGroup(groupName); 
  }

  const searchGroups = departmentList.filter(department => 
    department.departmentName.toLowerCase().includes(searchValue.toLowerCase())
  )

  const activeDepartmentObj = departmentList.find(department => department.departmentName === activeDepartment);

  const handleClickResultSearch = (department) => {
    handleClickDepartment(department.departmentName);
    setSearchValue('');
  }

  console.log(activeGroup);
  
  return (
    <>
      <section className='rfi'>
        <div className='rfi__form'>
          <form className='rfi__form-search'>
            <input className='rfi__form-input' type='text' placeholder='Введите название структурного подразделения' onChange={(event) => setSearchValue(event.target.value)}></input>
            <div className='rfi__form-icon'></div>

            <ul className='rfi__form-results'>
            {searchValue != '' && searchGroups.map((department, index) => (
              <li key={index} className='rfi__form-result' onClick={() => handleClickResultSearch(department)}>{department.departmentName}</li>
            ))}
            </ul>
          </form>
        </div>
        <ul className='rfi__departments'>
        {departmentList.map((department, index) => (
            <li key={index} className={`rfi__department ${activeDepartment === department.departmentName ? 'activeDeparnment' : ''}`} onClick={() => handleClickDepartment(department.departmentName)}>
              <div className='rfi__department-wrapper'>
                <img className='rfi__department-logo' src={department.departmentLogo} alt={department.departmentName}></img>
                <h2 className='rfi__department-name'>{department.departmentName}</h2>
              </div>
              <a className={`button switch ${activeDepartment === department.departmentName ? 'right' : ''}`}>
                <div className="arrow"></div>
              </a>
            </li>
          ))}
          <div>
            {activeDepartmentObj && (
              <ul className='rfi__groups'>
                <h3 className='rfi__groups-title'>Ресурсные группы {activeDepartmentObj && activeDepartmentObj.departmentName}</h3>
                {Object.values(activeDepartmentObj.groups).map((group, index) => (
                  <li key={index} className='rfi__group' onClick={() => handleClickGroup(group)}>{ group.groupName }</li>
                ))}
              </ul>
            )}
          </div>
        </ul>
        <EmployeeForm 
          departmentName={activeDepartmentObj && activeDepartmentObj.departmentName}
          groupName={activeGroup && activeGroup.groupName}
        />
      </section>
    </>
  );
}

export default Rfi;