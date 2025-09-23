"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useTrackEvent } from "@/hooks/useTrackEvent";

type EventProps = Record<string, string | number | boolean>;

interface PlausibleLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  eventName?: string;        // default to "Nav Click"
  eventProps?: EventProps;   // e.g., { link: href, label: 'Afspraak maken' }
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function PlausibleLink({
  children,
  className,
  eventName = "Nav Click",
  eventProps,
  onClick,
  ...linkProps
}: PlausibleLinkProps) {
  const track = useTrackEvent();
  return (
    <Link
      {...linkProps}
      className={className}
      onClick={(e) => {
        track(eventName, eventProps ?? { link: String(linkProps.href) });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}