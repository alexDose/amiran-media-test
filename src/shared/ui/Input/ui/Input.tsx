import styles from './Input.module.scss'

export const Input = (props) => {
    const {
        ...otherProps
    } = props

    return (
        <input className={styles.Input} {...otherProps}/>
    );
};
