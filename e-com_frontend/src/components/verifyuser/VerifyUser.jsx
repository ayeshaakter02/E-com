'use client'

import { userInfo } from '@/slices/userSlices'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const VerifyUser = ({children}) => {
    let dispatch = useDispatch()


        useEffect(() => {
            let token = JSON.parse(localStorage.getItem("token"))
        axios.get(`${process.env.NEXT_PUBLIC_API}/auth/verifyuser`,{
            headers: {"token" : token}
        }).then((res)=>{
          dispatch(userInfo(res.data.data))
            localStorage.setItem("token", JSON.stringify(res.data.token))
        }).catch((err) =>{
            console.log(err)
        })
    }, [])

  return (
    <div>{children}</div>
  )
}

export default VerifyUser
