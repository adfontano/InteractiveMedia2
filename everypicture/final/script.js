(function(){
    'use strict';
    console.log('reading js');

    const cat = document.querySelector('#cat');
    const sketchbook = document.querySelector('#sketchbook');
    const mySwitch = document.querySelector('#switch');
    const docs = document.querySelector('#docs');
    const bedroom = document.querySelector('#overlay');
    const header = document.querySelector('h1');
    let fadeOut = false;

    cat.addEventListener('mouseover', function(){
        document.querySelector('#bubble-4').style.display = 'block';
    });
    cat.addEventListener('mouseout', function(){
        document.querySelector('#bubble-4').style.display = 'none';
    });

    sketchbook.addEventListener('mouseover', function(){
        document.querySelector('#bubble-3').style.display = 'block';
    });
    sketchbook.addEventListener('mouseout', function(){
        document.querySelector('#bubble-3').style.display = 'none';
    });

    mySwitch.addEventListener('mouseover', function(){
        document.querySelector('#bubble-1').style.display = 'block';
    });
    mySwitch.addEventListener('mouseout', function(){
        document.querySelector('#bubble-1').style.display = 'none';
    });

    docs.addEventListener('mouseover', function(){
        document.querySelector('#bubble-2').style.display = 'block';
    });
    docs.addEventListener('mouseout', function(){
        document.querySelector('#bubble-2').style.display = 'none';
    });

    header.addEventListener('click', function(){
        if(fadeOut == false){
            bedroom.style.display = 'block';
            bedroom.classList.add('fade-in');
            document.querySelector('h1').innerHTML= 'Not anymore...'
            setTimeout(function(){
                bedroom.style.opacity = '1';
                bedroom.classList.remove('fade-in');
                fadeOut = true;
            },2000); 
        }
    });
})();