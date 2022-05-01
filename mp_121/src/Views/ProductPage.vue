<template>
  <!--Sample front end home page-->
  <!--This now has mobile viewing support-->

  <div>
      <tool-bar/>
  <div>
    <br>
    <div class='row'>
      <div class='column' v-for="product in productList" :key="product.name">
        <product-card :item="product"/>
      </div>  
    </div>
    
  </div>
  </div>
    


</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ToolBar from '../components/ToolBar.vue'
export default {
  name: 'HomePage',
  components: {
    ProductCard,
    ToolBar,
  },
  data(){
    return{
      productList:[
        {name: 'Loid Forger', price: 25000, desc: 'Spy', imgLink:'https://64.media.tumblr.com/63d94ca70fc9b5af72954b4cb56c9d1a/2eb10c294b3dc87e-a0/s540x810/c7ce155794e6fb5ee951ef2a890abc2d069f4455.pnj'},
        {name: 'Yor Forger', price: 25000, desc: 'Assassin', imgLink:'https://64.media.tumblr.com/5e995956a11ba23d4b6757988343f7fb/4591b915fd9bd6d8-93/s500x750/d3af99fa647bc0315f793aa65e70d88065028403.pnj'},
        {name: 'Anya Forger', price: 25000, desc: 'Psychic', imgLink:'https://64.media.tumblr.com/65b6fb6f77930d89e6c3f50eac4d608c/d3184c51a0564874-0f/s400x600/4693f50e34dbb4ea082ae41b1ddd9af63895067b.jpg'},
        {name: 'Yuu Nishinoya', price: 30000, desc: 'Libero', imgLink: 'https://i.pinimg.com/originals/28/e4/26/28e42672b6b19e87098dead0647c3380.jpg'},
        {name: 'Yae Miko', price: 99999, desc:'Yae Miko (Japanese: 八 や 重 え 神 み 子 こ Yae Miko), also known as Guuji Yae (Japanese: 宮 ぐう 司 じ Guuji, "chief priest") or the Guuji, is a playable Electro character in Genshin Impact.', imgLink:'https://styles.redditmedia.com/t5_4o6dm5/styles/communityIcon_jvryeuk453g81.png'},
        {name: 'Koichi Hirose', price: 15000, desc:'Stand User', imgLink:'https://i.pinimg.com/originals/26/9c/ba/269cba2b344bc9260e4028c93862dc6f.jpg'},
        {name: 'Shikimori Micchon', price: 30000, desc:'Student', imgLink:'https://i.pinimg.com/originals/d1/1f/08/d11f0895d77f067fa874c8743bd77eb1.jpg'}
      ],
      counter: 0,
      cartList:[],
    }
  },
  methods:{
    addToCart(){
      this.counter++;
      this.$emit('addToCart', this.item.name, this.item.price, this.item.imgLink);
      //creates a hidden div cart.
    }
  }
}
</script>

<style>
  html{
    background-image: url('https://st4.depositphotos.com/26922174/31641/v/950/depositphotos_316419150-stock-illustration-social-media-doodle-seamless-pattern.jpg?forcejpeg=true');
    background-repeat: repeat;
  }
  .column{
    float: left;
    width: 15%;
    margin: 0 10px;
  }

  .row{
    margin-top: 0;
    margin: 0 -5px;
  }

  .row:after{
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 700px){
    .column{
      margin-left: 5px;
      width: 42%;
      display: block;
      margin-bottom: 10px;
    }

    .row{
      margin: 0 -10px;
    }
  }
</style>
