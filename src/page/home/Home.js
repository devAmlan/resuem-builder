import React, { useState, useContext } from 'react'
import "./Home.css"
import Userinfo from '../../component/userinfo/Userinfo'
import Achievements from '../../component/achievementdata/Achievements'
import Educations from '../../component/educationinfo/Educations'
import Experience from '../../component/experience/Experience'
import { AchievementContext } from "../../context/Achievement-context"
import { EducationContext } from "../../context/Education-context"
import { ExperienceContext } from "../../context/Experience-context"
import { Toaster } from "react-hot-toast"

function Home() {
    const [tab, setTab] = useState("education")
    const { achievements } = useContext(AchievementContext)
    const { education } = useContext(EducationContext)
    const { experience } = useContext(ExperienceContext)
    return (
        <>
            <Toaster />
            <Userinfo />
            <hr className='divider' />
            <div className="tabs spaced_flex">
                <div className={(tab === "education") ? "clicked_data_tab center_flex" : "data_tab center_flex"} onClick={() => { setTab("education") }}>
                    <h3>Education {education.length > 0 ? <>({education.length})</> : <></>}</h3>
                </div>
                <div className={(tab === "achievement") ? "clicked_data_tab center_flex" : "data_tab center_flex"} onClick={() => setTab("achievement")}>
                    <h3>Achievement {achievements.length > 0 ? <>({achievements.length})</> : <></>}</h3>
                </div>
                <div className={(tab === "experience") ? "clicked_data_tab center_flex" : "data_tab center_flex"} onClick={() => { setTab("experience") }}>
                    <h3>Work Experiences {experience.length > 0 ? <>({experience.length})</> : <></>}</h3>
                </div>
                {/* <h3 onClick={() => { setTab("education") }}>Education {education.length > 0 ? <>({education.length})</> : <></>}</h3>
                <h3 onClick={() => setTab("achievement")}>Achievement {achievements.length > 0 ? <>({achievements.length})</> : <></>}</h3>
                <h3 onClick={() => { setTab("experience") }}>Work Experiences {experience.length > 0 ? <>({experience.length})</> : <></>}</h3> */}
            </div>
            <div className="other_data_section center_flex_column">
                {tab === "achievement" ? <Achievements /> : tab === "education" ? <Educations /> : tab === "experience" ? <Experience /> : <></>}
            </div>

        </>
    )
}

export default Home