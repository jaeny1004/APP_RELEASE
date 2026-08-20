import React from 'react';
import { 
  Download, 
  ShieldCheck, 
  Smartphone, 
  CalendarDays,
  HardDrive
} from 'lucide-react';

// =========================================================================
// 🛠️ [다운로드 링크 및 프로그램 설명 텍스트 설정]
// =========================================================================
export const DOWNLOAD_CONFIG = {
  appName: "IMPINE",
  appSubtitle: "현장 조사 어플리케이션",
  
  // public/images/ 폴더 내부의 APK 파일 상대 경로 바인딩
  downloadUrl: "/app-release.apk", 
  
  version: "v1.0.1",
  updateDate: "2026-08-20",
  fileSize: "77.8 MB",
  compatibility: "Android 9.0 이상 지원",
  
  slogan: "시민 참여형 간편 의심목 신고 기믹부터 현장 요원의 정밀 GPS 격자 마킹, STT 음성 작업 일지 전송 및 약제 정품 QR코드 인증까지 연계 처리하는 원스톱 모바일 앱입니다."
};

// =========================================================================
// 🛠️ [첨부 사진 순서 매핑 설치 및 우회 작동 가이드 설정]
// =========================================================================
export const INSTALL_STEPS = [
  {
    step: "01",
    title: "설치 진행 확인",
    desc: "다운로드한 APK 파일을 실행한 후, 안내 팝업창에서 [설치]를 클릭하여 설치 프로세스를 가동합니다.",
    imgUrl: "/images/step1.jpg"
  },
  {
    step: "02",
    title: "기기 보호 차단 (세부정보)",
    desc: "Play 프로텍트 차단 경고가 활성화되면 당황하지 마시고 하단의 [세부정보 더보기] 텍스트를 클릭합니다.",
    imgUrl: "/images/step2.jpg"
  },
  {
    step: "03",
    title: "보안 차단 무시 설치",
    desc: "세부정보 창이 확장되어 상세 문구가 노출되면 좌측 하단의 [무시하고 설치하기]를 찾아 클릭합니다.",
    imgUrl: "/images/step3.jpg"
  },
  {
    step: "04",
    title: "안전 경고 우회 (1차)",
    desc: "기기 자체 보안에서 안전하지 않은 앱 경고가 발생할 경우, 왼쪽 하단의 [무시하고 설치]를 선택합니다.",
    imgUrl: "/images/step4.jpg"
  },
  {
    step: "05",
    title: "안전 경고 우회 (2차)",
    desc: "인증되지 않은 출처 추가 안내 팝업이 발생하더라도 동일하게 하단의 [무시하고 설치] 버튼을 선택합니다.",
    imgUrl: "/images/step5.jpg"
  },
  {
    step: "06",
    title: "설치 완료 및 가동",
    desc: "설치가 완료되면 [열기] 버튼을 눌러 앱을 정상 실행하고 요원 로그인(1111)을 진행하여 산림 관제를 시작합니다.",
    imgUrl: "/images/step6.jpg"
  }
];

export default function App() {
  const handleDownloadTrigger = () => {
    alert(`${DOWNLOAD_CONFIG.appName} 현장 조사 패키지(${DOWNLOAD_CONFIG.version}) 다운로드를 개시합니다.\n네트워크 환경에 따라 최대 수십 초가 소요될 수 있습니다.`);
    window.location.href = DOWNLOAD_CONFIG.downloadUrl;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      

      <header className="bg-gradient-to-br from-[#0a542e] to-[#04331e] text-white py-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100" x2="1000" y2="500" stroke="white" strokeWidth="2"/>
            <line x1="200" y1="0" x2="1200" y2="400" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
            {DOWNLOAD_CONFIG.appName} <br />
            <span className="text-primary">{DOWNLOAD_CONFIG.appSubtitle}</span>
          </h1>
          
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {DOWNLOAD_CONFIG.slogan}
          </p>
        </div>
      </header>


      <section className="bg-white border-t border-[#dfebd4] py-10 px-6 w-full overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-darkgreen">설치 및 가동 안내 가이드</h2>
            <p className="text-sm text-slate-500">인증되지 않은 앱 경고가 발생할 경우 아래 순서대로 설치를 진행해 주십시오.</p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-bold md:hidden pt-2 animate-pulse select-none">
              <span>◀ 좌우로 밀어서 순서대로 확인하세요 ▶</span>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
            {INSTALL_STEPS.map((stepItem, index) => (
              <div 
                key={index} 
                className="w-[280px] shrink-0 snap-center bg-[#f8faf7] border border-[#dfebd4] rounded-3xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200 md:w-auto md:shrink-0"
              >
                <div className="space-y-3">
                  <div 
                    className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/80 flex items-center justify-center relative bg-no-repeat bg-center" 
                    style={{ 
                      backgroundImage: `url(${stepItem.imgUrl})`,
                      backgroundSize: 'contain',
                      backgroundColor: '#f1f3f1'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/[0.02]"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-emerald-300">{stepItem.step}</div>
                    <h4 className="text-sm font-black text-darkgreen">{stepItem.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{stepItem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-[#f4f8f5] py-10 px-6 w-full text-center border-t border-b border-[#dfebd4]">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="text-xl md:text-2xl font-black text-darkgreen">
            안내 가이드를 모두 확인하셨나요?
          </h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            아래 버튼을 눌러 설치를 진행해 주십시오.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-1">
            <button 
              onClick={handleDownloadTrigger}
              className="w-full sm:w-auto bg-primary hover:bg-[#1ebd68] text-darkgreen font-black px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg shadow-emerald-950/20 text-base"
            >
              <Download size={22}/>
              <span>안드로이드용 APK 다운로드</span>
            </button>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
              <span>파일 크기: {DOWNLOAD_CONFIG.fileSize}</span>
              <span>•</span>
              <span>{DOWNLOAD_CONFIG.compatibility}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}