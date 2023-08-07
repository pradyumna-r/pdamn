import dynamic from "next/dynamic";
const Terminal = dynamic(() => import("@/app/components/Terminal"), {
  ssr: false,
});
export default function Page() {
  return (
    <div>
      <Terminal />
    </div>
  );
}
