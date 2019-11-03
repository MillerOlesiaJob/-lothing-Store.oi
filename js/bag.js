var bagCount = document.getElementById('count-bag');
var bagBill = document.getElementById('bill-bag');
var container = document.getElementById('bag-cont');
var totalPrice = document.getElementById('total-price');
var empty = document.getElementById('empty');
var buy = document.getElementById('buy');
var container = document.getElementById('bag-cont');

var d = 0;
var n = 0;
var p = 0;





var catalog = [{
  id: '014c271a-2811-47fc-b63f-ba279a4ec830',
  productType: 'Jersey Tops',
  dateAdded: '2017-05-15T16:58:40.000Z',
  title: 'Monki Festival Knitted Golden',
  description: '',
  discountedPrice: 24.75,
  price: 24.75,
  hasNew: true,
  brand: 'Adidas',
  category: 'women',
  fashion: 'Casual style',
  color: ['Golden'],
  sizes: ['UK 17','UK 18'],
  thumbnail: 'img/blue.png', // заменить на путь к изображению, извлеченному из макета каталога
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // заменить путями к изображениям, извлеченным из макета элемента
}, {
  id: '07cf6ce2-6eee-4e78-a441-f257fdea7ed6',
  dateAdded: '2017-06-12T15:35:13.000Z',
  productType: 'Jersey Tops',
  title: 'Boyfriend T-Shirt with Bohemian print',
  description: '',
  discountedPrice: 90,
  price: 120,
  hasNew: false,
  category: 'women',
  brand: 'Adidas',
  fashion: 'Casual style',
  color: ['Black', 'White'],
  sizes: ['UK 18'],
  thumbnail: 'img/bohemian.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '0fdfa061-838d-42ab-ae06-99c66115f633',
  dateAdded: '2017-02-12T11:14:29.000Z',
  productType: 'Jersey Tops',
  title: 'Boyfriend T-Shirt with Paris Print',
  description: '',
  discountedPrice: 85.75,
  price: 85.75,
  hasNew: false,
  category: 'women',
  fashion: 'Casual style',
  brand: 'New Balance',
  color: ['Black'],
  sizes: ['UK 18'],
  thumbnail: 'img/paris.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '4a3d3c3e-9dc5-4d99-b33d-42b22e20dc0b',
  dateAdded: '2017-08-02T15:00:40.000Z',
  title: 'Straight Leg Jeans',
  description: '',
  productType: 'Jersey Tops',
  discountedPrice: 55,
  price: 55,
  hasNew: false,
  category: 'women',
  fashion: 'Nail the 90s',
  brand: 'New Balance',
  color: ['Blue'],
  sizes: ['UK 18'],
  thumbnail: 'img/view_item.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '5677f851-1c4a-4e9b-80e9-16d1e6265257',
  dateAdded: '2017-07-07T10:00:39.000Z',
  title: "Levi's Jeans for women",
  description: '',
  productType: 'Jersey Tops',
  discountedPrice: 95.5,
  price: 95.5,
  hasNew: false,
  category: 'women',
  fashion: 'Casual style',
  brand: 'New Balance',
  color: ['Blue'],
  sizes: ['UK 18'],
  thumbnail: 'img/jeens.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '739d3ae0-6dca-4453-a7a4-a94b841a296d',
  dateAdded: '2017-07-12T09:02:55.000Z',
  title: 'With Patchwork Crochet',
  description: '',
  productType: 'Dresses',
  discountedPrice: 80.6,
  price: 80.6,
  hasNew: false,
  category: 'women',
  fashion: 'Casual style',
  color: ['White'],
  brand: 'New Balance',
  sizes: ['UK 17','UK 18'],
  thumbnail: 'img/dress.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '80d32566-d81c-4ba0-9edf-0eceda3b4360',
  dateAdded: '2017-01-01T13:26:14.000Z',
  title: 'Dark classic fit suit',
  description: 'Featuring fine Italian wool, this elegant suit has pick-stitch edging, cascade buttons at the cuffs',
  discountedPrice: 180.6,
  price: 180.6,
  productType: 'Jersey Tops',
  hasNew: false,
  category: 'men',
  brand: 'Chi Chi London',
  fashion: 'Classical style',
  color: ['Black', 'Blue'],
  sizes: ['UK 52', 'UK 54', 'UK 56'],
  thumbnail: 'img/men_fuul.png', // replace with image extracted from item layout
  preview: ['img/men_left.png', 'img/men_middle.png', 'img/men-right.png'] // replace with paths to images extracted from item layout
}, {
  id: '8b300772-eee3-4ff1-b091-e89f17e0e469',
  dateAdded: '2017-08-10T14:59:00.000Z',
  title: 'Neck Knitted Jumper',
  description: '',
  discountedPrice: 76.25,
  price: 76.25,
  productType: 'Coats & Jackets',
  hasNew: true,
  category: 'women',
  fashion: 'Casual style',
  color: ['Green'],
  brand: 'Chi Chi London',
  sizes: ['UK 19'],
  thumbnail: 'img/jacket.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '8c061815-6a7d-4465-bb78-1bdc6c5adebf',
  dateAdded: '2017-08-28T09:15:36.000Z',
  title: 'Only Skinny Jeans',
  description: '',
  discountedPrice: 65.5,
  productType: 'Jersey Tops',
  price: 65.5,
  hasNew: true,
  brand: 'Chi Chi London',
  category: 'women',
  fashion: 'Casual style',
  color: ['Phillipa wash'],
  sizes: ['UK 17','UK 18'],
  thumbnail: 'img/black_f.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: '9ded7821-e510-4a16-ba9f-57c1e3442ad8',
  dateAdded: '2017-07-19T15:11:04.000Z',
  title: 'Turtle Neck Jumper in Rib',
  description: '',
  discountedPrice: 130.25,
  productType: 'Coats & Jackets',
  price: 130.25,
  hasNew: false,
  category: 'women',
  brand: 'Chi Chi London',
  fashion: 'Casual style',
  color: ['Golden', 'Blue', 'Green'],
  sizes: ['UK 17','UK 18'],
  thumbnail: 'img/coat.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: 'bec71daa-d133-473d-bbb0-1ee0a427a17d',
  dateAdded: '2017-03-09T17:51:45.000Z',
  title: 'Only Busted Knee Jean',
  description: '',
  productType: 'Jersey Tops',
  discountedPrice: 140.5,
  price: 140.5,
  hasNew: false,
  brand: 'Antipodium',
  category: 'women',
  fashion: 'Casual style',
  color: ['Dark Blue'],
  sizes: ['UK 19'],
  thumbnail: 'img/view_item.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: 'ccc8a5d5-7cdf-4706-95f2-abc64761400d',
  dateAdded: '2017-06-09T17:32:17.000Z',
  title: 'Colour Block',
  description: '',
  productType: 'Jersey Tops',
  discountedPrice: 550.5,
  price: 550.5,
  brand: 'Antipodium',
  hasNew: false,
  category: 'women',
  fashion: 'Casual style',
  color: ['Blue', 'Black','Green'],
  sizes: ['UK 19'],
  thumbnail: 'img/grey.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: 'e50a3153-7833-4b85-b412-1a39d215fd38',
  dateAdded: '2017-04-25T12:14:41.000Z',
  title: 'Oversized Cardigan',
  description: '',
  discountedPrice: 90,
  price: 90,
  brand: 'Antipodium',
  productType: 'Jersey Tops',
  hasNew: false,
  category: 'women',
  fashion: 'Casual style',
  color: ['Raw umber', 'Dark blue'],
  sizes: ['UK 18', 'UK 19'],
  thumbnail: 'img/khaki.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}, {
  id: 'ff665110-5e7f-435d-b1b4-651c3d5050ca',
  brand: 'Antipodium',
  dateAdded: '2017-04-05T10:04:16.000Z',
  title: 'Paul & Joe Sister Jumper with Neon Trims',
  description: '',
  discountedPrice: 19.75,
  price: 19.75,
  hasNew: false,
  productType: 'Jersey Tops',
  category: 'women',
  fashion: 'Casual style',
  color: ['Blue'],
  sizes: ['UK 18'],
  thumbnail: 'img/white.png', // replace with image extracted from item layout
  preview: ['full image path 1', 'full image path 2', 'full image path 3'] // replace with paths to images extracted from item layout
}];
var goodsArr = [];
var arr1 = [];

