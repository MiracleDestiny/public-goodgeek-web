
function TabsCommand(evt, cityName, PicName) {
  var i, tab_content, tablinks, Picture;
  tab_content = document.getElementsByClassName("tab_content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  Picture = document.getElementsByClassName("Picture");
  for (i = 0; i < tablinks.length; i++) {
  Picture[i].style.display = "none" 
  }
  
  document.getElementById(cityName).style.display = "block";
  document.getElementById(PicName).style.display = "block";
  evt.currentTarget.className += " active";
  
}

function Menu(e) {
  let list = document.querySelector('ul');
  if (e.name === 'menu') {
    e.name = "close";
    list.classList.add('top-[80px]');
    list.classList.add('opacity-100');
    

    var menuItems = document.querySelectorAll('ul li');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        closeMenu();
      });
    });

  } else {
    e.name = "menu";
    list.classList.remove('top-[80px]');
    list.classList.remove('opacity-100');
  }
}

function clickTab(){
  let icon = document.getElementsByName("close");
  var iconArray = Array.from(icon);
  iconArray[0].name = "menu";
}

function closeMenu() {
  let list = document.querySelector('ul');
  list.classList.remove('top-[80px]');
  list.classList.remove('opacity-100');
}
