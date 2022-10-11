import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
`;

export const TitleWrapper = styled.div`
  background-color: darkblue;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 7px black;
`;

export const Title = styled.div`
  color: brown;
  font-size: 30pt;
`;

export const ContentContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  display: inline-block;
  vertical-align: middle;
`;

export const BookSide = styled.div`
  width: 3em;
  height: 40em;
  background: #b36060;
  position: absolute;
  left: -3em;
  top: 0;
  transform-origin: 100% 100%;
  transform: rotateY(-90deg) rotateX(0deg);
`;

export const BookBottom = styled.div`
  width: 25em;
  height: 3em;
  background: #e2e2e2;
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: 100% 100%;
  transform: rotateX(90deg);
`;

export const BookShadow = styled.div`
  background: transparent;
  transform: translateZ(-3em);
  box-shadow: -1em 1em 0 0 #ccc3a9;
  z-index: 1;
`;

export const Book = styled.div`
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg);
  transition: transform 1s;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 10%;
  margin: auto;
  width: 30em;
  height: 40em;
`;

export const Paper = styled.div`
  transition: transform 1s, box-shadow 0.5s 0.2s;
  transform-origin: 0 50%;
  transform-style: preserve-3d;
`;
