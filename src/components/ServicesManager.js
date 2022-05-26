import React, { useEffect, useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BarberServicesTab from "./BarberServicesTab";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer.js";
import { Select } from "antd";
import { getAllCategories } from "../actions/categoryActions";
import { createNewService, updateService } from "../actions/serviceActions";
import { EMPTY_EDIT_SERVICE_INFO } from "../constants/serviceConstants";

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
            <h5>افزودن خدمت جدید</h5>
            <Row>
              <Col>
                <Container>
                  <FormContainer>
                    {loading && <Loader />}
                    <Form onSubmit={submitHandler}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="my-3" controlId="title">
                            <Form.Label>نام</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="عنوان خدمت را وارد کنید"
                              value={title}
                              onChange={(e) => {
                                setTitle(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Group className="my-3">
                            <Form.Label>هزینه</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="هزینه خدمت را وارد کنید"
                              value={price}
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="my-3">
                            <Form.Label>مدت زمان</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="مدت زمان خدمت را وارد کنید"
                              value={time}
                              onChange={(e) => {
                                setTime(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Label>دسته بندی</Form.Label>
                          <br />

                          <Select
                            className="selectForm"
                            required
                            showSearch
                            placeholder="عنوان دسته بندی را انتخاب کنید"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option key={Math.random()} value={0}>
                              هیچکدام
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
                            افزودن
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
            <h5>ویرایش خدمت</h5>
            <Row>
              <Col>
                <Container>
                  <FormContainer>
                    {loading && <Loader />}
                    <Form onSubmit={submitHandlerEdit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="my-3" controlId="title">
                            <Form.Label>نام</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="عنوان خدمت را وارد کنید"
                              value={editTitle}
                              onChange={(e) => {
                                setEditTitle(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Group className="my-3">
                            <Form.Label>هزینه</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="هزینه خدمت را وارد کنید"
                              value={editPrice}
                              onChange={(e) => {
                                setEditPrice(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="my-3">
                            <Form.Label>مدت زمان</Form.Label>
                            <Form.Control
                              type="number"
                              required
                              placeholder="مدت زمان خدمت را وارد کنید"
                              value={editTime}
                              onChange={(e) => {
                                setEditTime(e.target.value);
                              }}
                            ></Form.Control>
                          </Form.Group>

                          <Form.Label>دسته بندی</Form.Label>
                          <br />

                          <Select
                            className="selectForm"
                            required
                            showSearch
                            placeholder="عنوان دسته بندی را انتخاب کنید"
                            optionFilterProp="children"
                            onChange={onEditChange}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option key={Math.random()} value={0}>
                              هیچکدام
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
                            ویرایش
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
                            انصراف
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
        <h5> خدمت ها </h5>
        <Row>
          <BarberServicesTab serviceType={"editable"} key={editServiceReset} />
        </Row>
      </Row>
    </>
  );
};

export default ServicesManager;
