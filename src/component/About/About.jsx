import React from 'react'
import ConsumptionContext from '../../context/ConsumptionContext'
import  { useContext } from 'react'
import { useState } from 'react'

function About() {
    const{Getoptions} = useContext(ConsumptionContext)
    console.log(Getoptions)
    const {Select, setSelect} = useState('chioma')
    const Getdogs = (e) =>{
        e.preventDefault()
        return console.log(Select)


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
                    className='w-48 border border-black'
                    onChange={(e) => setSelect(e.target.value)}>
                        <option value=""></option>
                    </select>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default About