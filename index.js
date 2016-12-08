$(document).ready(function() {
            const $graph = $('.graph');
        $('#plot').click(function(e){
            e.preventDefault();
            const from = parseFloat($('.from').val());
            const to = parseFloat($('#to').val());
            const fun = $('#Func').val();
            const points = [x, eval(fun)];
            var x=from;
            var dx=(from+to)/100;
            setInterval(function () {
               if (x<to){
                   {
                       points.push([x, eval(fun)])
                   }
                   x=x+dx;
                }
                var f_data=[{label: fun, data: points}];
                $.plot($graph, f_data, {});
            }, 100);

        })
    });