import React from 'react'
import Root from './root';

class ParentComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: 'red',
        inputValue: '',
        inputDisable: true
      }
      this.changeBg = this.changeBg.bind(this);
      this.changeInput = this.changeInput.bind(this);
    }
    changeBg(event) {
        event.preventDefault();
        this.setState({
            bgColor: event.target.value,
            inputValue: '',
            inputDisable: true
        });
    }
    
    changeInput(event) {
        this.setState({
            bgColor: event.target.value,
            inputValue: event.target.value,
        });
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
                        <div className="boxF">
                            <ChildComp color={this.state.bgColor} input={this.state.inputValue} changeBg={this.changeBg} changeInput={this.changeInput} inputDisable={this.state.inputDisable}/>
                        </div>
                    </div>
                </div>
            </div>
        </Root>
      );
    }
  };
  
  class ChildComp extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <h1 style={{backgroundColor:this.props.color}}>Change Background!</h1>
        <form>
            <input value={this.props.input} onChange={this.props.changeInput} disabled={this.props.inputDisable} placeholder="Enter Color!"/>
        </form>
      </div>
      );
    }
  };

  export default ParentComp;
  