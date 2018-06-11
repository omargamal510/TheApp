
/* Start loader */
$(document).ready(function(){
    $('div.load').delay(1850).fadeOut(1500, function(){scrollTo(0, 0)});
});

/* End loader */



/* Start the slider hide and show operation */


$(document).ready(function(){ // First button functionallty
    $('button.tour1').click(function(){
        $('div.slider-div').fadeOut();
        $('img.img1').fadeOut();
        $(this).fadeOut();

        $('button.tour2').fadeIn();
        $('img.img2').fadeIn();
        $('div.slider-div2').fadeIn();
    });
});


$(document).ready(function(){ // Second button functionallty
    $('button.tour2').click(function(){
        $(this).fadeOut();
        $('img.img2').fadeOut();
        $('div.slider-div2').fadeOut();

        $('button.tour3').fadeIn();
        $('img.img3').fadeIn();
        $('div.slider-div3').fadeIn();
    });
});

$(document).ready(function(){ // Third button functionallty
    $('button.tour3').click(function(){
        $(this).fadeOut();
        $('img.img3').fadeOut();
        $('div.slider-div3').fadeOut();

        $('button.tour1').fadeIn();
        $('img.img1').fadeIn();
        $('div.slider-div').fadeIn();
    });
});


/* End the slider hide and show operation */



/* Start Slider show and hide in small screens */
$(document).ready(function(){
    $('button.tour4').click(function(){
        $(this).hide();
        $('img.img1').hide();

        $('button.tour5').fadeIn();
        $('img.img2').fadeIn();
    });
});

$(document).ready(function(){
    $('button.tour5').click(function(){
        $(this).hide();
        $('img.img2').hide();

        $('button.tour6').fadeIn();
        $('img.img3').fadeIn();
    });
});

$(document).ready(function(){
    $('button.tour6').click(function(){
        $(this).hide();
        $('img.img3').hide();

        $('button.tour4').fadeIn();
        $('img.img1').fadeIn();
    });
});

/* End Slider show and hide in small screens */


/* Start showing and hide the opacity div in big screens */

$(document).ready(function(){
    $('button.download-bttn1').click(function(){
        $('div.opacity').fadeIn();
    });

    $('button.download-bttn2').click(function(){
        $('div.opacity').fadeIn();
    });

    $('button.download-about').click(function(){
        $('div.opacity').fadeIn();
    });

    $('input.x').click(function(){
        $('div.opacity').hide();
    });

    $('button.download-bttn-opacity').click(function(){
        $('div.opacity').hide();
    });
});


/* End showing and hide the opacity div in big screens */


/* Start Hide and show placeholder for inputs */

var input1 = document.getElementById('input1'),
    input2 = document.getElementById('input2'),
    input3 = document.getElementById('input3');

input1.onfocus = function() {
    'use strict';
    this.setAttribute('placeholder', '');
};

input1.onblur = function() {
    'use strict';
    this.setAttribute('placeholder', 'Name');
};

input2.onfocus = function() {
    'use strict';
    this.setAttribute('placeholder', '');
};

input2.onblur = function() {
    'use strict';
    this.setAttribute('placeholder', 'E-mail');
};


input3.onfocus = function() {
    'use strict';
    this.setAttribute('placeholder', '');
};

input3.onblur = function() {
    'use strict';
    this.setAttribute('placeholder', 'Message');
};

/* End Hide and show placeholder for inputs */

































