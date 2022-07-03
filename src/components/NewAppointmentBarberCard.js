import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NEW_APPOINTMENT_BARBER_INFO } from "../constants/appointmentConstants";
import { SELECT_BARBER } from "../constants/userConstants";

let headerHeight;
setTimeout(() => {
	headerHeight = document.querySelector("header").clientHeight;
}, 100);
const scrollWidthOffset = (el, height) => {
	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = -(height + 10);
	window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NewAppointmentBarberCard = ({ barber }) => {
	let image = barber.image;
	const dispatch = useDispatch();
	const { facilityId } = useParams();
	const seeServices = () => {
		dispatch({
			type: SELECT_BARBER,
			id: barber._id,
			facilityId: barber.facility._id,
		});
	};

	return (
		<Col className="barberCardContainer">
			<Row className="barberCardImageContainer">
				<Col className="barberCardImage">
					<Image src={image} className="barberImage" />
				</Col>
			</Row>

			<Row>
				<div style={{ marginBottom: "1rem" }}>
					<h5>{barber.name}</h5>
				</div>

				<hr className="barberCardHr" />

				<Row className="mb-2">
					<Col>
						<div className="barberCardButton">
							<button
								className="btn"
								onClick={() => {
									dispatch({
										type: NEW_APPOINTMENT_BARBER_INFO,
										barberId: barber._id,
									});
								}}
							>
								انتخاب آرایشگر
							</button>
						</div>
					</Col>
				</Row>
			</Row>
		</Col>
	);
};

export default NewAppointmentBarberCard;
