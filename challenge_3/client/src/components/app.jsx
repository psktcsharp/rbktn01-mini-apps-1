const e = React.createElement;
var stepCounter = 0;

class F1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showF1: 'inline',
      showF2: 'none',
      showF3: 'none',
      showReport: 'none',
      //object to collect data on state change
      data: {
        //not needed since data will be created upon state change
        // name:"",
        // email:"",
        // password:"",
        // line1:"",
        // line2:"",
        // city:"",
        // state:"",
        // zip:"",
        // phone:"",
        // creditCardNo:"",
        // expiryDate:"",
        // billingZip:"",
        // cvv:""
      },
      reportArray: []
    };

    this.next = this.next.bind(this)

    this.handleChange = this.handleChange.bind(this);
  }
  //handle change in input value
  handleChange(event) {
    //take the new entred data and updated our data in state with it before updating with setState
    this.state.data[event.target.name] = event.target.value
    this.setState({ data: this.state.data });


  }

  //act when next is click by hiding current step and showing next step
  next(e) {
    e.preventDefault();
    console.log(stepCounter)
    //hide ?
    //switch based on step counter
    switch (stepCounter) {
      case 0:
        console.log(this.state.name)
        this.setState({
          showF1: 'none',
          showF2: 'inline',
          showF3: 'none',
          showReport: 'none'
        })
        stepCounter++
        break;
      case 1:
        this.setState({
          showF1: 'none',
          showF2: 'none',
          showF3: 'inline',
          showReport: 'none'
        })
        stepCounter++
        break;
      case 2:
        this.setState({
          showF1: 'none',
          showF2: 'none',
          showF3: 'none',
          showReport: 'inline'
        })
        break;
      default:

    }
  }

  render() {
    const HTML = (<form onSubmit={this.next} >
      <div id="step 1" style={{ display: this.state.showF1 }} >
        <label>
          Name:
              <input type="text" value={this.state.data.name} onChange={this.handleChange} name="name" />
        </label>
        <label>
          Email:
              <input type="text" value={this.state.data.email} onChange={this.handleChange} name="email" />
        </label>
        <label>
          Password:
              <input type="text" value={this.state.data.password} onChange={this.handleChange} name="password" />
        </label>
        <input type="submit" value="Next" onClick={this.next} />
      </div>
      <div id="step 2" style={{ display: this.state.showF2 }} >
        <label>
          Line 1:
              <input type="text" value={this.state.data.line1} onChange={this.handleChange} name="line1" />
        </label>
        <label>
          Line 2:
              <input type="text" value={this.state.data.line2} onChange={this.handleChange} name="line2" />
        </label>
        <label>
          State:
              <input type="text" value={this.state.data.state} onChange={this.handleChange} name="state" />
        </label>
        <label>
          Zip code:
              <input type="text" value={this.state.data.zip} onChange={this.handleChange} name="zip" />
        </label>
        <label>
          Phone:
              <input type="text" value={this.state.data.phone} onChange={this.handleChange} name="phone" />
        </label>
        <input type="submit" onChange={this.handleChange} value="Next" />
      </div>
      <div>
        <label style={{ display: this.state.showF3 }}>
          Credit Card Number:
              <input type="text" value={this.state.data.creditCardNo} onChange={this.handleChange} name="creditCardNo" />
        </label >
        <label style={{ display: this.state.showF3 }}>
          Expiry date:
              <input type="text" value={this.state.data.expiryDate} onChange={this.handleChange} name="expiryDate" />
        </label>
        <label style={{ display: this.state.showF3 }}>
          CVV:
              <input type="text" value={this.state.data.cvv} onChange={this.handleChange} name="cvv" />
        </label>
        <label style={{ display: this.state.showF3 }}>
          Billing zip code:
              <input type="text" value={this.state.data.billingZip} onChange={this.handleChange} name="billingZip" />
          <input type="submit" value="Next" />
        </label>

      </div >
      <div id="report" style={{ display: this.state.showReport }}>

        <ul>
          {
            Object.keys(this.state.data).map((value, index) => {
              return <li>{this.state.data[value]}</li>
            })
          }

        </ul>
        <input type="submit" value="Finish" onClick={this.finish} style={{ display: this.state.showReport }} />

      </div>
    </form>
    );
    return HTML;

  }
}
const domContainer = document.querySelector('#app');
ReactDOM.render(e(F1), domContainer);

