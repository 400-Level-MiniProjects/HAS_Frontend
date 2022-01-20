import React from 'react'
import recieptDetails from '../components/recieptDetails'
import Logo from '../images/logo2.png'

const reciept = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="flex w-7/12 rounded-lg border border-lprimary m-auto">
            <div className='w-2/3 h-screen p-6'>
                <span className='h-fit'>
                    <span className='flex flex-col gap-y-3'>
                         <img src={Logo} alt="logo" className="w-3/12 h-1-8"/>
                         <p className='font-bold text-xl '>Edo State<br/>University Uzuaire</p>
                         <p className='font-normal text-tprimary'>Km7, Auchi-Abuja Road,<br/>Iyamho-Uzuaire Edo State, Nigeria</p>
                    </span>
                    <span className='text-tprimary font-bold flex py-1 m-auto'>
                        <p>{new Date().getDate()}</p>
                        <p className='px-1'>{months[new Date().getMonth()]}, </p>
                        <p >{new Date().getFullYear()}</p>
                    </span>
                </span>
                {recieptDetails.map(reciept =>(
                <span className='mt-6 flex flex-col text-base gap-y-6' reciept={reciept}>
                    <p className='font-normal text-tprimary'>Subject<br/><b className='font-exbold'>Hostel Accomodation Fees</b></p>
                    <p className='font-normal text-tprimary'>Mat Number<br/><b className='font-bold'>{reciept.matNO}</b></p>
                    <p className='font-normal text-tprimary'>Session<br/><b className='font-bold'>{reciept.session}</b></p>
                    <p className='font-normal text-tprimary'>Department<br/><b className='font-bold'>{reciept.department}</b></p>
                    <p className='font-normal text-tprimary'>Level<br/><b className='font-bold'>{reciept.level}</b></p>
                    <p className='font-normal text-tprimary'>Payment Details<br/>
                        <b className='font-normal text-tprimary'>Edsu-email</b>: 
                            <b className='font-bold'>{reciept.email}</b>
                        <br/>
                        <b className='font-normal text-tprimary'>Payment Method:
                            <b>{reciept.paymentMethod}</b>
                        </b>
                    </p>
                </span>
                 ))}
            </div>

            <div className='w-1/2 h-screen grid justify-items-stretch p-6 text-right '>
            {recieptDetails.map(reciept =>(
                <span className='flex flex-col justify-self-end gap-y-6 pt-10'>
                    <h1 className="text-5xl text-tprimary font-semibold">Reciept</h1>
                    <p>Billed to:<br/>
                    <b className='font-bold text-tprimary'>{reciept.name}<br/>
                    {new Date().toLocaleTimeString()}</b></p>
                </span>
              ))}

                {recieptDetails.map(reciept =>(
                <span className='mt-3 flex flex-col text-base gap-y-6 justify-self-end mt-16' reciept={reciept}>
                    <p className='font-normal text-tprimary'>Transaction ID<br/><b className='font-exbold'>{reciept.transactionId}</b></p>
                    <p className='font-normal text-tprimary'>Reference ID<br/><b className='font-bold'>{reciept.referenceId}</b></p>
                    <p className='font-normal text-tprimary'>Status<br/><b className='font-bold'>{reciept.status}</b></p>
                    <p className='font-normal text-tprimary'>Amount<br/><b className='font-bold'>{reciept.amount}</b></p>
                    <p className='font-normal text-tprimary'>Room Number<br/><b className='font-bold'>{reciept.roomNo}</b></p>
                    <b className='flex items-end'>
                        <p className='font-bold text-bprimary'>www.edouniversity.edu.ng</p>
                    </b>
                </span>
                 ))}
            </div>
            
        </div>
    )
}

export default reciept
