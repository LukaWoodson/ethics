import Vara from "vara";

const CreateVaraOBJ = (id, textArray) => {
  return new Vara(
    `#${id}`,
    "pacificoSLO.json",
    textArray.map((text) => ({
      text,
      autoAnimation: false,
      duration: 5000, // ----------- good duration is 70000
      x: 0,
      y: 0,
      fromCurrentPosition: {
        x: false,
        y: false,
      },
    })),
    { fontSize: 5.5, delay: 100 } // ----------- fontSize: start at 7 , delay: start at 100
  );
};

export default CreateVaraOBJ;
