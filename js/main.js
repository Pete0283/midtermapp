// JavaScript Document
var pages = [], links = [];
var numLinks = 0;
var numPages = 0;
var pageTime = 800;//same as CSS transition

var holder;


//create the pageShow type event.
var pageshow = document.createEvent("CustomEvent");
pageshow.initEvent("pageShow", false, true);

document.addEventListener("DOMContentLoaded", function(){
	
	pages = document.querySelectorAll('[data-role="page"]');	
	numPages = pages.length;
	links = document.querySelectorAll('[data-role="pagelink"]');
	numLinks = links.length;
	for(var i=0;i<numLinks; i++){
		links[i].addEventListener("click", handleNav, false);	
	}
  //add the listener for pageshow to each page
  for(var p=0; p < numPages; p++){
    pages[p].addEventListener("pageShow", handlePageShow, false);
  }
	loadPage(null);
});



function handleNav(ev){
	ev.preventDefault();
	var href = ev.target.href;
	var parts = href.split("#");
	loadPage( parts[1] );	
  return false;
}

function handlePageShow(ev){
  ev.target.className = "active";
}

function loadPage( url ){
	if(url == null){
		//home page first call
        pages[0].style.display = 'block';
        pages[0].className = 'active';
		history.replaceState(null, null, "#two");	
	}else{
    for(var i=0; i < numPages; i++){
      pages[i].className = "hidden";
      //get rid of all the hidden classes
      //but make them display block to enable anim.
      if(pages[i].id == url){
        pages[i].className = "show";
        //add active to the proper page
        history.pushState(null, null, "#" + url);
        setTimeout(addDispatch, 50, i);
      }
    }
    //set the activetab class on the nav menu
    for(var t=0; t < numLinks; t++){
      links[t].className = "";
      if(links[t].href == two.href){
        links[t].className = "activetab";
      }
    }
	}
}

function addDispatch(num){
  pages[num].dispatchEvent(pageshow);
  //num is the value i from the setTimeout call
  //using the value here is creating a closure
}


/*var app = {
  init: function(){
    document.querySelector("[data-role=listview]").addEventListener("click", app.edit);
    document.getElementById("btnCancel").addEventListener("click", app.cancel);
    document.getElementById("btnSave").addEventListener("click", app.save);
  },
  cancel: function(ev){
    document.querySelector("[data-role=modal]").style.display="none";
    document.querySelector("[data-role=overlay]").style.display="none";
  },
  save: function(ev){
    document.querySelector("[data-role=modal]").style.display="none";
    document.querySelector("[data-role=overlay]").style.display="none";
  },
  edit: function(ev){
    ev.stopPropagation();
    
    document.querySelector("[data-role=modal]").style.display="block";
    document.querySelector("[data-role=overlay]").style.display="block";
    
    var item = ev.target.getAttribute("id");
    var itemVal = ev.target.innerHTML;
    document.getElementsByClassName("contactsList").value = item;
    *************
    Or the really long labourious difficult confusing annoying wasting time way....
    for(var i=0; i< document.querySelectorAll("#list option").length; i++){
      if(document.querySelectorAll("#list option")[i].value == item){
        document.querySelectorAll("#list option")[i].setAttribute("selected", "selected");
      }else{
        document.querySelectorAll("#list option")[i].removeAttribute("selected");
      }
    }
    ***************
    
    document.querySelector("[data-role=modal] h3").innerHTML = "Editing " + itemVal;
  }
}

document.addEventListener("DOMContentLoaded", app.init);*/




















