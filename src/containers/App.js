import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

class App extends React.Component{
    constructor() {
        super()
        this.state = { 
            robots: [],
            searchfield : '' 
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json())
        .then(users=>this.setState({ robots: users }))
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
     
        if(this.state.robots.length === 0){
            return <h1 className='the_title tc'>loading</h1>
        }
        else{
        return (
        <div className='tc'>
            <h1 className='the_title'>robofriends</h1>
            <SearchBox searchChange = {this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
            <CardList robots = {filterRobots} />
            </ErrorBoundry>
            </Scroll>
        </div>
    )}
}
}
export default App