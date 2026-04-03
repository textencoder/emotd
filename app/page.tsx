import IconLogo from "@/components/IconLogo";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-900 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-zinc-900">
        <IconLogo />
      </main>
    </div>
  );
}
