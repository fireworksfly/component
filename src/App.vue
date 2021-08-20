<template>
  <div>
  <MainTabBar>
    <TabBarItem path="/home" active-color="deeppink">
      <template v-slot:itemIcon>
      <img src = "./assets/tabbar/home.svg" alt="">
      </template>
      <template v-slot:itemIconActive>
        <img src = "./assets/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:itemText>
      <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category" active-color="deeppink">
      <template v-slot:itemIcon>
        <img  src = "./assets/tabbar/category.svg" alt="">
      </template>
      <template v-slot:itemIconActive>
        <img  src = "./assets/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div >分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopcart" active-color="deeppink">
      <template v-slot:itemIcon>
        <img  src = "./assets/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:itemIconActive>
        <img  src = "./assets/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="profile" active-color="deeppink">
      <template v-slot:itemIcon>
        <img src = "./assets/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:itemIconActive>
        <img src = "./assets/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:itemText>
        <div>我的</div>
      </template>
    </TabBarItem>
  </MainTabBar>
    <router-view></router-view>
  </div>
</template>
<script>
import MainTabBar from "./components/MainTabBar";
import TabBarItem from "./components/TabBarItem";
export default {
  components: {MainTabBar, TabBarItem}
}

</script>
<style>
@import "assets/css/css.css";


</style>
