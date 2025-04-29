import {initializeApp} from "firebase/app";
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import { readFile } from 'fs/promises';

const config = JSON.parse(
  await readFile(new URL('./firebaseConfig.json', import.meta.url))
);

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

console.log('hello');

const listFolderImages = async (subfolder) => {
  try {
  console.log('inside ListFolderImages');
  let folderPath = "gallery-content" + "/" + subfolder;
  const folderRef = ref(storage, folderPath);
  const res = await listAll(folderRef);
  res.items.forEach(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    console.log(url);
    
  });
  } catch (err) {
    console.error('Error listing folder images:', err);
  }
};

const listSubFolders = async () => {
  try {
    console.log('inside ListSubFolders');
    const rootRef = ref(storage, "gallery-content");
    const res = await listAll(rootRef);
    res.prefixes.forEach((folderRef) => {
      console.log(folderRef.name); 
    });
  } catch (error) {
    console.error('Error listing subfolders:', error);
  }
}

listSubFolders();

export { listSubFolders, listFolderImages };