(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("OPH6");var a=t("kdz2"),i=t("So/2"),s=t.n(i),c=document.querySelector(".js-menu"),o=document.querySelector(".js-switch-input"),l=document.querySelector("body"),r=localStorage.getItem("theme"),d="light-theme",p="dark-theme",u=s()(a);c.insertAdjacentHTML("beforeend",u),o.addEventListener("change",(function(e){if(e.target.checked)return l.classList.remove(d),l.classList.add(p),void localStorage.setItem("theme",p);l.classList.remove(p),l.classList.add(d),localStorage.setItem("theme",d)})),r===p?(o.checked=!0,l.classList.add(p)):(o.checked=!1,l.classList.add(d))},"So/2":function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,i){var s,c,o=null!=n?n:e.nullContext||{},l=e.hooks.helperMissing,r="function",d=e.escapeExpression,p=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="menu__item">\n    <div class="card">\n        <img src="'+d(typeof(c=null!=(c=p(t,"image")||(null!=n?p(n,"image"):n))?c:l)===r?c.call(o,{name:"image",hash:{},data:i,loc:{start:{line:4,column:18},end:{line:4,column:27}}}):c)+'" alt="'+d(typeof(c=null!=(c=p(t,"name")||(null!=n?p(n,"name"):n))?c:l)===r?c.call(o,{name:"name",hash:{},data:i,loc:{start:{line:4,column:34},end:{line:4,column:42}}}):c)+'" class="card__image" />\n        <div class="card__content">\n            <h2 class="card__name">'+d(typeof(c=null!=(c=p(t,"name")||(null!=n?p(n,"name"):n))?c:l)===r?c.call(o,{name:"name",hash:{},data:i,loc:{start:{line:6,column:35},end:{line:6,column:43}}}):c)+'</h2>\n            <p class="card__price">\n                <i class="material-icons">monetization_on</i>'+d(typeof(c=null!=(c=p(t,"price")||(null!=n?p(n,"price"):n))?c:l)===r?c.call(o,{name:"price",hash:{},data:i,loc:{start:{line:8,column:61},end:{line:8,column:70}}}):c)+' кредитов\n            </p>\n            <p class="card__descr">\n                '+d(typeof(c=null!=(c=p(t,"descr")||(null!=n?p(n,"descr"):n))?c:l)===r?c.call(o,{name:"descr",hash:{},data:i,loc:{start:{line:11,column:16},end:{line:11,column:25}}}):c)+'\n            </p>\n            <ul class="tag-list">\n'+(null!=(s=p(t,"each").call(o,null!=n?p(n,"ingredients"):n,{name:"each",hash:{},fn:e.program(2,i,0),inverse:e.noop,data:i,loc:{start:{line:14,column:16},end:{line:16,column:25}}}))?s:"")+'            </ul>\n        </div>\n\n        <button class="card__button button">\n            <i class="material-icons button__icon">shopping_cart</i>В корзину</button>\n    </div>\n</li>\n'},2:function(e,n,t,a,i){return'                <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,i){var s;return null!=(s=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?s:""},useData:!0})},kdz2:function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c292ab9ab10511915b17.js.map