import React, { useContext } from 'react'

import { IoCloseCircle } from "react-icons/io5"
import { EducationContext } from "../../context/Education-context"
import { AchievementContext } from "../../context/Achievement-context"
import Edudata from "../edudata/EduData"

function Educations() {
    const { open, setOpen } = useContext(AchievementContext)
    const { edudata, setEdudata, education, addeducationdataHandler } = useContext(EducationContext)
    return (
        <> 
        
            <button className='section_add_btn' onClick={() => { setOpen(true) }}>Add new</button>
            {open ?
                <div className="modal">

                    <div className="modal_content">
                        <h3>Add new Education</h3>
                        <IoCloseCircle className="close_btn" onClick={() => { setOpen(false) }} />
                        <div className="modal_form">
                            <input type="text"
                                value={edudata.institution}
                                placeholder='Institution'
                                className='modal_input_field'
                                onChange={(e) => { setEdudata((data) => ({ ...data, institution: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='Degree'
                                className='modal_input_field'
                                value={edudata.degree}
                                onChange={(e) => { setEdudata((data) => ({ ...data, degree: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='Start Date'
                                className='modal_input_field'
                                value={edudata.startdate}
                                onChange={(e) => { setEdudata((data) => ({ ...data, startdate: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='End Date'
                                className='modal_input_field'
                                value={edudata.enddate}
                                onChange={(e) => { setEdudata((data) => ({ ...data, enddate: e.target.value })) }}
                            />
                            <textarea type="text"
                                placeholder='Desciption'
                                className='modal_input_textarea'
                                value={edudata.description}
                                onChange={(e) => { setEdudata((data) => ({ ...data, description: e.target.value })) }}
                            />
                            <div className="add_data_btn">
                                <button onClick={addeducationdataHandler}>Save</button>
                            </div>
                        </div>
                    </div>
                </div> : <></>}
            {
                (education.length > 0 ?
                    <>
                        {education.map((edu) => {
                            return (
                                <div key={edu._id}>
                                    <Edudata
                                        _id={edu._id}
                                        institution={edu.institution}
                                        startdate={edu.startdate}
                                        enddate={edu.enddate}
                                        degree={edu.degree}
                                        description={edu.description}
                                    />
                                </div>
                            )
                        })}
                    </>
                    : <></>)
            }
        </>
    )
}

export default Educations