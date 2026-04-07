import { render } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { describe } from 'node:test';

describe("About Page", () => {
    it("renders about page correctly", () => {
        const page = render(<AboutPage />);
        expect(page).toMatchSnapshot();
    })
})