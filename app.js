const LOADING = document.querySelector('#PRE svg.BTN');
const LOADtxt = document.querySelector('#PRE .CONtxt')
const wrapper = document.querySelector("#PRE .WRAPPER");
const PRE = document.querySelector('#PRE');
const WARNING = document.querySelector('#PRE .WARNING');


window.addEventListener('load', () => {
  let i = 0;
  
  setTimeout(() => {
    LOADING.style.bottom = '5vw';
    LOADtxt.style.bottom = '1rem';
  
    LOADING.style.opacity = '1';
    LOADtxt.style.opacity = '1';
  
    wrapper.style.opacity = 0;
    
    WARNING.classList.add('ACTIVE');
    
    LOADING.querySelectorAll('path').forEach(entry => {
      entry.style.strokeDashoffset = 0;
      entry.style.transitionDelay = i + 's';
      i += 0.25;
    })
  }, 0) // 3750
})

LOADING.addEventListener('click', () => {
  let i = 0;
  LOADING.querySelectorAll('path').forEach(entry => {
    entry.style.stroke = 'var(--Li2)';
    entry.style.strokeDashoffset = '100';
    entry.style.transition = 'stroke 0.75s 0s, stroke-dashoffset 1.5s  ' + i + 's';
    i += 0.125;
  })
  
  setTimeout(() => {
    PRE.style.opacity = 0;
    PRE.style.visibility = 'hidden';
    
    LOADING.style.bottom = '-5vw';
    LOADtxt.style.bottom = '-1rem';
    
    LOADING.style.opacity = '0';
    LOADtxt.style.opacity = '0';
  }, 1000)
})




const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 2, roundness: 1 },
  { configuration: 2, roundness: 2 },
  { configuration: 3, roundness: 1 },
  { configuration: 3, roundness: 2 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev), combination = combinations[index];
  
  wrapper.dataset.config = combination.configuration;
  wrapper.dataset.round = combination.roundness;
  
  prev = index;
}, 1500);




//
const OPTION = document.querySelector('#PAGE .HEADER .OPTION');
const NAV = document.querySelector('#NAV');
const NAVli = document.querySelectorAll('#NAV ul li .ANCHOR p');
let ON = false

OPTION.addEventListener('click', () => {
  OPTION.classList.toggle('OFF');
  NAV.classList.toggle('ACTIVE');
  
  if (ON == false) {
    ON = true
  } else {
    ON = false
  }
  
  if (ON == true) {
    let TIMER = 0;
    
    NAVli.forEach(entry => {
      entry.innerText = '';
    })
    
    NAVli.forEach(entry => {
      setTimeout(() => {
        let TXT = entry.dataset.text;
      
        for (let i = 0; i <= TXT.length; i++) {
          setTimeout(() => {
            entry.innerText = TXT.substr(0, i)
          }, i*40)
        }
      }, TIMER += 150)
    })
  }
})

//
const CREDITSbtn = document.querySelector('#PAGE .HEADER .OP-d');
const CREDITS = document.querySelector('#CREDITS');
const CREDITSclose = document.querySelector('#CREDITS hr.CLOSE');

CREDITSbtn.addEventListener('click', () => {
  CREDITSbtn.classList.add('CLICK');
  CREDITS.classList.add('ACTIVE');
  
  setTimeout(() => {
    CREDITS.classList.remove('CLICK');
  }, 750);
})

CREDITSclose.addEventListener('click', () => {
  CREDITS.classList.remove('ACTIVE');
})

//
const OPTIONS = document.querySelectorAll('#NAV ul li');
const PAGES = document.querySelectorAll('#PAGE .PART');

OPTIONS.forEach(entry => {
  entry.addEventListener('click', () => {
    PAGES.forEach(entry => {
      entry.classList.remove('ACTIVE');
    })
    
    OPTION.classList.remove('OFF');
    NAV.classList.remove('ACTIVE');
    ON = false;
    
    let DATA = entry.dataset.anchor;
    
    PAGES.forEach(entry => {
      if (entry.dataset.anchor == DATA) {
        entry.classList.add('ACTIVE');
      }
    })
  })
})

