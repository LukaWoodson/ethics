import styled from "styled-components";

// -------------- SITE --------------

export const SiteWrapper = styled.div`
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  background-color: darkblue;
  display: flex;
  height: 4rem;
  justify-content: center;
  box-shadow: 0 5px 7px black;
`;

export const Title = styled.div`
  color: #910d0a;
  font-size: 30pt;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

// -------------- BOOK --------------

export const BookCover = styled.div`
  height: 100%;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex || -100000000};
  background-color: ${({ theme }) => theme.book.cover};
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackCover = styled(BookCover)`
  transition-duration: 1s;
  background-color: ${({ isFlipped, theme }) =>
    isFlipped ? theme.book.cover : theme.book.coverClosed};
  border: #1a0d01 5px solid;
  top: ${({ isBookTurned }) => (isBookTurned ? "0" : "4%")};
  left: ${({ isBookTurned }) => (isBookTurned ? "0" : "-5%")};
`;

export const FrontCover = styled(BookCover)`
  transition-duration: 2s;
  transform-origin: left;
  transform: ${({ isFlipped }) => `rotateY(${isFlipped ? "-180deg" : "0"})`};
  border: #1a0d01 5px solid;
`;

export const Book = styled.div`
  transform-style: preserve-3d;
  transform: ${({ isBookTurned }) =>
    isBookTurned
      ? "rotateX(0deg)"
      : "rotateX(45deg) rotateY(0deg) rotateZ(-45deg)"};
  transition: transform 1s, left 2s;
  position: absolute;
  left: ${({ isBookTurned }) => (isBookTurned ? "30%" : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 70%;
  aspect-ratio: 8.5/11;
  box-shadow: ${({ isBookTurned }) =>
    isBookTurned
      ? "0 20px 20px 5px rgba(0, 0, 0, 0.75)"
      : "-40px 50px 20px 4px rgba(0, 0, 0, 0.75)"};
`;

export const Page = styled.div`
  background: rgb(164, 164, 164);
  background: linear-gradient(
    90deg,
    rgba(164, 164, 164, 1) 0%,
    rgba(215, 215, 215, 1) 7%,
    rgba(231, 231, 231, 1) 14%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  height: ${({ theme }) => theme.page.height};
  top: ${({ theme }) => theme.page.top};
  aspect-ratio: ${({ theme }) => theme.page.aspectRatio};
  z-index: ${({ zIndex }) => zIndex};
  padding-right: ${({ index, isBookTurned }) =>
    `${isBookTurned ? index / 20 : index / 30}%`};
  padding-bottom: ${({ index, isBookTurned }) =>
    `${isBookTurned ? index / 20 : index / 3.4}%`};
  transform-origin: left;
  transform: ${({ isFlipped }) => `rotateY(${isFlipped ? "-180deg" : "0"})`};
  transition: transform 2s, padding 1s, background-color 2s;
  border-left: 1px solid grey;

  & > * {
    opacity: ${({ isFlipped }) => (isFlipped ? "5%" : "100%")};
    transition: opacity 150ms 500ms;
  }
`;

export const BookSide = styled.div`
  width: 2rem;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.book.cover};
  border: #1a0d01 5px solid;
  transform-origin: left;
  transform: rotateY(90deg);
`;
