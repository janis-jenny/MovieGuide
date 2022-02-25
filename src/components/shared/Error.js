import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text,
} from '@chakra-ui/react';

const Error = ({ error }) => (
  <Box textAlign="center">
    <Text textAlign="center" fontSize="lg" fontWeight="bold" className="py-1">
      {error}
    </Text>
  </Box>
);

Error.defaultProps = {
  error: 'Failed to load data',
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
