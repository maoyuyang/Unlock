import coreMixin from './unlock/core'
import initMixin from './unlock/init'
import drawMixin from './unlock/draw'
import { $, warn, merge, _, getStyle } from './utils/index'

const defaultOptions = {
  click: true,
  intervalTime: 1500, // 输入后到清空画布的间隔时间
  style: {
    bgColor: '#fff',
    dotColor: '#e6e6e6',
    dotRadius: 5,
    activeDotRadius: 5,
    lineWidth: 10,
    statusColor: {
      'default': {
        line: 'rgba(0, 0, 0, 0.3)',
        dot: 'rgba(0, 0, 0, 0.6)'
      },
      'error': {
        line: 'rgba(255, 0, 0, 0.3)',
        dot: 'rgba(255, 0, 0, 0.6)'
      },
      'success': {
        line: 'rgba(0, 255, 0, 0.3)',
        dot: 'rgba(0, 255, 0, 0.6)'
      }
    }
  },
  set: {
    beforeRepeat: function () {}
  }
}

function Unlock (el, options) {
  if (!_.isObject(options)) {
    warn('the options should be a object')
  }
  this.$options = merge(defaultOptions, options)
  this.$el = typeof el === 'string' ? $(el) : el
  if (!this.$el) {
    warn('can not resolve wrapper dom')
  }

  this._elWidth = getStyle(this.$el, 'width')
  this._elHeight = getStyle(this.$el, 'height')

  this._init()
}

drawMixin(Unlock)
initMixin(Unlock)
coreMixin(Unlock)

export default Unlock
