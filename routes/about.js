const scroll = new LocomotiveScroll({
    el: document.querySelector('#aboutContainer'),
    smooth: true
});


// Scroll TO Education

// About 
// Next Function
const scrollToEducation = ()=>{
    const target = document.querySelector('.Education');
    scroll.scrollTo(target);
}



// Education
// Previous Function
const scrollToAbout = ()=>{
    const target = document.querySelector('.About');
    scroll.scrollTo(target);
}

const scrollToSkills = ()=>{
    const target = document.querySelector('.Skills');
    scroll.scrollTo(target);
}
