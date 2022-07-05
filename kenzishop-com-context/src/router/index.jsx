import { Route, Switch } from "react-router-dom"
import Homepage from "../pages/homePage"
import ShowCard from "../pages/ShowCard"

export const Router = ()=> {

    return(
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/ShowCart">
                <ShowCard/>
            </Route>
        </Switch>
    )
}

