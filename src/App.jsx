import { Redirect, Route, Switch } from 'wouter';
import './App.css';
import { ProductsPage } from './pages/Products.page';
import { ProductDetailPage } from './pages/ProductDetail.page';

function App() {
    return (
        <Switch>
            <Route path={'/products'} component={ProductsPage} />
            <Route
                path={'/products/:productId-productBrand'}
                component={ProductDetailPage}
            />
            <Route path={'/'}>
                <Redirect to="/products" />
            </Route>
            <Route>404 - Not Found</Route>
        </Switch>
    );
}

export default App;
