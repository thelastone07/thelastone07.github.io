import { listFolderImages } from './get_photos.js';

//todo : add screen diff
// mobile stuff
//others
// add support for hrefs in sidebar
//maybe a loading support before the images are loaded

async function createGallery() {
    console.log('Creating gallery...');
    const images = await listFolderImages('mumbai');
    console.log('Images loaded:', images);
    
    const container = document.getElementById('galleryContainer');
    let index = 0;

    while (index < images.length) {
        // check if you can create a gallery 1 
        if (index + 2 < images.length) {
            const gallery1 = document.createElement('div');
            gallery1.className = 'gallery1';

            const leftChild =   document.createElement('div');
            leftChild.className = 'gallery1-left';
            const leftChild1 = document.createElement('div');
            leftChild1.className = 'gallery1-leftchild';
            leftChild1.innerHTML = `<img src="${images[index].href}" alt="${images[index].name}">`;
            index++;
            leftChild.appendChild(leftChild1);

            const rightChild = document.createElement('div');
            rightChild.className = 'gallery1-right';
            const child1 = document.createElement('div');
            const child2 = document.createElement('div');
            child1.className = 'gallery1-rightchild';
            child2.className = 'gallery1-rightchild';

            child1.innerHTML = `<img src="${images[index].href}" alt="${images[index].name}">`;
            index++;
            rightChild.appendChild(child1);

            child2.innerHTML = `<img src="${images[index].href}" alt="${images[index].name}">`;
            index++;    
            rightChild.appendChild(child2);


            gallery1.appendChild(leftChild);
            gallery1.appendChild(rightChild);
            container.appendChild(gallery1);

            const gallery2 = document.createElement('div');
            gallery2.className = 'gallery2';

            for (let i = 0; i < 3; i++) {
                if (index < images.length) {
                    const child = document.createElement('div');
                    child.className = 'gallery2-child';
                    child.innerHTML = `<img src="${images[index].href}" alt="${images[index].name}">`;
                    index++;

                    gallery2.appendChild(child);
                }
            }

            container.appendChild(gallery2);

        }
        else {
            const gallery2 = document.createElement('div');
            gallery2.className = 'gallery2';

            for (let i = 0; i < 3; i++) {
                if (index < images.length) {
                    const child = document.createElement('div');
                    child.className = 'gallery2-child';
                    child.innerHTML = `<img src="${images[index].href}" alt="${images[index].name}">`;
                    index++;

                    gallery2.appendChild(child);
                }
            }

            container.appendChild(gallery2);
        }
    }
}


createGallery();
