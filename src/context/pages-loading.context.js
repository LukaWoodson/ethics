import { createContext, useState } from "react";
import LoaderComponent from "../components/loader/loader.component";

export const PagesLoadingContext = createContext();

export const PagesLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const cancelLoading = () => setIsLoading(false);

  return (
    <PagesLoadingContext.Provider value={{ cancelLoading, isLoading }}>
      {/*<LoaderComponent isLoading={isLoading} />*/}
      <LoaderComponent isLoading={true} />
      {children}
    </PagesLoadingContext.Provider>
  );
};
