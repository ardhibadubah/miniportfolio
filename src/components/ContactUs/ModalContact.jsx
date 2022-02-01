import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const ModalContact = () => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    // Initial values
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    // Validation schema
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().required(),
      subject: Yup.string().required(),
      message: Yup.string().required(),
    }),
    // Handle Submissions
    onSubmit: (values) => {
      console.log('form values:', values);

      axios
        .post(`${process.env.REACT_APP_BASE_URL}/talk`, {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully to sent message',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .then(() => {
          setShow(false);
        })
        .catch((error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.message || 'Failed to send message',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  });
  console.log(formik);

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
          <Form onSubmit={formik.handleSubmit}>
            <FloatingLabel controlId='name' label='Name' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.name}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
            <FloatingLabel controlId='email' label='Email' className='mb-3'>
              <Form.Control
                type='email'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.email}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
            <FloatingLabel controlId='subject' label='Subject' className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Subject'
                value={formik.values.subject}
                onChange={formik.handleChange}
              />
              {formik.errors.subject && (
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.subject}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
            <FloatingLabel controlId='message' label='Message'>
              <Form.Control
                as='textarea'
                placeholder='Leave a message here'
                style={{ height: '100px' }}
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              {formik.errors.message && (
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
            <div className='d-flex w-100 mt-3'>
              <Button
                variant='secondary'
                className='ms-auto'
                onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type='submit'
                variant='dark'
                className='ms-2'
                onClick={formik.handleSubmit}>
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
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
