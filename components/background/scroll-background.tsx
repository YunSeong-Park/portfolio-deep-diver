import { css } from "@emotion/react";

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

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({
  scene,
  progress,
}) => {
  return <img css={rootStyle(scene, progress)} src={scenes[scene].url} />;
};

export default ScrollBackground;

const rootStyle = (scene: keyof typeof scenes, progress: number) => css`
  position: fixed;
  height: ${scenes[scene].height}px;
  width: ${scenes[scene].width}px;
  transform: translateY(${-scenes[scene].height * (progress * 0.9)}px);
`;
