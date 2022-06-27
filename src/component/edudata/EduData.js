import React, { useContext } from 'react'
import { EducationContext } from "../../context/Education-context"
function EduData({ _id,institution, startdate, enddate, degree, description }) {
    const { editDataHandler,deleteDataHandler } = useContext(EducationContext)
    const educationinfo = { _id,institution, startdate, enddate, degree, description }
    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex">
                    <h3 className='data_title'>{institution}</h3>
                    <p className='data_date'>{startdate} - {enddate}</p>
                </div>
                <h3 className='data_degree'>
                    Degree: {degree}</h3>
                <p className='data_desciption'>{description}</p>

                <div className="crud_btns">
                    <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                    <button onClick={() => { editDataHandler(educationinfo) }}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default EduData