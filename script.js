document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
        box.classList.add('expanded');
        
        
        if (!box.querySelector('.options')) {
            const options = document.createElement('div');
            options.classList.add('options');
            options.innerHTML = `
                <p>Choose Color:</p>
                <button style="background-color: red;">Red</button>
                <button style="background-color: blue;">Blue</button>
                <p>Choose Size:</p>
                <button>Small</button>
                <button>Large</button>
            `;
            box.appendChild(options);
        }
    });
});
