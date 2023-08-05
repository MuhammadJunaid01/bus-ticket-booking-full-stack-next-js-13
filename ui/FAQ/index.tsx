import { FaqPropsTypes } from "@/lib/interfaces";
import { Accordion, Box, Text } from "@mantine/core";
import React from "react";

const FAQ: React.FC<FaqPropsTypes> = ({ data, title }) => {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        [theme.fn.largerThan("sm")]: {
          width: "50%",
          margin: "0 auto",
        },
      })}
    >
      <Text align="center" my={12} size={19} fw={600}>
        {title}
      </Text>
      <Accordion defaultValue="customization">
        {data.map(({ name, value }, index) => {
          return (
            <Accordion.Item key={index} value={name}>
              <Accordion.Control>{name}</Accordion.Control>
              <Accordion.Panel>
                {typeof value === "string" ? (
                  <Box>
                    <Text>{value}</Text>
                  </Box>
                ) : (
                  value.map(({ question, answer }, valueIndex) => {
                    return (
                      <Box key={valueIndex}>
                        <Box my={24}>
                          <Text mb={6}>{question}</Text>
                          <Text>{answer}</Text>
                        </Box>
                      </Box>
                    );
                  })
                )}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default FAQ;
