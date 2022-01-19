import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state:{
      articles:[
        {title: 'おすすめの化粧水10選',
        content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',
        created: '2022-1-18 16:00'
      },
        {title: '今海外で流行中の美容法',
        content: 'hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge',
        created: '2022-1-20 16:00'
      }
      ]
    },
    mutations:{
    },
     actions:{
    },
    getters:{}
  })
}