import React from 'react'
import Root from './root';

class ParentComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: 'white',
        inputValue: '',
        inputDisable: true
      }
      this.changeBg = this.changeBg.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    changeBg(event) {
      this.setState({
          bgColor: event.target.value,
          inputValue: event.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      alert('A color was submitted: ' + this.state.value);
      if (e.key === 'Enter') {
      }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                inputDisable: false
          });
        },3000)
    }
    

    render() {
      return (
          <Root>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="boxF" style={{backgroundColor:this.state.bgColor}}>
                            <ChildComp input={this.state.inputValue} changeBg={this.changeBg} inputDisable={this.state.inputDisable} onKeyDown={this.handleKeyPress}/>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
      );
    }
  };
  
  class ChildComp extends React.Component {
    render() {
      return (
      <div>
        <h1>Change Background!</h1>
        <form onSubmit={this.handleSubmit}>
            <input value={this.props.input} onChange={this.props.changeBg} disabled={this.props.inputDisable} placeholder="Enter Color!"/>
        </form>
      </div>
      );
    }
  };

  export default ParentComp;
  