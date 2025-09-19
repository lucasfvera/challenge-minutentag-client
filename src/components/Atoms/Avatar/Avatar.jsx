import styles from './styles.module.css';

/**
 * Component to render an image as an Avatar like
 * @param {{imgSrc: string}} props
 * @returns {import("react").JSX.Element}
 */
export const Avatar = ({ imgSrc }) => {
    return (
        <img
            className={styles.avatar}
            src={imgSrc}
            alt="user avatar"
            width={40}
            height={40}
        />
    );
};
