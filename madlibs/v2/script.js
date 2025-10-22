(function(){
    'use strict';
    console.log('reading js');

    const madlibQuestions = document.querySelector('#madlib-questions');
    const madlibOutput = document.querySelector('#madlib-output');
    const madlibWriting = document.querySelector('#madlib-writing');
    const button = document.querySelector('button');
    const error = document.querySelector('#errorMessage');

    madlibQuestions.addEventListener('submit', function(event){
        event.preventDefault();
        
        const noun1 = document.querySelector('#noun').value;
        const name = document.querySelector('#name').value;
        const adjective1 = document.querySelector('#adjective').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const verb1 = document.querySelector('#verb').value;
        const verb2 = document.querySelector('#verb2').value;
        const adverb = document.querySelector('#adverb').value;
        const exclamation = document.querySelector('#exclamation').value;

        let errorMessage;

        if(noun1 == ''){
            errorMessage = '*Please enter a noun';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(name == ''){
            errorMessage = '*Please enter a name';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(adjective1 == ''){
            errorMessage = '*Please enter an adjective';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(adjective2 == ''){
            errorMessage = '*Please enter another adjective';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(verb1 == ''){
            errorMessage = '*Please enter a verb';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(verb2 == ''){
            errorMessage = '*Please enter another verb';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(adverb == ''){
            errorMessage = '*Please enter an adverb';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else if(exclamation == ''){
            errorMessage = '*Please enter an exclamation';
            button.classList.add('button-animation');
            button.addEventListener('animationend', function(){
                button.classList.remove('button-animation');
            });
        } else {
            madlibWriting.innerHTML = `<p>There once was a <span>${noun1}</span> named <span>${name}</span>. They had been living peacefully in <span>${adjective1}</span> village, until one day a <span>${adjective2}</span> witch appeared at their doorstep. The witch offered the <span>${noun1}</span> a potion that would make them <span>${verb1}</span> <span>${adverb}</span>. The <span>${noun1}</span> accepted, thinking they got a great deal.</p> 
            <p>However, when the sun set that night the <span>${noun1}</span> became possessed <span>${verb2}</span> uncontrollably. When the sun rose a new witch appeared at the doorstep, this time offering a spell that would nullify the potion’s effects. The <span>${noun1}</span> replied “<span>${exclamation}</span>!”.</p>`;

            madlibQuestions.style.display = 'none';
            madlibOutput.style.display = 'block';
            madlibOutput.classList.add('fade');
            madlibOutput.addEventListener('animationend', function(){
                madlibOutput.classList.remove('fade');
            });
            document.querySelector('#noun').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#adjective2').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#verb2').value = '';
            document.querySelector('#adverb').value = '';
            document.querySelector('#exclamation').value = '';
        }

        error.innerHTML = errorMessage
        
    });
})();