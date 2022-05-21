import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import MoveSpan from "../components/moveSpan/MoveSpan";
import { Page, usePageManager, useSetPage } from "../pages/util";

const key = "intro";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  const rootEl = useSetPage(key);

  return (
    <div ref={rootEl}>
      <Scene triggerHook="onLeave" pin duration={300}>
        {(progress: number) => {
          return (
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
          );
        }}
      </Scene>
    </div>
  );
};

export default { component: Intro, key };

const rootStyle = css`
  position: relative;
`;

const phraseStyle = css`
  position: absolute;
  left: 100px;
  top: 180px;
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
