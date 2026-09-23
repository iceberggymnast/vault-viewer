// 홈 화면 설치 조건을 채우기 위한 서비스 워커. 캐시는 하지 않는다(항상 최신 버전을 받는다).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
