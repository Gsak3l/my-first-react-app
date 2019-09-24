import React, { Component } from 'react';

class Counter extends Component 
{
    state = 
    {
        value: this.props.value, 
        tags: ['mikey']
    };

    //constructor(){super();this.handleIncrement = this.handleIncrement.bind(this);}

    renderTags()
    {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    handleIncrement = () => //this basically allows us to use the keyword this
    {
        //console.log(product);
        this.setState({value: this.state.value + 1}) ; //++ doesn't work
    };

    //doHandleIncrement = () => {this.handleIncrement({id:1});}; //messy way

    render() 
    { 
        console.log(this.props);
        //console.log('props', this.props); //props is a plain javascript object
        return ( /*parenthesis cannot move to the bottom because
            javascript thinks that the keyword return is equal to return ;*/
            //if we don't want to create a div, we can always use the <React.Fragment></React.Fragment>
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(this.state.value)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div> 
            //true + string = string !! e.x. true && mike = mike
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    };
    
    formatCount()
    {
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    };
}
export default Counter;
//chapter named "what happens when state changes didn't have any code"