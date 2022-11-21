import Vara from "vara";

const CreateVaraOBJ = (id, textArray) => {
  return new Vara(
    `#${id}`,
    "pacificoSLO.json",
    textArray.map((text) => ({
      text,
      autoAnimation: false,
      duration: 3000,
      x: 0,
      y: 0,
      fromCurrentPosition: {
        x: false,
        y: false,
      },
    })),
    { fontSize: 20 }
  );
};

export default CreateVaraOBJ;
