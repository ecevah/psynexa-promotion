import Excerpt from "@/components/blog/blog-content/excerpt";
import { Paragraph } from "@/components/blog/blog-content/paragraph";
import TagItem from "@/components/blog/tag-item/tag-item";
import {
  BLOG_CONTENT_IMG,
  FACEBOOK,
  FOOTER_SOCIAL_ICONS,
} from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function BlogDetailPage() {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src={BLOG_CONTENT_IMG}
          width={823}
          height={540}
          className="rounded-l-[24px] rounded-r-[12px]"
        />
        <p className="text-[17px] font-medium leading-[26px] text-[#0B1215] mt-[20px]">
          Yazar:
          <span className="text-black ml-[12px] mr-[32px]">
            Dilruba Yağmur Saygılı
          </span>
          Son Değişiklik
          <span className="text-black ml-[12px] mr-[32px]">
            05 Ağustos 2024
          </span>
        </p>
        <Paragraph
          text="Dünya çapında etkilerini gözlemeyebildiğimiz akıllı telefon, tablet ve diğer akıllı cihazların kullanımı hepimizin hayatına büyük bir etkiyle girmiştir. Bu etki hız kesmeden artmaya devam etmekte ekranlarla aramızdaki soyut ve somut mesafe gitgide azalmaktadır. Durum böyleyken ekranlarla aramızda doğan ilişkinin sonuçları geleceğimiz açısından merak konusu olmuştur. Yetişkin toplumda dahil ekran sürelerini kontrol etmekte zorlandığımız senaryoda çocuklarımızın ekranlarla olan ilişkilerini nasıl kontrol altında tutacağız veya onların gelişen beyinlerine, kişiliklerine etkileri neler olacak? 
"
        />
        <Paragraph text="Günümüzde teknoloji bebekleri ekranlar konusunda profesyonel olarak uzmanlaşmakta, dünya ile sağlıklı ve güvenli ilişkisini inşa etmesi gereken süreçte ekranlar ile bağ kurmaktadır. Birçoğumuz çocuklarımızın, yeğenlerimizin veya çevremizdeki diğer çocukların daha çok küçük yaşlardan itibaren siber internet dünyasında çok aktif rol aldıklarını, bilgi sahibi olduklarını ve mesleki hayallerinde influencerlık, bloggerlık, vloggerlık yattığını gözlemlemişsinizdir. Tam da bu noktada ekran kullanım süresi kültürel bağlam, zaman, yaş ve aile tutumu gibi birçok değişkenden etkilense de Amerikan Pediatri Akademisi1 (American Academy of Pediatrics) 2 yaşa kadar ekrana bağlı erken beyin gelişiminde gözlemlenebilecek olumsuz etkilerden dolayı, bu gelişim dönemindeki çocukların mümkün olduğunca sıfır etkileşim, sıfır temas ve sıfır ekran maruziyeti olması gerektiğini vurgulamaktadır. Okul öncesi 2-6 yaş grubu için ise önerilen ekran süresi en fazla 2 saat olarak belirtilmiştir. Tabii bu 2 saat sadece telefon bağlamında değil, herhangi bir akıllı teknolojik cihazı (bilgisayar, televizyon, tablet vb.) kapsayacak biçimde toplam olarak ele alınmıştır. Ergen ve yetişkin yaş grubu için de önerilen ekran süresi en fazla 2 saat olmasına karşın biliyoruz ki günlük tüketilen ekran süreleri bu sayıyı fazlasıyla aşmaktadır. " />
        <Paragraph text="Siber dijital dünyanın faydalarını elbette yadsımak taraflı olacaktır. İnsanlara limitsiz öğrenme, başka kıtalarla hızlı ve güvenli etkileşim, uzaktan ve kaliteli eğitim seçenekleri, her yerde ve zamansız çalışabilme, konforlu iş sahası sunma, bilginin hızlı yayılımı ve geniş araştırma imkânı sunması belki de interneti ve ekranları sağlıklı kullanmanın yollarını önümüze sermektedir. Fakat saydığımız bu yararların yanısıra ekranlar üzerinden etkileşim ihtiyacı gitgide artmakta ve bazı sonuçlar ortaya çıkmaktadır. Dijital ekranları güvenli ve etkili biçimde kullanma farkındalığına varamamış çocuklar ve ergenler, internet, oyun ve teknoloji bağımlılıkları konusunda savunmasız konumdadır. Eş zamanlı olarak siber zorbalık, suç ve şiddet gibi tehlikelere karşı risk altındadırlar2." />
        <Paragraph
          text="Dijital ekran kullanımı ile gelişmekte olan çocuk beynindeki bilişsel süreçler ve dikkat mekanizmaları üzerindeki etkileri inceleyen araştırmalar hız kazanmaktadır. Aynı zamanda birçok araştırma dijital ekranlara 2-3 saatten fazla maruz kalmanın bilişsel gelişim, öğrenme, hafıza ve duygusal düzenleme gibi işlevlerde değişikliklere neden olduğunu ileri sürmektedir3. Erken dönemde artan ekran maruziyeti, dikkat eksikliği bozukluğu, anksiyete ve depresyon gibi psikiyatrik bozukluklar için artan riskle ilişkilendirilmiştir4. Çocuklarda sıklıkla kontrolsüz ekran kullanımı ile yatışmayan öfke ve duygularda karmaşıklık gözlenebilmekte aynı zamanda davranış sorunları ortaya çıkabilmektedir. 
"
        />
        <Paragraph
          text="Yaş ve gelişim dönemine göre belirlenecek, bilişsel becerileri arttırmaya yönelik uygun materyal kullanımı desteklenirken kontrollü olmayan ve çocukları bağımlılığa kadar götürebilecek yoğun akıllı telefon kullanımından kaçınılmalı ve gerekli tedbirler sağlanmalıdır. Ebeveynler bilinçli dijital okur-yazar olma yolunda adımlar atmalıdır. Dijital ebeveyn olmak, sosyal medya, dijital oyunlar ve teknolojik gelişmelerden haberdar olan anne/baba figürü olma sorumluluğu verse de aile ile çocuk arasındaki bağın zedelenmemesi için teknolojinin bilinçli kullanılması ve faydalarının yanısıra zararlarının da gözlemlenip çocuklara destek olunması sağlanmalıdır5. Bilinçli ve dengeli bir tutum sergilemek ve kontrollü bir yaklaşım uygulamak esas gözetilecek strateji olmalıdır. 
"
        />

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center mt-[16px]">
            <div className="text-[17px] font-medium leading-[26px] text-black mr-[16px]">
              Tags:
            </div>
            <TagItem text="AI" />
            <TagItem text="Psynexa" />
            <TagItem text="Tech" />
          </div>
          <div className="flex flex-row items-center mt-[16px]">
            <div className="text-[17px] font-medium leading-[26px] text-black mr-[6px] ">
              Shere:
            </div>
            <div className="flex flex-row ">
              <div
                className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px] mx-[10px]"
                data-aos="fade-up"
              >
                <Image src={FACEBOOK} alt="facebook" width={10} height={24} />
              </div>
              {FOOTER_SOCIAL_ICONS.map((item, index) => (
                <div
                  key={`Social Icon ${index}`}
                  data-aos="fade-up"
                  className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px] mx-[10px]"
                >
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
