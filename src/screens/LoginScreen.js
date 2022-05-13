import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer.js";

import React from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  let navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password)).then(() => {
      return;
    });
  };

  return (
    <Container>
      <FormContainer>
        <h1>ورود</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-3" controlId="username">
            <Form.Label>نام کاریری</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-3" controlId="password">
            <Form.Label>رمز عبور</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>

          <Button className="my-3" type="submit" variant="primary">
            {" "}
            ورود
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            قبلا ثبت نام نکرده اید؟ <Link to="/register">ثبت نام</Link>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
