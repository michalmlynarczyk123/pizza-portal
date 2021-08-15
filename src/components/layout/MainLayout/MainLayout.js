import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = props => (
  <div>{props.children}</div>
);

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;