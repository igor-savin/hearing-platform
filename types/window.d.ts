export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (event: string, name: string) => void;
  }
}
