import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Scene } from "react-scrollmagic";
import { PageComponentProps, usePageManager, useSetPage } from "../pages/util";
import SkillIcon from "../components/skills-item/skill-icon";
import Icon from "../components/icon/icon";
import SkillItem from "../components/skills-item/skill-item";

interface SkillProps extends PageComponentProps {}

const Skills: React.FC<SkillProps> = ({ pageKey }) => {
  const rootEl = useSetPage(pageKey);

  const {
    setProgress,
    tweenRootEl,
    leftTitleEl,
    mainTitleEl,
    subTitleEl,
    arrowEl,
    rightEl,
    lastPhraseEl,
  } = useTween();

  const duration = 3000;
  return (
    <div ref={rootEl} css={wrapperStyle(duration)}>
      <Scene pin duration={duration} triggerHook="onLeave">
        {(progress: number) => {
          console.log(progress);
          setProgress(progress);
          return (
            <div css={rootStyle}>
              <div css={tweenRootStyle} ref={tweenRootEl}>
                <div css={leftTitle} ref={leftTitleEl}>
                  <h2 ref={mainTitleEl}>SKILLS</h2>
                  <h3 ref={subTitleEl}>EXPERIENCE.</h3>
                  <div ref={arrowEl} css={iconStyle}>
                    <Icon icon="arrow" />
                  </div>
                </div>
                <div css={rightStyle} ref={rightEl}>
                  {new Array(5).fill(null).map((_, i) => {
                    if (i % 2) {
                      return (
                        <div css={skillItemWrapperStyle}>
                          <div></div>
                          <SkillItem
                            title="ILLUSTRATOR"
                            icon="illustrator"
                            body="With our crew of informed video, audio and editing With our crew of informed."
                            percent={60}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div css={skillItemWrapperStyle}>
                          <div></div>
                          <SkillItem
                            title="PHOTOSHOP"
                            icon="photoshop"
                            body="With our crew of informed video, audio and editing With our crew of informed."
                            subTitle="고급"
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div css={lastPhraseStyle} ref={lastPhraseEl}>
                모든것을 바꿀때까지
              </div>
            </div>
          );
        }}
      </Scene>
    </div>
  );
};

export default Skills;

const useTween = () => {
  const tweenRootEl = useRef<HTMLDivElement>(null);
  const leftTitleEl = useRef<HTMLDivElement>(null);
  const mainTitleEl = useRef<HTMLHeadingElement>(null);
  const subTitleEl = useRef<HTMLHeadingElement>(null);
  const arrowEl = useRef<HTMLDivElement>(null);
  const rightEl = useRef<HTMLDivElement>(null);

  const lastPhraseEl = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));

  useEffect(() => {
    tl.current.pause();

    tl.current
      .to(tweenRootEl.current, { opacity: 1 })
      .to(leftTitleEl.current, { y: -50 })
      .to(mainTitleEl.current, { fontSize: "140px", lineHeight: "140px" }, "<")
      .to(subTitleEl.current, { fontSize: "130px", lineHeight: "130px" }, "<")
      .to(arrowEl.current, { transform: "rotate(-45deg)" }, "<")
      .to(rightEl.current, { y: -1000, duration: 2 }, "<")
      .to(tweenRootEl.current, { opacity: 0 })
      .from(lastPhraseEl.current, { opacity: 0, y: 50 })
      .to(lastPhraseEl.current, { y: -100, fontSize: "50px", color: "#000" })
      .to(lastPhraseEl.current, {});
  }, []);

  const setProgress = (progress: number) => {
    tl.current.progress(progress / 2);
  };

  return {
    setProgress,
    tweenRootEl,
    leftTitleEl,
    mainTitleEl,
    subTitleEl,
    arrowEl,
    rightEl,
    lastPhraseEl,
  };
};

const wrapperStyle = (height: number) => css`
  height: ${height - 300}px;
`;

const rootStyle = css`
  position: relative;
`;
const tweenRootStyle = css`
  opacity: 0;
`;

const leftTitle = css`
  position: absolute;
  top: 0px;
  left: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    font-weight: 700;
    font-size: 160px;
    line-height: 160px;
  }
  > h3 {
    font-weight: 300;
    font-size: 150px;
    line-height: 150px;
  }
`;

const iconStyle = css`
  display: inline-block;

  position: absolute;
  bottom: 30px;
  right: 0;
  transform: rotate(0deg);
`;

const rightStyle = css`
  position: absolute;
  top: 500px;

  right: 75px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  border-left: 1px solid white;
  padding-left: 60px;
`;

const skillItemWrapperStyle = css`
  position: relative;
  > div:first-child {
    position: absolute;
    left: -64px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 8px;
    background-color: white;
  }
`;

const lastPhraseStyle = css`
  position: absolute;
  top: 320px;
  width: 100%;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
`;
