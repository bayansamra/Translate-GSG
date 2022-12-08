const myBtn =document.querySelector('button');
const myDiv =document.querySelector('div');


const langs = {
    ar:{
        buttonText:'en',
        divText:'مرحبا ايها العالم',
    },
    en:{
        buttonText:'العربية',
        divText:'Hello World',
        
    },
};

let lang =localStorage.getItem('lang') || 'en';

const changeLangs =(lang)=>{
    myBtn.textContent =langs[lang].buttonText;
    myDiv.textContent=langs[lang].divText;

// if(lang === 'en'){
//     myBtn.textContent =langs.en.buttonText;
//     myDiv.textContent=langs.en.divText;
//     lang='ar';
// } else {
//     myBtn.textContent =langs.ar.buttonText;
//     myDiv.textContent=langs.ar.divText;
//     lang='en';
// }  
};


const toggleLang = () =>{
// let myNewLang=lang === 'en' ? 'ar' :'en';
lang=lang === 'en' ? 'ar' :'en';

    window.localStorage.setItem('lang', lang);
changeLangs(lang);
    // myBtn.textContent =langs[lang].buttonText;
    // myDiv.textContent=langs[lang].divText;
    };

changeLangs(lang);

myBtn.onclick = toggleLang;



