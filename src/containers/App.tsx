import React, { useState } from 'react'
import {
  validatePurchaseAmountInput,
  validateManualLottoCountInput,
} from '../modules/formValidator'

const App = () => {
  const LOTTO_PRICE = 1000

  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [purchaseAmountIsBlankError, setPurchaseAmountIsBlankError] = useState(false)
  const [purchaseAmountIsNotNumberError, setPurchaseAmountIsNotNumberError] = useState(false)
  const [
    purchaseAmountIsUnderMinimumAmountError,
    setPurchaseAmountIsUnderMinimumAmountError,
  ] = useState(false)
  const [manualLottoCountIsBlankError, setManualLottoCountIsBlankError] = useState(false)
  const [manualLottoCountIsNotNumberError, setManualLottoCountIsNotNumberError] = useState(false)
  const [
    manualLottoCountIsBiggerThanLottoCountError,
    setManualLottoCountIsBiggerThanLottoCountError,
  ] = useState(false)

  const [lottoCount, setLottoCount] = useState(0)
  const [gotALottoCount, setGotALottoCount] = useState(false)
  const [manualLottoCount, setManualLottoCount] = useState('')
  const [manualLottos, setManualLottos] = useState<string[]>([])

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

    const validatedPurchaseAmount = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
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
    setManualLottoCountIsBlankError(false)
    setManualLottoCountIsNotNumberError(false)
    setManualLottoCountIsBiggerThanLottoCountError(false)

    const validatedManualLottoCount = validateManualLottoCountInput(manualLottoCount, lottoCount)
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR') {
      return setManualLottoCountIsBlankError(true)
    }
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR') {
      return setManualLottoCountIsNotNumberError(true)
    }
    if (validatedManualLottoCount === 'MAMUAL_LOTTO_COUNT_IS_BIGGER_THAN_LOTTO_COUNT_ERROR') {
      return setManualLottoCountIsBiggerThanLottoCountError(true)
    }
    const _manualLottos = []
    for (let i = 0; i < Number(manualLottoCount); i++) {
      _manualLottos.push('')
    }
    setManualLottos(_manualLottos)
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
      {manualLottoCountIsBlankError && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수를 입력하지 않았습니다.</div>
      )}
      {manualLottoCountIsNotNumberError && (
        <div style={{ color: 'red' }}>수동으로 구매할 로또 수는 숫자로 입력해주세요.</div>
      )}
      {manualLottoCountIsBiggerThanLottoCountError && (
        <div style={{ color: 'red' }}>{lottoCount}개보다 작게 입력해주세요.</div>
      )}
      {manualLottos.length > 0 && (
        <form>
          {manualLottos.map((manualLotto, i) => {
            return (
              <div key={i}>
                <label htmlFor={'manualLottoNumber' + i}>
                  수동으로 구매할 번호를 입력해주세요.
                </label>
                <input style={{ width: '200px' }} id={'manualLottoNumber' + i} type="text"></input>
              </div>
            )
          })}
          <button type="submit">입력</button>
        </form>
      )}
    </div>
  )
}

export default App
