import React from 'react'
import { useForm,useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
// import { Devtool } from '@hookform/devtools'

function Signup() {
    const Form = useForm({
        defaultValues:{
            username: " ",
            email:"",
            channel:"",
            social:{
                twitter:"",
                facebook:" ",
            
            }, 
            phoneNumber:["", ""],
            phNumbers:[{
            number:"",
            }],
            age: 0,
            dob: new Date()
        }
    })
    const { register, control,handleSubmit,formState} = Form
    const{ errors } = formState
    const {fields, append, remove} = useFieldArray({
        name:'phNumbers',
        control
    })

     const onSubmit = (data) =>{
        
        console.log("working", data)
     }
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col justify-center items-center border-2 border-yellow-900 h-screen '>
            <div className='flex flex-col w-4/6 lg:w-2/6 space-y-2  border-2 border-green-900 shadow-xl shadow-slate-400 p-3' >
                <p>Form Submission</p>

                {/* username */}
                <label htmlFor=''>Username</label>
                <input type='text' id='text' {...register("username", { required:"field required"})} className=' border border-black'/>
                <p className=' text-red-600 text-sm text-left'>{errors.username?.message }</p>


                {/* password  */}
                <label htmlFor="password">Password</label>
                <input type="text" name="" id="password" {...register("password", {required:"username field required"})}  className=' border border-black' />
                <p className=' text-red-600 text-sm text-left'>{errors.password?.message }</p>

                {/* Email with customizations */}
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" {...register("email", 
                {pattern:{ 
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                   
                },
                validate:{
                    notAdmin:(data) =>{
                        return( data !== "admin@example.com" ||  "Enter a different email adress");
                    },
                    notBlackListed: (data) =>{
                        return(
                            !data.endsWith("baddomain.com") || "This domain is not "
                        )
                    }


                },
                required:"email is required"
                })}   className=' border border-black'/>
                <p className=''>{errors.email?.message }</p>


                {/* enter only two phone number */}
                <label htmlFor="Phone">Phone No</label>
                <input type="tel" name="" min={10} max={11} id="phone" {...register("[phoneNumber.0", {required:"field required"})}  className=' border border-black'/>
     

                <label htmlFor="primaryPhone">confirm No</label>
                <input type="tel" name="" min={10} max={11} id="phone" {...register("[phoneNumber.1", {required:"field required"})}  className=' border border-black'/>



                {/* enter numerouse phone number  */}
                <div>
                    <label htmlFor=""></label>
                    <div>
                    {
                        fields.map((field, index ) => {
                            return(
                                <div className='flex flex-col space-y-2' key={(field.id)}>
                                    <input type="text"{...register(`phNumber.${index}.number`)} className=' border border-black my-2'/>
                                    {
                                         index > 0 &&(
                                            <button type="button" onClick={() => remove(index)} className=' border border-black'> Remove</button>
                                         )
                                    }
                                </div>
    
                            )
                        })
                    }
                    <button type="button" onClick={() => append({numbers:' '})} className='border-2 border-green-700 w-3/5 self-center'> Add phone number</button>

                    </div>
                </div>
                    {/* Date and Age */}
                <div className="form-control">
                    <label htmlFor="Age">Age</label>
                    <input
                        type="number"
                        id="age"
                        {...register("age", {
                        valueAsNumber: true,
                        required: { value: true, message: "Age is required" },
                        })}
                    />
                    <p className="error">{errors.age?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        {...register("dob", {
                        valueAsDate: true,
                        required: { value: true, message: "Date of Birth is required" },
                        })}
                    />
                    <p className="error">{errors.dob?.message}</p>
                </div>


                    {/* Social media part */}
                <label htmlFor='facebook'>FaceBook</label>
                <input type='text' id='text' {...register("social.facebook", { required:"facebook field required"})} className=' border border-black'/>


                <label htmlFor='twitter'>Twitter</label>
                <input type='text' id='text' {...register("social.twitter", { required:"twitter field required"})} className=' border border-black'/>


            <button type="submit" className='border-2 border-green-700 w-3/5 self-center'>Submit</button>
            </div>
            <DevTool control={control}/>
        </form>
       
    </div>
    
    
    </>
  )
}

export default Signup