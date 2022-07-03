import { Col, Row } from "react-bootstrap";

import NABarberServicesTab from "./NABarberServicesTab";

import NAServicesList from "./NAServicesList";

const ChooseService = ({ serviceList, setServiceList }) => {
	return (
		<>
			<Row>
				<Row id="services" className=" mt-5 ">
					<Col lg={"7"} className="px-2 mt-2">
						<NABarberServicesTab
							serviceList={serviceList}
							setServiceList={setServiceList}
							serviceType={"addable"}
						/>
					</Col>
					<Col lg={5} className="px-2">
						<h4 className="sectionTitle">خدمات انتخاب شده</h4>
						<hr />
						<NAServicesList serviceList={[...serviceList]} />
					</Col>
				</Row>
			</Row>
		</>
	);
};

export default ChooseService;
