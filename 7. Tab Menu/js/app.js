// var menus = document.querySelectorAll('.tab-menu div');
// var contents = document.querySelectorAll('.content div');


// for(var menu of menus) {
//     menu.addEventListener('click',function(){
//         var active = document.querySelector('.active');
//         console.log(active)
//         active.classList.remove('active');
//         this.classList.add('active');

//         // for toggle div
//         var index = this.getAttribute('data-index');
//         console.log(index);

//         for(var content of contents) {
//             if(content.getAttribute('data-index') == index) {
//                 content.classList.remove('d-none')
//             }
//             else{
//                 content.classList.add('d-none');
//             }
//         }
//     })
// }


var btn = document.querySelector('#btn');
var warn = document.querySelector('#warn');//message
var div = document.querySelector('#message');
var r_number = Math.floor(Math.random() * 100);
var icon = document.querySelector('#message i');
var count = 1;

btn.onclick = function() {
    var value = document.querySelector('#inp').value;
     if(value == "") {
         div.style.opacity = "1"
         warn.innerHTML = "Rəqəm daxil etməlisiniz!"
     }
  
        if(value>r_number) {
            count++;
            div.style.opacity = "1"
            warn.innerHTML = "Kiçik rəqəm daxil etməlisiniz!"
        }
        else if(value<r_number) {
            count++;
            div.style.opacity = "1"
            warn.innerHTML = "Böyük rəqəm daxil etməlisiniz!"
        }
        else if(value==r_number) {
            div.style.opacity = "1"
            icon.className = "fa-solid fa-circle-check"
            icon.style.color = "green"
            warn.innerHTML = `Təbriklər siz ${count} dəfəyə tapdınız`
        }

}
