import { css } from "@emotion/react";
import GuageBar from "../guage-bar/guage-bar";
import SkillIcon, { SkillIconType } from "./skill-icon";

interface SkillItemProps {
  title: string;
  subTitle?: string;
  percent?: number;
  body: string;
  icon: SkillIconType;
}

const SkillItem: React.FC<SkillItemProps> = ({
  title,
  subTitle,
  percent = 100,
  body,
  icon,
}) => {
  return (
    <div css={rootStyle}>
      <header css={headerStyle}>
        <SkillIcon skill={icon} />
        <div css={titleContainerStyle}>
          <h2>{title}</h2>
          {subTitle ? <p>{subTitle}</p> : <GuageBar percent={percent} />}
        </div>
      </header>
      <main>{body}</main>
    </div>
  );
};

export default SkillItem;

const rootStyle = css`
  display: flex;
  flex-direction: column;
  gap: 43px;
  width: 350px;
  main {
    font-weight: 400;
    font-size: 20px;
  }
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  gap: 42px;
`;

const titleContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 209px;

  h2 {
    font-weight: 700;
    font-size: 24px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
  }
`;
