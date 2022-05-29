import { Timeline, Tween } from "react-gsap";
import Icon from "./icon";

const MoveDownIcon = () => {
  const amplitude = 4;
  const duration = 1.3;
  return (
    <Timeline
      repeat={-1}
      target={
        <div>
          <Icon icon="downArrow" />
        </div>
      }
    >
      <Tween
        from={{ y: amplitude }}
        to={{ y: -amplitude }}
        duration={duration}
      />
      <Tween
        from={{ y: -amplitude }}
        to={{ y: amplitude }}
        duration={duration}
      />
    </Timeline>
  );
};

export default MoveDownIcon;
