import { render, screen } from "@testing-library/react";
import { Features } from "./Features";

describe("Features Component", () => {
    test("renders all feature titles", () => {
        render(<Features />);

        expect(
            screen.getByText("Brinda una experiencia optimizada")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Mejora la calidad de las decisiones")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Cuenta con servicio técnico confiable")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Aumenta tus ganancias")
        ).toBeInTheDocument();
    });

    test("renders all feature descriptions", () => {
        render(<Features />);

        expect(
            screen.getByText(
                "Mejora la satisfacción del cliente con herramientas avanzadas"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Toma decisiones informadas basadas en datos reales"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Soporte técnico especializado cuando lo necesites"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Optimiza tus operaciones para maximizar beneficios"
            )
        ).toBeInTheDocument();
    });

    test("renders 4 feature cards", () => {
        render(<Features />);
        const cards = screen.getAllByRole("heading", { level: 3 });
        expect(cards.length).toBe(4);
    });
});
