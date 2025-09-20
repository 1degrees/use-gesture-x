<template>
  <div class="config-panle-container">
    <div class="config-panle-item">
      <span>手势插件部分配置设置</span>
    </div>
    <div class="config-panle-item">
      <span>是否启用</span>
      <input :checked="model.enabled" @change="fromChange('enabled', $event.target.checked)" type="checkbox" />
    </div>
    <div class="config-panle-item">
      <span>移动方向</span>
      <select :value="model.axis" @change="fromChange('axis', $event.target.value)">
        <option value="">不限制</option>
        <option value="x">横向</option>
        <option value="y">纵向</option>
        <option value="lock">方向锁定</option>
      </select>
    </div>
    <div class="config-panle-item">
      <span>gesture定义</span>
      <select :value="model.gesture" @change="fromChange('gesture', $event.target.value)">
        <option value="offset">offset</option>
        <option value="movement">movement</option>
      </select>
    </div>
    <div class="config-panle-item">
      <span>设置移动延迟</span>
      <input :value="model.delay" @change="fromChange('delay', $event.target.value)" type="number" />
    </div>
    <div class="config-panle-item">
      <span>启用橡皮筋效果</span>
      <input :checked="model.rubberband" @change="fromChange('rubberband', $event.target.checked)" type="checkbox" />
    </div>
    <div class="config-panle-item">
      <span>启用范围限制</span>
      <input :checked="model.bounds" @change="fromChange('bounds', $event.target.checked)" type="checkbox" />
    </div>
  </div>
</template>

<script setup>
import { defineModel } from 'vue'
const model = defineModel({
  default: {
    axis: '',
    delay: 0,
    enabled: true,
    gesture: 'movement',
    rubberband: false,
    bounds: false
  }
})
const fromChange = (key, val) => {
  model.value[key] = val
  console.log(key, val, model.value, '---配置改变---')
}
</script>
<style scoped>
.config-panle-container {
  position: absolute;
  width: 200px;
  top: 60px;
  right: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  background-color: #292d39;
}
.config-panle-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #8c92a4;
}
select,
input[type='number'] {
  width: 80px;
  color: #8c92a4;
}
.config-panle-item span {
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: #8c92a4;
}
</style>
