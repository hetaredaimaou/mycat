"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../components/Button";

type Props = {
  PartsName: string;
};

export const ItemSelector = ({ PartsName }: Props) => {
  const [showButton, setShowButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedOption(index); // 選択されたオプションを保存
    setShowButton(true); // Buttonを表示
  };

  const handleButtonClick = () => {
    alert(`Button clicked for ${PartsName} Option ${selectedOption! + 1}`);
    setShowButton(false); // Buttonを非表示
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "150px",
          right: "40px",
          width: "270px",
          height: "530px",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            backgroundColor: "#FFFFFF",
            padding: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          {Array.from({ length: 30 }).map((_, index) => {
            const isActive = selectedOption === index; // 現在の選択状態を判定
            return (
              <div
                key={index}
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: isActive ? "#9BE9A8" : "#D9D9D9", // 選択中の色
                  borderRadius: "10px",
                  boxShadow: "inset 6px 6px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease", // 色変更のアニメーション
                }}
                onClick={(e) => {
                  e.stopPropagation(); // クリックイベントの伝播を防ぐ
                  handleItemClick(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      {showButton &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "48%",
              zIndex: 1000,
            }}
          >
            <Button
              onClick={handleButtonClick}
              label={`Option ${selectedOption! + 1}`}
              buttonColor="#28A745"
            />
          </div>,
          document.body
        )}
    </>
  );
};
