import { useState } from "react";

type Props = {
  dropPin: any;
  savePin: any;
};

const Navbar = (props: Props) => {
  const [pinActive, setPinActive] = useState(false);

  const handleDropPin = () => {
    setPinActive(true);
    props.dropPin()
  };
  const handleSavePin = () => {
    setPinActive(false);
    props.savePin()
  };

  return (
    <div className="w-full flex justify-between items-center p-3 bg-blue-400">
      <h1 className="font-bold text-3xl text-white">Heat-Map</h1>
      <div className="flex gap-3">
        <button className="bg-white px-3 py-2 rounded-lg font-semibold shadow-md">
          Cafe☕
        </button>
        <button className="bg-white px-3 py-2 rounded-lg font-semibold shadow-md">
          Tourist🧳
        </button>
        <button className="bg-white px-3 py-2 rounded-lg font-semibold shadow-md">
          Fun🤡
        </button>
        <button className="bg-white px-3 py-2 rounded-lg font-semibold shadow-md">
          Party🍺
        </button>
        {pinActive ? (
          <button
            onClick={handleSavePin}
            className="bg-white text-black px-3 py-2 rounded-lg font-semibold shadow-md"
          >
            Save Pin📍
          </button>
        ) : (
          <button
            onClick={handleDropPin}
            className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold shadow-md"
          >
            Add Pin📍
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
