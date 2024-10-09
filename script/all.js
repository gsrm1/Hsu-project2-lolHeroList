//1:陣列資料區
let lolHeros = [
  { name: 'Garen', lane: '上單Top', position: '坦克Tank', specialize: '' },
  { name: 'Lillia', lane: '上單Top', position: '鬥士Fighter', specialize: '' },
  { name: 'Yasuo', lane: '上單Top', position: '鬥士Fighter', specialize: '' },
  { name: 'Lillia', lane: '打野Jg', position: '鬥士Fighter', specialize: '' },
  { name: 'Yasuo', lane: '打野Jg', position: '鬥士Fighter', specialize: '' },
  { name: 'Ahri', lane: '中路Mid', position: '法師Mage', specialize: '' },
  { name: 'vex', lane: '中路Mid', position: '法師Mage', specialize: '' },
  {
    name: 'Tristana',
    lane: '中路Mid',
    position: '射手Marksman',
    specialize: '',
  },
  { name: 'Yasuo', lane: '中路Mid', position: '鬥士Fighter', specialize: '' },
  {
    name: 'Tristana',
    lane: '下路Bot',
    position: '射手Marksman',
    specialize: '',
  },
  { name: 'Lulu', lane: '下路Bot', position: '輔助Support', specialize: '' },
  { name: 'Yasuo', lane: '下路Bot', position: '鬥士Fighter', specialize: '' },
];
const list = document.querySelector('.list'); //指向ul清單區域(供以下程式共用)
//2:列出資料
function init() {
  //將程式碼初始化，當需要時再呼叫以啟用功能
  let str = ''; //宣告變數來儲存迴圈選取到的資料
  lolHeros.forEach(function (item, index, array) {
    str += `<li><p class='nameBold'>${item.name}</p>是<p class='positonBlue'>${item.position}</p>走<p class='laneItalic'>${item.lane}</p><p class='specializeRed'>${item.specialize}</p></li>`;
  });
  list.innerHTML = str; //將ul清單清空並取代成資料字串。
}
init(); //啟用"列出資料"功能
//3:篩選器功能區
const heroFilter = document.querySelector('.laneFilter'); //指向input按鈕區域
function init2() {
  //將程式碼初始化，當需要時再呼叫以啟用功能（最下方）
  heroFilter.addEventListener('click', function (e) {
    //監聽按鈕點擊事件
    if (e.target.value === undefined) {
      //當點擊到按鈕以外區域，透過此段語法中斷執行
      console.log('你點到空白區域了！');
      return;
    }
    let str = ''; //宣告變數來儲存迴圈選取到的資料
    lolHeros.forEach(function (item, index, array) {
      if (e.target.value === '全英雄All') {
        str += `<li><p class='nameBold'>${item.name}</p>是<p class='positonBlue'>${item.position}</p>走<p class='laneItalic'>${item.lane}</p><p class='specializeRed'>${item.specialize}</p></li>`;
      } else if (e.target.value === item.lane) {
        //迴圈篩選與input value值相同的物件資料
        str += `<li><p class='nameBold'>${item.name}</p>是<p class='positonBlue'>${item.position}</p>走<p class='laneItalic'>${item.lane}</p><p class='specializeRed'>${item.specialize}</p></li>`;
      } //整理選到的資料，並儲存在str變數中（因為放在if判斷式內，每次點按鈕之前的資料會先被清空）
    });
    list.innerHTML = str; //將ul清單清空並取代成資料字串。
  });
}
init2(); //呼叫以啟用以上程式
//4:新增資料區
//宣告變數來指向不同的按鈕
const addName = document.querySelector('#name');
const addPosition = document.querySelector('#position');
const addLane = document.querySelector('#lane');
const addSpecialize = document.querySelector('#specialize');
const addHero = document.querySelector('#submit');
const deleteHero = document.querySelector('#delete');
const resetHero = document.querySelector('#reset');
addHero.addEventListener('click', function (e) {
  if (addName.value == '') {
    //當input未輸入時，使用return阻止新增功能
    alert('請輸入自訂英雄名稱！Enter your hero name!');
    return;
  }
  let newHero = {
    //宣告一個空物件供新增資料用
    name: '',
    lane: '',
    position: '',
    specialize: '',
  };
  newHero.name = addName.value;
  newHero.position = addPosition.value;
  newHero.lane = addLane.value;
  newHero.specialize = addSpecialize.value;
  lolHeros.unshift(newHero); //將新增的物件資料推到陣列最前方
  addName.value = '';
  init(); //啟用"2.列出資料"功能，達成新增後即時更新總清單效果
});
//5:刪除資料區
deleteHero.addEventListener('click', function (e) {
  lolHeros.shift(); //刪除陣列中最前方的物件
  init();
});
//6:還原資料區
//複製一份原始陣列資料用以還原
let lolHerosReset = [
  { name: 'Garen', lane: '上單Top', position: '坦克Tank', specialize: '' },
  { name: 'Lillia', lane: '上單Top', position: '鬥士Fighter', specialize: '' },
  { name: 'Yasuo', lane: '上單Top', position: '鬥士Fighter', specialize: '' },
  { name: 'Lillia', lane: '打野Jg', position: '鬥士Fighter', specialize: '' },
  { name: 'Yasuo', lane: '打野Jg', position: '鬥士Fighter', specialize: '' },
  { name: 'Ahri', lane: '中路Mid', position: '法師Mage', specialize: '' },
  { name: 'vex', lane: '中路Mid', position: '法師Mage', specialize: '' },
  {
    name: 'Tristana',
    lane: '中路Mid',
    position: '射手Marksman',
    specialize: '',
  },
  { name: 'Yasuo', lane: '中路Mid', position: '鬥士Fighter', specialize: '' },
  {
    name: 'Tristana',
    lane: '下路Bot',
    position: '射手Marksman',
    specialize: '',
  },
  { name: 'Lulu', lane: '下路Bot', position: '輔助Support', specialize: '' },
  { name: 'Yasuo', lane: '下路Bot', position: '鬥士Fighter', specialize: '' },
];
// resetHero.addEventListener("click", function (e) {
//   let str = "";
//   lolHerosReset.forEach(function (item, index, array) {
//     str += `<li><p class='nameBold'>${item.name}</p>是<p class='positonBlue'>${item.position}</p>走<p class='laneItalic'>${item.lane}</p><p class='specializeRed'>${item.specialize}</p></li>`;
//   });
//   list.innerHTML = str;
// });
resetHero.addEventListener('click', function (e) {
  //助教提供的寫法，實現了還原名單功能！
  lolHeros = [...lolHerosReset]; //三個點是"展開運算子"，拷貝lolHeroReset的語法
  init();
});
//7.介面語言切換功能
const langSwitch = document.querySelector('#langBtn');
langSwitch.addEventListener('click', function (e) {
  if (langSwitch.value === 'Switch Eng') {
    init_English();
    langSwitch.value = '切換中文';
  } else if (langSwitch.value === '切換中文') {
    init_Chinese();
    langSwitch.value = 'Switch Eng';
  }
});
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const positionLabel = document.querySelector('#positionLabel');
const laneLabel = document.querySelector('#laneLabel');
const specializeLabel = document.querySelector('#specializeLabel');
const heroName = document.querySelector('#name');
const addHeroBtn = document.querySelector('#submit');
const deleteHeroBtn = document.querySelector('#delete');
const resetListBtn = document.querySelector('#reset');
const h4 = document.querySelector('h4');
function init_English() {
  h1.textContent = 'LoL hero list: pos ＆ lane advise';
  h2.textContent = 'Filter- position & lane：';
  h3.textContent = 'Customize your own hero：';
  positionLabel.textContent = 'Position:';
  laneLabel.textContent = 'Lane:';
  specializeLabel.textContent = 'Specialize:';
  heroName.placeholder = 'Enter name';
  addHeroBtn.value = 'Add Hero';
  deleteHeroBtn.value = 'Del Hero';
  resetListBtn.value = 'Reset';
  h4.textContent = '*Happy Yasuo can go anywhere.';
}
function init_Chinese() {
  h1.textContent = 'LoL英雄清單：定位及路線推薦';
  h2.textContent = '篩選器-顯示英雄定位與推薦路線：';
  h3.textContent = '自訂你的專屬英雄：';
  positionLabel.textContent = '定位:';
  laneLabel.textContent = '路線:';
  specializeLabel.textContent = '專精:';
  heroName.placeholder = '輸入名稱';
  addHeroBtn.value = '新增英雄';
  deleteHeroBtn.value = '刪除英雄';
  resetListBtn.value = '還原預設名單';
  h4.textContent = '*快樂風男，想去哪就去哪。';
}