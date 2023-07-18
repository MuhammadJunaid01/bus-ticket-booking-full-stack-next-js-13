import { createStyles } from "@mantine/core";

export const factsStyles = createStyles((theme) => ({
  image: {
    height: "50px",
    width: "50px",
  },
  imageBox: {
    textAlign: "center",
    height: "110px",
    width: "110px",
    borderRadius: "50%",
    backgroundColor: "#72BF44",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "34%",
    top: "-35px",
    "&::before": {
      position: "absolute",
      content: '""',
      height: "120px",
      width: "120px",
      borderRadius: "50%",
      background: "transparent",
      border: "2px solid #72bf44",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
}));
