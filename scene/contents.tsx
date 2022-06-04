import { css } from "@emotion/react";
import { PageComponentProps, useSetContentsPage } from "../pages/util";

interface ContentsProps {}
const Contents: React.FC<ContentsProps> = () => {
  const rootEl = useSetContentsPage();
  return (
    <div
      ref={rootEl}
      css={css`
        background-color: #ebebeb;
        color: black;
        min-height: 200vh;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      `}
    >
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
        `}
      ></header>
      모든 것을 바꿀때까지
    </div>
  );
};

export default Contents;
