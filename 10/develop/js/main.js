$(document).ready(function () {
    $('select').niceSelect();

    AOS.init({
        once: true
    });

    const
        currentNiceSelect = document.querySelector(".nice-select .current"),
        niceSelect = document.querySelector(".nice-select");

    const
        oldOpen = document.createElement("div"),
        newOpen = document.createElement("div"),
        oldContactItem = document.createElement("div"),
        newContactItem = document.createElement("div"),
        oldMapParent = document.createElement("div"),
        newMapParent = document.createElement("div");

    oldOpen.classList.add("open");
    newOpen.classList.add("open");

    oldContactItem.classList.add("contact__item-text1");
    newContactItem.classList.add("contact__item-text1");

    oldMapParent.classList.add("map");
    newMapParent.classList.add("map");
    oldMapParent.setAttribute("id", "parentMap");
    newMapParent.setAttribute("id", "parentMap");

    oldOpen.innerHTML = `<div class="h1">Hours open 365 days</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Monday - Thursday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 11 pm</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Friday - Saturday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 1 am</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Sunday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 11 pm</div>
\t\t\t\t\t</div><br>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text1 noWrap">Last ticket sold one hour prior
\t\t\t\t\t\t\t\t <span>to closing</span> </div>
\t\t\t\t\t</div>`;
    newOpen.innerHTML = `
                <div class="h1">Hours open 365 days</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Monday - Thursday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Friday - Saturday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text day">Sunday:</div>
\t\t\t\t\t\t<div class="open__item-text">10 am – 10 pm</div>
\t\t\t\t\t</div><br>
\t\t\t\t\t<div class="open__item">
\t\t\t\t\t\t<div class="open__item-text1 noWrap">Last ticket sold one hour prior
\t\t\t\t\t\t\t\t <span>to closing</span> </div>
\t\t\t\t\t</div>`;

    oldContactItem.innerHTML = `<a title="click to visit map" target="_blank" class="maplink" href="https://goo.gl/maps/11mRJZFuJsZhbc2K9">211 S State St, Chicago, IL<span>60604</span></a>`;
    newContactItem.innerHTML = `<a title="click to visit map" target="_blank" class="maplink maplink__Augustine" href="https://goo.gl/maps/4gJZzS48vH7bPs9s5">100 St George St, St. <span> Augustine, FL <span>32084</span></span></a>`;

    oldMapParent.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5941.280215846711!2d-87.627482!3d41.879089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca33f58ffd1%3A0xf06bc2d1f0d09729!2s211%20S%20State%20St%2C%20Chicago%2C%20IL%2060604%2C%20USA!5e0!3m2!1sen!2sua!4v1597659784049!5m2!1sen!2sua"  width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    newMapParent.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6917.892593128432!2d-81.313291!3d29.894648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e42795ef01c2bd%3A0x8753e82fcf3752db!2s100%20St%20George%20St%2C%20St.%20Augustine%2C%20FL%2032084%2C%20USA!5e0!3m2!1sen!2sua!4v1597659655606!5m2!1sen!2sua"  width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;

    let counter = 0;

    function toggleCity (e) {
        const
            parentContact = document.querySelector(".contact"),
            currentItemAddress = document.querySelector(".contact .contact-us .contact__item.address .contact__item-text1"),
            parentElementItemAddress = currentItemAddress.parentNode,
            currentOpen = document.querySelector(".contact .open"),
            parentParentMap = document.querySelector(".cell__line-footer"),
            parentMap = document.querySelector("#parentMap"),
            preloader = document.querySelector(".loader-wrap");

        if (e.target.classList.contains("option") && counter > 0) {
            preloader.classList.add("active");
            document.querySelector("body").classList.add("no-scroll");
            setTimeout(() => {
                preloader.classList.remove("active");
                document.querySelector("body").classList.remove("no-scroll");
            }, 1000);
        }

        setTimeout(() => {
            if (currentNiceSelect.innerText === "St. Augustine") {
                parentContact.removeChild(currentOpen);
                parentContact.appendChild(newOpen);

                parentElementItemAddress.removeChild(currentItemAddress);
                parentElementItemAddress.appendChild(newContactItem);

                parentParentMap.removeChild(parentMap);
                parentParentMap.appendChild(newMapParent);

                sessionStorage.setItem("selectCity", "St. Augustine");
            } else if (currentNiceSelect.innerText === "Chicago") {
                parentContact.removeChild(currentOpen);
                parentContact.appendChild(oldOpen);

                parentElementItemAddress.removeChild(currentItemAddress);
                parentElementItemAddress.appendChild(oldContactItem);

                parentParentMap.removeChild(parentMap);
                parentParentMap.appendChild(oldMapParent);

                sessionStorage.setItem("selectCity", "Chicago");
            }
        }, 50);
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {

            const
                coordinatesChicago = {
                    latitude: 41.879090,
                    longitude: -87.627480
                },
                coordinatesAugustine = {
                    latitude: 29.894616,
                    longitude: -81.313250
                },
                distanceChicago = {
                    latitude: position.coords.latitude - coordinatesChicago.latitude,
                    longitude: position.coords.longitude - coordinatesChicago.longitude
                },
                distanceAugustine = {
                    latitude: position.coords.latitude - coordinatesAugustine.latitude,
                    longitude: position.coords.longitude - coordinatesAugustine.longitude
                };

            if (sessionStorage.getItem("selectCity")) {
                const niceSelect = document.querySelector(".nice-select");
                if (sessionStorage.getItem("selectCity") === "Chicago") {
                    setTimeout(() => {
                        niceSelect.querySelector('.option[data-value="1"]').click();
                        niceSelect.classList.remove("open");
                        counter++;
                    }, 200);
                } else {
                    setTimeout(() => {
                        niceSelect.querySelector('.option[data-value="2"]').click();
                        niceSelect.classList.remove("open");
                        counter++;
                    }, 200);
                }
            } else if (distanceChicago.latitude > distanceAugustine.latitude || distanceChicago.longitude > distanceAugustine.longitude) {
                const niceSelect = document.querySelector(".nice-select");
                setTimeout(() => {
                    niceSelect.querySelector('.option[data-value="2"]').click();
                    niceSelect.classList.remove("open");
                    counter++;
                }, 200);
            }

        },

        function(error){
            if (sessionStorage.getItem("selectCity")) {
                const selectCurrent = document.querySelector(".nice-select .current");
                selectCurrent.innerText = sessionStorage.getItem("selectCity");
                toggleCity();
            }
            counter++;
        }
    );

    setTimeout(function () {
        niceSelect.onclick = toggleCity;
    }, 100);
});

$(document).ready(function() {
    AOS.init({
        once: true,
        duration: 1000,
        offset: 100
    });

    var swiper = new Swiper('.slider2', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        pagination: {
            clickable: true,
        },
    });
    
    $( window ).resize(function() {
        update_height();
    });
    
    update_height();
    
    function update_height() {
        var max = Math.max.apply(Math, $(".fixed-height").map(
            function(){
              $(this).css('height', 'auto');
              return $(this).outerHeight();
            }
          ));
        
        $(".fixed-height").each(function(){
            $(this).css("height", max);
        });
    }
    
    
    
});
