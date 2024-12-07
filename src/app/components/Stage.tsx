import Image from "next/image";

export const Stage = () => {
  return (
    <div style={{ position: "absolute", top: "76%", left: "43%" }}>
      <Image
        src="/stage.png"
        alt="Stage Image"
        width={525}
        height={151}
        style={{}}
      />
    </div>
  );
};
