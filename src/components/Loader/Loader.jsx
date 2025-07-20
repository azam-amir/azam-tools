"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-foreground border-opacity-50"></div>
    </div>
  );
}
