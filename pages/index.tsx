import Image from "next/image"
import { Row } from "react-bootstrap"
import pfp from "../public/assets/pfp.jpg"
import Link from "next/link"
import ProjectContainer from "@/src/components/ProjectContainer/ProjectContainer"

export default function Home() {
  return (
    <div className="homePage">
      <Row className="headSection">
        <div className="image">
          <Image width={509 / 2} height={510 / 2} src={pfp} alt="Igor Nix" />
        </div>
      </Row>
      <Row className="text">
        <h1>Next.js & React developer</h1>
      </Row>
      <Row className="bio">
        <p>
          Hey, I&apos;m Igor. I specialize in building web applications and websites within the JavaScript ecosystem.
        </p>
      </Row>
      <Row className="bio">
        <p className="text">
          I&apos;m currently working at{" "}
          <Link style={{ margin: "0 5px" }} href="https://kama.sport/">
            {" "}
            Kama{" "}
          </Link>{" "}
          while building projects on the side.
        </p>
      </Row>
      <ProjectContainer />
    </div>
  )
}
