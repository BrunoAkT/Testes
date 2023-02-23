document.querySelectorAll('.tab-bar').forEach(function(item){
    
    let children = Array.from(item.children);
    let circleIndicator = item.querySelector('.tab-bar__circle-indicator');

    if(item.classList.contains('tab-bar')){
        children.forEach((children, key) => {
            childItem.addEventListener('click', () => {
                let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`);
                circleIndicator.classList.remove('animate');
                circleIndicator.style.marginLeft = ((25 + childItem.clientWidth) * key) + "px";
                circleIndicator.classList.add('animate');

                 document.querySelector('body').style.backgroundColor = color;
                 circleIndicator.style.backgroundColor = color;
            }) 
        })
    }
})