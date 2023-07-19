import { Avatar, Button, Indicator, Menu, Text } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
  IconCircleLetterP,
} from "@tabler/icons-react";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Indicator
            style={{ marginRight: "11px" }}
            offset={2}
            position="top-end"
            color="#00B9F6"
            // withBorder
            inline
            processing
            size={12}
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="md"
              radius="xl"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=120&q=120"
            />
          </Indicator>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>
          <Menu.Item icon={<IconCircleLetterP size={14} />}>Profile</Menu.Item>

          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>

          <Menu.Item color="red" icon={<IconTrash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Profile;
