const icons = {
  downArrow: "/svg/down-arrow.svg",
  arrow: "/svg/arrow.svg",
  photoshop: "/svg/photoshop.svg",
  illustrator: "/svg/illustrator.svg",
  circleArrow: "/svg/circle-arrow.svg",
};

interface IconProps {
  icon: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <img src={icons[icon]}></img>;
};

export default Icon;
