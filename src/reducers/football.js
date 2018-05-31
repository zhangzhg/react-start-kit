export const initialState = {
  data:null
};

export default function footballReducer(state = initialState, action) {
  console.log("type in Reducer:", action.type);
  switch (action.type) {
    case 'LIST': {
      ////会把action的数据和类型传到这边来，返回到UI的props里面
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
}
