import React, { useState } from "react";
import dayjs from "dayjs";
import { Group, Button, Menu, Input } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
export default function CustomCalendar() {
  const [selected, setSelected] = useState<Date[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);

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
            sx={(theme) => ({
              width: "",
              color: "gray",
              padding: "6px 0px",
              border: `1px solid ${
                theme.colorScheme === "dark"
                  ? theme.colors.gray[3]
                  : theme.colors.gray[3]
              }`,
              borderRadius: theme.radius.md,
              ...theme.fn.focusStyles(),
              backgroundColor:
                theme.colorScheme === "dark" ? "white" : theme.colors.gray[1],
              ...theme.fn.placeholderStyles(),
              [theme.fn.smallerThan("md")]: {
                margin: "11px 0px",
                width: "100%",
              },
            })}
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
