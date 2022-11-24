import "./loader.styles.css";
import styled from "styled-components";

const LoaderContainer = styled.div`
  background-color: #111111;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    transform: scale(150%);
  }
`;

const LoaderComponent = ({ isLoading }) => {
  return (
    isLoading && (
      <LoaderContainer>
        <div className="circ">
          <div className="hands" />
          <div className="body" />
          <div className="head">
            <div className="eye"></div>
          </div>
        </div>
        <div className="load">Loading...</div>
      </LoaderContainer>
    )
  );
};

export default LoaderComponent;
