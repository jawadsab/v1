import { useState, useEffect } from "react"
import moment from 'moment';


export const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])
  return isIntersecting
}

export const jobs = [
  {
    company: "TCS",
    designation: "Systems Engineer",
    joined: "June 2021",
    working: "Present",
    location: "Hyderabad, India",
    bullets: [
      "Support Linux infrastructure of 150+ servers - commission and decommission, monitor and configure servers",
      "Perform Redhat security patching making use of Ansible automation",
      "Write scripts and Ansible playbooks to automate day to day administration tasks",
      "Troubleshoot and analyze server logs",
    ],
  },
  {
    company: "Medpiper Technologies",
    designation: "Frontend Engineer Intern",
    joined: "March 2021",
    working: "May 2021",
    locaion: "Remote",
    bullets: [
      "Converted Adobe wireframes into pixel perfect User Interface using ReactJs - 5+ pages",
      "Collboarte in designing and improving the product bu resolving bugs",
    ],
  },
]

export const projects = [
  {
    title: "Frontend Mentor Challenge",
    date: "August 26, 2021",
    source_code: "https://github.com/jawadsab/ManageLandingPage",
    live_site: "https://6127c7597b60d421baba24aa--managebetter.netlify.app/",
    project_description:
      "Frontend Mentor is a great place to practice frontend skills. Here I have made a pixel perfect landing page as per the requirement of the challemge",
    tech_stack: "ReactJs, CSS",
  },
  {
    title: "Social Proof Section",
    date: "September 05, 2020",
    source_code: "https://github.com/jawadsab/social-proof-section",
    live_site: "https://social-proof-section-gamma.vercel.app/",
    project_description:
      "In this project I have made stunning, responsive UI for social proof section",
    tech_stack: "HTML, CSS",
  },
  {
    title: "Random Color Generator",
    date: "September 18, 2021",
    source_code: "https://github.com/jawadsab/Color-Generator",
    live_site: "https://jawadsab.github.io/Color-Generator/",
    project_description:
      "Fun project that generates random colors to pick on click or hitting space bar. Also have the functionality to copy to clipboard. Inspired from one of the feature of Coolors.co.",
    tech_stack: "HTML, CSS, Javascript",
  },
  {
    title: "ConnectSync",
    date: "August, 2020",
    source_code: "https://github.com/ConnectSync/ConnectSync-Repo",
    live_site: "https://connectsync.herokuapp.com/",
    project_description:
      "This project was a submission to AuthO hackathon, where we build a full stack social media application with a theme to connect remote workers to collaborate and post",
    tech_stack: "Mongoose, ReactJs, ExpressJs, NodeJs",
  },
  {
    title: "Expense Tracker",
    date: "July, 2021",
    source_code: "https://github.com/jawadsab/ExpenseTracker",
    live_site: "https://expensementor.netlify.app/",
    project_description:
      "FullStack application where the user has the ability to enter income/expense and get an overview with dashboard and pie-charts. The whole frontend was build usig ReactJs and Styled Components, where backend was build using NodeJs, ExpressJs and MongoDB as database",
    tech_stack: "ReactJs, Styled Components, MongoDB, ExpressJs, Netlify",
  },
]

export const navLinks = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "Experience",
    url: "jobs",
  },
  {
    name: "Work",
    url: "projects",
  },
  {
    name: "Contact",
    url: "contact",
  },
]

export const socialLinks = [
  { name: "Github", url: "https://github.com/jawadsab" },
  {
    name: "LinkedIn",
    url: "https://github.com/jawadsab",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/JVajeeh",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/jawadvajeeh",
  },
]


export const displayDate = date => {
  return moment(date).format("MMMM Do YYYY");
}