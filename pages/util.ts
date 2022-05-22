import { action, makeObservable, observable } from "mobx";
import { createContext, useContext, useEffect, useRef } from "react";

export interface PageComponentProps {
  pageKey: string;
}

export type PageInfo = {
  component: React.FC<PageComponentProps>;
  key: string;
  label: string;
};

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
  private _scrollY: number;

  constructor(pageKeys: string[]) {
    this._scrollY = 0;
    this._pageKeys = pageKeys;

    this._pages = new Array(pageKeys.length).fill(null);

    makeObservable<PageManager, "_scrollY">(this, {
      _scrollY: observable,
      currentPage: observable,

      scrollY: action,
    });
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

  scrollY(y: number) {
    this._scrollY = y;
  }

  setPage(key: string, page: Page) {
    const index = this._findPageIndex(key);

    this._pages[index] = page;
  }

  goPage(key: string) {
    this._getPage(key).goEl();
  }

  currentPage() {
    const index = this._pages.findIndex((page, i) => {
      if (page === null) {
        return i;
      }

      return this._scrollY < page.top;
    });

    if (index === -1) {
      return this._pages.length - 1;
    }

    return index - 1;
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
