import axios from 'axios'
import React, { useState } from 'react'

export const Apidemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [number, setnumber] = useState("")

    const getUsers = async () => {

        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)

        setmessage(response.data.message)
        setusers(response.data.data)

       
    }

    return (
        <>
            <div className="container mt-4 text-center">

                <h1>API DEMO 1</h1>

                <button className="btn btn-primary mb-3" onClick={() => { getUsers() }}>
                    GET
                </button>

                <h4 className="text-success">MESSAGE = {message}</h4>

                {
                    users.length > 0 &&

                    <table className="table table-bordered table-striped mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Student No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>City</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.city}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }

            </div>
        </>
    )
}
