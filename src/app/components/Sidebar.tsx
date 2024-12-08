import { TodayStats } from "./TodayStats";
import Image from "next/image";

type Props = {
  UserName: string;
  TodayCoins: number;
  TodayCommits: number;
};

export const Sidebar = ({ UserName, TodayCoins, TodayCommits }: Props) => {
  return (
    <div
      style={{
        width: "18%",
        height: "100%",
        color: "#28A745",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "18%",
          position: "absolute", // 親要素を基準に配置
          top: "0",
          left: "0",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "0",
            width: "100%",
            height: "189.5px",
            backgroundColor: "#28A745",
          }}
        ></div>
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "141px",
            width: "100%",
            height: "97px", // 高さ
            backgroundColor: "#FFFFFF",
            borderRadius: "50%", // 楕円形
          }}
        ></div>
        <div
          style={{
            position: "absolute", // 親要素を基準に配置
            top: "189.5px",
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
          position: "relative", // 必要
          zIndex: 100,
        }}
      >
        <Image
          src={`https://github.com/masa-massara.png`}
          alt={`${UserName}'s avatar`}
          width={130} // プロパティとして幅を指定
          height={130} // プロパティとして高さを指定
          style={{
            margin: "auto",
            borderRadius: "50%", // 円形にする
            objectFit: "cover", // 画像の比率を保ちながら領域に収める
          }}
        />
        <div
          style={{
            fontSize: 24,
            color: "#606060", // テキストカラー
            fontWeight: "600", // semibold (600相当)
            marginTop: "20px",
          }}
        >
          {UserName}
        </div>
        <TodayStats StatsName="今日の獲得コイン" StatsNumber={TodayCoins} />
        <TodayStats StatsName="今日のコミット数" StatsNumber={TodayCommits} />
      </div>
    </div>
  );
};
