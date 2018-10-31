import { add, subtract, divide, multiply } from '../../src/math'

describe('Unit Test Application Code', function() {
  context('math.js', function() {

    it('Can add numbers', function() {
      expect(add(1, 2)).to.eq(3)
    })

    it('Can subtract numbers', function() {
      expect(subtract(5, 12)).to.eq(-7)
    })

    it('Can divide numbers', function() {
      expect(divide(27, 9)).to.eq(3)
    })

    it('Can muliple numbers', function() {
      expect(multiply(5, 4)).to.eq(20)
    })
  })

})
