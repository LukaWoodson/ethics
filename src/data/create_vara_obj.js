import Vara from "vara";

const CreateVaraOBJ = (id, textArray) => {
  console.log("CREATE_VARA");
  return new Vara(
    `#${id}`,
    "pacificoSLO.json",
    textArray.map((text) => ({
      text,
      autoAnimation: false,
      duration: 10000,
      x: 0,
      y: 0,
      fromCurrentPosition: {
        x: false,
        y: false,
      },
    })),
    { fontSize: 8 }
  );
};

export default CreateVaraOBJ;
