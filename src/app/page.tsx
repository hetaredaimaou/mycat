import Image from "next/image";
import { Stage } from "./components/Stage";
import ValueDisplay from "./home/_components/ValueDisplay";
import { LineAndButtons } from "./components/LineAndButtons";

export default function Home() {
  return (
    <div>
      <LineAndButtons />
      <Stage />
    </div>
  );
}
