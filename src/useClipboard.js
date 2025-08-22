import { ref, unref } from 'vue';

/**
 * A composable function to easily copy text to the clipboard.
 * @param {string} textToCopy The text to copy to the clipboard.
 */
export function useClipboard(textToCopy) {
  const isSupported = 'clipboard' in navigator;
  const copied = ref(false);
  const error = ref(null);

  const copy = async () => {
    if (!isSupported) {
      error.value = new Error('Clipboard API is not supported in this browser.');
      return;
    }

    try {
      await navigator.clipboard.writeText(unref(textToCopy));
      copied.value = true;
      error.value = null;
    } catch (err) {
      copied.value = false;
      error.value = err;
    }
  };

  return {
    isSupported,
    copied,
    error,
    copy,
  };
}