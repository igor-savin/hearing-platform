"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/cms/firebase";

export function useCmsUser() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const auth = getFirebaseAuth();
    let active = true;
    let validationController: AbortController | null = null;

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      validationController?.abort();
      validationController = new AbortController();
      const controller = validationController;

      void (async () => {
        if (!active) return;
        setAuthReady(false);

        if (!nextUser) {
          setUser(null);
          setAuthReady(true);
          return;
        }

        try {
          const token = await nextUser.getIdToken();
          const response = await fetch("/api/back-office/session", {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
            signal: controller.signal
          });

          if (!response.ok) {
            if (active) {
              setUser(null);
              setAuthError("This Google account is not authorized for the publishing back office.");
            }
            await signOut(auth);
            return;
          }

          if (active) {
            setUser(nextUser);
            setAuthError("");
          }
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") return;
          if (active) {
            setUser(null);
            setAuthError("Your back-office access could not be verified. Please try again.");
          }
          await signOut(auth);
        } finally {
          if (active) setAuthReady(true);
        }
      })();
    });

    return () => {
      active = false;
      validationController?.abort();
      unsubscribe();
    };
  }, []);

  return { user, authReady, authError };
}
