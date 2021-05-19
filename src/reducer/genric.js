//import { selectedGenre } from "../components/actions/actions";

const genres = {
  Allgenres: [
    { id: "1", name: "Soups" },
    { id: "2", name: "Drink" },
    { id: "3", name: "Main Course" }
  ],
  selectedGenre : {id: '', name:'All'}
};

  export default function getGenres(state = genres, { type, payload }) {
            switch(type){
            case 'SET_GENRE':
                         return{
                 ...state,
                 selectedGenre : {...genres.selectedGenre, id:payload.id, name:payload.name}
               };
            default:
                return state;
            }

   } ;
  