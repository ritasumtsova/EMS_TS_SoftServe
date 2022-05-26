import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ModalWindowContent } from '../../types/components/modals';
import { openModal } from '../../store/actionCreators/modalsActionCreators';

import './AddButton.scss';

const AddButton: React.FC<ModalWindowContent> = ({ title, modalForm }) => {
  const modalContent = {
    title,
    modalForm
  };
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal(modalContent))
  };

  return (
    <Col className="AddButton" xs="4">
      <Button
        className="AddButton__btn"
        color="success"
        size="lg"
        block
        onClick={openModalHandler}
      >
        <span>
          {title}
        </span>
        <span className="AddButton__btn-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </Button>
    </Col>
  );
};

export default AddButton;
