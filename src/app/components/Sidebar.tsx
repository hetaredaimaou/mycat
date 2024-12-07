import { TodayStats } from "./TodayStats";

type Props = {
  UserName: string;
  TodayCoins: number;
  TodayCommits: number;
};

export const Sidebar = ({ ...props }: Props) => {
  return (
    <div
      style={{
        width: "20%",
        height: "100%",
        color: "#28A745",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
          position: "absolute", // 親要素を基準に配置
          top: "0",
		  zIndex:-1,
        }}
      >
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "0",
            width: "100%",
            height: "20.5%",
            backgroundColor: "#28A745",
          }}
        ></div>
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "14.5%",
            width: "100%",
            height: "12%", // 高さ
            backgroundColor: "#FFFFFF",
            borderRadius: "50%", // 楕円形
          }}
        ></div>
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "20.5%",
            width: "100%",
            height: "79.5%",
            backgroundColor: "#FFFFFF",
          }}
        ></div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
		  textAlign: "center",
		  display: "flex", // Flexboxを使用
		  flexDirection: "column", // 子要素を縦方向に並べる
		  alignItems: "center", // 水平方向の中央揃え
		  justifyContent: "center", // 垂直方向の中央揃え
        }}
      >
        <img
          src={`https://github.com/${props.UserName}.png`}
          alt={`${props.UserName}'s avatar`}
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%", // 円形にする
            objectFit: "cover", // 画像の比率を保ちながら領域に収める
          }}
        />
        <div
          style={{
            fontSize: 24,
            color: "#606060", // テキストカラー
            fontWeight: "600", // semibold (600相当)
          }}
        >
          {props.UserName}
        </div>
        <TodayStats
          StatsName="今日の獲得コイン"
          StatsNumber={props.TodayCoins}
        />
        <TodayStats
          StatsName="今日のコミット数"
          StatsNumber={props.TodayCommits}
        />
      </div>
    </div>
  );
};
