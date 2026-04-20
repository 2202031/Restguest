export async function http<T>(path: string, config: RequestInit): Promise<T> {
    const request = new Request(path, config);
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    // may error if there is no body, return empty array
    return response.json().catch(() => ({}));
}
