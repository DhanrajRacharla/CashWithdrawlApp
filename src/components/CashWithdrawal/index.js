// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onAmountDecrease = unique => {
    this.setState(prevState => ({count: prevState.count - unique}))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="white-container">
        <div className="dark-container">
          <div className="pro-and-name width">
            <p className="profile">s</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="pro-and-name ">
            <p className="balance">Your Balance</p>
            <div>
              <p className="count balance">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="name">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                onAmountDecrease={this.onAmountDecrease}
                listItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
