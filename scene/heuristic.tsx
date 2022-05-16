import { css } from "@emotion/react";
import { Timeline, Tween } from "react-gsap";
import { Scene } from "react-scrollmagic";

const Heuristic: React.FC<{}> = () => {
  return (
    <Scene triggerHook="onLeave" pin duration={2000}>
      {(progress: number) => {
        return (
          <div css={[rootStyle, progress === 0 && blockStyle]}>
            <Timeline
              totalProgress={progress}
              paused
              target={<div css={blackoutWrapperStyle} />}
            >
              <Tween to={{ "--size": "30%", "--sharpness": "10%" }} />
              <Tween to={{ "--x": "700px" }} />
              <Tween to={{ "--x": "300px" }} />
              <Tween to={{ "--size": "200%", "--sharpness": "100%" }} />
              <Tween to={{ "--size": "0%", "--sharpness": "0%" }} />
            </Timeline>
            <h2 css={titleStyle}>
              Design is a <br /> Heuristic process
            </h2>
          </div>
        );
      }}
    </Scene>
  );
};

export default Heuristic;

const rootStyle = css`
  position: relative;
`;

const blockStyle = css`
  display: none;
`;

const blackoutWrapperStyle = css`
  --x: 300px;
  --y: 300px;

  --size: 0%;
  --sharpness: 0%;
  z-index: 9;
  position: absolute;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--x) var(--y),
    transparent var(--sharpness),
    rgba(0, 0, 0, 1) var(--size)
  );
`;

const titleStyle = css`
  position: absolute;
  left: 100px;
  top: 200px;
  font-weight: 800;
  font-size: 90px;
  line-height: 102px;
`;