(function(ELEMENT) {

  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {

    if (!this) return null;

    if (this.matches(selector)) return this;

    if (!this.parentElement) {return null}

      else return this.parentElement.closest(selector)

    };

}(Element.prototype));
window.onload = function() {
  bagBill.innerHTML = localStorage.getItem('countBag');
  if (this.bagBill.innerHTML !== '') {
    document.getElementById('advertisement').style.display = 'none';
  }
  goodsArr = JSON.parse(localStorage.getItem("productInfo"));
  stockFind(goodsArr);


  } // действия при загрузке страници

  var stockFind = function(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty('stock') == true) {
        s += 1;
      }
     
    }
    reiteration(arr,s);
    
  } //для проверки правильности скидки для выгодного предложения
 
  console.log(_.isArray(goodsArr));
  

var reiteration = function(mas,s) {
  // let arr = _.sortBy(arr1,'id');
  // let arr = _.sortBy(arr1,'color');
  let arr = _.sortBy(_.sortBy(mas,'id'),'color');

  console.log(arr)

  var a = [], b = [], prev={id:'', color:'',size:''};

  for (var i = 0; i < arr.length; i++ ) {
    console.log(arr[i].color);
    console.log(prev.color)
    console.log(arr[i].id);
    console.log(prev.id)
    if ((arr[i].id !== prev.id) || (arr[i].color !== prev.color) ) {

      console.log('Winner', arr[i]);
      a.push(arr[i]);
      console.log('a',a)
      b.push(1);
      } else {
        b[b.length-1]++;
        console.log('b',b)
      }


      prev = arr[i];
    }

  for (let y = 0; y < b.length; y++) {

    a[y].quantity = b[y] + (+a[y].quantity) -1;
  }
  goodsArr = a;
  selectedQuality(goodsArr);
  showItem(goodsArr,s);
  console.log(goodsArr)

} // сортировка одинаковости
container.addEventListener('click', function(event) {
  let remove = event.target.closest('.remove-item');
	if(!remove) return;
	if(!container.contains(remove)) return;
  deleteItem(remove.parentNode.firstElementChild.innerHTML,remove);
})

