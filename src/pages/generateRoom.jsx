import React from 'react'
import GenerateRoomImg from '../images/Rectangle 20.png'

const generateRoom = () => {
    return (
        <div className="flex w-4/5 m-auto h-screen">
            <div className="w-1/2 flex flex-col justify-center gap-16">
                <span className='w-11/12 flex flex-col justify-space-between m-auto gap-14'>
                    <h1 className="text-tprimary text-4xl font-bold">Generate Room</h1>
                    <input placeholder='Transaction ID' className="text-black px-2 py-4 font-semibold border border-grey w-11/12 rounded-lg"/>
                    <button className="bg-bprimary w-11/12 text-white p-2 rounded-lg py-4">Continue</button>
                </span>
            </div>
            <div className="flex justify-center w-1/2">
                <img src={GenerateRoomImg} className="w-11/12 h-9/12" alt="reg"/>
            </div>
            
        </div>
    )
}

export default generateRoom
