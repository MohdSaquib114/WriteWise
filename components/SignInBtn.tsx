'use client'
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

export default function SignInBtn({children,style}:{children:React.ReactNode,style:string}) {
  return (
    <Button onClick={()=>signIn()} className={style}>
       {children}
    </Button>
  )
}
