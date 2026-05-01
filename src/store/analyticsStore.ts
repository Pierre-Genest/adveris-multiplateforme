const STORAGE_KEY = "plausible_sent";

function getSent(): Set<string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function markSent(key: string): void {
  const sent = getSent();
  sent.add(key);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...sent]));
}

export function hasSent(key: string): boolean {
  return getSent().has(key);
}

export function trackOnce(goal: string, props?: Record<string, string | number | boolean>): void {
  const key = props ? `${goal}:${JSON.stringify(props)}` : goal;
  if (hasSent(key)) return;

  const plausibleUrl = import.meta.env.VITE_PLAUSIBLE_URL;
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

  if (plausibleUrl && domain) {
    fetch(`${plausibleUrl}/api/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": navigator.userAgent,
      },
      body: JSON.stringify({
        name: goal,
        url: window.location.href,
        domain,
        props,
      }),
    }).catch(() => {});
  }

  markSent(key);
}
