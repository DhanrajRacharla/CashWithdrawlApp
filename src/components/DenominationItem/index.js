// Write your code here

import './index.css'

const DenominationItem = unique => {
  const {listItem, onAmountDecrease} = unique
  const {id, value} = listItem
  const onDecrease = () => {
    onAmountDecrease(value)
  }

  return (
    <li>
      <button onClick={onDecrease} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
