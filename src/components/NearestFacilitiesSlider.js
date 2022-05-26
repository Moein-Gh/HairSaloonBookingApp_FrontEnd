import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaleFacilities } from "../actions/facilityActions";
import CardSlider from "./CardSlider";
import Loader from "./Loader";
import { Row } from "react-bootstrap";

const MenFacilitiesSlider = () => {
  const dispatch = useDispatch();
  const maleFacilityList = useSelector((state) => {
    return state.maleFacilityList;
  });
  const { loading: mfLoading, error: mfError, facilities } = maleFacilityList;
  useEffect(() => {
    if (facilities.length === 0) {
      dispatch(getMaleFacilities());
    }
  }, []);

  return (
    <Row className="defaultContainer mt-3 text-align-center">
      <div className="cardSliderTextContainer">
        <h3>نزدیکترین</h3>
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

export default MenFacilitiesSlider;
