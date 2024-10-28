let db;

// Initialize IndexedDB
function initDB() {
  const request = indexedDB.open('GalleryDB', 1);

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    const objectStore = db.createObjectStore('media', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('fileType', 'fileType', { unique: false });
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    loadGalleryFromDB();
  };

  request.onerror = (event) => {
    console.error('Storage error:', event.target.errorCode);
  };
}

// Save file to IndexedDB
function saveFileToDB(file, fileURL) {
  const transaction = db.transaction(['media'], 'readwrite');
  const objectStore = transaction.objectStore('media');

  const fileData = {
    fileType: file.type,
    fileBlob: file
  };

  objectStore.add(fileData);
}

// Load gallery from IndexedDB
function loadGalleryFromDB() {
  const transaction = db.transaction(['media'], 'readonly');
  const objectStore = transaction.objectStore('media');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const fileData = cursor.value;
      displayMedia(fileData.fileType, URL.createObjectURL(fileData.fileBlob), fileData.id);
      cursor.continue();
    }
  };
}

// Display media in the gallery
function displayMedia(fileType, fileURL, fileID) {
  const gallery = document.getElementById('gallery');
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  // Three dots menu and dropdown
  const threeDotsMenu = document.createElement('span');
  threeDotsMenu.classList.add('three-dots-menu');
  threeDotsMenu.innerHTML = '⋮';

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown-menu');

  // Dropdown options
  const downloadOption = document.createElement('button');
  downloadOption.classList.add('dropdown-option');
  downloadOption.innerText = 'Yükle';
  downloadOption.onclick = () => {
    downloadFile(fileURL, fileType);
    dropdown.style.display = 'none';
  };

  const deleteOption = document.createElement('button');
  deleteOption.classList.add('dropdown-option');
  deleteOption.innerText = 'Sil';
  deleteOption.onclick = () => {
    deleteFileFromDB(fileID);
    galleryItem.remove();
    dropdown.style.display = 'none';
  };

  dropdown.appendChild(downloadOption);
  dropdown.appendChild(deleteOption);

  // Toggle dropdown on three dots click
  threeDotsMenu.onclick = () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  };

  document.addEventListener('click', (event) => {
    if (!galleryItem.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  if (fileType.startsWith('image/')) {
    const img = document.createElement('img');
    img.src = fileURL;
    img.alt = 'Uploaded Image';
    galleryItem.appendChild(img);
  } else if (fileType.startsWith('video/')) {
    const video = document.createElement('video');
    video.controls = true;
    video.src = fileURL;
    galleryItem.appendChild(video);
  }

  galleryItem.appendChild(threeDotsMenu);
  galleryItem.appendChild(dropdown);
  gallery.appendChild(galleryItem);
}

// Download file
function downloadFile(fileURL, fileType) {
  const link = document.createElement('a');
  link.href = fileURL;
  link.download = `downloaded-file.${fileType.split('/')[1]}`;
  link.click();
}

// Upload files
document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileURL = URL.createObjectURL(file);
    saveFileToDB(file, fileURL);
    displayMedia(file.type, fileURL);
  }
});

// Delete file from IndexedDB
function deleteFileFromDB(fileID) {
  const transaction = db.transaction(['media'], 'readwrite');
  const objectStore = transaction.objectStore('media');

  const request = objectStore.delete(fileID);
  request.onsuccess = () => {
    console.log(`Item ID ${fileID} deleted.`);
  };
  request.onerror = (event) => {
    console.error('Error during deletion:', event.target.errorCode);
  };
}

// Initialize DB on page load
initDB();
