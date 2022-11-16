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
  background-color: ${({ isFlipped }) => (isFlipped ? "#e3e3e3" : "white")};
  position: absolute;
  top: 2.5%;
  z-index: ${({ zIndex }) => zIndex};
  transition-duration: 2s;
  transform-origin: left;
  transform: ${({ isFlipped }) => `rotateY(${isFlipped ? "-180deg" : "0"})`};
`;

export const BookCover = styled.div`
  height: 100%;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex || -100000000};
  background-color: ${({ theme }) => theme.book.cover};
  position: absolute;
`;

export const FrontCover = styled(BookCover)`
  transition-duration: 2s;
  transform-origin: left;
  transform: ${({ isFlipped }) => `rotateY(${isFlipped ? "-180deg" : "0"})`};
  border: #1a0d01 5px solid;
`;

export const BackCover = styled(BookCover)`
  //padding-bottom: 3.5%;
  position: relative;
  top: 2.75%;
  left: -2.75%;
  background-color: ${({ isFlipped, theme }) =>
    isFlipped ? theme.book.cover : theme.book.coverClosed};
  border: #1a0d01 5px solid;
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
  width: 2rem;
  height: 100%;
  background: #673304;
  position: absolute;
  top: 0;
  left: 0;
  border: #1a0d01 5px solid;
  transform-origin: left;
  transform: rotateY(90deg) rotateX(0deg);
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
  height: 70%;
  aspect-ratio: 8.5/11;
`;

export const PageWrapper = styled.div`
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
`;
