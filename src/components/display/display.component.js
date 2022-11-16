import {
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

function DisplayComponent() {
  const { height, width } = useWindowDimensions();

  const currentPageIndex = useRef(0);

  // first item is the cover, and the rest are all pages
  const [pages, setPages] = useState([
    { isFlipped: false, id: 0, zIndex: 6 },
    { isFlipped: false, id: 1, zIndex: 5 },
    { isFlipped: false, id: 2, zIndex: 4 },
    { isFlipped: false, id: 3, zIndex: 3 },
    { isFlipped: false, id: 4, zIndex: 2 },
    { isFlipped: false, id: 5, zIndex: 1 },
  ]);

  useEffect(() => {
    pages.forEach((page) => console.log(page.zIndex));
    console.log("----------------");
  }, [pages]);

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
          {paperCreation()}
          <BookCover />
          <BookSide id="side"></BookSide>

          <BookBottom id="bottom"></BookBottom>

          {/*<BookShadow id="shadow"></BookShadow>*/}
        </Book>
      </ContentContainer>
    </PageWrapper>
  );
}

export default DisplayComponent;
