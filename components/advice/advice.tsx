import { css } from "@emotion/react";
import MoveDownIcon from "../icon/move-down-icon";

const Advice: React.FC<{}> = () => {
  return (
    <div css={adviceStyle}>
      <span>Scroll to discover</span>
      <MoveDownIcon />
    </div>
  );
};

export default Advice;

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
