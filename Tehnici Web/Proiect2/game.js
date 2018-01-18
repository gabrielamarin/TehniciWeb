jQuery(document).ready(function(){
    function gameover(){
        jQuery('.mole').css({'top':'100%'});
        jQuery('.score').html('GAME OVER');
        jQuery('.score').append('<div class="try-again">TRY AGAIN?</div>');
    }
    function start(){
        var add = 0;
        jQuery('.mole').animate({'top':'50%'},5000,function(){
            gameover();
            jQuery('.try-again').click(function(){
                start();
            });
        });

        jQuery('.score').html('Score: ' + add);

        jQuery('.mole').hover(function(){
            jQuery(this).css('background-image','url(hurt.bmp)');
            jQuery(this).stop().animate({'top':'100%'},300,function(){
                add = add - (-1);
                jQuery('.score').html('Score: ' + add);
                jQuery(this).css('background-image','url(mole.bmp)');
                jQuery(this).animate({'top':'50%'},5000,function(){
                    gameover();
                    jQuery('.try-again').click(function(){
                        start();
                    });
                });
            });
        });
    }
    start();
});