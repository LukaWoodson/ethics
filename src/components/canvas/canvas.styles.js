import styled from "styled-components";

export const StyledCanvas = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: ${({ pageCount }) => pageCount - 1};
  pointer-events: none;
`;
