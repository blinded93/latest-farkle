const initialState = {
  rollCount: 0,
  selectedDiceIndexes: [],
  savedDice: [],
  unsavedDice: [0, 1, 2, 3, 4, 5],
  totalScore: 0,
  selectedScore: 0,
  dice: ['one', 'two', 'three', 'four', 'five', 'six'],
  finalDice: [],
  scoreToBeat: 0,
  diceState: ['dice-on', 'dice-on', 'dice-on', 'dice-on', 'dice-on', 'dice-on']
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'FARKLE':
      return {
        ...initialState,
        totalScore: state.totalScore,
        dice: state.dice,
        diceState: state.diceState
      }

    case 'RESET_ALL':
      return { ...initialState, dice: state.dice }
      
    case 'CONTINUE':
      return {
        ...initialState,
        score: state.totalScore,
        rollCount: state.rollCount
      }

    case 'SELECT_DICE':
      const withDiceState = state.diceState.map((s, i) => (
        i === action.diceIndex ? 'dice-off' : s
      ))

      return {
        ...state,
        diceState: withDiceState,
        unsavedDice: state.unsavedDice.filter(d => d !== action.diceIndex),
        selectedDiceIndexes: [...state.selectedDiceIndexes, action.diceIndex]
      }

    case 'DESELECT_DICE':
      const withoutDiceState = state.diceState.map((s, i) => (
        i === action.diceIndex ? 'dice-on' : s
      ))
      const dice = state.savedDice.includes(action.diceIndex)
        ? state.selectedDiceIndexes
        : state.selectedDiceIndexes.filter(i => i !== action.diceIndex)

      return {
        ...state,
        diceState: withoutDiceState,
        unsavedDice: [ ...state.unsavedDice, action.diceIndex ],
        selectedDiceIndexes: dice
      }

    case 'DESELECT_ALL':
      return {
        ...state,
        selectedDiceIndexes: [],
        savedDice: [],
        unsavedDice: initialState.unsavedDice,
        diceState: initialState.diceState
      }

    case 'UPDATE_SCORE':
      return { ...state, selectedScore: action.score }
      
    case 'UPDATE_TOTAL':
      return {
        ...state,
        selectedScore: 0,
        totalScore: state.totalScore + state.selectedScore
      }

    case 'SCORE_TO_BEAT':
      return { ...state, scoreToBeat: action.scoreToBeat }

    case 'SAVE_DICE':
      return {
        ...state,
        selectedDiceIndexes: [],
        savedDice: [ ...state.savedDice, ...state.selectedDiceIndexes ],
        finalDice: [],
        dice: action.newDice
      }

    case 'UPDATE_FINAL_DICE':
      return { ...state, finalDice: state.dice }

    case 'INCREMENT_ROLL_COUNT':
      return { ...state, rollCount: state.rollCount + 1 }

    default:
      return state
  }
}