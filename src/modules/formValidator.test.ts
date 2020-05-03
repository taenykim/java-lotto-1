import {
  validatePurchaseAmountInput,
  validateManualLottoCountInput,
  validateManualLottoNumber,
  validateWinningLottoNumber,
  validateBonusBallInput,
} from './formValidator'

describe('구입금액 유효성 검사', () => {
  const LOTTO_PRICE = 1000
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = ''
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_BLANK_ERROR')
  })
  it('입력값이 숫자가 아닐 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = '태은'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR')
  })
  it('입력값이 로또하나 가격보다 작을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const purchaseAmount = '500'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('PURCHASE_AMOUNT_IS_LESS_THAN_MINIMUM_AMOUNT_ERROR')
  })
  it('에러가 없을 시, 정확한 값을 잘 리턴하는 지 확인', () => {
    // given
    const purchaseAmount = '2000'
    // when
    const result = validatePurchaseAmountInput(purchaseAmount, LOTTO_PRICE)
    // then
    expect(result).toStrictEqual('2000')
  })
})

describe('수동 로또 개수 유효성 검사', () => {
  const lottoCount = 3
  it('입력값이 없는 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = ''
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MANUAL_LOTTO_COUNT_IS_BLANK_ERROR')
  })
  it('입력값이 숫자가 아닐 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = '태은'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR')
  })
  it('입력값이 로또하나 가격보다 작을 경우, 잘 걸러내는 지 확인', () => {
    // given
    const manualLottoCount = '4'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('MAMUAL_LOTTO_COUNT_IS_GREATER_THAN_LOTTO_COUNT_ERROR')
  })
  it('에러가 없을 시, 정확한 값을 잘 리턴하는 지 확인', () => {
    // given
    const manualLottoCount = '1'
    // when
    const result = validateManualLottoCountInput(manualLottoCount, lottoCount)
    // then
    expect(result).toStrictEqual('1')
  })
})
