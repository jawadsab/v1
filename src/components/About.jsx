import { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { VscDebugBreakpointFunction } from "react-icons/vsc"
import { animated, useTransition } from "react-spring"
import React from "react"
import Img from "gatsby-image"

import { useOnScreen } from "../utils"

const About = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "myphoto.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  const transition = useTransition(isVisible, {
    from: { x: -200, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  })

  return (
    <section  className="min-h-screen p-2 mb-12">
      <header id="about" className="text-3xl text-secondary font-semibold mb-4">
        <span className="text-onHover">01.</span> About Me
      </header>
      <div ref={ref}>
        {transition(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="flex gap-2 md:flex-col-reverse md:items-center"
              >
                <div className="text-primary mt-4">
                  <p>
                    Hello! My name is Mohammed Abdul Jawad Vajeeh and I hold a
                    Bachelor's Degree in Computer Science. I am strong in Data
                    Structures and Algorithms and have solved 300+ coding
                    problems across Leetcode, GeeksForGeeks and Hackerrank.
                    <br /> <br />
                    Although my primary skills include HTML, CSS, Javascript and
                    ReactJs, I find myself as a quick learner who is capable of
                    adapting to new technologies at a rapid pace. For instance,
                    in my current role at Tata consultancy services, I was given
                    the responsiblity to standardize the Linux infrastructure of
                    our client by making use of Ansible automation tool. I was
                    able to quicky understand the basics of Ansible and started
                    writing automation scripts to perform jobs simultaneously on
                    40+ servers at one instance.
                    <br />
                    <br />
                    Here are the few technologies that I have been working with
                    recently:
                  </p>
                  <ul className="grid grid-cols-2  mt-4">
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>Javascript (ES6+)</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>React</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>NodeJs</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>Typescript</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>TailwindCSS</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>AWS</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>Linux</span>
                    </li>
                    <li className="flex items-center">
                      <VscDebugBreakpointFunction className="rotate-90 text-onHover" />{" "}
                      <span>Ansible</span>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <Img
                    className="w-64 rounded-lg shadow-md -hue-rotate-60 hover:hue-rotate-0"
                    fluid={data.file.childImageSharp.fluid}
                  />
                </div>
              </animated.div>
            )
        )}
      </div>
    </section>
  )
}

export default About
