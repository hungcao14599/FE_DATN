import { Input } from "antd";
import React from "react";
import style from "./search.module.scss";

export default function SearchInput({
  imgSearch,
  value,
  onChange,
  onFocus,
  isFullWidth,
  isBlur,
  onBlur,
}) {
  return (
    <div className={style.wrapper}>
      <div
        className={style.searchBar}
        style={{ width: isFullWidth, maxWidth: isFullWidth }}
      >
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={isBlur ? style.inputStakingBlur : style.inputStaking}
          placeholder="Search by name"
          onFocus={onFocus}
          onBlur={onBlur}
          style={{ width: isFullWidth }}
        />
        <div className={style.search_icon}>
          {imgSearch && <img src={imgSearch} alt="" />}
        </div>
      </div>
    </div>
  );
}
