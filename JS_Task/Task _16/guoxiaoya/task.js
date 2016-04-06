/**
 * Created by guoyanan on 16/3/24.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var flag = false;
    var city = document.getElementById('aqi-city-input').value.trim();
    var val = document.getElementById('aqi-value-input').value.trim();

    //城市名 至少输入一个中英文字符
    var cityReg = new RegExp('^[a-zA-Z\u4e00-\u9fa5]{1,}$');
    var cityFlag = cityReg.test(city);
    //指数 至少输入一个整数
    var valReg = new RegExp('^[0-9]{1,}$');
    var valFlag = valReg.test(val);

    //清空提示信息
    var citySpan = document.getElementById('aqi-city-span');
    citySpan.textContent = '';
    var valSpan = document.getElementById('aqi-value-span');
    valSpan.textContent = '';
    if (!cityFlag) {
        citySpan.textContent = '请输入中英文字符!';
    }
    if (!valFlag) {
        valSpan.textContent = '请输入数字!';
    }
    if(cityFlag&&valFlag){
        aqiData[city] = val;
    }

    console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

    var newtbody = document.createElement('tbody');
    //获取aqiData中所有城市名,放入数组中
    var aqiKeys = Object.keys(aqiData);

    for (var i = 0; i < aqiKeys.length; i++) {
        var rowcount = i + 1;
        newtbody.insertRow(i);
        newtbody.rows[i].insertCell(0);
        newtbody.rows[i].insertCell(1);
        newtbody.rows[i].insertCell(2);
        var key = aqiKeys[i];
        newtbody.rows[i].cells[0].appendChild(document.createTextNode(key));
        newtbody.rows[i].cells[1].appendChild(document.createTextNode(aqiData[key]));

        var currentbutton = document.createElement('button');
        var cuttenttext = document.createTextNode('删除');
        currentbutton.appendChild(cuttenttext);

        newtbody.rows[i].cells[2].appendChild(currentbutton);
    }
    var tbody = document.getElementsByTagName('tbody').item(0);
    tbody.parentNode.replaceChild(newtbody, tbody);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {
    // do sth.
    if (event.target.tagName.toLowerCase() === 'button') {
        //获取当前button所在的tr
        var tr = event.target.parentNode.parentNode;
        //获取key值
        var key = tr.firstChild.textContent;
        delete aqiData[key];
        renderAqiList();
    }
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var button = document.getElementById('add-btn');
    button.addEventListener('click', addBtnHandle, false);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementsByTagName('table').item(0);
    table.addEventListener('click', delBtnHandle, false);
}

init();

