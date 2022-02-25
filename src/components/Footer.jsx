import React from "react"
import { GrGatsbyjs } from "react-icons/gr"
import { socialLinks } from "../utils"
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="w-full text-primary min-h-max bg-darkBlue relative flex flex-col items-center justify-center p-2">
      <p className="flex items-center gap-2">
        Made with <GrGatsbyjs className="" fontSize={30} />
      </p>
      <div className="mt-4 flex items-center gap-4">
        {socialLinks.map((social, index) => {
          return (
            <a key={index} className="hover:-translate-y-2 transition-transform transition-colors duration-300 hover:text-onHover cursor-pointer"  href={social.url}>
              <Icon name={social.name} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
