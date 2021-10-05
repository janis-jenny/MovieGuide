import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => <div className="d-flex justify-content-center py-4"><span className="text-danger fs-3">{error}</span></div>;

Error.defaultProps = {
  error: 'Failed to load data',
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
