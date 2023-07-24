import React, {useCallback} from 'react';
import {Input} from '@/shared/ui/Input';
import {Button} from '@/shared/ui/Button';
import {Modal} from '@/shared/ui/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {loginByUserName} from "../../model/services/loginByUserName";
import {selectAuth, setPassword, setUsername} from "@/features/auth/model/slice/authSlice";

interface Props {
    onCloseModal: (value: boolean) => void
}

export const LoginModal = ({onCloseModal}: Props) => {
    const dispatch = useDispatch();
    const {username, password, error} = useSelector(selectAuth);

    const onChangeUsername = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        await dispatch(loginByUserName({username, password}))
        dispatch(setUsername(''))
        dispatch(setPassword(''))
        if (error) {
            onCloseModal(false)
        }
    }, [dispatch, username, password])

    return (
        <Modal>
            <h2>Login</h2>
            <Input
                type="text"
                placeholder={'login'}
                onChange={onChangeUsername}
                value={username}/>
            <Input
                type="password"
                placeholder={'password'}
                onChange={onChangePassword}
                value={password}/>

            {error && <div style={{color: 'red'}}>{error}</div>}

            <Button onClick={onLoginClick}>Submit</Button>
        </Modal>
    );
};
