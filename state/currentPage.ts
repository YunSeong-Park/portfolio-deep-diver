import { atom, useRecoilState, useRecoilValue } from "recoil";

const currentPage = atom({
  key: "currentPage",
  default: 0,
});

export const useCurrentPage = () => useRecoilState(currentPage);

export const useCurrentPageValue = () => useRecoilValue(currentPage);
