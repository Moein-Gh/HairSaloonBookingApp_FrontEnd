import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer.js";

import React from "react";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const location = useLocation();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => {
    return state.userRegister;
  });
  const { loading, error, userInfo } = userRegister;

  let navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register({ name, username, mobile, password }));
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>ثبت نام</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-3" controlId="name">
            <Form.Label>نام</Form.Label>
            <Form.Control
              type="name"
              placeholder="نام خود را وارد کنید"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="username">
            <Form.Label>نام کاربری</Form.Label>
            <Form.Control
              type="username"
              placeholder="نام کاربری خود را وارد کنید"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="mobile">
            <Form.Label>شماره موبایل</Form.Label>
            <Form.Control
              type="text"
              placeholder="شماره موبایل خود را وارد کنید"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="password">
            <Form.Label>رمز عبور</Form.Label>
            <Form.Control
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="confirmPassword">
            <Form.Label>تایید رمز عبور</Form.Label>
            <Form.Control
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Button className="my-3" type="submit" variant="primary">
            {" "}
            ثبت نام
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            حساب کاربری دارید؟ <Link to="/login">ورود</Link>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  );
};

export default RegisterScreen;
