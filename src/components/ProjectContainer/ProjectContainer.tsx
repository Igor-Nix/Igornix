import Link from "next/link"
import React from "react"
import { Col } from "react-bootstrap"
import LinkIcon from "@mui/icons-material/Link"

const projects = [
  {
    id: 1,
    name: "Teamsamble",
    description: "Best website ever",
    status: "Building",
    url: "https://teamsamble.com/",
    shortUrl: "teamsamble.com",
  },
]

function ProjectContainer() {
  return (
    <div className="projectContainer">
      {projects.map((p) => {
        return (
          <Col key={p.id} md={6} className="projectCard">
            <div className="statusContainer">
              <div className="color"></div>
              <div className="status"></div>
            </div>
            <h2>{p.name}</h2>
            <div className="description">{p.description}</div>
            <div className="urlTag">
              <Link href={p.url}>
                <LinkIcon />
                <div className="url">{p.shortUrl}</div>
              </Link>
            </div>
          </Col>
        )
      })}
    </div>
  )
}

export default ProjectContainer
