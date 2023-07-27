/* eslint-disable react/jsx-no-undef */
import { Box, Button, Input, Loader, UnstyledButton } from "@mantine/core";
import React from "react";
import { IconArrowsExchange2, IconMapPin } from "@tabler/icons-react";
import { busRouteData } from "@/lib/data";

import CustomCalendar from "./Calendar";
import { seacrhBoxStyles } from "@/lib/styles";
import CustomSelect from "../CustomSelect";
import useDestAndOrigin from "@/lib/hooks/dest&origin";
import { useAppSelector } from "@/redux/hooks";
import { DateType, formatToDateString, loadUi, searchBus } from "@/lib/utils";
import { BusesTypes } from "@/lib/types";
import { BusModal } from "@/ui";
import { notifications } from "@mantine/notifications";
const SearchBox = () => {
  const { data } = useAppSelector((state) => state.bussData);
  const [bus, setBus] = React.useState<BusesTypes | null>(null);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [road, setRoad] = React.useState<string>("");

  const [toggleOrigin, setToggleOrigin] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<DateType[]>([]);

  const [originValue, setOriginValue] = React.useState<string>("");
  const [destValue, setDestValue] = React.useState<string>("");
  const [dateStr, seDateStr] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { classes } = seacrhBoxStyles();
  const { container, inputBox, input, changeValueBtn, searchBtn } = classes;
  const handleOriginToggle = (): void => {
    setToggleOrigin((prev) => !prev);
  };
  const { origin, dest } = useDestAndOrigin({
    data: busRouteData,
  });
  const formatSelectedDates = React.useCallback(() => {
    return selected.map((data) => formatToDateString(data));
  }, [selected]);
  const handleSearch = async () => {
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
    setLoading(true);
    await loadUi(1000);
    setLoading(false);
    const bus = searchBus(data, road);
    const dateStr = formatSelectedDates();
    seDateStr(dateStr[0]);
    if (bus) {
      setBus(bus);
      setModalVisible(true); // Show the modal if the bus is found
    }
  };
  return (
    <>
      <Box className={container}>
        <Box style={{ position: "relative" }}>
          <Box className={inputBox}>
            <CustomSelect
              value={toggleOrigin ? destValue : originValue}
              setState={setOriginValue}
              pl="Pick Origin "
              width="100%"
              label=""
              data={toggleOrigin ? dest : origin.slice(0, 1)}
              isHomePage
            />
            <CustomSelect
              value={toggleOrigin ? originValue : destValue}
              setState={setDestValue}
              pl="Pick Destination"
              width="100%"
              label=""
              isHomePage
              data={toggleOrigin ? origin.slice(0, 1) : dest}
            />
            <UnstyledButton
              onClick={handleOriginToggle}
              sx={(theme) => ({
                position: "absolute",
                top: "8px",
                left: "45.4%",
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
        </Box>
        <CustomSelect
          value={road}
          setState={setRoad}
          pl="Pick one Road"
          label=""
          data={busRouteData}
          isHomePage
        />
        <CustomCalendar selected={selected} setSelected={setSelected} />
        {/* <Input
          variant="unstyled"
          className={input}
          style={{ cursor: "not-allowed" }}
          icon={<IconMapPin size={14} />}
          placeholder="RETURN "
          readOnly
        /> */}

        <Button loading={loading} onClick={handleSearch} className={searchBtn}>
          {/* {loading ? <Loader size={20} mt={10} /> : null} */}
          SEARCH
        </Button>
      </Box>
      <BusModal
        road={destValue}
        opend={modalVisible}
        closeModal={setModalVisible}
        bus={bus}
        dest={destValue}
        date={dateStr}
        origin={originValue}
      />
    </>
  );
};
export default SearchBox;
