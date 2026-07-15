"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/cms/firebase";

export function useCmsUser() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => onAuthStateChanged(getFirebaseAuth(), (nextUser) => {
    setUser(nextUser);
    setAuthReady(true);
  }), []);

  return { user, authReady };
}
