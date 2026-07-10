import { dict as en } from "./en"

type Keys = keyof typeof en

export const dict = {
  "desktop.menu.checkForUpdates": "بررسی به‌روزرسانی...",
  "desktop.menu.installCli": "نصب CLI...",
  "desktop.menu.reloadWebview": "بارگذاری مجدد Webview",
  "desktop.menu.restart": "راه‌اندازی مجدد",

  "desktop.dialog.chooseFolder": "انتخاب پوشه",
  "desktop.dialog.chooseFile": "انتخاب فایل",
  "desktop.dialog.saveFile": "ذخیره فایل",

  "desktop.updater.checkFailed.title": "بررسی به‌روزرسانی ناموفق بود",
  "desktop.updater.checkFailed.message": "بررسی به‌روزرسانی با شکست مواجه شد",
  "desktop.updater.none.title": "به‌روزرسانی در دسترس نیست",
  "desktop.updater.none.message": "شما در حال استفاده از آخرین نسخه OpenCode هستید",
  "desktop.updater.downloadFailed.title": "به‌روزرسانی ناموفق بود",
  "desktop.updater.downloadFailed.message": "دانلود به‌روزرسانی با شکست مواجه شد",
  "desktop.updater.downloaded.title": "به‌روزرسانی دانلود شد",
  "desktop.updater.downloaded.prompt":
    "نسخه {{version}} OpenCode دانلود شده است، آیا می‌خواهید آن را نصب کرده و دوباره راه‌اندازی کنید؟",
  "desktop.updater.installFailed.title": "نصب به‌روزرسانی ناموفق بود",
  "desktop.updater.installFailed.message": "نصب به‌روزرسانی با شکست مواجه شد",

  "desktop.cli.installed.title": "CLI نصب شد",
  "desktop.cli.installed.message": "CLI در {{path}} نصب شد\n\nبرای استفاده از دستور 'opencode' ترمینال خود را مجدداً راه‌اندازی کنید.",
  "desktop.cli.failed.title": "نصب ناموفق بود",
  "desktop.cli.failed.message": "نصب CLI با شکست مواجه شد: {{error}}",
} satisfies Partial<Record<Keys, string>>
