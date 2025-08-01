
declare global {
  interface Window {
    userlike?: {
      api: {
        openWidget: () => void;
        closeWidget: () => void;
      };
    };
  }
}

export {};
