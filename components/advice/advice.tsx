import { css } from "@emotion/react";
import MoveDownIcon from "../icon/move-down-icon";
import WaveSpan from "../waveSpan/WaveSpan";

import { usePageManager } from "../../pages/util";
import { observer } from "mobx-react";
const Advice: React.FC<{}> = () => {
  const pageManager = usePageManager();

  return (
    <div css={[adviceStyle, pageManager.currentPage() !== 0 && noneStyle]}>
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
  gap: 30px;
  span {
    font-weight: 400;
    font-size: 22px;
  }
`;
const noneStyle = css`
  display: none;
`;
