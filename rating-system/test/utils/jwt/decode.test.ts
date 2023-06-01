import { decode } from "../../../utils/jwt/decode";

jest.mock("jose", () => ({
    decodeJwt: jest.fn(() => ({ id: 1, email: ""}))
}))

describe("decode", () => {
    it("should return the data", () => {
        const data = decode("token")
        expect(data).toEqual({ id: 1, email: "" })
    });
});