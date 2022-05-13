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
            <p css={fontStyle(fontSize)}>{text}</p>
            <p css={fontStyle(fontSize)}>{text}</p>
          </div>
        }
      >
        <Tween to={{ y: "-50%" }} duration={1.5} />
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
  height: ${fontSize};
`;
const fontStyle = (fontSize: string) => css`
  font-size: ${fontSize};
`;
