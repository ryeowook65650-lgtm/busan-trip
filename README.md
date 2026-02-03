# busan-trip
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>釜山之旅 Day 2</title>
    <link rel="icon" type="image/png" href="icon.png">
    <link rel="apple-touch-icon" href="icon.png">
    
    <style>
        :root {
            /* 您的指定配色 */
            --busan-cyan: #00B9E7;      /* 亮天藍 */
            --busan-deep: #002F7B;      /* 深藍 */
            --busan-yellow: #F8B62D;    /* 黃色 */
            --busan-pink: #EE86A8;      /* 粉紅 */

            --bg-color: #F5F7FA;
            --card-bg: #FFFFFF;
            --text-main: #1F2937;
            --text-sub: #6B7280;
            --border: #E5E7EB;
        }

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { 
            margin: 0; padding: 0; 
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg-color); color: var(--text-main);
            padding-bottom: 100px;
        }

        /* 頂部 Header */
        .header {
            background: var(--card-bg);
            padding: 20px;
            position: sticky; top: 0; z-index: 100;
            border-bottom: 2px solid var(--busan-cyan);
            box-shadow: 0 4px 15px rgba(0, 47, 123, 0.08);
            display: flex; justify-content: space-between; align-items: center;
        }
        .title-group h1 { margin: 0; font-size: 22px; font-weight: 800; color: var(--busan-deep); }
        .title-group p { margin: 4px 0 0; font-size: 14px; color: var(--busan-cyan); font-weight: 600; }
        
        .weather-btn {
            background: #FFF0F5;
            color: var(--busan-pink);
            border: 1px solid var(--busan-pink);
            padding: 8px 12px; border-radius: 12px;
            font-size: 13px; font-weight: 600; text-decoration: none;
            display: flex; flex-direction: column; align-items: center;
        }

        /* 內容容器 */
        main { padding: 20px; max-width: 600px; margin: 0 auto; }

        /* 分隔標題 */
        .section-header {
            font-size: 18px; font-weight: 700; margin: 30px 0 15px;
            color: var(--busan-deep); display: flex; align-items: center; justify-content: space-between;
        }
        .section-header span { display: flex; align-items: center; gap: 8px; }
        .section-header span::before {
            content: ''; display: block; width: 6px; height: 20px;
            background: var(--busan-yellow); border-radius: 3px;
        }
        .rate-display { font-size: 12px; color: var(--text-sub); font-weight: normal; background: #eee; padding: 2px 8px; border-radius: 10px; }

        /* 行程卡片 */
        .card {
            background: var(--card-bg); border-radius: 16px;
            padding: 20px; margin-bottom: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
            border: 1px solid var(--border);
            border-left: 5px solid var(--busan-cyan);
            position: relative;
        }
        .time-badge {
            background: var(--busan-deep); color: white;
            font-size: 12px; font-weight: 700; padding: 4px 8px;
            border-radius: 6px; display: inline-block; margin-bottom: 10px;
        }
        .card-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--text-main); }
        
        .info-row { display: flex; margin-bottom: 8px; font-size: 14px; }
        .info-label { color: var(--text-sub); width: 40px; flex-shrink: 0; font-weight: 500; }
        .info-content { color: var(--text-main); flex-grow: 1; }
        
        .tag {
            display: inline-block; padding: 2px 8px; border-radius: 4px;
            font-size: 12px; font-weight: 600; margin-right: 4px; margin-bottom: 4px;
        }
        .tag-taxi { background: rgba(248, 182, 45, 0.2); color: #B45309; }
        .tag-walk { background: #F3F4F6; color: #4B5563; }
        .tag-bus { background: rgba(0, 185, 231, 0.15); color: var(--busan-deep); }
        
        .map-btn {
            display: block; width: 100%; text-align: center;
            background: white; color: var(--busan-deep);
            padding: 10px; border-radius: 10px; margin-top: 12px;
            text-decoration: none; font-weight: 600; font-size: 14px;
            border: 1px solid var(--busan-deep);
            transition: all 0.2s;
        }
        .map-btn:active { background: var(--busan-deep); color: white; }
        
        .link-btn {
            color: var(--busan-cyan); text-decoration: none; font-size: 14px;
            display: inline-block; margin-top: 4px; font-weight: 500;
        }

        /* --- 記帳區域樣式 --- */
        .accounting-box {
            background: white; border-radius: 16px; padding: 20px;
            border: 2px solid var(--busan-pink);
            box-shadow: 0 4px 15px rgba(238, 134, 168, 0.1);
        }
        .input-group { margin-bottom: 12px; }
        .input-group label { display: block; font-size: 13px; color: var(--text-sub); margin-bottom: 4px; }
        .form-input, .category-select {
            width: 100%; padding: 10px; border-radius: 8px;
            border: 1px solid var(--border); font-size: 16px; background: #F9FAFB;
        }
        .category-select { background: white; }
        .add-btn {
            width: 100%; background: var(--busan-cyan); color: white;
            padding: 12px; border-radius: 10px; border: none;
            font-size: 16px; font-weight: 700; cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 185, 231, 0.3);
        }
        .add-btn:active { transform: scale(0.98); }

        .expense-list { margin-top: 20px; border-top: 1px solid var(--border); padding-top: 10px; }
        .expense-item {
            display: flex; justify-content: space-between; align-items: center;
            padding: 10px 0; border-bottom: 1px dashed var(--border);
        }
        .expense-info { display: flex; flex-direction: column; }
        .expense-name { font-weight: 600; font-size: 15px; color: var(--busan-deep); }
        .expense-cat { font-size: 12px; color: var(--text-sub); margin-top: 2px; }
        
        .expense-price-group { text-align: right; }
        .expense-price { font-weight: 700; color: var(--busan-pink); font-size: 15px; display: block; }
        .expense-twd { font-size: 12px; color: var(--text-sub); font-weight: normal; display: block; margin-top: 2px; }

        .delete-btn {
            color: #9CA3AF; background: none; border: none; font-size: 18px;
            margin-left: 10px; padding: 0 5px; cursor: pointer;
        }
        
        .total-box {
            margin-top: 20px; background: rgba(248, 182, 45, 0.15);
            padding: 15px; border-radius: 10px; 
            border: 1px solid var(--busan-yellow);
        }
        .total-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        .total-label { font-weight: 700; color: var(--busan-deep); }
        .total-amount-krw { font-size: 20px; font-weight: 800; color: var(--busan-deep); }
        .total-amount-twd { font-size: 16px; font-weight: 600; color: var(--busan-pink); }

    </style>
</head>
<body>

    <header class="header">
        <div class="title-group">
            <h1>釜山 Day 2</h1>
            <p>3/6 (星期五)</p>
        </div>
        <a href="https://www.google.com/search?q=釜山+天氣" target="_blank" class="weather-btn">
            <span>🌦️</span>
            <span>看天氣</span>
        </a>
    </header>

    <main>
        <div class="section-header">
            <span>今日行程</span>
        </div>

        <div class="card">
            <span class="time-badge">09:00 - 11:00</span>
            <div class="card-title">甘川洞文化村</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 사하구 감내2로 203</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-taxi">計程車</span> 約 15 分鐘<br>
                    費用：₩6600
                </div>
            </div>
            <div class="info-row">
                <div class="info-label">備註</div>
                <div class="info-content">附近也有咖啡廳可坐坐</div>
            </div>
            <a href="https://tsnio.com/gamcheon-culture-village/" target="_blank" class="link-btn">🔗 查看詳細資訊</a>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+사하구+감내2로+203" target="_blank" class="map-btn">📍 導航至此 (甘川洞)</a>
        </div>

        <div class="card">
            <span class="time-badge">11:00 - 12:00</span>
            <div class="card-title">吃飯：密陽家豬肉湯飯</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 중구 중구로47번길 35</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-taxi">計程車</span> 約 8 分鐘<br>
                    費用：₩5200
                </div>
            </div>
            <div class="info-row">
                <div class="info-label">備註</div>
                <div class="info-content">評價 4.25🌟 (推薦豬肉湯飯)</div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+중구로47번길+35" target="_blank" class="map-btn">📍 導航至此 (密陽家)</a>
        </div>

        <div class="card">
            <span class="time-badge">12:00 - 15:00</span>
            <div class="card-title">市場走走 (富平/國際/阿里郎)</div>
            
            <div style="margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom:10px;">
                <strong>1. 富平罐頭市場</strong><br>
                <span style="font-size:13px; color:#666;">부산 중구 부평1길 48 (步行 1 分鐘)</span><br>
                <a href="https://damei17.com/bupyongkkangtongsijang/" target="_blank" class="link-btn">🔗 詳細介紹</a>
                <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+부평1길+48" target="_blank" class="map-btn" style="margin-top:5px; padding:8px; font-size:13px;">📍 導航到富平</a>
            </div>

            <div style="margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom:10px;">
                <strong>2. 國際市場</strong><br>
                <span style="font-size:13px; color:#666;">부산 중구 신창동4가 (步行 1 分鐘)</span><br>
                <span style="font-size:13px; color:var(--busan-pink); font-weight:bold;">*很多人去買棉被</span><br>
                <a href="https://big5chinese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=96145" target="_blank" class="link-btn">🔗 詳細介紹</a>
                <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+신창동4가" target="_blank" class="map-btn" style="margin-top:5px; padding:8px; font-size:13px;">📍 導航到國際市場</a>
            </div>

            <div>
                <strong>3. 阿里郎街</strong><br>
                <span style="font-size:13px; color:#666;">부산 중구 광복로35번길 11 (步行 1 分鐘)</span><br>
                <a href="https://big5chinese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=90885" target="_blank" class="link-btn">🔗 詳細介紹</a>
                <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+광복로35번길+11" target="_blank" class="map-btn" style="margin-top:5px; padding:8px; font-size:13px;">📍 導航到阿里郎街</a>
            </div>
        </div>

        <div class="card">
            <span class="time-badge">15:00 - 16:00</span>
            <div class="card-title">白淺灘文化村</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 영도구 영선동4가 605-3</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-taxi">計程車</span> 約 15 分鐘<br>
                    費用：₩6500
                </div>
            </div>
            <a href="https://tsnio.com/huinnyeoul-culture-village/" target="_blank" class="link-btn">🔗 查看詳細資訊</a>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+영도구+영선동4가+605-3" target="_blank" class="map-btn">📍 導航至此 (白淺灘)</a>
        </div>

        <div class="card">
            <span class="time-badge">16:00 - 18:00</span>
            <div class="card-title">晚餐：南浦排骨烤肉</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 중구 남포길 40-2 1층</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-bus">公車</span> 6號或9號<br>
                    從 흰여울문화마을 到 남포동<br>
                    費用：₩1500
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+남포길+40-2" target="_blank" class="map-btn">📍 導航至此 (南浦排骨)</a>
        </div>

        <div class="card">
            <span class="time-badge">18:00 - 20:00</span>
            <div class="card-title">樂天百貨光復店 (買草莓)</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 중구 중앙대로 2 , 1층</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-walk">步行</span> 約 6 分鐘
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+중구+중앙대로+2" target="_blank" class="map-btn">📍 導航至此 (樂天百貨)</a>
        </div>

        <div class="card">
            <span class="time-badge">20:00 -</span>
            <div class="card-title">回飯店</div>
            <div class="info-row">
                <div class="info-label">地址</div>
                <div class="info-content">부산 사하구 감내2로 203 (甘川文化村)</div>
            </div>
            <div class="info-row">
                <div class="info-label">交通</div>
                <div class="info-content">
                    <span class="tag tag-walk">步行</span> 約 20 分鐘
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=부산+사하구+감내2로+203" target="_blank" class="map-btn">📍 導航回飯店</a>
        </div>

        <div class="section-header">
            <span>💰 今日記帳 (KRW)</span>
            <span id="rate-display" class="rate-display">匯率載入中...</span>
        </div>
        
        <div class="accounting-box">
            <div class="input-group">
                <label>項目名稱</label>
                <input type="text" id="item-name" class="form-input" placeholder="例如：計程車費">
            </div>
            
            <div style="display: flex; gap: 10px;">
                <div class="input-group" style="flex: 1;">
                    <label>金額 (₩)</label>
                    <input type="number" id="item-price" class="form-input" placeholder="0">
                </div>
                <div class="input-group" style="flex: 1;">
                    <label>分類</label>
                    <select id="item-cat" class="category-select">
                        <option value="交通">🚕 交通</option>
                        <option value="食物">🍔 食物</option>
                        <option value="購物">🛍️ 購物</option>
                        <option value="其他">✨ 其他</option>
                    </select>
                </div>
            </div>

            <button onclick="addExpense()" class="add-btn">＋ 新增一筆</button>

            <div class="expense-list" id="expense-list">
                </div>

            <div class="total-box">
                <div class="total-row">
                    <span class="total-label">總韓元 (KRW)</span>
                    <span class="total-amount-krw" id="total-krw">0</span>
                </div>
                <div class="total-row" style="margin-bottom: 0;">
                    <span class="total-label" style="font-size: 14px; opacity: 0.8;">約合台幣 (TWD)</span>
                    <span class="total-amount-twd" id="total-twd">NT$ 0</span>
                </div>
            </div>
        </div>

    </main>

    <script>
        // 預設匯率 (萬一 API 壞掉時用)
        let currentRate = 0.024; 
        let expenses = JSON.parse(localStorage.getItem('busan_day2_expenses')) || [];

        // 頁面載入時抓匯率
        window.onload = function() {
            fetchExchangeRate();
            renderExpenses();
        };

        async function fetchExchangeRate() {
            const rateDisplay = document.getElementById('rate-display');
            try {
                // 使用免費公開 API 抓取 KRW -> TWD
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/KRW');
                const data = await response.json();
                if (data.rates && data.rates.TWD) {
                    currentRate = data.rates.TWD;
                    rateDisplay.textContent = `即時匯率: ${currentRate}`;
                    renderExpenses(); // 更新畫面上的台幣金額
                } else {
                    rateDisplay.textContent = `預設匯率: ${currentRate}`;
                }
            } catch (error) {
                console.log("匯率抓取失敗，使用預設值");
                rateDisplay.textContent = `預設匯率: ${currentRate}`;
            }
        }

        function addExpense() {
            const nameInput = document.getElementById('item-name');
            const priceInput = document.getElementById('item-price');
            const catInput = document.getElementById('item-cat');

            const name = nameInput.value.trim();
            const price = parseInt(priceInput.value);
            const cat = catInput.value;

            if (name === '' || isNaN(price)) {
                alert('請輸入項目名稱和金額喔！');
                return;
            }

            const newExpense = {
                id: Date.now(),
                name: name,
                price: price,
                cat: cat
            };

            expenses.push(newExpense);
            saveAndRender();
            
            // 清空輸入框
            nameInput.value = '';
            priceInput.value = '';
        }

        function deleteExpense(id) {
            if(confirm('確定要刪除這筆嗎？')) {
                expenses = expenses.filter(item => item.id !== id);
                saveAndRender();
            }
        }

        function saveAndRender() {
            localStorage.setItem('busan_day2_expenses', JSON.stringify(expenses));
            renderExpenses();
        }

        function renderExpenses() {
            const listEl = document.getElementById('expense-list');
            const totalKrwEl = document.getElementById('total-krw');
            const totalTwdEl = document.getElementById('total-twd');
            
            listEl.innerHTML = '';
            let total = 0;

            expenses.forEach(item => {
                total += item.price;
                const twdPrice = Math.round(item.price * currentRate); // 計算單項台幣
                
                const div = document.createElement('div');
                div.className = 'expense-item';
                div.innerHTML = `
                    <div class="expense-info">
                        <span class="expense-name">${item.name}</span>
                        <span class="expense-cat">${getCatEmoji(item.cat)} ${item.cat}</span>
                    </div>
                    <div style="display:flex; align-items:center;">
                        <div class="expense-price-group">
                            <span class="expense-price">₩${item.price.toLocaleString()}</span>
                            <span class="expense-twd">≈ NT$ ${twdPrice.toLocaleString()}</span>
                        </div>
                        <button class="delete-btn" onclick="deleteExpense(${item.id})">×</button>
                    </div>
                `;
                listEl.appendChild(div);
            });

            // 更新總金額
            const totalTwd = Math.round(total * currentRate);
            totalKrwEl.textContent = total.toLocaleString();
            totalTwdEl.textContent = `NT$ ${totalTwd.toLocaleString()}`;
        }

        function getCatEmoji(cat) {
            if(cat === '交通') return '🚕';
            if(cat === '食物') return '🍔';
            if(cat === '購物') return '🛍️';
            return '✨';
        }
    </script>
</body>
</html>
