import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Tween } from "react-gsap";
import { Scene } from "react-scrollmagic";
import StaticBackground from "../components/background/static-background";

import MoveSpan from "../components/moveSpan/MoveSpan";
import { PageComponentProps, useSetPage } from "../pages/util";

interface IntroProps extends PageComponentProps {}

const Intro: React.FC<IntroProps> = ({ pageKey }) => {
  const rootEl = useSetPage(pageKey);

  const { backgroundEl, setProgress } = useBackgroundTween();
  const duration = 300;

  return (
    <div ref={rootEl} css={wrapperStyle(duration)}>
      <Scene triggerHook="onLeave" pin duration={duration}>
        {(progress: number) => {
          setProgress(progress);
          return (
            <div css={rootStyle}>
              <StaticBackground ref={backgroundEl} scene="intro" />
              <Tween
                to={{ opacity: 0, y: "-100px" }}
                paused
                totalProgress={progress}
              >
                <div css={phraseStyle}>
                  <p css={subTitleStyle}>
                    "The Standard <br /> of completion in out opinion"
                  </p>
                  <div css={titleWrapperStyle}>
                    <span css={titleStyle}>
                      <MoveSpan text="Deep " fontSize="154px" />
                      <span> &nbsp;Diver</span>
                    </span>
                  </div>
                </div>
              </Tween>
            </div>
          );
        }}
      </Scene>
    </div>
  );
};

const useBackgroundTween = () => {
  const backgroundEl = useRef<HTMLImageElement>(null);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));

  useEffect(() => {
    tl.current.pause();

    tl.current.to(backgroundEl.current, {
      opacity: 0,
    });
  }, []);

  const setProgress = (progress: number) => {
    tl.current.progress(progress);
  };

  return { backgroundEl, setProgress };
};

export default Intro;

const wrapperStyle = (height: number) => css`
  height: ${height}px;
`;

const rootStyle = css`
  position: relative;
`;

const phraseStyle = css`
  position: absolute;
  left: 100px;
  top: 20vh;
`;

const titleWrapperStyle = css`
  position: relative;
  display: inline-block;
`;

const titleStyle = css`
  display: flex;
  font-size: 154px;
  font-weight: 400;

  :after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -21px;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }
`;

const subTitleStyle = css`
  font-weight: 400;
  font-size: 68px;
  line-height: 97px;
`;
