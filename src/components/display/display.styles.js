import styled from "styled-components";
import CoverURL from "../../assets/leather_texture.jpg";
import PaperURL from "../../assets/paper.jpg";

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
  background-color: #5f4b3b;
  background-image: url(${CoverURL});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  border: #1a0d01 2px solid;
`;

export const BackCover = styled(BookCover)`
  transition-duration: 1s;
  background-color: ${({ isFlipped, theme }) =>
    isFlipped ? theme.book.cover : theme.book.coverClosed};
  top: 0;
  left: 0;
  transform: translateZ(-8vh);
  box-shadow: ${({ isBookTurned }) =>
    isBookTurned
      ? "0 20px 20px 5px rgba(0, 0, 0, 0.75)"
      : "-12px 10px 16px 3px rgb(0 0 0 / 75%)"};
`;

export const FrontCover = styled(BookCover)`
  transition-duration: 2s;
  transform-origin: left;
  transform: ${({ isFlipped }) =>
    `rotateY(${isFlipped ? "-180deg" : "0"}) translateZ(1px)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ isFlipped }) =>
    isFlipped ? "0 10px 20px 5px rgba(0, 0, 0, 0.75)" : ""};

  & > * {
    font-family: "La Belle Aurore", cursive;
    opacity: ${({ isFlipped }) => (isFlipped ? "10%" : "100%")};
    transition: opacity 150ms 500ms;
    pointer-events: none;
    user-select: none;
  }
`;

export const Book = styled.div`
  transform-style: preserve-3d;
  transform: ${({ isBookTurned }) =>
    isBookTurned
      ? "rotateX(0deg) translateX(50%)"
      : "rotateX(45deg) rotateY(0deg) rotateZ(-45deg)"};
  transition: transform 1s, left 2s;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 70%;
  aspect-ratio: 8.5/11;
`;

const getTranslateZ = (isBookTurned, index, theme, isShown) => {
  // translateZ(${isBookTurned ? -(index + 1) : -index * theme.page.zTranslateScalar}px)
  if (isBookTurned) {
    return `translateZ(${isShown ? 1 : -index}px)`;
  } else {
    // offset the pages when book is closed
    return `translateZ(${-index * theme.page.zTranslateScalar}px)`;
  }
};

export const Page = styled.div`
  background-color: #f3e4ba;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.22) 0%,
      rgba(120, 120, 120, 0.1) 9%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${PaperURL});
  background-size: cover;
  position: absolute;
  height: ${({ theme }) => theme.page.height};
  top: ${({ theme }) => theme.page.top};
  aspect-ratio: ${({ theme }) => theme.page.aspectRatio};
  z-index: ${({ zIndex }) => zIndex};

  transform-origin: left;
  transform: ${({ isFlipped, index, theme, isBookTurned, isShown }) =>
    `rotateY(${isFlipped ? "-180deg" : "0"}) ${getTranslateZ(
      isBookTurned,
      index,
      theme,
      isShown
    )} translateY(${index / 20}vh)`};
  transition: transform 2s, padding 1s, background-color 2s, z-index 0s 100ms;
  border-left: 1px solid grey;

  & > * {
    opacity: ${({ isFlipped }) => (isFlipped ? "10%" : "100%")};
    transition: opacity 150ms 500ms;
  }
`;

export const BookSide = styled.div`
  width: 7vh;
  height: calc(100% - 8px);
  position: relative;
  top: 0;
  left: 0;
  background-color: #5f4b3b;
  background-image: url(${CoverURL});
  background-size: cover;
  border: #1a0d01 5px solid;
  transform-origin: left;
  transform: rotateY(90deg);
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: justify;
  padding: 3vh;
  font-family: "Homemade Apple", cursive;
  font-size: 1.75vh;
  user-select: none;
`;
