import {useEffect, useState} from "react";
import styles from './ProfilePage.module.scss'

interface Props {
    name: string
}

const Profile = () => {
    const [profile, setProfile] = useState<Props>({})

    const getProfile = async () => {
        const response = await fetch('http://localhost:8000/profile')
        const data = await response.json()
        setProfile(data)
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (<div className={styles.main}>
            <h1>Profile</h1>
            <h2>Username: {profile.name}</h2>
    </div>
    );
};

export default Profile;
