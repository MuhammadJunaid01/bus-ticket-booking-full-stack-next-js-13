import { Avatar, Button, Indicator, Menu, Text } from "@mantine/core";
import {
  IconLayoutDashboard,
  IconTrash,
  IconCircleLetterP,
  IconRegistered,
} from "@tabler/icons-react";
import Link from "next/link";
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
          <Menu.Label>SignUp</Menu.Label>
          <Link style={{ textDecoration: "none", color: "unset" }} href="/auth">
            <Menu.Item icon={<IconRegistered size={14} />}>SignUp</Menu.Item>
          </Link>
          <Menu.Label>Profile</Menu.Label>
          <Link
            style={{ textDecoration: "none", color: "unset" }}
            href="/profile"
          >
            <Menu.Item icon={<IconCircleLetterP size={14} />}>
              Profile
            </Menu.Item>
          </Link>
          <Menu.Label>Dashboard</Menu.Label>
          <Link
            style={{ textDecoration: "none", color: "unset" }}
            href="/dashboard"
          >
            <Menu.Item icon={<IconLayoutDashboard size={14} />}>
              Dashboard
            </Menu.Item>
          </Link>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>

          <Menu.Item color="red" icon={<IconTrash size={14} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Profile;
