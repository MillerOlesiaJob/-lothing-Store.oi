var filter = document.getElementById('filter');
var itemArr = document.getElementsByClassName('main__bestoffers-stock-item-image');
var bagCount = document.getElementById('count-bag');
var bagBill = document.getElementById('bill-bag');
var container = document.getElementById('main-catalog');
var tableList = document.getElementsByClassName('filter-table-item');
var tableFilterClick = document.getElementById('show-table-filter');
var itemPrice = document.getElementsByClassName('main__bestoffers-stock-item-arrow_down-price');


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
  preview: ['img/blue1.jpg', 'img/blue.png', 'img/blue2.jpg'] // заменить путями к изображениям, извлеченным из макета элемента
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
  color: ['Black', 'White', 'Khaki'],
  sizes: ['UK 18'],
  thumbnail: 'img/bohemian.png', // replace with image extracted from item layout
  preview: ['img/bohemian.png', 'img/bohemian1.png', 'img/bohemian2.jpg'] // replace with paths to images extracted from item layout
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
  productType: 'Coats',
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
  preview: ['img/black_f1.png', 'img/black_f2.png', 'img/black_f.png'] // replace with paths to images extracted from item layout
}, {
  id: '9ded7821-e510-4a16-ba9f-57c1e3442ad8',
  dateAdded: '2017-07-19T15:11:04.000Z',
  title: 'Turtle Neck Jumper in Rib',
  description: '',
  discountedPrice: 130.25,
  productType: 'Coats',
  price: 130.25,
  hasNew: false,
  category: 'women',
  brand: 'Chi Chi London',
  fashion: 'Casual style',
  color: ['Golden', 'Blue', 'Green'],
  sizes: ['UK 17','UK 18'],
  thumbnail: 'img/coat.png', // replace with image extracted from item layout
  preview: ['img/coat.png', 'img/coat2.jpg', 'img/coat3.jpg'] // replace with paths to images extracted from item layout
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
  color: ['Blue','White'],
  sizes: ['UK 18'],
  thumbnail: 'img/white.png', // replace with image extracted from item layout
  preview: ['img/white.png', 'img/white1.jpg', 'img/white2.jpg'] // replace with paths to images extracted from item layout
}];

var newItemArr = [];

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
	for (let i = 0; i < itemArr.length; i++) {
		let overlay = document.createElement('div');
		overlay.className = 'catalog-overlay';
		let view = document.createElement ('p');
		view.innerHTML = 'View item';
		view.className = 'catalog-overlay_view';
		itemArr[i].appendChild(overlay);
		itemArr[i].appendChild(view);	
  }
  let a = localStorage.getItem('billBag');
  if (a == '£NaN') {
    bagCount.innerHTML = '';
		bagBill.innerHTML = '';
  } else {
    bagCount.innerHTML = localStorage.getItem('countBag');
		bagBill.innerHTML = localStorage.getItem('billBag');
  }
  isNew();
  isDiscont();
}

var isDiscont = function() {
  for (let i = 0; i < catalog.length; i++) {
    for (let j = 0; j < itemArr.length; j++) {
      if (itemArr[j].id == catalog[i].id) {
        if (catalog[i].price !== catalog[i].discountedPrice) {
        itemArr[j].nextElementSibling.firstElementChild.nextElementSibling.classList.add('cat');
        a = document.createElement('p');
        a.className = 'main__bestoffers-stock-item-old cat';
        a.innerHTML = '£' + catalog[i].price;
        itemArr[j].nextElementSibling.firstElementChild.nextElementSibling.insertBefore(a,itemArr[j].nextElementSibling.firstElementChild.nextElementSibling.firstElementChild);
       }
    }
  }
}

}

var isNew = function() {

  for (let i = 0; i < itemArr.length; i++) {
    for (let j = 0; j < catalog.length; j++) {
      if (itemArr[i].id == catalog[j].id) {
        if (catalog[j].hasNew == true) {
          let a = document.createElement('span');
          a.className = 'new';
          a.innerHTML = 'new'
          itemArr[i].appendChild(a);
        }
      }
    }
  }
}

filter.addEventListener('click', function() {
  let showList = event.target.closest('.filter-menu-item');
  if(!showList) return;
  if(!filter.contains(showList)) return;
  show(showList);
})

var show = function(list) {
  console.log(list)
	// let name = list.firstChild.innerHTML;
	let block = list.parentElement;
	let blockName = block.previousElementSibling;
	blockName.innerHTML = name;
  blockName.className = 'active'
  console.log('perent', block.parentElement);
  block.parentElement.firstElementChild.nextElementSibling.innerHTML.className = 'active';
  block.parentElement.firstElementChild.nextElementSibling.innerHTML = list.firstElementChild.innerHTML;
  let arr = blockName.previousElementSibling.innerHTML.replace('<i class="fas fa-caret-down"></i>','');
  let nab = blockName.previousElementSibling;
  nab.className = 'nab-active';
  sortItem(list,arr)
}

