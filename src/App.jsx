import { Redirect, Route, Switch } from 'wouter';
import './App.css';
import { ProductsPage } from './pages/Products.page';
import { ProductDetailPage } from './pages/ProductDetail.page';
import { RootLayout } from './components/Layouts/RootLayout';

function App() {
    return (
        <RootLayout>
            <Switch>
                <Route path={'/products'} component={ProductsPage}>
                    <Route
                        path={'/:productId-productBrand'}
                        component={ProductDetailPage}
                    />
                </Route>
                <Route path={'/'}>
                    <Redirect to="/products" />
                </Route>
                <Route>404 - Not Found</Route>
            </Switch>
        </RootLayout>
    );
}

export default App;
