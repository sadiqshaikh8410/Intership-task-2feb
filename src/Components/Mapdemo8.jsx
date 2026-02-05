import React from 'react'

export const Mapdemo8 = () => {

    var Students = [{ id: 1, name: "sadiq", age: 21, std: 12, marks: 89 },
                    { id: 2, name: "kaif", age: 22, std: 12, marks: 79 },
                    { id: 3, name: "ruhan", age: 23, std: 12, marks: 99 },
                    { id: 4, name: "javed", age: 22, std: 12, marks: 89 },
                    { id: 5, name: "naved", age: 21, std: 12, marks: 89 },
                    { id: 6, name: "zaid", age: 20, std: 12, marks: 66 },
                    { id: 7, name: "sajeb", age: 20, std: 12, marks: 77 },
                    { id: 8, name: "rook", age: 20, std: 12, marks: 60 }]



    return (<>
            <div><h1>Mapdemo8</h1></div>
            <div>

<table border="2" >
<thead>
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>STANDERD</th>
        <th>MARKS</th>
    </tr>
</thead>
<tbody>
{
    Students.map((stu)=>{
        return<tr >
            <td>{stu.id}</td>
            <td>{stu.name}</td>
            <td>{stu.age}</td>
            <td>{stu.std}</td>
            <td style={{color: stu.marks<70 ? "red" : "black"  }}>{stu.marks}</td>
            
        </tr>
    })
}

</tbody>

</table>

            </div>
</>

    )
}
