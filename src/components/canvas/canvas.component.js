import { useEffect, useRef } from "react";
import create_vara_obj from "../../data/create_vara_obj";
import { StyledCanvas } from "./canvas.styles";

const CanvasComponent = ({ pageCount, isFlipped }) => {
  const vara = useRef(null);

  useEffect(() => {
    vara.current = create_vara_obj();
  }, []);
  return (
    <StyledCanvas id="element" pageCount={pageCount} isFlipped={isFlipped} />
  );
};

export default CanvasComponent;
