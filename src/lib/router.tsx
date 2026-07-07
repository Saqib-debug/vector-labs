import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface RouterState {
  pathname: string;
  search: string;
  hash: string;
}

interface RouterContextValue extends RouterState {
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function getState(): RouterState {
  return {
    pathname: window.location.pathname || "/",
    search: window.location.search || "",
    hash: window.location.hash || "",
  };
}

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<RouterState>(() => getState());

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const replace = options?.replace ?? false;
    const normalized = to.startsWith("#") ? `${window.location.pathname}${to}` : to;
    const url = new URL(normalized, window.location.origin);

    const nextState = {
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    };

    if (replace) {
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    } else {
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }

    setState(nextState);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setState(getState());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !isInternalHref(href) || anchor.target === "_blank") {
        return;
      }

      event.preventDefault();
      navigate(href);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [navigate]);

  useEffect(() => {
    if (state.hash) {
      const id = decodeURIComponent(state.hash.replace(/^#/, ""));
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [state.pathname, state.search, state.hash]);

  const value = useMemo(
    () => ({
      ...state,
      navigate,
    }),
    [navigate, state],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within RouterProvider");
  }
  return context;
}
