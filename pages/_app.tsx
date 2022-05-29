import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

let timer: NodeJS.Timeout;

const debounce = (callback: () => void, time: number) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(callback, time);
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Element.prototype.scrollIntoViewPromise = function (options) {
      this.scrollIntoView(options);
      let parent = this;
      return {
        then: function (x: () => void) {
          const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
              debounce(() => {
                x();
              }, 300);
            }
          });
          intersectionObserver.observe(parent);
        },
      };
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
