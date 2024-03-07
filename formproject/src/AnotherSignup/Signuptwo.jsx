import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool} from '@hookform/devtools'

function Signuptwo() {
    const form = useForm()
    const {register, control,handleSubmit, formState} = form
    const {errors} = formState

    const alldetails = (data) =>{
        // e.preventDefault()
        console.log('helo', data)
    }
   
  return (
    <>
    <div className='allbg  h-lvh flex justify-center'>

       <form action="" noValidate onClick={handleSubmit(alldetails)}  className=' px-2 pb-8 bg-green-800 w-4/6 lg:w-3/6 self-center text-white'>
            <h1 className='text-2xl text-wrap font-serif font-semibold uppercase text-center text-white py-3'>my own form</h1>
            <div className='flex flex-col space-y-3 mb-2'>
                <label htmlFor="">FirstName</label>
                <input type="text" id="firstname" {...register('firstname', {required:"firstname is required"})} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
              
            </div> 
            <div className='flex flex-col space-y-3  mb-2'>
                <label htmlFor="">SecondName</label>
 
                <input type="text"  {...register('secondname', {required:"secondname is required"})}   className=' text-black border  w-4/5 lg:w-2/5'/>

            </div>
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" id="Email" {...register('email', {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                })} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
            </div>
           
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">PhoneNo</label>
                <input type="tel" id="tell" {...register('phone', {required:"phonenumber is required"})} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
            </div>
            <div>
                <button type="button" className='border-white border-2 bg-green-800  my-2 rounded-md w-4/5 lg:w-2/5'> submit</button>
            </div>
       
       </form>
       
    </div>
    <DevTool control={control} />
    </>
  )
}

export default Signuptwo