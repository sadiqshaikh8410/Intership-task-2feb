import React from 'react'

export const Mapdemo2 = () => {

    var users =[{id:1,name:'raj',age:23,gender:"male"},
                {id:2,name:'sadiq',age:30,gender:"male"},
                {id:3,name:'rohan',age:40,gender:"male"}
    ]
  return (
    <>
    <div>
        <h1>Mapdemo2</h1>
        {
        
        users.map((user)=>{
            return <li>{user.id}{user.name}-{user.age}-{user.gender}</li>
        })
        }
        </div>
    </>
  )
}
