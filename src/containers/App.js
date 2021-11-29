import React,{useState,useEffect} from 'react';
import CardArray from '../components/CardArray';
import SearchBox from '../components/SearchField';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

function App(){

    const [robots,setRobots] = useState([]);
    const [searchField,setSearchField] = useState('');

    const SearchEvent = (event)=>{
        setSearchField(event.target.value);
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{return response.json()})
        .then(users=>setRobots(users));
    },[]);

    const filtered_robots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(!robots){
        return <h1>Loading</h1>
    }else{
        return(
            <div className="tc pa2 ma2">
                <h1 className="f1">Robofriends</h1>
                <SearchBox className="tc pa4 ma2" SearchEvent = {SearchEvent}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardArray robots = {filtered_robots}/>
                    </ErrorBoundary>
                </Scroll>    
            </div>
         );

    }

}

export default App;