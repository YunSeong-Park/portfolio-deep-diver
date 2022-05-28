import { action, computed, makeObservable, observable } from "mobx";
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
  private _currentPage: number;
  private _isYCurrentPage: boolean;
  private _isSceneStart: boolean;

  constructor(pageKeys: string[]) {
    this._scrollY = 0;
    this._pageKeys = pageKeys;

    this._pages = new Array(pageKeys.length).fill(null);
    this._currentPage = 0;
    this._isYCurrentPage = true;
    this._isSceneStart = true;

    makeObservable<PageManager, "_scrollY" | "_currentPage" | "_isSceneStart">(
      this,
      {
        _scrollY: observable,
        scrollY: action,

        _currentPage: observable,
        currentPage: computed,

        _isSceneStart: observable,
        isSceneStart: computed,
      }
    );
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

  private _getCurrentPageFromY() {
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

  scrollY(y: number) {
    this._scrollY = y;

    this._isSceneStart = this._pages.some(
      (page) => page?.top === this._scrollY
    );

    if (this._isYCurrentPage) this._currentPage = this._getCurrentPageFromY();
  }

  setPage(key: string, page: Page) {
    const index = this._findPageIndex(key);

    page.setAfterGoEl(() => {
      this._isYCurrentPage = true;
    });

    this._pages[index] = page;
  }

  goPage(key: string) {
    this._isYCurrentPage = false;
    this._getPage(key).goEl();
  }

  set currentPage(currentPage: number) {
    this._currentPage = currentPage;
  }

  get currentPage() {
    return this._currentPage;
  }

  get isSceneStart() {
    return this._isSceneStart;
  }
}

export class Page {
  private _el: HTMLElement;
  private _afterGoEl?: () => void;

  constructor(el: HTMLElement) {
    this._el = el;
  }

  goEl() {
    this._el.scrollIntoViewPromise({ behavior: "smooth" }).then(() => {
      this._afterGoEl && this._afterGoEl();
    });
  }

  setAfterGoEl(afterGoEl: () => void) {
    this._afterGoEl = afterGoEl;
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
