"use client";
import { useRouter } from "next/navigation";
import { buttonVariants, Button } from "./components/ui/Button";

export default function Home() {
  const router = useRouter();
  function handleButtonClick() {
    router.push("/playground");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Button onClick={handleButtonClick} variant="link">
          Go to Playgrounds
        </Button>
      </div>
    </div>
  );
}
