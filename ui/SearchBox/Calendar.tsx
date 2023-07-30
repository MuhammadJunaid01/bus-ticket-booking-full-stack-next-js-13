import React, { useState } from "react";
import dayjs from "dayjs";
import { Group, Menu, Input } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { seacrhBoxStyles } from "@/lib/styles";
import { DateType, selectDate, parseToDate } from "@/lib/utils";
export interface CustomCalendarProps {
  setSelected: React.Dispatch<React.SetStateAction<DateType[]>>;
  selected: DateType[];
  date: string;
}
const CustomCalendar: React.FC<CustomCalendarProps> = ({
  setSelected,
  selected,
  date,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { classes } = seacrhBoxStyles();
  const { input } = classes;
  const maxSelection = 1;

  const handleSelect = (date: DateType) => {
    setSelected((currentSelected) =>
      selectDate(date, currentSelected.map(parseToDate), maxSelection)
    );
  };

  return (
    <Group>
      <Menu shadow="md" width={290}>
        <Menu.Target>
          <Input
            readOnly
            icon={<IconCalendar size={15} />}
            variant="unstyled"
            className={input}
            placeholder={date ?? "JOURNEY DATE"}
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
    </Group>
  );
};
export default CustomCalendar;
