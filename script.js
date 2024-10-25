// Dosya Yükleme ve Önizleme İşlemi
document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
  
      // Silme butonu ekle
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerText = 'X';
      deleteButton.onclick = function() {
        galleryItem.remove(); // Bu öğeyi sil
      };
  
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = 'Yüklenen Resim';
        galleryItem.appendChild(img);
      } else if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.controls = true;
        video.src = URL.createObjectURL(file);
        galleryItem.appendChild(video);
      }
      
      galleryItem.appendChild(deleteButton);
      gallery.appendChild(galleryItem);
    }
  });
  