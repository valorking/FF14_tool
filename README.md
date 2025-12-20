# FF14 工具集

**最終幻想 XIV 生產與遊戲資源整合工具**

---

## 📋 項目簡介

FF14 工具集是一個為最終幻想 XIV 玩家打造的網頁應用集合，整合了多個常用的遊戲內資源與生產輔助工具。無需額外安裝，直接在瀏覽器中使用，支持深色/淺色主題切換，並可持久化主題選擇。

### 核心功能
- **首頁工具導航**：一鍵快速訪問常用資源與外部工具
- **蒼天街生產巨集**：分級生產配方巨集，支持複製與音效反饋
- **主題切換**：深色/淺色模式，自動保存用戶偏好設定
- **搜尋功能**：物品與任務快速搜尋（繁簡轉換支援）

---

## 🎯 主要模塊

### 1. 首頁（index.html）
- 工具卡片導航，快速訪問以下外部資源：
  - **灰機 WIKI**：物品與任務資料庫
  - **風脈探索筆記**：野外採集與寶藏地圖
  - **生產計算器**：自動生成最優巨集
  - **仙人微彩/天書奇談計算機**
  - **抽屜選單巨集產生器**
  - **魚糕-v2**：釣魚工具
- **搜尋面板**：支援物品與任務搜尋

### 2. 蒼天街生產巨集頁面（ishgard-craft.html）
分級顯示蒼天街生產配方巨集，按職業等級分為四個等級區間：

| 等級區間 | 配方內容 |
|---------|---------|
| **1-30** | Lv20 → Lv21、Lv20 → Lv33 基礎製作 |
| **30-60** | Lv40 → Lv45、Lv40 → Lv50、Lv40 → Lv63 進階製作 |
| **60-90** | Lv60 → Lv63（60等工票飾品） |
| **90+** | 更高等級配方（預留） |

#### 現有巨集
| ID | 配方等級 | 職業等級 | 分類 | 備註 |
|----|---------|---------|------|------|
| m1 | Lv20 | Lv21 | 1-30 | 基礎製作巨集 |
| m2 | Lv20 | Lv33 | 30-60 | 改革型製作 |
| m25 | Lv20 | Lv33 | 30-60 | NQ素材用途 |
| m3 | Lv40 | Lv45 | 30-60 | 進階製作 |
| m4 | Lv40 | Lv50 | 30-60 | 進階完整版 |
| m5 | Lv40 | Lv63 | 30-60 | 63裝備等級 |
| m6 | Lv60 | Lv63 | 60-90 | 60等工票飾品 |

**巨集功能**：
- 一鍵複製至剪貼簿
- Toast 通知確認（頂部置中綠色提示，自動2秒消退）
- 完整包含等待時間標記 `<wait.x>` 與音效標記 `<se.14>`

---

## 🛠️ 技術堆棧

### 前端框架
- **HTML5 / CSS3 / JavaScript (ES6 Modules)**
- 無第三方框架依賴

### 特色技術
- **localStorage 持久化**：保存用戶主題選擇與偏好設定
- **模組化架構**：清晰的功能分離與代碼組織
- **深色/淺色主題系統**：支持系統偏好檢測與動態切換
- **動畫 UI**：Toast 通知、主題切換過渡、卡片動畫

### 檔案結構
```
FF14_tool/
├── index.html                    # 首頁
├── ishgard-craft.html           # 蒼天街生產巨集頁面
├── README.md                     # 本檔案
│
├── css/
│   ├── reset.css               # CSS 重置 & 全局樣式
│   ├── theme.css               # 主題變數與深/淺色樣式
│   ├── layout.css              # 頁面佈局與響應式設計
│   ├── components.css          # UI 元件樣式（Toast、卡片等）
│   └── ishgard.css             # 蒼天街頁面專用樣式
│
├── js/
│   ├── main.js                 # 首頁入口腳本
│   ├── ishgard.js              # 蒼天街頁面入口腳本
│   │
│   ├── core/
│   │   ├── theme.js            # 主題管理（localStorage + 系統偏好檢測）
│   │   └── toast.js            # 通知提示模組
│   │
│   ├── features/
│   │   ├── ishgard.js          # 蒼天街巨集渲染與複製邏輯
│   │   ├── search.js           # 搜尋與繁簡體轉換
│   │   └── cards.js            # 工具卡片渲染
│   │
│   └── data/
│       ├── ishgard-macros.js   # 蒼天街巨集數據與元數據
│       └── tools.js            # 首頁工具卡片數據
│
└── scripts/
    └── check_macros.py         # 巨集資料檢查與驗證腳本
```

