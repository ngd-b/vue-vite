<template>
  <div class="chart-title">
    <el-form :model="options" label-suffix=":" inline>
      <el-form-item label="是否展示" prop="show">
        <el-switch
          v-model="options.show"
          :active-value="true"
          :inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="标题" prop="text">
        <el-input v-model="options.text" />
      </el-form-item>
      <el-form-item label="标题链接" prop="link">
        <el-input v-model="options.link" />
      </el-form-item>
      <el-form-item label="标题链接打开方式" prop="target">
        <el-select v-model="options.target">
          <el-option value="self" label="self" />
          <el-option value="blank" label="blank" />
        </el-select>
      </el-form-item>
      <el-form-item label="标题文本样式">
        <el-form-item label="颜色" prop="color">
          <el-input v-model="options.textStyle.color" />
        </el-form-item>
        <el-form-item label="字体样式" prop="fontStyle">
          <el-select v-model="options.textStyle.fontStyle">
            <el-option value="normal" label="normal" />
            <el-option value="italic" label="italic" />
            <el-option value="oblique" label="oblique" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体粗细" prop="fontWeight">
          <el-select v-model="options.textStyle.fontWeight">
            <el-option value="normal" label="normal" />
            <el-option value="bold" label="bold" />
            <el-option value="bolder" label="bolder" />
            <el-option value="lighter" label="lighter" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体" prop="fontFamily">
          <el-select v-model="options.textStyle.fontFamily">
            <el-option value="serif" label="serif" />
            <el-option value="monospace" label="monospace" />
            <el-option value="Arial" label="Arial" />
            <el-option value="Courier New" label="Courier New" />
            <el-option value="Microsoft YaHei" label="Microsoft YaHei" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体大小" prop="fontSize">
          <el-input v-model="options.textStyle.fontSize" />
        </el-form-item>
        <el-form-item label="行高" prop="lineHeight">
          <el-input v-model="options.textStyle.lineHeight" />
        </el-form-item>
        <el-form-item label="宽度" prop="width">
          <el-input v-model="options.textStyle.width" />
        </el-form-item>
        <el-form-item label="高度" prop="height">
          <el-input v-model="options.textStyle.height" />
        </el-form-item>
        <el-form-item label="文本描边颜色" prop="textBorderColor">
          <el-input v-model="options.textStyle.textBorderColor" />
        </el-form-item>
        <el-form-item label="文本描边宽度" prop="textBorderWidth">
          <el-input v-model="options.textStyle.textBorderWidth" />
        </el-form-item>
        <el-form-item label="文本描边类型" prop="textBorderType">
          <el-select v-model="options.textStyle.textBorderType">
            <el-option value="solid" label="solid" />
            <el-option value="dashed" label="dashed" />
            <el-option value="dotted" label="dotted" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本描边虚线偏移量" prop="textBorderDashOffset">
          <el-input v-model="options.textStyle.textBorderDashOffset" />
        </el-form-item>
        <el-form-item label="文本阴影颜色" prop="textShadowColor">
          <el-input v-model="options.textStyle.textShadowColor" />
        </el-form-item>
        <el-form-item label="文本阴影长度" prop="textShadowBlur">
          <el-input v-model="options.textStyle.textShadowBlur" />
        </el-form-item>
        <el-form-item label="文本阴影X偏移量" prop="textShadowOffsetX">
          <el-input v-model="options.textStyle.textShadowOffsetX" />
        </el-form-item>
        <el-form-item label="文本阴影Y偏移量" prop="textShadowOffsetY">
          <el-input v-model="options.textStyle.textShadowOffsetY" />
        </el-form-item>
        <el-form-item label="文本超出处理方式" prop="overflow">
          <el-select v-model="options.textStyle.overflow">
            <el-option value="truncate" label="truncate" />
            <el-option value="break" label="break" />
            <el-option value="breakAll" label="breakAll" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本超出显示的文本" prop="ellipsis">
          <el-input v-model="options.textStyle.ellipsis" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="子标题" prop="subtext">
        <el-input v-model="options.subtext" />
      </el-form-item>
      <el-form-item label="标题链接" prop="sublink">
        <el-input v-model="options.sublink" />
      </el-form-item>
      <el-form-item label="标题链接打开方式" prop="subtarget">
        <el-select v-model="options.subtarget">
          <el-option value="self" label="self" />
          <el-option value="blank" label="blank" />
        </el-select>
      </el-form-item>
      <el-form-item label="子标题文本样式">
        <el-form-item label="颜色" prop="color">
          <el-input v-model="options.subtextStyle.color" />
        </el-form-item>
        <el-form-item label="字体样式" prop="fontStyle">
          <el-select v-model="options.subtextStyle.fontStyle">
            <el-option value="normal" label="normal" />
            <el-option value="italic" label="italic" />
            <el-option value="oblique" label="oblique" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体粗细" prop="fontWeight">
          <el-select v-model="options.subtextStyle.fontWeight">
            <el-option value="normal" label="normal" />
            <el-option value="bold" label="bold" />
            <el-option value="bolder" label="bolder" />
            <el-option value="lighter" label="lighter" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体" prop="fontFamily">
          <el-select v-model="options.subtextStyle.fontFamily">
            <el-option value="serif" label="serif" />
            <el-option value="monospace" label="monospace" />
            <el-option value="Arial" label="Arial" />
            <el-option value="Courier New" label="Courier New" />
            <el-option value="Microsoft YaHei" label="Microsoft YaHei" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体大小" prop="fontSize">
          <el-input v-model="options.subtextStyle.fontSize" />
        </el-form-item>
        <el-form-item label="行高" prop="lineHeight">
          <el-input v-model="options.subtextStyle.lineHeight" />
        </el-form-item>
        <el-form-item label="水平对齐" prop="align">
          <el-select v-model="options.subtextStyle.align">
            <el-option value="left" label="left" />
            <el-option value="right" label="right" />
            <el-option value="center" label="center" />
          </el-select>
        </el-form-item>
        <el-form-item label="垂直对齐" prop="verticalAlign">
          <el-select v-model="options.subtextStyle.verticalAlign">
            <el-option value="top" label="top" />
            <el-option value="bottom" label="bottom" />
            <el-option value="middle" label="middle" />
          </el-select>
        </el-form-item>
        <el-form-item label="宽度" prop="width">
          <el-input v-model="options.subtextStyle.width" />
        </el-form-item>
        <el-form-item label="高度" prop="height">
          <el-input v-model="options.subtextStyle.height" />
        </el-form-item>
        <el-form-item label="文本描边颜色" prop="textBorderColor">
          <el-input v-model="options.subtextStyle.textBorderColor" />
        </el-form-item>
        <el-form-item label="文本描边宽度" prop="textBorderWidth">
          <el-input v-model="options.subtextStyle.textBorderWidth" />
        </el-form-item>
        <el-form-item label="文本描边类型" prop="textBorderType">
          <el-select v-model="options.subtextStyle.textBorderType">
            <el-option value="solid" label="solid" />
            <el-option value="dashed" label="dashed" />
            <el-option value="dotted" label="dotted" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本描边虚线偏移量" prop="textBorderDashOffset">
          <el-input v-model="options.subtextStyle.textBorderDashOffset" />
        </el-form-item>
        <el-form-item label="文本阴影颜色" prop="textShadowColor">
          <el-input v-model="options.subtextStyle.textShadowColor" />
        </el-form-item>
        <el-form-item label="文本阴影长度" prop="textShadowBlur">
          <el-input v-model="options.subtextStyle.textShadowBlur" />
        </el-form-item>
        <el-form-item label="文本阴影X偏移量" prop="textShadowOffsetX">
          <el-input v-model="options.subtextStyle.textShadowOffsetX" />
        </el-form-item>
        <el-form-item label="文本阴影Y偏移量" prop="textShadowOffsetY">
          <el-input v-model="options.subtextStyle.textShadowOffsetY" />
        </el-form-item>
        <el-form-item label="文本超出处理方式" prop="overflow">
          <el-select v-model="options.subtextStyle.overflow">
            <el-option value="truncate" label="truncate" />
            <el-option value="break" label="break" />
            <el-option value="breakAll" label="breakAll" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本超出显示的文本" prop="ellipsis">
          <el-input v-model="options.subtextStyle.ellipsis" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="整体水平对齐" prop="textAlign">
        <el-select v-model="options.textAlign">
          <el-option value="auto" label="auto" />
          <el-option value="left" label="left" />
          <el-option value="right" label="right" />
          <el-option value="center" label="center" />
        </el-select>
      </el-form-item>
      <el-form-item label="整体垂直对齐" prop="textVerticalAlign">
        <el-select v-model="options.textVerticalAlign">
          <el-option value="auto" label="auto" />
          <el-option value="top" label="top" />
          <el-option value="bottom" label="bottom" />
          <el-option value="middle" label="middle" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否触发事件" prop="triggerEvent">
        <el-switch
          v-model="options.triggerEvent"
          :active-value="true"
          :inactive-value="false"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import TitleOptions from './title'

  export default {
    emits: ['change'],
    data() {
      return {
        options: TitleOptions,
      }
    },
    watch: {
      options: {
        deep: true,
        immediate: true,
        handler() {
          this.$emit('change', this.options)
        },
      },
    },
  }
</script>
