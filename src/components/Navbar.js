import React, { Component } from "react"
import { Link } from "gatsby"

class Navbar extends Component {
  state = {
    open: false,
  }
  toggle = () => {
    console.log("clicked")
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white border-b border-gray-200 font-body p-6">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link to={"/"}>
            <span className="font-bold text-xl tracking-tight">
              gatsby-tailwind-starter
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-purple-700 border-purple-400 hover:text-purple-900 hover:bg-purple-200 hover:border-purple-900"
            onClick={() => this.toggle()}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            this.state.open ? "block" : "hidden"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex-grow">
            <Link
              to={"/about"}
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-700 hover:text-purple-400 mr-4"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-700 hover:text-purple-400 mr-4"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              to={"/"}
              className="inline-block px-4 py-2 leading-none border rounded text-purple-700 border-purple-700 hover:border-transparent hover:text-purple-900 hover:bg-purple-200 mt-4 lg:mt-0"
            >
              Action Button
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
