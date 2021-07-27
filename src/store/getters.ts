export default {
  freshList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 'todo')
  },
  wipList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 'wip')
  },
  doneList: function(state: any){
    return state.board.contents.filter( (x: any) => x.status === 'done')
  },
  selectList: (state: any) => (id: number) => {
    return state.board.contents.filter( (x: any) => x.id === id)[0]
  },
}