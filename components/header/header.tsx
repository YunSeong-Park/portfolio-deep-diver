import { css } from "@emotion/react";
import { useCurrentPage } from "../../store/currentPage";

const pages = ["Home", "About", "Skills", "Projects", "Contact me"] as const;

const Header: React.FC<{}> = () => {
  const [pageIndex, setPageIndex] = useCurrentPage();
  return (
    <header css={rootStyle}>
      <h2 css={titleStyle}>title</h2>
      <ul css={listStyle}>
        {pages.map((page, i) => (
          <li css={itemStyle}>
            <span
              css={[fontStyle, pageIndex === i && activeFontStyle]}
              onClick={() => {
                setPageIndex(i);
              }}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;

const rootStyle = css`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 97px;
`;

const titleStyle = css``;

const listStyle = css`
  display: flex;
  gap: 40px;
`;

const itemStyle = css`
  width: 100px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fontStyle = css`
  position: relative;
  text-align: center;
  color: #a0a0a0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const activeFontStyle = css`
  color: #fff;
  :after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -6px;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: #fff;
  }
`;
