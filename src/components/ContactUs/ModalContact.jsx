import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const ModalContact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='outline-dark' onClick={handleShow}>
        Let's Talk!
      </Button>

      <Modal show={show} fullscreen='md' onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId='floatingName' label='Name' className='mb-3'>
            <Form.Control type='text' placeholder='Name' />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingEmail'
            label='Email'
            className='mb-3'>
            <Form.Control type='email' placeholder='Email' />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingSubject'
            label='Subject'
            className='mb-3'>
            <Form.Control type='text' placeholder='Subject' />
          </FloatingLabel>
          <FloatingLabel controlId='floatingMessage' label='Message'>
            <Form.Control
              as='textarea'
              placeholder='Leave a message here'
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button type='submit' variant='dark' onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContact;
