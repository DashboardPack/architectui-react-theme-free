import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LogoWrapper = styled.div`
  width: 50%;
  display: inline-block;
  max-width: 430px;
  margin-top: 2rem;
`;

export default function Logo({ iso = true, ...props }) {
  return (
    <LogoWrapper {...props}>
      <div data-tut="reactour__logo">First Paragraph</div>
      {iso && <div data-tut="reactour__iso">Second Paragraph</div>}
    </LogoWrapper>
  );
}

Logo.propTypes = {
  iso: PropTypes.bool,
};
