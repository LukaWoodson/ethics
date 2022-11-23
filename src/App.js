import DisplayComponent from "./components/display/display.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./_theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        {/*<div id="random"></div>*/}
        <DisplayComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
