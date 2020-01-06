window.onload=function() {
    $(document).on('show.bs.modal','.modal', function(e){
        $(e.relatedTarget.attributes['data-target'].value).appendTo('body');
    });

}



