import React, { useState } from 'react'
import {
  validatePurchaseAmountInput,
  validateManualLottoCountInput,
  validateManualLottoNumber,
} from '../modules/formValidator'

const App = () => {
  const LOTTO_PRICE = 1000
  const LOTTO_COUNT = 6
  const LOTTO_MAX_NUMBER = 45

  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [purchaseAmountIsBlankError, setPurchaseAmountIsBlankError] = useState(false)
  const [purchaseAmountIsNotNumberError, setPurchaseAmountIsNotNumberError] = useState(false)
  const [
    purchaseAmountIsLessThanMinimumAmountError,
    setPurchaseAmountIsLessThanMinimumAmountError,
  ] = useState(false)
  const [manualLottoCountIsBlankError, setManualLottoCountIsBlankError] = useState(false)
  const [manualLottoCountIsNotNumberError, setManualLottoCountIsNotNumberError] = useState(false)
  const [
    manualLottoCountIsGreaterThanLottoCountError,
    setManualLottoCountIsGreaterThanLottoCountError,
  ] = useState(false)
  const [manualLottoNumberIsBlankError, setManualLottoNumberIsBlankError] = useState(false)
  const [
    manualLottoNumberIsGreaterThanLottoCountError,
    setManualLottoNumberIsGreaterThanLottoCountError,
  ] = useState(false)
  const [
    manualLottoNumberIsLessThanLottoCountError,
    setManualLottoNumberIsLessThanLottoCountError,
  ] = useState(false)
  const [manulLottoNumberIsNotNumberError, setManulLottoNumberIsNotNumberError] = useState(false)
  const [
    manulLottoNumberIsNotBeInLottoScopeError,
    setManulLottoNumberIsNotBeInLottoScopeError,
  ] = useState(false)
  const [
    manualLottoNumberHasDuplicationNumberError,
    setManualLottoNumberHasDuplicationNumberError,
  ] = useState(false)

  const [lottoCount, setLottoCount] = useState(0)
  const [gotALottoCount, setGotALottoCount] = useState(false)
  const [manualLottoCount, setManualLottoCount] = useState('')
  const [manualLottos, setManualLottos] = useState<string[]>([])
  const [gotManualLottos, setGotManualLottos] = useState(false)

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
    setPurchaseAmountIsLessThanMinimumAmountError(false)
    setGotALottoCount(false)

    const validatedPurchaseAmount = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_BLANK_ERROR') {
      return setPurchaseAmountIsBlankError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR') {
      return setPurchaseAmountIsNotNumberError(true)
    }
    if (validatedPurchaseAmount === 'PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR') {
      return setPurchaseAmountIsLessThanMinimumAmountError(true)
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
    setManualLottoCountIsGreaterThanLottoCountError(false)

    const validatedManualLottoCount = validateManualLottoCountInput(manualLottoCount, lottoCount)
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR') {
      return setManualLottoCountIsBlankError(true)
    }
    if (validatedManualLottoCount === 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR') {
      return setManualLottoCountIsNotNumberError(true)
    }
    if (validatedManualLottoCount === 'MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR') {
      return setManualLottoCountIsGreaterThanLottoCountError(true)
    }
    const _manualLottos = []
    for (let i = 0; i < Number(manualLottoCount); i++) {
      _manualLottos.push('')
    }
    setManualLottos(_manualLottos)
  }

  const onChangeManualLottoNumber = (e: any) => {
    const manualLottoIndex = Number(e.target.id.substr(17))
    manualLottos[manualLottoIndex] = e.target.value
    setManualLottos(manualLottos)
  }

  const onSubmitManualLottos = (e: any) => {
    e.preventDefault()
    setManualLottoNumberIsBlankError(false)
    setManualLottoNumberIsGreaterThanLottoCountError(false)
    setManualLottoNumberIsLessThanLottoCountError(false)
    setManulLottoNumberIsNotNumberError(false)
    setManulLottoNumberIsNotBeInLottoScopeError(false)

    for (let i = 0; i < manualLottos.length; i++) {
      const validatedManualLottoNumber = validateManualLottoNumber(
        manualLottos[i],
        LOTTO_COUNT,
        LOTTO_MAX_NUMBER
      )
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_IS_BLANK_ERROR') {
        return setManualLottoNumberIsBlankError(true)
      }
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_IS_GREATER_THAN_LOTTO_COUNT') {
        return setManualLottoNumberIsGreaterThanLottoCountError(true)
      }
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_IS_LESS_THAN_LOTTO_COUNT') {
        return setManualLottoNumberIsLessThanLottoCountError(true)
      }
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_IS_NOT_NUMBER_ERROR') {
        return setManulLottoNumberIsNotNumberError(true)
      }
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_IS_NOT_BE_IN_LOTTO_SCOPE_ERROR') {
        return setManulLottoNumberIsNotBeInLottoScopeError(true)
      }
      if (validatedManualLottoNumber === 'MANUAL_LOTTO_NUMBER_HAS_DUPLICATION_NUMBER_ERROR') {
        return setManualLottoNumberHasDuplicationNumberError(true)
      }
    }
    setGotManualLottos(true)
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
      {purchaseAmountIsLessThanMinimumAmountError && (
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
      {manualLottoCountIsGreaterThanLottoCountError && (
        <div style={{ color: 'red' }}>{lottoCount}개보다 작게 입력해주세요.</div>
      )}
      {manualLottos.length > 0 && (
        <form onSubmit={onSubmitManualLottos}>
          {manualLottos.map((manualLotto, i) => {
            return (
              <div key={i}>
                <label htmlFor={'manualLottoNumber' + i}>
                  수동으로 구매할 번호를 입력해주세요.
                </label>
                <input
                  style={{ width: '200px' }}
                  id={'manualLottoNumber' + i}
                  type="text"
                  onChange={onChangeManualLottoNumber}
                ></input>
              </div>
            )
          })}
          <button type="submit">입력</button>
        </form>
      )}
      {manualLottoNumberIsBlankError && (
        <div style={{ color: 'red' }}>입력하지 않은 번호가 있습니다.</div>
      )}
      {manualLottoNumberIsGreaterThanLottoCountError && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manualLottoNumberIsLessThanLottoCountError && (
        <div style={{ color: 'red' }}>로또 개수는 {LOTTO_COUNT}개로 입력해주세요.</div>
      )}
      {manulLottoNumberIsNotNumberError && (
        <div style={{ color: 'red' }}>수동으로 구매할 번호는 숫자와 ,로 입력해주세요.</div>
      )}
      {manulLottoNumberIsNotBeInLottoScopeError && (
        <div style={{ color: 'red' }}>
          로또는 1부터 {LOTTO_MAX_NUMBER} 사이의 숫자를 입력해주세요.
        </div>
      )}
      {manualLottoNumberHasDuplicationNumberError && (
        <div style={{ color: 'red' }}>중복된 로또 번호가 있습니다.</div>
      )}
      {gotManualLottos && (
        <div>
          <div>
            수동으로 {manualLottoCount}장, 자동으로 {lottoCount - Number(manualLottoCount)}개를
            구매했습니다.
          </div>
          <div>
            {manualLottos.map((manualLotto, i) => {
              return <div key={i}>[{manualLotto.split(',').join(', ')}]</div>
            })}
          </div>
          <form></form>
        </div>
      )}
    </div>
  )
}

export default App
