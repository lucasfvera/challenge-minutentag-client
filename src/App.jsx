import { Route, Switch } from 'wouter';
import './App.css';

function App() {
    return (
        <Switch>
            {/* <h1>E-commerce Beer</h1> */}
            <Route
                path={'/products'}
                component={() => <div>Products page</div>}
            />
            <Route
                path={'/products/:productId-:productBrand'}
                component={(params) => (
                    <div>
                        Products page:{' '}
                        {params.params['productId-:productBrand']}
                    </div>
                )}
            />
            <Route>404 - Not Found</Route>
        </Switch>
    );
}

export default App;
