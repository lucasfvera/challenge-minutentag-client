import { NavigationBar } from "../components/Organisms/NavigationBar/NavigationBar";
import { Typography } from "../components/Atoms/Typography/Typography";
import { ProductsList } from "../components/Organisms/ProductsList/ProductsList";

export function ProductsPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <section>
          <Typography as="p" type="subheader" color="var(--medium-dark-text)">
            Hi Mr. Michael,
          </Typography>
          <Typography as="h1" type="hero" weight="bold" margin="0 0 1rem 0">
            Welcome Back!
          </Typography>
        </section>
        <section>
          <Typography as="h2" type="header" weight="bold">
            Our Products
          </Typography>
          <ProductsList />
        </section>
      </main>
    </>
  );
}
