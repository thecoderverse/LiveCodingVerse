import { fetchGet } from "../../../utils/fetch/get";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: "Criteria 1", description: "Description 1" }),
        ok: true,
    })
) as any;

describe("fetchGet", () => {
    it("should return the data", async () => {
        const data = await fetchGet<{ id: number, title: string, description: string }>('/api/criteria/1')
        expect(data).toEqual({ id: 1, title: "Criteria 1", description: "Description 1" })
    });
});