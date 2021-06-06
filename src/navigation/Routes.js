import React from 'react';
import Navbar from '../components/Navbar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { StoriesContainer } from '../containers/StoriesContainer';
import SubmitForm from '../components/SubmitForm';


function Routes() {


    return (
        <Router>


            <Navbar />



            <Switch>

                <Route path="/" >
                    <StoriesContainer />
                </Route>

                <Route path='/submit' >
                    <SubmitForm />
                </Route>


            </Switch>


        </Router>
    );

}
export default Routes;