"use client";
import usePaginate from "@/lib/hooks/usePaginate";
import { MakeBookUiPropsTypes } from "@/lib/interfaces";
import { DateType, selectDate } from "@/lib/utils";
import {
  Box,
  Container,
  Grid,
  Input,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconArrowsExchange2, IconCalendar } from "@tabler/icons-react";
import dayjs from "dayjs";
import React from "react";
import CustomSelect from "./CustomSelect";
import Roads from "./Roads";

const MakeBooking: React.FC<MakeBookUiPropsTypes> = ({ data }) => {
  const [selected, setSelected] = React.useState<DateType[]>([]);
  const [origin, setOrigin] = React.useState<string[]>([]);
  const [dest, setDest] = React.useState<string[]>([]);
  const [toggleOrigin, setToggleOrigin] = React.useState<boolean>(false);
  const [originValue, setOriginValue] = React.useState<string>("");
  const [destValue, setDestValue] = React.useState<string>("");
  const [road, setRoad] = React.useState<string>("");
  const maxSelection = 1;

  const handleSelect = (date: DateType) => {
    setSelected(
      (currentSelected) =>
        selectDate(date, currentSelected, maxSelection) as DateType[]
    );
  };

  const paginate = usePaginate({
    data: data,
    itemsPerPage: 9,
  });
  React.useEffect(() => {
    data.forEach((item) => {
      const parts = item.split("-");
      setOrigin((prevOrigin) => {
        const newOriginSet = new Set([...prevOrigin, parts[0]]);
        return Array.from(newOriginSet);
      });

      setDest((prevDest) => {
        const newDestSet = new Set([...prevDest, parts[1]]);
        return Array.from(newDestSet);
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { handlePageChange, paginateData, totalPage } = paginate;
  const handleOriginToggle = (): void => {
    setToggleOrigin((prev) => !prev);
  };

  return (
    <Container fluid my={10}>
      <Grid justify="space-between">
        <Grid.Col span={12} md={6}>
          <Menu shadow="md" width={290}>
            <Text>Origin</Text>
            <Menu.Target>
              <Input
                mb={10}
                readOnly
                icon={<IconCalendar size={15} />}
                variant="unstyled"
                sx={(theme) => ({
                  width: "100%",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? "#25262B"
                      : theme.colors.gray[2],
                  borderRadius: theme.radius.sm,
                })}
                placeholder="Select Date"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Calendar
                getDayProps={(date) => ({
                  selected: selected.some((s) => dayjs(date).isSame(s, "date")),
                  onClick: () => handleSelect(date),
                })}
              />
            </Menu.Dropdown>
          </Menu>
          <Box
            mb={10}
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "20px",
              position: "relative",
            })}
          >
            <CustomSelect
              value={originValue}
              setState={setOriginValue}
              pl="Pick Origin "
              width="100%"
              label="Origin"
              data={toggleOrigin ? dest : origin.slice(0, 1)}
            />
            <CustomSelect
              value={destValue}
              setState={setDestValue}
              pl="Pick Destination"
              width="100%"
              label="Destination"
              data={toggleOrigin ? origin.slice(0, 1) : dest}
            />
            <UnstyledButton
              onClick={handleOriginToggle}
              sx={(theme) => ({
                position: "absolute",
                top: "21px",
                left: "47.2%",
                height: "36px",
                width: "36px",
                borderRadius: "50%",
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.indigo[3]
                    : theme.colors.gray[2],
                textAlign: "center",
                color:
                  theme.colorScheme === "dark" ? "white" : theme.colors.gray[9],
              })}
            >
              <IconArrowsExchange2 size={20} />
            </UnstyledButton>
          </Box>

          <CustomSelect
            value={road}
            setState={setRoad}
            pl="Pick one Road"
            label="Chose Road"
            data={data}
          />
          <UnstyledButton
            sx={(theme) => ({
              width: "100%",
              marginTop: "10px",
              textAlign: "center",
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[2]
                  : theme.colors.gray[6],
              padding: "10px ",
              borderRadius: theme.radius.sm,
            })}
          >
            Search
          </UnstyledButton>
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <Roads
            onClick={handlePageChange}
            totalPage={totalPage}
            title={"Roads info"}
            data={paginateData}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MakeBooking;
