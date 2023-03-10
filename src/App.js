import NavBar from './components/navbar';
import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import { render } from '@testing-library/react';

class App extends Component {
  state = { counters:[
    { id:1,value:0},
    { id:2,value:0},
    { id:3,value:0},
    { id:4,value:0}
] } ;




handeleIncrement = counter=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
};

handleReset=()=>{
    const counter= this.state.counters.map(c=>{
        c.value=0
        return c
    });
    this.setState({counter})

};

handeleDelete=counterId=>{
    const counters=this.state.counters.filter(c=>c.id!==counterId)
    this.setState({counters})

};

handleDecrement= counter=>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  this.setState({counters});


};


  render(){
  return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c=>c.value>0). length}/>
    <main className='container'>
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handeleDelete}
      onDecrement={this.handleDecrement}
      onIncrement={this.handeleIncrement} />
    </main>
    </React.Fragment>
  );
}
}

export default App;
