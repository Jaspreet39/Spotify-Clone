export const initialState = { 
    user: null,
    playList: [],
    playing: false,
    item: null,
    //remove after finishing
    // token:'BQB48OKbdC5-16gVmJiFuWZPkt-G5OdBdmUP9m39U8Hje0wyT1moHgzbNYZjUxQ1T-pQ0wGDMDq0pUA2GEU_BWp9ycbXcAyoeVqgZivW1kmbwXzfrtWkFz20f8JI01md35iRKrEHyQCYk18W9SK62rt9KzAn7xrJSWUGcZ17UbmwN35x',
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
      case 'SET_USER':
          return{
              ...state,
              user:action.user
          }
          case 'SET_TOKEN':
              return{
                  ...state,
                  token:action.token,
              }
              case 'SET_PLAYLISTS':
                  return{
                      ...state,
                      playLists:action.playlists,
                  }
                  case 'SET_DISCOVER_WEEKLY':
                      return{
                          ...state,
                          discover_weekly:action.discover_weekly,
                      }
          default:
              return state
  }
}

export default reducer