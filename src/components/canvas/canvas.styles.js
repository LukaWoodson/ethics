import styled from "styled-components";

export const StyledCanvas = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ isFlipped }) => (isFlipped ? "orange" : "teal")};
  z-index: ${({ pageCount }) => pageCount - 1};
  pointer-events: none;
`;
