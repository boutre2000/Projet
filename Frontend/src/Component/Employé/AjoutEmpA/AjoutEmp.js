import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import lottieJson from "./91001-success.json";
import Lottie from "react-lottie-player";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik, Form } from "formik";
import IdentitéForm from "./Forms/IdentitéForm";
import EtatForm from "./Forms/EtatCivilForm";
import CordonnéeBancaireForm from "./Forms/CordonnéeBancaireForm";
import ContactForm from "./Forms/ContactForm";
import CompteForm, { Roles } from "./Forms/CompteForm";
import CheckOutSuccess from "./CheckOutSuccess";
import CheckOutFormModel from "./FormModel/CheckOutFormModel";
import FormInitialValues from "./FormModel/FormInitialValue";
import ValidationSchema from "./FormModel/ValidationSchema";
import StepButton from "@mui/material/StepButton";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Situations } from "./Forms/EtatCivilForm";
import { useNavigate } from "react-router-dom";
// import Lottie from "react-lottie-player";

import useToken from "../../useToken";
export default function AjoutEmp() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let navigate = useNavigate();
  const ChangeRoute = () => {
    let path = `/ListEmp`;
    navigate(path);
  };
  // const style = {
  //   // position: "absolute",
  //   // top: "181px",
  //   // left: "479px",
  //   // width: "483px",
  //   // height: "355px",
  //   // transform: "translate(-50%, -50%)",
  //   // color: "var(--unnamed-color-2d3436)",
  //   // font: " normal normal medium 28px/34px Helvetica Neue",
  //   // background: "#FFFFFF 0% 0% no-repeat padding-box",
  //   // boxShadow: "0px 7px 20px #636E721A",
  //   // border: "1px solid #B2BEC3",
  //   // borderRadius: "5px",
  //   // opacity: 1,
  //   // p: 4,
  //   top: "181px",
  //   left: "479px",
  //   width: "483px",
  //   height: "355px",
  //   color: "var(--unnamed-color-2d3436)",
  //   font: " normal normal medium 28px/34px Helvetica Neue",
  // };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { formId, formField } = CheckOutFormModel;
  const { token, setToken } = useToken();
  const user = token.token;
  let config = {
    headers: {
      Authorization: "Bearer " + user,
    },
  };
  const notify = () => toast("Ajout Emp avec succès!");

  const onSubmit = (values) => (event) => {
    event.preventDefault();
    const situationFamiliale = Situations.filter(
      (curr) => curr.value === values.situationFamiliale
    );

    const Role = Roles.filter((curr) => curr.value === values.role);
    const body = {
      ...values,
      situationFamiliale: situationFamiliale[0]?.label,
      role: Role[0]?.label,
    };
    axios
      .post("http://localhost:4000/AjoutEmp/ajout", body, config)
      .then((e) => {
        toast.success("Add Employe with success ");
      })
      .catch((e) => {
        toast.error("Add Employe with error");
      });
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = [
    "Identité",
    "Etat Civile",
    "Cordonnées Bancaires",
    "Contact",
    "Compte",
  ];
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  const style = {
    // position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function _renderStepContent(step, props) {
    switch (step) {
      case 0:
        return <IdentitéForm formField={formField} formik={props} />;
      case 1:
        return <EtatForm formField={formField} />;
      case 2:
        return <CordonnéeBancaireForm formField={formField} />;
      case 3:
        return <ContactForm formField={formField} />;
      case 4:
        return <CompteForm formField={formField} />;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <div className="body">
      <div className="home">
        <div className="cont">
          <h1>Ajouter un employé</h1>
          <Box sx={{ width: "80%" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              className="RETOUR"
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              RETOUR
            </Button>
            <Button className="CONTINUE" onClick={handleNext} sx={{ mr: 1 }}>
              CONTINUE
            </Button>
            {/* <Button className="CONTINUE" variant="outlined" onClick={handleNext}>
            {" "}
            CONTINUE
          </Button> */}

            <Stepper className="Stepper" nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <div>
              {allStepsCompleted() ? (
                <React.Fragment>
                  {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box> */}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    Step {activeStep + 1}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    {/* <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    RETOUR
                  </Button> */}
                    {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                    CONTINUE
                  </Button> */}
                    <Box sx={{ flex: "1 1 auto" }} />
                    <React.Fragment>
                      {activeStep === steps.length ? (
                        <CheckOutSuccess />
                      ) : (
                        <Formik
                          initialValues={FormInitialValues}
                          validationSchema={ValidationSchema}
                          onSubmit={_handleSubmit}
                          className="fields"
                        >
                          {(props) => {
                            return (
                              <Form
                                id={formId}
                                onSubmit={onSubmit(props.values)}
                              >
                                {_renderStepContent(activeStep, props)}
                                {activeStep === 4 && (
                                  <Stack direction="row" spacing={2}>
                                    <Button
                                      type="submit"
                                      variant="contained"
                                      color="success"
                                      onClick={notify}
                                    >
                                      CREER EMPLOYE
                                    </Button>
                                    <ToastContainer />
                                    {/* <Modal
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                      <Box sx={style}>
                                        <div className="Lottie">
                                          <Lottie
                                            loop
                                            animationData={lottieJson}
                                            play
                                            style={{ width: 99, height: 99 }}
                                          />
                                        </div>
                                        <Typography
                                          id="modal-modal-title"
                                          variant="h6"
                                          component="h2"
                                        >
                                          Ajouté avec succès{" "}
                                        </Typography>
                                        <Typography
                                          id="modal-modal-description"
                                          sx={{ mt: 2 }}
                                        >
                                          <Button onClick={ChangeRoute}>
                                            Liste des Employés
                                          </Button>
                                        </Typography>
                                      </Box>
                                    </Modal> */}
                                    {/* <Modal
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                    >
                                      <Box className="modals">
                                        <Typography
                                          id="modal-modal-title"
                                          variant="h6"
                                          component="h2"
                                          className="title"
                                        >
                                          <div className="Lottie">
                                            <Lottie
                                              loop
                                              animationData={lottieJson}
                                              play
                                              style={{ width: 99, height: 99 }}
                                            />
                                          </div>
                                          Ajouté avec succès{" "}
                                        </Typography>
                                        <Typography
                                          id="modal-modal-description"
                                          sx={{ mt: 2 }}
                                          className="paragraph"
                                        >
                                          Vous avez ajoutés un nouveau employé à
                                          la liste des employés
                                        </Typography>
                                        <Button
                                          variant="contained"
                                          onClick={ChangeRoute}
                                        >
                                          Liste des Employés
                                        </Button>
                                      </Box>
                                    </Modal> */}
                                  </Stack>
                                )}
                                <div>
                                  {props.dirtyisSubmitting && (
                                    <CircularProgress size={24} />
                                  )}
                                </div>
                              </Form>
                            );
                          }}
                        </Formik>
                      )}
                    </React.Fragment>
                    {/* {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      
                    ))} */}
                  </Box>
                </React.Fragment>
              )}
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
