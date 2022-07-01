import { Select } from "antd";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllFacilities } from "../actions/facilityActions";
import NewAppointmentShopCard from "../components/NewAppointmentShopCard";
import {
	EMPTY_NEW_APPOINTMENT_BARBER_INFO,
	EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
	NEW_APPOINTMENT_FACILITY_INFO,
} from "../constants/appointmentConstants";
const { Option } = Select;

const ChooseFacility = () => {
	const dispatch = useDispatch();
	function onChange(value) {
		if (value !== "0") {
			dispatch({ type: NEW_APPOINTMENT_FACILITY_INFO, facilityId: value });
			dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
		} else {
			dispatch({ type: EMPTY_NEW_APPOINTMENT_FACILITY_INFO });
			dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
		}
	}

	const facilityList = useSelector((state) => {
		return state.facilityList;
	});
	const { facilities, loading, error } = facilityList;

	useEffect(() => {
		dispatch(getAllFacilities());
	}, [dispatch]);

	return (
		<>
			<Row>
				<Col>
					<Row className="selectFormContainer">
						{" "}
						<Row>
							<div className="shopCardGridNewAppointment">
								{facilities.length !== 0 ? (
									facilities.map((facility) => {
										return (
											<NewAppointmentShopCard
												key={facility._id}
												facility={facility}
											/>
										);
									})
								) : (
									<h4>آرایشگاهی برای نمایش وجود ندارد</h4>
								)}
							</div>
						</Row>
						{/* <ShopCard /> */}
						{/* <Select
							className="selectForm"
							showSearch
							placeholder="نام آرایشگاه را انتخاب کنید"
							optionFilterProp="children"
							onChange={onChange}
							filterOption={(input, option) =>
								option.children.indexOf(input) >= 0
							}
						>
							{facilities ? (
								<>
									<Option value="0">هیچکدام</Option>
									{facilities &&
										facilities.map((facility) => {
											let optionName = `آرایشگاه ${
												facility.customerGender === "male" ? "مردانه" : "زنانه"
											} ${facility.name} -- به مدیریت ${
												facility.manager.name
											} -- کد : ${facility.code}`;
											return (
												<Option key={facility._id} value={facility._id}>
													{optionName}
												</Option>
											);
										})}
								</>
							) : (
								<Option value="0">هیچکدام</Option>
							)}
						</Select> */}
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default ChooseFacility;
