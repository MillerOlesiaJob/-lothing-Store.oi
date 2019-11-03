var itemArr = document.getElementsByClassName('main__bestoffers-stock-item-image');
var addBag = document.getElementById('add-bag');
var addBag1 = document.getElementById('add-bag1');

var bagCount = document.getElementById('count-bag');
var bagBill = document.getElementById('bill-bag');
var itemPrice = document.getElementById('item-price');
var container = document.getElementById('container');
var old = document.getElementById('old-price');
var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('header__navbar');
var container2 = document.getElementById('container2')
var allProducts = [];
var goodsArr = [];

var allProducts = [];
var firstArr = [];


hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  // nav.style.display = 'block';
  nav.classList.toggle('active');

})

document.getElementById('icon').addEventListener('click', function() {
  document.getElementById('window').classList.toggle('active-window');
})


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
  thumbnail: 'img/jeans2.png', // replace with image extracted from item layout
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
  thumbnail: 'img/jeans2.png', // replace with image extracted from item layout
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

bestOffer = {
	discount: 15,
	left: [
			'8c061815-6a7d-4465-bb78-1bdc6c5adebf', // Only Skinny Jeans
			'e50a3153-7833-4b85-b412-1a39d215fd38', // Oversized Cardigan
			'bec71daa-d133-473d-bbb0-1ee0a427a17d' // Only Busted Knee Jean
	],
	right: [
			'5677f851-1c4a-4e9b-80e9-16d1e6265257', // Levi's Jeans for women,
			'07cf6ce2-6eee-4e78-a441-f257fdea7ed6' // Boyfriend T-Shirt with Bohemian print
	]
};

var clientGood1 = {
	id: '8c061815-6a7d-4465-bb78-1bdc6c5adebf',
	color: '1',
	price:'1',
	size:'1',
  image:'img/black_f.png',
	quantity: '1',
	stock: true
};

var clientGood2 = {
	id: '5677f851-1c4a-4e9b-80e9-16d1e6265257',
	color: '1',
	price:'1',
	size:'1',
  image:'img/jeens.png',
	quantity: '1',
	stock: true
};

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
  let a = localStorage.getItem('billBag');
  alert('hello')
  console.log(a)
  if (a == '£NaN') {
    bagCount.innerHTML = '';
		bagBill.innerHTML = '';
  } else {
    bagCount.innerHTML = localStorage.getItem('countBag');
		bagBill.innerHTML = localStorage.getItem('billBag');
    }
	}

addBag1.addEventListener('click', function() {
    bagChange();
    console.log('hel')
    var allProducts = JSON.parse(localStorage.getItem("productInfo"));
    if (allProducts == null || allProducts.length == undefined) {
      firstArr.push(clientGood1);
      firstArr.push(clientGood2);
  
      localStorage.setItem("productInfo", JSON.stringify(firstArr));
    } else {
      allProducts.push(clientGood1);
      allProducts.push(clientGood2);
      localStorage.setItem("productInfo", JSON.stringify(allProducts));
    }
    
    document.location.href = "shopping-bag.html";
    
    
  
  })
addBag.addEventListener('click', function() {
  bagChange();
  console.log('hel')
  var allProducts = JSON.parse(localStorage.getItem("productInfo"));
  if (allProducts == null || allProducts.length == undefined) {
		firstArr.push(clientGood1);
		firstArr.push(clientGood2);

    localStorage.setItem("productInfo", JSON.stringify(firstArr));
  } else {
		allProducts.push(clientGood1);
		allProducts.push(clientGood2);
    localStorage.setItem("productInfo", JSON.stringify(allProducts));
	}
	
  document.location.href = "shopping-bag.html";

  
  

})

var bagChange = function() {
  let count = +bagCount.innerHTML.replace(/[\(\)]+/g, '') + 2;
  localStorage.setItem('countBag', '('+count+')');
  bagCount.innerHTML = '('+count+')';
  // let bill = 
  console.log(bagBill.innerHTML);
  console.log(itemPrice.innerHTML.replace('=£', ''))
  re = /'=','£'/
  let bill = (+bagBill.innerHTML.replace('£', '') + (+itemPrice.innerHTML.replace('=£', ''))).toFixed(2);
  console.log(bagBill.innerHTML)
	bagBill.innerHTML = '£' + bill;
	localStorage.setItem('billBag', '£' + bill);
} 


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
  bagCount.innerHTML = localStorage.getItem('countBag');
	bagBill.innerHTML = localStorage.getItem('billBag');
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

container.addEventListener('click', function(event) {
	
	let up = event.target.closest('.left-up');
	if(!up) return;
	if(!container.contains(up)) return;
	showNewItem(up);
})

