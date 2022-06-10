import React from "react";
import { Row } from "react-bootstrap";

import NABarberServicesTab from "./NABarberServicesTab";

import NAServicesList from "./NAServicesList";

const ChooseService = ({ serviceList, setServiceList }) => {
  return (
    <>
      <Row className="defaultContainer">
        <Row id="services" className=" mt-3">
          <NABarberServicesTab
            serviceList={serviceList}
            setServiceList={setServiceList}
            serviceType={"addable"}
          />
        </Row>
        <NAServicesList serviceList={[...serviceList]} />
      </Row>
    </>
  );
};

export default ChooseService;
