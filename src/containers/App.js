import React,{Component} from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchField';
//import {robots} from '../robots.js';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component{
    constructor(){
        super();
        this.state = {
            searchField : "",
            robots : []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{return response.json()})
        .then(users=>this.setState({robots:users}));
    }

    SearchEvent = (event)=>{
        //console.log(event.target.value);
        this.setState({searchField:event.target.value});

    }

    render(){
        const filtered_robots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        //console.log(filtered_robots);

        if(!this.state.robots){
            return <h1>Loading</h1>
        }else{
            return(
                <div className="tc pa2 ma2">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox className="tc pa4 ma2" SearchEvent = {this.SearchEvent}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardArray robots = {filtered_robots}/>
                        </ErrorBoundary>
                    </Scroll>    
                </div>
             );

        }
    }
    
}

export default App;