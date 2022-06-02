import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

import { Scene } from "react-scrollmagic";
import { usePageManager } from "../pages/util";

interface TransitionProps {}
const Transition: React.FC<TransitionProps> = () => {
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: 0 }));
  const pageManager = usePageManager();

  useEffect(() => {
    tl.current.pause();

    const tween = () => tl.current;
    pageManager.attachCallbackContentsPage(tween);
  }, []);
  const setProgress = (progress: number) => {
    tl.current.progress(progress);
  };

  return (
    <div style={{ height: "0px" }}>
      <Scene pin triggerHook={-1} duration={300}>
        {(progress: number) => {
          setProgress(progress);
          return <div></div>;
        }}
      </Scene>
    </div>
  );
};
export default Transition;
