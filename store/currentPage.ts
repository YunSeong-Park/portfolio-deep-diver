import { atom, useRecoilState } from "recoil";

const currentPage = atom({
  key: "currentPage",
  default: 0,
});

export const useCurrentPage = () => useRecoilState(currentPage);
