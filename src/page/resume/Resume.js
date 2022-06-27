import React, { useState, useContext } from 'react'
import { AchievementContext } from "../../context/Achievement-context"
import { EducationContext } from "../../context/Education-context"
import { ExperienceContext } from "../../context/Experience-context"
import { UserdataContext } from "../../context/Userdata-context"
import { Link } from 'react-router-dom'
import "./Resume.css"
function Resume() {
    const { achievements } = useContext(AchievementContext)
    const { education } = useContext(EducationContext)
    const { experience } = useContext(ExperienceContext)
    const { userdata } = useContext(UserdataContext)
    const [resumedata] = useState({
        name: userdata.name,
        email: userdata.email,
        bio: userdata.bio,
        achievements: achievements,
        education: education,
        experience: experience
    })

    return (
        <div className="resume">
            <div className="resume_btns">
                <a
                    className='download_btn'
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                        JSON.stringify(resumedata)
                    )}`}
                    download="resume-data.json"
                >Download</a>
            </div>

            <h1 className="resume_name">Name : {resumedata.name}</h1>
            <h3 className='resume_email'>Email : {resumedata.email}</h3>
            <p className='resume_bio'>{resumedata.bio}</p>
            <div className="resume_education">
                <h2 className='section_heading'>Education</h2>
                <hr className='section_division' />
                {
                    (resumedata.education.length > 0 ?
                        <>
                            {resumedata.education.map((data) => {
                                return (
                                    <>
                                        <div className='spacebtwn_flex'>
                                            <h3>{data.institution}</h3>
                                            <p>{data.startdate} - {data.enddate}</p>
                                        </div>
                                        <h3>Degree : {data.degree}</h3>
                                        <p>{data.description}</p>
                                    </>)
                            })}
                        </>
                        : <><Link to="/"><h3>Add data here</h3></Link></>)
                }
            </div>
            <div className="resume_experience">
                <h2 className='section_heading'>Work Experience</h2>
                <hr className='section_division' />
                {resumedata.experience.length > 0 ? <>
                    {resumedata.experience.map((data) => {
                        return (
                            <>
                                <div className='spacebtwn_flex'>
                                    <h3>{data.company}</h3>
                                    <p>{data.startdate} - {data.enddate}</p>
                                </div>
                                <h3>{data.role}</h3>
                                <p>{data.description}</p>
                            </>)
                    })}
                </> : <><Link to="/"><h3>Add data here</h3></Link></>}
            </div>
            <div className="resume_achievement">
                <h2 className='section_heading'>Education</h2>
                <hr className='section_division' />
                {resumedata.achievements.length > 0 ?
                    <>
                        {resumedata.achievements.map((data) => {
                            return (
                                <>
                                    <div className='spacebtwn_flex'>
                                        <h3>{data.title}</h3>
                                        <p>{data.date}</p>
                                    </div>
                                    <p>{data.description}</p>
                                </>)
                        })}
                    </> :
                    <><Link to="/"><h3>Add data here</h3></Link>
                    </>}
            </div>
        </div>
    )
}

export default Resume