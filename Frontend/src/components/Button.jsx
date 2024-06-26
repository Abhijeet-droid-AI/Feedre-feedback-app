import React from 'react'
import {useNavigate } from 'react-router-dom'

export const Button = ({children,url,className=''}) => {
    const navigate = useNavigate();
    const clickHandle=()=>{
        navigate(url);
    }
  return (
    <div className='m-2 mt-5'>
        <button 
        className={`bg-black text-white p-2 rounded-md ${className} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
        onClick={clickHandle}
        >{children}</button>
    </div>
  )
}