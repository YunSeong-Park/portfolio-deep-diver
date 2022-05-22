import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface WaveSpanProps {
  text: string;
}

const WaveSpan: React.FC<WaveSpanProps> = ({ text }) => {
  const tl = useRef<gsap.core.Timeline>(
    gsap.timeline({ repeat: -1, repeatDelay: 2 })
  );
  const rootEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootEl.current) {
      return;
    }

    Array.from(rootEl.current.children).map((charEl, i) => {
      tl.current.to(charEl, { opacity: 1, duration: 0.2 }, ">-0.33");
      tl.current.to(charEl, { opacity: 0.7, duration: 0.2 }, ">");
    });
  }, []);

  return (
    <div
      ref={rootEl}
      css={css`
        display: flex;
        color: #fff;
        font-size: 22px;
        font-weight: 400;
        > div {
          opacity: 0.7;
          min-width: 7px;
        }
      `}
    >
      {text.split("").map((char, i) => {
        return <div key={`wave${char} ${i}`}>{char}</div>;
      })}
    </div>
  );
};

export default WaveSpan;
