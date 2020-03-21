import { Switch, Route, Redirect } from 'react-router-dom';


import React, { Component } from 'react'

export default class router extends Component {
    render() {
        return (
            <Switch>
                {
                    this.props.routeData.map((item, index) => {
                        if (item.component) {
                            if (item.children) {
                                return <Route  key={index} path={item.path} render={props => <item.component routeData={item.children} {...props} />} />
                            }
                            return <Route key={index} path={item.path} component={item.component} />
                        }
                        return <Redirect key={index} from={item.path} to={item.redirect} />
                    })
                }
            </Switch>
        )
    }
}
