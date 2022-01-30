import axios from 'axios';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ModalContact = () => {
  const [show, setShow] = useState(false);

  const [talk, setTalk] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/talk`, talk)
      .then((res) => {
        alert('pesan berhasil terkirim');
        setShow(false);
        toast.success('Pesan berhasil terkirim!', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          className: 'Toastify__toast-theme--colored ',
        });
      });
  };

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
            <Form.Control
              type='text'
              placeholder='Name'
              value={talk.name}
              onChange={(e) => {
                setTalk({ ...talk, name: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingEmail'
            label='Email'
            className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Email'
              value={talk.email}
              onChange={(e) => {
                setTalk({ ...talk, email: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId='floatingSubject'
            label='Subject'
            className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Subject'
              value={talk.subject}
              onChange={(e) => {
                setTalk({ ...talk, subject: e.target.value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingMessage' label='Message'>
            <Form.Control
              as='textarea'
              placeholder='Leave a message here'
              style={{ height: '100px' }}
              value={talk.message}
              onChange={(e) => {
                setTalk({ ...talk, message: e.target.value });
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button type='submit' variant='dark' onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Modal>
    </>
  );
};

export default ModalContact;
