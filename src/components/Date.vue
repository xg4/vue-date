<template>
  <div class="date">
    <div class="toolbar">
      <button @click="month-=1">-</button>
      <select v-model="year">
        <option :value="year-10+item"
                v-for="item in 10"
                :key="item">{{year-10+item}}</option>
        <option :value="year+item"
                v-for="item in 10"
                :key="item+10">{{year+item}}</option>
      </select>
      年
      <select v-model="month">
        <option :value="item-1"
                v-for="item in 12"
                :key="item">{{item}}</option>
      </select>月
      <button @click="month+=1">+</button>
      <button @click="init()"
              style="float:right">重置</button>
    </div>
    <div class="title">
      <span class="title-item"
            v-for="(item,index) in title"
            :key="index">{{item}}</span>
    </div>
    <div v-for="(item,index) in date"
         :key="index"
         class="day">
      <transition mode="out-in"
                  name="xg-fade"
                  v-for="(it,i) in item"
                  :key="i">
        <span class="day-item"
              :key="it+i"
              :class="i===0||i===6?'red':''">
          {{it}}
        </span>
      </transition>
    </div>
  </div>

</template>

<script>
export { default } from './main'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  user-select: none;
  box-sizing: border-box;
}
.date {
  display: inline-block;
  background: #eee;
}
.toolbar {
  text-align: center;
}

.title {
  display: flex;
}
.title-item {
  height: 35px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.day {
  display: flex;
}
.day-item {
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-width 0.3s;
}
.day-item:hover {
  border: 3px solid #fb0;
}
.day-item.red {
  color: #f44;
}

.xg-fade-enter-active {
  animation: 0.3s fade-in;
}
.xg-fade-leave-active {
  animation: 0.3s fade-out;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
