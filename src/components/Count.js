
import React from 'react';

class Count extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {count:0,play:true};
    this.reset = this.reset.bind(this)
    this.playStop = this.playStop.bind(this)
  }

  reset()
  {
    this.setState({count:0},
     function () {
        if (this.props.onChangeStatus) 
        {
          this.props.onChangeStatus(this.state.count,'RESET')
        }
    })
  }

  playStop()
  {
    this.setState((state,props)=>({
      play: !state.play
    }),
     function () {
        if (this.props.onChangeStatus) 
        {
          this.props.onChangeStatus(this.state.count,this.state.play?'PlAY':'STOP')
        }
        
    });

    
  }


  componentDidMount() {
    this.timer = setInterval(
      () => this.increment(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  increment() {
    this.setState((state,props)=>({
      count: state.count + (state.play?1:0)
    }));
  }


  render() {

    console.log(this.state.count,this.state.play)
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.reset} 
          style={{marginRight:'10px',width:'80px'}}>
          RESET
        </button>
        <button onClick={this.playStop} 
          style={{marginRight:'10px',width:'80px'}}>
          {this.state.play?'STOP':'PLAY'}
        </button>
      </div>
    );
  }
}

export default Count;