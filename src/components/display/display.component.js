import {
  BackCover,
  Book,
  BookSide,
  ContentContainer,
  FrontCover,
  Page,
  SiteWrapper,
} from "./display.styles";

import { useContext, useRef, useState } from "react";
import CanvasComponent from "../canvas/canvas.component";
import { Doc_parser } from "../../data/doc_parser";
import { PagesLoadingContext } from "../../context/pages-loading.context";

const content = Doc_parser();
const BOOK_COVER_ID = 0;

function DisplayComponent() {
  const currentPageIndex = useRef(0);

  // first item is the cover, and the rest are all pages
  const [pages, setPages] = useState([
    { isFlipped: false, id: 0, zIndex: content.length },
    ...content.map((string, i) => ({
      isFlipped: false,
      id: i + 1,
      zIndex: content.length - i - 1,
    })),
  ]);
  const [isBookTurned, setBookTurned] = useState(false);

  const _isLoading = useRef(false);
  const { isLoading: arePagesLoading } = useContext(PagesLoadingContext);

  const handleFlip = async (id, e = null) => {
    if (
      _isLoading.current ||
      arePagesLoading ||
      (id !== currentPageIndex.current && id !== currentPageIndex.current - 1)
    )
      return;
    _isLoading.current = true;
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
    isFlipped ? currentPageIndex.current-- : currentPageIndex.current++;
    await delay(800);
    _isLoading.current = false;
  };

  const handleClose = async (e) => {
    if (_isLoading.current || arePagesLoading) return;
    isBookTurned && setBookTurned(!isBookTurned);
    _isLoading.current = true;
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
    _isLoading.current = false;
  };

  const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // Title: Revenge of the Code

  return (
    <SiteWrapper id={"PAGE WRAPPER"}>
      <ContentContainer id={"container"} onClick={handleClose}>
        <Book id="book" isBookTurned={isBookTurned}>
          <BookSide id="side" />

          <FrontCover
            zIndex={pages.at(BOOK_COVER_ID).zIndex}
            isFlipped={pages.at(BOOK_COVER_ID).isFlipped}
            onClick={(e) => handleFlip(BOOK_COVER_ID, e)}
            key={`${BOOK_COVER_ID}-page`}
          >
            <h1
              style={{
                fontSize: "58pt",
                textShadow: "2px 2px 3px #9b1b1b80",
                color: "#2a00007a",
                marginTop: "8rem",
              }}
            >
              Revenge of the Code
            </h1>
            <h2
              style={{
                fontSize: "32pt",
                color: "#2a00008f",
                textShadow: "2px 2px 3px #9b1b1b80",
                marginTop: "2rem",
              }}
            >
              An Attempted Sabotage
            </h2>
          </FrontCover>
          {pages
            .filter((page) => page.id !== BOOK_COVER_ID)
            .map(({ isFlipped, id, zIndex }, index) => {
              return (
                <Page
                  key={`${id}-page`}
                  isFlipped={isFlipped}
                  id={id}
                  isBookTurned={isBookTurned}
                  index={index}
                  zIndex={zIndex}
                  isShown={pages[index].isFlipped}
                  style={{
                    borderBottom:
                      index % 2 || isFlipped ? "1px solid grey" : "",
                    borderRight: index % 2 || isFlipped ? "1px solid grey" : "",
                  }}
                  onClick={(e) => handleFlip(id, e)}
                >
                  <div className="front">
                    <CanvasComponent
                      pageCount={pages.length}
                      isShown={pages[index].isFlipped}
                      id={index}
                      textArray={content[index]}
                    />
                  </div>
                </Page>
              );
            })}
          <BackCover isBookTurned={isBookTurned} />
        </Book>
      </ContentContainer>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw" }}>
        <a
          href="https://github.com/LukaWoodson/ethics"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </SiteWrapper>
  );
}

export default DisplayComponent;
