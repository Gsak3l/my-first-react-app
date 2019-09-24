import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component 
{
    state = 
    {
        counters: 
        [
            {id: 1, value: 4},
            {id: 2, value: -5},
            {id: 3, value: 1},
            {id: 4, value: 0},
        ]
    }

    handleDelete = (counterId) =>
    {
        //douleuei
        console.log("event handler caught", counterId.value);
        //den douleuei, emfanizei undefined
        console.log("event handler caught", counterId.id);
    }

    render() 
    { 
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
            </div>
        );
    }
}
 
export default Counters;