import { NavigationBar } from "@/components/Organisms/NavigationBar/NavigationBar";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { ProductCard } from "../components/Molecules/ProductCard/ProductCard";

export function ProductsPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <section>
          <Typography as="p" type="subheader" color="var(--medium-dark-text)">
            Hi Mr. Michael,
          </Typography>
          <Typography as="h1" type="hero" weight="bold">
            Welcome Back!
          </Typography>
        </section>
        <section>
          <Typography as="h2" type="header" weight="bold">
            Our Products
          </Typography>
          <ul>
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
