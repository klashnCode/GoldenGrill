$(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('orders/');


    /************************** */
    beforeQuery.on('value', function success(data) {
        if (data) {
            let orders = '';
            $.each(data.val(), function (key, value) {
                let oreder_number = key,
                    oreder_total = value.total,
                    total_products = value.products,
                    table = value.table,
                    name = value.name,
                    ord = value.ord;

                orders += `<div class="order-id ab">${table}
                                <span class="order-name" >${name}</span>
                                <span class="order-ord">${ord}</span>
                                <span class="order-total">ש${oreder_total}</span>
                                <span class="delete" data-id=${key}>X</span>
                                </div>
                                <div class="order-details">`;
                $.each(total_products, function (key, value) {
                    orders += `<div>${value.item} | ${value.price}</div>`
                });
                orders += `</div>`;
            });
            $('.append-orders').html(orders);

            $(".delete").click(function () {
                let thekey = $(this).data('id');
                beforeQuery.child(thekey).remove();
            })
            /*
            $(".rady").click(function () {
                alert("zb");

                $('.order-details').append(`<div class="radyText">Order Set Successfully</div>`);
            })

*/
            /*
                        $(document).on('click', '.removeme', function () {
                            $(this).parent().remove();
            
                        });
                        $('.removeme').append('<tr><td colspan="3">Order Set Successfully</td></tr>');*/
        }

    });

    $(document).on('click', '.order-id', function () {
        $(this).next('.order-details').slideToggle();
    })
});
