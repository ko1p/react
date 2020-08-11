import React, { Component } from 'react';
import './App.css';
import Cards from './cards/Cards';

class App extends Component {

  state = {
    cars: [
      {name: 'ford', year: 2016},
      {name: 'mazda', year: 2010},
      {name: 'opel', year: 2011}
    ],
  }

  deleteHendler(index) {
    const newCarsState = this.state.cars.concat();
    newCarsState.splice(index, 1)
    this.setState({ cars: newCarsState })
  }

  inputHandler(name, index) {
    const newCarsState = [...this.state.cars];
    newCarsState[index].name = name;
    this.setState({name})

  }

  render() {
    return (
      <div>
        <p>Список карточек</p>
        {
          this.state.cars.map((car, index) => {
            return (
              <Cards 
                key={index}
                name={car.name}
                year={car.year}
                deleteHendler={() => this.deleteHendler(index)}
                inputHandler={(event) => this.inputHandler(event.target.value, index)}
              />
            )
          })
        }
      </div>
    )
  }

}

export default App;
