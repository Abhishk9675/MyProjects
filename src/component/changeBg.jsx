import React, { useState } from 'react'

function ChangeBg() {
    const [color, setColor] = useState("olive") 
    return (
        <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>
            <div className='px-10 bg-slate-400 flex justify-between'>
                <button onClick={() => setColor("red")} className='px-5 py-2 bg-cyan-700 rounded-full text-white'>red</button>
                <button onClick={() => setColor("green")} className='px-5 py-2 bg-cyan-700 rounded-full text-white'>Green</button>
                <button onClick={() => setColor("blue")} className='px-5 py-2 bg-cyan-700 rounded-full text-white'>Blue</button>
                <button onClick={() => setColor("yellow")} className='px-5 py-2 bg-cyan-700 rounded-full text-white'>Yellow</button>
                <button onClick={() => setColor("pink")} className='px-5 py-2 bg-cyan-700 rounded-full text-white'>Pink</button>
            </div>
        </div>
    )
}

export default ChangeBg
