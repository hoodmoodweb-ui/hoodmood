"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export default function Toaster(props: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      richColors
      toastOptions={{
        classNames: {
          success: "!bg-emerald-600 !text-white !border-emerald-500",
          error: "!bg-red-600 !text-white !border-red-500",
        },
      }}
      {...props}
    />
  );
}
