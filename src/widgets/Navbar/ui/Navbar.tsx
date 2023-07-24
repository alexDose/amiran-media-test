import styles from './Navbar.module.scss';
import Link from "next/link";
import {Button} from "@/shared/ui/Button";
import {LoginModal} from "@/features/auth";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthState, setAuthState} from "@/features/auth/model/slice/authSlice";
import {useState} from "react";

export const Navbar = () => {
    const [isAuthModal, setAuthModal] = useState(false)
    const authState = useSelector(selectAuthState);

    const dispatch = useDispatch()

    const onToggleModal = () => {
        if (!authState) {
            setAuthModal(true)
        }
        dispatch(setAuthState(false))
    }

    return (
        <div className={styles.Navbar}>
            <div className={styles.mainLinks}>
                <Link href={'/'}>Main</Link>
                <Link href={'/profile'}>Profile</Link>
                <Button
                    onClick={onToggleModal}
                >
                    {authState ? 'Logout' : 'Login'}
                </Button>
                {isAuthModal && <LoginModal onCloseModal={setAuthModal}/>}
            </div>
        </div>
    );
};
