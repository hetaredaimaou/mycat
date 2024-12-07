"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export const LineAndButtons = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleReload = () => {
    router.refresh(); // 現在のページを再読み込み
  };

  return (
    <div
      style={{
        display: "inline-flex", // 子要素に応じて幅を調整
        flexDirection: "column", // 子要素を縦方向に配置
        alignItems: "center", // 水平方向の整列
        justifyContent: "center", // 垂直方向の整列
      }}
    >
      <Image
        src="/home.png"
        alt="Home Image"
        width={75}
        height={75}
        style={{ marginTop: "40px", marginBottom: "40px", cursor: "pointer" }}
        onClick={() => handleNavigation("/home")}
      />
      <Image
        src="/chenge.png"
        alt="Chenge Image"
        width={75}
        height={75}
        style={{ marginBottom: "40px", cursor: "pointer" }}
        onClick={() => handleNavigation("/store")}
      />
      <Image
        src="/oppthion.png"
        alt="Opption Image"
        width={75}
        height={75}
        style={{ marginBottom: "40px", cursor: "pointer" }}
      />
      <Image
        src="/reload.png"
        alt="Reload Image"
        width={75}
        height={75}
        style={{ cursor: "pointer" }}
        onClick={handleReload} // 再読み込み処理を実行
      />
    </div>
  );
};
