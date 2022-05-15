import { css } from "@emotion/react";
import { Timeline, Tween } from "react-gsap";

interface MoveSpanProps {
  text: string;
  fontSize: string;
}

const MoveSpan: React.FC<MoveSpanProps> = ({ text, fontSize }) => {
  return (
    <div css={wrapperStyle(fontSize)}>
      <Timeline
        repeat={-1}
        target={
          <div>
            <p css={fontStyle(fontSize)}>
              {text} <br /> {text}
            </p>
          </div>
        }
      >
        <Tween from={{ y: "-50%" }} to={{ y: "0%" }} duration={1.5} />
        <Tween duration={3} />
      </Timeline>
    </div>
  );
};
export default MoveSpan;

const wrapperStyle = (fontSize: string) => css`
  display: inline-block;
  overflow: hidden;
  font-size: ${fontSize};
  height: 181px;
`;
const fontStyle = (fontSize: string) => css`
  font-size: ${fontSize};
`;
