import { useLocation } from "wouter";
import { Avatar } from "../../Atoms/Avatar/Avatar";
import { BackArrowIcon } from "../../Atoms/Icons/BackArrowIcon";
import { BurgerMenuIcon } from "../../Atoms/Icons/BurgerMenuIcon";
import { ThreeDotsIcon } from "../../Atoms/Icons/ThreeDotsIcon";
import { Typography } from "../../Atoms/Typography/Typography";
import { IconButton } from "../../Molecules/IconButton/IconButton";
import styles from "./styles.module.css";

export const DetailsPageNavigation = () => {
  const [location, navigate] = useLocation();

  return (
    <nav className={styles.productDetailsNavBar}>
      <IconButton
        onClick={() => navigate("../")}
        ariaLabel="back navigation button"
      >
        <BackArrowIcon />
      </IconButton>
      <Typography as="h1" type="header" weight="bold">
        Detail
      </Typography>
      <IconButton
        onClick={() => window.alert("More options")}
        ariaLabel="more options button"
      >
        <ThreeDotsIcon />
      </IconButton>
    </nav>
  );
};
