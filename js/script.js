
	var date = new Date();
	var today = date.getDate();
	var valueMonth = date.getMonth();
	var month ="";
	switch(valueMonth){
		case 0:
		month = "Jan";
		break;
		case 1:
		month = "Feb";
		break;
		case 2:
		month = "Mar";
		break;
		case 3:
		month = "Apr";
		break;
		case 4:
		month = "May";
		break;
		case 5:
		month = "Jun";
		break;
		case 6:
		month = "Jul";
		break;
		case 7:
		month = "Aug";
		break;
		case 8:
		month = "Sep";
		break;
		case 9:
		month = "Okt";
		break;
		case 10:
		month = "Nov";
		break;
		case 11:
		month = "Dec";
		break;
	}
	new WOW().init();
function dateTitle(){
	 document.querySelector('.date__text').innerHTML =today + " <br>" + month;
}
dateTitle();
	var	data =[
		{
            "theme": "Conversation",
            "sourceText": "Do you speak a language other than English?",
            "translation": "Говоришь ли ты на другом языке кроме английского?"
          },
          {
            "theme": "Eating out",
            "sourceText": "Excuse me. We would like to order, please.",
            "translation": "Извините, мы бы хотели сделать заказ."
          },
          {
            "theme": "Eating out",
            "sourceText": "A table for two, please.",
            "translation": "Столик на двоих, пожалуйста."
          },
          {
            "theme": "Eating out",
            "sourceText": "Is there a house specialty?",
            "translation": "Есть ли у заведения фирменное блюдо?"
          },
          {
            "theme": "Eating out",
            "sourceText": "Goodbye, please come again.",
            "translation": "До свидания, приходите ещë."
          },
          {
            "theme": "Eating out",
            "sourceText": "Excuse me, could you bring some more sugar, please?",
            "translation": "Извините, могли бы вы принести сахар, пожалуйста."
          },
          {
            "theme": "At the station",
            "sourceText": "Where can I buy a bus ticket?",
            "translation": "Где я могу купить билет на автобус?"
          },
          {
            "theme": "At the station",
            "sourceText": "Three tickets, please.",
            "translation": "Три билета, пожалуйста."
          },
          {
            "theme": "At the station",
            "sourceText": "I would like to reserve a seat.",
            "translation": "Я хочу забронировать место."
          },
          {
            "theme": "Travel",
            "sourceText": "Could you please show me where it is on the map?",
            "translation": "Могли бы вы, пожалуйста, показать мне это на карте?"
          },
          {
            "theme": "Travel",
            "sourceText": "Is it far from here?",
            "translation": "Это далеко отсюда?"
          },
          {
            "theme": "Travel",
            "sourceText": "Go straight and then turn right.",
            "translation": "Идите прямо, а затем поверните направо."
          },
          {
            "theme": "At the doctor",
            "sourceText": "I need a sick note. It has gotten worse.",
            "translation": "Мне нужна медицинская справка. Мне стало хуже."
          },
          {
            "theme": "At the hotel",
            "sourceText": "The heating does not work and my neighbour is too loud.",
            "translation": "Тут не работает отопление и мой сосед слишком шумный."
          },
          {
            "theme": "At the hotel",
            "sourceText": "I would like to change my room, because I requested a room with a view.",
            "translation": "Я хочу поменять свой номер, поскольку я просил комнату с красивым видом."
          },
          {
            "theme": "At the hotel",
            "sourceText": "I want to make a reservation for the room.",
            "translation": "Я хочу забронировать номер."
          },
          {
            "theme": "At the shopping mall",
            "sourceText": "Can I try it on?",
            "translation": "Можно я это примерю?"
          },
          {
            "theme": "At the shopping mall",
            "sourceText": "I would like another color.",
            "translation": "Я бы хотел другой цвет."
          },
          {
            "theme": "At the shopping mall",
            "sourceText": "Where is the cashdesk?",
            "translation": "Где касса?"
          },
          {
            "theme": "At the shopping mall",
            "sourceText": "I find it too expensive.",
            "translation": "Я считаю, что это слишком дорого."
          },
          {
            "theme": "At the shopping mall",
            "sourceText": "I would like to return my purchase and get a refund.",
            "translation": "Я хочу вернуть свою покупку и получить деньги обратно."
          }
	]
/*******JSON******
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'Phrases.json', false);
	xhr.send();
	if (xhr.status != 200) {
		alert( xhr.status + ': ' + xhr.statusText ); 
	} else {
var data = JSON.parse(xhr.responseText); // responseText 
}
/**************************************/
window.max = data.length - 1; 

