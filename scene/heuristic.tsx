import { css } from "@emotion/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Scene } from "react-scrollmagic";
import { PageComponentProps, useSetPage } from "../pages/util";

interface HeuristicProps extends PageComponentProps {}

const Heuristic: React.FC<HeuristicProps> = ({ pageKey }) => {
  const rootEl = useSetPage(pageKey);

  const { blackoutWrapperEl, setProgress } = useTween();

  const duration = 2000;

  return (
    <div ref={rootEl} css={wrapperStyle(duration)}>
      <Scene triggerHook="onLeave" pin duration={duration}>
        {(progress: number) => {
          setProgress(progress);
          return (
            <div css={[rootStyle, [0, 1].includes(progress) && hiddenStyle]}>
              <div css={blackoutWrapperStyle} ref={blackoutWrapperEl} />

              <h2 css={titleStyle}>
                Design is a <br /> Heuristic process
              </h2>
            </div>
          );
        }}
      </Scene>
    </div>
  );
};

const useTween = () => {
  const blackoutWrapperEl = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));

  useEffect(() => {
    tl.current.pause();

    tl.current
      .to(blackoutWrapperEl.current, {
        "--size": "30%",
        "--sharpness": "10%",
      })
      .to(blackoutWrapperEl.current, {
        "--x": "700px",
      })
      .to(blackoutWrapperEl.current, {
        "--x": "300px",
      })
      .to(blackoutWrapperEl.current, {
        "--x": "1000px",
      })
      .to(blackoutWrapperEl.current, {
        "--size": "200%",
        "--sharpness": "100%",
      })
      .to(blackoutWrapperEl.current, {
        "--size": "0%",
        "--sharpness": "0%",
      });
  }, []);

  const setProgress = (progress: number) => {
    tl.current.progress(progress / 2);
  };

  return { blackoutWrapperEl, setProgress };
};

export default Heuristic;

const wrapperStyle = (height: number) => css`
  height: ${height}px;
`;

const rootStyle = css`
  position: relative;
`;

const hiddenStyle = css`
  visibility: hidden;
`;

const blackoutWrapperStyle = css`
  --x: 300px;
  --y: 300px;

  --size: 0%;
  --sharpness: 0%;
  z-index: 9;
  position: absolute;
  width: 100%;
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
