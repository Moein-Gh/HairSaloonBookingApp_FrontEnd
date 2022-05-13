import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFemaleFacilities } from "../actions/facilityActions";
import CardSlider from "./CardSlider";
import Loader from "./Loader";

const WomenFacilitiesSlider = () => {
  const dispatch = useDispatch();
  const femaleFacilityList = useSelector((state) => {
    return state.femaleFacilityList;
  });
  const { loading: mfLoading, error: mfError, facilities } = femaleFacilityList;
  useEffect(() => {
    if (facilities.length == 0) {
      dispatch(getFemaleFacilities());
    }
  }, []);

  return (
    <Row className="defaultContainer mt-3 text-align-center">
      <div className="cardSliderTextContainer">
        <h3>مخصوص بانوان</h3>
      </div>
      <hr />

      {!mfLoading ? (
        facilities ? (
          <CardSlider items={facilities} />
        ) : (
          <h4>آرایشگاهی برای نمایش وجود ندارد</h4>
        )
      ) : (
        <Loader />
      )}
    </Row>
  );
};

export default WomenFacilitiesSlider;
