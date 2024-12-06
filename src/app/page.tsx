import Image from "next/image";
import { Stage } from './components/Stage';
import ValueDisplay from './home/_components/ValueDisplay';

export default function Home() {
  return (
    <div>
    <Stage />
    <ValueDisplay amount="9999+" measure="coin" />
    </div>
  );
}
