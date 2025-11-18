"use client";

import * as React from "react";

import { cn } from "./utils";

import "./progress.css";

type ProgressProps = React.ComponentPropsWithoutRef<"progress">;

function Progress({ className, value = 0, max = 100, style: _style, ...props }: ProgressProps) {
  const safeMax = typeof max === "number" && max > 0 ? max : 100;
  const clampedValue = Math.min(Math.max(value ?? 0, 0), safeMax);

  return (
    <div
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
    >
      <progress
        data-slot="progress-indicator"
        className="progress-element"
        value={clampedValue}
        max={safeMax}
        {...props}
      />
    </div>
  );
}

export { Progress };

