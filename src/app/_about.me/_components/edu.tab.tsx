"use client";

import { edu } from "@/app/_libs/data";
import { timelineItemTheme } from "@/app/_libs/flowbite.theme";
import { Flowbite, Timeline } from "flowbite-react";

export default function EduTab() {
  return (
    <Flowbite theme={{ theme: timelineItemTheme }}>
      <Timeline>
        {edu.map((e, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{e.date}</Timeline.Time>
              <Timeline.Title>{e.place}</Timeline.Title>
              <Timeline.Body className="font-light md:text-base text-sm">
                {e.desc}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </Flowbite>
  );
}