const INTROdiv = document.querySelector('#PAGE .PART#INTRO');
INTROdiv.addEventListener('scroll', () => {
  if (INTROdiv.scrollTop <= window.innerHeight && INTROdiv.scrollTop > 0) {
    INTROdiv.style.backgroundPosition = '-5% 5%, 80% 50%, 15% 90%';
    INTROdiv.style.backgroundSize = '60vw, 15vw, 15vw';
  } else if (INTROdiv.scrollTop > window.innerHeight && INTROdiv.scrollTop <= 2 * window.innerHeight) {
    INTROdiv.style.backgroundPosition = '80% 50%, -5% 5%, 15% 90%';
    INTROdiv.style.backgroundSize = '15vw, 60vw, 15vw';
  } else if (INTROdiv.scrollTop > 2 * window.innerHeight && INTROdiv.scrollTop <= 3 * window.innerHeight) {
    INTROdiv.style.backgroundPosition = '15% 90%, 80% 50%, -5% 5%';
    INTROdiv.style.backgroundSize = '15vw, 15vw, 60vw';
  } else if (INTROdiv.scrollTop > 3 * window.innerHeight && INTROdiv.scrollTop <= 4 * window.innerHeight ) {
    INTROdiv.style.backgroundPosition = 'center';
    INTROdiv.style.backgroundSize = '150vw, 60vw, 10vw';
  } else if (INTROdiv.scrollTop == 0) {
    INTROdiv.style.backgroundPosition = '-5% 5%, 80% 50%, 15% 90%';
    INTROdiv.style.backgroundSize = '0vw';
  }
})

const SKILLdiv = document.querySelector('#PAGE .PART#SKILLS');
SKILLdiv.addEventListener('scroll', () => {
  if (SKILLdiv.scrollTop < .5 * window.innerHeight) {
    SKILLdiv.style.backgroundSize = '40%';
  }
  else if (SKILLdiv.scrollTop >= .5 * window.innerHeight && SKILLdiv.scrollTop < window.innerHeight) {
    SKILLdiv.style.backgroundPosition = "center";
    SKILLdiv.style.backgroundSize = '60%'
  } else if (SKILLdiv.scrollTop >= window.innerHeight && SKILLdiv.scrollTop <= 2 * window.innerHeight) {
    SKILLdiv.style.backgroundPosition = '90%';
    SKILLdiv.style.backgroundSize = '60%';
  } else if (SKILLdiv.scrollTop > 2 * window.innerHeight && SKILLdiv.scrollTop <= 3 * window.innerHeight) {
    SKILLdiv.style.backgroundPosition = '10%';
    SKILLdiv.style.backgroundSize = '60%';
  }
})

const PROJECTdiv = document.querySelector('#PAGE .PART#PROJECTS');
PROJECTdiv.addEventListener('scroll', () => {
  if (PROJECTdiv.scrollTop < .5 * window.innerHeight) {
    PROJECTdiv.style.backgroundImage = 'url("/img/mockup2-S20.png")';
    PROJECTdiv.style.backgroundPosition = 'center';
  } else if (PROJECTdiv.scrollTop >= .5 * window.innerHeight && PROJECTdiv.scrollTop < window.innerHeight) {
    PROJECTdiv.style.backgroundPosition = 'right center';
    setTimeout(() => {
      PROJECTdiv.style.backgroundImage = 'url("/img/site1-S20.png")';
    }, 250)
  } else if (PROJECTdiv.scrollTop >= window.innerHeight && PROJECTdiv.scrollTop < 2 * window.innerHeight) {
    PROJECTdiv.style.backgroundPosition = 'left center';
    setTimeout(() => {
      PROJECTdiv.style.backgroundImage = 'url("/img/site2-S20.png")';
    }, 250)
  }
  
})

//
const OBS = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('inView', entry.isIntersecting)
  })
}, {
  rootMargin: '40% 40% 40% 40%',
  threshold: 0.1
})

const PART = document.querySelectorAll('#PAGE .PART article');
PART.forEach(entry => {
  OBS.observe(entry);
})

const skillGRID = document.querySelectorAll('#PAGE .PART#SKILLS .skillGRID');
skillGRID.forEach(entry => {
  OBS.observe(entry);
})

const skillPART = document.querySelector('#PAGE .PART#SKILLS article');
OBS.observe(skillPART);
