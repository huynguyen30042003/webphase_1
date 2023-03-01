import './App.scss';
import Rectangle1 from "./img/Rectangle1.png"
import File from "./img/File.svg"
import Star from "./img/Star.svg"
import Crown from "./img/Crown.svg"
import ChartBar from "./img/ChartBar.svg"
import ChartPieSlice from "./img/ChartPieSlice.svg"
import FigmaLogo from "./img/FigmaLogo.svg"
import CaretCircleDoubleRight from "./img/CaretCircleDoubleRight.svg"
import Illustration from "./img/Illustration.png"
import Illustration1 from "./img/Illustration1.png"
import AirbnbLogo from "./img/AirbnbLogo.png"
import GoogleLogo from "./img/GoogleLogo.svg"
import BookMyShowLogo from "./img/BookMyShowLogo.svg"
import MicrosoftLogo from "./img/MicrosoftLogo.svg"
import FedExLogo from "./img/FedExLogo.svg"
import WalmartLogo from "./img/WalmartLogo.svg"
import OYOLogo from "./img/OYOLogo.svg"
import OLALogo from "./img/OLALogo.svg"
import AmazonLogo from "./img/AmazonLogo.png"
import Users from "./img/Users.svg"
import MediumLogo from "./img/MediumLogo.svg"
import LinkedinLogo from "./img/LinkedinLogo.svg"
import TwitterLogo from "./img/TwitterLogo.svg"
import InstagramLogo from "./img/InstagramLogo.svg"
import FacebookLogo from "./img/FacebookLogo.svg"
import React from 'react';

