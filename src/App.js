import DisplayComponent from "./components/display/display.component";
import Vara from "vara";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./_theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/*<div id="random"></div>*/}
        <DisplayComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
