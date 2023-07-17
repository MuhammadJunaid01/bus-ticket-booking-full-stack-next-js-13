import { LinksProps } from "@/libs/interfaces";
import { navbarStyles } from "@/libs/styles";
import {
  Group,
  ThemeIcon,
  UnstyledButton,
  rem,
  Text,
  Image,
} from "@mantine/core";
import React from "react";

const Links: React.FC<LinksProps> = ({ data }): React.ReactNode => {
  const { classes, theme } = navbarStyles();
  const links = data.map((item, index) => (
    <UnstyledButton className={classes.subLink} key={index}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <Image
            sx={(theme) => ({
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            })}
            src={item.logo}
            alt={item.name}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.name}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  return links;
};

export default Links;
