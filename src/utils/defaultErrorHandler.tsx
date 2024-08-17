import { toast } from "react-toastify";
import { handleBackendError, handleBackendErrorOptional } from "@/services/backend-errors/backendErrorHandling";

const isBrowser = typeof window !== "undefined";

export const defaultErrorHandler = (
  error: any,
  toastPrefix: string = ""
) => {
  console.error(error);
  if (isBrowser) {
    const backendError = handleBackendErrorOptional(error);
    toast.error(toastPrefix + (backendError?.message ?? error.message));
  }
}