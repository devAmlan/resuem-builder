import React, { useContext, useState } from 'react'
import "./Userinfo.css"
import { toast } from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';
import { UserdataContext } from "../../context/Userdata-context"
function Userinfo() {

    const { userdata, setUserdata } = useContext(UserdataContext)
    const [saved, setSaved] = useState(false)

    const adduserdataHandler = () => {
        if (userdata.name === "" || userdata.email === "" || userdata.bio === "") {
            toast.error("Please complete the form",{
                style:{
                    fontSize:"16px"
                }
            })
        } else {
            setSaved(true)
        }

    }
    return (
        <>
            {saved ?
                <>

                    <div className="userdata">
                        <h1 className='userdata_name'>{userdata.name}</h1>
                        <p className='userdata_email'>{userdata.email}</p>
                        <p className='userdata_bio'>{userdata.bio}</p>
                        <button
                            className="edit_btn"
                            onClick={() => { setSaved(false) }}
                        >Edit</button>
                    </div>

                </>
                : <div className="user_data_area">
                    <div className="user_data">
                        <div className="data_input">
                            <p>Name:</p>
                            <input type="text"
                                className='input_field'
                                value={userdata.name}
                                onChange={e => { setUserdata((data) => ({ ...data, name: e.target.value })) }}
                            />
                            <p>Email:</p>
                            <input type="email"
                                className='input_field'
                                value={userdata.email}
                                onChange={e => { setUserdata((data) => ({ ...data, email: e.target.value })) }}
                            />

                        </div>
                        <div className="user_bio">
                            <p>Short Bio:</p>
                            <textarea className='bio_input'
                                value={userdata.bio}
                                maxLength={120}
                                onChange={e => { setUserdata((data) => ({ ...data, bio: e.target.value })) }}
                            ></textarea>
                            <p>{userdata.bio.length}/120</p>
                        </div>
                        <div className="add_btn">
                            <button onClick={adduserdataHandler}>Save</button>

                        </div>

                    </div>
                </div>
            }


        </>
    )
}

export default Userinfo