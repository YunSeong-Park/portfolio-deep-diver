import { css } from "@emotion/react";

interface ProgressInfoProps {
  current: number;
  number: number;
}
const style = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const barStyle = css`
  height: 2px;
  width: 74px;
  background-color: #3e3e3e;
`;
const phraseStyle = css`
  color: #3e3e3e;
  font-weight: 400;
  font-size: 16px;
  strong {
    color: inherit;
  }
`;

const ProgressInfo: React.FC<ProgressInfoProps> = ({ current, number }) => {
  return (
    <div css={style}>
      <div css={barStyle}></div>
      <p css={phraseStyle}>
        <strong>{current.toString().padStart(2, "0")}</strong>/
        {number.toString().padStart(2, "0")}
      </p>
    </div>
  );
};
export default ProgressInfo;
