"use client"

import { set } from 'mongoose'
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const [mainTask, setMainTask] = useState([])  //creating empty array of tasks

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask , {title , desc}]);
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask;    //setting variable here so taht it can use globally not limited to else section only

  if(mainTask.length > 0) {
    renderTask = mainTask.map((t , i) => {
      return (
        <li key={i}>
          <div className='flex bg-blue-400 mb-1 rounded justify-between px-1 h-10 m-2 items-center'>
          <h5 className='min-w-52 text-start font-bold'>{t.title}</h5>
          <h5 className='min-w-64 text-center'>{t.desc}</h5>
          <button className=' bg-red-600 px-3 py-1 text-center text-white rounded border-none hover:text-sm text-md duration-150 shadow-sm hover:shadow-md hover:shadow-white shadow-white hover:text-black-500 hover:font-bold hover:mr-1'
          onClick={() => {
            deleteHandler(i)
          }}
          >Delete</button>
        </div>
        </li>
      )
    })
  } else {
    renderTask = <h2 className='bg-red-400 p-2 m-2 rounded text-center'>No Task Available</h2>
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

    <hr className='my-8'/>

    <div className=''>
      <ul>
        {renderTask}
      </ul>
    </div>


    </>
  )
}

export default page