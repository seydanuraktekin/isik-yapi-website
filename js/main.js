/* ========================================
   REFRESH OLUNCA EN BAŞA DÖN
======================================== */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

if (window.location.hash) {
    history.replaceState(
        null,
        "",
        window.location.pathname
    );
}

window.scrollTo(0, 0);



/* ========================================
   INTRO
======================================== */

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    const introScreen =
        document.querySelector(".intro-screen");

    const introLogo =
        document.querySelector(".intro-logo");

    const hero =
        document.querySelector(".hero");

    const navbar =
        document.querySelector(".navbar");

    const navLogo =
        document.querySelector(".nav-logo");

    const heroContent =
        document.querySelector(".hero-content");



    /* ========================================
       HERO + INTRO LOGO HAREKETİ
    ======================================== */

    setTimeout(() => {

        hero.style.opacity = "1";

        introScreen.style.transition =
            "background 1.5s cubic-bezier(0.76, 0, 0.24, 1)";

        introScreen.style.background =
            "transparent";


        introLogo.style.transition =
            "top 1.5s cubic-bezier(0.76, 0, 0.24, 1), " +
            "left 1.5s cubic-bezier(0.76, 0, 0.24, 1), " +
            "width 1.5s cubic-bezier(0.76, 0, 0.24, 1), " +
            "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1), " +
            "opacity 0.25s ease";


        /* MOBİL */

        if (window.innerWidth <= 700) {

            introLogo.style.top = "14px";
            introLogo.style.left = "20px";
            introLogo.style.width = "145px";

        }

        /* MASAÜSTÜ */

        else {

            introLogo.style.top = "18px";
            introLogo.style.left = "30px";
            introLogo.style.width = "220px";

        }


        introLogo.style.transform =
            "translate(0, 0)";

    }, 1100);



    /* ========================================
       NAVBAR GELİR
    ======================================== */

    setTimeout(() => {

        navbar.style.transition =
            "opacity 0.8s ease";

        navbar.style.opacity =
            "1";

    }, 2500);



    /* ========================================
       INTRO LOGO → NAVBAR LOGO DEĞİŞİMİ
    ======================================== */

    setTimeout(() => {

        /*
           Hareket eden intro logosunu gizle
        */

        introLogo.style.opacity = "0";


        /*
           Navbarın gerçek logosunu göster
        */

        navLogo.style.opacity = "1";

    }, 2650);



    /* ========================================
       HERO METNİ
    ======================================== */

    setTimeout(() => {

        heroContent.style.transition =
            "opacity 1s ease, transform 1s ease";

        heroContent.style.opacity =
            "1";

        heroContent.style.transform =
            "translateY(0)";

    }, 2800);



    /* ========================================
       INTRO ARTIK SAYFAYI ENGELLEMESİN
    ======================================== */

    setTimeout(() => {

        introScreen.style.pointerEvents =
            "none";

        introScreen.style.visibility =
            "hidden";

    }, 3100);

});



/* ========================================
   HERO → 4 GÖRSEL
   SCROLL KARARMASI
======================================== */

const featureSection =
    document.querySelector(".feature-transition");

const darknessLayer =
    document.querySelector(".transition-darkness");


function updateHeroTransition() {

    if (
        !featureSection ||
        !darknessLayer
    ) {
        return;
    }


    /* Mobilde kararma efekti kullanılmıyor */

    if (window.innerWidth <= 700) {

        darknessLayer.style.opacity = "1";

        return;
    }


    const rect =
        featureSection.getBoundingClientRect();

    const windowHeight =
        window.innerHeight;


    const startPoint =
        windowHeight * 1.05;

    const endPoint =
        windowHeight * 0.16;


    let progress =
        (startPoint - rect.top) /
        (startPoint - endPoint);


    progress =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    const smooth =
        progress < 0.5

            ? 2 * progress * progress

            : 1 -
              Math.pow(
                  -2 * progress + 2,
                  2
              ) / 2;


    darknessLayer.style.opacity =
        smooth;
}



/* Scroll */

window.addEventListener(
    "scroll",
    updateHeroTransition,
    {
        passive: true
    }
);



/* Resize */

window.addEventListener(
    "resize",
    updateHeroTransition
);



/* İlk durum */

updateHeroTransition();



/* ========================================
   4 GÖRSEL GELİRKEN HERO YAZISINI GİZLE
======================================== */

const heroText =
    document.querySelector(".hero-content");

const heroWrapper =
    document.querySelector(".hero-feature-wrapper");


function updateHeroText() {

    if (!heroText || !heroWrapper) {
        return;
    }


    /*
       Mobilde hero sticky olmadığı için
       ekstra yazı fade hesabı gerekmiyor.
    */

    if (window.innerWidth <= 700) {
        return;
    }


    const wrapperRect =
        heroWrapper.getBoundingClientRect();

    const windowHeight =
        window.innerHeight;


    const startFade =
        windowHeight * 0.92;

    const endFade =
        windowHeight * 0.48;


    const scrolled =
        -wrapperRect.top;


    let progress =
        (scrolled - (windowHeight - startFade)) /
        (startFade - endFade);


    progress =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    /*
       1 → 0
    */

    heroText.style.opacity =
        1 - progress;


    /*
       Hafif yukarı hareket
    */

    heroText.style.transform =
        `translateY(${-progress * 35}px)`;
}



window.addEventListener(
    "scroll",
    updateHeroText,
    {
        passive: true
    }
);