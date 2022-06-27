import React, { useContext } from 'react'
import "./Achievement.css"
import { AchievementContext } from "../../context/Achievement-context"
function Achievement({ _id, title, description, date }) {
    const { deleteDataHandler, editDataHandler } = useContext(AchievementContext)
    const achievementinfo = { _id, title, description, date }
    return (
        <>
            <div className="user_other_data">
                <div className="spacebtwn_flex">
                    <h3 className='data_title'>{title}</h3>
                    <p className='data_date'>{date}</p>
                </div>
                <p className='data_desciption'>{description}</p>

                <div className="crud_btns">
                    <button onClick={() => { deleteDataHandler(_id) }}>Delete</button>
                    <button onClick={() => { editDataHandler(achievementinfo) }}>Edit</button>
                </div>
            </div>

        </>
    )
}

export default Achievement