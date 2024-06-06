import { useRouter } from "next/router";
import { useCallback } from "react";

export const useCustomRouter = () => {
  const router = useRouter();

  const navigateTo = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  return { navigateTo };
};
