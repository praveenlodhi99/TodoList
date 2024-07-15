"use client"

import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ title, desc })
    setTitle("")
    setDesc("")
  }

  return (
    <>
    <h1 className='bg-black text-white text-center p-2 rounded-md text-3xl'>Praveen's TodoList</h1>
    
    <form onSubmit={submitHandler}>

      <input className='bg-zinc-200 m-2 border-none rounded px-3 py-1 text-center ' type='text' placeholder='Add Title Here' 
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      />

      <input className='bg-zinc-200 m-2 border-none rounded px-3 py-1 text-center ' type='text' placeholder='Add Description Here' 
      value={desc}
      onChange={(e) => {
        setDesc(e.target.value)
      }}
      />
      <button className='bg-black m-2 border-none rounded w-28 h-8 text-center text-white hover:font-bold hover:text-sm text-md duration-100 hover:text-yellow-300' type='submit'>Add</button>
    </form>
    </>
  )
}

export default page