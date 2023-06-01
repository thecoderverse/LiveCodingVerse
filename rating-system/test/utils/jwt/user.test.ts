import { getUser } from "../../../utils/jwt/user"

jest.mock("jose", () => ({
    decodeJwt: jest.fn(() => ({ id: 1, email: ""}))
}))

describe("getUser function", () => {
    it("should return the payload", async () => {
        const req = {
            headers: {
                authorization: "Bearer token"
            }
        } as any;
        const result = await getUser(req);
        expect(result).toEqual({ id: 1, email: "" })
    });
});