// Tarayıcıda saklanan öğeleri yükle
window.onload = function() {
    loadGalleryFromStorage();
  };
  
  // Dosya Yükleme ve Önizleme İşlemi
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const galleryItems = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileURL = URL.createObjectURL(file);
      addMediaToGallery(file, fileURL);
      galleryItems.push({ type: file.type, url: fileURL });
    }
  
    // Yeni eklenen öğeleri localStorage'a kaydet
    saveToLocalStorage(galleryItems);
  });
  
  // Galeriye Medya Ekle
  function addMediaToGallery(file, fileURL) {
    const gallery = document.getElementById('gallery');
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
  
    // Silme butonu ekle
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = function() {
      galleryItem.remove();
      removeFromLocalStorage(fileURL); // localStorage'dan kaldır
    };
  
    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = fileURL;
      img.alt = 'Yüklenen Resim';
      galleryItem.appendChild(img);
    } else if (file.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.controls = true;
      video.src = fileURL;
      galleryItem.appendChild(video);
    }
  
    galleryItem.appendChild(deleteButton);
    gallery.appendChild(galleryItem);
  }
  
  // localStorage'da galeriyi kaydet
  function saveToLocalStorage(items) {
    const savedItems = JSON.parse(localStorage.getItem('galleryItems')) || [];
    localStorage.setItem('galleryItems', JSON.stringify([...savedItems, ...items]));
  }
  
  // localStorage'dan galeriyi yükle
  function loadGalleryFromStorage() {
    const savedItems = JSON.parse(localStorage.getItem('galleryItems')) || [];
    savedItems.forEach(item => {
      const file = { type: item.type };
      addMediaToGallery(file, item.url);
    });
  }
  
  // localStorage'dan öğeyi sil
  function removeFromLocalStorage(fileURL) {
    const savedItems = JSON.parse(localStorage.getItem('galleryItems')) || [];
    const updatedItems = savedItems.filter(item => item.url !== fileURL);
    localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
  }
  