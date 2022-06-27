import React, { useContext } from 'react'
import "./achievements.css"
import { v4 as uuidv4 } from "uuid"
import { IoCloseCircle } from "react-icons/io5"
import Achievement from '../achievement/Achievement'
import { AchievementContext } from "../../context/Achievement-context"
function Achievements() {
    const { edited, editedFieldId, open, setOpen, achievements, setAchievements, achievementdata, setAchievementdata } = useContext(AchievementContext)

    const addachievementhandler = async () => {

        if (achievementdata.title === "" || achievementdata.description === "" || achievementdata.date === "") {
            console.log('Blank')
        }
        else if (achievementdata && edited === true) {
            setAchievements(achievements.map((item) => {

                if (item._id === editedFieldId) {
                    return { ...item, title: achievementdata.title, date: achievementdata.date, description: achievementdata.description }

                }
                return { ...item }

            }))
            setOpen(false)
            setAchievementdata({ title: "", date: "", description: "" })
        }
        else {
            const addedAchievement = {
                _id: uuidv4(),
                title: achievementdata.title,
                date: achievementdata.date,
                description: achievementdata.description
            }

            setAchievements([...achievements, addedAchievement])
            setAchievementdata({ title: "", description: "", date: "" })
            setOpen(false)
        }
    }

    return (
        <>

            <button className='section_add_btn' onClick={() => { setOpen(true) }}>Add new</button>
            {open ? <>

                <div className="modal">

                    <div className="modal_content">
                        <h3>Add new achievement</h3>

                        <IoCloseCircle className="close_btn"
                            onClick={() => { setOpen(false) }}
                        />
                        <div className="modal_form">
                            <input type="text"
                                placeholder='Enter Title'
                                className='modal_input_field'
                                value={achievementdata.title}
                                onChange={(e) => { setAchievementdata((data) => ({ ...data, title: e.target.value })) }}
                            />
                            <input type="text"
                                placeholder='Enter Date'
                                className='modal_input_field'
                                value={achievementdata.date}
                                onChange={(e) => { setAchievementdata((data) => ({ ...data, date: e.target.value })) }}
                            />
                            <textarea type="text"
                                placeholder='Enter Desciption'
                                className='modal_input_textarea'
                                value={achievementdata.description}
                                onChange={(e) => { setAchievementdata((data) => ({ ...data, description: e.target.value })) }}
                            />

                            <div className="add_data_btn">
                                <button onClick={addachievementhandler}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <></>}

            {
                (achievements.length > 0) ?
                    <>
                        {achievements.map((achievement) => {
                            return (
                                <div key={achievement._id}>
                                    <Achievement
                                        _id={achievement._id}
                                        title={achievement.title}
                                        description={achievement.description}
                                        date={achievement.date}
                                    />
                                </div>
                            )
                        })}
                    </>
                    : <></>
            }
        </>
    )
}

export default Achievements