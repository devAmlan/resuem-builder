import React, { useContext } from 'react'
import { ExperienceContext } from "../../context/Experience-context"
import { AchievementContext } from "../../context/Achievement-context"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"

function Expdata({ _id, company, role, startdate, enddate, description }) {
    const { deleteDataHandler, editDataHandler } = useContext(ExperienceContext)
    const experienceinfo = { _id, company, role, startdate, enddate, description }
    const { active, setActive } = useContext(AchievementContext)

    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex" onClick={() => { setActive(!active) }}>
                    <h3 className='data_title'>{company}</h3>
                    <div className='spacebtwn_flex'>
                        <p className='data_date'>{startdate} to {enddate}</p>
                        <h3 className='accordion_btn'>{active ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}</h3>
                    </div>

                </div>
                {active && <>
                    <h3 className='data_degree'>
                        Role : {role}</h3>
                    <p className='data_desciption'>{description}</p>

                    <div className="crud_btns">
                        <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                        <button onClick={() => { editDataHandler(experienceinfo) }}>Edit</button>
                    </div>
                </>}
            </div>
        </>
    )
}

export default Expdata