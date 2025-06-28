# ÜÜrün Karuseli Uygulaması – E-Bebek Klonu

Bu proje, bir e-ticaret web sitesinin ana sayfasında yer alan ürün karuselinin **piksel mükemmelliğinde** bir kopyasıdır.  
Tasarım, stil ve yapı tamamen tek bir `JavaScript (.js)` dosyası içinde, **dinamik olarak** oluşturulmuştur.  
Hiçbir harici HTML veya CSS dosyası bulunmaz — tüm yapı `DOM` üzerinden oluşturulur.

---

## Görev Özeti

Bu projede aşağıdaki özellikler başarıyla uygulanmıştır:

- Ürün verileri belirtilen bağlantıdan `fetch()` ile çekilir
- Başlık: **"Beğenebileceğinizi düşündüklerimiz"**
- Sadece **anasayfada** çalışır (`/` veya `index.html` değilse `console.log("wrong page")`)
- Ürün kartına tıklanırsa sayfa **yeni sekmede** açılır
- `price` ve `original_price` farklıysa:
  - Her ikisi birlikte gösterilir
  - İndirim oranı otomatik hesaplanır
- Kalp ikonuna tıklanırsa:
  - Favorilere eklenir (turuncu kalp)
  - `localStorage` içinde `favProducts` olarak saklanır
- Kod ikinci kez çalıştırıldığında:
  - Ürünler doğrudan `localStorage`’dan çekilir
  - Daha önce favorilenmiş ürünler işaretli şekilde gelir
- Responsive yapı: Mobil, tablet ve masaüstü için uygundur

---

## Kurulum ve Kullanım Rehberi

Bu projeyi tarayıcı üzerinde test etmek ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Projeyi Klonlayın veya İndirin

```bash
git clone https://github.com/dnzozyurt/Carousel-case.git
cd Carousel-case
```
Alternatif olarak .zip olarak indirip klasörü manuel açabilirsiniz.

### 2. e-bebek.com Ana Sayfasına Gidin:

https://www.ebebek.com adresine gidin

Karusel yalnızca anasayfa üzerinde çalışmaktadır

### 3. Geliştirici Konsolunu Açın
Sayfada boş bir alana sağ tıklayın ve “İncele” seçin
veya

Klavyeden F12 tuşuna basın

### 4. Console Sekmesine Geçin
Açılan geliştirici araçları penceresinde üst sekmelerden Console kısmına geçin

### 5. script.js Kodunu Yapıştırın
Projedeki script.js dosyasını açın

Tüm içeriği kopyalayın

Console alanına yapıştırın ve Enter tuşuna basın

Karusel, "stories" bölümünden sonra otomatik olarak eklenecektir.

---

## Proje Yapısı

```bash
Carousel-case/
├── script.js      # Tüm JS, HTML ve CSS bu dosyada
└── README.md      # Proje dokümantasyonu
```
## API Bilgisi
API URL:
```bash
https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json
```
Yanıt Formatı: JSON

## JSON Veri Formatı
```bash
[
  {
    "id": "123",
    "brand": "Marka",
    "name": "Ürün Adı",
    "url": "https://example.com/product",
    "img": "assets/product.jpg",
    "price": 99.99,
    "original_price": 129.99
  }
]
```

---

## Kullanılan Teknolojiler
- Vanilla JavaScript (ES6+)

- DOM ile dinamik HTML/CSS üretimi

- fetch() ile API’den veri çekme

- localStorage ile veri yönetimi

- Harici kütüphane YOK (Bootstrap, jQuery, Swiper vs. kullanılmadı)

---

## Ek Bilgiler
- Bu proje, yalnızca tek bir script.js dosyasından oluşur.

- Proje, Chrome Developer Console üzerinden çalıştırılabilir.

- Tüm HTML ve CSS yapısı JavaScript tarafından oluşturulur.

- Tüm özellikler görev yönergesine %100 uygundur.


