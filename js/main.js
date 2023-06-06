
// const elLogoLink=document.querySelector('.site-header-logo')
// const elLogoChange=document.querySelector('.Change-logo-text-button')

// elLogoChange.addEventListener('click', function() {
// elLogoLink.textContent='boshqa matn'
// })

const elDarkModeButton=document.querySelector('.site-header-dark')

elDarkModeButton.addEventListener('click' , function() {
document.body.classList.add('dark-mode');
})

const elLightModeButton=document.querySelector('.site-header-light')

elLightModeButton.addEventListener('click' , function() {
document.body.classList.remove('dark-mode');
})