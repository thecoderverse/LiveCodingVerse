import { getLocalStorage } from "../local-storage/local-storage";

export const fetchPost = async <T>(path: string, data: T) => {
    const token = getLocalStorage<string>('token');
    const bearerToken = `Bearer ${token}`;
    const result = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearerToken,
        },
    });

    if (!result.ok) throw new Error(result.statusText || 'Something went wrong');

    return await result.json() as T;
};