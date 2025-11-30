// 'use client'

// import { userInfo } from '@/slices/userSlices'
// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const VerifyUser = ({children}) => {
//     let dispatch = useDispatch()
    

//         useEffect(() => {
//             let token = JSON.parse(localStorage.getItem("token"))
//         axios.get(`${process.env.NEXT_PUBLIC_API}/auth/verifyuser`,{
//             headers: {"token" : token}
//         }).then((res)=>{
//             localStorage.setItem("token", JSON.stringify(res.data.token))
//         }).catch((err) =>{
//             console.log(err)
//         })
//     }, [])

//   return (
//     <div>{children}</div>
//   )
// }

// export default VerifyUser


"use client";

import { userInfo } from '@/slices/userSlices';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const VerifyUser = ({ children }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    console.log(process.env.NEXT_PUBLIC_API)
    if (!token) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/auth/verifyuser`, {
        headers: { token: token },
        
        
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        dispatch(userInfo(res.data.data)); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{children}</div>;
};

export default VerifyUser;
