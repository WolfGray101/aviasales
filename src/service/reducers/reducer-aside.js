const initialState = {    
  allChecked: false,
  noneStop: false,
  oneStop: false,
  twoStop: false,
  threeStop: false
}
const reducerAside = (state = initialState, action) => {
    switch ( action.type ) {
      case 'ONE' : 
        return {
          ...state,
          oneStop: !state.oneStop
        }
      case 'TWO' :
        return {
          ...state,
          twoStop : !state.twoStop
        };
      case 'THREE' :
          return {
            ...state,
            threeStop: !state.threeStop
          };
      case 'NONE' :
          return state = {    
            ...state,
            noneStop: !state.noneStop,
          };
      case 'ALL' :
          return {
            allChecked: !state.allChecked,
            noneStop: !state.noneStop,
            oneStop: !state.oneStop,
            twoStop: !state.twoStop,
            threeStop: !state.threeStop,
          };
      default: 
        return state;
    }
  }

  export default reducerAside