/******adding a card***********/
function createCarde_One(){
	var randomT=Math.floor(Math.random()*(max-0+1))+0;
	newCardOne(randomT);
}
function createCarde_Two(){
	var randomT=Math.floor(Math.random()*(max-0+1))+0;
	newCardTwo(randomT)
}
function createCarde_Three(){
	var randomT=Math.floor(Math.random()*(max-0+1))+0;
	newCardThree(randomT);
}
/******random color*******/
function bgColor(){
	var color = ['rgba(97, 100, 232, 0.7)', 'rgba(191, 209, 31, 0.7)', 'rgba(222, 4, 4, 0.7)', 'rgba(255, 243, 23, 0.7)','rgba(50, 211, 219, 0.7)','rgba(157, 168, 168, 0.7)']; //Набоор цветов
	var random = Math.floor(Math.random()*(5-0+1))+0;
	var bgColor = color[random];
	return bgColor;
}
var count=0; 
/*****adding cards for the 1st column******/
function newCardOne(randomText){

	if(count<5){					
		var countTranslate=0;
		var title = data[randomText].theme;
		var descrip = data[randomText].sourceText;
		var translation = data[randomText].translation;
		var cologne = document.querySelector(".cologne__one");
		var add = document.querySelector(".add");
		var div = document.createElement('div');
		div.id = "cards";
		div.className = "aligner";
		div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
		var g = bgColor();
		div.style.backgroundColor = g;

		/**************Card illumination********************/
		div.addEventListener("mouseover", function(){
			div.style.backgroundColor = 'white';
		});
		div.addEventListener("mouseout", function(){
			div.style.backgroundColor = g;
		});
		cologne.insertBefore(div, add);

		/****text translation****/
		div.onclick =  function(){
			var interval = setInterval(translate,200);
			function translate(){
				if (countTranslate%2==0) {
					div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + translation + "</p>";
					countTranslate++;
				}
				else {
					div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
					countTranslate--;
				}
				clearInterval(interval);
			}
			function ret(){
				div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
			}
			setTimeout(ret,3500);
		}

		/*******Deleting a card************/
		
		$(div).on("taphold",function(){
			div.remove();
			document.querySelector(".add").style.display = "block";
			count--;
		});                       
		
		div.ondblclick = function(){
			div.remove();
			document.querySelector(".add").style.display = "block";
			count--;
		}
			if(count+1==5) document.querySelector(".add").style.display = "none"; 
			count++;
		}
	}
	
/*****adding cards for the 2st column******/
	var countTwo = 0;
	function newCardTwo(randomText){

		if(countTwo<5){
			var countTranslate=0;
			var title = data[randomText].theme;
			var descrip = data[randomText].sourceText;
			var translation = data[randomText].translation;
			var cologne = document.querySelector(".cologne__two");
			var add = document.querySelector(".add__two");
			var div = document.createElement('div');
			div.id = "cards";
			div.className = "aligner";
			div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
			var g = bgColor();
			div.style.backgroundColor = g;
			div.addEventListener("mouseover", function(){
				div.style.backgroundColor = 'white';
			});
			div.addEventListener("mouseout", function(){
				div.style.backgroundColor = g;
			});
			cologne.insertBefore(div, add);
			div.onclick =  function(){
				var interval = setInterval(translate,200);
				function translate(){
					if (countTranslate%2==0) {
						div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + translation + "</p>";
						countTranslate++;
					}
					else {
						div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
						countTranslate--;
					}
					clearInterval(interval);
				}
				function ret(){
					div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
				}
				setTimeout(ret,3500);
			}
			$(div).on("taphold",function(){
				div.remove();
				document.querySelector(".add__two").style.display = "block";
				countTwo--;
			});   
			div.ondblclick = function(){
				div.remove();
				document.querySelector(".add__two").style.display = "block";
				countTwo--;
			}
			if(countTwo+1==5) document.querySelector(".add__two").style.display = "none"; //Ограничение количества карточек и скрытие панели допавления карточки
			countTwo++;
		}
	}

/*****adding cards for the 3st column******/
	var countThree = 0;
	function newCardThree(randomText){

		if(countThree<5){
			var countTranslate=0;
			var title = data[randomText].theme;
			var descrip = data[randomText].sourceText;
			var translation = data[randomText].translation;
			var cologne = document.querySelector(".cologne__three");
			var add = document.querySelector(".add__three");
			var div = document.createElement('div');
			div.id = "cards";
			div.className = "aligner";
			div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
			var g = bgColor();
			div.style.backgroundColor = g;
			div.addEventListener("mouseover", function(){
				div.style.backgroundColor = 'white';
			});
			div.addEventListener("mouseout", function(){
				div.style.backgroundColor = g;
			});
			cologne.insertBefore(div, add);
			div.onclick =  function(){
				var interval = setInterval(translate,200);
				function translate(){
					if (countTranslate%2==0) {
						div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + translation + "</p>";
						countTranslate++;
					}
					else {
						div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
						countTranslate--;
					}
					clearInterval(interval);
				}
				function ret(){
					div.innerHTML = "<h3>" + title + "</h3>" + "<p>" + descrip + "</p>";
				}
				setTimeout(ret,3500);
			}
			$(div).on("taphold",function(){
				div.remove();
				document.querySelector(".add__three").style.display = "block";
				countThree--;
			});   
			div.ondblclick = function(){
				div.remove();
				document.querySelector(".add__three").style.display = "block";
				countThree--;
			}
			if(countThree+1==5) document.querySelector(".add__three").style.display = "none"; 
			countThree++;
		}
	}

	/**********Creating cards**********/
	var perem; 
	var ren = [];
	function randText(){								
		ren[0] = Math.floor(Math.random()*(max-0+1))+0;
		ren[1] = Math.floor(Math.random()*(max-0+1))+0;
		ren[2] = Math.floor(Math.random()*(max-0+1))+0;
		ren[3] = Math.floor(Math.random()*(max-0+1))+0;
		ren[4] = Math.floor(Math.random()*(max-0+1))+0;
		perem =ren.sort((a,b)=>a-b);
	}

	var s = data.sort((a,b)=>b.sourceText.split(" ").length-a.sourceText.split(" ").length);

	/*****Creating 5 cards in the 1nd column*****/
	function colOne(){
		randText();
		for(var j = 0; j<5; j ++){
			newCardOne(ren[j]);
		}
	}
	colOne();

	/*****Creating 5 cards in the 2nd column*****/
	function colTwo(){
		randText();
		for(var j = 0; j<5; j ++){
			newCardTwo(ren[j]);
		}
	}
	colTwo();
	
	/*****Creating 3 cards in the 3nd column*****/
	function colThree(){
		randText();
		for(var j = 0; j<3; j ++){
			newCardThree(ren[j]);
		}
	}
	colThree();