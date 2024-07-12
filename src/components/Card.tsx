import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Card({tools}:any) {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={tools} />
    </div>
  );
}