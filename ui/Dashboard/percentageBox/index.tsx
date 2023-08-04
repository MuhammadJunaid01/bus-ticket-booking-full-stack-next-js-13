import { Box, RingProgress, Text } from "@mantine/core";
import React from "react";
export interface PercentageBoxProps {
  percentage: number;
}
const PercentageBox: React.FC<PercentageBoxProps> = ({ percentage }) => {
  return (
    <Box>
      {/* <Text>{percentage}</Text> */}
      <RingProgress
        size={90}
        thickness={5}
        roundCaps={true}
        rootColor="white"
        classNames={{ root: "root", label: "label" }}
        sections={[{ value: 40, color: "blue" }]}
        label={
          <Text color="white" weight={700} align="center" size="xl">
            {`${percentage}%`}
          </Text>
        }
      />
    </Box>
  );
};

export default PercentageBox;
