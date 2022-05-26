import { Timeline, Tween } from "react-gsap";
import Icon from "./icon";

const MoveDownIcon = () => {
  const amplitude = 4;
  return (
    <Timeline
      repeat={-1}
      target={
        <div>
          <Icon icon="downArrow" />
        </div>
      }
    >
      <Tween from={{ y: amplitude }} to={{ y: -amplitude }} duration={1.3} />
      <Tween from={{ y: -amplitude }} to={{ y: amplitude }} duration={1.3} />
    </Timeline>
  );
};

export default MoveDownIcon;
