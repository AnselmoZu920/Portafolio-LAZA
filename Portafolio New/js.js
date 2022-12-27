let list = document.querySelectorAll('li');
for (let i=0; i<list.length; i++){
    list[i].mouseover = function(){
        let j = 0;
        while (j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
};