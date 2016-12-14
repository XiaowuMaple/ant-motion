export default {
  backgroundSize: {
    value: 'cover',
    name: '背景大小',
    select: ['contain', 'cover', 'inherit'],
    remark: 'css 里的参数，"contain", "cover"等参数',
  },
  backgroundPosition: {
    value: 'center',
    name: '背景对齐',
    select: ['center', 'top', 'left', 'bottom', 'right',
      'left top', 'left bottom', 'right top', 'right bottom'],
    remark: '参数有: left right center bottom top; 如需配置两个，请以空格格开',
  },
  backgroundBlendMode: {
    value: 'normal',
    name: '背景滤境',
    select: [
      { name: '正常', value: 'normal' },
      { name: '正片叠底', value: 'multiply' },
      { name: '滤色', value: 'screen' },
      { name: '叠加', value: 'overlay' },
      { name: '变暗', value: 'darken' },
      { name: '变亮', value: 'lighten' },
      { name: '颜色减淡', value: 'color-dodge' },
      { name: '颜色加深', value: 'color-burn' },
      { name: '强光', value: 'hard-light' },
      { name: '柔光', value: 'soft-light' },
      { name: '差值', value: 'difference' },
      { name: '排除', value: 'exclusion' },
      { name: '色相', value: 'hue' },
      { name: '饱和度', value: 'saturation' },
      { name: '颜色', value: 'color' },
      { name: '亮度', value: 'luminosity' },
    ],
    remark: '与psd里的滤镜一样, 在图片和颜色做滤境效果;',
  },
  backgroundAttachment: {
    value: 'scroll',
    name: '背景固定',
    select: ['scroll', 'fixed'],
    remark: '参数为： "relative", "absolute", "fixed"; "fixed" 为背景随滚动条滚动',
  },
};