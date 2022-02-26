import React, { useRef } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { projects, useOnScreen } from "../utils"
import { useTransition, animated } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyProjects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            date(fromNow: true)
            featured
            live_site
            source_code
            stack
            title
          }
          html
          id
        }
      }
    }
  `)
  const { nodes } = allMarkdownRemark

  console.log(nodes)
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const transition = useTransition(isVisible, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  })
  return (
    <section ref={ref} id="projects" className="mt-4 p-2">
      {transition(
        (style, item) =>
          item && (
            <animated.header
              style={style}
              className="text-3xl text-secondary font-semibold"
            >
              <span className="text-onHover">04.</span> Things I've build
            </animated.header>
          )
      )}

      <div className="grid grid-cols-3 gap-4 mt-4 md:grid-cols-2 sm:grid-cols-1">
        {nodes &&
          nodes.map(project => {
            return (
              <div
                key={project.id}
                className=" p-4 bg-lightBlue flex flex-col justify-start shadow-md rounded-md hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center text-onHover mb-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.frontmatter.source_code}
                  >
                    {" "}
                    <FiGithub fontSize={30} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.frontmatter.live_site}
                  >
                    {" "}
                    <FiExternalLink fontSize={30} />
                  </a>
                </div>
                <h2 className="font-semibold text-secondary text-xl tracking-wider hover:text-onHover transition-colors duration-300">
                  {project.frontmatter.title}
                </h2>

                <div
                  className="text-primary font-semibold mt-4 mb-4 text-justify"
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />
                <p className="text-primary mt-2 text-sm mt-auto">
                  {project.frontmatter.stack}
                </p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Projects
