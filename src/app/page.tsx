import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center overflow-hidden py-6">
      <Image
        src="/HeroBanner.jpg"
        alt="TrackShift hero banner"
        width={1920}
        height={1080}
        className="block w-full h-auto"
        priority
      />
    </main>
  );
}
