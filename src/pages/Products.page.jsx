import { NavigationBar } from "../components/Organisms/NavigationBar/NavigationBar";
import { ProductsList } from "../components/Organisms/ProductsList/ProductsList";
import { ProductsPageHeader } from "../components/Organisms/ProductsPageHeader/ProductsPageHeader";

export function ProductsPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <ProductsPageHeader />
        <ProductsList />
      </main>
    </>
  );
}
