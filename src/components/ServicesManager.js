import { Select } from "antd";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../actions/categoryActions";
import { createNewService, updateService } from "../actions/serviceActions";
import FormContainer from "../components/FormContainer.js";
import { EMPTY_EDIT_SERVICE_INFO } from "../constants/serviceConstants";
import Loader from "./Loader";
import UserServicesTab from "./UserServicesTab";

const ServicesManager = () => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);

  const location = useLocation();
  const { Option } = Select;
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  const categoryList = useSelector((state) => {
    return state.categoryList;
  });
  const { loading: clLoading, error: clError, categories } = categoryList;

  const editServiceInfo = useSelector((state) => {
    return state.editServiceInfo;
  });
  const { service: editService, reset: editReset } = editServiceInfo;

  const editServiceReducer = useSelector((state) => {
    return state.editService;
  });
  const {
    loading: editServiceLoading,
    error: editServiceError,
    message: editServiceMessage,
    reset: editServiceReset,
  } = editServiceReducer;

  const createService = useSelector((state) => {
    return state.createService;
  });
  const {
    loading: csLoading,
    error: csError,
    message: csMessage,
    reset: csReset,
  } = createService;

  const deleteService = useSelector((state) => {
    return state.deleteService;
  });
  const {
    loading: deleteLoading,
    error: deleteError,
    message: deleteMessage,
    reset: deleteReset,
  } = deleteService;

  const [editTitle, setEditTitle] = useState("");
  const [editServiceId, setEditServiceId] = useState("");
  const [editCategoryId, setEditCategoryId] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editTime, setEditTime] = useState(0);

  let navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      dispatch(getAllCategories());
      setTitle("");
      setCategoryId("");
      setPrice(0);
      setTime(0);

      if (editService.id) {
        setEditTitle(editService.title);
        setEditCategoryId(editService.categoryId);
        setEditServiceId(editService.id);
        setEditPrice(editService.price);
        setEditTime(editService.time);
      } else {
        setEditTitle("");
        setEditCategoryId("");
        setEditServiceId("");
        setEditPrice(0);
        setEditTime(0);
      }
    }
  }, [
    navigate,
    dispatch,
    userInfo,
    editReset,
    csReset,
    editService.id,
    deleteReset,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (price !== 0 && time !== 0 && categoryId !== 0) {
      dispatch(
        createNewService({
          categoryId,
          title,
          price,
          time,
        })
      );
    }
  };
  const submitHandlerEdit = (e) => {
    e.preventDefault();
    if (editPrice !== 0 && editTime !== 0 && editCategoryId !== 0) {
      dispatch(
        updateService(editService.id, {
          editCategoryId,
          editTitle,
          editPrice,
          editTime,
        })
      );
    }
  };

  function onChange(value) {
    setCategoryId(value);
  }
  function onEditChange(value) {
    setEditCategoryId(value);
  }
  return (
    <>
      {editServiceId === "" && (
        <Row className="defaultContainer">
          <Row>
            <h5>???????????? ???????? ????????</h5>
            <Row>
              <Col>
                <Container>
                  <FormContainer>
                    {loading && <Loader />}
                    <Form onSubmit={submitHandler}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="my-3" controlId="title">
                            <Form.Label>??????</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="?????????? ???????? ???? ???????? ????????"
                              value={title}
                              onChange={(e) => {
                                setTitle(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Group className="my-3">
                            <Form.Label>??????????</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="?????????? ???????? ???? ???????? ????????"
                              value={price}
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="my-3">
                            <Form.Label>?????? ????????</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="?????? ???????? ???????? ???? ???????? ????????"
                              value={time}
                              onChange={(e) => {
                                setTime(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Label>???????? ????????</Form.Label>
                          <br />

                          <Select
                            className="selectForm"
                            required
                            showSearch
                            placeholder="?????????? ???????? ???????? ???? ???????????? ????????"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option key={Math.random()} value={0}>
                              ??????????????
                            </Option>
                            ;
                            {categories &&
                              categories.map((category) => {
                                return (
                                  <Option
                                    key={category._id}
                                    value={category._id}
                                  >
                                    {category.name}
                                  </Option>
                                );
                              })}
                          </Select>

                          <br />

                          <Button
                            className="my-3"
                            type="submit"
                            variant="primary"
                          >
                            {" "}
                            ????????????
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </FormContainer>
                </Container>
              </Col>
            </Row>
          </Row>
        </Row>
      )}

      {editServiceId !== "" && (
        <Row className="defaultContainer">
          <Row>
            <h5>???????????? ????????</h5>
            <Row>
              <Col>
                <Container>
                  <FormContainer>
                    {loading && <Loader />}
                    <Form onSubmit={submitHandlerEdit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="my-3" controlId="title">
                            <Form.Label>??????</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="?????????? ???????? ???? ???????? ????????"
                              value={editTitle}
                              onChange={(e) => {
                                setEditTitle(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Group className="my-3">
                            <Form.Label>??????????</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="?????????? ???????? ???? ???????? ????????"
                              value={editPrice}
                              onChange={(e) => {
                                setEditPrice(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="my-3">
                            <Form.Label>?????? ????????</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="?????? ???????? ???????? ???? ???????? ????????"
                              value={editTime}
                              onChange={(e) => {
                                setEditTime(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Label>???????? ????????</Form.Label>
                          <br />

                          <Select
                            className="selectForm"
                            required
                            showSearch
                            placeholder="?????????? ???????? ???????? ???? ???????????? ????????"
                            optionFilterProp="children"
                            onChange={onEditChange}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option key={Math.random()} value={0}>
                              ??????????????
                            </Option>
                            ;
                            {categories &&
                              categories.map((category) => {
                                return (
                                  <Option
                                    key={category._id}
                                    value={category._id}
                                  >
                                    {category.name}
                                  </Option>
                                );
                              })}
                          </Select>

                          <br />

                          <Button
                            className="my-3"
                            type="submit"
                            variant="primary"
                          >
                            {" "}
                            ????????????
                          </Button>
                          <Button
                            onClick={() => {
                              dispatch({ type: EMPTY_EDIT_SERVICE_INFO });
                            }}
                            className="my-3"
                            type="button"
                            variant="primary"
                          >
                            {" "}
                            ????????????
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </FormContainer>
                </Container>
              </Col>
            </Row>
          </Row>
        </Row>
      )}

      <Row className="defaultContainer">
        <h5> ???????? ???? </h5>
        <Row>
          <UserServicesTab serviceType={"editable"} key={editServiceReset} />
        </Row>
      </Row>
    </>
  );
};

export default ServicesManager;
