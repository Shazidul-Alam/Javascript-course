import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const first14 = fakeData.slice(0, 13);
    const [courses, setCourses] = useState(first14);
    console.log(courses);
    return (
        <div className="row">
            <div className="col-md-9">
                {
                    courses.map((course) => (
                        <SingleCourse key={course.id} course={course}></SingleCourse>
                    ))
                }
            </div>
            <div className="col-md-3"> </div>

        </div>
    );
};

export default Courses;