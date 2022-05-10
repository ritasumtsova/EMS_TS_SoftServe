import React from 'react';
import { Col, Container } from 'reactstrap';

import { Employee } from '../../types/employees';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import NotFound from '../pages/NotFound/NotFound';
import './EmployeesList.scss';

interface EmployeesListProps {
  employees: Employee[];
}

const EmployeesList: React.FC<EmployeesListProps> = ({ employees }) => {
  if (employees.length === 0) {
    return <NotFound />;
  }

  return (
    <Container className="EmployeesList__info-wrapper">
      {employees.map((employee) => {
        return (
          <React.Fragment key={employee._id}>
            <Col>
              <div>{employee.firstName}</div>
              <div>{employee.lastName}</div>
            </Col>
            <Col className="EmployeesList__info-wrapper-btn">
              <EditButton />
              <DeleteButton />
            </Col>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default EmployeesList;