var showNewItem = function(up) {
	console.log(up.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling)
	let i = bestOffer.left.indexOf(up.parentElement.nextElementSibling.id)
	if (i == 0) {
		up.parentElement.nextElementSibling.id = bestOffer.left[2];
	} else {
		up.parentElement.nextElementSibling.id = bestOffer.left[i - 1];
	}
	for (let j = 0; j < catalog.length; j++) {
		if (up.parentElement.nextElementSibling.id == catalog[j].id) {
			up.parentElement.nextElementSibling.firstElementChild.src = catalog[j].thumbnail;
			up.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = catalog[j].title;
			up.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = '£'+ catalog[j].discountedPrice;
			clientGood1.id = catalog[j].id;
			clientGood1.image = catalog[j].thumbnail;

		}
	} 
	discountSum();
	

}

container.addEventListener('click', function(event) {
	
	let down = event.target.closest('.left-down');
	if(!down) return;
	if(!container.contains(down)) return;
	showNewItem1(down);
})

var showNewItem1 = function(down) {
	

	let i = bestOffer.left.indexOf(down.parentElement.parentElement.firstElementChild.nextElementSibling.id)
	if (i == 2) {
		down.parentElement.parentElement.firstElementChild.nextElementSibling.id = bestOffer.left[0];
	} else {
		down.parentElement.parentElement.firstElementChild.nextElementSibling.id = bestOffer.left[i + 1];
	}
	for (let j = 0; j < catalog.length; j++) {
		if (down.parentElement.parentElement.firstElementChild.nextElementSibling.id == catalog[j].id) {
			down.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src = catalog[j].thumbnail;
			down.parentElement.firstElementChild.innerHTML = catalog[j].title;
			down.parentElement.firstElementChild.nextElementSibling.innerHTML = '£'+ catalog[j].discountedPrice;
			clientGood1.id = catalog[j].id;
			clientGood1.image = catalog[j].thumbnail;

		}
	} 
	discountSum();
}


container.addEventListener('click', function(event) {
	
	let upR = event.target.closest('.right-up');
	if(!upR) return;
	if(!container.contains(upR)) return;
	showNewItemRight(upR);
	console.log(upR)
})

var showNewItemRight = function(upR) {
	console.log(upR)
	let i = bestOffer.right.indexOf(upR.parentElement.nextElementSibling.id)
	if (i == 0) {
		upR.parentElement.nextElementSibling.id = bestOffer.right[1];
	} else {
		upR.parentElement.nextElementSibling.id = bestOffer.right[i - 1];
	}
	for (let j = 0; j < catalog.length; j++) {
		if (upR.parentElement.nextElementSibling.id == catalog[j].id) {
			upR.parentElement.nextElementSibling.firstElementChild.src = catalog[j].thumbnail;
			upR.parentElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = catalog[j].title;
			upR.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = '£'+ catalog[j].discountedPrice;
			clientGood2.id = catalog[j].id;
			clientGood2.image = catalog[j].thumbnail;

		}
	} 
	discountSum();


}

container.addEventListener('click', function(event) {
	
	let down = event.target.closest('.right-down');
	if(!down) return;
	if(!container.contains(down)) return;
	showNewItemRight1(down);
})

var showNewItemRight1 = function(down) {
	

	let i = bestOffer.right.indexOf(down.parentElement.parentElement.firstElementChild.nextElementSibling.id)
	if (i == 1) {
		down.parentElement.parentElement.firstElementChild.nextElementSibling.id = bestOffer.right[0];
	} else {
		down.parentElement.parentElement.firstElementChild.nextElementSibling.id = bestOffer.right[i + 1];
	}
	for (let j = 0; j < catalog.length; j++) {
		if (down.parentElement.parentElement.firstElementChild.nextElementSibling.id == catalog[j].id) {
			down.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src = catalog[j].thumbnail;
			down.parentElement.firstElementChild.innerHTML = catalog[j].title;
			down.parentElement.firstElementChild.nextElementSibling.innerHTML = '£'+ catalog[j].discountedPrice;
			clientGood2.id = catalog[j].id;
			clientGood2.image = catalog[j].thumbnail;
		}
	} 
	discountSum();
}

var discountSum = function() {

	let coupl = document.getElementsByClassName('priceplus');
	
	let newP = document.getElementById('item-price')
	old.innerHTML = "";
	for (let i = 0; i < coupl.length; i++) {
		old.innerHTML = '£' + (+old.innerHTML.replace('£','') + +coupl[i].innerHTML.replace('£','')).toFixed(2);
	}
newP.innerHTML = '=£' + (+old.innerHTML.replace('£','') - 15).toFixed(2);



	
}

container2.addEventListener('click', function(event) {
  console.log('hello')
  let view2 = event.target.closest('.main__bestoffers-stock-item-image');
  if(!view2) return;
  if(!container2.contains(view2)) return;
  console.log(view2);
  showItem2(view2);
}) // для передачи информации о товаре на страницу продукта

var showItem2 = function(view) {
  localStorage.setItem("toShowItem", view.id);
  document.location.href = "item.html";
}