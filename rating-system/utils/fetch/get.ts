import { getLocalStorage } from "../local-storage/local-storage";

export const fetchGet = async <T>(path: string) => {
    const token = getLocalStorage<string>('token');
    const bearerToken = `Bearer ${token}`;
    const result = await fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken,
        },
    });

    if (!result.ok) throw new Error(result.statusText || 'Something went wrong');

    return await result.json() as T;
};