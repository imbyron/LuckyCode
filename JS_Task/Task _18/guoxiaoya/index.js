/**
 * Created by guoyanan on 16/4/2.
 */
function leftAddHandle() {
    var numValue = document.getElementsByTagName('input')[0].value;
    var numReg = new RegExp('^[0-9]{1,}$');
    var flag = numReg.test(numValue);
    if (flag) {
        var div = document.createElement('div');
        div.innerHTML = numValue;
        div.className = 'num-container';
        var queue = document.getElementById('queue-container');
        queue.insertBefore(div, queue.firstChild);
    }
}

function rightAddHandle() {
    var numValue = document.getElementsByTagName('input')[0].value;
    var numReg = new RegExp('^[0-9]{1,}$');
    var flag = numReg.test(numValue);
    if (flag) {
        var div = document.createElement('div');
        div.innerHTML = numValue;
        div.className = 'num-container';
        var queue = document.getElementById('queue-container');
        queue.insertBefore(div, null);//queue.appendChild(div); 两种皆可
    }
}

function leftDelHandle() {
    var firstNum = document.getElementById('queue-container').firstElementChild;
    if (firstNum) {
        alert(firstNum.innerHTML);
        firstNum.parentNode.removeChild(firstNum);
    }
}

function rightDelHandle() {
    var lastNum = document.getElementById('queue-container').lastElementChild;
    if (lastNum) {
        alert(lastNum.innerHTML);
        lastNum.parentNode.removeChild(lastNum);
    }
}

function delNumContainer(event) {
    console.log(event);
    //只有点击队列中的元素时,才删除该元素
    if (event.target.className === 'num-container') {
        var numContainer = event.target;
        //从当前节点移除该节点
        numContainer.parentNode.removeChild(numContainer);
    }
}

function init() {
    //给四个按钮绑定事件,点击时触发add或者delete事件
    var leftAddBtn = document.getElementById('left-add-btn');
    leftAddBtn.addEventListener('click', leftAddHandle, false);

    var rightAddBtn = document.getElementById('right-add-btn');
    rightAddBtn.addEventListener('click', rightAddHandle, false);

    var leftDelBtn = document.getElementById('left-del-btn');
    leftDelBtn.addEventListener('click', leftDelHandle, false);

    var rightDelBtn = document.getElementById('right-del-btn');
    rightDelBtn.addEventListener('click', rightDelHandle, false);

    //给所有数字容器绑定删除事件,点击时删除该容器
    var queue = document.getElementById('queue-container');
    queue.addEventListener('click', delNumContainer, false);
}
init();