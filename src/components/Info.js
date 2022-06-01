import React from "react";
import ReactDOM from "react";
// import { AiTwotoneMail } from "react-icons"

export default function Info() {
  return (
    <header className="info">
      <div className="photo">
        {/* <img src="./photo.jpeg" width={"250px"} height={"400px"} /> */}
      </div>
      <h3>Ayush Chauhan</h3>
      <h5>Frontend Developer</h5>
      <a href="https://www.ayushchauhan.co.in/">www.ayushchauhan.co.in</a>
      <div className="btns">
      <button className="btn1"> <i class="fa-solid fa-envelope"></i>Email</button>
      <button className="btn2"> <i class="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </header>
  )
};