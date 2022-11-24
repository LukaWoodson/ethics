import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  background-color: rgb(39, 39, 39);
`;

export const LoaderCircle = styled.div`
  background-color: grey;
`;

export const LoaderHands = styled.div`
  background-color: lightcoral;
`;

export const LoaderBody = styled.div`
  background-color: darkturquoise;
`;

export const LoaderHead = styled.div`
  background-color: crimson;
`;

export const LoaderEyes = styled.div`
  background-color: darkgreen;
`;

export const LoaderText = styled.div`
  color: white;
`;
