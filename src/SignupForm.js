import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import SuccessModal from './SuccessModal';

const PASSWORD_PATTERN = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,32}$/;
const reqdFieldMsg = 'This is a required field';
const invalidPwdMsg = 'Password must contain atleast eight characters, at least one letter and one number.';
const schema = yup.object({
  name: yup.string().required(reqdFieldMsg),
  password: yup.string()
    .matches(PASSWORD_PATTERN, invalidPwdMsg)
    .required(reqdFieldMsg),
  email: yup.string().email('A valid email is required').required(reqdFieldMsg),
});

const SignupForm = () => {
  const [validData, setValidData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const onSubmit = (values) => {
    setValidData(values);
    setShowModal(true);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnChange={false}
        initialValues={{
          name: '',
          password: '',
          email: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Please enter your email address"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Please enter a strong password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          );
        }}
      </Formik>
      <SuccessModal show={showModal} onHide={() => setShowModal(false)} data={validData} />
    </>
  );
};

export default SignupForm;
