import { css } from "@emotion/react";
import { observer } from "mobx-react";
import { usePageManager } from "../../pages/util";

interface HeaderProps {
  pages: { label: string; key: string; isContents?: boolean }[];
  theme?: "primary" | "secondary";
}

const Header: React.FC<HeaderProps> = ({ pages, theme = "primary" }) => {
  const pageManager = usePageManager();

  return (
    <header css={rootStyle(theme)}>
      <h2 css={titleStyle}></h2>
      <ul css={listStyle}>
        {pages.map((page, i) => (
          <li css={itemStyle} key={page.key}>
            <span
              css={[
                fontStyle,
                colorStyle[theme],
                pageManager.currentPage === i && [
                  activeFontStyle,
                  activeColorStyle[theme],
                ],
              ]}
              onClick={() => {
                pageManager.goPage(page.key);
                pageManager.currentPage = i;
              }}
            >
              {page.label}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default observer(Header);

const paddingHeight = 14;
const itemHeight = 22;

const rootStyle = (theme: "primary" | "secondary") => css`
  position: ${theme === "primary" ? "fixed" : "absolute"};
  z-index: 999;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${paddingHeight}px 100px;
`;

const titleStyle = css``;

const listStyle = css`
  display: flex;
  gap: 60px;
`;

const itemStyle = css`
  height: ${itemHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fontStyle = css`
  position: relative;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const activeFontStyle = css`
  :after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -6px;
    left: 0px;
    width: 100%;
    height: 2px;
  }
`;

const colorStyle = {
  primary: css`
    color: #a0a0a0;
  `,
  secondary: css`
    color: #000;
  `,
};

const activeColorStyle = {
  primary: css`
    color: #fff;
    :after {
      background-color: #fff;
    }
  `,
  secondary: css`
    color: #5786ff;
    :after {
      background-color: #5786ff;
    }
  `,
};