function App() {
  return (
    <>
      <div className='main'>
        <div className='header'>
          <div className='nav__box'>
            <div className='nav'>
              <ul>
                <li><a>Çözüm ve Hizmetler</a></li>
                <li><a>Ürünler</a></li>
                <li><a>Teknolojiler</a></li>
                <li><a>İnsan Kaynakları</a></li>
                <li><a>Kurumsal</a></li>
                <li><a>İletişim</a></li>
              </ul>
            </div>
          </div>
          <div className='headerTittle'>
            <div className='headerTittle__a'>
              <a>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</a>
              <a>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</a>
            </div>
            <div className='headerTittle__Mail'>
              <input type="text" className='headerTittle__Mail__Input' placeholder='Mail bültenimize kayıt ol'></input>
              <button className='headerTittle__Mail__Button'>
                <a>Kayıt Ol</a>
              </button>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='Quality'>
            <div className='Quality__title'>
              <a>Kalite ve Süreç Yönetimi</a>
              <a>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</a>
            </div>
            <div className='Quality__Frame'>
              <div className='Quality__Frame__Content'>
                <img src={File}></img>
                <a>Döküman Analizi</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
              </div>
              <div className='Quality__Frame__Content'>
                <img src={Star}></img>
                <a>Kabul ve Değerlendirme</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
              </div>
              <div className='Quality__Frame__Content'>
                <img src={Crown}></img>
                <a>İş Kuralları Analizi</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
              
              </div>
              <div className='Quality__Frame__Content'>
                <img src={ChartBar}></img>
                <a>Akış Diyagramları</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
                
              </div>
              <div className='Quality__Frame__Content'>
                <img src={ChartPieSlice}></img>
                <a>Paydaş Analizi</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>

              </div>
              <div className='Quality__Frame__Content'>
                <img src={FigmaLogo}></img>
                <a>Prototipleme</a>
                <a>Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.</a>
              
              </div>
            </div>
          </div>
          <div className='Test'>
            <a>Test Yönetimiyle Neler Sağlıyoruz?</a>
            <a>IoT Destekli Çözümler</a>
            <div className='test__minTitle'>
              <a>Yazılım Kalitesini Arttırıyoruz</a>
              <img src={CaretCircleDoubleRight}></img>
              <a>Olası Hataları Önceden Belirliyoruz</a>
              <img src={CaretCircleDoubleRight}></img>
              <a>Oluşabilecek Riskleri Önlüyoruz</a>
              <img src={CaretCircleDoubleRight}></img>
              <a>Zaman ve Maliyetten Tasarruf Sağlıyoruz</a>
            </div>
          </div>
          <div className='Management'>
            <div className='Management__Process'>
              <div className='Management__Process__Title'>
                <a>Kalite ve Süreç Yönetimi</a>
                <a>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</a>
                <button className='Management__Process__Discover'>
                  <a>Keşfet</a>
                </button>
              </div>
              <div className='Management__Process__Img'>
                <img src={Illustration}></img>
              </div>
            </div>
            <div className='Management__Test'>
              <div className='Management__Test__Title'>
                <a>Test Yönetimi ve Analizi</a>
                <a>Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.</a>
                <button className='Management__Test__Discover'>
                  <a>Keşfet</a>
                </button>
              </div>
              <div className='Management__Test__Img'>
                <img src={Illustration1}></img>
              </div>
            </div>
          </div>
          <div className='References'>
            <a>Referanslarımız</a>
            <a>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</a>
            <div className='References__banner'>
              <div className='References__banner__col'>
                <img src={AirbnbLogo}></img>
              </div>
              <div className='References__banner__col'>
                <div className='References__banner__col__img'>
                  <img src={GoogleLogo}></img>
                </div>
                <div className='References__banner__col__img'>
                  <img src={BookMyShowLogo}></img>
                </div>
              </div>
              <div className='References__banner__col'>
                <div className='References__banner__col__img'>
                  <img src={MicrosoftLogo}></img>
                </div>
                <div className='References__banner__col__img'>
                  <img src={FedExLogo}></img>
                </div>
                <div className='References__banner__col__img'>
                  <img src={WalmartLogo}></img>
                </div>
              </div>
              <div className='References__banner__col'>
              <div className='References__banner__col__img'>
                <img src={OYOLogo}></img>
              </div>
              <div className='References__banner__col__img'>
                <img src={OLALogo}></img>
              </div>
              </div>
              <div className='References__banner__col'>
                <img src={AmazonLogo}></img>

              </div>
            </div>
          </div>
          <div className='Contact'>
            <div className='Contact__icon'>
              <img src={Users}>
              </img>
              <div className='Contact__icon__circle'></div>
              </div>
            <a>Bize Ulaşın</a>
            <a>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</a>
            <button className='Contact__Button'>
              <a>Bize Ulaşın</a>
            </button>
          </div>
          <div className='Footer'>
            <div className='Footer__Title'>
              <div className='Footer__Title__SolutionServices'>
                <a>Çözüm ve Hizmetler</a>
                <a>Yazılım Geliştirme</a>
                <a>Outsourcing</a>
                <a>Kalite ve Süreç Yönetimi</a>
                <a>Danışmanlık</a>
                <a>IoT Destekli Çözümler</a>
              </div>
              <div className='Footer__Products'>
                <a>Ürünler</a>
                <a>Eğitim Yönetim Sistemi</a>
                <a>İnsan Sermayesi Yönetim Sistemi</a>
                <a>Müşteri İlişkileri Yönetim Sistemi</a>
                <a>İçerik Yönetim Sistemi</a>
              </div>
              <div className='Footer__Institutional'>
                <a>Kurumsal</a>
                <a>Hakkımızda</a>
                <a>Belge ve Yetkinlikler</a>
                <a>İş Ortakları</a>
              </div>
              <div className='Footer__Communication'>
                <a>İletişim</a>
                <a>Bilgi İstek Formu</a>
                <a>Uzman Talep Formu</a>
              </div>
            </div>
            <div className='Footer__CopyRightContact'>
              <div className='Footer__CopyRight'>
                <a>© Copyright 2010-2021 - Can Çevik</a>
              </div>
              <div className='Footer__Contact'>
                <img src={MediumLogo}></img>
                <img src={LinkedinLogo}></img>
                <img src={TwitterLogo}></img>
                <img src={InstagramLogo}></img>
                <img src={FacebookLogo}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
