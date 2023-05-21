export const fetchPost = async <T>(path: string, data: T) => {
    const result = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!result.ok) throw new Error(result.statusText || 'Something went wrong');

    return await result.json() as T;
};