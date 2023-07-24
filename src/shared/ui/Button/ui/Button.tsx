import styles from './Button.module.scss'

export const Button = (props) => {
    const {
        children,
        ...otherProps
    } = props

    return (
        <button className={styles.btn} {...otherProps}>
            {children}
        </button>
    );
};
