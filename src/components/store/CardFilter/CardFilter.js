const Card = [

]

export default function CardFilter(state = Card , action) {
    if(action.type == "YuborCard"){
        state = action.payload
        return state
    }
if (action.type == "YuborCard2") {
  state = action.payload;
  return state;
}


    return state
}
