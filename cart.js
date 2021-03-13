
$(document).ready(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('menu/')
    const beforecartQuery = database.ref('orders/')

    /************* */


    /******************** */


    beforeQuery.on('value', function success(data) {
        if (data) {
            let category1 = '',
                category2 = '',
                category3 = '',
                category4 = '',
                category5 = '',
                category6 = '';

            $.each(data.val(), function (key, value) {
                let id = key,
                    category = value['category'],
                    title = value['title'],
                    price = value['price'],
                    comint = value['comint'],
                    time = value['time'],
                    image = value['image'];

                if (category == 'category1') {
                    category1 += `
                    <div class="card" style="display: inline-block;">
                    <div id= ${key}>
                    <img src=${image} alt="Avatar" style="width:100%; height: 100px;">
                    <div class="container">
                        <h4><b>${title}</b></h4>
                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                        
                        <div data-id=${key} id="add-to-cart" class="fa fa-shopping-cart  cartcard add-to-cart"></div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category2') {
                    category2 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}');">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    <div><i class="fa fa-clock-o"></i>
                                        <p>${time} דקות</p>
                                    </div>
        
                                    <div><i class="fa fa-money"></i>
                                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="content">${comint}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart"></div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category3') {
                    category3 += `
                    <div class="card" style="display: inline-block;">
                    <div id= ${key}>
                    <img src=${image} alt="Avatar" style="width:100%; height: 100px;">
                    <div class="container">
                        <h4><b>${title}</b></h4>
                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                        
                        <div data-id=${key} id="add-to-cart" class="fa fa-shopping-cart  cartcard add-to-cart"></div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category4') {
                    category4 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}');">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    <div><i class="fa fa-clock-o"></i>
                                        <p>${time} דקות</p>
                                    </div>
        
                                    <div><i class="fa fa-money"></i>
                                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="content">${comint}</div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category5') {
                    category5 += `
                    <div class="flexbox">
                    <div id= ${key}>
                    <div class="food-card"
                        style="background-image:url('${image}');">
                        <div class="food-card-content">
                            <div class="heading show">
                                <h2>${title}</h2>
                            </div>
                            <div class="hover-content">
                                <div class="food-card-properties">
                                    <div><i class="fa fa-clock-o"></i>
                                        <p>${time} דקות</p>
                                    </div>
        
                                    <div><i class="fa fa-money"></i>
                                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="content">${comint}
                                </div>
                                <div data-id=${key} class="fa fa-shopping-cart thcardcart add-to-cart" id="add-to-cart"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                          `;
                } else if (category == 'category6') {
                    category6 += `
                    <div class="card" style="display: inline-block;">
                    <div id= ${key}>
                    <img src=${image} alt="Avatar" style="width:100%; height: 140px;">
                    <div class="container">
                        <h4><b>${title}</b></h4>
                        <p>${parseFloat(price).toFixed(2)} ₪</p>
                        
                        <div data-id=${key} id="add-to-cart" class="fa fa-shopping-cart  cartcard add-to-cart"></div>
                    </div>
                    </div>
                </div>
                          `;
                }

            });
            $('.category1').html(category1);
            $('.category2').html(category2);
            $('.category3').html(category3);
            $('.category4').html(category4);
            $('.category5').html(category5);
            $('.category6').html(category6);

            /*
                        var rolIV;
                        function Ready(){
                            rolIV = document.getElementById('pri').value;
                        }
                    document.getElementById('add-to-cart').onclick = function(){
                        Ready();
                        
                        firebase.database().ref('menu/'+rolIV).on('value',function(snapshot){
                            document.getElementById('pri').value = snapshot.val().price;
                        });
                        
                          
                       
                    }
            
            */
            $('.add-to-cart').click(function () {
                let thekey = $(this).data('id');
                firebase.database().ref('menu/' + thekey).on('value', function (snapshot) {
                    let appenddata = `
                             <tr>
                             <td class="carttitle">${snapshot.val().title}</td>
                             <td class="cartprice">${snapshot.val().price} ₪</td>
                             <td class="removeme">X</td>
                             </tr>`;
                    $('.cart').append(appenddata);
                });
                /*
                                var x = document.getElementById("mytable").value;
                                console.log(x)
                                
                                                let thekey = $(this).data('id');
                                                let title = $(`#${thekey} > .title`).text(),
                                                    price = $(`#${thekey} > .price`).text(),
                                                    slice = price.indexOf('.');
                                
                                                price = price.slice(0, slice);
                                
                                                console.log("title:", title);
                                                console.log("price:", parseFloat(price).toFixed(2));
                                                let appenddata = `
                                                         <tr>
                                                             <td class="carttitle">${title}</td>
                                                             <td class="cartprice">${parseFloat(price).toFixed(2)} ש</td>
                                                             <td class="removeme">X</td>
                                                             </tr>`;
                                                $('.cart').append(appenddata);
                                */





            });


            $('.cart-icon').click(function () {
                $('.cart-container').slideToggle("slow");

            })


            $(document).on('click', '.removeme', function () {

                $(this).parent().remove();
            });

            $(document).on('click', '.removeme,.cart-icon,.thcardcart,.cartcard', function () {
                total();
                let totalrows = $('.cartprice').length,
                    itemcounter = $('.totalitems');
                itemcounter.fadeOut('slow', function () {
                    $(this).html(totalrows).fadeIn('slow');
                })

            });
            const total = () => {
                let allcareproduct = $('.cartprice'),
                    total = 0;
                if (document.getElementById("ord").checked == true) {
                    total += 10;
                }
                for (let i = 0; i < allcareproduct.length; i++) {
                    var getprice = $('.cartprice').eq(i).text();
                    total += parseInt(getprice);
                }
                $('.total').text(`Total : ${parseFloat(total).toFixed(2)} ₪`);
                if (total > 1) {
                    $('.send-oreder').slideDown();
                    $('.oredDetal').slideDown();
                } else {
                    $('.send-oreder').slideUp();
                    $('.oredDetal').slideUp();
                }
                return total;

            }
            $('#phone').on('input change', function () {
                if ($(this).val() != '') {
                    $('#send-oreder').prop('disabled', false);
                }
                else {
                    $('#send-oreder').prop('disabled', true);
                }
            });
            $(document).on('click', '.ord', function () {
                if (document.getElementById("ord").checked == true) {
                    alert("תוספת דמה משלוח 10₪")
                } else {
                    alert("המשלוח התבטל אשר להוריד 10₪ דמה המשלוח")
                }
                total();
            });

            /**send order */
            let t = '';
            $(document).on('click', '.send-oreder', function () {
                var oredereditems = [];
                let totalrows = $('.cartprice').length;

                for (let i = 0; i < totalrows; i++) {
                    var items =
                    {
                        item: $('.carttitle').eq(i).text(),
                        price: $('.cartprice').eq(i).text(),
                    }
                    oredereditems.push(items);
                }

                if (document.getElementById("ord").checked == true) {
                    t = 'כן'
                } else {
                    t = 'לא'
                }
                console.log(t)
                let newid = beforecartQuery.push();
                newid.set({
                    products: oredereditems,
                    total: total(),
                    /**document.getElementById("mytable").value, */
                    table: document.getElementById("phone").value,
                    name: document.getElementById("fullname").value,
                    ord: t,
                },


                    function (error) {
                        if (!error) {
                            $('.removeme').click();
                            /**'<tr><td colspan="3">Order Set Successfully</td></tr>' */
                            $('.cart').append(alert("המשלוח נשלח אתה תקבל סיחה מהשליח עוד קמה דקות תודה לכניתך"));

                            setTimeout(function () {
                                $('.cart-toggle').click();
                            }, 2500);
                        }
                    });

            });





        } else { console.log('NO data Found') }




    });

});


