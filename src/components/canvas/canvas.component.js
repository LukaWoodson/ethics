import { useEffect, useRef, memo, useContext, useLayoutEffect } from "react";
import { PagesLoadingContext } from "../../context/pages-loading.context";
import create_vara_obj from "../../data/create_vara_obj";
import { StyledCanvas } from "./canvas.styles";

const CanvasComponent = ({ pageCount, isShown, textArray, id }) => {
  const vara = useRef(null);
  const hasBeenDrawn = useRef(false);
  const ID = `element-${id}`;
  const { cancelLoading } = useContext(PagesLoadingContext);

  useLayoutEffect(() => {
    setTimeout(() => {
      vara.current = create_vara_obj(ID, [textArray]);
      // only last page cancels the loading state
      pageCount - 2 === id && cancelLoading();
    }, 3000);
  }, []);

  const draw = () => {
    hasBeenDrawn.current = true;
    vara.current.draw(0);
  };

  // when the page is flipped to, and is finished loading
  useEffect(() => {
    if (!hasBeenDrawn.current && isShown) draw();
  }, [isShown]);

  return <StyledCanvas id={ID} pageCount={pageCount} isShown={isShown} />;
};

export default memo(CanvasComponent);
