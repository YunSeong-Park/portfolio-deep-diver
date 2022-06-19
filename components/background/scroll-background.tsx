import { css } from "@emotion/react";
import { forwardRef } from "react";
import { Tween } from "react-gsap";

const scenes = {
  skill: {
    url: "/img/skills_bg.png",
    width: 1920,
    height: 5000,
  },
};

interface ScrollBackgroundProps {
  scene: keyof typeof scenes;
  progress: number;
}

const ScrollBackground = forwardRef<HTMLDivElement, ScrollBackgroundProps>(
  ({ scene, progress }, ref) => {
    return (
      <div ref={ref} css={rootStyle}>
        <Tween
          to={{ y: -scenes[scene].height + 800 }}
          paused
          totalProgress={progress}
        >
          <img src={scenes[scene].url} />
        </Tween>
      </div>
    );
  }
);

export default ScrollBackground;

const rootStyle = css`
  position: absolute;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  //overflow: hidden;
  img {
    width: 1920px;
    height: 5000px;
  }
`;
