import React, { useState } from "react"
import { Link } from "gatsby"
import { Link as SLink, animateScroll as scroll } from "react-scroll"
import { BiAlignRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { navLinks } from "../utils"

const Navbar = () => {
  let path = null
  if (typeof window !== "undefined") {
    path = window.location.pathname
  }
  const checkGatsbyLinks = () => {
    return (
      <>
        {path === "/" ? (
          <>
            {navLinks.map((navLink, index) => (
              <li
                className="hover:text-onHover tracking-wider transition-colors duration-300"
                key={index}
              >
                <SLink
                  smooth
                  offset={-110}
                  spy={true}
                  onClick={e => setToggle(!toggle)}
                  className="md:navitem-smaller cursor-pointer"
                  to={navLink.url}
                >
                  <span className="text-onHover mr-2 font-semibold">
                    0{index + 1}
                  </span>
                  <span> {navLink.name}</span>
                </SLink>
              </li>
            ))}
          </>
        ) : (
          <>
            {navLinks.map((navLink, index) => (
              <li
                className="hover:text-onHover tracking-wider transition-colors duration-300"
                key={index}
              >
                <Link
                  onClick={e => setToggle(!toggle)}
                  className="md:navitem-smaller"
                  to={`/#${navLink.url}`}
                >
                  <span className="text-onHover mr-2 font-semibold">
                    0{index + 1}
                  </span>
                  <span> {navLink.name}</span>
                </Link>
              </li>
            ))}
          </>
        )}
      </>
    )
  }
  const [toggle, setToggle] = useState(false)
  const active =
    "flex text-primary flex gap-4 py-4 px-2 items-center md:navbar-smaller md:translate-x-0 transition-transform duration-300"
  const notActive =
    "flex text-primary flex gap-4 py-4 px-2 items-center md:navbar-smaller md:translate-x-full transition-transform duration-300"
  return (
    <header className="w-full bg-darkBlue sticky top-0 z-40 flex items-center justify-between">
      <div
        onClick={() => scroll.scrollToTop()}
        className="p-4 text-onHover cursor-pointer"
      >
        <p className="font-semibold text-2xl">JV</p>
      </div>
      {!toggle ? (
        <BiAlignRight
          onClick={() => setToggle(!toggle)}
          fontSize={30}
          className="hidden md:toggle-nav"
        />
      ) : (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="hidden md:toggle-nav"
          fontSize={30}
        />
      )}
      <ol className={toggle ? active : notActive}>
        {checkGatsbyLinks()}
        <li className="hover:text-onHover tracking-wider transition-colors duration-300">
          <Link
            onClick={e => setToggle(!toggle)}
            className="md:navitem-smaller"
            to="/blogs"
          >
            <span className="text-onHover mr-2 font-semibold">05</span>
            <span> Blogs</span>
          </Link>
        </li>
        <a
          href="/resume.pdf"
          className="p-2 border-2 rounded-lg hover:text-onHover transition-colors duration-300 border-onHover md:w-full text-center"
          to="resume.pdf"
        >
          Resume
        </a>
      </ol>
    </header>
  )
}

export default Navbar
