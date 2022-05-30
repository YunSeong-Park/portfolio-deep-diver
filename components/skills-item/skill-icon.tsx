import { css } from "@emotion/react";
import Icon from "../icon/icon";

export type SkillIconType = "photoshop" | "illustrator";

interface SkillIconProps {
  skill: SkillIconType;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  return (
    <div css={rootStyle}>
      <div>
        <Icon icon={skill} />
      </div>
    </div>
  );
};

export default SkillIcon;

const rootStyle = css`
  display: inline-block;
  width: 80px;
  height: 80px;

  border: 1px solid #fff;
  border-radius: 8px;
  background-color: transparent;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
