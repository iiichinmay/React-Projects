import { useState } from "react";

export default function RandomColors() {
    const [color, setColor] = useState('white');

    const HexColor = () =>
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

    const RgbColor = () =>
        setColor(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`);

    return (
        <div style={
            {
                backgroundColor: color,
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }>
            <div style={
                {
                    display: 'flex',
                    gap: '10px',
                }
            }>

                <button onClick={RgbColor} style={buttonStyle}>RGB Color</button>
                <button onClick={() => (Math.random() < 0.5
                    ? HexColor()
                    : RgbColor())}
                    style={buttonStyle}>Generate Random Color</button>
                <button onClick={HexColor} style={buttonStyle}>HEX Color</button>

            </div>
        </div>
    );
}
const buttonStyle ={
    border:'2px solid black',
    borderRadius: '10px',
    padding : '5px 20px',
    cursor : 'pointer',
    fontSize : '20px'
}
