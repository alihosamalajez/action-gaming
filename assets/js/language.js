// change language

const translations = {
    en: {
        home: "Home",
        shop: "Our Shop",
        contact: "Contact Us",
        signin: "Sign In",
        english: "English",
        arabic: "Arabic",
        menu: "Menu",
        welcome: "Welcome to Action",
        brst: "BEST GAMING SITE EVER!",
        pDetails: "In our store, we are committed to providing a unique and enjoyable shopping experience for gaming enthusiasts. Our extensive collection includes popular and diverse electronic games across various platforms, and we always offer the latest releases.",
        search: "Search Now",
        free: "Free Storage",
        user: "Users More",
        reply: "Reply Ready",
        easy: "Easy Layout",
        trending: "Trending",
        trendingGames: "Trending Games",
        view: "View All",
        action: "Action",
        assasin: "Assasin Creed",
        topGames: "TOP GAMES",
        mostPlayed: "Most Played",
        adventure: "Aventure",
        explore: "Explore",
        categories: "Categories",
        topCategories: "Top Categories",
        goPre: "Go Pre-Order Buy & Get Best <em>Prices</em> For You!",
        lorem: "We strive to ensure that our customers are satisfied and offer support and assistance in case of inquiries or issues.",
        shopNow: "Shop Now",
        newSletter: "NEWSLETTER",
        getUp: "Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!",
        subscribe: "Subscribe Now",
        footer: "Copyright © 2022 Action Gaming Company. All rights reserved. &nbsp;&nbsp;",
    },
    ar: {
        home: "الرئيسية",
        shop: "محلنا",
        contact: "اتصل بنا",
        signin: "تسجيل",
        english: "English",
        arabic: "العربية",
        menu: "القائمة",
        welcome: "مرحبا بكم في الأكشن",
        brst: "أفضل موقع للألعاب على الإطلاق!",
        pDetails: "في متجرنا، نحرص على تقديم تجربة تسوق فريدة وممتعة لعشاق الألعاب. تتضمن مجموعتنا الكبيرة من الألعاب الإلكترونية المنوعة الألعاب الرائجة والمنصات المختلفة، ونقدم دائمًا أحدث الإصدارات",
        search: "ابحث الآن",
        free: "تخزين مجانية",
        user: "المستخدمون أكثر",
        reply: "الرد جاهز",
        easy: "تخطيط سهل",
        trending: "الشائع",
        trendingGames: "تتجه الألعاب",
        view: "مشاهدة الكل",
        action: "أكشن",
        assasin: "قاتل العقيدة",
        topGames: "أفضل الألعاب",
        mostPlayed: "الأكثر لعبا",
        adventure: "مغامرة",
        explore: "يستكشف",
        categories: "فئات",
        topCategories: "أعلى الفئات",
        goPre: "اذهب للطلب المسبق واشتري واحصل على أفضل <em> الأسعار </ em> من أجلك!",
        lorem: "نسعى جاهدين لضمان رضا عملائنا وتقديم الدعم والمساعدة في حالة الاستفسارات أو المشكلات.",
        shopNow: "تسوق الآن",
        newSletter: "النشرة الإخبارية",
        getUp: "احصل على خصم يصل إلى 100 دولار فقط اشترِ <em> اشتراك </ em> في النشرة الإخبارية!",
        subscribe: "إشترك الآن",
        footer: "حقوق النشر © 2022 Action Gaming Company.جميع الحقوق محفوظة & nbsp؛ & nbsp؛",
    },
  };


let languageSelector = document.querySelector("#lang");
let body = document.querySelector("body");

languageSelector.addEventListener("change",(event)=>{
    setLanguage(event.target.value)
})

let setLanguage = (language) => {
    let elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element)=>{
        let translationKey = element.getAttribute("data-i18n")
        element.innerHTML = translations[language][translationKey]
    })
    document.dir = language === "ar" ? "rtl" : "ltr"
}
// ar.onchange = () => {
//   window.localStorage.setItem("lang", "ar");
//   elements.forEach((ele) => {
//     let transKey = ele.getAttribute("data-i18n");
//     ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
//   });
//   ar.classList.add("active");
//   en.classList.remove("active");
//   body.style.direction = "rtl";
// };

// en.onclick = () => {
//   window.localStorage.setItem("lang", "en");
//   elements.forEach((ele) => {
//     let transKey = ele.getAttribute("data-i18n");
//     ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
//   });
//   en.classList.add("active");
//   ar.classList.remove("active");
//   body.style.direction = "ltr";
  
// };

// elements.forEach((ele) => {
//   let transKey = ele.getAttribute("data-i18n");
//   ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
// });

// if (localStorage.getItem("lang") == "ar") {
//   body.style.direction = "rtl";
//   ar.classList.add("active");
//   en.classList.remove("active");
 
// } else {
//   body.style.direction = "ltr";
//   en.classList.add("active");
//   ar.classList.remove("active");
// }