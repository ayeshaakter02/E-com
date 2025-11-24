"use client"

import Container from '@/components/common/Container';
import { userInfo } from '@/slices/userSlices';
import axios from 'axios';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault();
   axios.post(`${process.env.NEXT_PUBLIC_API}/auth/login`,{
    email,
    password
   }).then((res)=>{
    localStorage.setItem("token", JSON.stringify(res.data.token))
    dispatch(userInfo(res.data.data))

    router.push('/')
   }).catch((err)=>{
    console.log(err)
   })
  };

  return (
    <Container>
      <div className="flex h-screen min-h-full flex-col justify-center font-[--font-Roboto]">
      <div className="mx-auto">
        <div className="w-100 px-3 py-7 backdrop-blur-xl sm:w-130 sm:py-1 sm:pl-10 md:py-5 xl:py-20">
          <div className="sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight lg:mt-10">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-2.5 sm:w-full sm:max-w-sm lg:mt-10">
            <form
              className="space-y-5 sm:space-y-2 md:space-y-6"
              onSubmit={handleLogin}
              action="#"
              method="POST"
            >
              <div>
                <label htmlFor="email" className="text-md block font-medium">
                  Enter your Email address
                </label>
                <div className="md:mt-2">
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    autoComplete="email"
                    required=""
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#aa522f] sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-md block font-medium"
                  >
                    Enter Your Password
                  </label>
                </div>
                <div className="md:mt-2">
                  <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#aa522f] sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#aa522f] px-3 py-1.5 text-lg font-medium text-white shadow-xs hover:bg-[#7c3417]"
                >
                  Sign in
                </button>
                <p className="flex justify-center text-lg font-semibold md:mt-2">
                  or
                </p>
                <button
                  type="submit"
                  className="mx-auto flex w-full cursor-pointer items-center justify-center rounded-md bg-[#693a28] px-3 py-1.5 font-semibold text-white hover:bg-[#68280f] md:mt-2"
                >
                  <FcGoogle className="mr-2 text-xl" />
                  Continue with google
                </button>
              </div>
            </form>
            <p className="text-center text-lg font-normal text-gray-900 md:mt-10">
              Don't have an account?
              <a
                className="ml-2 text-xl font-bold text-[#69270d] hover:text-[#da480e]"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Container>
    
  )
}

export default page