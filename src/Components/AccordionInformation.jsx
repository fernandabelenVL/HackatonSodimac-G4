import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-info">

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Datos de Envío</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className="bold-title">Nombre: <span className="normal-text">Nataly Riquelme</span></p>
              <p className="bold-title">Email: <span className="normal-text">nat.riquelme@gmail.com</span></p>
              <p className="bold-title"> Dirección de Despacho:<span className="normal-text">
                  <br></br>Mariano Sánchez Fontecilla 310, Santiago, Las Condes, Región
                  Metropolitana
                </span></p>
              <p className="bold-title">
                Nombre del receptor: <span className="normal-text">Nataly Riquelme</span>
              </p>
              <p className="bold-title">
                Costo de envío: <span className="normal-text">$20.990</span>
              </p>
              <p className="bold-title">
                Observaciones de envío: <span className="normal-text">Evento Laboratoria. Favor entregar en persona.</span>
              </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Información de tu orden</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className="bold-title">Fecha de recepción:&nbsp;
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2020-01-10"
                  min="2020-01-12"
                  max="2020-12-31"
                ></input>
                <p className="text-muted">Solo puedes cambiar la fecha de entrega dos días antes de la fecha límite</p>
              </p>
              <p className="bold-title">
                Hora despacho: <span className="normal-text">9 a 22 horas</span>
              </p>
              <p className="bold-title">
                Medio de Pago: <span className="normal-text">Tarjeta bancaria</span>
              </p>
              <p className="bold-title">
                Nº de Cuotas: <span className="normal-text">1</span>
              </p>
              <p className="bold-title">
                Fecha de Pago: <span className="normal-text">28/12/2019</span>
              </p>
              <p className="bold-title">
                Total compra: <span className="normal-text">$129.990</span>
              </p>
              <p className="bold-title">
                Boleta:&nbsp;
                <a  className="normal-text" href="https://drive.google.com/file/d/1W4aIjhdHCGufua_TnfbltFjiXSZhwu69/view?usp=sharing">
                  Ver Boleta
                </a>
              </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}