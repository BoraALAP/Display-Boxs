const firstScreen = {
	title: "Home",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur odio non accumsan auctor. Fusce id accumsan diam. Pellentesque dignissim finibus nulla. Quisque euismod massa nibh, a efficitur purus maximus eget. Nam dignissim justo eget tortor vestibulum imperdiet. Mauris tempor quam egestas, tincidunt purus sit amet, eleifend leo. Pellentesque vestibulum metus at lectus venenatis, at dignissim nisi imperdiet. Donec congue accumsan dolor, sed sollicitudin nisl venenatis ac. Nunc semper faucibus malesuada. Aenean semper urna quis nibh suscipit pretium. Fusce lacinia ante eget facilisis sollicitudin. In pulvinar tempus nibh id fermentum. Duis purus lacus, tincidunt egestas eleifend vel, pretium id lectus."
}

const secondScreen = {
	title: "Sign in",
	description: "Maecenas et finibus mauris, ultricies rutrum dui. Integer molestie cursus semper. Nunc quam mauris, tempus vel imperdiet sit amet, condimentum sed nisl. Duis non ligula porttitor neque scelerisque posuere at a enim. Cras semper tortor at leo facilisis, sit amet egestas velit vulputate. Fusce porttitor lorem eget erat imperdiet lobortis. Etiam nec lobortis enim, in ultrices risus. Aenean vitae lorem malesuada, pellentesque felis ut, ornare justo. Aliquam nisi nulla, condimentum at ullamcorper in, vulputate eu dolor. In lacinia ligula eu vestibulum aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc euismod ultricies urna sit amet efficitur. Vivamus scelerisque suscipit tortor vitae sagittis."}

const thirdScreen = {
	title: "Announce",
	description: "Etiam molestie ante ac odio vulputate egestas. Nam nunc felis, consectetur tempus dictum ac, cursus sit amet orci. Quisque sed interdum odio, vel dictum leo. Morbi libero nulla, volutpat a tempus eget, accumsan sed leo. Ut velit nisi, malesuada id enim non, lacinia placerat urna. Nunc a dui quis diam laoreet euismod. Suspendisse hendrerit lorem ac interdum lobortis. Quisque eleifend eros et sapien ullamcorper, sit amet finibus purus mattis. Nulla nec magna iaculis, consectetur nibh sit amet, congue nisi. Donec maximus lobortis euismod."}

const fourthScreen = {
	title: "Collect Who drinks what",
	description: "Integer porttitor, est et pharetra condimentum, felis quam hendrerit velit, at interdum neque dui vel massa. Nunc euismod iaculis elit non hendrerit. Integer in mauris pretium, convallis justo ut, pellentesque magna. Vivamus et placerat turpis, ac suscipit metus. Duis tempor libero massa, nec pretium dui lobortis ut. Aliquam erat volutpat. Nam lacinia mattis dictum. Suspendisse potenti. Aenean hendrerit turpis vel metus tempor eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus."}

const descriptionContainer = $('.description-container');
const pageTitle = document.querySelector('.description-container > h1');
const pageDescription = document.querySelector('.description-container > h4');




const box1 = document.querySelector('.box:nth-of-type(1)');
const box2 = document.querySelector('.box:nth-of-type(2)');
const box3 = document.querySelector('.box:nth-of-type(3)');
const box4 = document.querySelector('.box:nth-of-type(4)');

const pageTitleOnBox1 = document.querySelector( '.box:nth-of-type(1)>h3');
const pageTitleOnBox2 = document.querySelector( '.box:nth-of-type(2)>h3');
const pageTitleOnBox3 = document.querySelector( '.box:nth-of-type(3)>h3');
const pageTitleOnBox4 = document.querySelector( '.box:nth-of-type(4)>h3');


// for(var i= 1; i < 4; i += 1){
	
// }

box1.addEventListener('click', () =>{
	descriptionContainer.addClass('selected');
	
	box1.className += " selected-box";

	pageTitle.innerHTML = firstScreen.title;
	pageDescription.innerHTML = firstScreen.description;
})

box2.addEventListener('click', () =>{
	descriptionContainer.addClass('selected');
	box2.className += " selected-box";
	pageTitle.innerHTML = secondScreen.title;
	pageDescription.innerHTML = secondScreen.description;

})

box3.addEventListener('click', () =>{
	descriptionContainer.addClass('selected');
	box3.className += " selected-box";
	pageTitle.innerHTML = thirdScreen.title;
	pageDescription.innerHTML = thirdScreen.description;

})

box4.addEventListener('click', () =>{
	descriptionContainer.addClass('selected');
	box4.className += " selected-box";
	pageTitle.innerHTML = fourthScreen.title;
	pageDescription.innerHTML = fourthScreen.description;

})




box1.addEventListener('mouseover', () =>{
	pageTitleOnBox1.innerHTML = firstScreen.title;
})

box2.addEventListener('mouseover', () =>{
	pageTitleOnBox2.innerHTML = secondScreen.title;
})

box3.addEventListener('mouseover', () =>{
	pageTitleOnBox3.innerHTML = thirdScreen.title;
})

box4.addEventListener('mouseover', () =>{
	pageTitleOnBox4.innerHTML = fourthScreen.title;
})


// box1.click(function(){
// 	descriptionContainer.addClass('selected');

// 	pageTitle.innerHTML = firstScreen.title;
// 	pageDescription.innerHTML = firstScreen.description;	
// })


// box2.click(function(){
// 	descriptionContainer.addClass('selected');

// 	pageTitle.innerHTML = secondScreen.title;
// 	pageDescription.innerHTML = secondScreen.description;

// })

// box3.click(function(){
// 	descriptionContainer.addClass('selected');

// 	pageTitle.innerHTML = thirdScreen.title;
// 	pageDescription.innerHTML = thirdScreen.description;

// })

// box4.click(function(){
// 	descriptionContainer.addClass('selected');

// 	pageTitle.innerHTML = fourthScreen.title;
// 	pageDescription.innerHTML = fourthScreen.description;

// })




// box1.mouseover(function(){
// 	pageTitleOnBox1.innerHTML = firstScreen.title;
// })

// box2.mouseover(function(){
// 	pageTitleOnBox2.innerHTML = secondScreen.title;
// })

// box3.mouseover(function(){
// 	pageTitleOnBox3.innerHTML = thirdScreen.title;
// })

// box4.mouseover(function(){
// 	pageTitleOnBox4.innerHTML = fourthScreen.title;
// })