import React from "react"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import XIcon from "@mui/icons-material/X"
import Link from "next/link"

function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact</h1>
      <div className="text">
        <p>
          Want to <span>get in touch</span>? Find me on the platforms below or send me an email.
        </p>
      </div>
      <div className="socialLink">
        <div className="label">Email:</div>
        <div className="link">
          <a href="mailto: ainbusiness98@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="socialLink">
        <div className="label">LinkedIn:</div>
        <div className="link">
          <Link href={"https://www.linkedin.com/in/igor-nichiforov/"}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <div className="socialLink">
        <div className="label">GitHub:</div>
        <div className="link">
          <Link href={"https://github.com/Igor-Nix"}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
      <div className="socialLink">
        <div className="label">X:</div>
        <div className="link">
          <Link href={"https://twitter.com/Igor_Nix"}>
            <XIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
