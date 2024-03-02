import Link from "next/link"
import React from "react"
import { Col, Row } from "react-bootstrap"
import LinkIcon from "@mui/icons-material/Link"
import CircleIcon from "@mui/icons-material/Circle"

const projects = [
  {
    id: 1,
    name: "Teamsamble",
    description: "A place where freelancer with no experience can build projects together",
    status: "Building",
    url: "https://teamsamble.com/",
    shortUrl: "teamsamble.com",
  },
  {
    id: 2,
    name: "CRWN Clothing",
    description: "One of my first projects. A simple e-commerce shopping web app with",
    status: "Shipped",
    url: "https://sensational-bombolone-c48a91.netlify.app/",
    shortUrl: "netlify.app",
  },
  {
    id: 3,
    name: "React project",
    description: "One of my first projects. A simple e-commerce shopping web app with",
    status: "Shipped",
    url: "https://boring-cori-50eeeb.netlify.app/",
    shortUrl: "netlify.app",
  },
]

const statusColors = {
  Building: "yellow",
  Shipped: "green",
  Sold: "blue",
}

function ProjectContainer() {
  return (
    <Row className="projectContainer">
      {projects.map((p) => {
        return (
          <Col key={p.id} xs={12} md={12} lg={4} className="projectCard">
            <div className="statusContainer">
              <div className={`color ${statusColors[p.status as keyof typeof statusColors] || ""}`}>
                <CircleIcon />
              </div>
              <div className="status">{p.status}</div>
            </div>
            <h2>{p.name}</h2>
            <div className="description">{p.description}</div>
            <div className="urlTag">
              <Link href={p.url} target="_blank">
                <LinkIcon />
                <div className="url">{p.shortUrl}</div>
              </Link>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default ProjectContainer
