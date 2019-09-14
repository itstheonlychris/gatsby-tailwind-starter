import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-8 pt-6 font-body flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}
