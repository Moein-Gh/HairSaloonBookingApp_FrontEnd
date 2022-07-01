import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	EMPTY_NEW_APPOINTMENT_BARBER_INFO,
	NEW_APPOINTMENT_FACILITY_INFO,
} from "../constants/appointmentConstants";

const NewAppointmentShopCard = ({ facility }) => {
	const dispatch = useDispatch();
	return (
		<>
			{facility && (
				<Col className="facilityCardContainer">
					<Row className="facilityCardImageContainer">
						<Col
							className="facilityCardImage"
							style={{
								backgroundImage: `url(${
									facility.image ? facility.image : "./images/2.jpg"
								})`,
							}}
						>
							{" "}
							<div className="imageTag">
								<h6>
									{facility.customerGender == "male" ? "مردانه" : "زنانه"}
								</h6>
							</div>
						</Col>
					</Row>

					<Row>
						<div>
							<h5>{facility.name}</h5>
						</div>
						<hr className="facilityCardHr" />
						<Row className="pb-2">
							<Col
								xs={6}
								className="d-flex justify-content-center align-items-center"
							>
								<h6>{facility.distance ? facility.distance : "1 کیلومتر"}</h6>
							</Col>
							<Col xs={6}>
								<div className="facilityCardButton">
									<button
										className="btn"
										onClick={() => {
											dispatch({
												type: NEW_APPOINTMENT_FACILITY_INFO,
												facilityId: facility._id,
											});
											dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
										}}
									>
										انتخاب آرایشگاه
									</button>
								</div>
							</Col>
						</Row>
					</Row>
				</Col>
			)}
		</>
	);
};

export default NewAppointmentShopCard;
