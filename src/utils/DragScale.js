/* 拖拽和缩放封装 */
function DragScale() {
    
}

/*
 * 拖拽封装
 * @param {[el]} scope [操纵范围元素] target [点击元素] box [目标元素]
 * @param {[function]} change，up，down [实时回调]
 */
DragScale.prototype.drag = function (cfig = {}) {
    const b = cfig.scope || document.querySelector('html'), d = cfig.target || b, t = cfig.box || d;
    let ol = 0, ot = 0;
    const f = e => {
        e = e || window.event;
        cfig.change && cfig.change({ x: e.clientX + ol, y: e.clientY + ot, target: t });
        e.setCapture && e.setCapture();
        e.preventDefault && e.preventDefault();
        return false;
    }
    const fr = () => {
        cfig.up && cfig.up();
        this.removeEvent(b, 'mousemove', f);
        this.removeEvent(b, 'mouseup', fr);
        this.removeEvent(b, 'mouseleave', fr);
    }
    this.addEvent(d, 'mousedown', e => {
        e = e || window.event;
        ol = parseFloat(t.style.left || 0) - e.clientX;
        ot = parseFloat(t.style.top || 0) - e.clientY;
        cfig.down && cfig.down({x: ol, y: ot});

        this.addEvent(b, 'mousemove', f);
        this.addEvent(b, 'mouseup', fr);
        this.addEvent(b, 'mouseleave', fr);
    })
}

/*
 * 放大缩小方法封装
 * @param {[object]} scope [操纵范围元素]
 * @param {[object]} target [目标元素]
 * @param {[object]} min [最小放大倍数]
 * @param {[object]} max [最大放大倍数]
 * @param {[function]} change [实时回调]
 */
DragScale.prototype.scale = function (cfig = {}) {
    const min = cfig.min || 0.2, max = cfig.max || 4, oBox = cfig.scope || document.body, tBox = cfig.target || oBox;
    let scale = 1;
    const f = function (e) {
        // 判断放大还是缩小
        let ratio = 1.1; // 放大0.1
        if (e.deltaY > 0) ratio = 0.9; // 缩小0.1
        // 放大缩小倍数计算
        const _scale = scale * ratio;
        if (_scale > max) {
            ratio = max / scale;
            scale = max;
        } else if (_scale < min) {
            ratio = min / scale;
            scale = min;
        } else {
            scale = _scale;
        }
        // 计算偏移量（当鼠标在目标元素上时）
        let x = parseFloat(tBox.style.left || 0), y = parseFloat(tBox.style.top || 0);
        if (e.target === tBox) {
            const z = ratio - 1;
            x -= (e.clientX - tBox.offsetLeft - tBox.offsetWidth * 0.5) * z;
            y -= (e.clientY - tBox.offsetTop - tBox.offsetHeight * 0.5) * z;
        }
        // 回调
        cfig.change && cfig.change({
            target: tBox,
            x: x.toFixed(4),
            y: y.toFixed(4),
            scale: scale.toFixed(5)
        })
        // 阻止滚动条
        e.preventDefault ? e.preventDefault(): window.event.returnValue = false;
    }

    this.addEvent(oBox, 'mousewheel', f)
}

// 绑定事件封装
DragScale.prototype.addEvent = function (e, t, f) {
    if (e.attachEvent) e.attachEvent('on' + t, f);
    else e.addEventListener(t, f, false);
}

// 事件移除封装
DragScale.prototype.removeEvent = function (e, t, f) {
    if (e.detachEvent) e.detachEvent("on" + t, f);
    else if (e.removeEventListener) e.removeEventListener(t, f, false);
    else e["on" + t] = null;
};

export default new DragScale();
