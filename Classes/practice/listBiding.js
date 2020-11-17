const myList = document.querySelector('.mylist');

class ListBiding{
    constructor(element){
        this.listElement = element;
        this.textList = [1, 2, 3, 4];
    }

    static createListItem(text){
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild);

        }

        for(const text of this.textList){
            this.listElement.appendChild(ListBiding.createListItem(text));
        }
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    remove(index){
        index = index -1;
        this.textList.splice(index, 1);
        //this.textList.reverse();
        this.update();
    }


}


const listBiding = new ListBiding(myList);