import { StyledLoader } from "./loader.styles";
const LoaderComponent = ({ isLoading }) => {

    return isLoading && <StyledLoader>isLoading...</StyledLoader>
}

export default LoaderComponent;