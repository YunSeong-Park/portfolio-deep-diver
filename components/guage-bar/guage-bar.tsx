import { css } from "@emotion/react";

interface GuageBarProps {
  percent: number;
  width?: string;
}

const GuageBar: React.FC<GuageBarProps> = ({ percent, width = "100%" }) => {
  return (
    <div css={rootStyle(width)}>
      <div css={percentStyle(percent)}></div>
    </div>
  );
};

export default GuageBar;

const rootStyle = (width: string) => css`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  height: 10px;
  width: ${width} div {
    background-color: rgb(255, 255, 255);
    border-radius: 100px;
    height: 100%;
  }
`;
const percentStyle = (percent: number) => css`
  width: ${Math.min(100, percent)}%;
`;
