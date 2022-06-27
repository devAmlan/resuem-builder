import React, { useContext } from 'react'
import { ExperienceContext } from "../../context/Experience-context"
function Expdata({ _id, company, role, startdate, enddate, description }) {
    const { deleteDataHandler, editDataHandler } = useContext(ExperienceContext)
    const experienceinfo = { _id, company, role, startdate, enddate, description }
    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex">
                    <h3 className='data_title'>{company}</h3>
                    <p className='data_date'>{startdate} to {enddate}</p>
                </div>
                <h3 className='data_degree'>
                    Role : {role}</h3>
                <p className='data_desciption'>{description}</p>

                <div className="crud_btns">
                    <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                    <button onClick={() => { editDataHandler(experienceinfo) }}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default Expdata