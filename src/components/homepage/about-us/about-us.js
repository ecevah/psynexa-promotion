import { ABOUT_ICON, DEVICE_1, DEVICE_2 } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import BlueGradientTitleCard from "../partner-component/blue-gradient-title-card";
import { useIntersectionObserver } from "@/service/hook/useIntersectionObserver";
import "@/styles/about-us.css";

export default function AboutUs() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0 });
  return (
    <>
      <div className="overflow-hidden" id="about-us">
        <div className="relative layout">
          <div className="flex flex-col pt-[128px] breakpoint1300:pb-[160px] pb-[470px]">
            <BlueGradientTitleCard text="Hakkımızda" />
            <p
              className="text-[50px] font-bold leading-[54px] text-black max-w-[400px] w-full mt-[20px] mb-[32px]"
              data-aos="fade-right"
            >
              Duygusal Sınırları Aş, Yeni Ufuklara Yelken Aç
            </p>
            <div className="flex flex-row items-center" ref={ref}>
              <Image
                src={ABOUT_ICON}
                alt="icon"
                height={142}
                width={14}
                data-aos="fade-right"
              />
              <div
                className="text-[17px] font-semibold leading-[26px] text-black max-w-[620px] w-full ml-[10px] "
                data-aos="fade-right"
              >
                Psynexa, Kasım 2022'de kuruldu ve kısa sürede dikkat çekici
                başarılar elde etti. 2023 Nisan ayında İstanbul'da düzenlenen
                TEKNOFEST'te Psikolojide Teknolojik Uygulamalar yarışmasında
                ikincilik ödülü kazandı. Ardından, takımımızdan Ahmet ve Halil
                İbrahim, 2023 Eylül ayında TEKNOFEST İzmir girişimcilik
                yarışmasında sağlık ve iyi yaşam kategorisinde beşincilik elde
                etti. Bu başarılar, Psynexa'nın geleceğine olan inancımızı
                pekiştirdi ve bizi daha büyük adımlar atmaya motive etti.
              </div>
            </div>
            <div
              className="text-[17px] font-medium leading-[26px] text-black max-w-[620px] w-[98%] mt-[20px] sm:mx-0 mx-[10px]"
              data-aos="fade-right"
            >
              Yolculuğumuza 9 kişilik bir ekip olarak başladık ve ürünümüzü
              sürekli olarak geliştirerek, 2023 Ekim ayında TEKNOFEST'te
              beşincilik elde ettik. Temmuz 2024'te, Türkiye Bilimsel ve
              Teknolojik Araştırma Kurumu (TÜBİTAK) tarafından düzenlenen 2024-1
              BİGG Yatırım Çağrısı kapsamında Mükemmeliyet Mührü'nü kazandık. Bu
              ödül, girişimimizin kalitesini ve potansiyelini uluslararası
              düzeyde kanıtladı. Ayrıca, TEKNOFEST 2024'te Psikolojide
              Teknolojik Uygulamalar kategorisinde 92.67 puan alarak finale
              kalmamız, başarılarımızın somut bir göstergesi oldu. Psynexa
              olarak, yenilikçi çözümler sunmaya ve sürekli gelişmeye devam
              ediyoruz.
            </div>
          </div>
          <Image
            src={DEVICE_1}
            width={1100}
            height={600}
            alt="device 1"
            className={`device-1 ${isVisible ? "animate" : ""}`}
          />
          <Image
            src={DEVICE_2}
            width={900}
            height={500}
            alt="device 2"
            className={`device-2 ${isVisible ? "animate" : ""}`}
          />
        </div>
      </div>
    </>
  );
}
