"use client";

import { Flowbite, Tabs } from "flowbite-react";
import { FaBook } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { tabsItemTheme } from "@/app/_libs/flowbite.theme";
import { TbCertificate } from "react-icons/tb";
type Props = {
  tab1: React.ReactNode;
  tab2: React.ReactNode;
  tab3: React.ReactNode;
  tab4: React.ReactNode;
};

export default function ExpTabs({ tab1, tab2, tab3, tab4 }: Props) {
  return (
    <Flowbite theme={{ theme: tabsItemTheme }}>
      <Tabs>
        <Tabs.Item active title="Education" icon={FaBook}>
          {tab1}
        </Tabs.Item>
        <Tabs.Item title="Work" icon={PiOfficeChairFill}>
          {tab2}
        </Tabs.Item>
        <Tabs.Item title="Organization" icon={FaPeopleGroup}>
          {tab3}
        </Tabs.Item>
        <Tabs.Item title="Certification" icon={TbCertificate}>
          {tab4}
        </Tabs.Item>
      </Tabs>
    </Flowbite>
  );
}
