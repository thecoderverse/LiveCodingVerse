export const setLocalStorage = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
};

export const getLocalStorage = <T>(key: string) => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as T;
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}
