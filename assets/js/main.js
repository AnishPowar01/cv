

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('skills_active');
        })

        target.classList.add('skills_active');

        tabs.forEach(tab => {
            tab.classList.remove('skills_active');
        })
          tab.classList.add('skills_active');
    })
})






const inputs = document.querySelectorAll(".input");

function focusFunc()
{
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc()
{
    let parent = this.parentNode;
    if(this.value == "")
    {
        parent.classList.remove("focus");

    }
}

inputs.forEach((input) =>
{
input.addEventListener("focus",focusFunc);
input.addEventListener("blur",blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');

window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}






