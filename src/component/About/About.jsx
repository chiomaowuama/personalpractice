import React, { useEffect } from 'react'
import  { useContext } from 'react'
import { useState } from 'react'
import ConsumptionContext from '../../context/ConsumptionContext'

function About() {
    const [Select, setSelect] = useState()
    const{Options, Getpicture} = useContext(ConsumptionContext)
    // console.log("about", Options)
    
  
    const Getdogs = (e) =>{
        e.preventDefault()
        if(!Select){
            alert('Dog not choosen')
        }else{
            Getpicture(Select)
            console.log(Select)
        }
        // return console.log(Select)


    }
  return (
    <div>
        <div className='px-5'>
            <div className='border-2 border-green-800 py-3 flex justify-center items-center   '>
                <h1 className=' font-semibold text-3xl text-orange-700 font-serif'>Consuming Api while use custom hook</h1>
            </div>
            <div>
                <form onSubmit={Getdogs}>
                    <select
                    className='w-48 border border-black outline-none'
                    value={Select}
                    onChange={(e) => setSelect(e.target.value)}>
                    
                    {Options.map((Dog) => (
                    <option key={Dog} value={Dog}>{Dog}</option>
                    ))}
                    </select>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default About