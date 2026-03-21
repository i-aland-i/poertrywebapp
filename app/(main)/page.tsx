"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Theme Preview</h1>
      {/* Backgrounds */}
      <div className="flex gap-4">
        <div className="w-32 h32 bg-background border border-border rounded p-2">
          background
        </div>
        <div className="w-32 h32 bg-surface border border-border rounded p-2">
          surface
        </div>
        <div className="w-32 h32 bg-muted rounded p-2 text-muted-foreground">
          muted
        </div>
        <div className="w-32 h32 bg-primary rounded p-2 text-primary-foreground">
          primary
        </div>
        <div className="w-32 h32 bg-accent rounded p-2 text-accent-foreground">
          accent
        </div>
        <div className="w-32 h32 bg-destructive rounded p-2 text-white">
          destructive
        </div>
      </div>
      {/* Text */}
      <div className="space-y-2">
        <p className="text-foreground">regular text (foreground)</p>
        <p className="text-muted-foreground">
          secondary text (muted-foreground)
        </p>
        <p className="text-primary">Link/Action text (primary)</p>
        <p className="text-accent">Accent text (accent)</p>
      </div>
      {/* card example */}
      <div className="bg-surface border border-border rounded-1g p-6 space-y-2">
        <h2 className="text-xl font-semibold">An Artwork Card</h2>
        <p className="text-muted-foreground">By Some Artist . 3 hours Ago</p>
        <p>A beautiful painting of the Kurdish mountains.....</p>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded cursor-pointer">
          Like
        </button>
        <button
          className="bg-accent text-accent-foreground px-4 py-2 rounded ml-2 cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Theme Toggle Button
        </button>
      </div>
    </div>
  );
}
