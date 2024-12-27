function Display({ DisplayValue }) {
  return (
    <input className="display" type="textarea" value={DisplayValue} readOnly />
  );
}

export default Display;
