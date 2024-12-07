"use client";

import { useState } from "react";
import { Parts } from "./Parts";

export const PartSelector = () => {
  const [activePart, setActivePart] = useState<string | null>(null);

  const handlePartClick = (partName: string) => {
    setActivePart((current) => (current === partName ? null : partName));
  };

  return (
    <div style={{ position: "absolute", top: "150px" ,left:"31%"}}>
      <div
        style={{
          width: "140px",
          height: "530px",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px", // 角を丸める
          boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.25)", // xが8, yが8の影
          display: "inline-flex", // 子要素に応じて幅を調整
          flexDirection: "column", // 子要素を縦方向に配置
          alignItems: "center", // 水平方向の整列
          paddingTop: "10px",
        }}
      >
        <Parts
          PartsName="Head"
          isActive={activePart === "Head"}
          onClick={() => handlePartClick("Head")}
        />
        <Parts
          PartsName="Body"
          isActive={activePart === "Body"}
          onClick={() => handlePartClick("Body")}
        />
        <Parts
          PartsName="Leg"
          isActive={activePart === "Leg"}
          onClick={() => handlePartClick("Leg")}
        />
        <Parts
          PartsName="Shoos"
          isActive={activePart === "Shoos"}
          onClick={() => handlePartClick("Shoos")}
        />
      </div>
    </div>
  );
};
