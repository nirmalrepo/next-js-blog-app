import { getByText, render, screen } from "@testing-library/react";
import Post from "../components/Post";
jest.mock("../components/ComponentRegistry", () => ({
  sectionType1: jest.fn(() => (
    <section className="t-section">Section Type 1</section>
  )),
  sectionType2: jest.fn(() => (
    <section className="t-section">Section Type 2</section>
  )),
}));
// Mock data for testing
const mockPost: any = {
  sections: [{ _type: "sectionType1" }, { _type: "sectionType2" }],
};

describe("Post component", () => {
  it("renders correctly with sections", () => {
    render(<Post post={mockPost} />);

    // Check if the main container element is rendered

    expect(screen.getByText("Section Type 2")).toBeInTheDocument();
  });
});
