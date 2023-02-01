import { render, screen } from "@testing-library/react"
import { Heading } from "../index"

describe("Heading/ATOMS", () => {
  it("renders as text", () => {
    render(<Heading type="text" title="heading" />)
    const heading = screen.getByRole("heading", {
      name: /heading/i,
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass("flex")
  })

  it("renders as link", () => {
    render(<Heading type="link" title="link" href="" />)
    const heading = screen.getByText(/link/i)
    expect(heading).toBeInTheDocument()
  })
})
