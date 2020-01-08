import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%"
   },
   button: {
      marginRight: theme.spacing(1)
   },
   instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
   }
}));

function getSteps() {
   return [
      "Orden de compra recibida",
      "Compra confirmada",
      "Preparando el despacho",
      "Listo para despacho",
      "En Ruta",
      "Entregado"
   ];
}

function getStepContent(step) {
   switch (step) {
      case 0:
         return "Tu orden a sido recibida por el sistema";
      case 1:
         return "Tu compra se encuentra en proceso de confirmación.";
      case 2:
         return "¡Tu compra ha sido confirmada! Estamos preparando tus productos para enviarlos a despacho";
      case 3:
         return "Hemos preparado tu orden, ahora estamos gestionando el despacho a tu dirección. ";
      case 4:
         return "¡Tus productos están en ruta hacia la dirección de despacho!";
      case 5:
         return "Orden en proceso de entrega";

      default:
         return "Orden de despacho finalizada";
   }
}

export default function CustomizedSteppers() {
   const classes = useStyles();
   const [activeStep, setActiveStep] = React.useState(1);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <div className={classes.root}>
      <b>Información de seguimiento</b>
         <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label) => (
               <Step key={label} onClick={handleNext}
                     
               >
      
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <div>
            {activeStep === steps.length ? (
               <div>
                  <Typography className={classes.instructions}>
                     Despacho entregado, te invitamos a realizar nuestra encuesta de satisfacción
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                     Reset
                  </Button>
               </div>
            ) 
            : (
               <div>
                  <Typography className={classes.instructions}>
                     {getStepContent(activeStep)}
                  </Typography>
                  <div>
                     <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                     >
                        Back
                     </Button>
                     <Button
                        variant='contained'
                        color='primary'
                        onClick={handleNext}
                        className={classes.button}
                     >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                     </Button>
                  </div>
               </div>
            )
            }
         </div>
      </div>
   );
}
