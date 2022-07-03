import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const AddableService = ({ service, serviceList, setServiceList }) => {
	const [removed, setRemoved] = useState(false);

	const addToServicesList = () => {
		setServiceList([...serviceList, service]);
		setRemoved(false);
	};

	const removeFromServicesList = () => {
		let a = serviceList;
		a.splice(a.indexOf(service), 1);
		setServiceList([...a]);

		setRemoved(true);
	};

	useEffect(() => {
		if (serviceList) {
		}
	}, [removed, serviceList]);

	return (
		<>
			{service && serviceList && (
				<Row className="serviceItem">
					<Col xs={6} className="serviceTitleContainer">
						<div>
							<h6 className="serviceTitleText">{service.title}</h6>
						</div>
					</Col>
					<Col xs={2} className="serviceDurationContainer text-align-center">
						<div>
							<h6 className="serviceDurationText">{service.time} دقیقه</h6>
						</div>
					</Col>
					<Col xs={2} className="servicePriceContainer text-align-center">
						<div>
							<h6 className="servicePriceText">
								{service.price.toLocaleString()} تومان
							</h6>
						</div>
					</Col>
					{serviceList.indexOf(service) >= 0 ? (
						<Col
							xs={2}
							onClick={() => {
								removeFromServicesList();
							}}
						>
							<button className="btn danger serviceButton">حذف</button>
						</Col>
					) : (
						<Col
							xs={2}
							onClick={() => {
								addToServicesList();
							}}
						>
							<button className="btn serviceButton">افزودن</button>
						</Col>
					)}
				</Row>
			)}
		</>
	);
};

export default AddableService;
