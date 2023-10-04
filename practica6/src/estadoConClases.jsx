import React, { Component } from 'react';

class EstadoConClases extends Component {
  constructor() {
    super();
    this.state = {
      contador: 1000,
    };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>disminuir</button>
      </div>
    );
  }
}

export default EstadoConClases;