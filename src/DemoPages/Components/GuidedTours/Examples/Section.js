import styled from "styled-components";

export default styled.section`
  padding: 1em;
  text-align: ${(props) =>
    props.center ? "center" : props.align ? props.align : "left"};
`;
