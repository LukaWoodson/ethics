import DisplayComponent from "./components/display/display.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./_theme";
import { PagesLoadingProvider } from "./context/pages-loading.context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PagesLoadingProvider>
        <div id="App">
          <DisplayComponent />
        </div>
      </PagesLoadingProvider>
    </ThemeProvider>
  );
}

export default App;
