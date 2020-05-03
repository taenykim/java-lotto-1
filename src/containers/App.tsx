import React, { useState } from 'react'
import { validateInput } from '../modules/formValidator'

const App = () => {
  const LOTTO_PRICE = 1000

  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [purchaseAmountIsBlankError, setPurchaseAmountIsBlankError] = useState(false)
  const [purchaseAmountIsNotNumberError, setPurchaseAmountIsNotNumberError] = useState(false)
  const [
    purchaseAmountIsUnderMinimumAmountError,
    setPurchaseAmountIsUnderMinimumAmountError,
  ] = useState(false)

  const onChangePurchaseAmount = (e: any) => {
    setPurchaseAmount(e.target.value)
  }

  const onSubmitPurchaseAmount = (e: any) => {
    e.preventDefault()
    setPurchaseAmountIsBlankError(false)
    setPurchaseAmountIsNotNumberError(false)
    setPurchaseAmountIsUnderMinimumAmountError(false)

    const validatedPurchaseAmount = validateInput(purchaseAmount, LOTTO_PRICE)
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_BLANK_ERROR') {
      return setPurchaseAmountIsBlankError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR') {
      return setPurchaseAmountIsNotNumberError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_UNDER_MINIMUM_AMOUNT_ERROR') {
      return setPurchaseAmountIsUnderMinimumAmountError(true)
    }
    const _purchaseAmount = Number(validatedPurchaseAmount)
  }
  return (
    <div>
      <form onSubmit={onSubmitPurchaseAmount}>
        <label htmlFor="purchaseAmoutInput">구입 금액을 입력해주세요. </label>
        <input
          id="purchaseAmoutInput"
          type="text"
          value={purchaseAmount}
          onChange={onChangePurchaseAmount}
        ></input>
        <button type="submit">입력</button>
      </form>
      {purchaseAmountIsBlankError && (
        <div style={{ color: 'red' }}>구입 금액을 입력하지 않았습니다.</div>
      )}
      {purchaseAmountIsNotNumberError && (
        <div style={{ color: 'red' }}>구입 금액은 숫자로 입력해주세요.</div>
      )}
      {purchaseAmountIsUnderMinimumAmountError && (
        <div style={{ color: 'red' }}>로또 최소 구입 가격은 {LOTTO_PRICE}원입니다.</div>
      )}
    </div>
  )
}

export default App
