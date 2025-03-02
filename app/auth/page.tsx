import React from 'react'
import { poppinsSans } from '../layout'
import { inter } from '../ui/fonts'

const Page = () => {
  return (
    <div className={`${poppinsSans.variable} ${inter.className} flex justify-center items-center h-screen font-bold`}>
      Auth
    </div>
  )
}

export default Page
