import {
  Book,
  BookBottom,
  BookShadow,
  BookSide,
  ContentContainer,
  PageWrapper,
  Title,
  TitleWrapper,
} from "./display.styles";

import useWindowDimensions from "../window-dimensions";

function DisplayComponent() {
  const { height, width } = useWindowDimensions();

  return (
    <PageWrapper id={"PAGE WRAPPER"}>
      <TitleWrapper id={"TITLE WRAPPER"}>
        <Title id={"TITLE"}>Ethics in the Profession - Final Project</Title>
      </TitleWrapper>

      <ContentContainer id={"container"}>
        <Book id="book">
          <div id="first paper">
            <div id="page front contents">
              <div id="intro">
                <h2>Revenge of the</h2>

                <h1>CODE</h1>
              </div>
            </div>

            <div id="page back"></div>
          </div>

          <BookSide id="side"></BookSide>

          <BookBottom id="bottom"></BookBottom>

          <BookShadow id="shadow"></BookShadow>
        </Book>
      </ContentContainer>
    </PageWrapper>
  );
}

export default DisplayComponent;

/*
*
<div id="container">
  <div class="book">
  *
    <div class="first paper">
      <div class="page front contents">
        <div class="intro">
          <h2>DIARY</h2>
          <h1>2019</h1>
        </div>
      </div>
      <div class="page back"></div>
    </div>
    <div class="second paper">
      <div class="page front contents">
        <div id="vara-container"></div>
      </div>
      <div class="page back"></div>
    </div>
    <div class="third paper">
      <div class="page front contents">
        <div id="vara-container2"></div>
      </div>
      <div class="page back"></div>
    </div>
    <div class="fourth paper">
      <div class="page last front contents">
        <div id="vara-container3"></div>
      </div>
      <div class="page back"></div>
    </div>
    <div class="side"></div>
    <div class="bottom"></div>
    <div class="shadow"></div>

  </div>
</div>
*
*
*
* */
