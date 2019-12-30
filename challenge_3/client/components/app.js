var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var stepCounter = 0;

var F1 = function (_React$Component) {
  _inherits(F1, _React$Component);

  function F1(props) {
    _classCallCheck(this, F1);

    var _this = _possibleConstructorReturn(this, (F1.__proto__ || Object.getPrototypeOf(F1)).call(this, props));

    _this.state = {
      showCheckout: 'inline',
      showF1: 'none',
      showF2: 'none',
      showF3: 'none',
      showReport: 'none',
      //object to collect data on state change
      data: {}
    };

    _this.next = _this.next.bind(_this);
    _this.sendData = _this.sendData.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  //handle change in input value


  _createClass(F1, [{
    key: 'handleChange',
    value: function handleChange(event) {
      //take the new entred data and updated our data in state with it before updating with setState
      this.state.data[event.target.name] = event.target.value;
      this.setState({ data: this.state.data });
    }

    //act when next is click by hiding current step and showing next step

  }, {
    key: 'next',
    value: function next(e) {
      e.preventDefault();
      console.log(stepCounter);
      //hide ?
      //switch based on step counter
      switch (stepCounter) {
        case 0:
          console.log(this.state.name);
          //send to server on checkout click
          $.post("http://localhost:3000", this.state.data).done(function (data) {
            console.log(data);
          });
          this.setState({
            //start toggling the display for the steps
            showCheckout: 'none',
            showF1: 'inline',
            showF2: 'none',
            showF3: 'none',
            showReport: 'none'
          });
          stepCounter++;
          break;
        case 1:
          this.setState({
            showCheckout: 'none',
            showF1: 'none',
            showF2: 'inline',
            showF3: 'none',
            showReport: 'none'
          });
          stepCounter++;
          break;
        case 2:
          this.setState({
            showCheckout: 'none',
            showF1: 'none',
            showF2: 'none',
            showF3: 'inline',
            showReport: 'none'
          });
          stepCounter++;
          break;
        case 3:
          this.setState({
            showCheckout: 'none',
            showF1: 'none',
            showF2: 'none',
            showF3: 'none',
            showReport: 'inline'
          });
        default:

      }
    }
  }, {
    key: 'sendData',
    value: function sendData() {
      var response = axios.get("http://localhost:3000/", { headers: { 'Content-Type': 'application/json' } });
      console.log(response.data);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var HTML = React.createElement(
        'form',
        { onSubmit: this.next },
        React.createElement(
          'div',
          { id: 'checkout', style: { display: this.state.showCheckout } },
          React.createElement('input', { type: 'submit', value: 'Checkout', onClick: this.next })
        ),
        React.createElement(
          'div',
          { id: 'step 1', style: { display: this.state.showF1 } },
          React.createElement(
            'label',
            null,
            'Name:',
            React.createElement('input', { type: 'text', value: this.state.data.name, onChange: this.handleChange, name: 'name' })
          ),
          React.createElement(
            'label',
            null,
            'Email:',
            React.createElement('input', { type: 'text', value: this.state.data.email, onChange: this.handleChange, name: 'email' })
          ),
          React.createElement(
            'label',
            null,
            'Password:',
            React.createElement('input', { type: 'text', value: this.state.data.password, onChange: this.handleChange, name: 'password' })
          ),
          React.createElement('input', { type: 'submit', value: 'Next', onClick: this.next })
        ),
        React.createElement(
          'div',
          { id: 'step 2', style: { display: this.state.showF2 } },
          React.createElement(
            'label',
            null,
            'Line 1:',
            React.createElement('input', { type: 'text', value: this.state.data.line1, onChange: this.handleChange, name: 'line1' })
          ),
          React.createElement(
            'label',
            null,
            'Line 2:',
            React.createElement('input', { type: 'text', value: this.state.data.line2, onChange: this.handleChange, name: 'line2' })
          ),
          React.createElement(
            'label',
            null,
            'State:',
            React.createElement('input', { type: 'text', value: this.state.data.state, onChange: this.handleChange, name: 'state' })
          ),
          React.createElement(
            'label',
            null,
            'Zip code:',
            React.createElement('input', { type: 'text', value: this.state.data.zip, onChange: this.handleChange, name: 'zip' })
          ),
          React.createElement(
            'label',
            null,
            'Phone:',
            React.createElement('input', { type: 'text', value: this.state.data.phone, onChange: this.handleChange, name: 'phone' })
          ),
          React.createElement('input', { type: 'submit', onChange: this.handleChange, value: 'Next' })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'label',
            { style: { display: this.state.showF3 } },
            'Credit Card Number:',
            React.createElement('input', { type: 'text', value: this.state.data.creditCardNo, onChange: this.handleChange, name: 'creditCardNo' })
          ),
          React.createElement(
            'label',
            { style: { display: this.state.showF3 } },
            'Expiry date:',
            React.createElement('input', { type: 'text', value: this.state.data.expiryDate, onChange: this.handleChange, name: 'expiryDate' })
          ),
          React.createElement(
            'label',
            { style: { display: this.state.showF3 } },
            'CVV:',
            React.createElement('input', { type: 'text', value: this.state.data.cvv, onChange: this.handleChange, name: 'cvv' })
          ),
          React.createElement(
            'label',
            { style: { display: this.state.showF3 } },
            'Billing zip code:',
            React.createElement('input', { type: 'text', value: this.state.data.billingZip, onChange: this.handleChange, name: 'billingZip' }),
            React.createElement('input', { type: 'submit', value: 'Next' })
          )
        ),
        React.createElement(
          'div',
          { id: 'report', style: { display: this.state.showReport } },
          React.createElement(
            'ul',
            null,
            Object.keys(this.state.data).map(function (value, index) {
              return React.createElement(
                'li',
                null,
                _this2.state.data[value]
              );
            })
          ),
          React.createElement('input', { type: 'submit', value: 'Finish', onClick: this.finish, style: { display: this.state.showReport } })
        )
      );
      return HTML;
    }
  }]);

  return F1;
}(React.Component);

var domContainer = document.querySelector('#app');
ReactDOM.render(e(F1), domContainer);