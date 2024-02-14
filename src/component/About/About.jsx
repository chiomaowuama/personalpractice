import React from 'react'
import ConsumptionContext from '../../context/ConsumptionContext'
import  { useContext } from 'react'

function About() {

  return (
    <div>
        <div className='px-5'>
            <div className='border-2 border-green-800 py-3 flex justify-center items-center   '>
                <h1 className=' font-semibold text-3xl text-orange-700 font-serif'>Consuming Api while use custom hook</h1>
            </div>
            <div>
                <div>
                    {/* dog image slide */}
                </div>
                <div>
                    <div>
                        <form action="">
                            <select 
                                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        
                            >
                            

                                <option></option>
                                <h1></h1>
                                <button type='submit'> clickhere</button>
                            
                            </select>
                        </form>
                    </div>
                    <div>
                        {/* into of what the page is going to do which is  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About