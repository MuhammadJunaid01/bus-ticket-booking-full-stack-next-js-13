"use client";
import usePaginate from "@/lib/hooks/usePaginate";
import { MakeBookUiPropsTypes } from "@/lib/interfaces";
import { BussesTypes } from "@/lib/types";
import {
  DateType,
  formatToDateString,
  parseToDate,
  searchBus,
  selectDate,
} from "@/lib/utils";
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
import { notifications } from "@mantine/notifications";
import { IconArrowsExchange2, IconCalendar } from "@tabler/icons-react";
import dayjs from "dayjs";
import React from "react";
import Bus from "./Bus";
import CustomSelect from "./CustomSelect";
import Roads from "./Roads";

const MakeBooking: React.FC<MakeBookUiPropsTypes> = ({ data, buses }) => {
  const [selected, setSelected] = React.useState<DateType[]>([]);
  const [origin, setOrigin] = React.useState<string[]>([]);
  const [dest, setDest] = React.useState<string[]>([]);
  const [toggleOrigin, setToggleOrigin] = React.useState<boolean>(false);
  const [originValue, setOriginValue] = React.useState<string>("");
  const [destValue, setDestValue] = React.useState<string>("");
  const [road, setRoad] = React.useState<string>("");
  const [bus, setBus] = React.useState<BussesTypes | null>(null);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  // const [isSearchAble, setIsSearcheAble] = React.useState<boolean>(false);
  const [dateStr, seDateStr] = React.useState<string>("");
  const maxSelection = 1;

  const handleSelect = (date: DateType) => {
    setSelected((currentSelected) =>
      selectDate(date, currentSelected.map(parseToDate), maxSelection)
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
    // const date = formatSelectedDates();
    // console.log("date str", date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const formatSelectedDates = React.useCallback(() => {
    return selected.map((data) => formatToDateString(data));
  }, [selected]);
  const { handlePageChange, paginateData, totalPage } = paginate;
  const handleOriginToggle = (): void => {
    setToggleOrigin((prev) => !prev);
  };
  // console.log("selected date", selected);
  console.log("BUSES", buses);
  const handleSearch = () => {
    if (
      road === "" ||
      destValue === "" ||
      originValue === "" ||
      selected.length === 0
    ) {
      notifications.show({
        title: "Please fil all feilds",
        message: "Hey there, your code is awesome! 🤥",
        // color: "red",
        // sx: { backgroundColor: },
      });
      return; // You might want to include this return statement to stop further execution after displaying the alert.
    }

    const bus = searchBus(buses, road);
    // console.log("nnnnnnnnnn", bus);
    const dateStr = formatSelectedDates();
    seDateStr(dateStr[0]);

    if (bus) {
      setBus(bus);
      setModalVisible(true); // Show the modal if the bus is found
    }
  };
  console.log(buses.length);
  return (
    <Container fluid my={10}>
      <Grid justify="space-between">
        <Grid.Col span={12} md={6}>
          <Menu shadow="md" width={290}>
            <Text>Select Date</Text>
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
              value={toggleOrigin ? destValue : originValue}
              setState={setOriginValue}
              pl="Pick Origin "
              width="100%"
              label="Origin"
              data={toggleOrigin ? dest : origin.slice(0, 1)}
            />
            <CustomSelect
              value={toggleOrigin ? originValue : destValue}
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
            onClick={handleSearch}
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
      <Bus
        road={road}
        opend={modalVisible}
        closeModal={setModalVisible}
        bus={bus}
        dest={destValue}
        date={dateStr}
        origin={originValue}
      />
    </Container>
  );
};

export default MakeBooking;
