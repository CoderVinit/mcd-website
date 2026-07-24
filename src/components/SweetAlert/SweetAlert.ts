import Swal from "sweetalert2";
import { colors } from "@/theme/colors";

export type SweetAlertPayload = {
  type?: "success" | "error" | "warning" | "info";
  icon?: "success" | "error" | "warning" | "info";
  title?: string;
  text?: string;
  onConfirm?: () => void;
};

export default function showSweetAlert(payload: SweetAlertPayload) {
  Swal.fire({
    icon: payload.icon || payload.type || "info",
    title: payload.title || "",
    text: payload.text || "",
    confirmButtonColor: colors.primary,
  }).then(() => {
    payload.onConfirm?.();
  });
}

