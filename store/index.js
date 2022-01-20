import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles:[
        {title: 'おすすめの化粧水10選',
        content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',
      },
        {title: '今海外で流行中の美容法',
        content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',}
      ]
    }),
    mutations:{
      insert: function(state,obj){
        console.log(state.articles);
        state.articles.unshift({
          title: obj.title,
          content: obj.content,
        })
      }
    },
     actions:{
    },
    getters:{}
  })
}

export default  createStore;