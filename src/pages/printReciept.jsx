import React from 'react'
import print from '../images/undraw_well_done_i2wr 1.png'

function printReciept() {
    return (
        <div className="w-full h-screen">
            <div className="text-center w-full h-1/4 text-tprimary py-7 ">
                <h2 className="text-3xl py-4 font-medium md:text-3xl md:font-bold lg:text-4xl lg:font-medium leading-20 ">Congratulations, You have a room!</h2>
            </div>
            <div className="h-3/4 flex flex-col items-center justify-center py-14 gap-6 ">
                <img src={print} className="sm:w-8/12 sm:h-10/12 md:w-7/12 md:h-8/12 lg:w-5/12 h-3/12" alt="reg"/>
                <button className="w-8/12 md:8/12 bg-bprimary text-white px-2 py-4 lg:w-6/12 font-semibold rounded-lg">Print Reciept</button>
            </div>
            
        </div>
    )
}

export default printReciept