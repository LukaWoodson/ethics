import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: darkblue;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 7px black;
`;

export const Page = styled.div`
  height: 95%;
  aspect-ratio: 8.5/11;
  background-color: lime;
  position: absolute;
  top: 2.5%;

  transition-duration: 2s;
  transform-origin: left;

  ${(props) => {
    if (props.isFlipped) {
      return `
            transform: rotateY(-180deg);
            background-color: red;
        `;
    }
  }}
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
  height: 80%;
  aspect-ratio: 8.5/11;
  outline: 2px solid blue;
`;

export const PageWrapper = styled.div`
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
`;
