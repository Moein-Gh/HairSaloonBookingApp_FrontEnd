import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { addBarber, getNormalUsers } from "../actions/userActions";
import FormContainer from "../components/FormContainer.js";

import React from "react";
import { Select } from "antd";

const AddBarberScreen = () => {
  const [barberId, setBarberId] = useState("");
  const [message, setMessage] = useState("");
  const { Option } = Select;
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  const normalUserList = useSelector((state) => {
    return state.normalUserList;
  });
  const {
    loading: normalUsersLoading,
    error: normalUsersError,
    users: normalUsers,
  } = normalUserList;

  const addBarberState = useSelector((state) => {
    return state.addBarber;
  });
  const {
    loading: addBarberLoading,
    error: addBarberError,
    message: addBarberMessage,
    reset: addBarberReset,
  } = addBarberState;

  let navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(getNormalUsers());
    }
  }, [dispatch, addBarberReset, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBarber(barberId));
  };

  function onChange(value) {
    setBarberId(value);
  }
  const cancelHandler = (e) => {
    e.preventDefault();
    navigate("/managerDashboard");
  };

  return (
    <Container>
      <FormContainer>
        <h1>افزودن آرایشگر</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Select
            className="selectForm"
            showSearch
            placeholder="نام آرایشگر را انتخاب کنید"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="0">هیچکدام</Option>
            {normalUsers &&
              normalUsers.map((user) => {
                return (
                  <Option value={user._id} key={user._id}>
                    {user.name}
                  </Option>
                );
              })}
          </Select>

          <Button className="my-3" type="submit" variant="primary">
            {" "}
            افزودن
          </Button>
          <Button
            className="my-3"
            type="button"
            variant="primary"
            onClick={(e) => {
              cancelHandler(e);
            }}
          >
            {" "}
            انصراف
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddBarberScreen;
