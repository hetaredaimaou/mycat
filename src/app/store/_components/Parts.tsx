"use client";

import { createPortal } from "react-dom";
import { ItemSelector } from "./ItemSelector";

type Props = {
  PartsName: string;
  isActive: boolean;
  onClick: () => void;
};

export const Parts = ({ PartsName, isActive, onClick }: Props) => {
  return (
    <div
      onClick={onClick} // 親のdivタグをクリック可能に設定
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: isActive ? "#9BE9A8" : "#D9D9D9", // 選択時の色を変更
        borderRadius: "10px",
        marginBottom: "10px",
        boxShadow: "inset 6px 6px 10px rgba(0, 0, 0, 0.2)", // インナーシャドウを設定
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer", // カーソルをポインターに変更
        transition: "background-color 0.3s ease", // 色変更のアニメーション
      }}
    >
      {isActive &&
        createPortal(
          <ItemSelector PartsName={PartsName} />,
          document.body // ポータルをマウントする場所
        )}
    </div>
  );
};
