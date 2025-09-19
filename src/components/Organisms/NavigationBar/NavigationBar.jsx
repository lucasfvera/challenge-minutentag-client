import { Avatar } from '../../Atoms/Avatar/Avatar';
import { BurgerMenuIcon } from '../../Atoms/Icons/BurgerMenuIcon';
import { IconButton } from '../../Molecules/IconButton/IconButton';
import styles from './styles.module.css';

export const NavigationBar = () => {
    return (
        <nav className={styles.navBar}>
            <IconButton
                onClick={() => window.alert('Open the burger menu')}
                ariaLabel={'burger menu'}
            >
                <BurgerMenuIcon />
            </IconButton>
            <Avatar imgSrc="/icons/default-user-avatar.jpg" />
        </nav>
    );
};
