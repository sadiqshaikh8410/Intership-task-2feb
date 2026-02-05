import React from 'react'

export const Mapdemo3 = () => {

    var students = [{id:1,name:"sadiq",marks:78,age:24,city:"ahmedabad",gender:"male"},
                    {id:2,name:"ayan",marks:99,age:17,city:"mumbai",gender:"male"},
                    {id:3,name:"maaz",marks:88,age:20,city:"goa",gender:"male"},
                    {id:4,name:"rohan",marks:67,age:33,city:"delhe",gender:"male"},
                    {id:5,name:"soheb",marks:45,age:21,city:"ahmedabad",gender:"male"}
    ]
  return (<>
    <div><h1>Mapdemo3</h1></div>
    <table border="2" align='center'>
        <thead>
            <tr>

                <th>ID</th>
                <th>NAME</th>
                <th>MARKS</th>
                <th>AGE</th>
                <th>CITY</th>
                <th>GENDER</th>
            </tr>
        </thead>
        <tbody>
            {
            students.map((student)=>{
                return <tr>
                    <td>{student.id}</td>
                     <td>{student.name}</td>
                      <td>{student.marks}</td>
                       <td>{student.age}</td>
                       <td>{student.city}</td>
                        <td>{student.gender}</td>
                 </tr>

            })
        }
           


        </tbody>


    </table>
    </>

  )
}
