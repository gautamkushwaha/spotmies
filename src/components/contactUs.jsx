"use client";
import React from "react";
import {useState,useEffect} from 'react'
import axios from 'axios'
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import HoverButton from "./reusableComponent/hoverButton";
import { Fade } from "react-reveal";

export default function ContactUs() {
  // form states:
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  // retrived data state
  const [data, setData] = useState([]);

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, designation);

     // our object to pass
     const data = {
       Name: name,
       Email: email,
       Phone: phone,
       Description: description
     }
     axios.post('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff',data).then(response=>{
      // console.log(response);
      setName('');
      setEmail('');
      setPhone('');
      setDescription('');
    })
  }

  // getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

    return (
      <div
        className="w-[100vw] h-fit md:h-[650px] text-black py-9 bg-bg2"
        id="contactUs"
      >
        <div className="m-auto w-[90%] bg-white h-full flex flex-col md:flex-row items-center justify-center rounded-2xl">
          <div
            className="relative h-[300px] md:h-full w-full md:w-[30%] z-20 rounded-l-2xl"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1530541263627-4314dd7a44c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "1rem",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-primary2 rounded-2xl bg-opacity-50 z-10 "></div>
            <div className="absolute h-full md:h-full flex flex-row items-end z-20">
              <div className="flex flex-col pl-6 text-white pb-4">
                <Fade>
                  <div className="text-2xl md:text-3xl gil-med text">
                    Spotmies
                  </div>
                  <p className="gil-light text-xs opacity-70 w-[70%]">
                    AU incubation centre, Andhra university, Visakhapatnam -
                    530003,
                    <br />
                    +91 8341980196
                    <br />
                    info@spotmies.com
                  </p>
                </Fade>
                <div className="flex flex-row w-[50%] pt-4 justify-between">
                  <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer ">
                    <Fade left>
                      {" "}
                      <AiOutlineTwitter size="1.6rem" />
                    </Fade>
                  </div>

                  <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                    <Fade left>
                      {" "}
                      <FaLinkedinIn size="1.4rem" />
                    </Fade>
                  </div>

                  <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                    <Fade left>
                      <AiFillInstagram size="1.6rem" />
                    </Fade>
                  </div>

                  <div className="w-[40px] h-[40px] bg-transparent flex flex-col items-center justify-center cursor-pointer">
                    <Fade left>
                      <FaFacebookF size="1.4rem" />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit md:h-full w-full md:w-[70%] gil-reg">
            <div className="h-full w-full m-auto p-4 md:p-8">
              <form
                className="flex flex-col items-center justify-between"
                onSubmit={handleSubmit}>
            
                <div className="flex flex-col items-start w-[90%] md:w-[90%]">
                  <Fade>
                    <p className="gil-reg text-2xl text-primary2">
                      Take A Coffee & <span className="gil-bold">Chat</span> With
                      Us
                    </p>
                    <p className="opacity-30 text-sm text-primary2">
                      24/7 We will answer your questions & problems
                    </p>
                  </Fade>
                </div>

                {/* ----------------form-------------------------*/}

                <div className="w-[90%] flex flex-row items-center justify-between pt-6 ">

                    <Fade bottom>
                      <div className="relative mb-6 w-[100%]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AiOutlineUser />
                        </div>
                        <input
                          required={true}
                          type="text"
                          id="input-group-1"
                          className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </Fade>
                    {/* <div className="relative mb-6 w-[45%]">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <AiOutlineUser />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                    placeholder="Last name"
                  />
                </div> */}
                </div>
                <Fade bottom>
                  <div className="relative mb-6 w-[90%]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AiOutlineMail />
                    </div>
                    <input
                      required={true}
                      type="text"
                      id="input-group-1"
                      className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                      placeholder="your@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={age}
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="relative mb-6 w-[90%]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AiOutlineMobile />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      className="h-[50px] outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full pl-10 p-2.5 "
                      placeholder="9876543210"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="relative mb-6 w-[90%]">
                    <textarea
                      required={true}
                      rows={5}
                      type="text"
                      id="input-group-1"
                      className="outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 "
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>
                </Fade>

                <Fade bottom>
                  <div className="flex flex-row justify-end w-[90%]">
                    <HoverButton
                      text="Submit"
                      type="submit"
                      className="w-full h-12 rounded-xl text-2xl"
                    />
                  </div>
                </Fade>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
