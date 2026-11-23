const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://compusconnect-adpc.onrender.com').replace(/\/+$/, '')

export async function api(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  let payload
  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok) {
    throw new Error(payload?.error || `Request failed (${response.status})`)
  }
  return payload
}

export { API_BASE_URL }
