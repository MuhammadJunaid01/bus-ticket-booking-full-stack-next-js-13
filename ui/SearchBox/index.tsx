/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Input,
  Loader,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
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
import { Busses } from "@/redux/features/buses";
const SearchBox = () => {
  const { data } = useAppSelector(
    (state: { bussData: Busses }) => state.bussData
  );
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
    if (destValue === "" || originValue === "" || selected.length === 0) {
      notifications.show({
        title: "Please fil all feilds",
        message: "Please fil all feilds",
      });
      return;
    }
    setLoading(true);
    await loadUi(400);
    setLoading(false);
    const roadVl = `${originValue}-${destValue}`;
    const bus = searchBus(data, roadVl);

    if (bus) {
      setBus(bus);
      setModalVisible(true);
    }
  };
  React.useEffect(() => {
    const dateStr = formatSelectedDates();
    seDateStr(dateStr[0]);
  }, [formatSelectedDates]);

  // console.log("road val", roadVl);
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

        <CustomCalendar
          date={dateStr}
          selected={selected}
          setSelected={setSelected}
        />

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
