import React from 'react'
import banana from "../assets/images/bnana.jpeg"
import apple from "../assets/images/Apple.jpeg"
import mango from "../assets/images/mango.jpeg"

export const Mapdemo6 = () => {

    var frutes=[ { id: 1, name: "Banana", image: banana },
  { id: 2, name: "Apple", image: apple },
  { id: 3, name: "Mango", image: mango }];
  return (
   <>
   <div>
<h1>Mapdemo6</h1>
<table border="2">

<thead className='table'>

    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>IMAGE</th>
    </tr>
</thead>
<tbody>
{

    frutes.map((fruit)=>{
        return <tr key={fruit.id}>
                  <td>{fruit.id}</td>
                  <td>{fruit.name}</td>
                  <td>
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
    })
}

</tbody>

</table>
   </div>
   
   
   </>
  )
}
