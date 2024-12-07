type Props = {
  PartsName: string;
};

export const ItemSelector = ({ PartsName }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "80px",
        width: "270px",
        height: "530px",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px", // 角を丸める
        boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.25)", // xが8, yが8の影
        overflow: "hidden", // 親要素に収める
      }}
    >
      <div
        style={{
          height: "100%",
          overflowY: "auto", // 縦方向スクロールを有効化
          backgroundColor: "#FFFFFF",
          padding: "10px",
          display: "grid", // グリッドレイアウト
          gridTemplateColumns: "repeat(2, 1fr)", // 2列に設定
          gap: "10px", // 要素間の隙間
        }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
              boxShadow: "inset 6px 6px 10px rgba(0, 0, 0, 0.2)", // インナーシャドウを設定
            }}
            onClick={(event) => {
              event.stopPropagation(); // イベントの伝播を防ぐ
              alert(`Clicked on ${PartsName} Option ${index + 1}`);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
