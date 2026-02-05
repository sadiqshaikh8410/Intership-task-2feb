import React from 'react'

export const Mapdemo1 = () => {
    let cars = ["BMW", "RR", "AUDI", "BUGATI", "JEGVAR"]

    return (
    <>
        <div>

            <h1>Map demo 1</h1>
            {

            cars.map((c)=>{
                 return<h1>{c}</h1>

})
}

        </div>
    </>

)
}

