import React from "react"
import Navbar from "./navbar/navbar"
export default function Layout({ children }) {

  //Generate page layout consisting of a header/navbar, body, and a footer
  return (
    <div className="color-dark">   
      <Navbar/>
      <div className="full-page">
          {children}
      </div>
      <footer className="main-footer">
        <span>
        © {new Date().getFullYear()}, 
        {` Built by Thomas Oliver with `}
        <a className="color-secondary" href="https://www.gatsbyjs.com"> Gatsby</a>
        <div>
          Site icon made by <a className="color-secondary" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" className="color-secondary" title="Flaticon">www.flaticon.com</a>
        </div>
        </span>
      </footer>
    </div>
   
  )
}