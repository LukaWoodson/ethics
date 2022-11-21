import { useEffect, useRef } from "react";
import create_vara_obj from "../../data/create_vara_obj";
import { StyledCanvas } from "./canvas.styles";

const CanvasComponent = ({ pageCount, isShown, textArray, id }) => {
  const vara = useRef(null);

  const ID = `element-${id}`;

  useEffect(() => {
    vara.current = create_vara_obj(ID, textArray);
  }, []);

  useEffect(() => {
    if (isShown) {
      vara.current.draw(0);
    }
  });

  return <StyledCanvas id={ID} pageCount={pageCount} isShown={isShown} />;
};

export default CanvasComponent;
