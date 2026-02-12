import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo1 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const submitHandler = (data)=>{
    console.log(data)
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>Formdemo1</h1>

        <form onSubmit={handleSubmit(submitHandler)}>

          {/* NAME */}
          <div>
            <label>NAME</label>
            <input 
              type='text' 
              placeholder='enter name' 
              {...register("firstName", { required: "Name is required" })}
            />
            <p style={{color:"red"}}>{errors.firstName?.message}</p>
          </div>

          {/* AGE */}
          <div>
            <label>AGE</label>
            <input 
              type='number'
              {...register("age", { 
                required: "Age is required",
                min: {
                  value: 18,
                  message: "Minimum age is 18"
                }
              })}
            />
            <p style={{color:"red"}}>{errors.age?.message}</p>
          </div>

          {/* GENDER */}
          <div>
            <label>GENDER</label> <br />
            MALE:
            <input 
              type='radio' 
              value="male" 
              {...register("gender", { required: "Select gender" })}
            />
            FEMALE:
            <input 
              type='radio' 
              value="female" 
              {...register("gender", { required: "Select gender" })}
            />
            <p style={{color:"red"}}>{errors.gender?.message}</p>
          </div>

          {/* HOBBIES */}
          <div>
            <label>HOBBIES</label> <br />
            CRICKET:
            <input type='checkbox' value="cricket" {...register("hobbies")} />
            TRAVEL:
            <input type='checkbox' value="travel" {...register("hobbies")} />
            SCROLLING:
            <input type='checkbox' value="scrolling" {...register("hobbies")} />
          </div>

          <div>
            <input type='submit' />
          </div>

        </form>

        {isSubmited && (
          <div>
            <h1>OUTPUT</h1>
            <h1>Name = {userData.firstName}</h1>
            <h2>Age = {userData.age}</h2>
          </div>
        )}
    </div>
    </>
  )
}
