import React, { createContext, useState } from 'react'

const AchievementContext = createContext(null)
function AchievementProvider({ children }) {
    const [achievements, setAchievements] = useState([])
    const [open, setOpen] = useState(false)
    const [achievementdata, setAchievementdata] = useState({
        title: "",
        description: "",
        date: ""
    })

    const [editedFieldId, setEditedFieldId] = useState(null)
    const [edited, setEdited] = useState(false)
    const deleteDataHandler = async (_id) => {

        setAchievements(achievements.filter(item => item._id !== _id))
    }
    const editDataHandler = async (achievementinfo) => {
        setAchievementdata({ title: achievementinfo.title, description: achievementinfo.description, date: achievementinfo.date })
        setOpen(true)
        setEdited(true)
        setEditedFieldId(achievementinfo._id)
    }
    return (
        <AchievementContext.Provider value={{ editedFieldId, open, setOpen, achievements, setAchievements, achievementdata, setAchievementdata, deleteDataHandler, editDataHandler, edited, setEdited }}>
            {children}
        </AchievementContext.Provider>)
}

export { AchievementContext, AchievementProvider }