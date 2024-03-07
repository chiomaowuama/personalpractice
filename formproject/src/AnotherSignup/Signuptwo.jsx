import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool} from '@hookform/devtools'

function Signuptwo() {
    const form = useForm({
        defaultValues:{
            firstname:"",
            secondname:"",
            email:"",
            phone:""
        }
    })
    const {register, control,handleSubmit, formState} = form
    const {errors} = formState

    const alldetails = (data) =>{
        // e.preventDefault()
        console.log('helo', data)
    }
   
  return (
    <>
    <div className='allbg  h-lvh flex justify-center'>

       <form action="" noValidate onClick={handleSubmit(alldetails)}  className=' px-2 pb-8 bg-green-800 border-2 border-green-950 rounded-3xl w-4/6 lg:w-2/6 self-center text-white'>
            <h1 className='text-2xl text-wrap font-serif font-semibold uppercase text-center text-white py-3'>my own form</h1>
            <div className='flex flex-col w-5/6 mx-auto  space-y-4 mb-2  '>
                <label htmlFor="" className=' text-xl font-mono font-semibold'>FirstName</label>
                <input type="text" id="firstname" {...register('firstname', {required:"firstname is required"})} className='border border-green-900 text-black outline-none w-4/5 lg:w-full rounded-2xl pl-4' />
                <p className='text-xs font-bold text-red-950'>{errors.firstname?.message}</p>
              
            </div> 
            <div className='flex flex-col  w-5/6 mx-auto  space-y-3  mb-2'>
                <label htmlFor="" className=' text-xl font-mono font-semibold'>SecondName</label>
 
                <input type="text"  {...register('secondname', {required:"secondname is required"})}   className='border border-green-900 text-black outline-none w-4/5 lg:w-full rounded-2xl pl-4'/>
                <p className='text-xs font-bold text-red-950'>{errors.secondname?.message}</p>
            </div>
            <div className='flex flex-col  w-5/6 mx-auto  space-y-2  mb-2'>
                <label htmlFor="" className=' text-xl font-mono font-semibold'>Email</label>
                <input type="email" id="email" {...register('email', {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                      },
                      validate:{
                        notvalid:(data) => {
                            return(data !== "admin@example.com"  || "enter a different email")
                        },
                        blacklisting:(data) => {
                            return(!data.endsWith("baddomain.com") || "This domain is not allowed ")
                        }
                      },

                      
                    required:"email must be filled"
                })} className='border border-green-900 text-black outline-none w-4/5 lg:w-full rounded-2xl pl-4'/>
                <p className='text-xs font-bold text-red-950'>{errors.email?.message}</p>
            </div>
           
            <div className='flex flex-col  w-5/6 mx-auto  space-y-2  mb-2'>
                <label htmlFor="" className=' text-xl font-mono font-semibold'>PhoneNo</label>
                <input type="tel" id="phone"  {...register('phone', {
                    validate:{
                        telvalidate: (data) =>{
                            return /^[0-9]+$/.test(data) || 'Must be a number'
                        }
                    },
                    maxLength:{
                        value:11,
                        message: "number must not exceed 11"
                    },
                    minLength:{
                        value:11,
                        message:"number must not be lower than 11"
                    },
                    valueAsNumber: true,
                    required:"phonenumber is required"})} className='border border-green-900 text-black outline-none w-4/5 lg:w-full rounded-2xl pl-4' />
                <p className='text-xs font-bold text-red-950'>{errors.phone?.message}</p>
            </div>
            <div className='border-2 border-green-900  '>
                <button type="button" className='border-white border-2 bg-green-800   rounded-md  w-4/5 lg:w-4/5 mx-auto'> submit</button>
            </div>
       
       </form>
       
    </div>
    <DevTool control={control} />
    </>
  )
}

export default Signuptwo