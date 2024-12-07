import { Header } from "./_components/Header";
import { Sidebar } from "../components/Sidebar";
import { Stage } from "../components/Stage";
import { LineAndButtons } from "../components/LineAndButtons";
import { gql } from "@apollo/client";
import { client } from "@/graphql/client";

const Values = {
	levelAmount: 5,
	levelMeasure: "level",
	coinAmount: 100,
	coinMeasure: "coin",
};
const Side = {
	UserName: "Amatec",
	TodayCoins: 100,
	TodayCommits: 200,
};

export default function page() {
  return (
    <div>
      <Header
        levelAmount={Values.levelAmount}
        levelMeasure="level"
        coinAmount={Values.coinAmount}
        coinMeasure="coin"
      />
      <Sidebar
        UserName={Side.UserName}
        TodayCoins={Side.TodayCoins}
        TodayCommits={Side.TodayCommits}
      />
      <div style={{ position: "absolute", top: "121px", left: "22%" }}>
        <LineAndButtons />
      </div>
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "65%",
          transform: "translateX(-50%)",
        }}
      >
        <Stage />
      </div>
    </div>
  );
}
