import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    width: '50%',
    margin: '2.5% auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  cardContent: {
    width: '90%',
    margin: '0 auto',
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: '100%',
  }
});

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <TextField
          id="filled-multiline-flexible"
          multiline
          placeholder="What do you think?"
          rowsMax="4"
          className={classes.textField}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);