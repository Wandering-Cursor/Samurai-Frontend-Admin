import { ToastServiceMethods } from "primevue/toastservice";

export const copyToClipboard = (value: string, toast: ToastServiceMethods) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Copied to clipboard",
        life: 1000,
      });
    })
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Could not copy text",
        life: 2000,
      });
      console.error(err);
    });
};
