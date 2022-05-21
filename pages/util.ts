import { makeAutoObservable } from "mobx";
import { createContext, useContext, useEffect, useRef } from "react";

export const PageManagerContext = createContext<PageManager | null>(null);

export const usePageManager = () => {
  const context = useContext(PageManagerContext);
  if (context === null) {
    throw Error("PageManager context가 null 입니다.");
  }
  return context;
};

export class PageManager {
  private _pages: (Page | null)[];
  private _pageKeys: string[];

  constructor(pageKeys: string[]) {
    this._pageKeys = pageKeys;

    this._pages = new Array(pageKeys.length).fill(null);

    makeAutoObservable(this);
  }

  private _findPageIndex(key: string) {
    const index = this._pageKeys.indexOf(key);

    if (index === -1) {
      throw Error(`${key}는 존재하지 않는 page key 입니다.`);
    }

    return index;
  }

  private _getPage(key: string) {
    const index = this._findPageIndex(key);
    const page = this._pages[index];
    if (page === null) {
      throw Error(`${key}페이지가 추가되지 않았습니다.`);
    }
    return page;
  }

  setPage(key: string, page: Page) {
    const index = this._findPageIndex(key);

    this._pages[index] = page;
  }

  goPage(key: string) {
    this._getPage(key).goEl();
  }

  get currentPage() {
    const y = window.scrollY;
    return this._pages.findIndex((page) => {
      if (page === null) {
        throw Error("추가되지 않은 page가 있습니다.");
      }

      return y >= page.top;
    });
  }
}

export class Page {
  private _el: HTMLElement;
  constructor(el: HTMLElement) {
    this._el = el;
  }

  goEl() {
    this._el.scrollIntoView({ behavior: "smooth" });
  }

  get top() {
    return this._el.offsetTop;
  }
}

export const useSetPage = (key: string) => {
  const pageManager = usePageManager();
  const rootEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rootEl.current === null) {
      return;
    }

    const page = new Page(rootEl.current);
    pageManager.setPage(key, page);
  }, []);

  return rootEl;
};
