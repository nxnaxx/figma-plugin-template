# Figma Plugin Template - React + Vite

</br>

<p align="center">
  <img src="https://github.com/user-attachments/assets/04c6ec4b-14cb-4ea2-9e38-3a81b0a78b19" alt="Logo"/>
</p>

<p align="center">
   React와 Vite로 구성된 Figma Plugin Boilerplate입니다.
</p>

</br>

## ⚡️ Quickstart
아래 단계에 따라 플러그인을 빠르게 시작할 수 있습니다.

1. 종속성을 설치합니다.
```bash
$ yarn install
```
2. Figma에서 새 디자인 파일을 생성하고 `Plugins > Development > New plugin...`을 선택합니다.
3. 플러그인 생성 모달에서 Figma design -> 레이아웃 선택 후 저장합니다.
4. Figma가 생성한 플러그인 폴더로 이동하여 해당 폴더의 `manifest.json` 파일을 열고 `id` 값을 복사합니다. 해당 값을 현재 프로젝트의 `manifest.json`에 적용합니다.

</br>

## 💻 Develop
개발 모드를 실행하면 프로젝트 루트에 `dist/` 디렉터리가 생성됩니다.
```bash
$ yarn dev
```
이제 Figma에서 다음 메뉴로 플러그인을 로드할 수 있습니다.

`Plugins > Development > Import plugin from manifest...`

여기서 프로젝트의 `manifest.json` 파일을 선택하면 됩니다.

### UI만 개발 모드로 실행
UI만 빠르게 개발하고 싶다면 다음 명령을 사용합니다:
```bash
$ yarn dev:ui
```
`http://localhost:5173/`에서 확인할 수 있습니다.

해당 모드는 플러그인 로직 없이 UI만 독립적으로 개발할 때 유용합니다.

</br>

## 📦 Build
프로덕션 빌드를 생성하려면:
```bash
$ yarn build
```
빌드 출력은 `dist/` 디렉터리에 저장됩니다.

</br>

## 📁 File Structure
```text
root
├── src/
│   ├── common/             # UI ↔ Plugin 메시지 타입 등 공유 코드
│   ├── plugin/             # Figma Plugin 코드
│   └── ui/                 # React UI
├── dist/                   # 빌드 출력 (자동 생성)
├── manifest.json           # Figma Plugin manifest
├── vite.config.plugin.ts   # Plugin용 번들 설정
└── vite.config.ui.ts       # UI용 번들 설정
```

</br>

## 🎨 Sample

![figma-plugin-sample](https://github.com/user-attachments/assets/22eaea3d-ef4e-45fc-9ece-dfb270922fae)


