export const validatePurchaseAmountInput = (purchaseAmount: string, lottoPrice: number) => {
  let _purchaseAmount = purchaseAmount.trim()

  if (_purchaseAmount.length === 0) {
    return 'PURCHASE_AMOUNT_IS_BLANK_ERROR'
  }

  const purchaseAmountHasString = _purchaseAmount && _purchaseAmount.match(/\D/g)
  if (purchaseAmountHasString !== null && purchaseAmountHasString.length >= 0) {
    return 'PURCHASE_AMOUNT_IS_NOT_NUMBER_ERROR'
  }
  if (_purchaseAmount.length < String(lottoPrice).length) {
    return 'PURCHASE_AMOUNT_IS_UNDER_MINIMUM_AMOUNT_ERROR'
  }

  return _purchaseAmount
}

export const validateManualLottoCountInput = (manualLottoCount: string, lottoCount: number) => {
  let _manualLottoCount = manualLottoCount.trim()

  if (_manualLottoCount.length === 0) {
    return 'MANUAL_LOTTO_COUNT_IS_BLANK_ERROR'
  }

  const manualLottoCountHasString = _manualLottoCount && _manualLottoCount.match(/\D/g)
  if (manualLottoCountHasString !== null && manualLottoCountHasString.length >= 0) {
    return 'MANUAL_LOTTO_COUNT_IS_NOT_NUMBER_ERROR'
  }
  if (Number(_manualLottoCount) > lottoCount) {
    return 'MAMUAL_LOTTO_COUNT_IS_BIGGER_THAN_LOTTO_COUNT_ERROR'
  }

  return _manualLottoCount
}
