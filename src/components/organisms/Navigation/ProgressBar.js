import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Bar = styled.div`
  position: fixed;
  height: 4px;
  z-index: ${({ theme }) => theme.zIndex.level6};
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.blue};
  transform-origin: 0 50%;
  transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  transition: ${({ duration }) => `${duration}s`} cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProgressBar = ({ isActive, duration }) => (
  <Bar isActive={isActive} duration={duration / 1000} />
);

ProgressBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};

export default ProgressBar;