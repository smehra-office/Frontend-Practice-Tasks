export const Debounce = (fn: any, timeout: number) => {
    let timeoutId: NodeJS.Timeout;

    return () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(fn, timeout);
    };
};

export {};