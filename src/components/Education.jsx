import React from "react"

const Education = () => {
  return (
    <section id="education" className="min-h-screen p-2">
      <header className="text-3xl text-secondary font-semibold mb-4">
        <span className="text-onHover">02.</span> Where I've studied
      </header>

      <div className="relative w-full">
        <div className="z-0 w-1 h-full bg-onHover absolute mx-auto left-0 right-0 md:mx-0 md:left-12"></div>
        <div className="relative z-10">
          <img
            className="timeline-img"
            src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="a"
          />
          <div className="timeline-container">
            <div className="timeline-ptr"></div>
            <div className="bg-lightBlue p-2 rounded-md shadow-md">
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aspernatur vero consequuntur, perspiciatis doloremque
                saepe unde veniam repellendus ducimus odit inventore vel, qui
                voluptas, placeat cupiditate ad tempore possimus beatae!
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <img
            className="timeline-img"
            src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="a"
          />
          <div className="timeline-container timeline-container-left">
            <div className="timeline-ptr timeline-ptr-left"></div>
            <div className="bg-lightBlue p-2 rounded-md shadow-md">
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aspernatur vero consequuntur, perspiciatis doloremque
                saepe unde veniam repellendus ducimus odit inventore vel, qui
                voluptas, placeat cupiditate ad tempore possimus beatae!
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <img
            className="timeline-img"
            src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="a"
          />
          <div className="timeline-container">
            <div className="timeline-ptr"></div>
            <div className="bg-lightBlue p-2 rounded-md shadow-md">
              <p className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aspernatur vero consequuntur, perspiciatis doloremque
                saepe unde veniam repellendus ducimus odit inventore vel, qui
                voluptas, placeat cupiditate ad tempore possimus beatae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
