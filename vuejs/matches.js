new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js! We\'re back!',
    matches:
    [
    	[
    		{name: 'Arjan', kills: 30, deaths: 10},
        {name: 'Nick', kills: 28, deaths: 8},
        {name: 'Koen', kills: 20, deaths: 12},
        {name: 'Jordy', kills: 18, deaths: 13}
      ],
      [
    		{name: 'Nick', kills: 32, deaths: 9},
        {name: 'Arjan', kills: 24, deaths: 8},
        {name: 'Koen', kills: 21, deaths: 11},
        {name: 'Jordy', kills: 17, deaths: 14}
      ]
    ]
  }
})
