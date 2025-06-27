# 🎠 Ürün Döngüsü Projesi (Carousel-case)

Bu proje, bir e-ticaret web sitesinin ana sayfasında yer alan ürün karuselinin **piksel mükemmelliğinde** bir kopyasıdır.  
Tasarım, stil ve yapı tamamen tek bir `JavaScript (.js)` dosyası içinde, **dinamik olarak** oluşturulmuştur.  
Hiçbir harici HTML veya CSS dosyası bulunmaz — tüm yapı `DOM` üzerinden oluşturulur.

---

## 📝 Görev Özeti

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

## 🚀 Kurulum ve Kullanım Rehberi

Bu projeyi tarayıcı üzerinde test etmek ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Projeyi Klonlayın veya İndirin

```bash
git clone https://github.com/dnzozyurt/Carousel-case.git
cd Carousel-case
Alternatif olarak .zip olarak indirip klasörü manuel açabilirsiniz.

##2. e-bebek.com Ana Sayfasına Gidin:

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

✅ Karusel, "stories" bölümünden sonra otomatik olarak eklenecektir.
