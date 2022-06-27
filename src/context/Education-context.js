import React, { useState, createContext, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { AchievementContext } from "./Achievement-context"
import { toast } from "react-hot-toast"
const EducationContext = createContext(null)
function EducationProvider({ children }) {
    const { setOpen } = useContext(AchievementContext)
    const [education, setEducation] = useState([])

    const [editedFieldId, setEditedFieldId] = useState(null)
    const [edudata, setEdudata] = useState({
        institution: "",
        degree: "",
        startdate: "",
        enddate: "",
        description: ""
    })
    const [edited, setEdited] = useState(false)
    const addeducationdataHandler = () => {

        if (edudata.institution === "" || edudata.degree === "" || edudata.startdate === "" || edudata.enddate === "" || edudata.description === "F") {
            toast.error('Please Complete the form', { style: {
                fontSize:"16px"
            } })
        }
        else if (edudata && edited) {
            setEducation(education.map((elem) => {
                if (elem._id === editedFieldId) {
                    return { ...elem, institution: edudata.institution, degree: edudata.degree, startdate: edudata.startdate, enddate: edudata.enddate, description: edudata.description }
                }
                return { ...elem }
            }))
            setOpen(false)
        }
        else {
            setEducation([...education,
            {
                _id: uuidv4(),
                institution: edudata.institution,
                degree: edudata.degree,
                startdate: edudata.startdate,
                enddate: edudata.enddate,
                description: edudata.description
            }
            ])
            setOpen(false)
        }
        setEdudata({
            institution: "",
            degree: "",
            startdate: "",
            enddate: "",
            description: ""
        })
    
    }
    const deleteDataHandler = (_id) => {
        setEducation(education.filter(item => item._id !== _id))
    }
    const editDataHandler = async (educationinfo) => {
        setOpen(true)
        setEdited(true)
        setEdudata({
            institution: educationinfo.institution,
            degree: educationinfo.degree,
            startdate: educationinfo.startdate,
            enddate: educationinfo.enddate,
            description: educationinfo.description
        })
        setEditedFieldId(educationinfo._id)
    }
    return (
        <EducationContext.Provider value={{ education, edudata, setEdudata, addeducationdataHandler, deleteDataHandler, editDataHandler }}>
            {children}
        </EducationContext.Provider>
    )
}

export { EducationContext, EducationProvider }