<template>
  <div class='cartCard'>
      <div><h4 id="cart-header"> Your Cart </h4></div>
      <ul class="cart-ul">
          <li v-for="item in cartList" :key='item' style="font-family: 'Corbel';">{{item.name}}&emsp;    x {{item.qty}}     {{item.price}}</li>
      </ul>
      <button class='cartCardbtn checkout' @click="emptyCart">Empty Cart</button>
      <button class='cartCardbtn checkout' @click= "transferData()" >Checkout </button>
      
  </div>
</template>


<script>


export default {
  name: 'CartList',
  props: ['cartList'],
  data () {
    return {
        copyList: [
            {name: 'Loid Forger', price: 25000, desc: 'Spy', imgLink:'https://64.media.tumblr.com/63d94ca70fc9b5af72954b4cb56c9d1a/2eb10c294b3dc87e-a0/s540x810/c7ce155794e6fb5ee951ef2a890abc2d069f4455.pnj', qty: 0},
            {name: 'Yor Forger', price: 25000, desc: 'Assassin', imgLink:'https://64.media.tumblr.com/5e995956a11ba23d4b6757988343f7fb/4591b915fd9bd6d8-93/s500x750/d3af99fa647bc0315f793aa65e70d88065028403.pnj', qty: 0},
            {name: 'Anya Forger', price: 25000, desc: 'Psychic', imgLink:'https://64.media.tumblr.com/65b6fb6f77930d89e6c3f50eac4d608c/d3184c51a0564874-0f/s400x600/4693f50e34dbb4ea082ae41b1ddd9af63895067b.jpg', qty: 0},
            {name: 'Yuu Nishinoya', price: 30000, desc: 'Libero', imgLink: 'https://i.pinimg.com/originals/28/e4/26/28e42672b6b19e87098dead0647c3380.jpg', qty: 0},
            {name: 'Yae Miko', price: 99999, desc:'Yae Miko (Japanese: 八 や 重 え 神 み 子 こ Yae Miko), also known as Guuji Yae (Japanese: 宮 ぐう 司 じ Guuji, "chief priest") or the Guuji, is a playable Electro character in Genshin Impact.', imgLink:'https://styles.redditmedia.com/t5_4o6dm5/styles/communityIcon_jvryeuk453g81.png',qty: 0},
            {name: 'Koichi Hirose', price: 15000, desc:'Stand User', imgLink:'https://i.pinimg.com/originals/26/9c/ba/269cba2b344bc9260e4028c93862dc6f.jpg', qty: 0},
            {name: 'Shikimori Micchon', price: 30000, desc:'Student', imgLink:'https://i.pinimg.com/originals/d1/1f/08/d11f0895d77f067fa874c8743bd77eb1.jpg', qty: 0}
        ],
        copyList2: [2, 3]
    }
  },
  methods:{
      emptyCart(){
          this.$emit('emptyCart')
      },
      transferData(){
          this.$router.push( { name: 'CheckoutCart', params:{ data: JSON.stringify(this.cartList) } } )
      }
  },
}
</script>

<style>

    .cartCard{
        position: absolute;
        right: 35px;
        background-color: white;
        margin-top: 10px;
        margin-left: 10px;
        width: 200px;
        height: auto;
        border: 2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .cart-ul{
        margin-left: 0;
    }

    #product-cartCard:hover{
        box-shadow: 0 12px 24px 0 rgba(0,0,0,0.5);
    }

    /*to hide long strings as ellipsis*/
    .truncate{
        text-align: left;
        width: 200px;
        height: 20px;
        font-family: 'Corbel';
        left: 0px;
    }

    .cartCardbtn{
         width: 200px;
         border: 1px solid black;
         cursor: pointer;
         transition: all 0.3s ease;
         position: relative;
         display: inline-block;
    }

    .checkout{
        background: #000;
        color: #fff;
        line-height: 42px;
        padding: 0;
        border: none;
    }

    .checkout:hover {
        background: white;
        color: #000;
        box-shadow:
        -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    }
    .checkout:before,
    .checkout:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #000;
        transition:400ms ease all;
    }
    .checkout:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    .checkout:hover:before,
    .checkout:hover:after{
        width:100%;
        transition:800ms ease all;
    }

    #cart-header{
        text-align: center;
        margin: 3px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    #product-price{
        font-family: 'Corbel';
    }

    @media screen and (max-width: 600px){
    .cartCard{
        width: 85%;
        display: block;
        margin-left: 10%;
    }
    .cartCardbtn{
        width: 100%;
        height: auto;
    }
  }
</style>