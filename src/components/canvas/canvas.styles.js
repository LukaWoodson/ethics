import styled from "styled-components";

export const StyledCanvas = styled.div`
  position: absolute;
  height: 95%;
  width: 95%;
  z-index: ${({ pageCount }) => pageCount - 1};
  pointer-events: none;
`;
