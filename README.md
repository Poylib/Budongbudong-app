# 부동부동 클론 App

## 목차

- 프로젝트 설명
- 프로젝트 사용 방법
- 폴더 구조

## 프로젝트 설명

- 빅데이터 기반 프롭핀테크 앱 부동부동 클론 프로젝트 입니다.
- 소셜로그인 - 검색 - 상세정보 플로우에 맞게 구현했습니다.

## 프로젝트 실행 방법

프로젝트 환경

- [Node.js > 14](https://nodejs.org) and npm
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 14](https://developer.apple.com/xcode)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

1. 레포지토리 복사 후 프로젝트 폴더에서 `npm install`
2. Xcode 12.5 혹은 그 이상의 버전 사용시 `/ios` 폴더로 이동 후 `pod install`
3. `npm run ios` 혹은 `npm run android`  
   (yarn 사용시: `yarn ios` or `yarn android`)

## 폴더 구조

이 프로젝트는 다음과 같은 폴더 구조로 구성되어 있습니다.

- `src` : 프로젝트의 코드가 담겨있는 메인 폴더 입니다.
  - `components` : 재사용, 가독성을 위해 분리한 컴포넌트를 사용 페이지 별로 저장했습니다.
    - `detail`
    - `search`
    - `swiper`
  - `constant` : 버튼, 링크 등 컴포넌트 안에서 쓰기 가독성 떨어지는 불변데이터를 담았습니다.
  - `navigators` : navigator 동작을 위한 파일을 저장했습니다.
  - `screens` : 앱에서 동작하는 모든 스크린이 저장돼있습니다.
  - `theme` : 앱에서 공통적으로 사용하는 style 관련 코드입니다.
  - `utils` : 재사용되는 함수를 저장했습니다.
- `mock` : UI 테스트 관련 .json 파일을 담았습니다.
- `assets` : UI 구성에 필요한 아이콘, 이미지를 저장했습니다.
