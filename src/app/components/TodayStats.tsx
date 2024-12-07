type Props = {
  StatsName: string;
  StatsNumber: number;
};

export const TodayStats = ({ ...props }: Props) => {
  const displayNumber = props.StatsNumber > 9999 ? "9999+" : props.StatsNumber;

  return (
    <div>
      <div
        style={{
          fontSize: 24,
          color: "#606060", // テキストカラー
          fontWeight: "600", // semibold (600相当)
          marginBottom: "-15px", // 下の間隔を狭める
        }}
      >
        {props.StatsName}
      </div>
      <div
        style={{
          fontSize: 48,
          color: "#606060", // テキストカラー
          fontWeight: "600", // semibold (600相当)
          textDecoration: "underline", // 下線を有効化
          textDecorationColor: "#28A745", // 下線の色
          textDecorationThickness: "3px", // 下線の太さ
          textUnderlineOffset: "5px", // 下線とテキストの間隔
        }}
      >
        {displayNumber}
      </div>
    </div>
  );
};
