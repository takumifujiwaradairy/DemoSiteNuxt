import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
        {
          title: 'おすすめの化粧水10選',
          content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',
        },
        {
          title: '今海外で流行中の美容法',
          content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',
        }
      ],
      selected: []
    }),
    mutations: {
      insert: function(state,obj){
        state.articles.unshift({
          title: obj.title,
          content: obj.content,
        })
      },
      search: function(state, searchWord){
        const fil = state.articles.filter(function(value){
          return value.title === searchWord;
        });
        state.selected =  fil;
      }
    },
    actions: {
    },
    getters: {
    }
  })
}

export default  createStore;