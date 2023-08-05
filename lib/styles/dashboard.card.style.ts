import { createStyles } from "@mantine/core";
import { btnText } from "../types";
type dashboardCardStyleProps = {
  isHighlighted: boolean;
  iconBoxClor?: string;
  btnText: btnText;
};
export const dashboardCardStyle = createStyles(
  (theme, props: dashboardCardStyleProps) => ({
    container: {
      position: "relative",
      backgroundColor: props.isHighlighted
        ? "#7092D8"
        : theme.colorScheme === "dark"
        ? theme.colors.gray[9]
        : theme.colors.gray[1],
      [theme.fn.largerThan("sm")]: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      },
      borderRadius: "6px",
      padding: "10px",
      marginTop: "12px",
    },
    iconBox: {
      height: "40px",
      width: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.iconBoxClor,
      borderRadius: "50%",
    },
    btn:
      props.btnText === "Click here"
        ? {
            textDecoration: "underline",
            marginTop: "11px",
            color: "white",
          }
        : {},
  })
);
