import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BarberOverview from "../components/BarberOverview";
import AppointmentHistory from "../components/AppointmentHistory";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

export default function BarberDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  React.useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          scrollButtons
        >
          <Tab label="داشبورد" {...a11yProps(0)} />

          <Tab label="اعلان ها" {...a11yProps(1)} />
          <Tab label="نوبت ها" {...a11yProps(2)} />
          <Tab label="خدمت ها" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BarberOverview />
      </TabPanel>

      <TabPanel value={value} index={1}>
        notification
      </TabPanel>

      <TabPanel value={value} index={2}>
        <AppointmentHistory />
      </TabPanel>

      <TabPanel value={value} index={3}>
        services
      </TabPanel>
    </Box>
  );
}
