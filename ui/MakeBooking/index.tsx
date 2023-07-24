"use client";
import { MakeBookUiPropsTypes } from "@/lib/interfaces";
import {
  Box,
  Container,
  Grid,
  Input,
  Menu,
  Select,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import dayjs from "dayjs";
import { Calendar } from "@mantine/dates";
import CustomCalendar from "../SearchBox/Calendar";
import { IconCalendar } from "@tabler/icons-react";
import Roads from "./Roads";
import usePaginate from "@/lib/hooks/usePaginate";

const MakeBooking: React.FC<MakeBookUiPropsTypes> = ({ data }) => {
  const [searchValue, onSearchChange] = React.useState("");
  const [selected, setSelected] = React.useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  const paginate = usePaginate({
    data: data,
    itemsPerPage: 10,
  });
  const { handlePageChange, paginateData, totalPage } = paginate;
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
          <Box mb={10}>
            <Text>Origin</Text>
            <Input placeholder="Origin" />
          </Box>
          <Text>Destination:</Text>
          <Input placeholder="Destination" mb={10} />
          <Select
            label="Chose Road"
            placeholder="Pick one Road"
            searchable
            onSearchChange={onSearchChange}
            searchValue={searchValue}
            nothingFound="No options"
            data={data}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={12} md={3}>
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
function useForm(arg0: { initialValues: { name: string; email: string } }) {
  throw new Error("Function not implemented.");
}
