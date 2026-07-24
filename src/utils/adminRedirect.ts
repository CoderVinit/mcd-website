export interface StoredUserInfo {
  type?: string | number | null;
  user_category_main?: string | number | null;
  id?: string | number | null;
  remember_me?: boolean;
}

export function storeUserInfo(info: StoredUserInfo) {
  localStorage.setItem("user_info", JSON.stringify(info));
}

export function buildAdminUrl(): string | null {
  const token = localStorage.getItem("token");
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;
  if (!token || !adminUrl) return null;

  const params = new URLSearchParams({ token });

  try {
    const raw = localStorage.getItem("user_info");
    if (raw) {
      const info: StoredUserInfo = JSON.parse(raw);
      if (info.type != null) params.set("type", String(info.type));
      if (info.user_category_main != null)
        params.set("user_category_main", String(info.user_category_main));
      if (info.id != null) params.set("id", String(info.id));
      if (info.remember_me) params.set("remember_me", "true");
    }
  } catch {
  }

  return `${adminUrl}/profile?${params.toString()}`;
}

export function redirectToAdmin(): boolean {
  const url = buildAdminUrl();
  if (!url) return false;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}
