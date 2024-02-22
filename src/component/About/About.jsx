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
            <div className='border-2 border-green-800 py-3 flex justify-center items-center   '>
                <h1 className=' font-semibold text-3xl text-black dark:text-white font-serif'>Consuming Api while use custom hook</h1>
            </div>
            <div className='border-2 border-green-500 p-3 '>
                <form onSubmit={Getdogs} className='border-2 border-yellow-200 '>
                    <div className='border-2 border-green-800 flex justify-center items-center' >
                    <select
                    className= ' border-2 border-red-700 w-4/5 dark:text-black bg-projectbg dark:bg-white outline-none text-xl font-semibold font-mono  md:w-5/6 dark:bg-pur'
                    value={Select}
                    onChange={(e) => setSelect(e.target.value)}>                
                    {Options.map((Dog) => (
                    <option className='text-sm font-semibold font-mono space-x-2 w-20 dark:bg-turneddark bg-projectbg' key={Dog} value={Dog}>{Dog}</option>
                    ))}
                    </select>
                    </div>
                    <div>
                    <button type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        </div>
        {/* this is the part that shows the pictures */}

        <div>
         
            <div className='border-2 border-green-900 w-5/6 mx-auto flex flex-wrap justify-center '>
                {Animals.map((pic, index) => (
                <img key={index} src={pic} alt={`dog-image-${index}`} className='w-80 h-72 my-2 mx-2 border-2 border-yellow-700 '/>
                ))}
             </div>
           
            {/* <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="p-8 rounded-t-lg" src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product_image1" />
                </a>
                <div className="px-5 pb-5">
                    <a href="/">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 mr-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            4.0
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a
                            href="/"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>   */}
        </div>
        
    </div>
  )
}

export default About