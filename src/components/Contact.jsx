import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="text-center mt-14 p-2">
      <header className="text-3xl text-onHover mt-8 text-base">
        <span>04.</span> What's next?
      </header>
      <h1 className="text-secondary text-4xl font-bold mt-4">Get In Touch</h1>
      <p className="text-primary mt-8 text-lg">
        I am currently open to opportunities to switch to Software Developement
        Engineer role, where I would want to write clean, maintainable code and
        ship exciting features. Looking forward to connect and explore exciting
        opportunities.
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:jawadvajeeh@gmail.com"
          className="px-8 py-4 block  text-onHover font-bold mt-14 border-2 border-onHover rounded-lg hover:text-primary transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
