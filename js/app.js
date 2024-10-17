window.onload = () => {
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const python = document.getElementById('python');
    const java = document.getElementById('java');
    
    const all = document.getElementById('all-btn');

    const htmlCard = document.querySelectorAll('div[class*="html"]');
    const cssCard = document.querySelectorAll('div[class*="css"]');
    const pythonCard = document.querySelectorAll('div[class*="python"]');
    const javaCard = document.querySelectorAll('div[class*="java"]');


    const filterDiv = document.querySelectorAll('div[class*="filterDiv"]');

    function hide (a){
        a.forEach(element => {
            element.classList.add('invisible');
        });
    }

    function show (a){
        a.forEach(element => {
            element.classList.remove('invisible');
        });
    }
    
    html.addEventListener('click', () => {
       hide(filterDiv);
       show(htmlCard);
        
    });
    css.addEventListener('click', () => {
        hide(filterDiv);
        show(cssCard);
    });
    python.addEventListener('click', () => {
        hide(filterDiv);
        show(pythonCard);
    });
    java.addEventListener('click', () => {
        hide(filterDiv);
        show(javaCard);
    });
    all.addEventListener('click', () => {
        show(filterDiv);
    });

}