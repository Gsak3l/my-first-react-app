import React, { Component } from 'react';

class Counter extends Component 
{
    state = 
    {
        count:1, 
        tags: ['mikey']
    };

    renderTags()
    {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() 
    { 
        return ( /*parenthesis cannot move to the bottom because
            javascript thinks that the keyword return is equal to return ;*/
            //if we don't want to create a div, we can always use the <React.Fragment></React.Fragment>
            <div>
                {this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
            </div> 
            //true + string = string !! e.x. true && mike = mike
        );
    }
    /*
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
    */
}
export default Counter;