import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Scene } from "react-scrollmagic";
import gsap from "gsap";
import { PageComponentProps, useSetPage } from "../pages/util";
import StaticBackground from "../components/background/static-background";

interface CareerProps extends PageComponentProps {}

const Career: React.FC<CareerProps> = ({ pageKey }) => {
  const pagerootEl = useSetPage(pageKey);

  const { rootEl, firstEl, secondEl, setProgress } = useTween();

  const duration = 2000;

  return (
    <div ref={pagerootEl} css={wrapperStyle(duration)}>
      <Scene triggerHook="onLeave" pin duration={duration}>
        {(progress: number) => {
          setProgress(progress);
          return (
            <div css={rootStyle}>
              <div style={{ opacity: 0 }} ref={rootEl}>
                <StaticBackground scene="career" />
                <p css={paragaphStyle} ref={firstEl}>
                  We believe that good design is powerful,
                  <br />
                  hard work is essential, and exploring the
                  <br /> unknown is important.
                </p>

                <div css={secondSceneStyle} ref={secondEl}>
                  <h2 css={profileHeadingStyle}>Profile</h2>

                  <div css={itemWrapperStyle}>
                    <div css={itemStyle}>
                      <h2>
                        UI/UX <br />
                        Web Platformas <br />
                        Branding
                      </h2>
                      <p>
                        With our crew of informed video, audio and editing
                        <br />
                        With our crew of informed video, audio and editing
                        <br />
                        With our crew of informed video, audio and editing
                      </p>
                    </div>
                    <div css={itemStyle}>
                      <h2>
                        UI/UX <br />
                        Web Platformas <br />
                        Branding
                      </h2>
                      <p>
                        With our crew of informed video, audio and editing
                        <br />
                        With our crew of informed video, audio and editing
                        <br />
                        With our crew of informed video, audio and editing
                      </p>
                    </div>
                  </div>

                  <div css={dividerStyle} />

                  <div css={itemStyle}>
                    <h2>
                      UI/UX <br />
                      Web Platformas <br />
                      Branding
                    </h2>
                    <p>
                      With our crew of informed video, audio and editing With
                      our crew of informed video, audio and editing With our
                      crew of informed video, audio and editing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Scene>
    </div>
  );
};

export default Career;

const useTween = () => {
  const rootEl = useRef<HTMLDivElement>(null);
  const firstEl = useRef<HTMLDivElement>(null);
  const secondEl = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));

  useEffect(() => {
    tl.current.pause();

    tl.current
      .to(rootEl.current, {
        opacity: 1,
      })
      .to(firstEl.current, { y: -100, opacity: 0, duration: 0.3 })
      .to(secondEl.current, { top: "50px" }, "<")
      .to(rootEl.current, { opacity: 0 });
  }, []);

  const setProgress = (progress: number) => {
    tl.current.progress(progress / 2);
  };

  return { rootEl, firstEl, secondEl, setProgress };
};

const wrapperStyle = (height: number) => css`
  height: ${height}px;
`;

const rootStyle = css`
  position: relative;
`;

const paragaphStyle = css`
  position: absolute;
  top: 120px;
  right: 100px;

  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
`;

const secondSceneStyle = css`
  position: absolute;
  top: 380px;
  right: 100px;

  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const profileHeadingStyle = css`
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 12px;
  text-align: right;
  border-bottom: 1px solid white;
`;

const itemWrapperStyle = css`
  display: flex;
  bottom: 52px;
  right: 100px;
  max-width: 950px;
  justify-content: space-between;
`;

const dividerStyle = css`
  width: 100%;
  height: 0px;
  border-bottom: 1px solid white;
`;

const itemStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 950px;
  gap: 20px;

  h2 {
    font-weight: 600;
    font-size: 23px;
    line-height: 27.6px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`;
