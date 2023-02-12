import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import Image from "../Images/200424060716-nasa-worm-logo.jpg"

describe("App", () => {
const { asFragment } = render(<App />);

it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
});

});