import { useState } from "react";

export default function RandomColors() {
    const [color, setColor] = useState('white');

    const HexColor = () =>
        setColor(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

    const RgbColor = () =>
        setColor(() => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);

    return (
        <div style={{ backgroundColor: color }} className="h-screen w-screen flex justify-center items-center">
            <div className="flex gap-2">
                <button onClick={RgbColor} className={buttonStyle}>RGB Color</button>
                <button
                    onClick={() => (Math.random() < 0.5 ? HexColor() : RgbColor())}
                    className={buttonStyle}
                >
                    Generate Random Color
                </button>
                <button onClick={HexColor} className={buttonStyle}>HEX Color</button>
            </div>
        </div>
    );
}


const buttonStyle = "border-2 border-black rounded-lg py-2 px-4 cursor-pointer text-lg hover:bg-gray-200 transition duration-200";
