import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, onHide, data }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>All Validations have passed!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Woohoo, all the entries are valid!<br />
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
