import usePaginate from "@/libs/hooks/usePaginate";
import { StoriesProps } from "@/libs/interfaces";
import { storiesStyles } from "@/libs/styles";
import {
  Blockquote,
  Box,
  Grid,
  Pagination,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Image from "next/image";
import React from "react";

const Stories: React.FC<StoriesProps> = ({ title, data }) => {
  const { classes } = storiesStyles();
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  const isLightMode = theme.colorScheme === "light";
  const {
    container,
    userImg,
    title: titleStyle,
    story: storyStyle,
    highLightStory,
  } = classes;
  const paginate = usePaginate({ data: data, itemsPerPage: 4 });
  const { handlePageChange, totalPage, paginateData } = paginate;
  return (
    <Box ref={ref} className={container}>
      <Text className={titleStyle}>{title}</Text>
      <Grid mt={30}>
        {paginateData.map((story, index) => {
          return (
            <Grid.Col key={index} span={12} md={3}>
              <Box
                className={`${storyStyle} ${
                  index === 2 && hovered === false ? highLightStory : ""
                }`}
              >
                <Blockquote cite={`– ${story.userName}`}>
                  Life is like an npm install – you never know what you are
                  going to get.
                </Blockquote>
                <Image
                  className={userImg}
                  width={100}
                  height={100}
                  src={story.userPic}
                  alt={story.userName}
                />
              </Box>
            </Grid.Col>
          );
        })}
      </Grid>
      <Pagination
        total={totalPage}
        onChange={handlePageChange}
        radius="xs"
        sx={{ justifyContent: "center", marginTop: "22px" }}
      />
    </Box>
  );
};

export default Stories;
