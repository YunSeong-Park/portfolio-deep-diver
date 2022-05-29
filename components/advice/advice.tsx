import { css } from "@emotion/react";
import MoveDownIcon from "../icon/move-down-icon";
import WaveSpan from "../waveSpan/WaveSpan";

import { usePageManager } from "../../pages/util";
import { observer } from "mobx-react";
const Advice: React.FC<{}> = () => {
  const pageManager = usePageManager();

  return (
    <div css={[adviceStyle, !pageManager.isSceneStart && noneStyle]}>
      <WaveSpan text="Scroll to discover" />
      <MoveDownIcon />
    </div>
  );
};

export default observer(Advice);

const adviceStyle = css`
  position: fixed;
  bottom: 50px;
  right: 100px;
  display: flex;
  align-items: center;
  gap: 25px;
  z-index: 999;
  span {
    font-weight: 400;
    font-size: 22px;
  }
  transition: 0.3s ease-in;
`;
const noneStyle = css`
  opacity: 0;
  bottom: 20px;
`;
