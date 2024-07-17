import { Box, Icon } from '@gluestack-ui/themed';
import { Camera } from 'lucide-react-native';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';


export default function PhotoGallery() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // if (file) {
    //   const storageRef  = ref(storage, `images/${file.name}`);
    //   const uploadTask = uploadBytesResumable(storageRef, file);
    //   uploadTask.on(
    //     "state_changed",
    //     (snapshot: any) => {
    //       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //       console.log("Upload is " + progress + "% done");
    //     },
    //     (error: any) => {
    //       console.error("Upload error:", error);
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
    //         console.log('File available at', downloadURL);
    //       setImage(downloadURL); 
    //       });
    //     }
    //   );
    // }
  };

  return (
    <div style={styles.photoGallery}>
      <Box style={styles.photoGalleryImagesItem}>
        <div style={styles.uploadContainer}>
          <input type="file" id="file-input" onChange={handleImageUpload} hidden />
          <label htmlFor="file-input">
            <Camera size={30} color="#2C363F" style={{
              alignItems: 'center',
              justifyContent: 'center',
            }} />
          </label>
          {image && <img style={styles.photoGalleryImagesPreview} src={image} alt="Preview" />}
        </div>
      </Box>
    </div >
  );
}

const styles = StyleSheet.create({
  photoGallery: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    marginRight: 10
  },
  photoGalleryImagesItem: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ebebeb',
  },
  photoGalleryImagesPreview: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 95,
    height: 95,
    objectFit: 'contain'
  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    opacity: 0,
  }
})