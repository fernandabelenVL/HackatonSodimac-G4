import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SatisfactionClients from "./SatisfactionClients"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
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
    return "¡Tus productos están en ruta hacia la dirección de despacho! Serán entregados por el camión de patente AFNA10 y llegará en unos pocos minutos.";
    case 5:
      return "Orden en proceso de entrega";
   default:
      return "Orden de despacho finalizada";
}
}

export default function VerticalTracker() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };


  return (
    <div className="vertical-tracking">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} onClick={handleNext}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  {/* <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> */}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Despacho entregado, te invitamos a realizar nuestra encuesta de satisfacción
          <SatisfactionClients/> 

          </Typography>
          {/* <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button> */}
        </Paper>
      )}
    </div>
  );
}