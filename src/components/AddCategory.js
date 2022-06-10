import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewCategory } from "../actions/categoryActions";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const createCategory = useSelector((state) => {
    return state.createCategory;
  });
  const {
    loading: createCategoryLoading,
    message: createCategoryMessage,
    error: createCategoryError,
    reset,
  } = createCategory;

  //   if (createCategoryMessage) {
  //     message.success("دسته بندی با موفقیت ایجاد شد");
  //   }

  //   if (createCategoryError) {
  //     if (createCategoryError.split(" ")[5] === 409) {
  //       message.error("دسته بندی مورد نظر در سیستم موجود است");
  //     } else {
  //       message.error("لطفا مجددا تلاش فرمایید");
  //     }
  //   }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNewCategory(name));
  };
  useEffect(() => {
    setName("");
  }, [reset]);

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                placeholder="نام دسته بندی را وارد کنید"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              افزودن
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddCategory;
