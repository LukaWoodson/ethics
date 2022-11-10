import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
`;

export const TitleWrapper = styled.div`
  background-color: darkblue;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 7px black;
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

export const BookShadow = styled.div`
  background: transparent;
  transform: translateZ(-3em);
  box-shadow: -1em 1em 0 0 #ccc3a9;
  z-index: 1;
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
  width: 30em;
  height: 40em;
`;

export const Paper = styled.div`
  transition: transform 1s, box-shadow 0.5s 0.2s;
  transform-origin: 0 50%;
  transform-style: preserve-3d;
`;

/*


html,
    body {
    height: 100%;
}

body {
    background: #fff4d3;
    text-align: center;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
    font-size: 16px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container {
    width: 60%;
    margin: 20px auto;
}

.v-center {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0;
}

#container {
    display: inline-block;
    vertical-align: middle;
}

.book {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg);
    transition: transform 1s;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 10%;
    margin: auto;
    width: 30em;
    height: 40em;
}

.book .side {
    width: 3em;
    height: 40em;
    background: #b36060;
    position: absolute;
    left: -3em;
    top: 0;
    transform-origin: 100% 100%;
    transform: rotateY(-90deg) rotateX(0deg);
}

.book .bottom {
    width: 25em;
    height: 3em;
    background: #e2e2e2;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: 100% 100%;
    transform: rotateX(90deg);
}

.book.open {
    transform: rotateX(35deg) rotateY(0deg) rotateZ(-35deg);
}

.book .paper,
.book .shadow {
    width: 25em;
    height: 40em;
    position: absolute;
    top: 0;
    left: 0;
}

.book .shadow {
    background: transparent;
    transform: translateZ(-3em);
    box-shadow: -1em 1em 0px 0px #ccc3a9;
    z-index: 1;
}

.book .paper {
    transition: transform 1s, box-shadow 0.5s 0.2s;
    transform-origin: 0 50%;
    transform-style: preserve-3d;
}

.book .paper.open {
    box-shadow: 2.2em 1em 0px 0px #ccc3a9;
    transform: rotateX(0deg) rotateY(-180deg) rotateZ(0deg);
}

.book .paper .page.front {
    transition: transform 1s;
    transform-origin: 0 50%;
    backface-visibility: hidden;
    z-index: 2;
}

.book .page {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transform: translateZ(0px);
    transform: translateZ(0px);
}

.book .first .page {
    background: #ef9a9a;
}

.book .first .page.front:after {
    position: absolute;
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(160, 115, 115, 0.1);
}

.book .paper .back {
    transition: transform 1s;
    transform-origin: 0 50%;
    background: #e1e1e1;
}

.book .first.paper .back {
    background: #ef9a9a;
}

.book .intro {
    position: absolute;
    width: 90%;
    width: calc(100% - 3em);
    height: 90%;
    height: calc(100% - 3em);
    border: 2em solid #eee;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.book .intro h2 {
    padding: 0.5em 0.5em;
    font-size: 2em;
    color: #fff;
    word-break: break-all;
    text-align: left;
    letter-spacing: 5px;
}

.book .intro h1 {
    padding: 0.5em 0.25em;
    font-size: 6em;
    color: #fff;
    word-break: break-all;
}

.book .paper:not(.first) .page {
    background: #f1f1f1;
    background-image: linear-gradient(
        90deg,
        transparent 40px,
        #abced4 40px,
        #abced4 42px,
        transparent 42px
),
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
    background-size: 100% 1.5em;
}

.book .paper:not(.first) .back {
    background: #e1e1e1;
}

.book .open.second .back {
    transform: translateZ(-1px);
}

.book .open.third .back {
    transform: translateZ(-2px);
}

.book .paper.first {
    z-index: 8;
}

.book .paper.second {
    z-index: 7;
}

.book .paper.third {
    z-index: 6;
}

.book .paper.fourth {
    z-index: 5;
}

.book .paper.first .front {
    transform: translateZ(0.4px);
}

.book .paper.second .front {
    transform: translateZ(0.3px);
}

.book .paper.third .front {
    transform: translateZ(0.2px);
}

.book .paper.fourth .front {
    transform: translateZ(0.1px);
}

.book .second-page #vara-container {
    width: 100%;
    height: 100%;
    padding: 1em;
}

#link {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #615858;
    letter-spacing: 2px;
    text-decoration: none;
}

@media (max-width: 700px) {
.book {
        left: 50%;
    }
}


*/
