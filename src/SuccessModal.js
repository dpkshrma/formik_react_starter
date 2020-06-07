import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, onHide, data }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        All Validations have passed! <span role="img" aria-label="party">🎉</span></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Form Values:<br />
      <code>
        {JSON.stringify(data, null, 2)}
      </code>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={onHide}>
        Okay
      </Button>
    </Modal.Footer>
  </Modal>
)

export default SuccessModal;
