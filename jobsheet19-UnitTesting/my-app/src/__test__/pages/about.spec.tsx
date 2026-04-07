import { render, screen } from "@testing-library/react";
import About from "@/pages/about";

describe("About Page", () => {
    it("renders about page with title", () => {
        const page = render(<About />);
        const titleElement = screen.getByTestId("title");
        expect(titleElement.textContent).toBe("About Page");
        expect(titleElement).toBeInTheDocument();
    })
    
    it("renders h1 element with correct text", () => {
        render(<About />);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toHaveTextContent("About Page");
    })

    it("renders title element", () => {
        render(<About />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("renders with correct structure", () => {
        const { container } = render(<About />);
        const div = container.querySelector("div");
        expect(div).toBeInTheDocument();
    })

    it("renders page without errors", () => {
        const page = render(<About />);
        expect(page).toBeTruthy();
    })
})
