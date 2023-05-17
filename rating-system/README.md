# Rating System

Bu repository 18.05.2023 Youtube canlı yayınında gerçekleştirdiğimiz LiveCoding oturumuna aittir.

## Gereksinimler
1. Projeyi çalıştırmak istediğiniz bilgisayarda güncel NodeJS sürümlerinden bir tanesi yüklü olması gerekir. Eğer çalışma ortamınızda NodeJS yüklü değilse linkten kurulumları takip ediniz.
https://nodejs.org/en

Eğer çalışma ortamınızda NodeJS yüklü ise aşağıdaki gibi versiyon kontrolü yapabilirsiniz.

```bash
node -v
npm -v
```

2. Proje için bir tane MongoDB database'ine ihtiyacımız bulunmaktadır. Bu noktada iki alternatif sunabiliriz. Eğer bilgisayarınızda Docker kurulu ise Docker üzerinden aşağıdaki komut ile bir database ayağa kaldırabilirsiniz.

```bash
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongodb/mongodb-community-server:latest
```

Eğer çalışma ortamınızda docker kurulu değilse MongoDB Atlas Cloud platformundan ücretsiz versiyonu kullanarak bir database ayağa kaldırabilirsiniz.
https://www.mongodb.com/atlas/database

## Hazırlıklar

1. Projeyi forklayın. (Projenin ilk haline ulaşmak için Copy the main branch only seçeneğini tiklememeniz gerekmektedir.)
2. Forkladığınız projeyi local bilgisayara klonlayın. (Klonlama işlemini tamamladıktan sonra projenin ilk haline ulaşmanız için rating-system-init branch'ine geçiş yapmanız gerekmektedir.)
3. Aşağıdaki işlemleri tamamlayın.

```bash
cd ./rating-system
npm install
```

4. Projeyi çalıştırmadan önce env bilgilerini ekleyin.

- rating-system klasörü altına .env dosyası oluşturun.

```.env
DATABASE_URL="mongodb://username:password@db0.example.com,db1.example.com,db2.example.com/database"
```

5. Prisma Generate

```bash
npx prisma generate
```

6. Prisma Studio
```bash
npx prisma studio
```

Prisma Studio is up on http://localhost:5555

7. Yeni bir console açın ve uygulamayı çalıştırın.
```bash
npm run dev
```
ready started server on 0.0.0.0:3000, url: http://localhost:3000

## Ek Bilgiler

https://www.youtube.com/watch?v=qiktpsm1dYc

[![Günün Menüsü - NextJS Prisma MongoDB](https://img.youtube.com/vi/qiktpsm1dYc/0.jpg)](https://www.youtube.com/watch?v=qiktpsm1dYc)