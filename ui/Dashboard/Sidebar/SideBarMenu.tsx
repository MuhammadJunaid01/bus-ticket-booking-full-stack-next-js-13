import { useAppSelector } from "@/redux/hooks";
import {
  IconArrowBadgeDown,
  IconArrowBadgeRight,
  IconHome,
  IconFile,
} from "@tabler/icons-react";
import React from "react";
import CollapseMenuSidebar from "../CollapseMenu";
import {
  sideBarDashboardPagesData,
  siderbarDahboardData,
} from "@/lib/data/dashboard-data";
import { handleStateToggle } from "@/lib/utils";

const SideBarMenu = () => {
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const [isCollapse, setIsCollapse] = React.useState<boolean>(true);
  const [isPagesCollapse, setIsPagesCollapse] = React.useState<boolean>(false);
  return (
    <>
      <CollapseMenuSidebar
        isMobile={false}
        subTitle={12}
        title="Dashboard"
        icon={<IconHome cursor="pointer" size={open ? 35 : 26} />}
        navData={siderbarDahboardData}
        collapseIcon={
          isCollapse ? (
            <IconArrowBadgeDown cursor="pointer" />
          ) : (
            <IconArrowBadgeRight cursor="pointer" />
          )
        }
        isCollapse={isCollapse}
        handleCollapse={() => handleStateToggle({ setState: setIsCollapse })}
        isopenSidebar={open}
        isHover={isHover}
      />
      <CollapseMenuSidebar
        isMobile={false}
        subTitle={"New"}
        title="Pages"
        icon={<IconFile cursor="pointer" size={open ? 35 : 26} />}
        navData={sideBarDashboardPagesData}
        collapseIcon={
          isPagesCollapse ? (
            <IconArrowBadgeDown cursor="pointer" />
          ) : (
            <IconArrowBadgeRight cursor="pointer" />
          )
        }
        isCollapse={isPagesCollapse}
        handleCollapse={() =>
          handleStateToggle({ setState: setIsPagesCollapse })
        }
        isopenSidebar={open}
        isHover={isHover}
      />
    </>
  );
};

export default SideBarMenu;
