/*import React from 'react';*/
import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import { robots } from './Robots';
import Scroll from '../components/Scroll';
import Errorboundary from '../components/ErrorBoundary';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        /*check the last line like this: 
        .then(users => {})*/
    }

    searchChanges = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        //       if (robots.length === 0) {
        // OR
        /*
                if (!robots.length) {
                    return <h1>Loading...</h1>
                } else {
                    return (*/
        return !robots.length ? <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.searchChanges} />
                    <Scroll>
                        <Errorboundary>
                            <Cardlist robots={filteredRobots} />
                        </Errorboundary>
                    </Scroll>
                </div>
            );
    }

};

/*const App = () => {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox />
        <Cardlist robots = { robots } />
        </div>
    );
};*/

export default App;