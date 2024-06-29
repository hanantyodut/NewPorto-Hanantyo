"use client";

import { edu, organization, work } from "@/app/_libs/data";
import { timelineItemTheme } from "@/app/_libs/flowbite.theme";
import { Flowbite, Timeline } from "flowbite-react";

export default function OrgTab() {
  return (
    <Flowbite theme={{ theme: timelineItemTheme }}>
      <Timeline>
        {organization.map((w, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{w.date}</Timeline.Time>
              <Timeline.Title>{w.team}</Timeline.Title>
              <Timeline.Body className="font-light md:text-base text-sm">
                {w.pos}
              </Timeline.Body>
              <Timeline.Body className="font-light md:text-base text-xs ">
                {w.loc}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flowbite>
  );
}
