import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import './bootstrap.css';
import './bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css';
import Auth from './Views/Auth';
import AuthClient from './Views/AuthClient';
import AuthContextProvider from './contexts/AuthContext';
import AuthClientContextProvider from './contexts/AuthClientContext';
import SupplierContextProvider from './contexts/SupplierContext';
import ProtectedRoute from './Routing/ProtectedRoute';
import DataDashboard from './Views/DataDashboard';
import SupplierInvoiceContextProvider from './contexts/SupplierInvoiceContext';
import CategoryProductContextProvider from './contexts/CategoryProductContext';
import ProductContextProvider from './contexts/ProductContext';
import ProductInvoiceContextProvider from './contexts/ProductInvoiceContext';
function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <SupplierContextProvider>
          <SupplierInvoiceContextProvider>
            <AuthClientContextProvider>
              <CategoryProductContextProvider>
                <ProductContextProvider>
                  <ProductInvoiceContextProvider>
                    <Router>
                      <Switch>
                        <Route path='/admin-acodern/login' render={props => <Auth {...props} authRoute='loginAdmin' />}  />
                        <Route path='/admin-acodern/register' render={props => <Auth {...props} authRoute='registerAdmin' />}  />
                        <ProtectedRoute path='/DataDashboard' component={DataDashboard} />
                        <Route path='/login' render={props => <AuthClient {...props} authRoute='login' />}  />
                        <Route path='/register' render={props => <AuthClient {...props} authRoute='register' />}  />
                        <Route exact path='/' render={props => <AuthClient {...props} authRoute='home' />}  />
                        <Route path='/productcategory/:id' render={props => <AuthClient {...props} authRoute='productcategory' />} routeName="Product Category" />
                        <Route path='/productdetails/:id' render={props => <AuthClient {...props} authRoute='productdetails' />} routeName="Product Details" /> 
                        <Route path='/productcart' render={props => <AuthClient {...props} authRoute='productcart' />} routeName="Product Cart" /> 
                      </Switch>
                    </Router>
                  </ProductInvoiceContextProvider>
                </ProductContextProvider>
              </CategoryProductContextProvider>
            </AuthClientContextProvider>
          </SupplierInvoiceContextProvider>
        </SupplierContextProvider>
       </AuthContextProvider>    
    </div>
  );
}
export default App;
