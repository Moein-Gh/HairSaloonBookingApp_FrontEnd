import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Service from "./Service";
import EditableService from "./EditableService";
import AddableService from "./AddableService";
import { useDispatch, useSelector } from "react-redux";
import {
  getNABarbersServices,
  getUsersServices,
} from "../actions/serviceActions";
import Loader from "./Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BarberServicesTab({
  serviceType,
  serviceList,
  setServiceList,
}) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const serviceNABarber = useSelector((state) => {
    return state.serviceNABarber;
  });
  const { loading: sbLoading, services } = serviceNABarber;

  let categories = services;

  const NABarberInfo = useSelector((state) => {
    return state.NABarberInfo;
  });
  const { NABarberId } = NABarberInfo;

  useEffect(() => {
    if (NABarberId) {
      dispatch(getNABarbersServices(NABarberId));
    }
  }, [dispatch, NABarberId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {sbLoading ? (
        <Loader />
      ) : categories.length !== 0 ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              scrollButtons
            >
              {categories &&
                categories.map((category, index) => {
                  return (
                    <Tab
                      label={category.name}
                      {...a11yProps(index)}
                      key={index}
                    />
                  );
                })}
            </Tabs>
          </Box>
          {categories &&
            categories.map((category, index) => {
              return (
                <TabPanel value={value} index={index} key={category.categoryId}>
                  {category.services.map((service) => {
                    if (serviceType === "editable") {
                      return (
                        <EditableService service={service} key={service._id} />
                      );
                    } else if (serviceType === "addable") {
                      return (
                        <AddableService
                          serviceList={serviceList}
                          setServiceList={setServiceList}
                          service={service}
                          key={service._id}
                        />
                      );
                    } else {
                      return <Service service={service} key={service._id} />;
                    }
                  })}
                </TabPanel>
              );
            })}
        </Box>
      ) : (
        <h4>برای آرایشگر مورد نظر خدمتی ثبت نشده است</h4>
      )}
    </>
  );
}
