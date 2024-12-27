function Buttons() {
  const ButtonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {ButtonsName.map((buttonsName) => (
        <button className="buttons">{buttonsName}</button>
      ))}
    </>
  );
}

export default Buttons;
