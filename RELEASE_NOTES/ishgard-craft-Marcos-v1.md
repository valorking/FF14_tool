# Release: ishgard-craft-Marcos-v1

**版本**: ishgard-craft-Marcos-v1

**日期**: 2025-12-21

## 簡要說明
本次釋出將「蒼天街生產」頁面改為可在首頁以浮動視窗（modal / floating page）開啟的使用者體驗，同時完成多項功能強化與錯誤修正，方便使用者在不離開工具入口的情況下檢視與複製巨集。

## 主要大項功能
- 浮動式蒼天街生產介面（Modal）: 使用者在首頁點選「蒼天街生產」卡片，即可在當前頁面開啟遮罩式浮動視窗檢視巨集。
- 巨集分級顯示與快速複製: 支援四個等級區間：1-30 / 30-60 / 60-90 / 90+，卡片內含「一鍵複製」按鈕並顯示複製完成的 Toast 回饋。
- 主題同步與持久化: 深色/淺色主題支持系統偏好檢測並儲存在 `localStorage`，modal 與首頁同步顯示同一主題。
- 巨集顯示修正: 保留 `<wait.x>` 等等待標記的原始文字，避免被解析成 HTML，並在複製時完整保留下來。
- 音效提示一致性: 所有巨集的 echo 行統一以 `<se.14>` 音效標記結尾，提供遊戲內操作回饋。

## 主要細項與改進
- 動態載入：首頁的工具卡片在點選蒼天街時會動態 import `js/features/ishgard.js`，僅在需要時載入巨集渲染程式碼以減少初次頁面負擔。
- Toast 樣式修正：將 toast 預設樣式置中於頁面頂部（top-center），背景色為成功色，持續 2 秒自動消退。
- CSS 與無障礙：新增 modal overlay 與 dialog 樣式（遮罩、背景模糊、可由 ESC 或點擊遮罩關閉）。
- 新增巨集：加入 `m5` 與 `m6`（分別為 Lv40→63 與 Lv60→63/60等工票飾品），並調整既有巨集命名為「蒼天 Lv[配方等級] ｜職業 Lv[職業等級]」格式。
- 修正與清理：移除重複的 `toggleTheme()` 定義，統一至 `js/core/theme.js`，並修正 HTML 中非標準 input type（`switch` → `checkbox`）。

## 相容性與升級說明
- 需要在靜態伺服器環境下使用（例如 `python -m http.server 8000` 或 `http-server`），以正確載入 ES module 動態 import。
- 若有自訂 CSS 覆寫 `components.css` 或 `ishgard.css`，請確認 `.toast`、`.modal-overlay` 與 `.modal` 的樣式不被覆蓋。

## 測試指引（本地）
1. 啟動本地靜態伺服器：

```bash
cd FF14_tool
python -m http.server 8000
```

2. 開啟首頁：`http://localhost:8000`，點選「蒼天街生產」卡片。
3. 驗證 modal 開啟、巨集列表載入、點擊「一鍵複製」會在頂部顯示 toast 並將巨集文字寫入剪貼簿。
4. 驗證按 ESC、點擊遮罩或按右上關閉鈕可關閉 modal。

## Changelog（本次）
- 新增：浮動式蒼天街生產 modal（index 內開啟）。
- 新增：`m5`, `m6` 巨集資料。
- 改進：巨集渲染保留 `<wait.x>`，複製行為修正。
- 修復：toast 樣式以及主題持久化問題。

## Tag 與對應 commit
- Tag: `ishgard-craft-Marcos-v1`
- Commit 範圍包含：`index.html`（modal 容器）、`css/ishgard.css`（modal 樣式）、`js/features/cards.js`（動態載入邏輯）、`js/features/ishgard.js`（巨集渲染/複製）、`ishgard-craft.html`（保留為獨立頁面與 modal 版本）

---

若要我也代為在 GitHub 上建立 Release（以此 tag 產生 release 並填入此 release note 內容），我可以嘗試自動呼叫 GitHub API（需要你提供一個有 push 與 repo 權限的 Personal Access Token），或我可以只把 release note 檔案保持在倉庫供你手動在 GitHub 建立 Release。
