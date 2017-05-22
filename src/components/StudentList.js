import React from 'react'
import { Link } from 'react-router-dom'
function StudentList(props) {
  const nameEls = props.students.map( (name, i) => <li key={i}><Link to={'/students/' + i }> {name} </Link></li>)

  return (
      <div className='col-md-4'>
        <ul>
          { nameEls }
        </ul>
      </div>
  )
}

export default StudentList
