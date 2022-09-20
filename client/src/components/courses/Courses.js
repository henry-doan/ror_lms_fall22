import { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect( () => {
    axios.get('/api/courses')
      .then( res => setCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>All Courses</h1>
    </>
  )
}

export default Courses;