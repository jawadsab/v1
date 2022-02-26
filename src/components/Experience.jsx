import React, { useState, useEffect } from "react"
import { jobs } from "../utils"
import { useTransition, animated } from "react-spring"

const TabItem = ({ id, company, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <li
      className={activeTab === id ? "active-tab" : "not-active-tab"}
      onClick={e => handleClick()}
    >
      {company}
    </li>
  )
}

const TabContent = ({ id, activeTab, children, a, style }) => {
  return activeTab === id ? (
    <a.div style={style} className="tab-content">
      {children}
    </a.div>
  ) : null
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState("TCS")
  const companies = jobs.map(job => job.company)
  const [item, setItem] = useState(activeTab)
  useEffect(() => {
    setItem(activeTab)
  }, [activeTab])

  const transitions = useTransition(item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })
  return (
    <section id="jobs" className="min-h-screen p-2">
      <header className="text-3xl text-secondary font-semibold mb-4">
        <span className="text-onHover">03.</span> Where I've worked
      </header>
      <div className="tabs">
        <ul className="tabs-nav">
          {companies.map((company, index) => {
            return (
              <TabItem
                key={index}
                company={company}
                id={company}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            )
          })}
        </ul>
        {transitions(
          (style, item) =>
            item && (
              <div className="outlet">
                {jobs.map((job, key) => {
                  return (
                    <TabContent
                      a={animated}
                      style={style}
                      key={key}
                      id={job.company}
                      activeTab={activeTab}
                    >
                      <h1 className="text-lg text-secondary mb-2">
                        {job.designation}{" "}
                        <span className="text-onHover font-semibold">
                          @ {job.company}
                        </span>
                      </h1>
                      <p className="text-primary tracking-wider text-sm">
                        {job.joined} - {job.working}
                      </p>
                      <ul className="text-sm mt-4">
                        {job.bullets.map((bullet, key) => {
                          return (
                            <li
                              className="flex gap-2 items-center mb-2"
                              key={key}
                            >
                              <span>{bullet}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </TabContent>
                  )
                })}
              </div>
            )
        )}
      </div>
    </section>
  )
}

export default Experience
