import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuProfile from "./MenuProfile";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Autocomplete } from "@mui/lab";
import { TextField } from "@mui/material";

const steps = ["انتخاب آرایشگاه", "انتخاب خدمات", "انتخاب زمان"];
let favouriteBarberShops = [
  { name: "ارایشگاه ۱", id: 1 },
  { name: "ارایشگاه ۲", id: 2 },
  { name: "ارایشگاه ۳", id: 3 },
  { name: "ارایشگاه ۴", id: 4 },
  { name: "ارایشگاه ۵", id: 5 },
  { name: "ارایشگاه ۶", id: 6 },
  { name: "ارایشگاه ۷", id: 7 },
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [favourite, setFavourite] = React.useState(true);

  const handleChange = (event) => {
    setFavourite(event.target.checked);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let favouriteForm = (
    <Row>
      <Col md={6}>
        <Autocomplete
          disablePortal
          getOptionLabel={(option) => option.name || ""}
          id="combo-box-demo"
          options={favouriteBarberShops}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="آرایشگاه" />}
        />
      </Col>
      <Col md={6}></Col>
    </Row>
  );
  let regularForm = <h3>sdssf</h3>;

  return (
    <Box sx={{ width: "100%" }} className="defaultContainer">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>&nbsp;&nbsp;{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            درخواست شما به آرایشگر فرستاده شد. پس از تایید ایشان نوبت شما در
            سامانه ثبت خواهد شد
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>شروع مجدد</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Row className="defaultContainer">
              <FormControlLabel
                control={
                  <Switch
                    checked={favourite}
                    onChange={handleChange}
                    name="favourite"
                  />
                }
                label="انتخاب از بین آرایشگاه های موردعلاقه"
              />
              {favourite ? favouriteForm : regularForm}
            </Row>
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              مرحله قبل
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "ثبت" : "مرحله بعد"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