var deleteItem = function(item,rem) {
  removePrice = rem.parentElement.firstElementChild.nextElementSibling.innerHTML.replace('£','');
  removeCount = rem.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
  for (let i = 0; i < catalog.length; i++) {
    if (item == catalog[i].title) {
      var itemID = catalog[i].id;
    }
  }
  for (let j = 0; j < goodsArr.length; j++) {
    if (itemID == goodsArr[j].id) {
      goodsArr.splice(j,1);
    }
  }
  let count = +bagCount.innerHTML.replace(/[\(\)]+/g, '') - (+removeCount.innerHTML);
  // if (count == 0) {
  //   container.innerHTML = 'Ваша корзина пуста';
  // }
  bagCount.innerHTML = '('+count+')';
  totalPrice.innerHTML = '£'  + ((+totalPrice.innerHTML.replace('£',''))-removePrice).toFixed(2);

  bagBill.innerHTML = totalPrice.innerHTML;
  container.innerHTML="";
  localStorage.setItem("productInfo", JSON.stringify(goodsArr));
  let bill = +bagBill.innerHTML;

  if (isNaN(bill) == true) {

    localStorage.setItem('billBag', '');
    localStorage.setItem('countBag', '');
    totalPrice.innerHTML = '';
    bagBill.innerHTML = '';
  } else {
    localStorage.setItem('billBag', bagBill.innerHTML);
    localStorage.setItem('countBag', '('+count1+')');
  }

  

  selectedQuality(goodsArr);
  showItem(goodsArr);
  

}


