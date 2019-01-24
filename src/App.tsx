import * as React from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps {
  readonly firstProp: boolean
  readonly secondProp: boolean
  readonly thirdProp: boolean
}

interface IState {
  readonly message: string
}

class App extends React.Component<
  IProps,
  IState
> {
  public constructor(props: IProps) {
    super(props)

    this.state = {
      message: ''
    }
  }

  public async componentWillMount() {
    this.setState((_state, props) => ({
      message: 'test message',
      firstProp: props.firstProp,
      secondProp: props.secondProp,
      thirdProp: props.thirdProp,
    }))
  }

  public render() {
    const message = this.state.message
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {message}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
