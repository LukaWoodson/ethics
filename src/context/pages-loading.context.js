import { createContext, useEffect, useState } from "react";
import LoaderComponent from "../components/loader/loader.component";

export const PagesLoadingContext = createContext();

export const PagesLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const cancelLoading = () => setIsLoading(false);

  useEffect(() => {
    setTimeout(cancelLoading, 3000);
  }, []);

  return (
    <PagesLoadingContext.Provider value={{ cancelLoading, isLoading }}>
      <LoaderComponent isLoading={isLoading} />
      {children}
    </PagesLoadingContext.Provider>
  );
};
