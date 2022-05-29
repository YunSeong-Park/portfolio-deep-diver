const icons = {
  downArrow: "/svg/down-arrow.svg",
  arrow: "/svg/arrow.svg",
  photoshop: "/svg/photoshop.svg",
  illustrator: "/svg/illustrator.svg",
};

interface IconProps {
  icon: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <object data={icons[icon]} type="image/svg+xml"></object>;
};

export default Icon;
