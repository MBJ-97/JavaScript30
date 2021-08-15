    const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
        if (!audio) return;

        audio.currentTime = 0; // multiple starts
        audio.play(); 
        key.classList.add('playing'); //for adding the animation
    }

    const removeTransition = (e) => {
        e.target.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key'); // raking the animation off when transition ends
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', playSound);
