import { css } from "@emotion/react";
import React from "react";

const scenes = {
  career: "/img/career_bg.png",
  heuristic: "/img/heuristic_bg.png",
  intro: "/img/intro_bg.png",
  skill: "/img/skills_bg.png",
};

interface StaticBackgroundProps {
  scene: keyof typeof scenes;
}

const StaticBackground = React.forwardRef<
  HTMLImageElement,
  StaticBackgroundProps
>(({ scene }, ref) => {
  return <img ref={ref} css={rootStyle} src={scenes[scene]} />;
});

export default StaticBackground;

const rootStyle = css`
  position: absolute;
  width: 1920px;
  height: 1080px;
  object-fit: cover;
`;
