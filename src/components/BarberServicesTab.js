import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Service from "./Service";

const categories = [
  {
    title: "اصلاح مو",
    services: [
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
    ],
  },
  {
    title: "اصلاح ریش",
    services: [
      {
        title: "اصلاح کامل ریش",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
    ],
  },
  {
    title: "حالت دهی مو",
    services: [
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 1,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 2,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 3,
      },
    ],
  },
];

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
          <Typography>{children}</Typography>
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

export default function BarberServicesTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          {categories.map((category, index) => {
            return <Tab label={category.title} {...a11yProps(index)} />;
          })}
        </Tabs>
      </Box>
      {categories.map((category, index) => {
        return (
          <TabPanel value={value} index={index}>
            {category.services.map((service) => {
              return <Service service={service} />;
            })}
          </TabPanel>
        );
      })}
    </Box>
  );
}
