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

//   <div style={{ width: '525px', height: '151px',position: 'relative'}}>
//     <Image
//       src='/stage.png'
//       alt='Stage Image'
//       fill // 親要素に完全フィット
//       style={{
//         objectFit: 'contain', // アスペクト比を維持しつつ収める
//       }}
//     />
//   </div>
// );
