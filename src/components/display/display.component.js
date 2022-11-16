import {
  BackCover,
  Book,
  BookBottom,
  BookCover,
  BookShadow,
  BookSide,
  ContentContainer,
  FrontCover,
  Page,
  PageWrapper,
  Title,
  TitleWrapper,
} from "./display.styles";

import useWindowDimensions from "../window-dimensions";
import { useEffect, useRef, useState } from "react";
import { TestPages } from "../../data/test-pages";

function DisplayComponent() {
  const { height, width } = useWindowDimensions();

  const currentPageIndex = useRef(0);

  // first item is the cover, and the rest are all pages
  const [pages, setPages] = useState(TestPages());

  const handleFlip = (id) => {
    const { isFlipped } = pages[id];
    setPages(
      pages.map((page) =>
        page.id === id
          ? {
              ...page,
              isFlipped: !isFlipped,
              zIndex: !isFlipped ? pages.length + id : pages.length - id,
            }
          : page
      )
    );
    isFlipped ? currentPageIndex.current++ : currentPageIndex.current--;
  };

  const paperCreation = () => {
    return pages
      .filter((page) => page.id !== 0)
      .map(({ isFlipped, id, zIndex }, index) => {
        return (
          <Page
            key={`${index}page`}
            isFlipped={isFlipped}
            id={id}
            zIndex={zIndex}
            style={{
              paddingRight: `${index / 30}%`,
              paddingBottom: `${index / 10}%`,
              borderBottom: index % 2 || isFlipped ? "1px solid grey" : "",
              borderRight: index % 2 || isFlipped ? "1px solid grey" : "",
            }}
            onClick={() => handleFlip(id)}
          >
            <div className="front">{id}</div>
            <div className="back"></div>
          </Page>
        );
      });
  };

  // Title: Revenge of the Code

  return (
    <PageWrapper id={"PAGE WRAPPER"}>
      <TitleWrapper id={"TITLE WRAPPER"}>
        <Title id={"TITLE"}>Ethics in the Profession - Final Project</Title>
      </TitleWrapper>

      <ContentContainer id={"container"}>
        <Book id="book">
          <FrontCover
            zIndex={pages.at(0).zIndex}
            isFlipped={pages.at(0).isFlipped}
            onClick={() => handleFlip(0)}
          />
          <>{paperCreation()}</>
          <BookSide id="side" />
          <BackCover />
        </Book>
      </ContentContainer>
    </PageWrapper>
  );
}

export default DisplayComponent;
