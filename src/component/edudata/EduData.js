import React, { useContext } from 'react'
import { EducationContext } from "../../context/Education-context"
import { AchievementContext } from "../../context/Achievement-context"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
function EduData({ _id, institution, startdate, enddate, degree, description }) {
    const { editDataHandler, deleteDataHandler } = useContext(EducationContext)
    const educationinfo = { _id, institution, startdate, enddate, degree, description }
    const { active, setActive } = useContext(AchievementContext)

    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex" onClick={() => { setActive(!active) }}>
                    <h3 className='data_title'>{institution}</h3>
                    <div className="spacebtwn_flex">
                        <p className='data_date'>
                            {startdate} - {enddate}
                        </p>
                        <h3 className='accordion_btn'>{active ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}</h3>
                    </div>
                </div>
                {active &&
                    <>
                        <h3 className='data_degree'>
                            Degree: {degree}</h3>
                        <p className='data_desciption'>{description}</p>

                        <div className="crud_btns">
                            <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                            <button onClick={() => { editDataHandler(educationinfo) }}>Edit</button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default EduData