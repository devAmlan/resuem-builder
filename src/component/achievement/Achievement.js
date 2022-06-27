import React, { useContext } from 'react'
import "./Achievement.css"
import { AchievementContext } from "../../context/Achievement-context"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
function Achievement({ _id, title, description, date }) {
    const { deleteDataHandler, editDataHandler } = useContext(AchievementContext)
    const achievementinfo = { _id, title, description, date }
    const { active, setActive } = useContext(AchievementContext)
    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex" onClick={() => { setActive(!active) }}>
                    <h3 className='data_title'>{title}</h3>
                    <div className="spacebtwn_flex">
                        <p className='data_date'>{date}</p>
                        <h3 className='accordion_btn'>{active ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}</h3>
                    </div>
                </div>
                {active && <>
                    <p className='data_desciption'>{description}</p>

                    <div className="crud_btns">
                        <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                        <button onClick={() => { editDataHandler(achievementinfo) }}>Edit</button>
                    </div>
                </>}
            </div>

        </>
    )
}

export default Achievement