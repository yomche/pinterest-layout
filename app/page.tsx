"use client";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Grid } from "@/components/grid";
import { Button } from "@/ui/button";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Grid />
      <Button
        position="right"
        icon={<AiOutlineArrowUp />}
        action={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
}
