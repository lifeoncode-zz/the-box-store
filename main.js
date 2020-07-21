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

                // toggle item view on product information
                const [one, two, three] = [document.querySelector('#one'), document.querySelector('#two'), document.querySelector('#three')];
                one.classList.add('current');
                two.classList.remove('current');
                three.classList.remove('current');
                
                one.removeEventListener('click', btnOne);
                two.addEventListener('click', btnTwo);
                three.addEventListener('click', btnThree);
                
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
            document.querySelector('#one').classList.add('current');
            document.querySelector('#two').classList.remove('current');
            document.querySelector('#three').classList.remove('current');
        }, 300)

    }




    // purchasing
    document.querySelector('.product_info button').addEventListener('click', (e) => {
        window.open('https://wa.me/message/C5IISRFH3CJVM1');
    })

























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




























    // each btn kills its click event once clicked and waits for the other btns to be clicked to activate itself again

    // btn 1
    function btnOne(e){
        one.classList.add('current');
        two.classList.remove('current');
        three.classList.remove('current');
        two.addEventListener('click', btnTwo);
        three.addEventListener('click', btnThree);

        let src = document.querySelector('.product_info img').getAttribute('src');

        if(src.indexOf('-2.jpg') || src.indexOf('-3.jpg')){
            src = src.slice(0, -6);
            src += '.jpg';
            document.querySelector('.product_info img').setAttribute('src', `${src}`);

        }else if(src.indexOf('-2.jpg') === -1 && src.indexOf('.jpg') || src.indexOf('-3.jpg') === -1 && src.indexOf('.jpg')){
            one.removeEventListener('click', btnOne);
            one.addEventListener('click', btnOneReset);
        }
        
        one.removeEventListener('click', btnOne);
    }

    // btn 2
    function btnTwo(e){
        two.classList.add('current');
        one.classList.remove('current');
        three.classList.remove('current');
        one.addEventListener('click', btnOne);
        three.addEventListener('click', btnThree);
        
        let src = document.querySelector('.product_info img').getAttribute('src');

        if(src.indexOf('-3.jpg') === -1 && src.indexOf('.jpg')){
            src = src.slice(0, -4);
            src += '-2.jpg';
            document.querySelector('.product_info img').setAttribute('src', `${src}`);
            
        }else if(src.indexOf('-3.jpg')){
            src = src.slice(0, -5);
            src += '2.jpg';
            document.querySelector('.product_info img').setAttribute('src', `${src}`);
        }

        two.removeEventListener('click', btnTwo);

    }

    // btn 3
    function btnThree(e){
        three.classList.add('current');
        one.classList.remove('current');
        two.classList.remove('current');
        one.addEventListener('click', btnOne);
        two.addEventListener('click', btnTwo);
        
        let src = document.querySelector('.product_info img').getAttribute('src');

        if(src.indexOf('-2.jpg') === -1 && src.indexOf('.jpg')){
            src = src.slice(0, -4);
            src += '-3.jpg';
            document.querySelector('.product_info img').setAttribute('src', `${src}`);

        }else if(src.indexOf('-2.jpg')){
            src = src.slice(0, -5);
            src += '3.jpg';
            document.querySelector('.product_info img').setAttribute('src', `${src}`);
        }   

        three.removeEventListener('click', btnThree);
    }


})