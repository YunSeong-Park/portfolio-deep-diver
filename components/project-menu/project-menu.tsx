import ProjectCard, { ProjectId } from "../project-card/ProjectCard";

interface ProjectMenuProps {
  ids: ProjectId[];
}

const ProjectMenu: React.FC<ProjectMenuProps> = ({ ids }) => {
  return (
    <div>
      <h2>Next project</h2>
      {ids.map((id) => (
        <ProjectCard key={id} size="medium" id={id} />
      ))}
    </div>
  );
};

export default ProjectMenu;
