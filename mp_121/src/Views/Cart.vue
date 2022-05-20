<template>

<div class = 'Cart'>
    <tool-bar/>
    <h1 class = 'title'> Checkout Cart </h1>
    
    <div class = 'lists' v-for="item in items" :key="item">
      <div> <p>Name: {{item.name}} <br> Quantity: x{{item.qty}} <br> Price: {{item.price}} </p> </div>

    </div> 

    <div class = 'buttons'>
      <button class = 'Press'>Buy</button>
      <br>
      <button class = 'Press' @click= "cancel()" >Cancel</button>
    </div>

    <div>
     
    </div>
    
</div>
    
    
</template>

<script>

import ToolBar from '../components/ToolBar.vue'

export default ({
    components: { ToolBar },
    name: 'CheckoutCart',
    data(){
    return{
      productList:[
        {name: 'Loid Forger', price: 25000, desc: 'Spy', imgLink:'https://64.media.tumblr.com/63d94ca70fc9b5af72954b4cb56c9d1a/2eb10c294b3dc87e-a0/s540x810/c7ce155794e6fb5ee951ef2a890abc2d069f4455.pnj', qty: 0},
        {name: 'Yor Forger', price: 25000, desc: 'Assassin', imgLink:'https://64.media.tumblr.com/5e995956a11ba23d4b6757988343f7fb/4591b915fd9bd6d8-93/s500x750/d3af99fa647bc0315f793aa65e70d88065028403.pnj', qty: 0},
        {name: 'Anya Forger', price: 25000, desc: 'Psychic', imgLink:'https://64.media.tumblr.com/65b6fb6f77930d89e6c3f50eac4d608c/d3184c51a0564874-0f/s400x600/4693f50e34dbb4ea082ae41b1ddd9af63895067b.jpg', qty: 0},
        {name: 'Yuu Nishinoya', price: 30000, desc: 'Libero', imgLink: 'https://i.pinimg.com/originals/28/e4/26/28e42672b6b19e87098dead0647c3380.jpg', qty: 0},
        {name: 'Yae Miko', price: 99999, desc:'Yae Miko (Japanese: 八 や 重 え 神 み 子 こ Yae Miko), also known as Guuji Yae (Japanese: 宮 ぐう 司 じ Guuji, "chief priest") or the Guuji, is a playable Electro character in Genshin Impact.', imgLink:'https://styles.redditmedia.com/t5_4o6dm5/styles/communityIcon_jvryeuk453g81.png',qty: 0},
        {name: 'Koichi Hirose', price: 15000, desc:'Stand User', imgLink:'https://i.pinimg.com/originals/26/9c/ba/269cba2b344bc9260e4028c93862dc6f.jpg', qty: 0},
        {name: 'Shikimori Micchon', price: 30000, desc:'Student', imgLink:'https://i.pinimg.com/originals/d1/1f/08/d11f0895d77f067fa874c8743bd77eb1.jpg', qty: 0}
      ],
      items: [],
    }
    },
    created() {  
      this.items = JSON.parse(this.$route.params.data); 
    },
    methods:{
      cancel(){
        this.items = [];
        this.$router.push( { name: 'home' } );
      }
    }
      
})

</script>

<style>

  .buttons{
    margin: auto;
  }

  .cart-holder{
    top: 55px;
    position: sticky;
    z-index: 999
  }

  .lists{
    background-color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    border: 5px solid rgb(27, 96, 80);
  }

  @media screen and (max-width: 700px){
    .column{
      margin-left: 5px;
      width: 42%;
      display: block;
      margin-bottom: 10px;
    }

  }
  
  .Press{
    position: relative;
    font-family: "Lucida Console", Verdana, monospace;
    font-size: 30px;
    width:200px;
    height: 100px;
    margin-top: 1%;
    background-color: bisque;
  }
  .Press:hover{
    background-color: black;
    color: white;
  }

  .title{
    font-family: Verdana, Tahoma, sans-serif;
    text-align: center;
    background-color: white;
    border: 15px double black 
  }
</style>
