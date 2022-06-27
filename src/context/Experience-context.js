import React, { useState, createContext, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { AchievementContext } from "./Achievement-context"
const ExperienceContext = createContext(null)
function ExperienceProvider({ children }) {
    const [experience, setExperience] = useState([])
    const { setOpen } = useContext(AchievementContext)
    const [editedFieldId, setEditedFieldId] = useState(null)
    const [edited, setEdited] = useState(false)
    const [expdata, setExpdata] = useState({
        company: "",
        role: "",
        startdate: "",
        enddate: "",
        description: ""
    })
    const addExperienceHandler = async () => {
        if (expdata.company === "" || expdata.role === "" || expdata.startdate === "" || expdata.enddate === "" || expdata.description === "") {
            console.log('Empty')
        } else if (expdata && edited) {
            setExperience(experience.map((elem) => {
                if (elem._id === editedFieldId) {
                    return {
                        ...elem,
                        company: expdata.company,
                        role: expdata.role,
                        startdate: expdata.startdate,
                        enddate: expdata.enddate,
                        description: expdata.description
                    }
                }
                return { ...elem }
            }))

            setExpdata({
                company: "",
                role: "",
                startdate: "",
                enddate: "",
                description: ""
            })
            setOpen(false)
        }
        else {
            setExperience([...experience,
            {
                _id: uuidv4(),
                company: expdata.company,
                role: expdata.role,
                startdate: expdata.startdate,
                enddate: expdata.enddate,
                description: expdata.description
            }
            ])
        }
        setExpdata({
            company: "",
            role: "",
            startdate: "",
            enddate: "",
            description: ""
        })
        setOpen(false)
    }
    const deleteDataHandler = async (_id) => {
        setExperience(experience.filter(item => item._id !== _id))
    }
    const editDataHandler = async (experienceinfo) => {
        setOpen(true)
        setEdited(true)
        setExpdata({
            company: experienceinfo.company,
            role: experienceinfo.role,
            startdate: experienceinfo.startdate,
            enddate: experienceinfo.enddate,
            description: experienceinfo.description
        })
        setEditedFieldId(experienceinfo._id)
    }
    return (
        <ExperienceContext.Provider value={{ expdata, setExpdata, addExperienceHandler, experience, deleteDataHandler, editDataHandler, edited, setEdited }}>
            {children}
        </ExperienceContext.Provider>)
}
export { ExperienceContext, ExperienceProvider }