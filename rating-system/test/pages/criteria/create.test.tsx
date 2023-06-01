import React from "react";
import { fireEvent, render, screen } from "../../test-utils";
import CreateCriteria from "../../../pages/criteria/create";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true,
    })
) as any;

describe("CreateCriteria Page", () => {
    it("should render the heading", () => {
        const textToFind = "Create Criteria"

        render(<CreateCriteria />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });

    it("should render the input for criteria name", () => {
        const textToFind = "Criteria Title"

        render(<CreateCriteria />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });

    it("should render the input for criteria description", () => {
        const textToFind = "Criteria Description"

        render(<CreateCriteria />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });

    it("should render the button to create criteria", () => {
        const textToFind = "Create"

        render(<CreateCriteria />);
        const heading = screen.getByText(textToFind);

        expect(heading).toBeInTheDocument();
    });

    it("fireEvent should be called when button is clicked", () => {
        const textToFind = "Create"

        render(<CreateCriteria />);
        const button = screen.getByText(textToFind);

        fireEvent.click(button);

        expect(global.fetch).toHaveBeenCalledTimes(1);

        expect(global.fetch).toHaveBeenCalledWith("/api/criteria", {
            body: '{"title":"","description":""}',
            headers: {
                "Authorization": "Bearer null",
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    });
});