var selectedQuality = function(arr) {
  if (bagBill.innerHTML !== '') {
    container.innerHTML = '';
  }
  if (arr.length !== 1) {  
    n = Math.ceil(arr.length / 2);
  } else {
    n = arr.length;
  }
  
  for (let i = 0; i < n; i++) {
    let str = document.createElement('div');
    str.className = 'bag-container-string';
    container.appendChild(str);
    for (let j = 0; j < 2; j++) {

    let it = document.createElement('div');
    it.className = 'item bag';
    str.appendChild(it); 
    let im = document.createElement('div');
    im.className = 'item__images';
    it.appendChild(im);
    let image = document.createElement('img');
    im.appendChild(image);
    let overlay = document.createElement('div');
    overlay.className = 'catalog-overlay';
    im.appendChild(overlay);
    let view = document.createElement('p');
    view.className = 'catalog-overlay_view';
    view.innerHTML = 'View Item';
    im.appendChild(view);
    let inf = document.createElement('div');
    inf.className = 'item-info';
    it.appendChild(inf);
    let name = document.createElement('p');
    name.className = 'item__info-name bag';
    inf.appendChild(name);
    let pr = document.createElement('p');
    pr.className = 'item-price';
    inf.appendChild(pr);

    let bin = document.createElement('div');
    bin.className = 'bag__info';
    inf.appendChild(bin);

    
    let col = document.createElement('p');
    col.innerHTML = 'Color:';
    bin.appendChild(col);
    let sp = document.createElement('span');
    sp.className = 'bag-color';
    bin.appendChild(sp);

    let bin1 = document.createElement('div');
    bin1.className = 'bag__info';
    inf.appendChild(bin1);

    
    let col1 = document.createElement('p');
    col1.innerHTML = 'Size:';
    bin1.appendChild(col1);
    let sp1 = document.createElement('span');
    sp1.className = 'bag-size';
    bin1.appendChild(sp1);

    let bin2 = document.createElement('div');
    bin2.className = 'bag__info';
    inf.appendChild(bin2);

    
    let col2 = document.createElement('p');
    col2.innerHTML = 'Quantity:';
    bin2.appendChild(col2);
    let mn = document.createElement('span');
    mn.className = 'bag-minus';
    mn.innerHTML = '-'
    bin2.appendChild(mn);

    let num = document.createElement('span');
    num.className = 'bag-quantity';
    // num.innerHTML = '1'
    bin2.appendChild(num);

    let pl = document.createElement('span');
    pl.className = 'bag-plus';
    pl.innerHTML = '+'
    bin2.appendChild(pl);

    let remove = document.createElement('p');
    remove.className = 'remove-item';
    remove.innerHTML = 'Remove Item';
    inf.appendChild(remove);
    }
  }
  if (arr.length % 2 !== 0) {
    let arr5 = document.getElementsByClassName('bag-container-string');
    arr5[arr5.length-1].removeChild(arr5[arr5.length-1].lastChild);  
    // console.log(i)
    // container.lastChild.removeChild(lastChild);
  }
  
}


var showItem = function(arr,s) {


  document.getElementById('discount-info').style.display = 'none';
  var imgArr = document.getElementsByTagName('img');
  var imgName = document.getElementsByClassName('item__info-name bag');
  var imgPrice = document.getElementsByClassName('item-price');
  var imgColor = document.getElementsByClassName('bag-color');
  var imgSize = document.getElementsByClassName('bag-size');
  var imgQuality = document.getElementsByClassName('bag-quantity');
  var imgItem = document.getElementsByClassName('item__images');
  
  for (let i = 0; i < catalog.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (catalog[i].id === arr[j].id) {
        imgQuality[j].innerHTML = arr[j].quantity;
        imgItem[j].id = arr[j].id;
        imgArr[j].src = arr[j].image;
        imgName[j].innerHTML = catalog[i].title;
        imgPrice[j].innerHTML = '£'  + catalog[i].discountedPrice;
        if (s >= 2) {
          totalPrice.innerHTML = '£'  + ((+totalPrice.innerHTML.replace('£','') + catalog[i].discountedPrice * +arr[j].quantity)-15).toFixed(2);
          document.getElementById('discount-info').style.display = 'block';
          s = 0;
        } else {
          
          totalPrice.innerHTML = '£'  + ((+totalPrice.innerHTML.replace('£','') + catalog[i].discountedPrice * +arr[j].quantity)).toFixed(2);
        }
        bagBill.innerHTML = totalPrice.innerHTML;
        if (arr[j].color == 1) {
          imgColor[j].innerHTML = catalog[i].color[0];
        } else {
          imgColor[j].innerHTML = arr[j].color;
        }

        if (arr[j].size == 1) {
          imgSize[j].innerHTML = catalog[i].sizes[0];
        } else {
          imgSize[j].innerHTML = arr[j].size;
        }
        

      } 
    }

    
  }
  var quantity = document.getElementsByClassName('bag-quantity');
  var prises = document.getElementsByClassName('item-price');
  d = 0;
  p = 0;
  for (let y = 0; y < quantity.length; y++) {
    d = d + (+quantity[y].innerHTML);

    // p = p + (+prises[y].innerHTML.replace('£',''));
    bagCount.innerHTML = '(' + d + ')';
    bagBill.innerHTML = totalPrice.innerHTML;
    localStorage.setItem('countBag', '(' + d + ')');
    localStorage.setItem('billBag', bagBill.innerHTML)
  }
}

