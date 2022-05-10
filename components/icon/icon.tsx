const icons = {
  downArrow: "/svg/down-arrow.svg",
};

interface IconProps {
  icon: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <object data={icons[icon]} type="image/svg+xml"></object>;
};

export default Icon;
