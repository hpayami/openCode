<p align="center">
  <a href="https://opencode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="لوگوی OpenCode">
    </picture>
  </a>
</p>
<p align="center">عامل کدنویسی هوش مصنوعی متن‌باز ساخته شده برای ترمینال.</p>
<p align="center">
  <a href="https://opencode.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/opencode-ai"><img alt="npm" src="https://img.shields.io/npm/v/opencode-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/opencode/actions/workflows/publish.yml"><img alt="وضعیت ساخت" src="https://img.shields.io/github/actions/workflow/status/anomalyco/opencode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.fa.md">فارسی</a>
</p>

[![رابط کاربری ترمینال OpenCode](packages/web/src/assets/lander/screenshot.png)](https://opencode.ai)

---

### نصب

```bash
# YOLO
curl -fsSL https://opencode.ai/install | bash

# Package managers
npm i -g opencode-ai@latest        # یا bun/pnpm/yarn
scoop install opencode             # ویندوز
choco install opencode             # ویندوز
brew install anomalyco/tap/opencode # macOS و لینوکس (توصیه شده، همیشه به‌روز)
brew install opencode              # macOS و لینوکس (فرمول رسمی brew)
sudo pacman -S opencode            # آرچ لینوکس (پایدار)
paru -S opencode-bin               # آرچ لینوکس (آخرین نسخه از AUR)
mise use -g opencode               # هر سیستم‌عاملی
nix run nixpkgs#opencode           # یا github:anomalyco/opencode برای آخرین شاخه dev
```

> [!TIP]
> قبل از نصب، نسخه‌های قدیمی‌تر از 0.1.x را حذف کنید.

### اپلیکیشن دسکتاپ (نسخه بتا)

OpenCode به صورت اپلیکیشن دسکتاپ نیز در دسترس است. مستقیماً از [صفحه انتشارات](https://github.com/anomalyco/opencode/releases) یا [opencode.ai/download](https://opencode.ai/download) دانلود کنید.

| پلتفرم              | دانلود                             |
| ------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `opencode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `opencode-desktop-mac-x64.dmg`     |
| ویندوز               | `opencode-desktop-windows-x64.exe` |
| لینوکس               | `.deb`، `.rpm`، یا `.AppImage`     |

```bash
# macOS (Homebrew)
brew install --cask opencode-desktop
# ویندوز (Scoop)
scoop bucket add extras; scoop install extras/opencode-desktop
```

#### دایرکتوری نصب

اسکریپت نصب از ترتیب اولویت زیر برای مسیر نصب پیروی می‌کند:

1. `$OPENCODE_INSTALL_DIR` - دایرکتوری نصب سفارشی
2. `$XDG_BIN_DIR` - مسیر منطبق با مشخصات XDG Base Directory
3. `$HOME/bin` - دایرکتوری باینری استاندارد کاربر (در صورت وجود یا قابل ایجاد)
4. `$HOME/.opencode/bin` - مسیر پیش‌فرض

```bash
# مثال‌ها
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

### عامل‌ها (Agent)

OpenCode شامل دو عامل داخلی است که می‌توانید با کلید `Tab` بین آن‌ها جابه‌جا شوید.

- **build** - پیش‌فرض، عامل با دسترسی کامل برای کارهای توسعه
- **plan** - عامل فقط خواندنی برای تحلیل و کاوش کد
  - به طور پیش‌فرض ویرایش فایل را رد می‌کند
  - قبل از اجرای دستورات bash اجازه می‌گیرد
  - ایده‌آل برای کاوش پایگاه کدهای ناآشنا یا برنامه‌ریزی تغییرات

همچنین یک زیرعامل **general** برای جستجوهای پیچیده و کارهای چندمرحله‌ای وجود دارد.
این زیرعامل به صورت داخلی استفاده می‌شود و می‌توان با `@general` در پیام‌ها از آن استفاده کرد.

بیشتر درباره [عامل‌ها](https://opencode.ai/docs/agents) بدانید.

### مستندات

برای اطلاعات بیشتر درباره نحوه پیکربندی OpenCode، [به مستندات ما مراجعه کنید](https://opencode.ai/docs).

### مشارکت

اگر به مشارکت در OpenCode علاقه‌مند هستید، لطفاً قبل از ارسال درخواست pull، [مستندات مشارکت](./CONTRIBUTING.md) ما را مطالعه کنید.

### ساخت روی OpenCode

اگر روی پروژه‌ای کار می‌کنید که به OpenCode مرتبط است و از "opencode" به عنوان بخشی از نام خود استفاده می‌کند، مثلاً "opencode-dashboard" یا "opencode-mobile"، لطفاً در README خود یادداشتی اضافه کنید تا مشخص شود که توسط تیم OpenCode ساخته نشده است و به هیچ وجه با ما وابسته نیست.

---

**به جامعه ما بپیوندید** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
