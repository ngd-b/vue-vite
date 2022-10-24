<template>
  <div class="chart-title">
    <el-form :model="options" label-suffix=":" inline>
      <el-form-item label="是否展示(show)" prop="show">
        <el-switch
          v-model="options.show"
          :active-value="true"
          :inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="标题(text)" prop="text">
        <el-input v-model="options.text" />
      </el-form-item>
      <el-form-item label="标题链接(link)" prop="link">
        <el-input v-model="options.link" />
      </el-form-item>
      <el-form-item label="标题链接打开方式(target)" prop="target">
        <el-select v-model="options.target">
          <el-option value="self" label="self" />
          <el-option value="blank" label="blank" />
        </el-select>
      </el-form-item>
      <el-form-item label="标题文本样式(textStyle)">
        <el-form-item label="颜色(color)" prop="color">
          <el-input v-model="options.textStyle.color" />
        </el-form-item>
        <el-form-item label="字体样式(fontStyle)" prop="fontStyle">
          <el-select v-model="options.textStyle.fontStyle">
            <el-option value="normal" label="normal" />
            <el-option value="italic" label="italic" />
            <el-option value="oblique" label="oblique" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体粗细(fontWeight)" prop="fontWeight">
          <el-select v-model="options.textStyle.fontWeight">
            <el-option value="normal" label="normal" />
            <el-option value="bold" label="bold" />
            <el-option value="bolder" label="bolder" />
            <el-option value="lighter" label="lighter" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体(fontFamily)" prop="fontFamily">
          <el-select v-model="options.textStyle.fontFamily">
            <el-option value="serif" label="serif" />
            <el-option value="monospace" label="monospace" />
            <el-option value="Arial" label="Arial" />
            <el-option value="Courier New" label="Courier New" />
            <el-option value="Microsoft YaHei" label="Microsoft YaHei" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体大小(fontSize)" prop="fontSize">
          <el-input v-model="options.textStyle.fontSize" />
        </el-form-item>
        <el-form-item label="行高(lineHeight)" prop="lineHeight">
          <el-input v-model="options.textStyle.lineHeight" />
        </el-form-item>
        <el-form-item label="宽度(width)" prop="width">
          <el-input v-model="options.textStyle.width" />
        </el-form-item>
        <el-form-item label="高度(height)" prop="height">
          <el-input v-model="options.textStyle.height" />
        </el-form-item>
        <el-form-item
          label="文本描边颜色(textBorderColor)"
          prop="textBorderColor"
        >
          <el-input v-model="options.textStyle.textBorderColor" />
        </el-form-item>
        <el-form-item
          label="文本描边宽度(textBorderWidth)"
          prop="textBorderWidth"
        >
          <el-input v-model="options.textStyle.textBorderWidth" />
        </el-form-item>
        <el-form-item
          label="文本描边类型(textBorderType)"
          prop="textBorderType"
        >
          <el-select v-model="options.textStyle.textBorderType">
            <el-option value="solid" label="solid" />
            <el-option value="dashed" label="dashed" />
            <el-option value="dotted" label="dotted" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="文本描边虚线偏移量(textBorderDashOffset)"
          prop="textBorderDashOffset"
        >
          <el-input v-model="options.textStyle.textBorderDashOffset" />
        </el-form-item>
        <el-form-item
          label="文本阴影颜色(textShadowColor)"
          prop="textShadowColor"
        >
          <el-input v-model="options.textStyle.textShadowColor" />
        </el-form-item>
        <el-form-item
          label="文本阴影长度(textShadowBlur)"
          prop="textShadowBlur"
        >
          <el-input v-model="options.textStyle.textShadowBlur" />
        </el-form-item>
        <el-form-item
          label="文本阴影X偏移量(textShadowOffsetX)"
          prop="textShadowOffsetX"
        >
          <el-input v-model="options.textStyle.textShadowOffsetX" />
        </el-form-item>
        <el-form-item
          label="文本阴影Y偏移量(textShadowOffsetY)"
          prop="textShadowOffsetY"
        >
          <el-input v-model="options.textStyle.textShadowOffsetY" />
        </el-form-item>
        <el-form-item label="文本超出处理方式(overflow)" prop="overflow">
          <el-select v-model="options.textStyle.overflow">
            <el-option value="truncate" label="truncate" />
            <el-option value="break" label="break" />
            <el-option value="breakAll" label="breakAll" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本超出显示的文本(ellipsis)" prop="ellipsis">
          <el-input v-model="options.textStyle.ellipsis" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="子标题(subtext)" prop="subtext">
        <el-input v-model="options.subtext" />
      </el-form-item>
      <el-form-item label="标题链接(sublink)" prop="sublink">
        <el-input v-model="options.sublink" />
      </el-form-item>
      <el-form-item label="标题链接打开方式(subtarget)" prop="subtarget">
        <el-select v-model="options.subtarget">
          <el-option value="self" label="self" />
          <el-option value="blank" label="blank" />
        </el-select>
      </el-form-item>
      <el-form-item label="子标题文本样式(subtextStyle)">
        <el-form-item label="颜色(color)" prop="color">
          <el-input v-model="options.subtextStyle.color" />
        </el-form-item>
        <el-form-item label="字体样式(fontStyle)" prop="fontStyle">
          <el-select v-model="options.subtextStyle.fontStyle">
            <el-option value="normal" label="normal" />
            <el-option value="italic" label="italic" />
            <el-option value="oblique" label="oblique" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体粗细(fontWeight)" prop="fontWeight">
          <el-select v-model="options.subtextStyle.fontWeight">
            <el-option value="normal" label="normal" />
            <el-option value="bold" label="bold" />
            <el-option value="bolder" label="bolder" />
            <el-option value="lighter" label="lighter" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体(fontFamily)" prop="fontFamily">
          <el-select v-model="options.subtextStyle.fontFamily">
            <el-option value="serif" label="serif" />
            <el-option value="monospace" label="monospace" />
            <el-option value="Arial" label="Arial" />
            <el-option value="Courier New" label="Courier New" />
            <el-option value="Microsoft YaHei" label="Microsoft YaHei" />
          </el-select>
        </el-form-item>
        <el-form-item label="字体大小(fontSize)" prop="fontSize">
          <el-input v-model="options.subtextStyle.fontSize" />
        </el-form-item>
        <el-form-item label="行高(lineHeight)" prop="lineHeight">
          <el-input v-model="options.subtextStyle.lineHeight" />
        </el-form-item>
        <el-form-item label="水平对齐(align)" prop="align">
          <el-select v-model="options.subtextStyle.align">
            <el-option value="left" label="left" />
            <el-option value="right" label="right" />
            <el-option value="center" label="center" />
          </el-select>
        </el-form-item>
        <el-form-item label="垂直对齐(verticalAlign)" prop="verticalAlign">
          <el-select v-model="options.subtextStyle.verticalAlign">
            <el-option value="top" label="top" />
            <el-option value="bottom" label="bottom" />
            <el-option value="middle" label="middle" />
          </el-select>
        </el-form-item>
        <el-form-item label="宽度(width)" prop="width">
          <el-input v-model="options.subtextStyle.width" />
        </el-form-item>
        <el-form-item label="高度(height)" prop="height">
          <el-input v-model="options.subtextStyle.height" />
        </el-form-item>
        <el-form-item
          label="文本描边颜色(textBorderColor)"
          prop="textBorderColor"
        >
          <el-input v-model="options.subtextStyle.textBorderColor" />
        </el-form-item>
        <el-form-item
          label="文本描边宽度(textBorderWidth)"
          prop="textBorderWidth"
        >
          <el-input v-model="options.subtextStyle.textBorderWidth" />
        </el-form-item>
        <el-form-item
          label="文本描边类型(textBorderType)"
          prop="textBorderType"
        >
          <el-select v-model="options.subtextStyle.textBorderType">
            <el-option value="solid" label="solid" />
            <el-option value="dashed" label="dashed" />
            <el-option value="dotted" label="dotted" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="文本描边虚线偏移量(textBorderDashOffset)"
          prop="textBorderDashOffset"
        >
          <el-input v-model="options.subtextStyle.textBorderDashOffset" />
        </el-form-item>
        <el-form-item
          label="文本阴影颜色(textShadowColor)"
          prop="textShadowColor"
        >
          <el-input v-model="options.subtextStyle.textShadowColor" />
        </el-form-item>
        <el-form-item
          label="文本阴影长度(textShadowBlur)"
          prop="textShadowBlur"
        >
          <el-input v-model="options.subtextStyle.textShadowBlur" />
        </el-form-item>
        <el-form-item
          label="文本阴影X偏移量(textShadowOffsetX)"
          prop="textShadowOffsetX"
        >
          <el-input v-model="options.subtextStyle.textShadowOffsetX" />
        </el-form-item>
        <el-form-item
          label="文本阴影Y偏移量(textShadowOffsetY)"
          prop="textShadowOffsetY"
        >
          <el-input v-model="options.subtextStyle.textShadowOffsetY" />
        </el-form-item>
        <el-form-item label="文本超出处理方式(overflow)" prop="overflow">
          <el-select v-model="options.subtextStyle.overflow">
            <el-option value="truncate" label="truncate" />
            <el-option value="break" label="break" />
            <el-option value="breakAll" label="breakAll" />
          </el-select>
        </el-form-item>
        <el-form-item label="文本超出显示的文本(ellipsis)" prop="ellipsis">
          <el-input v-model="options.subtextStyle.ellipsis" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="整体水平对齐(textAlign)" prop="textAlign">
        <el-select v-model="options.textAlign">
          <el-option value="auto" label="auto" />
          <el-option value="left" label="left" />
          <el-option value="right" label="right" />
          <el-option value="center" label="center" />
        </el-select>
      </el-form-item>
      <el-form-item
        label="整体垂直对齐(textVerticalAlign)"
        prop="textVerticalAlign"
      >
        <el-select v-model="options.textVerticalAlign">
          <el-option value="auto" label="auto" />
          <el-option value="top" label="top" />
          <el-option value="bottom" label="bottom" />
          <el-option value="middle" label="middle" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否触发事件(triggerEvent)" prop="triggerEvent">
        <el-switch
          v-model="options.triggerEvent"
          :active-value="true"
          :inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="标题内边距(padding)" prop="padding">
        <el-input v-model="options.padding" />
      </el-form-item>
      <el-form-item label="主副标题间距(itemGap)" prop="itemGap">
        <el-input v-model="options.itemGap" />
      </el-form-item>
      <el-form-item label="图形层级(zlevel)" prop="zlevel">
        <el-input v-model="options.zlevel" />
      </el-form-item>
      <el-form-item prop="z">
        <template #label>
          <span>图形层级(z)</span>
          <sub>比zlevel优先级低，不会创建新图层</sub>
        </template>
        <el-input v-model="options.z" />
      </el-form-item>
      <el-form-item label="距容器左侧距离(left)" prop="left">
        <el-select v-model="options.left">
          <el-option value="auto" label="auto" />
          <el-option value="left" label="left" />
          <el-option value="right" label="right" />
          <el-option value="center" label="center" />
        </el-select>
      </el-form-item>
      <el-form-item label="距容器顶部距离(top)" prop="top">
        <el-select v-model="options.top">
          <el-option value="auto" label="auto" />
          <el-option value="top" label="top" />
          <el-option value="bottom" label="bottom" />
          <el-option value="middle" label="middle" />
        </el-select>
      </el-form-item>
      <el-form-item label="距容器右侧距离(right)" prop="right">
        <el-input v-model="options.right" />
      </el-form-item>
      <el-form-item label="距容器底部距离(bottom)" prop="bottom">
        <el-input v-model="options.bottom" />
      </el-form-item>
      <el-form-item label="标题背景色(backgroundColor)" prop="backgroundColor">
        <el-input v-model="options.backgroundColor" />
      </el-form-item>
      <el-form-item label="标题边框颜色(borderColor)" prop="borderColor">
        <el-input v-model="options.borderColor" />
      </el-form-item>
      <el-form-item label="标题边框宽度(borderWidth)" prop="borderColor">
        <el-input v-model="options.borderWidth" />
      </el-form-item>
      <el-form-item label="标题边框圆角(borderRadius)" prop="borderRadius">
        <el-input v-model="options.borderRadius" />
      </el-form-item>
      <el-form-item label="图形阴影模糊(shadowBlur)" prop="shadowBlur">
        <el-input v-model="options.shadowBlur" />
      </el-form-item>
      <el-form-item label="图形阴影颜色(shadowColor)" prop="shadowColor">
        <el-input v-model="options.shadowColor" />
      </el-form-item>
      <el-form-item
        label="标题边框阴影X偏移(shadowOffsetX)"
        prop="shadowOffsetX"
      >
        <el-input v-model="options.shadowOffsetX" />
      </el-form-item>
      <el-form-item
        label="标题边框阴影Y偏移(shadowOffsetY)"
        prop="shadowOffsetY"
      >
        <el-input v-model="options.shadowOffsetY" />
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
