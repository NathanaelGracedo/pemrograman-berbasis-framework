import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/produk",
            pathname: "",
            query: {},
            asPAth: "",
            push: jest.fn(),
            event: {
                on: jest.fn(),
                off: jest.fn()
            },
            isReady: true,
        }
    },
}))

jest.mock("swr", () => ({
    __esModule: true,
    default: () => ({
        data: { data: [] },
        error: null,
        isLoading: false
    })
}))

describe("Product Page", () => {
    it("renders product page correctly", () => {
        const page = render(<TampilanProduk />);
        expect(screen.getByTestId("title").textContent).toContain("Product Page");
        expect(page).toMatchSnapshot();
    })
})