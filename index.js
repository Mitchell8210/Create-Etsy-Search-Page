var mainItems = items.results.map(function(item){
    return `
                <div class="main-divs">
                    <a href="#" target="_blank">
                        <div>
                            <ul>
                                <li class="img"><img src="${item.Images[0].url_fullxfull}" height="200px"width="250px"></li>
                                <li class="title">${item.title}</li>
                                <li class="made-by">Made by: ${item.who_made}</li>
                                <li class="rating"></li>
                                <li class="views">Views: ${item.views}</li>
                                <li class="price">$${item.price} ${item.currency_code}</li>
                                <li class="when-made">${item.when_made}</li>
                            </ul>
                        </div>
                    </a>
                </div>    
    `
})

var goodMain = mainItems.join("");
document.querySelector("#main-divs").innerHTML = goodMain;
console.log(goodMain);