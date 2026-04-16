export type ApiConfig = {
  baseUrl: string
}

export function getApiBaseUrl(): string {
  const isServer = typeof window === "undefined"
  if (!isServer) {
    // Browser should call same-origin (nginx will route /api/* to Django).
    // This avoids "localhost" leaks in production builds.
    return ""
  }

  // Server-side (SSR/RSC) runs inside the container network.
  const env = (globalThis as any)?.process?.env as Record<string, string | undefined> | undefined
  const base = env?.API_INTERNAL_BASE_URL || env?.NEXT_PUBLIC_API_BASE_URL || "http://backend:8000"
  return base.replace(/\/$/, "")
}

export function withAbsoluteUrl(baseUrl: string, maybeRelativeUrl: string | null | undefined): string | null {
  if (!maybeRelativeUrl) return null
  if (maybeRelativeUrl.startsWith("http://") || maybeRelativeUrl.startsWith("https://")) return maybeRelativeUrl
  if (!maybeRelativeUrl.startsWith("/")) return `${baseUrl}/${maybeRelativeUrl}`
  return `${baseUrl}${maybeRelativeUrl}`
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const baseUrl = getApiBaseUrl()
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    // prefer fresh data for CMS-like pages
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`)
  }
  return (await res.json()) as T
}

export async function apiGetOptional<T>(path: string, init?: RequestInit): Promise<T | null> {
  const baseUrl = getApiBaseUrl()
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`)
  }
  return (await res.json()) as T
}

export async function apiPost<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
  const baseUrl = getApiBaseUrl()
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers || {}),
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`POST ${path} failed: ${res.status} ${text}`)
  }
  return (await res.json()) as T
}

