(function() {
    let button = document.getElementById('toggle-menu')
    button.addEventListener('click',function(event) {
        event.preventDefault();
        let menu = document.getElementById('main-menu');
        menu.classList.toggle('is-open');
    })
    });

    $('.smooth').on('click',function(){
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#'+ this.id
        });

        return false;
    });

