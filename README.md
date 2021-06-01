# Test-FE

Aplikasi yang dibuat untuk memudahkan kita mengelola event yang akan datang, dengan penyajian data yang jelas mengenai event tersebut.

### Demo App

Sebelum menjalankan demo aplikasi lakukan dahulu langkah berikut

- ## **Installing package (client):**

-Pertama masuk kedalam folder server lalu jalankan perintah berikut pada terminal :

```
npm install
```

- Jika sudah selesai, untuk bagian client hanya tinggal menjalankan perintah berikut pada terminal :

```
npm run start
```

- ## **Installing package (server):**

- Pertama masuk kedalam folder server lalu jalankan perintah berikut pada terminal :

```
npm install
```

- Lalu di dalam folder server buat file .env lalu masukan variable berikut :

```
ATLAS_URI=mongodb+srv://tan123:tan123@cluster0.qwtx2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

- Lalu buka terminal dan pastikan lokasi direktori sedang berada di folder server
- Apabila belum pernah menginstall nodemon lakukan perintah berikut untuk menginstallnya:

```
npm i -g nodemon
```

- Jika sudah ketikan perintah berikut:

```
nodemon app
```

- Akan ada pemberitahuan pada terminal apabila server sudah berjalan
