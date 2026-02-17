import React from 'react'
import Mumbai_Indians_Logo from "../assets/images/Mumbai_Indians_Logo.svg";

export const Team1 = () => {
  return (
    <>
    <div className='card1'>
        <img src={Mumbai_Indians_Logo} ></img>
        <h1>🏏 Mumbai Indians</h1>
        <h3>⭐ Best Cricketer: Rohit Sharma</h3>
        <ul>
        <li>Founded: 2008</li>
        <li>Home Ground: Wankhede Stadium, Mumbai</li>
        <li>IPL Titles: 5 (Most successful teams me se ek)</li>
        <li>Owner: Reliance Industries</li>
        </ul>
        
    </div>
    </>
  )
}
