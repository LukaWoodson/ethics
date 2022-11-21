import Vara from "vara";

const CreateVaraOBJ = () => {
  console.log("CreateVaraObj");
  return new Vara(
    "#element",
    "pacificoSLO.json",
    content.map((text) => ({
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
    { fontSize: 46 }
  );
};

const content = ["first", "second", "third", "fourth"];

export default CreateVaraOBJ;