container.addEventListener('click', function(event) {
  let minus = event.target.closest('.bag-minus');
  
	if(!minus) return;
  if(!container.contains(minus)) return;
  if (minus.nextElementSibling.innerHTML == 1) {
    return } else {
    minus.nextElementSibling.innerHTML = minus.nextElementSibling.innerHTML - 1;
    let iPrice = +minus.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML.replace('£','')
    totalPrice.innerHTML = '£'  + ((+totalPrice.innerHTML.replace('£','') - iPrice)).toFixed(2);
    bagBill.innerHTML = totalPrice.innerHTML;
    bagCount.innerHTML = '(' + (+bagCount.innerHTML.replace(/[\(\)]+/g, '') - 1) + ')';
    localStorage.setItem('billBag', bagBill.innerHTML);
    localStorage.setItem('countBag', bagCount.innerHTML);
    idminus = minus.parentElement.parentElement.previousElementSibling.id;
    for (let i = 0; i < goodsArr.length; i++) {
      if (idminus == goodsArr[i].id) {
        goodsArr[i].quantity = minus.nextElementSibling.innerHTML;
        localStorage.setItem("productInfo", JSON.stringify(goodsArr));

      }
    }
    
    
  }

	
})

container.addEventListener('click', function(event) {
  let plus = event.target.closest('.bag-plus');
	if(!plus) return;
  if(!container.contains(plus)) return;
    plus.previousElementSibling.innerHTML = + plus.previousElementSibling.innerHTML + 1;
    let iPrice = +plus.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML.replace('£','')
    totalPrice.innerHTML = '£'  + ((+totalPrice.innerHTML.replace('£','') + iPrice)).toFixed(2);
    bagBill.innerHTML = totalPrice.innerHTML;
    bagCount.innerHTML = '(' + (+bagCount.innerHTML.replace(/[\(\)]+/g, '') + 1) + ')';
    localStorage.setItem('billBag', bagBill.innerHTML);
    localStorage.setItem('countBag', bagCount.innerHTML);
    idPlus = plus.parentElement.parentElement.previousElementSibling.id;
    for (let i = 0; i < goodsArr.length; i++) {
      if (idPlus == goodsArr[i].id) {
        goodsArr[i].quantity = plus.previousElementSibling.innerHTML;
        localStorage.setItem("productInfo", JSON.stringify(goodsArr));

      }
    }
  
  })
  
  container.addEventListener('click', function(event) {
    let view1 = event.target.closest('.item__images');
    if(!view1) return;
    if(!container.contains(view1)) return;
    showItem1(view1);
  })
  
  var showItem1 = function(view) {
    localStorage.setItem("toShowItem", view.id);
    document.location.href = "item.html";
  }

  empty.addEventListener('click', function() {
    container.innerHTML = '';
    bagCount.innerHTML = '';
    bagBill.innerHTML = '';
    totalPrice.innerHTML = '';
    localStorage.clear();
    document.getElementById('discount-info').style.display = 'none';
    document.getElementById('advertisement').style.display = 'block';

  })

  buy.addEventListener('click', function() {
    container.innerHTML = '';
    bagCount.innerHTML = '';
    bagBill.innerHTML = '';
    totalPrice = '';
    localStorage.clear();
    document.getElementById('discount-info').style.display = 'none';
    document.getElementById('advertisement1').style.display = 'block';

  })
 
  













