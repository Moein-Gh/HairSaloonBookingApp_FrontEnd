import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
const AdvanceSearch = () => {
  return (
    <Col className="advanceSearchContainer">
      <div className="welcomeText">
        <h2>به سینوا خوش آمدید</h2>
      </div>
      <div className="advanceSearchFrom">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="نام آرایشگاه" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="نام آرایشگر" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="نام شهر" />
          </Form.Group>
          <Button variant="primary" type="submit">
            جستجو
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default AdvanceSearch;
