import styles from './Modal.module.scss'

export const Modal = ({children}) => {

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
