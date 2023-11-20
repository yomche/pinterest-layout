"use client";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ImagesGrid } from "@/components/ImagesGrid";
import { Button } from "@/ui/button";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <ImagesGrid />
      <Button
        position="right"
        icon={<AiOutlineArrowUp />}
        action={scrollToTop}
      />
    </div>
  );
}
