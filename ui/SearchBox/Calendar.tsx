import React, { useState } from "react";
import dayjs from "dayjs";
import { Group, Button, Menu, Input } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { seacrhBoxStyles } from "@/lib/styles";
export default function CustomCalendar() {
  const [selected, setSelected] = useState<Date[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const { classes } = seacrhBoxStyles();
  const { input } = classes;
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

  const handleCalendarButtonClick = () => {
    setShowCalendar(!showCalendar);
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
            placeholder="JOURNEY DATE"
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
}
