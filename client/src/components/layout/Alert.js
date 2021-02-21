import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
const AppAlert = ({ alerts }) => {
  console.log({ alerts });
  return (
    alerts &&
    Array.isArray(alerts) &&
    alerts.map((alert, index) => (
      <div
        style={{
          position: 'absolute',
          top: index === 0 ? '60px' : `${60 + 55 * index}px`,
          left: 0,
          right: 0
        }}
      >
        <Alert key={alert.id} variant={alert.alertType}>
          {alert.msg}
        </Alert>
      </div>
    ))
  );
};
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(AppAlert);
