import React from "react";
import { Row } from "react-bootstrap";

import BarberServicesTab from "./BarberServicesTab";

import NAServicesList from "./NAServicesList";

const ChooseService = ({ serviceList, setServiceList }) => {
  return (
    <>
      <Row className="defaultContainer">
        <Row id="services" className=" mt-3">
          <BarberServicesTab
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
