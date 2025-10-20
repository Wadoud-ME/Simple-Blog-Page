import { slides } from "../data/data"
import AboutItem from "./AboutItem"

const About = () => {
  return (
    <div className="flex flex-col gap-26">
      {slides.map((slideItem, index) => (
        <AboutItem
          key={slideItem.img}
          img={slideItem.img}
          tag={slideItem.tag}
          title={slideItem.title}
          description={slideItem.description}
          reverse={index % 2 !== 0} // alternates left/right
        />
      ))}
    </div>
  )
}

export default About
