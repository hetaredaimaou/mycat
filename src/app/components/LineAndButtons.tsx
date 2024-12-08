"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { HStack } from "@chakra-ui/react";
// import { Button } from "@/components/ui/button";
import { Button } from "@chakra-ui/react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { coinLogic } from "../source/utils/getMyCoin";
import { Database } from '@/types/supabasetype';
import { createClient } from '@supabase/supabase-js';
import { useEffect,useState } from "react";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
// const {data,session} = useSession();

// const userName = session.user.name;
// const imageIcon = "/oppthion.png";

export const LineAndButtons = () => {
  const {data: session} = useSession();

const userName = session?.user?.name;
// const imageIcon = "/oppthion.png";
  
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleReload = () => {
    router.refresh(); // 現在のページを再読み込み
  };
  const [imageIcon, setImageIcon] = useState("");
  useEffect(() => {
    if (session && session.user) {
      
      setImageIcon(`https://github.com/${session.user.name}.png`);
    }
  }, [session]);

  return (
    <div
      style={{
        display: "inline-flex", // 子要素に応じて幅を調整
        flexDirection: "column", // 子要素を縦方向に配置
        alignItems: "center", // 水平方向の整列
        justifyContent: "center", // 垂直方向の整列
      }}
    >
      <Image
        src="/home.png"
        alt="Home Image"
        width={75}
        height={75}
        style={{ marginTop: "40px", marginBottom: "40px", cursor: "pointer" }}
        onClick={() => handleNavigation("/home")}
      />
      <Image
        src="/chenge.png"
        alt="Chenge Image"
        width={75}
        height={75}
        style={{ marginBottom: "40px", cursor: "pointer" }}
        onClick={() => handleNavigation("/store")}
      />
      <div style={{ marginBottom: "40px" }}>
        <DialogRoot size={"xs"}>
          <DialogTrigger asChild>
            <Image src={"/oppthion.png"} alt="Reload Image" width={75} height={75} />
          </DialogTrigger>
          <DialogContent>
            <DialogCloseTrigger
              _focusVisible={{ border: "none", outline: "none" }}
              style={{
                color: "white",
                position: "absolute",
                top: "5px",
                left: "5px",
                width: "20px",
                height: "20px",
                // border: "2px solid white",
                background: "transparent",
              }}
              border={"none"}
            >
              <Image src="/icon.png" alt="" width={30} height={30} />
            </DialogCloseTrigger>
            <DialogHeader background={"#28A745"} zIndex={"-1"}>
              <DialogTitle textAlign={"center"} style={{ opacity: "0" }}>
                Modal
              </DialogTitle>
            </DialogHeader>
            <DialogBody
              textAlign={"center"}
              height={"lg"}
              justifyItems={"center"}
            >
              {/* <PartSelector /> */}
              <div
                style={{
                  backgroundColor: "white",
                  zIndex: "100",
                  borderRadius: "100%",
                  position: "absolute",
                  top: "32px",
                  left: "150px",
                }}
              >
                <Image
                  src={imageIcon}
                  alt="Reload Image"
                  width={85}
                  height={85}
                  // style={{ borderRadius: 50 }}
                  style={{
                    // width: "130px",
                    // height: "130px",
                    borderRadius: "50%", // 円形にする
                    objectFit: "cover", // 画像の比率を保ちながら領域に収める
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#606060",
                  fontWeight: "bold",
                  marginTop: "50px",
                  marginBottom: "30px",
                  fontSize: "1.1rem",
                }}
              >
                {userName}
              </p>
              <HStack>
                <Button
                  style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "#D9D9D9",
                    outline: "none",
                    color: "#606060",
                    fontWeight: "bold",
                    borderRadius: "100px",
                    padding: "25px 90px",
                    fontSize: "1.4rem",
                  }}
                >
                  ログアウト
                </Button>
              </HStack>
            </DialogBody>
          </DialogContent>
        </DialogRoot>
      </div>
      <Image
        src="/reload.png"
        alt="Reload Image"
        width={75}
        height={75}
        style={{ cursor: "pointer" }}
        onClick={handleReload} // 再読み込み処理を実行
      />
    </div>
  );
};
