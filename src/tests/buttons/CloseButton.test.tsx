import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CloseButton from "../../defaultComponents/buttons/CloseButton";

describe("CloseButton component should", () => {
    const mockProps = {
        onClick: jest.fn(),
        tooltip: "Click to close",
        visible: true,
    };

    it("render with a specific tooltip", () => {
        render(<CloseButton {...mockProps} />);

        const outerElement = screen.getByTestId("outer-element");

        expect(outerElement).toHaveAttribute("title", mockProps.tooltip);
    });

    it("trigger the onClick handler when clicked", () => {
        render(<CloseButton {...mockProps} />);

        const outerElement = screen.getByTestId("outer-element");
        fireEvent.click(outerElement);

        expect(mockProps.onClick).toHaveBeenCalledTimes(1);
    });
});
