/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string = 'Vite App';
  readonly VITE_API_URL: string = 'http://localhost:8000';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
