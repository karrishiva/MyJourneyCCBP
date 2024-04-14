// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList, id} = courseDetails

  return (
    <div key={id}>
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      {tagsList.map(eachTag => (
        <ul className="tag-container" key={eachTag.id}>
          <li>
            <p className="course-tag-name">{eachTag.name}</p>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CourseTimelineCard
