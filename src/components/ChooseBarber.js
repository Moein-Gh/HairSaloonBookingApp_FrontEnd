import { Select } from "antd";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css/bundle";
import { getFacilitysBarbers } from "../actions/facilityActions";

import {
	EMPTY_NEW_APPOINTMENT_BARBER_INFO,
	NEW_APPOINTMENT_BARBER_INFO,
} from "../constants/appointmentConstants";
import NewAppointmentBarberCard from "./NewAppointmentBarberCard";
const { Option } = Select;

const ChooseBarber = () => {
	const dispatch = useDispatch();
	function onChange(value) {
		if (value !== "0") {
			dispatch({ type: NEW_APPOINTMENT_BARBER_INFO, barberId: value });
		} else {
			dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
		}
	}

	const facilityBarbers = useSelector((state) => {
		return state.facilityBarbers;
	});
	const { barbers, loading, error } = facilityBarbers;
	const NAFacilityInfo = useSelector((state) => {
		return state.NAFacilityInfo;
	});
	const { NAFacilityId } = NAFacilityInfo;

	useEffect(() => {
		if (NAFacilityId) {
			dispatch(getFacilitysBarbers(NAFacilityId));
		}
	}, [dispatch, NAFacilityId]);

	return (
		<>
			<Row>
				<Col>
					<div className="shopCardGridNewAppointment">
						{NAFacilityId && barbers && barbers.length !== 0 ? (
							barbers.map((barber) => {
								return (
									<div key={Math.random()}>
										<NewAppointmentBarberCard
											key={barber._id}
											barber={barber}
										/>
									</div>
								);
							})
						) : (
							<h5>آرایشگری برای نمایش وجود ندارد</h5>
						)}
					</div>
				</Col>
			</Row>
		</>
	);
};

export default ChooseBarber;
