import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {Blog} from "./components/pages/Blog";
import {Contacts} from './components/pages/Contacts';
import {About} from './components/pages/About';
import {Navbar} from "./components/Navbar";
import {AuthContextProvider} from "./Context/AuthContext";
import {Admin} from "./components/Admin";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>

                    {/*Alternative way to write Route*/}
                    <Route path="/contacts" component={Contacts} />

                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    {/*Switch will stop looking for another routes after finding one matching route.. this blog will not be displayed*/}
                    <Route path="/blog">
                        Blog duplication
                    </Route>
                </Switch>
                <PrivateRoute path="/admin">
                    <Admin/>
                </PrivateRoute>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;


