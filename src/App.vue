
<template>
  <div class="layout">
    <div><el-button type="primary">主要按钮</el-button></div>
    <!--登录后的页面-->
    <el-container v-if="state.showMenuFlag" class="container">
      <!--左边栏-->
      <el-aside class="aside">
        <div class="head"></div>
        <el-menu
            background-color="#222852"
            text-color="#fff"
            :router="true"
            :default-active="state.currentPath"
        >
          <!--一级栏目-->
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <!--二级栏目-->
            <el-menu-item-group>
              <el-menu-item index="/"><el-icon><DataLine /></el-icon>首页</el-menu-item>
              <el-menu-item index="/add"><el-icon><DataLine /></el-icon>添加商品</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <!--第2个一级栏目-->
          <el-sub-menu index="2">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon><DataLine /></el-icon>轮播图管理</el-menu-item>
              <el-menu-item index="/add"><el-icon><DataLine /></el-icon>添加商品</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <!--右边内容布局-->
      <el-container class="content">
        <Header />
        <div class="main">
          <!--将 <router-view></router-view> 移到这里，并且用单标签-->
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <!--登录页面-->
    <el-container v-else>
      <router-view></router-view>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import {reactive} from 'vue';
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";
import {useRouter} from "vue-router";


const noMenuArr = ["/login"];
const router = useRouter();
const state = reactive({
  showMenuFlag: false,
  currentPath: '/'
})

router.beforeEach((to) => {
  state.showMenuFlag = !noMenuArr.includes(to.path);
  state.currentPath = to.path;
})


</script>


<style scoped>

</style>
