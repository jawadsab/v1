import React, { useEffect, useState } from "react"
import { animated, useTransition } from "react-spring"

const HeroSection = () => {
  const [mounted, setIsMounted] = useState(false)
  useEffect(() => {
    console.log("Yesssssssss")
    setIsMounted(true)
  }, [])
  const transitions = useTransition(mounted, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  })
  return (
    <section className="mt-4 p-2 min-h-screen">
      <span className="text-onHover">Hi 👋, my name is</span>
      <p>
        <span className="text-secondary mb-2 text-7xl font-bold sm-4 md:text-4xl sm:font-semibold relative">
          Jawad Vajeeh.
          <span className="text-sm rounded-md shadow-md absolute top-0 -right-10 bg-label p-1 rotate-45 md:-right-12 md:-top-2 md:text-xs">
            Open to work
          </span>
        </span>
        <span className="text-primary mb-2 text-6xl block sm:text-3xl sm:font-semibold">
          I ❤️ to code.
        </span>
        {transitions(
          (style, item) =>
            item && (
              <animated.span
                style={style}
                className="text-primary block leading-7 w-3/4 md:w-full"
              >
                I'm currently working as Systems Engineer at{" "}
                <span className="text-onHover">Tata Consultancy Services</span>,
                providing infrastructure services to{" "}
                <span className="text-onHover">
                  Panasonic Corporation of North America
                </span>{" "}
                where I have helped streamline their{" "}
                <span className="text-onHover">Linux</span> infrastructure by
                integrating <span className="text-onHover">Ansible</span>{" "}
                automation tool in the client environment.{" "}
                <span className="border-b border-onHover">
                  I am open to Software Developer Roles, specializing in
                  Javascript and its frameworks/libraries.
                </span>
              </animated.span>
            )
        )}
      </p>
     
    </section>
  )
}

export default HeroSection
