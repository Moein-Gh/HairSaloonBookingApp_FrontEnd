import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMaleFacilities } from "../actions/facilityActions";
import Loader from "../components/Loader";
import ShopCard from "../components/ShopCard";

let barberShopCategories = [
  { english: "men", persian: "مخصوص آقایان" },
  { english: "women", persian: "مخصوص بانوان" },
  { english: "styling", persian: "حالت دهی" },
  { english: "nail", persian: "ناخن" },
  { english: "nearest", persian: "نزدیک ترین" },
];

const BarberShops = () => {
  let { category } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { userInfo } = userLogin;

  const maleFacilityList = useSelector((state) => {
    return state.maleFacilityList;
  });
  const { loading: mfLoading, facilities } = maleFacilityList;

  useEffect(() => {
    if (!userInfo) navigate("/login");
    else {
      dispatch(getMaleFacilities());
    }
  }, [userInfo, dispatch, navigate]);
  return (
    <>
      <Row className="defaultContainer">
        <Row className="barbershopTitle">
          <h4>
            {
              barberShopCategories.filter((item) => {
                return category === item.english;
              })[0].persian
            }
          </h4>
        </Row>
        <hr />
        {mfLoading ? (
          <Loader />
        ) : facilities.length !== 0 ? (
          <div className="shopCardGrid">
            {facilities.length !== 0 ? (
              facilities.map((facility) => {
                return <ShopCard key={facility._id} facility={facility} />;
              })
            ) : (
              <h4>آرایشگاهی برای نمایش وجود ندارد</h4>
            )}
          </div>
        ) : (
          <h4>آرایشگاهی برای نمایش وجود ندارد</h4>
        )}
      </Row>
    </>
  );
};

export default BarberShops;
