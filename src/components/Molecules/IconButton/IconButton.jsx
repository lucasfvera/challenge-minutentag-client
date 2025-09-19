import styles from './styles.module.css';

/**
 *
 * @param {{children: import('react').ReactNode, onClick: (...args: any[]) => void, ariaLabel: string}} props
 * @returns {import('react').ReactNode}
 */
export const IconButton = ({ children, onClick, ariaLabel }) => {
    return (
        <button
            aria-label={ariaLabel}
            onClick={onClick}
            className={styles.iconButton}
        >
            {children}
        </button>
    );
};
