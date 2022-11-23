import Vara from "vara";

const CreateVaraOBJ = async (id, textArray) => {
  console.log("CREATE_VARA");
  return new Promise((resolve) => {
    const vara = new Vara(
      `#${id}`,
      "pacificoSLO.json",
      textArray.map((text) => ({
        text,
        autoAnimation: false,
        duration: 70000, // ----------- good speed is 70000
        x: 0,
        y: 0,
        fromCurrentPosition: {
          x: false,
          y: false,
        },
      })),
      {
        fontSize: 8,
        delay: 100, // ------------ good delay is 100
      }
    );
    vara.ready(() => {
      resolve(vara);
    });
  });
};

export default CreateVaraOBJ;
