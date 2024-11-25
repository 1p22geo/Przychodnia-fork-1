"use client";

import Link from "next/link";
import { useEffect } from "react";

export const Header = (props: { user: string | null }) => {
  useEffect(()=>{
    fetch("http://localhost:3000/api/registration", {method: "POST", body: JSON.stringify({"username":"a", "password":"2"})}).then(async (res)=>{
      console.log(res)
      await res.json()
    })
  }, [])
  return (
    <header className="basis-[100%] w-full  sticky top-0 flex flex-row items-center px-2 gap-2 bg-sky-400 h-[6%]">
      <Link href="/" className="font-xl text-2xl font-semibold text-slate-950 hover:underline mr-auto tracking-wide p-3">
        Przychodnia
      </Link>
      {props.user ? (
        <>
          <Link
            href="/profile"
            className=" p-1 rounded-md"
          >
            Twoja tablica
          </Link>
          <div className="">
            Zalogowano jako{" "}
            <span className="text-black font-bold">{props.user}</span>
          </div>
          <Link
            href="/auth/logout"
            className=" p-1 rounded-md"
          >
            Wyloguj się
          </Link>
          
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="rounded-md p-3"
          >
            Zaloguj się
          </Link>
          <Link
            href="/auth/register"
            className="rounded-md p-3"
          >
            Zarejestruj się
          </Link>
        </>
      )}
    </header>
  );
};