import { useEffect, useRef, useState } from "react";
import create_vara_obj from "../../data/create_vara_obj";
import { StyledCanvas } from "./canvas.styles";

const CanvasComponent = ({ pageCount, isShown, textArray, id }) => {
  const vara = useRef(null);
  const ID = `element-${id}`;

  const [isLoading, setIsLoading] = useState(true);

  async function hello() {
    setTimeout(() => {
      vara.current = create_vara_obj(ID, [textArray]);
      vara.current.ready(() => {
        console.log("READY");
        setIsLoading(false);
      });
    }, 0);
  }

  useEffect(() => {
    hello().then(() => {
      console.log("Thereyougo");
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log(id);
      // vara.current.draw(id);
    }
  }, [isLoading]);

  return <StyledCanvas id={ID} pageCount={pageCount} isShown={isShown} />;
};

export default CanvasComponent;
