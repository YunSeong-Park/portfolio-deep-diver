import { css } from "@emotion/react";
import { Tween } from "react-gsap";
import { Scene } from "react-scrollmagic";
import Header from "../components/header/header";
import ProgressInfo from "../components/progress-info/ProgressInfo";
import ProjectCard, {
  ProjectInfo,
} from "../components/project-card/ProjectCard";
import { pageInfo } from "../pages";
import {
  PageComponentProps,
  useSetContentsPage,
  useSetPage,
} from "../pages/util";

const wrapperStyle = (height: number) => css`
  height: calc(${height}px + 100vh);
  overflow: hidden;
  z-index: 999;
  position: relative;
`;
const rootStyle = css`
  position: relative;
`;
const contentsStyle = css`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ebebeb;
  opacity: 0;
`;

interface ContentsProps extends PageComponentProps {}
const Contents: React.FC<ContentsProps> = ({ pageKey }) => {
  // const rootEl = useSetPage(pageKey);
  const rootEl = useSetPage(pageKey);

  const duration = 300;
  return (
    <div ref={rootEl} css={wrapperStyle(duration)}>
      <Scene triggerHook="onLeave" pin duration={duration}>
        {(progress: number) => {
          return (
            <div css={[rootStyle]}>
              <Tween to={{ opacity: 1 }} paused totalProgress={progress}>
                <div css={contentsStyle}>
                  <Header pages={pageInfo} theme="secondary" />
                  <div
                    css={css`
                      position: absolute;
                      top: 100px;
                      width: 100%;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        align-items: end;
                        justify-content: space-around;
                      `}
                    >
                      <ProjectCard size="small" id="hansot" />
                      <div>
                        <ProjectCard size="large" id="galaxy" />
                        <div
                          css={css`
                            position: absolute;
                            bottom: 150px;
                          `}
                        >
                          <ProgressInfo number={5} current={1} />
                        </div>
                      </div>
                      <ProjectCard size="small" id="tabaco" />
                    </div>
                    <ProjectInfo id="galaxy" />
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

export default Contents;
