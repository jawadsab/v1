import React from "react"
import { FiGithub, FiLinkedin, FiTwitter, FiCodepen } from "react-icons/fi"

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <FiGithub fontSize={30} />
    case "LinkedIn":
      return <FiLinkedin fontSize={30} />
    case "Twitter":
        return <FiTwitter fontSize={30} />
    case "Codepen":
        return <FiCodepen fontSize={30} />
  }
}

export default Icon
