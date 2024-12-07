import Image from "next/image";
import { Stage } from './components/Stage';
import ValueDisplay from './home/_components/ValueDisplay';
import { Header } from "./home/_components/Header";

export default function Home() {
  return (
    <div>
    <Stage />
    <ValueDisplay amount="9999+" measure="coin" />
    <Header/>
    </div>
  );
}
