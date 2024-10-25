let db;

// IndexedDB veritabanını başlat
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
    console.error('Veritabanı açma hatası:', event.target.errorCode);
  };
}

// Dosyaları IndexedDB'ye kaydet
function saveFileToDB(file, fileURL) {
  const transaction = db.transaction(['media'], 'readwrite');
  const objectStore = transaction.objectStore('media');

  const fileData = {
    fileType: file.type,
    fileBlob: file,
    fileURL: fileURL
  };

  objectStore.add(fileData);
}

// IndexedDB'den dosyaları yükle
function loadGalleryFromDB() {
  const transaction = db.transaction(['media'], 'readonly');
  const objectStore = transaction.objectStore('media');

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const fileData = cursor.value;
      displayMedia(fileData.fileType, URL.createObjectURL(fileData.fileBlob));
      cursor.continue();
    }
  };
}

// Galeriye medya öğesi ekle
function displayMedia(fileType, fileURL) {
  const gallery = document.getElementById('gallery');
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  // Silme butonu ekle
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'X';
  deleteButton.onclick = function() {
    deleteFileFromDB(fileURL);
    galleryItem.remove();
  };

  if (fileType.startsWith('image/')) {
    const img = document.createElement('img');
    img.src = fileURL;
    img.alt = 'Yüklenen Resim';
    galleryItem.appendChild(img);
  } else if (fileType.startsWith('video/')) {
    const video = document.createElement('video');
    video.controls = true;
    video.src = fileURL;
    galleryItem.appendChild(video);
  }

  galleryItem.appendChild(deleteButton);
  gallery.appendChild(galleryItem);
}

// Dosya yükleme işlemi
document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileURL = URL.createObjectURL(file);
    saveFileToDB(file, fileURL);
    displayMedia(file.type, fileURL);
  }
});

// IndexedDB'den dosya sil
function deleteFileFromDB(fileURL) {
  const transaction = db.transaction(['media'], 'readwrite');
  const objectStore = transaction.objectStore('media');

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      if (URL.createObjectURL(cursor.value.fileBlob) === fileURL) {
        cursor.delete();
      } else {
        cursor.continue();
      }
    }
  };
}

// Veritabanını başlat
initDB();
