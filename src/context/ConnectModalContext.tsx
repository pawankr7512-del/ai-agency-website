"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConnectModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ConnectModalContext = createContext<ConnectModalContextValue | null>(
  null,
);

export function ConnectModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );

  return (
    <ConnectModalContext.Provider value={value}>
      {children}
    </ConnectModalContext.Provider>
  );
}

export function useConnectModal() {
  const ctx = useContext(ConnectModalContext);
  if (!ctx) {
    throw new Error("useConnectModal must be used within ConnectModalProvider");
  }
  return ctx;
}
