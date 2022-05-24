import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {getUser} from "../../API/ServicesAPI";
import MyModal from "../../Components/UI/MyModal/MyModal";
import ConfirmationModal from "../../Components/ confirmationModal/ConfirmationModal";

import './Profile.css';
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import ActionsBarAdmin from "../../Components/ActionsBarAdmin/ActionsBarAdmin";
import ActionsBarUser from "../../Components/ActionsBarUser/ActionsBarUser";
import TrainingsEntry from "../../Components/TrainingsEntry/TrainingsEntry";
import TrainingCreator from "../../Components/TrainingCreator/TrainingCreator";
import FormCreateTraining from "../../Components/FormCreateTraining/FormCreateTraining";
import {toast, ToastContainer} from "react-toastify";
import TrainingOrganize from "../../Components/TrainingOrganize/TrainingOrganize";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const {user} = useContext(AuthContext);
    const {userId} = useParams();

    const [userProfile, setUserProfile] = useState({});
    const [visibleModalCancel, setVisibleModalCancel] = useState(false);
    const [createdTraining, setCreatedTraining] = useState([]);
    const [entryTraining, setEntryTraining] = useState([]);
    const [isShowCreateForm, setIsShowCreateForm] = useState(false);

    const isAdmin = useMemo(() =>{
        return userId === user._id;
    }, [user, userId]);

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await getUser(userId);
            setUserProfile(res.data);
        }
        fetchUser();
    }, []);

    useEffect(()=>{
    }, []);

    const openModal = () =>{
        setVisibleModalCancel(true);
    }

    const success = () => toast.success('Тренировка успешно создана');

    return (
        <div className="profile">
            <MyModal visible={isShowCreateForm} setVisible={setIsShowCreateForm}>
                <FormCreateTraining userId={userId} toast={success} setVisible={setIsShowCreateForm}/>
            </MyModal>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="profile-wrapper">
                    <div className="profile-leftbar">
                        <img className="profile-page-img" src={userProfile.img ?  PF+ userProfile.img : PF + 'free-icon-user-219983.png'} alt="Изображение"/>
                        <div className="profile-friends">Друзей: 25</div>
                        {isAdmin && <TrainingCreator userId={userId}/>}
                        <div className="profile-creator-panel">
                        </div>
                    </div>
                    <div className="profile-main">
                        <div className="profile-main-top">
                            <div className="profile-info-main">
                                <ProfileInfo user={userProfile}/>
                            </div>
                            <div className="profile-actionbar">
                                {
                                    isAdmin
                                        ? <ActionsBarAdmin setIsShowCreateForm={setIsShowCreateForm}/>
                                        : <ActionsBarUser />
                                }
                            </div>
                        </div>
                        {
                            isAdmin
                            ? <TrainingsEntry userId={userId}/>
                                : <TrainingOrganize userId={userId}/>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Profile;