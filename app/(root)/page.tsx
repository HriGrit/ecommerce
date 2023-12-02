"use client";

import { useStoreModalStore } from "@/hooks/use-store-modal-store";
import { useEffect } from "react";

export default function Home() {
  const isOpen = useStoreModalStore((state) => state.isOpen);
  const onOpen = useStoreModalStore((state) => state.onOpen);
  
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return(
    <div>
      Root Page
    </div>
  )
}
