import React from "react"
import Navbar from "./navbar/navbar"
export default function Layout({ children }) {

  return (
    <div className="color-dark">   
      <Navbar/>
      <div className="full-page">
          {children}
      </div>
      <footer >
        © {new Date().getFullYear()}, Built by Thomas Oliver with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
   
  )
}