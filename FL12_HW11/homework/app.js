const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];


const rootNode = document.getElementById('root');

let ul = document.createElement('ul');
for (let i = 0; i < structure.length; i++) {
    let title = structure[i].title;
    let children = structure[i].children;
    let folder = structure[i].folder;

    let div = document.createElement('div');
    let li = document.createElement('li');
    let iElement = document.createElement('i');
    let p = document.createElement('p');

    div.className = 'title-of-elements';
    li.className = 'main-item';
    iElement.className = 'material-icons';
    if (folder === true) {
        iElement.textContent = 'folder';
    }
    div.appendChild(iElement);
    p.textContent = title;
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
    let ulChildren = document.createElement('ul');
    for (let k = 0; k < children.length; k++) {
        let childrenTitle = children[k].title;
        let childrenFolder = children[k].folder;
        let liElementChild = document.createElement('li');
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        let iElement = document.createElement('i');
        liElementChild.className = 'li_Children';
        divElement.className = 'title-of-elements';
        iElement.className = 'material-icons';
        if (childrenFolder === true) {
          iElement.textContent = 'folder';
        } else {
          iElement.textContent = 'insert_drive_file';
        }
        divElement.appendChild(iElement);
        pElement.textContent = childrenTitle;
        divElement.appendChild(pElement);
        liElementChild.appendChild(divElement);
        ulChildren.appendChild(liElementChild);
        
        li.appendChild(ulChildren);
      }
      div.addEventListener('click', function () {
        if (div.nextElementSibling.className !== 'open') {
          div.nextElementSibling.className = 'open';
          iElement.textContent = 'folder_open';
        } else {
          div.nextElementSibling.classList.remove('open');
          iElement.textContent = 'folder';
        }
      });

}

rootNode.appendChild(ul);
