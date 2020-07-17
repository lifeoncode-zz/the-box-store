window.addEventListener('DOMContentLoaded', function(e){

    // if user hovers each product
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('mouseover', (e) => {
            product.firstElementChild.style.transform = 'scale(1.05)'; 
        })
        product.addEventListener('mouseout', (e) => {
            product.firstElementChild.style.transform = 'scale(1)'; 
        })
    })

    // if user clicks product image
    const images = document.querySelectorAll('.product img');
    const info = document.querySelector('.product_info')
    images.forEach(img => {
        img.addEventListener('click', function(e){
            // insert all product details
            info.firstElementChild.firstElementChild.setAttribute('src', `${img.getAttribute('src')}`);
            info.querySelector('.name').textContent = img.parentElement.children[1].textContent;
            info.querySelector('p').textContent = img.parentElement.children[2].textContent;
            info.querySelector('.price').textContent = img.parentElement.children[3].firstElementChild.textContent;

            // then show the info div
            info.classList.remove('hide');
            setTimeout(() => {
                info.style.transform = 'scale(1)';
            }, 100);
        })
    })



    document.querySelector('header').addEventListener('click', hideInfo);
    document.querySelector('.escape').addEventListener('click', hideInfo);

    
    // hide the info div
    function hideInfo(e){
        info.style.transform = 'scale(0)';
        setTimeout(() => {
            info.classList.add('hide');
        }, 300)
    }




    // hamburger menu
    const btn = document.querySelector('.menu_btn');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    btn.addEventListener('click', showMenu);

    function showMenu(e){
        // animate the btn
        btn.firstElementChild.style.transform = 'rotate(-25deg)';
        btn.firstElementChild.style.marginLeft = '5px';
        btn.lastElementChild.style.transform = 'rotate(-25deg)';
        btn.lastElementChild.style.marginLeft = '-5px';

        // show menu div
        overlay.style.transform = 'scale(1)';
        setTimeout(() => {
            menu.style.transform = 'scale(1)';
        }, 50)
        
        setTimeout(() => {
            btn.removeEventListener('click', showMenu);
            btn.addEventListener('click', hideMenu);
        }, 350);
    }

    function hideMenu(e){
        // animate the btn
        btn.firstElementChild.style.transform = 'rotate(0deg)';
        btn.firstElementChild.style.marginLeft = '0';
        btn.lastElementChild.style.transform = 'rotate(0deg)';
        btn.lastElementChild.style.marginLeft = '0';
        
        // show menu div
        overlay.style.transform = 'scale(0)';
        setTimeout(() => {
            menu.style.transform = 'scale(0)';
        }, 50)
        
        setTimeout(() => {
            btn.removeEventListener('click', hideMenu);
            btn.addEventListener('click', showMenu);
        }, 350);
    }
    
    // if menu links are clicked
    document.querySelectorAll('.menu a').forEach(a => {
        a.addEventListener('click', hideMenu);
    })



})