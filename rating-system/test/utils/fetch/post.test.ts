import { fetchPost } from "../../../utils/fetch/post";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: "Criteria 1", description: "Description 1" }),
        ok: true,
    })
) as any;

describe("fetchPost", () => {
    it("should return the data", async () => {
        const data = await fetchPost<{ id: number, title: string, description: string }>('/api/criteria/1', { title: "Criteria 1", description: "Description 1" } as any)
        expect(data).toEqual({ id: 1, title: "Criteria 1", description: "Description 1" })
    });
});