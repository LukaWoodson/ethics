import { useEffect, useRef, useState, memo } from "react";
import create_vara_obj from "../../data/create_vara_obj";
import { StyledCanvas } from "./canvas.styles";

const CanvasComponent = ({ pageCount, isShown, textArray, id }) => {
  const vara = useRef(null);
  const hasBeenDrawn = useRef(false);
  const ID = `element-${id}`;

  console.log("CANVAS_RERENDER");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    vara.current = create_vara_obj(ID, [textArray]);
    setIsLoading(false);
  }, []);

  const draw = () => {
    hasBeenDrawn.current = true;
    vara.current.draw(0);
  };

  // when the page is flipped to, and is finished loading
  useEffect(() => {
    console.log({ isShown, isLoading });
    if (hasBeenDrawn.current) return;
    else if (isShown && !isLoading) draw();
  }, [isShown, isLoading]);

  return <StyledCanvas id={ID} pageCount={pageCount} isShown={isShown} />;
};

export default memo(CanvasComponent);