tableFilterClick.addEventListener('click' ,function(){
  document.getElementById('table-filter-list').classList.toggle('active');
  let fas = document.getElementsByClassName('fas');
  fas[9].classList.toggle('active');
  fas[10].classList.toggle('active');



  console.log(document.getElementsByClassName('fas'));
}) //показывает и скрывает выпадающий спикок фильтров

filter.onclick = function(event) {
	let tableShow = event.target.closest('.row-item');
	if(!tableShow) return;
  if(!filter.contains(tableShow)) return;
  // console.log(tableShow.parentElement.firstChild);
  showTableFilter(tableShow);
};// определяется нажатие в выпадающем списке

var showTableFilter = function(item) {
  let a;
  let name = item.parentElement.firstChild.innerHTML;
  for (let i = 0; i < tableList.length; i++) {
    if (name == tableList[i].innerHTML.replace(',','')) {
      tableList[i].innerHTML = item.firstChild.innerHTML + ',';
      tableList[i].style.color = '#f14a58';
      a = tableList[i].innerHTML;
    }
  }
  sortItem(item, name);
} //визуальное отображение выбраного фильтра

var sortItem = function(item,arr) {
  console.log(item.firstElementChild.innerHTML);
  arr = arr.toLowerCase();
  if (item.firstElementChild.innerHTML == 'Not selected') {
    console.log('olesu')
    location.reload();
  }

  for (let i = 0; i < catalog.length; i++) {
    switch(arr) {
      case 'fashion':
        if (item.firstChild.innerHTML == catalog[i].fashion) {
          newItemArr.push(catalog[i]);
        }
      
        break;
        case 'color':
          for (let j = 0; j < catalog[i].color.length; j++) {
            if (item.firstChild.innerHTML == catalog[i].color[j]) {
              newItemArr.push(catalog[i]);

            }
          }
      
        break;
        case 'size':  
        for (let j = 0; j < catalog[i].sizes.length; j++) {
          if (item.firstChild.innerHTML == catalog[i].sizes[j]) {
            newItemArr.push(catalog[i]);
          }
        }
      
        break;
        case 'product type': 
        console.log(item.firstChild.innerHTML.replace('&amp;','')) 
        console.log(catalog[i].productType.replace('&',''))
        if (item.firstChild.innerHTML.replace('&amp','') == catalog[i].productType.replace('&','')) {
          newItemArr.push(catalog[i]);
          }
      
        break;

        case 'brand':  
        if (item.firstChild.innerHTML == catalog[i].brand) {
          newItemArr.push(catalog[i]);
          }
      
        break;
        case 'price range':  
        if (item.firstChild.innerHTML == 'To £99') {
          if (catalog[i].discountedPrice < 99) {
            newItemArr.push(catalog[i]);
          }
        } else {
          if (item.firstChild.innerHTML == '£100-£299') {
            if ((catalog[i].discountedPrice > 99) && (catalog[i].discountedPrice < 299)) {
              newItemArr.push(catalog[i]);
            }
          } else {
            if (item.firstChild.innerHTML == 'From £300') {
              if (catalog[i].discountedPrice > 299) {
                newItemArr.push(catalog[i]);
              }
            }

          }
        }
      
      break;
    }
  }
  
  newContainer(newItemArr);
}

var newContainer = function(newItemArr) {

  let itemArr = document.getElementsByClassName('main__bestoffers-stock-item-image');
  let itemPrice = document.getElementsByClassName('main__bestoffers-stock-item-arrow_down-price');
  let images = document.getElementsByTagName('img');
  console.log(newItemArr)
  // for (let k = 0; k < itemArr.length; k++) {

  //   itemArr[k].style.display = 'none';
  // }
  for (let i = 0; i < newItemArr.length; i++) {
    itemArr[i].id = newItemArr[i].id;
    images[i].src = newItemArr[i].thumbnail;
    itemArr[i].nextElementSibling.firstChild.nextSibling.innerHTML = newItemArr[i].title;
    // if (newItemArr[i].price !== newItemArr[i].discountedPrice) {
    //   itemPrice[i].classList.add('cat');
    //   a = document.createElement('p');
    //   a.className = 'main__bestoffers-stock-item-old cat';
    //   a.innerHTML = '£' + newItemArr[i].price;
    //   itemPrice[i].appendChild(a)
    // } else {
      itemPrice[i].innerHTML = '£' + newItemArr[i].discountedPrice;

    // }
  }
  for (let j = newItemArr.length; j < itemArr.length; j++) {
    itemArr[j].style.display = 'none';
    itemArr[j].nextElementSibling.style.display = 'none';

  }
}



container.addEventListener('click', function(event) {
	let view = event.target.closest('.main__bestoffers-stock-item-image');
	if(!view) return;
	if(!container.contains(view)) return;
	showItem(view);
})

var showItem = function(view) {
  localStorage.setItem("toShowItem", view.id);
  document.location.href = "item.html";
}




