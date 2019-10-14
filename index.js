var mainItems = items.results.map(function(item){
    if(item.currency_code === "USD"){
        item.currency_code = "$"
    } else if(item.currency_code === "GBP"){
        item.currency_code = "&pound;"
    } else if(item.currency_code === "EUR"){
        item.currency_code = "&euro;"
    } 
    if(item.who_made.includes("i")){
        item.who_made = "Someone special"
    }
    if(item.when_made==="made_to_order"){
        item.when_made = "Made to order"
    }
    if(item.when_made === "2010_2018"){
        item.when_made = "2010 - 2018"
    } else if(item.when_made ==="2000_2009"){
        item.when_made = "2000-2009"
    }
    return `
                <div class="main-divs">
                    <a class="mainlist" href="${item.url}" target="_blank">
                        <div>
                            <ul class="mainlist">
                                <li class="img"><img src="${item.Images[0].url_fullxfull}" height="200px"width="250px"></li>
                                
                                <li class="title">${item.title}</li>
                                <li class="made-by">Made by: ${item.who_made}</li>
                                <li class="views">Reviews: ${item.views}</li>
                                <li>
                                    <div class="rating">
                                        <div class="rate"></div>
                                    </div>
                                </li>
                                <li class="price">${item.currency_code} ${item.price}</li>
                                <li class="when-made">${item.when_made}</li>
                            </ul>
                            <div class="heart"><i class="fa fa-heart"></i></div>
                        </div>
                    </a>
                </div>    
    `
})

var goodMain = mainItems.join("");
document.querySelector("#main-divs").innerHTML = goodMain;
console.log(goodMain);

