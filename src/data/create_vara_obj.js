import Vara from "vara";

const CreateVaraOBJ = (id, textArray) => {
  const height = window.innerHeight;
  let fontSize = (6 / 1080) * height;

  return new Vara(
    `#${id}`,
    "pacificoSLO.json",
    textArray.map((text) => ({
      text,
      autoAnimation: false,
      duration: text.length * 100, // ----------- good duration is text.length * 100
      x: 0,
      y: 0,
      fromCurrentPosition: {
        x: false,
        y: false,
      },
    })),
    { fontSize, delay: 100 } // ----------- fontSize: start at 7 , delay: start at 100
  );
};

export default CreateVaraOBJ;
