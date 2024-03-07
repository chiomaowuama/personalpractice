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

       <form action="" noValidate onClick={handleSubmit(alldetails)}  className=' px-2 pb-8 bg-green-800 w-4/6 lg:w-3/6 self-center text-white'>
            <h1 className='text-2xl text-wrap font-serif font-semibold uppercase text-center text-white py-3'>my own form</h1>
            <div className='flex flex-col space-y-3 mb-2'>
                <label htmlFor="">FirstName</label>
                <input type="text" id="firstname" {...register('firstname', {required:"firstname is required"})} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
                <p className='text-xs font-bold text-red-950'>{errors.firstname?.message}</p>
              
            </div> 
            <div className='flex flex-col space-y-3  mb-2'>
                <label htmlFor="">SecondName</label>
 
                <input type="text"  {...register('secondname', {required:"secondname is required"})}   className=' text-black border  w-4/5 lg:w-2/5'/>
                <p className='text-xs font-bold text-red-950'>{errors.secondname?.message}</p>
            </div>
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">Email</label>
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
                })} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
                <p className='text-xs font-bold text-red-950'>{errors.email?.message}</p>
            </div>
           
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">PhoneNo</label>
                <input type="tel" id="phone" {...register('phone', {required:"phonenumber is required"})} className=' text-black border border-dashed border-gray-400 w-4/5 lg:w-2/5' />
                <p className='text-xs font-bold text-red-950'>{errors.phone?.message}</p>
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