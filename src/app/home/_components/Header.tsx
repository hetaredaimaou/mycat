import Image from "next/image";
import ValueDisplay from "./ValueDisplay";

type Props = {
  levelAmount: number;
  levelMeasure: string;
  coinAmount: number;
  coinMeasure: string;
};

export const Header = ({
  levelAmount,
  levelMeasure,
  coinAmount,
  coinMeasure,
}: Props) => {
  return (
    <div
      style={{
        width: "1100px",
        height: "101px",
        backgroundColor: "#28A745",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "750px",
          height: "80px",
          display: "flex",
          backgroundColor: "white",
          borderRadius: "100px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "20px",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
      >
        <Image
          src='/level2.png'
          alt='Level Icon'
          width={76} // ここにピクセル単位でサイズを指定
          height={60} // ここにピクセル単位でサイズを指定
        />
        <ValueDisplay amount={levelAmount} measure={levelMeasure} />
        <Image
          src='/coin.png'
          alt='Coin Icon'
          width={80} // ここにピクセル単位でサイズを指定
          height={60} // ここにピクセル単位でサイズを指定
        />
        <ValueDisplay amount={coinAmount} measure={coinMeasure} />
      </div>
    </div>
  );
};
