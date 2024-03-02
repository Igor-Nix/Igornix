import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import { Tooltip } from "antd"

export default function Navbar() {
  const [page, setPage] = useState<"home" | "about" | "contact">()

  const router = useRouter()

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setPage("home")
        break
      case "/about":
        setPage("about")
        break
      case "/contact":
        setPage("contact")
        break
      default:
        setPage("home")
    }
  }, [router.pathname])

  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(path)
  }

  return (
    <div className="navbar">
      <div className={`nav${page === "home" ? " active" : ""}`} onClick={(e) => handleClick(e, "/")}>
        <Tooltip title="Home">
          <HomeIcon />
        </Tooltip>
      </div>

      <div className={`nav${page === "about" ? " active" : ""}`} onClick={(e) => handleClick(e, "/about")}>
        <Tooltip title="About Me">
          <PersonIcon />
        </Tooltip>
      </div>

      <div className={`nav${page === "contact" ? " active" : ""}`} onClick={(e) => handleClick(e, "/contact")}>
        <Tooltip title="Contact">
          <AlternateEmailIcon />
        </Tooltip>
      </div>
    </div>
  )
}
