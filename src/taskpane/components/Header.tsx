import * as React from "react";
import { tokens, makeStyles } from "@fluentui/react-components";

export interface HeaderProps {
  message: string;
}

const useStyles = makeStyles({
  welcome__header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    paddingTop: "30px",
    backgroundColor: tokens.colorNeutralBackground3,
  },
  message: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightRegular,
    fontColor: tokens.colorNeutralBackgroundStatic,
  },
});

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { message } = props;
  const styles = useStyles();

  return (
    <section className={styles.welcome__header}>
      <h1 className={styles.message}>{message}</h1>
    </section>
  );
};

export default Header;
