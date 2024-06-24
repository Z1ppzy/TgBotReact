interface WebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
  
  interface WebApp {
    initData: string;
    initDataUnsafe: {
      user: WebAppUser;
      query_id: string;
    };
    ready: () => void;
  }
  
  interface Window {
    Telegram: {
      WebApp: WebApp;
    };
  }
  