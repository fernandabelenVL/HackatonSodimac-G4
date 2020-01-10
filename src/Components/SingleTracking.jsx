import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SatisfactionClients from "./SatisfactionClients"

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
      case 1:
         return "Compra confirmada";
      case 2:
         return "Nathaly se ha preparado tu orden, estamos gestionando el despacho";
      case 3:
         return "Tu pedido está listo para ser despachado";
      case 4:
         return "¡Tus productos están en ruta hacia la dirección de despacho! Serán entregados por el camión de patente AFNA10 y llegará en unos pocos minutos.";
      case 5:
         return "Despacho entregado, Por favor evalúa nuestro servicios";
      case 6:
         return "Gracias por preferirnos";

      default:
         return "Gracias por preferirnos";
   }
}

function sendMessage(message) {
   let messageJSON = {
           to: '+56975138673',
           body: message
         }
   fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageJSON)
    })
   .then(res => res.json())
}
export default function CustomizedSteppers() {
   const classes = useStyles();
   const [activeStep, setActiveStep] = React.useState(1);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      sendMessage(getStepContent(activeStep));
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <div className="tracking-desktop" >
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
                     <SatisfactionClients/> 

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
