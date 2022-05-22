import { css } from "@emotion/react";
import { observer } from "mobx-react";
import { usePageManager } from "../../pages/util";

interface HeaderProps {
  pages: { label: string; key: string }[];
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
  const pageManager = usePageManager();

  return (
    <header css={rootStyle}>
      <h2 css={titleStyle}>title</h2>
      <ul css={listStyle}>
        {pages.map((page, i) => (
          <li css={itemStyle} key={page.key}>
            <span
              css={[
                fontStyle,
                pageManager.currentPage() === i && activeFontStyle,
              ]}
              onClick={() => {
                pageManager.goPage(page.key);
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
