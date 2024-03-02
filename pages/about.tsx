import React from "react"

export default function About() {
  const birthDate = new Date(1998, 2, 25)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth() - birthDate.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return (
    <div className="aboutPage">
      <h1>About Me</h1>
      <div className="text">
        <p>
          I&apos;m Igor, a {age} year-old software developer with a deep-rooted passion for technology originally from
          Russia, currently living in Italy. <span>My fascination with computers began at the tender age of 6</span>{" "}
          when I played my first video game. The captivating virtual world not only entertained me but also sparked my
          curiosity about the underlying mechanics of the game. This curiosity soon turned into a passion, driving me to
          delve deeper into the world of <span> computers and software development</span>.
        </p>
        <p>
          As soon as I finished high school, I eagerly dived into the world of computer science, beginning my university
          studies. However, after a year, I was faced with financial challenges that forced me to leave university. I
          used this event as an opportunity to <span> enter the professional world</span>, seeking a job that would
          allow me to apply and further <span> develop my skills</span>.
        </p>
        <p>
          <span>After two years</span> of gaining practical experience and honing my skills, I achieved a significant
          milestone in my career - <span> I became a full stack developer</span>.
        </p>
        <p>
          {" "}
          Throughout my career, <span> I&apos;ve explored numerous programming languages</span>, yet my enthusiasm has
          consistently been drawn towards the <span> JavaScript ecosystem</span>. I predominantly work with a tech stack
          that includes <span> Next.js, React, TypeScript, SCSS, and MySQL</span>.
        </p>
        <p>
          In addition to my love for programming, I have a keen interest in{" "}
          <span> entrepreneurship, fitness, gaming, AI and health</span>. Being an individual with a strong drive and
          curiosity, I continually seek to broaden my understanding and abilities in various domains.
        </p>
      </div>
    </div>
  )
}
