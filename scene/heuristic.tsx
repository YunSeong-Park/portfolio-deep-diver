import { css } from "@emotion/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { Scene } from "react-scrollmagic";

const Heuristic: React.FC<{}> = () => {
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));

  const blackoutWrapperEl = useRef<HTMLDivElement>(null);
  const textEl = useRef<HTMLHeadingElement>(null);

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
  return (
    <Scene triggerHook="onLeave" pin duration={3000}>
      {(progress: number) => {
        console.log(progress);
        tl.current.totalProgress(progress / 2);
        return (
          <div css={[rootStyle, progress === 0 && hiddenStyle]}>
            <div css={blackoutWrapperStyle} ref={blackoutWrapperEl} />

            <h2 ref={textEl} css={titleStyle}>
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
