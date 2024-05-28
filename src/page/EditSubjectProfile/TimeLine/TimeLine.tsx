import { ReactElement } from "react";
import "./timeline.css";

type timelineListType = {id: string; label: string | ReactElement};

interface Props {
  timelineList: timelineListType[];
}

const TimeLine = ({timelineList}: Props) => {
  if (!timelineList.length) {
    return;
  }

  return (
    <ul className="timeline-ul">
      {timelineList.map((timeline: timelineListType, index: number) => {
        return (
          <li key={timeline.id}>
            <span className="tl-boult">{index + 1}</span>
            <span className="font-medium text-lg">{timeline.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TimeLine;
