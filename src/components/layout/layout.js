import React from "react"
import Navbar from "./navbar/navbar"
export default function Layout({ children }) {

  return (
    <div className="color-dark">   
      <Navbar/>
      <div className="full-page">
          {children}
      </div>
      <footer className="main-footer">
        © {new Date().getFullYear()}, Built by Thomas Oliver with
        {` `}
        <a className="color-secondary" href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
   
  )
}