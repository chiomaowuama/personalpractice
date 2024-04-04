import React, { useEffect } from 'react'
import  { useContext } from 'react'
import { useState } from 'react'
import ConsumptionContext from '../../context/ConsumptionContext'

function About() {
    const [Select, setSelect] = useState('eskimo')
    const{Fewpic, Options, Getpicture} = useContext(ConsumptionContext)
    
    let Animals = [];
    if (Fewpic instanceof Array) {
        Animals = Fewpic;
    }
    console.log('Animals', Animals)
    
    const Getdogs = (e) =>{
        e.preventDefault()
        if(!Select){
            alert('Dog not choosen')
        }else{
            Getpicture(Select)
            // console.log(Select)
        }
        


    }
    // useEffect(() => {
    //     console.log(Animals)

    // }, [Animals])
  return (
    <div>
        <div className='bg-projectbg dark:bg-turneddark space-y-3'>
            <div className=' py-3 flex justify-center items-center   '>
                <h1 className=' font-semibold text-3xl text-black dark:text-white font-serif'>Consuming Api while use custom hook</h1>
            </div>
            <div className=' p-3 '>
                <form onSubmit={Getdogs} className=''>
                    <div className='flex justify-center items-center' >
                    <select
                    className= 'border border-black w-4/5 dark:text-black bg-projectbg dark:bg-white outline-none text-xl font-semibold font-mono  md:w-5/6 dark:bg-pur py-1'
                    value={Select}
                    onChange={(e) => setSelect(e.target.value)}>                
                    {Options.map((Dog) => (
                    <option className='text-sm font-semibold font-mono space-x-2 w-20 dark:bg-turneddark bg-projectbg' key={Dog} value={Dog}>{Dog}</option>
                    ))}
                    </select>
                    </div>
                    <div className=' w-5/6 mx-auto my-3 rounded-xl'>
                    <button type="submit" className='border border-black w-full py-1 text-xl rounded-xl font-mono font-bold bg-white'> Submit</button>
                    </div>
                </form>
            </div>
        </div>
        {/* this is the part that shows the pictures */}

        <div className=' dark:bg-turneddark'>
         
            <div className='w-5/6 mx-auto flex flex-wrap justify-center'>
                {Animals.map((pic, index) => (
                <img key={index} src={pic} alt={`dog-image-${index}`} className='w-80 h-72 my-2 mx-2 border border-black rounded-3xl  bg-projectbg dark:bg-turneddark'/>
                ))}
             </div>
           

        </div>
        
    </div>
  )
}

export default About