---

## 🚀 使用方法

### 本機開發

```bash
# 進入專案目錄
cd FF14_tool

# 方法 1：Python 3 內置伺服器
python -m http.server 8000

# 方法 2：Node.js http-server
npm install -g http-server
http-server -p 8000

# 方法 3：VS Code Live Server 擴展
# 右鍵點選 index.html → Open with Live Server
```

**訪問**：在瀏覽器中打開 `http://localhost:8000`

### 線上部署

1. 將專案上傳到靜態託管平臺：
   - GitHub Pages（免費）
   - Vercel（推薦）
   - Netlify
   - 雲端儲存空間（阿里雲、騰訊雲等）

2. 確保 `index.html` 設為首頁
3. 訪問對應 URL

---

## 🎨 主題系統

### 深/淺色切換
- **位置**：頁面右上角
- **操作**：點選「深色 / 淺色」開關切換
- **自動保存**：選擇會自動保存到 `localStorage.theme`
- **跨頁面同步**：重新載入或訪問其他頁面時主題會保留

### 支援特性
- ✅ 系統偏好檢測（macOS/Windows 深色模式自動適應）
- ✅ 即時切換無需刷新頁面
- ✅ localStorage 持久化，關閉瀏覽器後仍保留選擇
- ✅ 精細的深色/淺色樣式定義

### 主題顏色變數
詳見 [css/theme.css](css/theme.css)，包括：
- `--bg-primary`、`--bg-secondary`：背景色
- `--text-primary`、`--text-secondary`：文字色
- `--success-color`、`--warning-color`：功能色
- 其他 20+ 定製色變數

---

## 📋 功能詳解

### 蒼天街巨集複製
1. 前往「蒼天街生產」頁面
2. 選擇對應等級頁籤（1-30 / 30-60 / 60-90 / 90+）
3. 在卡片上點選「一鍵複製」按鈕
4. 頂部會出現**綠色通知提示**已複製
5. 在遊戲中貼上至巨集欄即可使用

### 搜尋功能
- **支援對象**：物品名稱、任務名稱
- **特色功能**：自動繁簡體中文轉換
- **使用方式**：首頁搜尋欄輸入關鍵詞
- **網路需求**：需要網路連線存取外部 API

### 工具導航（首頁）
首頁提供 7 個常用工具快速入口：

