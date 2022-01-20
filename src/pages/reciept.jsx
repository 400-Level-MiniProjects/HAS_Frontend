import React from 'react'
// import logo from '../images/logo.png'
import Logo from '../images/logo2.png'

const reciept = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="flex w-4/5 h-screen border-2 border-black m-auto">
            <div className='w-2/3 h-screen border-2 border-red-400 p-1'>
                <span className='h-fit'>
                    <span className='flex flex-col gap-y-2'>
                         <img src={Logo} alt="logo" className="w-1/8 h-1-8"/>
                         <p className='font-bold text-xl '>Edo State<br/>University Uzuaire</p>
                         <p className='font-normal text-tprimary'>Km7, Auchi-Abuja Road,<br/>Iyamho-Uzuaire Edo State, Nigeria</p>
                    </span>
                    <span className='text-tprimary font-bold flex py-1 m-auto'>
                        <p>{new Date().getDate()}</p>
                        <p className='px-1'>{months[new Date().getMonth()]}, </p>
                        <p >{new Date().getFullYear()}</p>
                    </span>
                </span>
                <span className='mt-3 flex flex-col text-base gap-y-4 border-2 border-yellow-700'>
                    <p className='font-normal text-tprimary'>Subject<br/><b className='font-exbold'>Hostel Accomodation Fees</b></p>
                    <p className='font-normal text-tprimary'>Mat Number<br/><b className='font-bold'>FSC/CSC/01801029</b></p>
                    <p className='font-normal text-tprimary'>Session<br/><b className='font-bold'>2021/2022</b></p>
                    <p className='font-normal text-tprimary'>Department<br/><b className='font-bold'>Computer Science and Mathematics</b></p>
                    <p className='font-normal text-tprimary'>Level<br/><b className='font-bold'>400 Level</b></p>
                    <p className='font-normal text-tprimary'>Payment Details<br/>
                        <b className='font-normal text-tprimary'>Edsu-email</b>: 
                            <b className='font-bold'>oghenekaro18.emmanuella@edouniversity.edu.ng</b>
                        <br/>
                        <b className='font-normal text-tprimary'>Payment Method:
                            <b>Remita</b>
                        </b>
                    </p>
                </span>
            </div>

            <div className='w-1/2 h-screen border-2 border-blue-500'>
                <span className='flex justify-end flex-col'>
                    <p>Reciept</p>
                    <p>Billed to:<br/>
                    Oghenekaro Emmanuella<br/>
                    {new Date().getTime()}</p>
                </span>

            </div>
            
        </div>
    )
}

export default reciept
