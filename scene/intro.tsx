import { css } from "@emotion/react";

import { Tween } from "react-gsap";
import { Scene } from "react-scrollmagic";

import MoveSpan from "../components/moveSpan/MoveSpan";
import { PageComponentProps, useSetPage } from "../pages/util";

interface IntroProps extends PageComponentProps {}

const Intro: React.FC<IntroProps> = ({ pageKey }) => {
  const rootEl = useSetPage(pageKey);

  const duration = 300;

  return (
    <div ref={rootEl} css={wrapperStyle(duration)}>
      <Scene triggerHook="onLeave" pin duration={duration}>
        {(progress: number) => (
          <div css={rootStyle}>
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
        )}
      </Scene>
    </div>
  );
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
