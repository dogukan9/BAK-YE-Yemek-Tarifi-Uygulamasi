import Category from '../models/category';
import Meal from "../models/meal"; 
export const CATEGORIES=[

new Category("c1","Kahvaltılık Tarifler","#f5428d",require('../assets/images/kahvalti.jpg')),
new Category("c2","Çorba Tarifleri","#f54242",require('../assets/images/corba.jpg')),
new Category("c3","Tatlı Tarifleri","#f5a442",require('../assets/images/tatli.jpg')),
new Category("c4","Salata & Meze","#f5d141",require('../assets/images/salata.jpg')),
new Category("c5","Et Yemekleri","#368dff",require('../assets/images/et.jpg')),
new Category("c6","Makarna Tarifleri","#41d95d",require('../assets/images/makarna.jpg')),
new Category("c7","Pilav Tarifleri","#9eecff",require('../assets/images/pilav.jpg')),
new Category("c8","Sebze Yemekleri","#b9ffb0",require('../assets/images/sebze.jpg')),
new Category("c9","Aperatifler","#ffc7ff",require('../assets/images/aperatif.jpg')),
new Category("c10","Kurabiyeler","#f54242",require('../assets/images/kurabiyeler.jpg')),
new Category("c11","Diyet Yemek Tarifleri","#368dff",require('../assets/images/diyet.jpg')),
new Category("c12","Hamur İşi Tarifleri","#47fced",require('../assets/images/hamur.jpg')),




];
export const MEALS = [
     new Meal(
      'm1',
      ['c1'],
      'Kahvaltılık Krep Tarifi',
      
      require('../assets/images/kahvaltilik_krep.jpg'),
      20,
      [
        '2 adet yumurta',
        '2 su bardağından biraz az un',
        '2 su bardağı süt (dilerseniz yarı yarıya süt ve su karışık kullanılabilir)',

        '1 çay kaşığı tuz',
        'pişirmek için tereyağı veya sıvı yağ',
      ],
      [
        'Krep tarifi hazırlamak için un, süt ve su ile hiç topak kalmayana kadar iyice çırpın.',
        'Yumurtaları ekleyin biraz daha çırpın. Kek hamurundan daha akıcı bir kıvamda hamur edin.',
        'Teflon tavaya 1 çay kaşığı kadar tereyağı veya sıvı yağ koyup fırça ile yayın.',
        'Kızgın tavaya 1 kepçe krep hamuru dökün, sağa sola eğerek yayın.',
        'Her iki tarafını çevirerek hafif kızarana kadar orta ateşte pişirin. Tüm harcınız bitene kadar bu işleme devam edin. Krep tarifimiz hazır, afiyet olsun.',
       ],
       "4",
      false,
      false,
      false,
      false
      
    ),
  
    new Meal(
      'm2',
      ['c1'],
      'Pofuduk Kahvaltılık',
      
      require('../assets/images/pofuduk-kahvaltilik-tarifi.jpg'),
      15,
      [
        'Pofuduk Kahvaltılık',
        '1 çay bardağı süt',
        '1 su bardağı rendelenmiş kaşar peyniri',
        '4-5 dal maydanoz',
        '3 su bardağı un',
        '1 paket kabartma tozu',
        '1 tatlı kaşığı şeker',
        '1 çay kaşığı tuz',
        '1 su bardağısıvı yağ (Kızartmak için)'
      ],
      [
        'Yumurtaları derince bir kaba kırın ve üstüne; süt, rendelenmiş kaşar peyniri, ince doğranmış maydanoz, kabartma tozu, şeker ve tuzu ekleyip güzelce karıştırın.',
        'Sonra unu yavaş yavaş ilave edin.',
        'Ele yapışmayan bir hamur elde edin.',
        'Hamuru bir merdane yardımıyla çok ince y ada çok kalın olmayacak şekilde açın.  Açtığınız hamuru bir su bardağı yardımı ile kesin.',
        'Bir tavaya aldığınız sıvı yağda arkalı önlü güzelce kızartın',
        'Tüm hamura aynı işlemi uygulayın.',
        'Tüm hamurlar kızarınca sıcak sıcak servis edin. Afiyetler olsun!',




      ],  
      "30 adet",
      false,
      false,
      false,
      false
      
    ),
  
    new Meal(
      'm3',
      ['c1'],
      'Yelpaze Yumurta Kapama',
      
      require('../assets/images/yelpaze-yumurta.jpg'),
      10,
      [
        '4 adet yumurta',
        '2 adet domates',
        '2 adet yeşil köy biberi',
        '1 tutam maydanoz',
        '15 dilim sucuk',
        '1 yemek kaşığı tereyağı',
        '1 yemek kaşığızeytinyağı',
        '1 tutam kuru nane',
        '1 çimdik karabiber',
       '1 tutam kırmızı toz biber',
       '3 yemek kaşığı rendelenmiş kaşar peyniri' 

      ],
      [
        'Yumurtaları bir küçük tencereye alın ve üstlerine geçecek kadar su doldurup, tamamen katı olacak şekilde yaklaşık 4 dakika kadar kaynatın',
        'Yumurtalar haşlanırken; domatesleri halka halka, biberleri de parmak kadar doğrayın.',
        'Bir tavaya tereyağını ve zeytinyağını aldıktan sonra domatesleri ve biberleri tavaya dizin',
        'Bir tarafları hafifçe kızarınca terslerini çevirin',
        'Sucukları ayrı bir tavaya alın ve kendi yağında pişirin.',
        'Yumurtaların kabuklarını soyun ve bir bıçakla enine dilimleyin. Ancak dip kısmını kesmeyin, yelpaze gibi olsun.',
        'Aralara sucukları yerleştirin ve bu şekilde domatesle biberlerin üstüne yerleştirin.',
        'Üstlerine baharatları serpin, ince doğranmış maydanozu serpin ve sonra olarak kaşar peynirini de serptikten sonra, kapağını kapatıp, kaşarlar eriyene dek pişirin. Sıcak sıcak servis edin. Afiyet olsun.',



      ],
      "4",
      false,
      true,
      false,
      true
      
    ),
  
    new Meal(
      'm4',
      ['c1'],
      'Patates Tava',
      require("../assets/images/patates-tava.jpg"),
      20,
      [
        '2 yemek kaşığı zeytinyağı',
        '1 adet kabak(dilimlenmiş)',
        '1 adet kapya biber(dilimlenmiş)',
        '8 adet patates(haşlanmış, kabuklu şekilde doğranmış)',
        '1 yemek kaşığı tereyağı',
        '1 çay kaşığı tuz',
        '1/2 çay kaşığı karabiber',
        '4 adetyumurta',
        '1 tutam maydanoz',

      ],
      [
        'Zeytinyağını geniş bir tavaya alın ve ısıtın.',
        'Dilimlenmiş kabakları tavaya dizin ve arkalı önlü biraz kızartın.',
        'Dilimlenmiş kapya biberleri ilave edin.',
        'Biraz karıştırdıktan sonra haşlanmış ve kabuğuyla birlikte doğranmış patatesleri ekleyin.',
        'Üzerine tereyağını ekleyin. Tuz ve karabiberini döktükten sonra karıştırın.',
        'Her bir yumurtayı tavanın 3 köşesine kırarak, tavanın kapağını kapatın.',
        'Yumurtalar piştikten sonra maydanoz serperek servis edebilirsiniz. Afiyet olsun.'
      ],
      "4",
      false,
      false,
      true,
      false
     
    ),
  
    new Meal(
      'm5',
      ['c2'],
      'Yayla Çorbası',
      
      require("../assets/images/yayla-corbasi.jpg"),
      
      35,
      [
        
        "1 çay bardağı pirinç",
        "3 su bardağı su",
        "3 su bardağı sıcak su (tavuk veya kemik suyu)",
        "Tuz",
        "Terbiyesi için;",
        "1 adet yumurta sarısı",
        "1,5 su bardağı yoğurt",
        "1 yemek kaşığı un",
        "Sosu İçin;",
        "2 yemek kaşığı tereyağı",
        "1 yemek kaşığı kuru nane"

      ],
      [
       "Yayla çorbası için ilk olarak pirinçler yıkanarak suda yumuşayıncaya kadar haşlanır.",
"Yayla çorbamızın terbiyesi için diğer taraftan yumurta sarısı, yoğurt, un bir kasede iyice çırpılır.",
"Pişen pirinçlere varsa et ya da kemik suyu yoksa 3 su bardağı sıcak su ilave edilir.",
"Çorbanın suyundan 1-2 kepçe alınarak yavaş yavaş alınıp terbiyeye ilave edilir.",
"Hafifçe sulanan bu karışım ılınmış olan çorbaya ilave edilir ve 1-2 taşım kaynatılır.",
"En son tuzu ilave edilir, bir kaç dakika daha kaynatılarak ocak kapatılır.",
"Üzerine sos için kuru nane eritilmiş tereyağında kızdırılarak gezdirilir. Yayla çorbamız servise hazır. Afiyet olsun."
      ],
      "6",
      
      false,
      false,
      false,
      false
      
    ),
  
    new Meal(
      'm6',
      ['c2',],
      'Tavuk Çorbası (Adana Usulü)',
     
      require("../assets/images/tavuk-corbasi.jpg"),
          45,
      [
        '2 tane tavuk but',
        'Yağ',
        '1 kaşık biber salçası',
        'Yarım şeker kaşığı kuru nane',
        '6 su bardağı tavuk suyu',
        'Tuz',
        '3 diş sarımsak',
        '1 yemek kaşığı un'
      ],
      [
        "İlk önce tavuğu yıkayıp düdüklüye koyun.",
"Üzerine 8 su bardağı sıcak su koyun ve 1 şeker kaşığı tuz atın. 25 dakika kaynasın.",
"Eti bir kaba koyun, soğusun ve suyunu da bir başka kaba süzerek alın.",
"3 diş sarımsağı dövün ve 3 yemek kaşığı kadar yağda kavurun, salçayı ekleyin ve kavurun.",
"Kokusu çıkınca unu ekleyip kavurun.",
"Hızlıca, 6 su bardağı tavuk suyunu ekleyin ve karıştırın.",
"Nanesini ekleyin, böyle 5 dakika kaynasın.",
"Çorba kaynarken etleri doğrayın ve 5 dakika sonra içine ekleyin, 10 dakika da böyle kaynasın."
      ],
      "6",
      false,
      true,
      false,
      false
     
    ),
  
    new Meal(
      'm7',
      ['c2'],
      'Terbiyeli Erişteli Yeşil Mercimek Çorbası',
      
      require("../assets/images/tebiyeli-Mercimek.jpg"),
            35,
      [
        "8 bardak su veya et suyu",
        "1 su bardağı haşlanmış yeşil mercimek",
        "1 su bardağı erişte",
        "Terbiyesi için :",
        
        "1 su bardağı yoğurt",
        "1 yumurta",
        "2 yemek kaşığı un",
        "Tuz",
        "Üzeri için:",
        
        "2 yemek kaşığı tereyağı",
        "1 tatlı kaşığı nane",
        "1 çay kaşığı pul biber",
      ],
      [
        "8 bardak suyu tencereye koyup kaynatın.",
        "Kaynar kaynamaz erişteyi ilave edip, karıştırın.",
        "Eriştenin pişmesine yakın, haşlanmış mercimeği ilave edip karıştırın.",
        "Erişte ve mercimek birkaç dakika kaynarken terbiyeyi hazırlayın.",
        "Bunun için bir kaseye yumurta, un ve yoğurdu koyup çırpın.",
        "Çorbanın kaynayan suyundan bir kaç kepçe terbiyeye ilave edip, terbiyenin çorbaya ilave ettiğinizde kesilmemesi için ılımasını sağlayın.",
        "Bir taraftan kepçeyle karıştırıp, bir taraftan terbiyeyi ilave edin.",
        "Kaynadıktan sonra çorbanın kıvamını sıcak suyla ayarlayın(Ben 2 bardak su kullandım. Bu ölçü kaşıktaki un ölçünüze göre değişebilir ).",
        "Tuzunu ilave edip, kaynamaya başladıktan sonra bir süre daha çorbayı pişirip ocaktan alıp tencerenin kapağını kapatın.",
        "Tereyağı, nane ve pul biberi kızdırıp çorbanın üzerine gezdirin. Sıcak sıcak servis edin.",
      ],
     "6",
      
      false,
      false,
      false,
      false
    ),


    new Meal(
      'm8',
      ['c3'],
      'Portakallı İrmik Helvası',
      
      require("../assets/images/portakalli-irmik.jpg"),
            30,
      [
        "4 yemek kaşığı tereyağı",
"1/2 çay bardağı sıvı yağ",
"2 su bardağı irmik",
"1 adet rendelenmiş portakal kabuğu",
"1 su bardağı portakal suyu",
"2 su bardağı su",
"2 su bardağı toz şeker",
"4 yemek kaşığı ceviz içi"
      ],
      [
        "Bir tencerede sıvı yağ ve tereyağını eritin. Üzerine irmiği ekleyip 10 dakika boyunca sürekli olarak karıştırarak orta ateşte kavurun.",
        "Portakal kabuğunu da tencereye ekleyin ve 2 dakika daha kavurun.",
        "Kavrulmuş irmiğin üzerine portakal suyunu ilave edip karıştırın.",
        "2 su bardağı sıcak suyu 2 su bardağı toz şekerle karıştırın ve tencereye yavaş yavaş ilave edip karıştırın",
"Kısık ateşte, şerbetini çekip kıvam alana kadar pişirme işlemini sürdürün.",
"Helva tenceresi üzerine kağıt havlu ya da hafif nemli bir mutfak bezi kapatıp demlenmeye bırakın.",
"Dinlenmiş olan mis kokulu helvayı ceviz içi serpiştirerek servis edin, afiyet olsun!"

],
     "6",
     
      false,
      false,
      false,
      false
    ),

    new Meal(
      'm9',
      ['c3'],
      'Supangleli Yalancı Tavuk Göğsü',
      
      require("../assets/images/supangleli-tavuk-gogsu.jpg"),
            25,
      [
        "Tavuk Göğsü İçin:",
        "125 gram tereyağı",
        "1 su bardağı un",
        "1 litre süt",
        "1 su bardağı toz şeker",
        "Supangle İçin:",
        "500 gram süt",
        "1/2 su bardağı toz şeker",
        "1,5 yemek kaşığı un",
        "1 yemek kaşığı nişasta",
        "2 yemek kaşığı kakao",
        "1 adet yumurta sarısı",
        "60 gram bitter çikolata",
        "Üzeri İçin:",
        "2 yemek kaşığı kakao",
      ],
      [
"Tavuk göğsünü hazırlamak için, bir tencerede tereyağını eritin. Üzerine unu ilave edip 2-3 dakika kadar kavurun.",
"Kavrulan unun üzerine süt ve toz şekeri ekleyip, sürekli olarak karıştırarak pişirin.",       
"Kıvamı koyulaşmaya ve kaynamaya başladıktan sonra ocaktan alıp bir kaseye aktarın ve oda sıcaklığında bekletin.",
"Supangleyi hazırlamak için, ayrı bir tencereye süt, toz şeker, un, nişasta, kakao ve yumurta sarısını ekleyin ve sürekli olarak karıştırarak koyulaşana dek pişirin.",
"Pişen karışımı ocaktan alın ve sıcakken doğranmış bitter çikolata parçalarını ekleyip pürüzsüz bir kıvama gelene dek karıştırın.",
"Oda sıcaklığında beklettiğiniz tavuk göğsünü pürüzsüz ve ağdalı bir hale gelene kadar, yaklaşık 5 dakika mikserle çırpın.",
"Hazırladığınız tavuk göğsünü tabanını suyla ıslattığınız bir servis kabına boşaltın. Üzeri kabuk olana dek oda sıcaklığında bekletin.",
"Üzeri kabuklaşmış olan tavuk göğsünün üzerine supangleyi dökün ve güzelce yayın. Buzdolabında soğuyana dek, yaklaşık 3-4 saat bekletin.",
"Servis etmeden önce süzgeç yardımıyla üzerini kaplayacak kadar kakao serpiştirin.",
"Supangleli tavuk göğsü hazır, afiyet olsun!"
],
     "4",
     false,
     false,
     false,
     false
    ),
    new Meal(
      'm10',
      ['c3'],
      'Nişastasız Sütlaç',
      
      require("../assets/images/nisastasiz-sutlac.jpg"),
            30,
      [
        "2 çay bardağı pirinç",
        "1 litre su",
        "1200 ml.süt(1 litre süt + 1 su bardağı süt)",
        "3 yemek kaşığı pirinç unu",
        "1,5 su bardağı toz şeker",
        "1 paket vanilin",
        "Üzeri için:",
        "1 yemek kaşığı toz tarçın"
      ],  
      [
"Pirinci güzel yıkayın ve bir tencereye aldıktan sonra üstüne 1 litre suyu ekleyin. Kaynamaya başladıktan sonra 10 dakika kadar kaynatın.",
"Pirinçler haşlanırken ayrı bir tabakta pirinç ununu 1 su bardağı sütle güzelce karıştırın. 1 litre sütü de ocakta kaynayan pirinçli suya ekleyin ve tekrar kaynamasını bekleyin, ara ara karıştırın.",
"Ocakta kaynamakta olan pirinçli su ve süt karışımından birkaç kepçe alıp sütlü pirinç unu karışımına ekleyerek onu ılıklaştırın. Yeterince ılıklaştığında sürekli karıştırarak bu karışımı tencereye boşaltın.",
"Tekrar kaynamasını bekleyin ve bu süre boyunca sürekli karıştırın. Kaynamaya başladıktan sonra 5 dakika kadar daha kaynatın ve şekerini ekleyin.",
"Tekrar kaynamaya başlayınca altını kapatın ve vanilini ekleyip karıştırın. Servis kaselerine paylaştırın ve oda ısısından soğumasını bekleyin.",
"Soğuduktan sonra buzdolabına alın ve en az 2 saat soğuttuktan sonra üstlerini tarçınla süsleyerek servis edin. Afiyetler olsun!",
      ],
     "8 adet",
     false,
     false,
     false,
      false
    ),
   
    new Meal(
      'm11',
      ['c4'],
      'Köz Biberli Yoğurtlu Patates Salatası',
      
      require("../assets/images/biberli-salata.jpg"),
            0,
      [
        "4-5 adet haşlanmış patates",
        "3 adet közlenmiş kırmızı biber",
        "1 çay bardağı mısır",
        "1 havuç",
        "3-4 tane kornişon turşu",
        "4-5 dal taze soğan",
        "Taze nane",
        "Tuz",
        "2 su bardağı yoğurt",
        "5 yemek kaşığı mayonez",
        "2-3 diş sarımsak"
      ],
      [
        "Öncelikle patateslerimizi haşlayıp soğutuyoruz.",
        "Kabuklarını soyup küp küp doğruyoruz.",
        "Köz biberlerimizi, kornişon turşumuzu, taze soğanımızı ve taze nanemizi küçük küçük doğruyoruz.",
        "Havucumuzuda rendeliyoruz.",
        "Ayrı bir kasede yoğurdu, mayonezi, tuzu ve dövülmüş sarımsağı karıştırıp iyice çırpıyoruz.",
        "Bütün hepsini patateslerle karıştırıp servis ediyoruz. Afiyet olsun :)",
],
     "4-6",
     false,
     false,
      true,
      false
    ),

    new Meal(
      'm12',
      ['c4'],
      'Yıldız Şehriye Salatası',
      
      require("../assets/images/yildiz-sehriye.jpg"),
            0,
      [
        "1 su bardağı yıldız şehriye",
        "4-5 dal yeşil soğan",
        "1 kutu konserve mısır",
        "7-8 adet kornişon turşu",
        "maydanoz",
        "1 adet kırmızı biber",
        "tuz",
        "zeytinyağı",
        "1 adet limon suyu"
      ],
      [
        "Yıldız şehriyesi salatası için ilk olarak 1 su bardağı şehriye haşlanır ve suyu süzülür.",
        "Derince bir kaba  haşlanmış yıldız şehriye, doğranmış yeşil soğan, suyu süzülmüş konserve mısır, küçük kesilmiş kornişon turşu, maydanoz, kırmızı biber alınır ve karıştırılır.",
        "Salatamızın tuzu ayarlanır, zeytinyağı ve limon suyu eklenerek karıştırılır.",
        "Servis tabağına alınır. Şehriyeli nefis salatamız hazır. Afiyet olsun.",
],
     "4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm13',
      ['c4'],
      'Renkli Kış Salatası',
      
      require("../assets/images/kis-salatasi.jpg"),
            0,
      [
        "1/4 (çeyrek) brokoli",
        "1/4 (çeyrek) karnabahar",
        "1 pancar",
        "2 havuç",
        "1/2 (yarım) çay bardağı ceviz",
        "Tuz",
        "Karabiber",
        "Zeytinyağı",
        "Sos için;",
        
        "1 limonun suyu",
        "Tuz",
        "Karabiber",
        "Zeytinyağı",
        "Ballı elma sirkesi"
      ],
      [
        "Karnabahar ve brokoliyi dallarına ayırıp havuçları şekilli kesin.",
        "Karnabaharı, brokoliyi ve havuçları tuz karabiber ve zeytinyağıyla katıştırıp fırın tepsisine yayıyoruz.",
        "Fırında üzerin hafif kızarana kadar 10 dk. Pişiriyoruz.",
        "Pancarı önce yağlı kağıda sonra folyoya sarıp fırında 10-15 dk pişiriyoruz.",
        "Fırından çıkan ve soğumuş olan sebzeleri bir kaba alın.",
        "Pancarların kabuklarını soyup 2 ye bölüp dilimleyin ve diğer sebzelerin üzerine ekleyin.",
        "Cevizleri salatanın üzerine serpin.",
        "Sosu için tüm malzemeleri karıştırıp salatanın üzerine dökün.Afiyet olsun."
],
     "2-4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm14',
      ['c4'],
      'Havuç Tarator',
      
      require("../assets/images/havuc-tarator.jpg"),
            3,
      [
      "3 adet havuç",
      "3-4 yemek kaşığı sıvı yağ",
      "2 diş sarımsak",
      "4 yemek kaşığı yoğurt",
      "Tuz"
      ],
      [
        "3-4 yemek kaşığı sıvı yağ genişçe bir tavaya alınır.",
        "Küçük küçük doğradığımız iki diş sarımsak tavaya eklenerek kokusu çıkana kadar kavrulur.",
        "Son olarak rendelenmiş havuçlar ilave edilir.",
        "Havuçlar yumuşayıncaya kadar yaklaşık 3-4 dakika kavrularak ocaktan alınır ve soğumaya bırakılır.",
        "Ayrı bir kasede suyu süzülmüş yoğurt ile tuz eklenerek çırpılır.",
        "Soğuyan havuçlar yoğurda ilave edilerek karıştırılır ve servis tabağına alınır.",
        "Havuç taratorumuz servise hazır deneyeceklere afiyet olsun."
],
     "1 tabaklık",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm15',
      ['c4'],
      'Babagannuş',
      
      require("../assets/images/babagannus.jpg"),
            20,
      [
        "5 tane patlıcan",
        "2 tane kırmızı biber",
        "3 tane yeşil biber",
        "1 tane orta boy soğan",
        "2-3 diş sarımsak",
        "2 tane domates",
        "1 çorba kaşığı biber salçası",
        "4-5 yemek kaşığı kadar zeytinyağı",
        "1 yemek kaşığı sıvı yağ",
        "Karabiber",
        "Kırmızı biber",
        "Tuz",
        "Limon suyu"
      ],
      [
        "Biber ve patlıcanları közleyin, kabuklarını soyun ve döverek ezin.",
        "Soğanı minik minik doğrayıp az sıvı yağ koyduğunuz tavada kavurun.",
        "Biber salçası ve baharatları ekleyin.",
        "Soğan ve ezilmiş patlıcanları, ince doğranmış domatesleri ve maydanozları derince bir kapta karıştırın.",
        "Üzerine limon suyu, zeytinyağı, tuz ve dövülmüş sarımsakları ekleyin, karıştırın."
],
     "3",
     false,
     false,
     false,
      true
    ),
    new Meal(
      'm16',
      ['c5'],
      'Belen Tava',
      
      require("../assets/images/belen-tava.jpg"),
            45,
      [
        "1 adet soğan(doğranmış)",
        "1 adet yeşil biber(doğranmış)",
        "1 adet kapya biber(doğranmış)",
        "1 adet doğranmış domates",
        "4 diş sarımsak",
        "1 çay kaşığı tuz",
        "1 çay kaşığı kekik",
        "1 çay kaşığı pul biber",
        "100 gram eritilmiş tereyağı",
        "400 gram kuzu eti"
      ],
      [
        "Tüm doğranmış sebzeleri bir kabın içerisinde karıştırın ve demir döküm tavanızın altına güzelce yayın.",

        "Üzerine iri parçalar halinde doğranmış kuzu etlerini tüm sebzelerin üzerini kapatacak şekilde dizin.",
        
        "Ardından üzerine eritilmiş tereyağını gezdirin.",
        
        "200 derecelik fırında 45-50 dakika kadar pişirin. Çıkarıp sıcak sıcak servis edin. Afiyet olsun!"
],
     "4",
     false,
      true,
      false,
      true,
    ),

    new Meal(
      'm17',
      ['c5'],
      'Buğu Kebabı',
      
      require("../assets/images/bugu-kebabi.jpg"),
            45,
      [
      

"600 gram dana kuşbaşı eti",
"3 yemek kaşığı sıvı yağ",
"150 gram arpacık soğan",
"2 adet kapya biber",
"2 adet orta boy patates(küp doğranmış)",
"2 adet havuç(küp doğranmış)",
"2 çay bardağı bezelye",
"2 diş sarımsak(ezilmiş)",
"1 tatlı kaşığı tuz",
"1 çay kaşığı karabiber",
"Üzeri için:",
"100 gram rendelenmiş kaşar peyniri"
      ],
      [
        "Bir tencere veya düdüklüde etleri mühürleyin ve üzerini geçecek kadar su ekleyip etler yumuşayana kadar pişirin.",

        "Ayrı bir tencerede sıvı yağ ile birlikte arpacık soğanı kavurun.",
        
        "Üzerine kapya biber, patates ve havuçları da koyup kavurmaya devam edin.",
        
        "Yumuşayan etleri, bezelyeyi, sarımsağı, tuz ve karabiberi de ekledikten sonra 2 su bardağı et suyunu tencereye aktarın.",
        
        "Bu şekilde suyunu yarısına çekene kadar pişirin.",
        
        "Pişen kebabı bir fırın kabına aktarın.",
        
        "Üzerine beşamel sosu yayıp, rendelenmiş kaşar peyniri de yayın.",
        
        "190 derecede 15 dakika, üzeri kızarana kadar pişirin ve sevdiklerinizle afiyetle tüketin."
],
     "5",
     false,
      true,
      true,
      false,
    ),
    new Meal(
      'm18',
      ['c5'],
      'Fırın Ağzı',
      
      require("../assets/images/fırın-agzı.jpg"),
            60,
      [
        "1 kilogram kuzu pirzola",
        "1 çay bardağı zeytinyağı",
        "1,5 çay kaşığı tuz",
        "1 çay kaşığı karabiber",
        "10 adet yeşil biber(doğranmış)",
        "10 adet sarımsak(doğranmış)",
        "3 adet domates (dilimlenmiş)",
        "100 gram kuyruk yağı(küp doğranmış)"
      ],
      [
        "Pirzolaları fırın tepsisine dizin. Zeytinyağını gezdirin, tuz ve karabiberi serpin, elinizle hafifçe yedirin.",

        "Biberleri ve sarımsakları tepsiye yayın. Domatesleri dizin ve kuyruk yağlarını boşluklara yerleştirin.",
        
        "Önceden ısıtılmış 220 derece fırında 1 saat pişirin. Fırından çıkardıktan sonra porsiyonlayın ve sıcak olarak tüketin, afiyet olsun!"
],
     "8",
     false,
      true,
      false,
      true
    ),
    new Meal(
      'm19',
      ['c5'],
      'İslim Kebabı',
      
      require("../assets/images/islim-kebabi.jpg"),
            25,
      [
        "4 adet orta boy patlıcan",
        "3 yemek kaşığı zeytinyağı",
        "2 adet orta boy domates",
        "2 adet orta boy yeşil biber",
        "Köftesi için:",
        "500 gram orta yağlı kıyma",
        "1 adet orta boy kuru soğan(rendelenmiş)",
        "4 yemek kaşığı galeta unu",
        "2 diş sarımsak(ezilmiş)",
        "1 adet yumurta",
        "1 çay kaşığı tuz",
        "1 çay kaşığı pul biber",
        "1 çay kaşığı kimyon",
        "1 çay kaşığı karabiber",
        "Sosu için:",
        "2 yemek kaşığı zeytinyağı",
        "2 adet domates(rendelenmiş)",
        "1 diş sarımsak(ezilmiş)",
        "1/2 su bardağı sıcak su",
        "1/2 çay kaşığı tuz",
        "1 çay kaşığı karabiber"
      ],
      [
"Kabuklarını alacalı şekilde soyduğunuz patlıcanları keskin bir bıçak yardımıyla uzun ince şeritler halinde dilimleyin. Acısının çıkması için tuzlu suda bekletin.",
"Orta yağlı dana kıymayı karıştırma kabına alın. Rendelenmiş kuru soğan, yumurta ve galeta unu, sarımsak, tuz, karabiber, pul biber ve kimyon katın.",
"Köfte harcını özleşene kadar yaklaşık 10-15 dakika yoğurun.Köfte harcını altı cevizden biraz daha büyük parçalar ayırın",
"Avuç içinizde yuvarladığınız köfteleri,  tavada arkalı önlü ters çevirerek pişirin.",
"Tuzlu suda dinlenen patlıcanların suyunu süzüp bol suda durulayın. Üzerlerini bir kağıt havlu yardımıyla kurulayın. Yağı kızdırdığınız tavada arkalı önlü ters çevirerek kızartın. Fazla yağını kağıt havlu yardımıyla alın.",
"Sap kısımlarını aldığınız yeşil biberleri dört eşit parçaya bölün. Cherry domatesleri ikiye bölün.",
"İki adet kızarmış patlıcan şeridini artı şeklini alacak şekilde servis tabağına yerleştirin. Orta kısmına bir adet kızarmış köfte koyup kapatın.",
"Üzerine bir parça yeşil biber ve cherry domates yerleştirip kürdanla tutturun. Tüm köfteleri aynı şekilde patlıcan şeritlerine sardıktan sonra fırın tepsisine yerleştirin.",
"Sosu için; zeytinyağını küçük bir sos tenceresinde kızdırın. Rendelenmiş domates ve  sarımsağı pişirin. Tuz ve karabiberini de ekledikten sonra 4-5 dakika kadar kaynatıp ocaktan alın.",
"Hazırladığınız sosu patlıcanları aldığınız fırın tepsisine aktarın.",
"İslim kebaplarını önceden ısıtılmış 180 derece fırında 30 dakika kadar pişirdikten sonra sıcak olarak servis edin.Afiyetler olsun!"
],
     "8 adet",
     false,
      true,
      false,
      true
    ),
    new Meal(
      'm20',
      ['c6'],
      'Fettucini Alfredo',
      
      require("../assets/images/fettucini.jpg"),
            25,
      [
        "1 paket fettucine makarna",
        "2 yemek kaşığı tereyağı",
        "2 yemek kaşığı zeytinyağı",
        "200 gram mantar",
        "300 gram tavuk göğsü",
        "3 diş sarımsak",
        "1 su bardağı krema",
        "1/4 demet fesleğen",
        "1/2 su bardağı rendelenmiş parmesan peyniri",
        "1/2 çay kaşığı taze çekilmiş tane karabiber",
        "1 çay kaşığı tuz"
      ],
      [
"Makarnanın sosu için; geniş bir tavada 2'şer yemek kaşığı tereyağı ve zeytinyağını kızdırın.",
"200 gram dilimlenmiş mantarları tavaya ekleyin ve yüksek ateşte soteleyin.",
"Mantarlar sotelendikten sonra 300 gram jülyen doğranmış tavukları ilave edin ve sotelemeye devam edin.3 diş ezilmiş sarımsak ile tavuk ve mantarları tatlandırın.",
"1 çay kaşığı tuz ve 1 çay kaşığı karabiberi de ilave edin. Ardından 1 su bardağı krema, yarım su bardağı rendelenmiş parmesan peyniri ve bir avuç doğranmış taze fesleğeni de ekleyin ve güzelce karıştırdıktan sonra kısık ateşte pişmeye bırakın.",
"Ayrı bir tencerede suyu haşlayın ve içerisine bir tatlı kaşığı tuz ve makarnayı ekleyip 8 dakika kadar haşlamaya bırakın.",
"Haşlanan makarnanın suyunu süzün ve durulamadan sos tenceresine alın. Sos ile birlikte yaklaşık 5 dakika kadar pişen makarnayı, rendelenmiş parmesan peyniri ve fesleğen yapraklarıyla servis edin",
"Afiyet olsun!"
],
     "4",
     true,
      true,
      false,
      false
    ),
    new Meal(
      'm21',
      ['c6'],
      'Limonlu Spagetti',
      
      require("../assets/images/limonlu-spagetti.jpg"),
            10,
      [
        "1 paket spaghetti makarna",
        "2 adet limon",
        "150 gram oda sıcaklığında tereyağı",
        "1 su bardağı rendelenmiş parmesan peyniri",
        "Haşlamak için:",
        "2 yemek kaşığı tuz",
        "Servisi için:",
        "2 yemek kaşığı rendelenmiş parmesan peyniri",
        "1 çay kaşığı taze çekilmiş karabiber",
        "10-12 adet maydanoz yaprağı"
      ],
      [
        "Bir tencereye bolca su ve 3 yemek kaşığı tuzu ilave edip kaynamaya bırakın. Su kaynarken siz de diğer malzemeleri hazırlayın.",
        
        "Limonların suyunu sıkın ve limon suyunu bir kenara alın. Sıktığınız limonların kabuklarını da atmayın, sonra kullanacaksınız.",
        
        "Parmesan peynirini de rendeleyip bir kenara alın ve oda sısındaki tereyağını küçük parçalara ayırın.",
        
        "Makarna suyu kaynayınca makarnayı içerisine atın ve paketin üzerinde belirtildiği dakika kadar, ara ara karıştırarak pişirin.",
        
        "Makarna pişerken, pişme süresinin sonuna doğru yapışmaz tabanlı başka bir tencereyi de ocağa alın ve biraz ısıtın, tencere ısındıktan sonra altını kapatın.",
        
        "Makarna pişer pişmez, bir makarna kepçesi yardımıyla makarnaları suyun içinden alıp, ocakta ısıtmış olduğunuz diğer tencereye aktarın.",
        
        "Diğer tencereye aldığınız makarnanın üstüne küçük parçalara ayırdığınız tereyağını ve limon suyunu ilave edin ve tahta bir kaşık yardımıyla tereyağı tamamen eriyene dek karıştırın. Tereyağı eriyince ½ su bardağı kadar makarna suyundan da ilave edin ve hızlıca birkaç kez daha karıştırın.",
        
        "Parmesanın ufak bir miktarını süsleme için ayırın ve geri kalan parmesanı da makarnanın üstüne döküp, tahta kaşık yardımıyla tamamen eriyene dek karıştırın. Eğer makarnanın ısısının yetersiz olduğunu düşünürseniz, bu esnada tencerenin altını 1 dakika kadar açabilirsiniz.",
        
        "Peynir de tamamen eridikten sonra makarnanız kremamsı bir kıvam almış olacak. Hiç bekletmeden, sıcak olarak servis tabaklarına alın ve üstüne taze çekilmiş karabiber, biraz parmesan ve zeytinyağı gezdirerek servis edin.",
        
        "Dilerseniz maydanoz yapraklarıyla da süsleyebilirsiniz. Afiyet olsun."
],
     "4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm23',
      ['c7'],
      'Sebzeli Bulgur pilavı',
      
      require("../assets/images/sebzeli-bulgur-pilavi.jpg"),
            25,
      [
        "1 adet soğan",
"1 adet yeşil biber",
"1 adet kırmızı biber",
"1 adet patlıcan",
"2 adet domates",
"1 yemek kaşığı domates salçası",
"2 su bardağı pilavlık bulgur",
"2 yemek kaşığı sıvı yağ",
"4 su bardağı sıcak su",
       
      ],
      [
        
        "Patlıcanlar soyularak küçük küçük doğranır ve tuzlu suda 15-20dk kadar bekletilir.",
        "Soğan yemeklik doğranır ve pembeleşene kadar sıvı yağda kavrulur.",
        "Patlıcanlar süzülür ve biberlerde doğrandıktan sonra tencereye eklenir ve soğanla birlikte kavrulmaya başlanır.",
        "Sebzelerin pişmesine yakın küçük doğranmış domatesler eklenir ve tencerenin kapağı kapatılarak sebzeler pişene kadar beklenir.",
        "Domates mevsimi değilse eğer bu aşamada biraz salça eklenir ve kavrulur, ancak mevsiminde domates kullanmanızı tavsiye ederim.",
        "Pişen sebzelerin üzerine yıkayıp suyunu süzdüğünüz bulgurlar eklenir, tuzu ilave edilerek, tencereye sıcak su eklenir.",
        "Pilavın üzerini örtecek kadar su yeterli olacaktır. Su miktarını ölçmeyi unuttum, bir sonrakinde yapışımda ölçüsünü belirteceğim.",
        "Tencerenin kapağı kapatılarak kısık ateşte bulgurlar şişip yumuşayana kadar pişirilir.",
        "Pilavın suyu yetersiz gelip tencerenin tabanına yapışmaması için ara sıra kontrol etmeyi unutmayın.",
        "Suyu azalmış ancak hala pişmemiş ise bir miktar daha sıcak su ekleyebilirsiniz.",
        "Ocağı kapattıktan sonra kapağın altına kağıt havlu sererek demlendirin.",

],
     "4",
     false,
     false,
     false,
      true
      
    ),

    new Meal(
      'm24',
      ['c7'],
      'Mercimekli Bulgur Pilavı',
      
      require("../assets/images/mercimekli-pilav.jpg"),
            20,
      [
        "2 çay bardağı pilavlık bulgur",
        "2 adet büyükçe kuru soğan",
        "1,5 çay bardağı yeşil mercimek",
        "1 çay bardağı mısır özü yağ",
        "1 çorba kaşığı tereyağı (silme)",
        "Tuz"
      ],
      [
        "Mercimeğinizi yıkayarak,hafif yumuşayıncaya kadar haşlayın(mercimekleriniz tam açılmasın).Süzerek,haşlama suyunu kenara alın.",
        "İnce yemeklik doğranmış soğanı sıvı yağ ile pişirme tencerenize alın.Kavurun.",
        "Bulgurunuzu ekleyin,kavurmaya devam edin(1-2 dk).",
        "Ardından süzülmüş yeşil mercimeği ekleyin.2 dk kadar daha kavurun.",
        "Yeşil mercimeğin suyunu ölçerek gerekiyorsa sıcak su ekleyerek 4 çay bardağı sıcak su elde edin.",
        "Kavrulmuş mercimekli soğanlı pilava ekleyin,tuzunu ayarlayın.",
        "Kapağını kapatarak önce harlı sonra, yavaş ateşte pilavınızı pişirin.",
        "Ateşten aldığınız pilava tereyağını ekleyin,karıştırın.",
        "Demlenmesi için mutfak bezinizle bohçalayarak 15 dk bekletin.",      
],
      "4",
      false,
      false,
      false,
      false
    ),

    new Meal(
      'm25',
      ['c7'],
      'Porsiyonluk Perde Pilavı',
      
      require("../assets/images/perde-pilavı.jpg"),
            60,
      [
        "Hamuru için;",
        "50 gr tereyağı veya margarin (oda sıcaklığında)",
        "1 Türk kahvesi fincanı sıvı yağ",
        "1 Türk kahvesi fincanı yoğurt",
        "1 Türk kahvesi fincanı su",
        "1 tatlı kaşığı sirke",
        "1 tatlı kaşığı tuz",
        "1 çay kaşığı karbonat",
        "Aldığı kadar un",
        "Pilavı için;",
        
        "2 tane tavuk budu",
        "1,5 su bardağı pirinç",
        "3 su bardağı tavuk suyu",
        "Yarım çay bardağı zeytinyağ",
        "1,5 tatlı kaşığı tuz",
        "1 çay kaşığı toz şeker",
        "1 tatlı kaşığı karabiber",
        "2 yemek kaşığı kabuksuz badem",
        "1 yemek kaşığı çam fıstığı",
        "Üzeri için;",
        
        "Kabuksuz badem",
        
       
      ],
      [
        "Öncelikle bir tencerenin içerisine tavuk butlarını alıp tavukların üzerini geçecek kadar su doldurup haşlamaya bırakıyoruz.",
        "Haşlanan butların soğuması için butları ayrı bir tabağın içerisine alıyoruz ve soğuyan butları elimiz ile güzelce didikliyoruz.",
        "Pilav için bir tencerenin içerisine zeytinyağımızı alıp üzerine çam fıstığı ve bademi atıp badem ve fıstıklar biraz kavrulana kadar karıştırıyoruz.",
        "Daha sonra yıkayıp süzdüğümüz pirinçleri de ekleyip 5 dakika daha kavurup üzerine 3 su bardağı haşlanan tavuğun suyundan ekliyoruz.",
        "Daha sonra tuzunu ve şekerini ekleyip pilavı pişmeye bırakıyoruz.",
        "Pişen pilava didiklediğimiz tavukları ve karabiberi ekleyip güzelce karıştırıp pilavı soğuması için bir kenara alıyoruz o soğurken biz hamurumuzu hazırlayalım.",
        "Hamur için karıştırma kabımıza bütün malzemeleri alıp güzelce karıştırıyoruz. Üzerine aldığı kadar un ekleyip kulak memesi yumuşaklığında bir hamur yoğuruyoruz. (Ben yaklaşık 3-3. 5 su bardağı un koydum )",
        "Hamuru 10 dakika kadar dinlendirdikten sonra hamuru 6 eşit bezeye bölüp bir tane beze alıp biraz un kullanarak oklava veya merdane yardımı ile yemek tabağından biraz daha büyük olacak şekilde açıyoruz. (Gerçekten çok rahat açılan bir hamur el ile çekince bile açılıyor)",
        "Daha sonra sıvı yağ ile güzelce yağladığımız ısıya dayanıklı herhangi bir fırın kabının içerisine bademleri sıralayıp üzerine açtığımız hamuru güzelce yerleştiriyoruz.",
        "Hamurun içerisine soğuyan pilavdan koyup kenarlardan sarkan parçaları pilavın üzerine kapatıp elimiz ile hafif bastırıyoruz.",
        "Bütün bezeleri bu şekilde yaptıktan sonra 200 derece fırında hamurlar nar gibi kızara kadar 30-35 dakika pişiriyoruz.",
        "Daha sonra ters çevirip servis edebilirsiniz hamur yağlı bir hamur olduğu için ters çevirdiğinizde yapışma gibi bir sorun olmuyor hemen çıkıyor.",
        "AFİYET OLSUN.",
        
],
     "4 adet",
     false,
     false,
     false,
      false
    ),

    new Meal(
      'm26',
      ['c7'],
      'Müceddere Pilavı',
      
      require("../assets/images/muceddere-pilavi.jpg"),
            20,
      [
        "1 su bardağından 2 parmak eksik yeşil mercimek",
        "1 su bardağı bulgur",
        "1 kuru soğan",
        "1, 5 yemek kaşığı salça",
        "3 yemek kaşığı sıvı yağ",
        "1 yemek kaşığı tereyağ",
        "3, 5 su bardağı sıcak su",
        "Karabiber",
        "Tuz",
      ],
      [
        "Mercimeği ezilmeyecek şekilde haşlayıp süzelim.",
"Tencereye sıvı yağı alalım yemeklik doğradığımız soğanı ekleyip sararana kadar kavuralım.",
"Salçayı ekleyip kokusu çıkana kadar kavuralım.",
"Yıkayıp süzdüğümüz bulguru ve tereyağı ekleyip 3-4 dakika karıştırarak kavuralım.",
"Sıcak suyunu tuzunu ve karabiberini ekleyip kaynamaya başladıktan sonra mercimeği ekleyip kısık ateşte pişirelim.",
"10 dakika demlendirip servis yapalım afiyet şifa olsun.",
"Not: Pilavın suyunu kendi bulgurunuza göre ayarlayabilirsiniz.",
],
     "6",
     false,
     false,
     false,
      false
    ),


    new Meal(
      'm27',
      ['c8'],
      'Pirinçli Pırasa',
      
      require("../assets/images/pirincli-pirasa.jpg"),
            25,
      [
        "4 dal pırasa (ayıklanmış, temizlenmiş)",
        "2 adet havuç",
        "1/3 çay bardağı zeytinyağı",
        "1/2 çay bardağı pirinç",
        "1 su bardağı su",
        "1/2 adet limonun suyu",
        "1 su bardağı portakal suyu",
        "2 çay kaşığı tuz",
        "1 çay kaşığı karabiber",
      ],
      [
        "Pırasaları yıkayın ve verevli olarak doğrayın.",
        "Havuçları da yıkayıp kabuklarını soyduktan sonra yarım ay şekilde doğrayın.",
        "Zeytinyağını ekleyerek ısıttığınız tencerede, orta ateşte 3-4 dakika kadar havucu soteleyin. Ardından pırasayı ekleyerek 2-3 dakika kadar daha bu şekilde soteleyin.",
        "Havuç ve pırasa hafifçe yumuşadıktan sonra üzerine pirinci ilave edip birkaç dakika daha soteleyin.",
        "Ardından su, limon suyu ve portakal suyunu üzerine ekleyin.",
        "Güzelce karıştırın ve suyun kaynaması için kapağını kapatın. Kaynamaya başladıktan sonra kısık ateşte 20 dakika kadar kapağı kapalı olarak pişirin.",
        "Ocaktan almadan önce tuzunu ve damak zevkinize göre karabiberini ekleyin.",
        "Dilerseniz ılık, dilerseniz sıcak olarak servis edin. Zeytinyağlı olduğu için dinlendirdikten sonra servis etmenizi öneririz, afiyet olsun!",
],
     "4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm28',
      ['c8'],
      'Fırında Kaşarlı Karnabahar',
      
      require("../assets/images/firinda-kasarlli-karnabahar.jpg"),
            25,
      [
        "1 adet orta boy karnabahar",
"Sosu için:",
"1 su bardağı yoğurt",
"1 su bardağı süt",
"1 çay bardağı un",
"2 adet yumurta",
"3 yemek kaşığı zeytinyağı",
"1 çay kaşığı tuz",
"1 çay kaşığı karabiber",
"Üzeri için:",
"1 su bardağı rendelenmiş kaşar peyniri",
       
      ],
      [
       "Karnabaharları çiçeklerine ayırıp güzelce yıkayın. Ardından içi su dolu bir tencereye alın ve hafif yumuşayana kadar 10 dakika kadar haşlayın.Çok hafif yumuşayan karnabaharları tencereden alıp süzgeçten geçirin. Bir köşede ılınmaya bırakın.",
       "Geniş bir kasenin içinde yumurtaları, sütü, yoğurdu, unu, baharatları, rendelenmiş kaşar peyniri yarısını ve tuzu güzelce karıştırıp sosu hazırlayın.",
       "Hafif haşlanmış karnabaharları sosun içerisine koyup güzelce karıştır. Sonra, fırın tepsinize karnabaharları sosuyla birlikte dökün.",
       "Karnabaharlar piştiğinde üzerine rendelenmiş kaşarın kalanını serpin ve kaşar peyniri güzelce eriyip kızarana kadar pişirmeye devam edin.",
       "Kaşar peynirler eriyince yemeğinizi fırından çıkarıp servis edebilirsiniz. Afiyet olsun.",


],
     "4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm29',
      ['c8'],
      'Patates Yatağında Mantar',
      
      require("../assets/images/patates-yataginda-mantar.jpg"),
            30,
      [
        "6 adet taze patates",
        "1 tatlı kaşığı iri çekilmiş deniz tuzu",
        "1 tatlı kaşığı iri çekilmiş karabiber",
        "6 adet mantar",
        "4-5 adet maydanoz yaprağı",
        "1 tatlı kaşığı tereyağı",
        "50 gram parmesan peyniri",
        "1 çay kaşığı tuz",
        "1 tatlı kaşığı zeytinyağı"
       
      ],
      [
        "Taze patateslerin kabuklarını iyice temizleyin.",

        "Fırını 180 dereceye ayarlayın.",
        
        "Patatesleri ortadan ikiye bölün ve iri çekilmiş tuz, karabiber ve 1 tatlı kaşığı zeytinyağını, fırın tepsisine dizilmiş patateslerin üzerine eşit olacak şekilde ilave edin.",
        
        "Geniş bir tavayı ısıtın. Tereyağını eritin.",
        
        "Eriyen tereyağında temizlenmiş mantarları sotelyin.",
        
        "Mantarlar suyunu salıp geri çekince tuzu ve karabiberi ilave edin ve ocaktan alın.",
        
        "Patateslerin içi yumuşayıncaya kadar fırınlayın. Fırınlanmış patateslerin üzerine sotelenmiş mantarları ilave edin.",
        
        "Mantarların üzerine parmesan peynirini de ilave edin ve tekrar fırınlayın.",
        
        "Peynirler hafif eriyinceye kadar yaklaşık 2-3 dakika pişirin ve servis etmeden önce maydanoz yapraklarıyla lezzetlendirin ve işte hazır. Afietler olsun!"
        
],
     "4",
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm30',
      ['c8'],
      'Ekşili Soğan Dolması',
      
      require("../assets/images/eksili-sogan-dolmasi-tarifi.jpg"),
            30,
      [
        "4 adet soğan(haşlanmış)",
        "500 gram dana kıyma",
        "1 su bardağı ince bulgur",
        "1 tatlı kaşığı tuz (azaltıp arttırılabilir)",
        "1 yemek kaşığı (tepeleme)nar ekşisi",
        "1 tatlı kaşığı nane",
        "1 tatlı kaşığı pul biber",
        "1/2 su bardağı su",
      ],
      [

"Soğanların kabuğunu soyup, alt ve üst kısmından bir miktar keserek yumuşayana kadar tuzlu suda haşlayın ve ocaktan aldıktan sonra soğumaya bırakın.",

"Soğanlar soğuduktan sonra nazikçe alttan üste doğru ittirip her bir katmanının düzgğnce çıkmasını sağlayın. Bu noktada birkaç adet soğanın yırtılması normaldir.",

"Dolmanın iç harcı için kıyma, kuru soğan, ince bulgur, nar ekşisi, pul biber ve naneyi su ilave ederek yoğurun.",

"Yoğurulan iç harcı katmanlarına ayrılmış soğanların içerisine doldurun ve tencereye dizin.",

"Sosu için, bir kasede domates ve biber salçalarını, sıvı yağ ve suyu karıştırıp dolmaların üzerine dökün.",

"Önce harlı ateşte bir taşım kaynattıktan sonra kısık ateşte 30 dakika pişirin."

],
     "6",
     false,
      true,
      false,
      false
    ),




    new Meal(
      'm31',
      ['c9'],
      'Ev Yapımı Cips',
      
      require("../assets/images/ev-yapimi-cips.jpg"),
            7,
      [
        "2 adet yufka",
"2 yemek kaşığı domates salçası",
"2 yemek kaşığı mısır unu",
"1 çay bardağı sıvı yağ",
"1 çay bardağı su",
"1 küçük boy soğan",
"1 diş sarımsak",
"1 çay kaşığı nane",
"1 çay kaşığı kimyon",
"1 çay kaşığı kekik",
"1 çay kaşığı pulbiber",
"1 çay kaşığı tuz"

      ],
      [
        "İlk olarak soğanı rendeleyerek suyunu alalım.",
        "Sarımsağı iri olacak şekilde keselim.",
        "Salçası sos için tüm malzemeleri derince bir kapta güzelce karıştıralım.",
        "1 tane yufka alarak tezgaha serelim.",
        "Yufkanın yarısına hazırladığımız sostan sürelim ve diğer yarısını üzerine kapatalım.",
        "D şekline gelen yufkamızın üzerine ve ters çevirerek altına da sos sürelim. Yani yufkamızın her yeri soslanmış olmalı.",
        "Güzelce soslanan yufkamızı önce kare kare olacak şekilde keselim. Daha sonra verev keserek üçgen dilimler elde edelim.",
        "Yağlı kağıt serdiğimiz fırın tepsisine kestiğimiz üçgen yufkaları sıralayalım. 1 yufka 2 tepsiye sığıyor. Ben iki tepsiyi birlikte pişirdim. Nasıl pişirdiğimi daha detaylı bir şekilde yazının devamında bulabilirsiniz.",
        "Önceden ısıttığımız 180 derece fırında 6-7 dakika fırınlayalım. Daha sonra fırın derecesini 120 dereye düşürerek yufkalar tamamen kuruyup çıtır çıtır olana kadar pişirin.",
        "Soğuyan cipslerimiz servise hazır. Güzel bir dip sos hazırlayarak afiyetle ve gönül rahatlığı ile tüketebilirsiniz :)",



],
      "2",
      false,
      false,
      false,
      false
    ),

    new Meal(
      'm32',
      ['c9'],
      'Çıtır Soğan Halkası',
      
      require("../assets/images/sogan-halkasi-tarifi.jpg"),
            10,
      [
        "1-2 tane soğan (ben 1 büyük soğan kullandım)",
"2 yemek kaşığı nişasta",
"4 yemek kaşığı mısır unu",
"3 yemek kaşığı beyaz un",
"1 çay kaşığı karbonat ya da kabartma tozu",
"1 çay bardağı maden suyu",
"Tuz",
"Karabiber",
"Bulamak için:",

"1 su bardağı galeta unu",
"Kızartmak için:",

"Sıvıyağ"
      ],
      [

"Soğanı soyup yıkayalım.",
"Resimdeki gibi halka halka doğrayıp birbirinden ayıralım.",
"Sosu için nişasta, un, mısır unu, tuz ve karabiberi bir kaba alalım.",
"Üzerine bir çay bardağı maden suyu ekleyip güzelce çırpma teliyle çırpalım. Sosu hazır.",
"Başka bir tabağa galeta unu koyalım bulamak için.",
"Soğan halkalarını önce hamurlu sosa batıralım güzelce arkasını önünü hamurla kaplayalım, ardından galeta ununa tamamını bulayıp kızgın yağda arkalı önlü kızartalım.",
"Afiyet olsun ",

],
     "2-4",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm33',
      ['c9'],
      'Çıtır Ispanak Köftesi',
      
      require("../assets/images/ispanak-koftesi.jpg"),
            10,
      [
        "250 gram ıspanak",
"1 çay kaşığı kabartma tozu",
"Yarım su bardağı süt",
"1 su bardağı lor peyniri (veya beyaz peynir)",
"1 adet yumurta",
"1 su bardağı un",
"Tuz, karabiber",
"Sıvı yağ (kızartmak için)"
      ],
      [

        "Önce ıspanağı ayıklayıp güzelce yıkıyoruz ve süzüyoruz.",
"İnce ince doğradığımız ıspanakların üzerine diğer malzemeleri ekleyip güzelce harmanlıyoruz. Macun kıvamında bir karışım elde ediyoruz.",
"Elimizle bolca unlayarak köfte şekli veriyoruz.",
"Hepsini hazırlayıp buzdolabında yarım saat kadar dinlendiriyoruz.",
"Tavada sıvı yağı ısıtıyoruz ve dinlenen köfteleri önce galeta ununa batırıyoruz, sonra orta ateşte arkalı önlü kızartıyoruz. Sıcak sıcak servis yapıyoruz.",
"İsteğe bağlı olarak sarımsaklı yoğurt ve domates sos eşliğinde ikram edebilirsiniz."

],
     "2-4",
     false,
     false,
     false,
      false
    ),




    new Meal(
      'm34',
      ['c10'],
      'Portakallı Çatlak Kurabiye',
      
      require("../assets/images/catlak-kurabiye.jpg"),
            15,
      [
        "Hamuru İçin:",
"2 adet yumurta",
"1/2 çay bardağı sıvı yağ",
"1/2 çay bardağı portakal suyu",
"1/2 su bardağı toz şeker",
"1 paket vanilin",
"1 adet rendelenmiş portakal kabuğu",
"2 su bardağıun",
"1 paket kabartma tozu",
"Kaplamak İçin:",
"1 su bardağı pudra şekeri",
      ],
      [
"Derin bir kasede, yumurta, sıvı yağ, portakal suyu, şeker ve vanilini karıştırın. Rendelenmiş portakal kabuklarını karışımın üzerine ilave edin.",
"Un ve kabartma tozunu da ilave ettikten sonra karışımı  ele yapışmayacak kıvama gelene dek yoğurun.",
"Hamurdan ceviz büyüklüğünde parçalar koparın ve elinizde yuvarlayın.",
"Kurabiye hamurlarını pudra şekerine batırın.",
"Pişirme kağıdı serili fırın tepsisine aralarında boşluklar bırakarak dizin. Tel süzgeçle üzerlerine tekra pudra şekeri serpin. 180 derece fırında 15 dakika pişirin.",
"Fırından çıkan portakallı çatlak kurabiyeleri oda sıcaklığına geldikten sonra servis edin. Afiyet olsun!"
],
     "8-10",
     false,
     false,
     false,
      false
    ),
    new Meal(
      'm35',
      ['c10'],
      'Damla Çikolatalı Kıtır Kurabiye (Cookie)',
      
      require("../assets/images/damla-cikolatali-kitir-kurabiye.jpg"),
            15,
      [
        "125 gram tereyağı",
"1 çay bardağı esmer şeker",
"1 çay bardağı toz şeker",
"1 adet yumurta",
"250 gram çikolata (bitter veya sütlü)(damla ya da küp küp doğranmış şekilde)",
"1 tatlı kaşığı nişasta",
"1 paket vanilya",
"1 çay kaşığı kabartma tozu",
"3,5 çay bardağı un",
      ],
      [
"Tereyağ, esmer şeker ve toz şekeri derin bir kap içerisinde bir spatula yardımıyla kremsi bir hal alana kadar iyice karıştırın. Daha sonra yumurtayı ve vanilyayı ekleyip karıştırmaya devam edin.",
"Elenmiş unu, nişastayı, kabartma tozunu ve tuzu ekleyip tekrar iyice karıştırın.",
"Son olarak çikolata parçalarını ekleyerek güzelce karıştırın.",
"Yemek kaşığı ile hamurdan parçalar alarak elinizle yuvarlayın ve içine yağlı kağıt serdiğiniz bir tepsiye dizin.",
"Son olarak önceden ısıtılmış alt üst ayar 180 derece fırında kontrollü bir şekilde 15 dakika pişirin. Afiyet olsun."

],
     "8-10",
     false,
     false,
     false,
     false
    ),
    new Meal(
      'm36',
      ['c10'],
      'Sirkeli Tuzlu Kurabiye',
      
      require("../assets/images/tuzlu-kurabiye.jpg"),
            20,
      [
        "200 gram margarin",
"1/3 çay bardağı sıvı yağ",
"2 yemek kaşığı üzüm sirkesi",
"1,5 çay kaşığı toz şeker",
"1 tatlı kaşığı tuz",
"1 paket kabartma tozu",
"3 su bardağı un",
"Üzeri için:",
"1 adet yumurta sarısı",
"3 yemek kaşığı çörek otu (arzuya göre susam)"
      ],
      [
        "Derin bir kabın içerisine margarin, üzüm sirkesi, sıvı yağı alın ve mikser yardımıyla güzelce çırpın.",

        "Ardından kabartma tozu, tuz ve şekeri ekleyerek spatula yardımıyla güzelce karıştırın.",
        
        "Unu azar azar içerisine ilave ederek yoğurmaya başlayın.",
        
        "Ele yapışmayan bir hamur elde edin. Hamurdan parçalar alın ve rulo şekline getirin. Örgü şeklinde birbirlerine sararak şekil verin.",
        
        "Pişirme kağıdı serili fırın tepsisinin üzerine kurabiyelerinizi aktarın.",
        
        "Üzerine fırça yardımıyla yumurta sarısı sürün ve çörek otu serpin.",
        
        "180 derecede ısıtılmış fırında üzeri kızarana kadar yaklaşık 15-20 dakika kadar pişirin. Çıkarıp oda sıcaklığında dinlendirdikten sonra afiyetle tüketin."

],
     "8-10",
     false,
     false,
     false,
      false
    ),

    new Meal(
      'm37',
      ['c11'],
      'Smoothie kasesi (Bowl)',
      
      require("../assets/images/smoothie-bowl.jpg"),
            0,
      [
      
"5 yemek kaşığı süzme yoğurt",
"10-12 adet yaban mersini",
"6 adet çilek",
"1 tatlı kaşığı bal",
"1 yemek kaşığı chia tohumu",
"Üzeri için:",
"15 adet yaban mersini",
"1 adet küçük boy muz",
"1 tatlı kaşığı chia tohumu",
"5-6 adet çiğ badem"
      ],
      [
        "Süzme yoğurdu blenderın içine aktarın.",

        "Çileklerin sap kısımları çıkararak üzerine ekleyin.",
        
        "Ardından yaban mersini bal ve chia tohumunu ilave edin.",
        
        "Güzelce karıştırın.",
        
        "Karışımı bir kasenin içine alın. Muzu dilimleyin. Üzerini bademler, chia tohumu, muz dilimleri ve yaban mersinleriyle süsleyerek servis edin."

],
     "1",
     false,
     false,
     false,
      false
    ),

    new Meal(
      'm38',
      ['c11'],
      'Yeşil Detoks Çorbası',
      
      require("../assets/images/detoks-corbasi.jpg"),
            15,
      [
"1 demet ıspanak",
"1/4 adet patates",
"1/3 adet kabak",
"1/2 adet brokoli",
"1 adet orta boy havuç",
"1 adet kırmızı soğan",
"1 diş sarımsak",
"1 çay kaşığı kimyon",
"1 çay kaşığı deniz tuzu",
"1 çay kaşığı karabiber"
      ],
      [

        "Tüm malzemeleri güzelce yıkayın.",

"Brokoliyi çiçeklerine ayırın, havucun kabuklarını soyun.",

"Patatesin kabuklarını soyun.",

"Soğanın kabuklarını soyun ve ince ince doğrayın.",

"Sarımsağın kabuğunu soyun ve rendeleyin.",

"Tüm sebzeleri tencerenin içine alın, üzerine sıcak su ilave edip pişmeye bırakın.",

"Sebzeler yumuşadığında blenderdan geçirin. baharat ve tuzunu ilave edip servis edin."

],
     "4",
     false,
     false,
      true,
      false
    ),

    new Meal(
      'm39',
      ['c11'],
      'Izgara Hindi Göğüs',
      
      require("../assets/images/Izgara-Hindi-Göğüs.jpg"),
            10,
      [

        "4 adet hindi göğüs",
        "1 yemek kaşığı zeytin yağı",
        "1/2 şişe soda",
        "1 tatlı kaşığı tuz",
        "1 çay kaşığı sarımsak tozu",
        "1 çay kaşığı karabiber",
        "1 adet kırmızı soğan"

      ],
      [

        "Hindi göğüsleri soda, zeytinyağı, karabiber, tuz ve sarımsak tozuyla marine edin. Buz dolabında 30-35 dakika bekletin.",

        "Tavayı ısıtın.",
        
        "Isınan tavaya göğüsleri dizin ve kısık ateşte 10-15 dakika iki tarafını da pişirin.",
        
        "Soğanları iri iri doğrayın.",
        
        "Tabağın en altını soğanlarla kaplayın. Göğüsleri yerleştirin ve yeşilliklerle renklendirin."
],
     "2",
     false,
      true,
      false,
      false
    ),




    new Meal(
      'm40',
      ['c12'],
      'Tava Böğreği',
      
      require("../assets/images/tava-boregi.jpg"),
            30,
      [

      
        "Sosu İçin:",
        "1/2 su bardağı süt",
        "1/2 çay bardağı sıvı yağ",
        "1/2 su bardağı soda",
        "2 adet yumurta",
        "1 çay kaşığı tuz",
        "İç Harcı İçin:",
        "4 adet haşlanmış patates",
        "1 çay kaşığı tuz",
        "1/2 çay kaşığı karabiber",
        "1 çay kaşığı pul biber",
        "1,5 su bardağı rendelenmiş kaşar peyniri",
        "1 su bardağı beyaz peynir(yumuşak, ufalanmış)",
        "1/2 demet kıyılmış maydanoz",
        "Diğer Malzemeler:",
        "3 adet yufka",
        "1/2 su bardağı kaşar peyniri",
        "3 tatlı kaşığı tereyağı",
     

      ],
      [
        "Bir kasede yarım su bardağı süt, yarım çay bardağı sıvı yağ, yarım su bardağı soda, 2 adet yumurta ve 1 çay kaşığı tuzu ekleyip karıştıralım.",

        "4 adet patatesi haşlayalım ve püre haline gelene dek ezelim.",
        
        "1 çay kaşığı tuz, yarım çay kaşığı karabiber, 1 çay kaşığı pulbiber, 1,5 su bardağı rendelenmiş kaşar peyniri ve 1 su bardağı yumuşak beyaz peynir ekleyelim ve güzelce karıştıralım.",
        "Son olarak yarım demet incecik doğradığımız maydanozu da ekleyip karıştırdıktan sonra bol malzemeli iç harcımız hazır!",
        
        "Yufkalardan birini tezgaha serelim. İlk başta hazırladığımız sostan yufkanın her yerine gelecek kadar ekleyelim ve sosu yufkanın her yerine yedirelim.",
        
        "Hazırladığımız iç harcı yufkanın tam ortasına ekleyip elimizle yufkanın her yerine dağıtalım.",
        
        "İç malzemeyi güzelce dağıttıktan sonra yufkanın alt kısmından yukarıya doğru saralım.",
        
        "Sardıktan sonra bir ucunu içe doğru kıvırıp rulo haline getirelim. Diğer 2 yufkayı da sarıp tavada pişirme kısmına geçelim.",
        
        "Böreği pişireceğimiz tavayı ısıtalım ve 2 tatlı kaşığı tereyağını ekleyip eritelim. Rulo haline getirdiğimiz ilk yufkayı tavanın tam ortasına yerleştirelim ve hazırladığımız diğer yufkaları etrafına saralım.",
        
        "Yufkaların tavaya iyice yerleşmesini sağlayalım ve üstte kalan kısma fırça yardımıyla yarım tatlı kaşığı tereyağını sürelim. Böreğimizin her bir yüzünü 5 dakika yüksek ateşte, 15 dakika kısık ateşte pişirelim. Ara ara spatulayla altta kalan yüzeyi kontrol edelim.",
        
        "Pişen yüzeyine kalan yarım tatlı kaşığı tereyağını sürelim ve böreği bir servis tabağına alalım. 10 dakika kadar oda sıcaklığında bekletelim ve çıtır çıtır, bol malzemeli tava böreğimizi dilimleip servis edelim."

],
     "6",
     false,
     false,
      true,
      false
    ),

    

    new Meal(
      'm41',
      ['c12'],
      'Sandal Börek',
      
      require("../assets/images/sandal-borek.jpg"),
            25,
      [
        "Hamuru için:",
        "2 adet yufka",
        "2 adet yumurta sarısı(üzeri için)",
        "4 adet sivri biber",
        "9 adet kokteyl domates",
        "3 yemek kaşığı buğday nişastası",
        "1/2 su bardağı eritilmiş tereyağı(yufkanın arasını yağlamak için)",
        "İç Harcı İçin:",
        "5 yemek kaşığı sıvı yağ",
        "1 adet rendelenmiş domates",
        "1 adet soğan(yemeklik doğranmış)",
        "1 adet sivri biber(doğranmış)",
        "250 gram dana kıyma",
        "1 çay kaşığı tuz",
        "1 çay kaşığı karabiber",
        "1 çay kaşığı kuru nane",
        "1 çay kaşığı pul biber"
        
      

      ],
      [
    "Geniş bir tavada sıvı yağını kızdırın. Doğranmış soğanları ekleyip biraz pembeleştikten sonra biberleri ekleyin ve 3-4 dakika kadar kavurun.",
    "Kıymayı da ekleyip, suyunu salıp çekene kadar kavurun",
    "Ardından tuz, karabiber, kuru nane ve pul biberi ekleyip karıştırın.",
    "Son olarak rendelenmiş domatesi de ekledikten sonra 5 dakika pişirin ve ocaktan alın.",
    "Tezgaha yufkalardan birini serin. Üzerine eritilmiş tereyağını ilave edip her yerine gelecek şekilde fırça yardımıyla yayın.",
    "Nişastayı yağlanmış yufkanın üzerine serpiştirin.",  
      "Diğer yufkayı da yağlanmış ve nişasta serpiştirilmiş yufkanın üzerine serin.", 
"Hazıradığınız yufkalardan üçgen dilimler çıkacak şekilde bıçak yardımıyla kesin",
"Sigara böreği sarar gibi yufkayı rulo şeklinde sarın ve uç kısmındaki üçgeni dışarıda bıracak şekilde sağ ve soldaki iki ucu birleştirin.",
"Dışarıda kalan uç kısmı yuvarlak kısmın içine doğru katlayın ve kase görünümlü yufkalar elde edin. Pişirme kağıdı serili fırın tepsisine hazırladığınız yufkaları yerleştirin.",
 "Hazırladığınız iç harcı yuvarlak yufkaların iç kısmına paylaştırın ve kokteyl domates ve biberle süsledikten sonra kenarlarına yumurta sarısı sürün.",
 "Önceden ısıtılmış 200 derece fırında 25 dakika pişirin.",
 "Pişen böreklerinizi sıcak olarak servis edin, afiyet olsun!"
],
     "2-4",
     false,
      true,
      false,
      true
    ),

    
    new Meal(
      'm42',
      ['c12'],
      'Üsküp Böğreği',
      
      require("../assets/images/uskup-boregi.jpg"),
        30,
      [
        "3 adet yumurta",
        "1 su bardağı sıvı yağ",
        "1 su bardağı süt",
        "2 su bardağı un",
        "1 adet rendelenmiş kabak",
        "1 su bardağı rendelenmiş beyaz peynir(az yağlı)",
        "1,5 çay kaşığı karbonat",
        "1 demet doğranmış maydanoz",
        "Üzeri İçin:",
        "1 adet yumurta sarısı",
        "2 yemek kaşığı susam"
      

      ],
      [
       
        "Geniş bir kasede yumurta, sıvı yağ ve sütü güzelce çırpın.",

"Üzerine unu da ilave edin ve tekrar karıştırın.",

"Son olarak kabak, rendelenmiş beyaz peynir, karbonat ve maydanozu ekleyip boza kıvamında bir hamur elde edene kadar karıştırın. Kabak suyunu bırakınca, unu eklediğiniz zamanki halinden biraz daha yumuşak bir hamur olacaktır. Kabak yeterince suyunu salmazsa biraz süt ilavesiyle boza kıvamında bir hamur elde edebilirsiniz.",

"Hazırladığınız hamuru yağlanmış bir fırın kalıbına dökün ve üzerini düzeltin.",

"Yumurta sarısını hamurun tüm yüzeyine fırça yardımıyla sürün ve susam serpiştirin.",

"Önceden ısıtılmış 180 derece fırında üzeri kızarana kadar, yaklaşık 30 dakika pişirin."


],
     "6-8 (1 tepsi)",
      false,
      false,
      false,
      false
    ),





    
   
]
     
  