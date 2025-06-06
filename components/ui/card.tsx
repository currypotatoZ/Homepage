import React from "react";
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-md shadow-sm">{children}</div>;
}
export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}