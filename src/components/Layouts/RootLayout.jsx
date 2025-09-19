import styles from './styles.module.css';

/**
 *
 * @param {{children: import("react").ReactElement}} param0
 * @returns
 */
export const RootLayout = ({ children }) => {
    return <div className={styles.rootContainer}>{children}</div>;
};
