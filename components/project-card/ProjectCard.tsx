import { css } from "@emotion/react";
import Link from "next/link";
import Icon from "../icon/icon";

const projects: {
  [T in string]: {
    id: string;
    img: string;
    title: string;
    label: string;
    body: string;
    color: "primary" | "secondary";
  };
} = {
  galaxy: {
    id: "galaxy",
    img: "",
    title: "Galaxy Watch",
    label: "더 나은 건강한 스스로가 될 수 있도록 도와주다",
    body: `With our crew of informed video, audio and editing technicians,we aim for a high
    quality, polished With our crew of informed video,`,
    color: "primary",
  },
  hansot: {
    id: "hansot",
    img: "",
    title: "한솥",
    label: "최적화된 주문 프로세스로 만족도를 높히다",
    body: `With our crew of informed video, audio and editing technicians,we aim for a high
    quality, polished With our crew of informed video,`,
    color: "secondary",
  },
  tabaco: {
    id: "tabaco",
    img: "",
    title: "담배",
    label: "혁신을 담다",
    body: `With our crew of informed video, audio and editing technicians,we aim for a high
    quality, polished With our crew of informed video,`,
    color: "secondary",
  },
};

const rootStyle = css`
  position: relative;
`;

const sizeStyle = {
  large: css`
    width: 500px;
    height: 400px;
    p {
      font-size: 20px;
      font-weight: 400;
      max-width: 210px;
    }
  `,
  medium: css``,
  small: css`
    width: 300px;
    height: 340px;
    p {
      font-size: 15px;
      font-weight: 400;
      max-width: 160px;
    }
  `,
};

const phraseStyle = css`
  color: inherit;
  text-align: center;
  margin: auto;
  padding-top: 100px;
`;

const colorStyle = {
  primary: css`
    color: #fff;
    background-color: #000;
  `,
  secondary: css`
    color: #3e3e3e;
    background-color: #fff;
  `,
};
export type ProjectId = keyof typeof projects;

interface ProjectCardProps {
  size: "small" | "medium" | "large";
  id: ProjectId;
}

export const getProject = (id: ProjectId) => {
  return projects[id];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ size, id }) => {
  const { label, color } = getProject(id);
  return (
    <div css={[rootStyle, colorStyle[color], sizeStyle[size]]}>
      <p css={phraseStyle}>{label}</p>
      {size === "large" && <LinkButton id={id} />}
    </div>
  );
};

export default ProjectCard;

const buttonStyle = css`
  position: absolute;
  bottom: 40px;
  right: 40px;
  border: none;
  background: none;
  cursor: pointer;
`;

const LinkButton = ({ id }: { id: ProjectId }) => (
  <Link href={`/projects/${id}`}>
    <button css={buttonStyle}>
      <Icon icon="circleArrow" />
    </button>
  </Link>
);

const infoStyle = css`
  color: #3e3e3e;
  h2 {
    color: inherit;
    font-size: 100px;
    font-weight: 900;
    text-align: center;
    margin: auto;
  }
  p {
    color: inherit;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    max-width: 800px;
    margin: auto;
  }
`;

interface ProjectInfoProps {
  id: ProjectId;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ id }) => {
  const { title, body } = getProject(id);
  return (
    <div css={infoStyle}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
