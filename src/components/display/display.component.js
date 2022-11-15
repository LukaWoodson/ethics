import {
  Book,
  BookBottom,
  BookShadow,
  BookSide,
  ContentContainer,
  Page,
  PageWrapper,
  Title,
  TitleWrapper,
} from "./display.styles";

import useWindowDimensions from "../window-dimensions";
import { useState } from "react";

function DisplayComponent() {
  const { height, width } = useWindowDimensions();

  const [pages, setPages] = useState([
    { isFlipped: false, id: "1" },
    { isFlipped: false, id: "2" },
    { isFlipped: false, id: "3" },
    { isFlipped: false, id: "4" },
    { isFlipped: false, id: "5" },
  ]);

  const paperCreation = () => {
    return pages.map(({ isFlipped, id }, index) => {
      return (
        <Page
          key={`${index}page`}
          isFlipped={isFlipped}
          id={id}
          onClick={() =>
            setPages(
              pages.map((page) =>
                page.id === id ? { ...page, isFlipped: true } : page
              )
            )
          }
        >
          <div className="front"></div>
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
          {paperCreation()}

          <BookSide id="side"></BookSide>

          <BookBottom id="bottom"></BookBottom>

          {/*<BookShadow id="shadow"></BookShadow>*/}
        </Book>
      </ContentContainer>
    </PageWrapper>
  );
}

export default DisplayComponent;
