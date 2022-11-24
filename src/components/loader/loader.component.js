import {
  LoaderBody,
  LoaderCircle,
  LoaderContainer,
  LoaderEyes,
  LoaderHands,
  LoaderHead,
  LoaderText,
} from "./loader.styles";
const LoaderComponent = ({ isLoading }) => {
  return (
    isLoading && (
      <LoaderContainer>
        <LoaderCircle>
          <LoaderHands />
          <LoaderBody />
          <LoaderHead>
            <LoaderEyes />
          </LoaderHead>
          <LoaderText>Loading . . .</LoaderText>
        </LoaderCircle>
      </LoaderContainer>
    )
  );
};

export default LoaderComponent;
