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

  const [lottoCount, setLottoCount] = useState(0)
  const [gotALottoCount, setGotALottoCount] = useState(false)
  const [manualLottoCount, setManualLottoCount] = useState(0)

  const onChangePurchaseAmount = (e: any) => {
    setPurchaseAmount(e.target.value)
  }

  const onChangeManualLottoCount = (e: any) => {
    setManualLottoCount(e.target.value)
  }

  const onSubmitPurchaseAmount = (e: any) => {
    e.preventDefault()
    setPurchaseAmountIsBlankError(false)
    setPurchaseAmountIsNotNumberError(false)
    setPurchaseAmountIsUnderMinimumAmountError(false)
    setGotALottoCount(false)

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
    const lottoCount = Math.floor(_purchaseAmount / LOTTO_PRICE)
    setLottoCount(lottoCount)
    setGotALottoCount(true)
  }

  const onSubmitManualLottoCount = (e: any) => {
    e.preventDefault()
    console.log(manualLottoCount)
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
      {gotALottoCount && (
        <form onSubmit={onSubmitManualLottoCount}>
          <label htmlFor="manualLottoCountInput">수동으로 구매할 로또 수를 입력해주세요. </label>
          <input
            id="manualLottoCountInput"
            type="text"
            value={manualLottoCount}
            onChange={onChangeManualLottoCount}
          ></input>
          <button type="submit">입력</button>
        </form>
      )}
    </div>
  )
}

export default App
