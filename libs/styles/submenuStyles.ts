import { createStyles } from "@mantine/core";

export const submenuStyles = createStyles((theme) => ({
  container: {
    // width: "300px",
    borderRadius: theme.radius.sm,
    zIndex: 10000,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[3],

    [theme.fn.largerThan("sm")]: {
      position: "absolute",
      top: "5px",
      left: "240px",
    },
  },
}));
