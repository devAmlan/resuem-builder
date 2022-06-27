import React, { useContext } from 'react'
import { IoCloseCircle } from "react-icons/io5"
import { AchievementContext } from "../../context/Achievement-context"
import { ExperienceContext } from '../../context/Experience-context'
import Expdata from '../expdata/Expdata'


function Experience() {
    const { open, setOpen } = useContext(AchievementContext)
    const { setExpdata, expdata, addExperienceHandler, experience } = useContext(ExperienceContext)
    return (
        <>
            <button className='section_add_btn' onClick={() => { setOpen(true) }}>Add new</button>
            {open ?
                <div className="modal">
                    <div className="modal_content">
                        <h3>Add work experience</h3>
                        <IoCloseCircle className="close_btn" onClick={() => { setOpen(false) }} />
                        <div className="modal_form">
                            <input type="text"
                                placeholder='Company'
                                className='modal_input_field'
                                value={expdata.company}
                                onChange={e => { setExpdata((data) => ({ ...data, company: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='Role'
                                className='modal_input_field'
                                value={expdata.role}
                                onChange={e => { setExpdata((data) => ({ ...data, role: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='Start Date'
                                className='modal_input_field'
                                value={expdata.startdate}
                                onChange={e => { setExpdata((data) => ({ ...data, startdate: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='End Date'
                                className='modal_input_field'
                                value={expdata.enddate}
                                onChange={e => { setExpdata((data) => ({ ...data, enddate: e.target.value })) }}
                            />
                            <textarea type="text"
                                placeholder='Desciption'
                                className='modal_input_textarea'
                                value={expdata.description}
                                onChange={e => { setExpdata((data) => ({ ...data, description: e.target.value })) }}
                            />
                            <div className="add_data_btn">
                                <button onClick={addExperienceHandler}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
            }
            {
                (experience.length > 0 ?
                    <>
                        {experience.map((exp) => {
                            return (
                                <div key={exp._id}>
                                    <Expdata
                                        _id={exp._id}
                                        company={exp.company}
                                        role={exp.role}
                                        startdate={exp.startdate}
                                        enddate={exp.enddate}
                                        description={exp.description}
                                    />
                                </div>
                            )
                        })}</>
                    : <></>)
            }
        </>
    )
}

export default Experience