| 工具名稱 | 連結來源 | 功能 |
|---------|---------|------|
| 灰機 WIKI | [huijiwiki.com](https://ff14.huijiwiki.com/) | 物品、任務、NPC 查詢 |
| 風脈工具 | [ffsusu.com](https://tools.ffsusu.com/lajipai/) | 採集位置、寶藏地圖、FATE |
| 生產計算器 | [nightcore](https://nightcoreisla.github.io/ffxiv-best-craft-zhtw/) | 巨集生成與製作計算 |
| 微彩/天書 | [ben1013liao](https://ben1013liao-hue.github.io/FF14-Cactpot-Solver/) | 寶選/天書模擬器 |
| 巨集產生器 | [jhaoyu1201](https://jhaoyu1201.github.io/FFXIV_TOOL/hotbar.html) | 快捷列巨集產生 |
| 魚糕-v2 | [ffmomola.com](https://fish.ffmomola.com/) | 釣魚計時與推薦魚竿 |

---

## ⚙️ 開發與貢獻

### 新增巨集到蒼天街系統

編輯 `js/data/ishgard-macros.js`，遵循以下數據格式：

```javascript
{
  id: 'm7',                              // 唯一識別符（m1, m2, ...）
  title: '蒼天 Lv60 ｜職業 Lv63',        // 顯示名稱
  minLevel: 60,                          // 最低配方等級
  maxLevel: 60,                          // 最高配方等級
  category: '60-90',                     // 分類：1-30 / 30-60 / 60-90 / 90+
  tags: ['Lv60', '63裝備'],              // 標籤（可選，用於搜尋與篩選）
  req: '需求：CP ≥ 280, 獲得度 ≥ 2700', // 需求說明
  code: `/ac "改革" <wait.2>\n...` +
        `/echo 巨集動作 已完成！<se.14>` // 完整巨集代碼，必須以 <se.14> 結尾
}
```

### 修改主題色

編輯 `css/theme.css` 中的主題變數：

```css
:root {
  /* 深色主題（默認） */
  --bg-primary: #1a1a1a;
  --text-primary: #e4e4e4;
  --success-color: #4caf50;
  /* ... 其他變數 ... */
}

[data-theme="light"] {
  /* 淺色主題 */
  --bg-primary: #ffffff;
  --text-primary: #212121;
  --success-color: #2e7d32;
  /* ... 其他變數 ... */
}
```

### 數據驗證

執行 Python 檢查腳本，確保所有巨集格式正確、數據完整：

```bash
python scripts/check_macros.py
```

**檢查項目**：
- ✅ 巨集 ID 唯一性
- ✅ 必填欄位完整性（title, code 等）
- ✅ 等級範圍有效性（minLevel ≤ maxLevel）
- ✅ 分類正確性
- ✅ 巨集代碼格式（結尾 `<se.14>` 音效標記）

---

## 📝 版本歷史

### v1.0.0 (2025年12月20日)
**特性**：
- ✨ 完整蒼天街生產巨集系統，支援四個等級區間（1-30 / 30-60 / 60-90 / 90+）
- ✨ localStorage 深色/淺色主題持久化與系統偏好檢測
- ✨ 一鍵複製巨集與 Toast 頂部通知
- ✨ 搜尋與繁簡體中文轉換

**修復**：
- 🐛 Toast 通知位置調整（頂部置中，2秒自動消退）
- 🐛 修正巨集代碼顯示與複製時 `<wait.x>` 序列不正確的問題
- 🐛 統一所有巨集 echo 音效標記為 `<se.14>`
- 🔧 移除重複的 `toggleTheme()` 定義，集中管理於 `js/core/theme.js`
- 🔧 修改 HTML input 類型從非標準 `type="switch"` 為標準 `type="checkbox"`

**已知事項**：
- 暫無

---

## 📜 授權與資料來源

- **數據來源**：網路與玩家社群貢獻
- **外部工具**：開源社群與個人開發者
- **免責聲明**：本專案不包含官方遊戲內容，僅供玩家輔助參考

**遊戲版權**：© 2010-2025 SQUARE ENIX CO., LTD. All Rights Reserved.

FF14 及其相關內容為 SQUARE ENIX 註冊商標，本專案無商業目的。

---

## 💬 問題與反饋

如有建議、發現問題或希望貢獻代碼，歡迎：
- 📧 提交 Issue 報告問題
- 🔄 提交 Pull Request 貢獻改進
- 💬 在社群討論區分享反饋

---

## 🔗 相關連結

**官方資源**：
- [最終幻想 XIV 官方網站](https://www.ff14.co.jp/)
- [FFXIV 國際社群](https://www.reddit.com/r/ffxiv/)

**輔助工具**：
- [灰機 WIKI](https://ff14.huijiwiki.com/) - 資料百科
- [風脈工具](https://tools.ffsusu.com/lajipai/) - 採集位置
- [生產計算器](https://nightcoreisla.github.io/ffxiv-best-craft-zhtw/#/welcome) - 生產巨集
- [魚糕-v2](https://fish.ffmomola.com/) - 釣魚工具

**開發參考**：
- [MDN Web Docs](https://developer.mozilla.org/) - Web 技術文檔

---

## 📊 統計數據

- **頁面數**：2（首頁 + 蒼天街生產）
- **巨集數**：7 個（涵蓋 Lv20-Lv60 配方）
- **等級區間**：4 個（1-30 / 30-60 / 60-90 / 90+）
- **工具卡片**：7 個外部資源連結
- **主題**：2 種（深色 + 淺色，支持系統偏好）
- **代碼語言**：HTML, CSS, JavaScript (ES6 Modules)

---

**最後更新**：2025年12月20日  
**維護者**：[valorking](https://github.com/valorking)  
**倉儲位置**：[FF14_tool](https://github.com/valorking/FF14_tool)
