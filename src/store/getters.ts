export default {
  freshList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 0)
  },
  wipList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 1)
  },
  doneList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 2)
  },
}