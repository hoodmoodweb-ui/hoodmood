"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunDim } from "lucide-react";
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

export function ThemeSwitchIcon() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return resolvedTheme === "dark" ? (
    <Moon className="w-full h-full text-black/80  " />
  ) : (
    <SunDim className="w-full h-full text-black/80 " />
  );
}
