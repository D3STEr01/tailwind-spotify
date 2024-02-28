import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Playlist } from "@/components/Playlist";
import { Daily } from "@/components/Daily";
import { Seta } from "@/components/Seta";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <Seta />

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <Playlist />

          <h2 className="font-semibold text-2xl mt-10">
            Made for Alguma coisa{" "}
          </h2>

          <Daily />
        </main>
      </div>

      <Footer />
    </div>
  );
}
