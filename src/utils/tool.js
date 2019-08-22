// 生成一个圆点
export function circleDot(e, x, y) {
  // var rangeXCount = Math.floor(Math.random() * (range || 100))
  // var rangeYCount = Math.floor(Math.random() * (range || 100))
  // var rangeTopCount = Math.floor(Math.random() * (top || 30))
  var rangeXCount = x || 50
  var rangeYCount = y || 50
  var dot = document.createElement('b');
  dot.style.cssText =
    'position:absolute;zIndex:9999;width:10px;height:10px;transition: all 1.2s ease-in-out;'
  dot.style.backgroundColor =
    `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  dot.style.borderRadius = '50%'
  dot.style.left = e.pageX + 'px'
  // dot.style.display = 'inline-block'
  dot.style.top = e.pageY - 30 + 'px'

  dot.addEventListener('transitionend', function (et) {
    if (et.propertyName == 'opacity' && et.srcElement.style.opacity == 0) {
      et.srcElement.remove()
    }

  })
  document.body.appendChild(dot)
  requestAnimationFrame(() => {
    // dot.style.width = '80px'
    // dot.style.margin = '-40px -40px'
    // dot.style.height = '80px'
    dot.style.left = e.pageX + rangeXCount + 'px'
    dot.style.top = e.pageY - rangeYCount + 'px'
    dot.style.opacity = '0'
    // dot.style.display = 'none'
  })

}