import React, { Component } from 'react';

class Counter extends Component 
{
    state = 
    {
        count:0, 
    };

    render() 
    { 
        return (
            //if we don't want to create a div, we can always use the <React.Fragment></React.Fragment>
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Incerment</button>
            </div> 
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;