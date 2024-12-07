"use client";
import { LineAndButtons } from "../components/LineAndButtons";
import { PartSelector } from "./_components/PartSelector";
import Image from "next/image";
import { HStack } from "@chakra-ui/react";
// import { Button } from "@/components/ui/button";
import { Button } from "@chakra-ui/react";
// import { signIn, signOut, useSession } from "next-auth/react";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BiBorderRadius, BiFontSize } from "react-icons/bi";
import { CiTextAlignCenter } from "react-icons/ci";
import { GrTextAlignCenter } from "react-icons/gr";
import { Sidebar } from "../components/Sidebar";
import { p } from "framer-motion/client";

const userName = "ゲストユーザー";
const imageIcon = "/oppthion.png";

export default function page() {
  return (
    <div>
      <DialogRoot size={"xs"}>
        <DialogTrigger asChild>
          <Image
            src={imageIcon}
            alt='Reload Image'
            width={55}
            height={55}
          />
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
            <Image src='/icon.png' alt='' width={30} height={30} />
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
                alt='Reload Image'
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
  );
}
