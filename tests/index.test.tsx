import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import { describe, it, expect } from "vitest"; // Asegúrate de importar describe, it, expect de vitest

describe("Home", () => {
  it("renders the main page content", () => {
    render(<Home />);
    // Busca un texto que realmente exista en tu componente page.tsx
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
