import React from 'react';
import { 
  Download, 
  ShieldCheck, 
  Smartphone, 
  Layers, 
  FileText, 
  MapPin, 
  QrCode, 
  Mic,
  CalendarDays,
  HardDrive
} from 'lucide-react';

// =========================================================================
// 🛠️ [다운로드 링크 및 프로그램 설명 텍스트 설정]
// =========================================================================
export const DOWNLOAD_CONFIG = {
  appName: "IMPINE",
  appSubtitle: "모바일 현장 조사 어플리케이션",
  
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
      
      <header className="bg-gradient-to-br from-[#0a542e] to-[#04331e] text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100" x2="1000" y2="500" stroke="white" strokeWidth="2"/>
            <line x1="200" y1="0" x2="1200" y2="400" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
              <Smartphone size={14}/>
              <span>모바일 지상 예찰 전용 앱</span>
            </div>
            
            <h1 className="text-3xl md:text-4.5xl font-black leading-tight tracking-tight">
              {DOWNLOAD_CONFIG.appName} <br />
              <span className="text-primary">{DOWNLOAD_CONFIG.appSubtitle}</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-300 max-w-lg leading-relaxed">
              {DOWNLOAD_CONFIG.slogan}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1"><CalendarDays size={14}/> <span>최근 업데이트: {DOWNLOAD_CONFIG.updateDate}</span></div>
              <div className="flex items-center gap-1"><HardDrive size={14}/> <span>파일 용량: {DOWNLOAD_CONFIG.fileSize}</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button 
                onClick={handleDownloadTrigger}
                className="w-full sm:w-auto bg-primary hover:bg-[#1ebd68] text-darkgreen font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg shadow-emerald-950/20"
              >
                <Download size={20}/>
                <span>안드로이드용 APK 다운로드</span>
              </button>
              <span className="text-xs text-slate-400 text-center sm:text-left">{DOWNLOAD_CONFIG.compatibility}</span>
            </div>
          </div>

          <div className="w-64 h-[480px] bg-slate-900 rounded-[32px] p-3 border-4 border-slate-700 shadow-2xl relative shrink-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-b-xl z-20"></div>
            <div className="w-full h-full bg-[#f4f8f5] rounded-[24px] overflow-hidden flex flex-col justify-between relative">
              <div className="bg-white py-3 px-4 border-b border-emerald-100 flex items-center gap-2">
                <Smartphone size={16} className="text-darkgreen"/>
                <span className="text-[11px] font-black text-darkgreen">{DOWNLOAD_CONFIG.appName} {DOWNLOAD_CONFIG.version}</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center space-y-4">
                <div className="w-16 h-16 bg-white border border-emerald-100 rounded-2xl flex items-center justify-center shadow-sm">
                  <ShieldCheck size={32} className="text-primary"/>
                </div>
                <div>
                  <h4 className="text-xs font-black text-darkgreen">스마트 산림 안심망</h4>
                  <p className="text-[9px] text-slate-400 mt-1 max-w-[140px] mx-auto leading-normal">고사목 정밀 진단 및 현장 시공 검증 패키지</p>
                </div>
                <div className="w-full bg-emerald-500 text-darkgreen text-[10px] py-2 rounded-xl font-bold">
                  요원 패스코드 인증 활성
                </div>
              </div>
              <div className="h-4 bg-white border-t border-emerald-500/20 flex justify-center items-center">
                <div className="w-20 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto py-16 px-6 w-full space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-darkgreen">어플리케이션 주요 핵심 기능</h2>
          <p className="text-sm text-slate-500">산림청 통합 관제 시스템 및 데이터베이스와 실시간으로 연동되어 작동합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#dfebd4] rounded-2xl p-6 flex gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-darkgreen shrink-0">
              <MapPin size={24}/>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-black text-darkgreen">📍 의심목 위치 마킹 및 EXIF 연동</h3>
              <p className="text-xs text-slate-500 leading-normal">
                현장에서 발견한 고사 의심목의 위치를 클릭 한 번으로 마킹하고 기기 내 저장된 사진 파일의 메타데이터(EXIF GPS)를 파싱하여 동기화합니다.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#dfebd4] rounded-2xl p-6 flex gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-darkgreen shrink-0">
              <Layers size={24}/>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-black text-darkgreen">📋 2단계 시민 신고 및 실시간 트랙킹</h3>
              <p className="text-xs text-slate-500 leading-normal">
                소나무 전경 촬영과 자가 진단 문항을 포함한 초간편 2단계 프로세스를 거쳐 신고할 수 있으며, 접수 완료부터 방제 완료까지의 경과를 타임라인으로 보여줍니다.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#dfebd4] rounded-2xl p-6 flex gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-darkgreen shrink-0">
              <Mic size={24}/>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-black text-darkgreen">🎙️ AI 음성 작업일지 녹음 (STT)</h3>
              <p className="text-xs text-slate-500 leading-normal">
                벌채 조치 및 방제 작업 완료 시, 현장 키패드 입력 없이 목소리로 작업 로그를 기록하면 자동으로 텍스트 변환(Speech-to-Text)하여 행정망에 기안합니다.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#dfebd4] rounded-2xl p-6 flex gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-darkgreen shrink-0">
              <QrCode size={24}/>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-black text-darkgreen">🧪 자재 및 약제 정품 QR코드 인증</h3>
              <p className="text-xs text-slate-500 leading-normal">
                산림 훼손 방지를 위해 벌채 대상 표찰 바코드와 천공 주입 약제, 훈증 타포린의 정품 인증을 QR코드를 매핑 대조하여 원천 검증합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-b border-[#dfebd4] py-16 px-6 w-full overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-darkgreen">설치 및 가동 안내 가이드</h2>
            <p className="text-sm text-slate-500">인증되지 않은 앱 경고가 발생할 경우 아래 순서대로 예외 설치를 진행해 주십시오.</p>
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
                <div className="space-y-4">
                  <div 
                    className="w-full h-80 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/80 flex items-center justify-center relative bg-no-repeat bg-center" 
                    style={{ 
                      backgroundImage: `url(${stepItem.imgUrl})`,
                      backgroundSize: 'contain',
                      backgroundColor: '#f1f3f1'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/[0.02]"></div>
                  </div>
                  <div className="space-y-2">
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

      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 w-full text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-primary font-black">
            <ShieldCheck size={20}/>
            <span>{DOWNLOAD_CONFIG.appName} 통합 관제망</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            본 소프트웨어는 산림청 및 소나무재선충 예방 안전 방제 단체의 지상 기동 관제 규격을 수용하여 작동하는 공식 모바일 현장 조사 어플리케이션입니다. 무단 배포를 금합니다.
          </p>
          <div className="text-[10px] text-slate-600">
            © 2026 ForestShield AI. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}