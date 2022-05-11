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
        id: 4,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 5,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 6,
      },
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 7,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 8,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 9,
      },
      {
        title: "اصلاح بالای سر",
        duration: 15,
        price: 30000,
        id: 10,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 11,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 12,
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
        id: 13,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 14,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 15,
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
        id: 16,
      },
      {
        title: "اصلاح کنار سر",
        duration: 20,
        price: 15000,
        id: 17,
      },
      {
        title: "اصلاح سر کودک",
        duration: 25,
        price: 20000,
        id: 18,
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
            return (
              <Tab label={category.title} {...a11yProps(index)} key={index} />
            );
          })}
        </Tabs>
      </Box>
      {categories.map((category, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {category.services.map((service) => {
              return <Service service={service} key={service.id} />;
            })}
          </TabPanel>
        );
      })}
    </Box>
  );
}
