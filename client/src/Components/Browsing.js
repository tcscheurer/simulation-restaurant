import React from 'react';
import axios from 'axios';
import {Drawer} from './Drawer';



class Browsing extends React.Component{
    constructor(){
        super()
        this.state = {
            menuItems: [],
            menuItemsFiltered: []
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        axios.get('/api/food').then(response=>{
            this.setState({
                menuItems: response.data,
                menuItemsFiltered: response.data
            });
        });
    }

    handleFilter(e){
        const filteredArray = this.state.menuItems.filter(curr=>{
            return curr.tod === e.target.value
        })
        this.setState({
            menuItemsFiltered: [...filteredArray]
        })
    }

    handleLogout(){
        axios.post('/api/auth/logout').then(response=>{
            console.log(response);
        }).catch(err=>console.log(err));
    }

    render(){
            let foodsToDisplay = this.state.menuItemsFiltered.map(curr=>{
                return(
                    <div className='browsing-view-food-item'>
                        <h4>{curr.title}</h4>
                        <button>details</button>
                    </div>
                )
            })
        return(
        <div>
            <Drawer />
            <div className='browsing-view-jumbotron'>
                <div className='browsing-view-jumbotron-action-wrapper'>
                </div>
                <div className='browsing-view-foods-display'>
                    {foodsToDisplay}
                </div>
            </div>
        </div>
        )
    }
}

export default Browsing;