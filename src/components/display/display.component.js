import {
  BackCover,
  Book,
  BookSide,
  ContentContainer,
  FrontCover,
  Page,
  SiteWrapper,
  Title,
  TitleWrapper,
} from "./display.styles";

import useWindowDimensions from "../window-dimensions";
import { useRef, useState } from "react";
import CanvasComponent from "../canvas/canvas.component";
import { Doc_parser } from "../../data/doc_parser";

const content = Doc_parser();

function DisplayComponent() {

  const currentPageIndex = useRef(0);

  // first item is the cover, and the rest are all pages
  const [pages, setPages] = useState([
    { isFlipped: false, id: 0, zIndex: content.length + 1 },
    ...content.map((string, i) => ({
      isFlipped: false,
      id: i + 1,
      zIndex: content.length - i - 1,
    })),
  ]);
  const [isBookTurned, setBookTurned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFlip = async (id, e = null) => {
    if (isLoading) return;
    setIsLoading(true);
    e?.stopPropagation();
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
    id === 0 && setBookTurned(!isBookTurned);
    isFlipped ? currentPageIndex.current++ : currentPageIndex.current--;
    await delay(800);
    setIsLoading(false);
  };

  const handleClose = async () => {
    if (isLoading) return;
    isBookTurned && setBookTurned(!isBookTurned);
    setIsLoading(true);
    let newPages = pages;
    for (let i = Math.abs(currentPageIndex.current) - 1; i >= 0; i--) {
      newPages = newPages.map((page) =>
        page.id === i && page.isFlipped
          ? {
            ...page,
            isFlipped: false,
            zIndex: pages.length - i,
          }
          : page
      );
      setPages(newPages);
      await delay(300);
    }

    currentPageIndex.current = 0;
    setIsLoading(false);
  };

  const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
            isBookTurned={isBookTurned}
            index={index}
            zIndex={zIndex}
            style={{
              borderBottom: index % 2 || isFlipped ? "1px solid grey" : "",
              borderRight: index % 2 || isFlipped ? "1px solid grey" : "",
            }}
            onClick={(e) => handleFlip(id, e)}
          >
            <div className="front">
              {/* <CanvasComponent
                pageCount={pages.length}
                isShown={pages[index].isFlipped}
                id={index}
                textArray={content[index]}
              /> */}
            </div>
          </Page>
        );
      });
  };

  // Title: Revenge of the Code

  return (
    <SiteWrapper id={"PAGE WRAPPER"} onClick={handleClose}>
      <TitleWrapper id={"TITLE WRAPPER"}>
        <Title id={"TITLE"}>Ethics in the Profession - Final Project</Title>
      </TitleWrapper>

      <ContentContainer id={"container"}>
        <Book id="book" isBookTurned={isBookTurned}>
          <FrontCover
            zIndex={pages.at(0).zIndex}
            isFlipped={pages.at(0).isFlipped}
            onClick={(e) => handleFlip(0, e)}
          />
          <>{paperCreation()}</>
          <BackCover isBookTurned={isBookTurned} />

          <BookSide id="side" />
        </Book>
      </ContentContainer>
    </SiteWrapper>
  );
}

export default DisplayComponent;
