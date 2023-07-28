"use client";

import { Auth } from "@/ui";
import { Box, Container, Grid, MediaQuery, Text } from "@mantine/core";

const SignUpPage = () => {
  return (
    <Box style={{ margin: "10px 0px" }}>
      <Container fluid>
        <Grid>
          <Grid.Col span={12} md={4}>
            <Auth isOpen />
          </Grid.Col>
          <Grid.Col span={12} md={8}>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Box
                sx={{
                  backgroundImage: `url('https://www.koder.top/demo/authfy/demo/images/computer-1867758_1920-min.jpg')`,
                  height: "90vh",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  //   marginTop: "-10px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "35px",
                    fontWeight: "800",
                    color: "white",
                  }}
                >
                  Welcome to AR Poribohon Account
                </Text>
              </Box>
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUpPage;
