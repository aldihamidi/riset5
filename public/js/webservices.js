var baseUrl ="http://localhost:8080";

//Ajax Detail App
$('.proyek').each(function() {
    var appID = $(this).attr("data-id");
    var url = '/webservice/ajax_edit';  //adjust according to your site/setup
    $.post(url,
        {
            id: appID,
        },
        function (data, status) {
            if (status == 'success') {
                data = $.parseJSON(data);
                if(data.token==null) data.token ="-";
                $('#token_app'+appID).text(data.token);

                $('#req_date'+appID).text(data.req_date);
                
                if(data.req_acc==null) data.req_acc ="-";
                $('#req_acc'+appID).text(data.req_acc);

                $('#deskripsi'+appID).text(data.deskripsi);
                var string="";
                data.scope.map((item, index)=>{
                    string =string+item.scope_dev+" ["+item.scope+"]<br>"
                    });
                $('#scope'+appID).html(string);
                       

            } else {
                alert('No message available');
            }
        },
    );
});

$(".proyek").click(function() {
    if (!$(this).hasClass('border-primary')) {
        $(this).addClass('border-primary')
        $(this).css("border-width", "2px")
       
        var $this = $(this);
        $(this).next().removeClass('hidden')
        setTimeout(function() {
            $this.next().removeClass('opacity-0');
        }, 30);


        $(this).next().children().first().children().eq(1).click(function() {
            $(this).removeClass('notchoose').addClass('choosed')
            $(this).prev().removeClass('choosed').addClass('notchoose')

            $(this).parent().next().next().removeClass('hidden')
            $(this).parent().next().addClass('hidden')
        })

        $(this).next().children().first().children().eq(0).click(function() {
            $(this).removeClass('notchoose').addClass('choosed')
            $(this).next().removeClass('choosed').addClass('notchoose')

            $(this).parent().next().next().addClass('hidden')
            $(this).parent().next().removeClass('hidden')
        })

    } else {
        $(this).removeClass('border-primary')
        $(this).css("border-width", "1px")
        // $(this).next().addClass('hidden')

        $(this).next().addClass('opacity-0')
        $(this).next().addClass('hidden')
    }
})