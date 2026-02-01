const API_BASE = import.meta.env.VITE_API_BASE

export async function fetchHealth() {
  const res = await fetch(`${API_BASE}/v1/health`)
  if (!res.ok) {
    throw new Error('API error')
  }
  return res.json()
}
