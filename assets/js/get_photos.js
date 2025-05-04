import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";


const config = await fetch('./firebaseConfig.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  });


// import {initializeApp} from "firebase/app";
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";


// import { readFile } from 'fs/promises';

// const config = JSON.parse(
// await readFile(new URL('./firebaseConfig.json', import.meta.url))
// );

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const listFolderImages = async (subfolder) => {
  
  try {
  console.log('inside ListFolderImages');
  let folderPath = "gallery-content/" + subfolder;
  const folderRef = ref(storage, folderPath);
  const res = await listAll(folderRef);
  const images = await Promise.all(
    res.items.map(async (itemRef) => ({
      href: await getDownloadURL(itemRef),
      name: itemRef.name
    })) 
  );
  return images;
  } catch (err) {
    console.error('Error listing folder images:', err);
  }
  return [];
};

const listSubFolders = async () => {
  const subfolders = [];
  try {
    console.log('inside ListSubFolders');
    const rootRef = ref(storage, "gallery-content");
    const res = await listAll(rootRef);
    res.prefixes.forEach((folderRef) => {
      const subfolder = {};
      subfolder.name = folderRef.name;
      subfolder.href = "#";
      subfolders.push(subfolder);
    });
  } catch (error) {
    console.error('Error listing subfolders:', error);
  }
  return subfolders;
}


export { listSubFolders, listFolderImages };