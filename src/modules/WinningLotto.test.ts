import { WinningLotto } from './WinningLotto'
import { Lotto } from './Lotto'

describe('WinningLotto객체', () => {
  it('WinningLotto객체에 Lotto객체가 잘 들어가는지 확인', () => {
    // given, when
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    const winningLotto = new WinningLotto(lotto, 3)
    // then
    expect(winningLotto.lotto).toStrictEqual(new Lotto([1, 2, 3, 4, 5, 6]))
  })
})
