import { Timeline, Tween } from "react-gsap";
import Icon from "./icon";

const MoveDownIcon = () => {
  const amplitude = 3;
  return (
    <Timeline
      repeat={-1}
      target={
        <div>
          <Icon icon="downArrow" />
        </div>
      }
    >
      <Tween from={{ y: amplitude }} to={{ y: -amplitude }} duration={1.4} />
      <Tween from={{ y: -amplitude }} to={{ y: amplitude }} duration={1.4} />
    </Timeline>
  );
};

export default MoveDownIcon;
