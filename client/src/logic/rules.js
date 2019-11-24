// amounts is an object containing the count of each dice  eg. { 'one': 3 }
const nonZeroAmountValues = amounts => (
  Object.values(amounts).filter(a => a !== 0)
)
const total = amounts => (
  Object.values(amounts).reduce((sum, current) => sum + current, 0)
)

export const scoreAccumulation = amounts => {
  const values = nonZeroAmountValues(amounts)
  const score = (sixScores(amounts, values) ||
          fiveOfKind(values)
        + fourOfKind(values)
        + threeOfKind(amounts, values)
        + onesOrFives(amounts, values)
  )

  return [score, values]
}

const sixScores = (amounts, values) => {
  if (total(amounts) < 6) return false

  const score = (triplets(values)
                || fourAndPair(values)
                || threePair(values)
                || straight(values)
                || sixOfKind(values)
  )

  if (score) values.splice(0, 6)
  return score
}

const triplets = values => (
  values.length === 2 && values.indexOf(3) >= 0 ? 2500 : 0
)

const fourAndPair = values => (
  values.length === 2 && values.indexOf(4) >= 0 ? 1500 : 0
)

const threePair = values => (
  values.length === 3 && values[0] === values[1] ? 1500 : 0
)

const straight = values => values.length === 6 ? 1500 : 0

const sixOfKind = values =>  values.length === 1 ? 3000 : 0

const fiveOfKind = values => {
  const index = values.indexOf(5)
  const score = index >= 0 ? 2000 : 0

  if (score) values.splice(index, 1)
  return score
}

const fourOfKind = values => {
  const index = values.indexOf(4)
  const score = index >= 0 ? 1000 : 0

  if (score) values.splice(index, 1)
  return score
}

const threeOfKind = (amounts, values) => {
  const index = Object.values(amounts).indexOf(3)
  const valuesIndex = values.indexOf(3)
  let score

  switch (index) {
    case 0:
      score = 300
      break
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
     score = (index + 1) * 100
      break
    default:
      score = 0
  }

  if (score) values.splice(valuesIndex, 1)
  return score
}

const onesOrFives = (amounts, values) => {
  const scorePer = { one: 100, five: 50 }
  let score = 0
  Object.keys(scorePer).forEach(num => {
    const numberOf = amounts[num]
    const index = values.indexOf(numberOf)
    if (numberOf > 0 && numberOf < 3) {
      score += numberOf * scorePer[num]
      values.splice(index, 1)
    }
  })
  return score  
}