import { createStyles } from "@mantine/core";

export const addBusStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    position: "relative",
    marginTop: 60,
  },
  logoBox: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.gray[2] : ""
      }`,
      overflow: "hidden",
    },
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  busInput: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1,1fr)",
    [theme.fn.largerThan("sm")]: {
      gridTemplateColumns: "repeat(3,1fr)",
      // gridGap: 11,
      gridColumnGap: 11,
      gridRowGap: 22,
    },
  },
}));
