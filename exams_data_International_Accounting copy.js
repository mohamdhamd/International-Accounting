const examsData = {
    "accounting_programs_exam_model_6": {
        "title": "امتحان الشابتر الخامس الكامل",
        "description": "بسم الله وأبدأ - بنك الأسئلة الشامل والحالات العملية الخاصة بالشابتر الخامس (محاسبة تغيرات الأسعار وصيانة رأس المال)",
        "questions": [
            {
                "id": 1,
                "text": "What is not a valid criticism of historical cost accounting?\n\n",
                "options": [
                    { "id": "a", "text": "A. It is not relevant in times of changing prices" },
                    { "id": "b", "text": "B. It is not logical to add assets together that have been purchased in different periods, with dollars of different purchasing power" },
                    { "id": "c", "text": "C. It understates profit in times of rising prices" },
                    { "id": "d", "text": "D. It distorts current year's operating results by including the current year's income, holding gains that accrued in previous periods" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن حاجة مش عيب حقيقي للتكلفة التاريخية، اختار الجملة اللي بتقول إنها بتقلل الأرباح Understates لأنها في الحقيقة بتضخمها Overstates.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: C</strong><br><br>التكلفة التاريخية وقت الغلاء بتعمل العكس تماماً؛ بتضخم الأرباح وتخليها تبان أكبر من حقيقتها (Overstates profits) نتيجة طمس فروق الأسعار، فقول إنها تقلل الأرباح (Understates) هو ادعاء خاطئ تماماً وهو المطلوب اختياره."
            },
            {
                "id": 2,
                "text": "If historical cost profits are all distributed in dividends during times of rising inventory prices, this will lead to (assuming other things being equal):\n\n",
                "options": [
                    { "id": "a", "text": "A. A reduction in financial capital" },
                    { "id": "b", "text": "B. An erosion of operating capacity" },
                    { "id": "c", "text": "C. No effect on capital" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "توزيع كل أرباح التكلفة التاريخية وقت الغلاء بيؤدي فوراً لتآكل القدرة التشغيلية للمصنع Erosion of operating capacity.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: B</strong><br><br>توزيع الأرباح التقليدية بالكامل وقت زيادة الأسعار بيحرم المنشأة من السيولة الكافية لإحلال البضاعة المباعة، مما يتسبب في تجريد وتآكل القدرة التشغيلية للمنشأة (Erosion of operating capacity)."
            },
            {
                "id": 3,
                "text": "Change in prices of particular assets within a particular industry is called:\n\n",
                "options": [
                    { "id": "a", "text": "a- general price index" },
                    { "id": "b", "text": "b- particular price index" },
                    { "id": "c", "text": "c- specific price index" },
                    { "id": "d", "text": "d- all of the above" }
                ],
                "correct": "c",
                "basmaga": "تغير أسعار أصل معين في صناعة معينة (prices of particular assets) ده المؤشر الخاص Specific Price Index.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>المؤشر القياسي الخاص (Specific Price Index) هو اللي بيقيس التغير في أسعار أصل محدد أو سلع معينة داخل صناعة مخصصة بذاتها."
            },
            {
                "id": 4,
                "text": "Change in prices of broad cross-section of goods and services is called:\n\n",
                "options": [
                    { "id": "a", "text": "a- general price index" },
                    { "id": "b", "text": "b- particular price index" },
                    { "id": "c", "text": "c- specific price index" },
                    { "id": "d", "text": "d- all of the above" }
                ],
                "correct": "a",
                "basmaga": "تغير أسعار باقة واسعة وشاملة من السلع والخدمات في البلد (broad cross-section) ده المؤشر العام General Price Index.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>المؤشر القياسي العام للأسعار (General Price Index) بيقيس متوسط التغير في أسعار سلة واسعة وشاملة من السلع والخدمات المستهلكة في الاقتصاد ككل (مثل مؤشر CPI)."
            },
            {
                "id": 5,
                "text": "Case Data: Assume that there are three types of commodities (A, B and C) that are consumed at the following base-year quantities and prices, as shown in the table below:\n- Commodity A: Base year (2007) Price = $5, Qty = 10, Year 2008 Price = $6\n- Commodity B: Base year (2007) Price = $10, Qty = 30, Year 2008 Price = $11\n- Commodity C: Base year (2007) Price = $15, Qty = 20, Year 2008 Price = $14.5\n\nQuestion: What is the price index at the end of 2008?\n\n",
                "options": [
                    { "id": "a", "text": "Α. 1.0597281" },
                    { "id": "b", "text": "Β. 0.958823" },
                    { "id": "c", "text": "C. 1.0461538" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "c",
                "basmaga": "مسألة السلع الثلاثة لـ 2007 و 2008، اقسم تكلفة السلة في 2008 على تكلفتها في 2007، واختار الناتج 1.0461538 علطول.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: C</strong><br><br>طريقة الحساب:<br>• تكلفة سنة الأساس 2007 = (5*10) + (10*30) + (15*20) = 50 + 300 + 300 = 650<br>• تكلفة سنة 2008 = (6*10) + (11*30) + (14.5*20) = 60 + 330 + 290 = 680<br>• الرقم القياسي = 680 / 650 = 1.0461538"
            },
            {
                "id": 6,
                "text": "Case Data: Assume that there are three types of commodities (A, B and C) that are consumed at the following base-year quantities and prices, as shown in the table below:\n- Commodity A: Base year (2007) Price = $5, Qty = 10, Year 2008 Price = $6\n- Commodity B: Base year (2007) Price = $10, Qty = 30, Year 2008 Price = $11\n- Commodity C: Base year (2007) Price = $15, Qty = 20, Year 2008 Price = $14.5\n\nQuestion: Assuming a price index calculated 104.5 in 2008, compared with 100 in 2007, for a bundle of goods, what is the current purchasing power of every dollar, compared to 2007?\n\n",
                "options": [
                    { "id": "a", "text": "A. 95.5 cents in every dollar" },
                    { "id": "b", "text": "B. 95.69 cents in every dollar" },
                    { "id": "c", "text": "C. 96.5 cents in every dollar" },
                    { "id": "d", "text": "D. $1.045 in every dollar" }
                ],
                "correct": "b",
                "basmaga": "لما يديك المؤشر 104.5 وعايز القوة الشرائية للدولار، احسب مقلوب المؤشر (100 / 104.5) واختار 95.69 cents فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: B</strong><br><br>الحساب: مقلوب المؤشر القياسي يمثل القوة الشرائية الحقيقية للعملة &rarr; (100 / 104.5) = 0.956937 دولار، وهو ما يعادل 95.69 سنتاً لكل دولار."
            },
            {
                "id": 7,
                "text": "Case Data: If there are three types of commodities (A, B & C). The amount consumed are 120, 150, 200 respectively. If you know that prices of these commodities for 2011 are $10, 13, 15 compared to $8, 10, 14 in 2010.\n\nQuestion: The price index for the year 2011 would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 116.53" },
                    { "id": "b", "text": "b- 116.76" },
                    { "id": "c", "text": "c- 116.92" },
                    { "id": "d", "text": "d- 117" },
                    { "id": "e", "text": "e- 117.02" }
                ],
                "correct": "c",
                "basmaga": "مسألة السلع (120، 150، 200) لعامي 2010 و 2011، ناتج مؤشر الأسعار بيطلع 116.92.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>الحساب:<br>• تكلفة 2010 = (120*8) + (150*10) + (200*14) = 960 + 1500 + 2800 = 5260<br>• تكلفة 2011 = (120*10) + (150*13) + (200*15) = 1200 + 1950 + 3000 = 6150<br>• المؤشر لعام 2011 = (6150 / 5260) * 100 = 116.9201"
            },
            {
                "id": 8,
                "text": "Case Data: If there are three types of commodities (A, B & C). The amount consumed are 120, 150, 200 respectively. If you know that prices of these commodities for 2011 are $10, 13, 15 compared to $8, 10, 14 in 2010.\n\nQuestion: The current purchasing power would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 83.08" },
                    { "id": "b", "text": "b- 84.08" },
                    { "id": "c", "text": "c- 85.53" },
                    { "id": "d", "text": "d- 85.9" },
                    { "id": "e", "text": "e- 86.92" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة السلع السابقة، القوة الشرائية مقلوب المؤشر (100 / 116.92) بتطلع 85.53 علطول.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>الحساب: مقلوب المؤشر يمنح القوة الشرائية الحالية للدولار &rarr; (100 / 116.9201) * 100 = 85.528 أي تقريباً 85.53."
            },
            {
                "id": 9,
                "text": "When applying COP accounting, all adjustments are made:\n\n",
                "options": [
                    { "id": "a", "text": "a- at beginning of the period" },
                    { "id": "b", "text": "b- at end of the period" },
                    { "id": "c", "text": "c- during the period" },
                    { "id": "d", "text": "d- no adjustments are made at all." },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "عند تطبيق تعديلات القوة الشرائية والتضخم الـ CPP، كل التعديلات بتتعمل في نهاية الفترة الماليّة (at end of the period).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>في نظام محاسبة القوة الشرائية الحالية (CPPA)، يتم إعداد الحسابات أولاً بالتكلفة التاريخية ثم يتم إجراء كافة تسويات وعوامل التعديل دفعة واحدة في نهاية الفترة المالية (at the end of the period)."
            },
            {
                "id": 10,
                "text": "Monetary assets are those assets that their monetary value........... while their purchasing power (is) ...........\n\n",
                "options": [
                    { "id": "a", "text": "a- increases, decrease" },
                    { "id": "b", "text": "b- decrease, increase" },
                    { "id": "c", "text": "c- increase, fixed" },
                    { "id": "d", "text": "d- fixed, decrease" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "d",
                "basmaga": "الأصول النقدية كالكاش وقت التضخم: قيمتها بالورق ثابتة محنطة (fixed)، بس قوتها الشرائية بتموت وتقل (decrease).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>الأصول النقدية (Monetary Assets) كالنقدية بالخزينة تظل قيمتها الرقمية الاسمية ثابتة (fixed)، ولكن قوتها الشرائية الحقيقية وقدرتها على جلب السلع تنخفض وتقل (decrease) مع التضخم."
            },
            {
                "id": 11,
                "text": "Non-monetary assets are those assets that their monetary value........... while their purchasing power (is) ...........\n\n",
                "options": [
                    { "id": "a", "text": "a- increases, decrease" },
                    { "id": "b", "text": "b- decrease, increase" },
                    { "id": "c", "text": "c- increase, fixed" },
                    { "id": "d", "text": "d- fixed, decrease" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "الأصول غير النقدية كالأراضي وقت التضخم: قيمتها بالفلوس بتزيد وتتغير (increase)، بس قوتها الشرائية بتفضل محتمية وثابتة (fixed/constant).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>الأصول غير النقدية (Non-Monetary Assets) كالعقارات والمخزون ترتفع قيمتها الاسمية بالفلوس (increase) لمواكبة التضخم، وبالمقابل تظل القوة الشرائية الحقيقية الكامنة داخل الأصل ثابتة ومستقرة (fixed)."
            },
            {
                "id": 12,
                "text": "At times of increasing prices, holders of monetary assets will have:\n\n",
                "options": [
                    { "id": "a", "text": "a) gain" },
                    { "id": "b", "text": "b) loss" },
                    { "id": "c", "text": "c) no effect on income" },
                    { "id": "d", "text": "d) another answer" }
                ],
                "correct": "b",
                "basmaga": "لو شايل كاش وأصول نقدية كتير وقت الغلاء والتضخم فإنت خسران طبعاً (loss) لأن فلوسك مركونة وقيمتها بتقل.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>وقت التضخم، الاحتفاظ بأصول نقدية (Monetary Assets) يتسبب في خسارة القوة الشرائية (loss) لأن هذه الأموال تفقد قدرتها على شراء نفس كمية السلع والخدمات بمرور الوقت."
            },
            {
                "id": 13,
                "text": "At times of inflation, if monetary assets are less than monetary liabilities, then there would be net:\n\n",
                "options": [
                    { "id": "a", "text": "a) gain" },
                    { "id": "b", "text": "b) loss" },
                    { "id": "c", "text": "c) no effect on income" },
                    { "id": "d", "text": "d) another answer" }
                ],
                "correct": "a",
                "basmaga": "لو أصولك النقدية أقل من ديونك النقدية وقت التضخم فإنت كسبان (gain)، لأنك هتسدد ديونك بفلوس رخيصة فقدت قيمتها.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>عندما تكون الالتزامات والديون النقدية أكبر من الأصول النقدية، يحقق المشروع مكسباً صافياً للقوة الشرائية (net gain) لأن المنشأة ستلتزم بسداد مبالغ ثابتة اسمياً ولكن قيمتها الشرائية الحقيقية انخفضت."
            },
            {
                "id": 14,
                "text": "Which of the following statements is not true in times of inflation?\n\n",
                "options": [
                    { "id": "a", "text": "A. Holders of monetary liabilities will gain" },
                    { "id": "b", "text": "B. Holders of monetary assets will lose" },
                    { "id": "c", "text": "C. If the amount of monetary assets is the same as monetary liabilities then no gains or losses would occur" },
                    { "id": "d", "text": "D. If the amount of monetary assets held is less than the amount of monetary liabilities held, then a net loss would occur" }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن الجملة الغلط وقت التضخم، اختار الجملة D اللي بتقول لو الأصول النقدية أقل من الديون يحصل خسارة، لأن الصح إن ده بيعمل مكسب Gain.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: D</strong><br><br>العبارة D غير صحيحة (not true) لأن وجود أصول نقدية أقل من الالتزامات النقدية وقت التضخم يترتب عليه مكسب صافي للقوة الشرائية وليس خسارة (net loss)."
            },
            {
                "id": 15,
                "text": "In applying CPPA model, which of the following is correct in preparing the price-level adjusted financial statements?\n\n",
                "options": [
                    { "id": "a", "text": "A. Purchasing power losses only arise as a result of holding net monetary assets" },
                    { "id": "b", "text": "B. Non-monetary assets are restated in the Balance Sheet at their adjusted current purchasing power" },
                    { "id": "c", "text": "C. Monetary assets are not adjusted because they are already stated in current purchasing power dollars" },
                    { "id": "d", "text": "D. All of the given options are correct." }
                ],
                "correct": "d",
                "basmaga": "سؤال القواعد المجمعة للـ CPPA، الثلاث جمل صحيحة ومنطقية فاختار All of the given options are correct علطول.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: D</strong><br><br>كل الخيارات المذكورة صحيحة؛ حيث إن أرباح وخسائر القوة الشرائية تنتج فقط من البنود النقدية، ويتم تعديل البنود غير النقدية بالمؤشر، بينما تظل البنود النقدية دون تعديل لأنها مقومة بالفعل بدولارات حالية."
            },
            {
                "id": 16,
                "text": "Case Data: You are given the following balance sheet (inflation rate = 5%):\n- Current Assets: Cash 10,000 | A/R 15,000 | Inventory 20,000 $\rightarrow$ Total = 45,000\n- Non-Current Assets: Land 20,000 | Machinery 30,000\n- Total Assets: 95,000\n- Liabilities: A/P 25,000 | Bank Loan 20,000\n- Owners' Equity: 50,000\n- Total Liabilities & O/E: 95,000\n\nQuestion: The adjusted current assets would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 45,000" },
                    { "id": "b", "text": "b- 47,250" },
                    { "id": "c", "text": "c- 46,000" },
                    { "id": "d", "text": "d- 42,750" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "مسألة ميزانية الـ 5% تضخم: الأصول المتداولة المعدلة تطلع 46,000 لأننا بنعدل المخزون غير النقدي بس وبنسيب الكاش والعملاء.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب:<br>• الكاش والعملاء (بنود نقدية لا تعدل) = 10,000 + 15,000 = 25,000<br>• المخزون (بند غير نقدي يعدل) = 20,000 * 1.05 = 21,000<br>• إجمالي الأصول المتداولة المعدلة = 25,000 + 21,000 = 46,000."
            },
            {
                "id": 17,
                "text": "Case Data: You are given the following balance sheet (inflation rate = 5%):\n- Current Assets: Cash 10,000 | A/R 15,000 | Inventory 20,000 $\rightarrow$ Total = 45,000\n- Non-Current Assets: Land 20,000 | Machinery 30,000\n- Total Assets: 95,000\n- Liabilities: A/P 25,000 | Bank Loan 20,000\n- Owners' Equity: 50,000\n- Total Liabilities & O/E: 95,000\n\nQuestion: The adjusted total assets would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 95,000" },
                    { "id": "b", "text": "b- 99,750" },
                    { "id": "c", "text": "c- 98,500" },
                    { "id": "d", "text": "d- 100,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة ميزانية الـ 5%: إجمالي الأصول المعدلة بيطلع 98,500 بعد ما تضرب كل البنود غير النقدية في 1.05 وتجمع عليها البنود النقدية.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب:<br>• الأصول المتداولة المعدلة = 46,000<br>• الأرض المعدلة = 20,000 * 1.05 = 21,000<br>• الآلات المعدلة = 30,000 * 1.05 = 31,500<br>• إجمالي الأصول المعدلة = 46,000 + 21,000 + 31,500 = 98,500."
            },
            {
                "id": 18,
                "text": "Case Data: You are given the following balance sheet (inflation rate = 5%):\n- Current Assets: Cash 10,000 | A/R 15,000 | Inventory 20,000 $\rightarrow$ Total = 45,000\n- Non-Current Assets: Land 20,000 | Machinery 30,000\n- Total Assets: 95,000\n- Liabilities: A/P 25,000 | Bank Loan 20,000\n- Owners' Equity: 50,000\n- Total Liabilities & O/E: 95,000\n\nQuestion: The adjusted owner's equity would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 50,000" },
                    { "id": "b", "text": "b- 52,500" },
                    { "id": "c", "text": "c- 53,500" },
                    { "id": "d", "text": "d- 54,500" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة ميزانية الـ 5%: حقوق الملكية المعدلة كمتمم حسابي للميزانية بتطلع 53,500.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب: حقوق الملكية تظهر كالمتمم المتبقي لحساب الميزانية بعد التعديل &rarr; إجمالي الأصول المعدلة (98,500) - إجمالي الالتزامات النقدية التي لا تعدل (25,000 + 20,000 = 45,000) = 53,500."
            },
            {
                "id": 19,
                "text": "Case Data: You are given the following balance sheet (inflation rate = 5%):\n- Current Assets: Cash 10,000 | A/R 15,000 | Inventory 20,000 $\rightarrow$ Total = 45,000\n- Non-Current Assets: Land 20,000 | Machinery 30,000\n- Total Assets: 95,000\n- Liabilities: A/P 25,000 | Bank Loan 20,000\n- Owners' Equity: 50,000\n- Total Liabilities & O/E: 95,000\n\nQuestion: There would be a purchasing power:\n\n",
                "options": [
                    { "id": "a", "text": "a- $3,500 gain" },
                    { "id": "b", "text": "b- $3,500 loss" },
                    { "id": "c", "text": "c- $1,000 gain" },
                    { "id": "d", "text": "d- $1,000 loss" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة ميزانية الـ 5%: لحساب المكسب أو الخسارة السريعة؛ الديون النقدية (45 ألف) أكبر من الكاش والعملاء (25 ألف)، يبقى إحنا كسبانين ومطابقين لـ $1,000 gain.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب السريع:<br>• إجمالي الأصول النقدية = 10,000 + 15,000 = 25,000<br>• إجمالي الالتزامات النقدية = 25,000 + 20,000 = 45,000<br>• صافي البنود النقدية = 25,000 - 45,000 = -20,000 (التزامات أكبر يعني مكسب)<br>• مكسب القوة الشرائية = 20,000 * 5% = 1,000 gain."
            },
            {
                "id": 20,
                "text": "In physical capital maintenance approach, valuations are based on:\n\n",
                "options": [
                    { "id": "1", "text": "1- Historical cost" },
                    { "id": "2", "text": "2- Fair value" },
                    { "id": "3", "text": "3- Replacement cost" },
                    { "id": "4", "text": "4- Net realizable value" },
                    { "id": "5", "text": "5- None of the above" }
                ],
                "correct": "3",
                "basmaga": "مدخل صيانة رأس المال المادي التشغيلي، التقييمات فيه قايمة على أساس تكلفة الإحلال Replacement cost صراحة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: 3 (أي التكلفة الجارية المقاسة بتكلفة الإحلال)</strong><br><br>في مدخل الحفاظ على رأس المال المادي (Physical capital maintenance)، يتم تقييم الأصول وعناصر الميزانية بناءً على تكلفة الإحلال (Replacement cost) لضمان صيانة الطاقة الإنتاجية."
            },
            {
                "id": 21,
                "text": "Holding gains and losses are treated as income under............, while they are excluded from income under............\n\n",
                "options": [
                    { "id": "1", "text": "1- current cost accounting, historical cost accounting" },
                    { "id": "2", "text": "2- continuously contemporary accounting, historical cost accounting" },
                    { "id": "3", "text": "3- historical cost accounting, current cost accounting" },
                    { "id": "4", "text": "4- historical cost accounting, continuously contemporary accounting" },
                    { "id": "5", "text": "5- continuously contemporary accounting, current cost accounting" }
                ],
                "correct": "3",
                "basmaga": "أرباح الحيازة بتعتبر دخل جوه الـ Historical cost، ومستبعدة من الدخل جوه الـ Current cost.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: 3</strong><br><br>أرباح الحيازة (Holding gains) تعامل كدخل وأرباح عادية قابلة للتوزيع تحت نظام التكلفة التاريخية (HC)، بينما يتم استبعادها تماماً من أرباح التشغيل ولا توزع تحت نظام التكلفة الجارية (CCA) للحفاظ على طاقة الشركة."
            },
            {
                "id": 22,
                "text": "Case Data: An entity acquired 250 items of inventory at a cost of $10.00 each and sold 150 of the items for $16 each when the replacement cost to the entity was $14 each. Assume that the replacement cost of the remaining items of inventory at year end was $15.\n\nQuestion: Profits under historical cost accounting would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 300" },
                    { "id": "b", "text": "b- 500" },
                    { "id": "c", "text": "c- 600" },
                    { "id": "d", "text": "d- 900" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "d",
                "basmaga": "مسألة الـ 250 حتة مخزون: طالب أرباح التكلفة التاريخية العادية، اضرب الـ 150 حتة مباعة في فرق السعر الأصلي (16 - 10) تطلع 900.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>الحساب تحت التكلفة التاريخية التقليدية: الوحدات المباعة (150) * (سعر البيع 16 - التكلفة الأصلية 10) = 150 * 6 = 900."
            },
            {
                "id": 23,
                "text": "Case Data: An entity acquired 250 items of inventory at a cost of $10.00 each and sold 150 of the items for $16 each when the replacement cost to the entity was $14 each. Assume that the replacement cost of the remaining items of inventory at year end was $15.\n\nQuestion: Operating profits available for dividends under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 300" },
                    { "id": "b- 500" },
                    { "id": "c", "text": "c- 600" },
                    { "id": "d", "text": "d- 900" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "a",
                "basmaga": "تابع لمسألة الـ 250 حتة: طالب أرباح التشغيل الجارية للـ CCA، اضرب الـ 150 حتة في فرق سعر البيع والإحلال (16 - 14) تطلع 300 وهي المتاحة للتوزيع.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>ربح التشغيل الجاري تحت الـ CCA: الوحدات المباعة (150) * (سعر البيع 16 - سعر الإحلال وقت البيع 14) = 150 * 2 = 300."
            },
            {
                "id": 24,
                "text": "Case Data: An entity acquired 250 items of inventory at a cost of $10.00 each and sold 150 of the items for $16 each when the replacement cost to the entity was $14 each. Assume that the replacement cost of the remaining items of inventory at year end was $15.\n\nQuestion: Realized holding gains under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 300" },
                    { "id": "b", "text": "b- 500" },
                    { "id": "c", "text": "c- 600" },
                    { "id": "d", "text": "d- 900" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة الـ 250 حتة: طالب مكسب الحيازة المحقق، اضرب الـ 150 حتة مباعة في زيادة السعر من التكلفة للأحلال (14 - 10) تطلع 600.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>مكسب الحيازة المحقق (Realized Holding Gain) للوحدات المباعة: 150 حتة * (سعر الإحلال وقت البيع 14 - التكلفة الأصلية 10) = 150 * 4 = 600."
            },
            {
                "id": 25,
                "text": "Case Data: An entity acquired 250 items of inventory at a cost of $10.00 each and sold 150 of the items for $16 each when the replacement cost to the entity was $14 each. Assume that the replacement cost of the remaining items of inventory at year end was $15.\n\nQuestion: The unrealized holding gains under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 300" },
                    { "id": "b", "text": "b- 500" },
                    { "id": "c", "text": "c- 600" },
                    { "id": "d", "text": "d- 900" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "تابع لمسألة الـ 250 حتة: طالب مكسب الحيازة غير المحقق لباقي البضاعة بالخزن (100 حتة)، اضرب الـ 100 في (15 - 10) تطلع 500.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>مكسب الحيازة غير المحقق (Unrealized Holding Gain) للبضاعة المتبقية: الوحدات المتبقية (250 - 150 = 100 حتة) * (سعر إحلال آخر السنة 15 - التكلفة الأصلية 10) = 100 * 5 = 500."
            },
            {
                "id": 26,
                "text": "Case Data: An entity acquired 2,000 items of inventory at a cost of $100,000. The entity sold 1,200 of the items for $80 each when the replacement cost to the entity was $60 each. Assume that the replacement cost of the inventory at year end was $70.\n\nQuestion: Profits under historical cost accounting would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 12,000" },
                    { "id": "b", "text": "b- 16,000" },
                    { "id": "c", "text": "c- 24,000" },
                    { "id": "d", "text": "d- 36,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "d",
                "basmaga": "مسألة الـ 2000 حتة مخزون (يعني تكلفة الحتة الأصلية 50$): طالب أرباح التكلفة التاريخية، اضرب الـ 1200 حتة مباعة في (80 - 50) تطلع 36,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>تكلفة الوحدة الأصلية = 100,000 / 2,000 = 50 دولار.<br>الربح التاريخي = 1,200 حتة مباعة * (سعر البيع 80 - التكلفة الأصلية 50) = 1,200 * 30 = 36,000."
            },
            {
                "id": 27,
                "text": "Case Data: An entity acquired 2,000 items of inventory at a cost of $100,000. The entity sold 1,200 of the items for $80 each when the replacement cost to the entity was $60 each. Assume that the replacement cost of the inventory at year end was $70.\n\nQuestion: Operating profits available for dividends under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 12,000" },
                    { "id": "b", "text": "b- 16,000" },
                    { "id": "c", "text": "c- 24,000" },
                    { "id": "d", "text": "d- 36,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة الـ 2000 حتة: طالب أرباح التشغيل الجارية للـ CCA، اضرب الـ 1200 حتة في (80 - 60) تطلع 24,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>ربح التشغيل الجاري تحت الـ CCA = 1,200 حتة مباعة * (سعر البيع 80 - سعر الإحلال وقت البيع 60) = 1,200 * 20 = 24,000."
            },
            {
                "id": 28,
                "text": "Case Data: An entity acquired 2,000 items of inventory at a cost of $100,000. The entity sold 1,200 of the items for $80 each when the replacement cost to the entity was $60 each. Assume that the replacement cost of the inventory at year end was $70.\n\nQuestion: Realized holding gains under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 12,000" },
                    { "id": "b", "text": "b- 16,000" },
                    { "id": "c", "text": "c- 24,000" },
                    { "id": "d", "text": "d- 36,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "a",
                "basmaga": "تابع لمسألة الـ 2000 حتة: طالب مكسب الحيازة المحقق، اضرب الـ 1200 حتة مباعة في (60 - 50) تطلع 12,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>مكسب الحيازة المحقق للوحدات المباعة = 1,200 حتة * (سعر الإحلال وقت البيع 60 - التكلفة الأصلية 50) = 1,200 * 10 = 12,000."
            },
            {
                "id": 29,
                "text": "Case Data: An entity acquired 2,000 items of inventory at a cost of $100,000. The entity sold 1,200 of the items for $80 each when the replacement cost to the entity was $60 each. Assume that the replacement cost of the inventory at year end was $70.\n\nQuestion: The unrealized holding gains under CCA would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 12,000" },
                    { "id": "b", "text": "b- 16,000" },
                    { "id": "c", "text": "c- 24,000" },
                    { "id": "d", "text": "d- 36,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "تابع لمسألة الـ 2000 حتة: طالب مكسب الحيازة غير المحقق لباقي البضاعة بالخزن (800 حتة)، اضرب الـ 800 في (70 - 50) تطلع 16,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>مكسب الحيازة غير المحقق للبضاعة المتبقية بالخازن = (2,000 - 1,200 = 800 حتة) * (سعر إحلال آخر السنة 70 - التكلفة الأصلية 50) = 800 * 20 = 16,000."
            },
            {
                "id": 30,
                "text": "Case Data: Phillipe Inc. commenced its operations by acquiring 600 items of inventory at a cost of $45 each and sold 400 of the items for $65 when the replacement cost was $54 each. At year end, replacement cost was $58.\n\nQuestion: Under Edward and Bell approach, profits that would be available to dividends distribution would equal to..........\n\n",
                "options": [
                    { "id": "a", "text": "a- $400 \\times (65 - 45)$" },
                    { "id": "b", "text": "b- $400 \\times (65 - 54)$" },
                    { "id": "c", "text": "c- $400 \\times (54 - 45)$" },
                    { "id": "d", "text": "d- $200 \\times (58 - 45)$" },
                    { "id": "e", "text": "e- $200 \\times (54 - 45)$" }
                ],
                "correct": "b",
                "basmaga": "مسألة شركة فيليب والمخزون المضروب كأقواس؛ ربح الـ CCA المتاح للتوزيع هو ضرب الـ 400 حتة مباعة في (65 - 54).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>تحت مدخل إدوارد وبيل للتكلفة الجارية، الأرباح المتاحة للتوزيع كحوافز هي أرباح التشغيل فقط، وتحسب بضرب الكمية المباعة (400) في فرق (سعر البيع 65 - سعر الإحلال وقت البيع 54)."
            },
            {
                "id": 31,
                "text": "Case Data: Phillipe Inc. commenced its operations by acquiring 600 items of inventory at a cost of $45 each and sold 400 of the items for $65 when the replacement cost was $54 each. At year end, replacement cost was $58.\n\nQuestion: Under historical cost accounting model, profits that would be available to dividends distribution would equal to..........\n\n",
                "options": [
                    { "id": "a", "text": "a- $400 \\times (65 - 45)$" },
                    { "id": "b", "text": "b- $400 \\times (65 - 54)$" },
                    { "id": "c", "text": "c- $400 \\times (54 - 45)$" },
                    { "id": "d", "text": "d- $200 \\times (58 - 45)$" },
                    { "id": "e", "text": "e- $200 \\times (54 - 45)$" }
                ],
                "correct": "a",
                "basmaga": "تابع لمسألة شركة فيليب: طالب أرباح التكلفة التاريخية العادية كقوس، اختار علطول القوس الأصلي للبيع والتكلفة التاريخية 400 في (65 - 45).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>تحت نموذج التكلفة التاريخية العادي، الربح هو الإيراد ناقص التكلفة التاريخية الأصلية للوحدات المباعة فعلياً وهو: 400 حتة * (سعر البيع 65 - التكلفة الأصلية 45)."
            },
            {
                "id": 32,
                "text": "Case Data: Phillipe Inc. commenced its operations by acquiring 600 items of inventory at a cost of $45 each and sold 400 of the items for $65 when the replacement cost was $54 each. At year end, replacement cost was $58.\n\nQuestion: The realized holding gain would be equal to:\n\n",
                "options": [
                    { "id": "a", "text": "a- $400 \\times (65 - 45)$" },
                    { "id": "b", "text": "b- $400 \\times (65 - 54)$" },
                    { "id": "c", "text": "c- $400 \\times (54 - 45)$" },
                    { "id": "d", "text": "d- $200 \\times (58 - 45)$" },
                    { "id": "e", "text": "e- $200 \\times (54 - 45)$" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة شركة فيليب: طالب مكسب الحيازة المحقق كقوس، اختار القوس اللي بيمثل زيادة السعر للـ 400 حتة مباعة من التكلفة للأحلال وهو 400 في (54 - 45).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>مكسب الحيازة المحقق (Realized Holding Gain) للكمية المباعة (400) يمثل مقدار صعود سعرها في السوق حتى تاريخ بيعها: 400 حتة * (سعر الإحلال 54 - التكلفة الأصلية 45)."
            },
            {
                "id": 33,
                "text": "Case Data: Phillipe Inc. commenced its operations by acquiring 600 items of inventory at a cost of $45 each and sold 400 of the items for $65 when the replacement cost was $54 each. At year end, replacement cost was $58.\n\nQuestion: The unrealized holding gain would be equal to:\n\n",
                "options": [
                    { "id": "a", "text": "a- $400 \\times (65 - 45)$" },
                    { "id": "b", "text": "b- $400 \\times (65 - 54)$" },
                    { "id": "c", "text": "c- $400 \\times (54 - 45)$" },
                    { "id": "d", "text": "d- $200 \\times (58 - 45)$" },
                    { "id": "e", "text": "e- $200 \\times (54 - 45)$" }
                ],
                "correct": "d",
                "basmaga": "تابع لمسألة شركة فيليب: طالب مكسب الحيازة غير المحقق، وهي الحيدة المضروبة في الـ 200 حتة الباقيين بالمخزن والقوس فيه (58 - 45).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>مكسب الحيازة غير المحقق يحسب للباقي في المخازن وهو (600 إجمالي - 400 مباع = 200 حتة)، مضروباً في فرق صعود السعر بآخر السنة: 200 * (سعر إحلال آخر السنة 58 - التكلفة الأصلية 45)."
            },
            {
                "id": 34,
                "text": "Case Data: A machine was acquired for $500,000 at beginning of the year with a 10-year useful life. At the end of the year, its replacement cost was $700,000.\n\nQuestion: Under current cost accounting, a further $........... would be deducted to determine current cost operating profit.\n\n",
                "options": [
                    { "id": "a", "text": "a- 10,000" },
                    { "id": "b", "text": "b- 20,000" },
                    { "id": "c", "text": "c- 50,000" },
                    { "id": "d", "text": "d- 70,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "مسألة إهلاك المكنة الـ 500 ألف وبقت 700 ألف، قسط الإهلاك التاريخي 50 ألف والجديد 70 ألف، يبقى الخصم الإضافي هو الفرق بين الاتنين بيساوي 20,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>طريقة الحساب:<br>• الإهلاك التاريخي = 500,000 / 10 = 50,000<br>• الإهلاك الجاري بالـ CCA = 700,000 / 10 = 70,000<br>• العبء الإضافي الإجبارى المخصوم (Further deduction) = 70,000 - 50,000 = 20,000."
            },
            {
                "id": 35,
                "text": "Case Data: A machine was acquired for $500,000 at beginning of the year with a 10-year useful life. At the end of the year, its replacement cost was $700,000.\n\nQuestion: The realized cost saving would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 10,000" },
                    { "id": "b", "text": "b- 20,000" },
                    { "id": "c", "text": "c- 50,000" },
                    { "id": "d", "text": "d- 70,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "تابع لمسألة المكنة الـ 500 ألف؛ مصطلح الوفر المحقق في التكلفة (realized cost saving) هو هو نفس قيمة العبء الإضافي للإهلاك وبيساوي 20,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>الوفر المحقق في التكلفة (Realized cost saving) تحت نظام التكلفة الجارية يطابق تماماً فرق الإهلاك السنوي الإضافي الناتج عن استخدام التكلفة الجارية بدلاً من التاريخية وقيمته 20,000."
            },
            {
                "id": 36,
                "text": "Case Data: A machine was acquired for $500,000 at beginning of the year with a 10-year useful life. At the end of the year, its replacement cost was $700,000.\n\nQuestion: The unrealized cost saving would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 190,000" },
                    { "id": "b", "text": "b- 180,000" },
                    { "id": "c", "text": "c- 150,000" },
                    { "id": "d", "text": "d- 130,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "تابع لمسألة المكنة الـ 500 ألف؛ الوفر غير المحقق (unrealized cost saving) بيساوي صافي الزيادة في أصل المكنة بآخر السنة وبيطلع 180,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>طريقة الحساب: الوفر غير المحقق في التكلفة يمثل التغير في صافي القيمة الدفترية للأصل &rarr; صافي القيمة بالـ CCA السنادي (700 ألف - 70 ألف إهلاك = 630 ألف) ناقص صافي القيمة بالتكلفة التاريخية (500 ألف - 50 ألف إهلاك = 450 ألف) &rarr; 630,000 - 450,000 = 180,000."
            },
            {
                "id": 37,
                "text": "A machine was acquired at the beginning of the year for $200,000 and had a projected life of 10 years with no salvage value. At the end of the year its replacement cost had increased to $250,000, then under current cost accounting, a further amount of ........... would be deducted to determine current cost operating profits (assume the company used SLM):\n\n",
                "options": [
                    { "id": "a", "text": "a- 20,000" },
                    { "id": "b", "text": "b- 250,000" },
                    { "id": "c", "text": "c- 50,000" },
                    { "id": "d", "text": "d- 25,000" },
                    { "id": "e", "text": "e- 5,000" }
                ],
                "correct": "e",
                "basmaga": "مكنة بـ 200 ألف وبقت بـ 250 ألف، الإهلاك القديم 20 ألف والجديد 25 ألف، يبقى المبلغ الإضافي المخصوم هو الفرق وبيساوي 5,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: e</strong><br><br>طريقة الحساب:<br>• الإهلاك التاريخي السنوي = 200,000 / 10 = 20,000<br>• الإهلاك الجاري لآخر السنة = 250,000 / 10 = 25,000<br>• المبلغ الإضافي المخصوم لارتباط الأداء = 25,000 - 20,000 = 5,000."
            },
            {
                "id": 38,
                "text": "Case Data: A company's balance sheet includes the following:\n- Current assets: cash $100,000, A/R $20,000, Inventory $35,000.\n- Non-current assets: plant and equipment $90,000 with 10-year useful life, land $75,000.\n- If you know that the replacement cost of inventory is 40,000 while the replacement cost of plant and equipment is 120,000.\n\nQuestion: Under CCA, the adjusted balance of current assets would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 155,000" },
                    { "id": "b", "text": "b- 160,000" },
                    { "id": "c", "text": "c- 210,000" },
                    { "id": "d", "text": "d- 225,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "مسألة تجميعة الميزانية للـ CCA: الأصول المتداولة المعدلة بتساوي الكاش والعملاء زائد رقم إحلال المخزون الجديد (40 ألف) وبتطلع 160,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>طريقة الحساب: الأصول النقدية كالكاش والعملاء تنزل ثابتة دون تغيير، ويعدل المخزون فقط لثمن إحلاله الحالي &rarr; كاش (100,000) + عملاء (20,000) + مخزون معدل (40,000) = 160,000."
            },
            {
                "id": 39,
                "text": "Case Data: A company's balance sheet includes the following:\n- Current assets: cash $100,000, A/R $20,000, Inventory $35,000.\n- Non-current assets: plant and equipment $90,000 with 10-year useful life, land $75,000.\n- If you know that the replacement cost of inventory is 40,000 while the replacement cost of plant and equipment is 120,000.\n\nQuestion: Under CCA, the adjusted balance of non-current assets would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- 195,000" },
                    { "id": "b", "text": "b- 180,000" },
                    { "id": "c", "text": "c- 182,000" },
                    { "id": "d", "text": "d- 185,000" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "e",
                "basmaga": "تابع لمسألة الميزانية للـ CCA: الأصول غير المتداولة المعدلة الصافية بتطلع 183,000، وبما إن الرقم ده مش في الاختيارات نختار طبعاً none of the above.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: e (لأن الناتج الفعلي هو 183,000)</strong><br><br>طريقة الحساب:<br>• صافي الآلات والمعدات المعدل بالـ CCA = سعر الإحلال (120,000) ناقص مجمع إهلاك السنة الأولى (10% * 120,000 = 12,000) = 108,000.<br>• أرض معدلة = 75,000<br>• إجمالي الأصول غير المتداولة المعدلة = 108,000 + 75,000 = 183,000 (لذلك نختار e)."
            },
            {
                "id": 40,
                "text": "At times when inflation is widespread, measuring assets on the basis of ........... was inappropriate and tend to provide misleading information according to normative research.\n\n",
                "options": [
                    { "id": "a", "text": "a- replacement cost" },
                    { "id": "b", "text": "b- historical cost" },
                    { "id": "c", "text": "c- present value" },
                    { "id": "d", "text": "d- net realizable value" }
                ],
                "correct": "b",
                "basmaga": "وقت التضخم العنيف المنتشر، القياس على أساس التكلفة التاريخية historical cost بيدي معلومات مضللة جداً وغير مناسبة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>تنص الأبحاث المعيارية على أن القياس المحاسبي التقليدي على أساس التكلفة التاريخية (historical cost) يفقد ملائمته تماماً وقت التضخم المالي، وتصبح الأرقام الناتجة عنه مضللة لمتخذي القرارات الاستثمارية."
            },
            {
                "id": 41,
                "text": "Theories are not ........... in nature and must be based on logical reasoning.\n\n",
                "options": [
                    { "id": "a", "text": "a- ad hoc" },
                    { "id": "b", "text": "b- coherent" },
                    { "id": "c", "text": "c- pragmatic" },
                    { "id": "d", "text": "d- systematic" }
                ],
                "correct": "a",
                "basmaga": "حفظ مصطلحات الشابتر الأول؛ النظريات ليست مؤقتة أو عشوائية الغرض بطبيعتها (theories are not ad hoc).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>النظريات العلمية والمحاسبية ليست عشوائية أو مرتجلة لغرض مؤقت زائل (not ad hoc)، بل هي بناء فكري شامل مستند بالكامل للقواعد والمنطق المنظم المستمر."
            },
            {
                "id": 42,
                "text": "Which of the following best describes the accounting measurement model in use today?\n\n",
                "options": [
                    { "id": "a", "text": "a- Current cost accounting" },
                    { "id": "b", "text": "b- historical cost accounting" },
                    { "id": "c", "text": "c- Purchasing power accounting" },
                    { "id": "d", "text": "d- A mixed method accounting model" },
                    { "id": "e", "text": "e- Historical cost accounting, except where accounting standards allow deviation from it." }
                ],
                "correct": "e",
                "basmaga": "سؤال مكرر بصيغة الامتحان؛ النظام الحالي هو التكلفة التاريخية كأصل عام مع وجود بعض الاستثناءات بتسمح بيها المعايير كالقيمة العادلة (Historical cost, except where standards allow deviation).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: e</strong><br><br>النموذج المحاسبي السائد عالمياً اليوم هو نموذج التكلفة التاريخية، ولكن مع وجود سماح وصلاحيات واسعة تمنحها المعايير الدولية المعاصرة للانحراف عنها وتطبيق نماذج القيم الحالية والأشكال المختلطة."
            },
            {
                "id": 43,
                "text": "Assuming a consumer price index calculated 105.60 in 2018, compared to 100 in 2017 for a bundle of goods, what is the current purchasing power of every dollar, compared to 2017?\n\n",
                "options": [
                    { "id": "a", "text": "a- 94.69 cents" },
                    { "id": "b", "text": "b- 94.40 cents" },
                    { "id": "c", "text": "c- 96.40 cents" },
                    { "id": "d", "text": "d- 96.60 cents" },
                    { "id": "e", "text": "e- 1.056 cents" }
                ],
                "correct": "a",
                "basmaga": "لما يديك المؤشر لـ 2018 برقم 105.60، احسب المقلوب فوراً (100 / 105.60) تطلع النتيجة 94.69 cents.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>تحديد القوة الشرائية للدولار بمقلوب التضخم المعلن &rarr; (100 / 105.60) = 0.946969 دولار، وهو ما يوازي عند تقريبه حسابياً قيمة 94.69 سنتاً."
            },
            {
                "id": 44,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintain physical capital intact?\n\n",
                "options": [
                    { "id": "a", "text": "a- continuously contemporary accounting" },
                    { "id": "b", "text": "b- historical cost accounting" },
                    { "id": "c", "text": "c- general price-level adjustment accounting" },
                    { "id": "d", "text": "d- current cost accounting" },
                    { "id": "e", "text": "e- fair value accounting" }
                ],
                "correct": "d",
                "basmaga": "تلمح عبارة الحفاظ على رأس المال المادي التشغيلي (maintain physical capital intact) اختار محاسبة التكلفة الجارية current cost accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>الحفاظ على رأس المال المادي أو الطاقة التشغيلية للمنشأة (Physical capital maintenance) هو المنظور والركيزة الهيكلية الأساسية التي بني عليها نموذج التكلفة الجارية (CCA)."
            },
            {
                "id": 45,
                "text": "Case Data: The following information is computed from western union Inc. balance sheet: Cash $30,000, inventory $15,000, Land $80,000, Loans $25,000, owner's equity $100,000. Assume that general price level has increased by 5% since the beginning of the year.\n\nQuestion: Current assets of western union after adjustment by the change in general price level would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- $45,000" },
                    { "id": "b", "text": "b- $47,250" },
                    { "id": "c", "text": "c- $45,750" },
                    { "id": "d", "text": "d- $31,500" },
                    { "id": "e", "text": "e- $46,500" }
                ],
                "correct": "c",
                "basmaga": "مسألة شركة ويسترن يونيون بـ 5% تضخم: الأصول المتداولة بعد التعديل بتطلع 45,750 لأننا بنعدل المخزون بس وبنسيب الكاش ثابت.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب لـ Current Assets المعدلة:<br>• الكاش (بند نقدي لا يعدل) = 30,000<br>• المخزون (بند غير نقدي يعدل) = 15,000 * 1.05 = 15,750<br>• إجمالي الأصول المتداولة بعد التعديل = 30,000 + 15,750 = 45,750."
            },
            {
                "id": 46,
                "text": "Case Data: The following information is computed from western union Inc. balance sheet: Cash $30,000, inventory $15,000, Land $80,000, Loans $25,000, owner's equity $100,000. Assume that general price level has increased by 5% since the beginning of the year.\n\nQuestion: Total assets of western union after adjustments by the change in the general price level would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- $125,000" },
                    { "id": "b", "text": "b- $131,250" },
                    { "id": "c", "text": "c- $129,750" },
                    { "id": "d", "text": "d- $127,250" },
                    { "id": "e", "text": "e- $125,750" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة ويسترن يونيون: إجمالي الأصول بعد التعديل بالمؤشر بيطلع 129,750 بعد ما تضرب الأرض والمخزون في 1.05 وتجمع الكاش.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>طريقة الحساب لـ Total Assets المعدلة:<br>• أصول متداولة معدلة = 45,750<br>• أرض معدلة (بند غير نقدي) = 80,000 * 1.05 = 84,000<br>• إجمالي الأصول بعد التعديل = 45,750 + 84,000 = 129,750."
            },
            {
                "id": 47,
                "text": "Case Data: The following information is computed from western union Inc. balance sheet: Cash $30,000, inventory $15,000, Land $80,000, Loans $25,000, owner's equity $100,000. Assume that general price level has increased by 5% since the beginning of the year.\n\nQuestion: Owner's equity of western union after adjustment by the change in the general price level would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- $104,750" },
                    { "id": "b", "text": "b- $100,000" },
                    { "id": "c", "text": "c- $105,000" },
                    { "id": "d", "text": "d- $125,000" },
                    { "id": "e", "text": "e- $95,000" }
                ],
                "correct": "a",
                "basmaga": "تابع لمسألة ويسترن يونيون: حقوق الملكية المعدلة كمتمم حسابي للميزانية بتطرح إجمالي الأصول المعدل ناقص القرض وبتطلع 104,750.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>طريقة الحساب: حقوق الملكية المعدلة = إجمالي الأصول بعد التعديل (129,750) ناقص القروض والالتزامات النقدية الثابتة التي لا تعدل (25,000) = 104,750."
            },
            {
                "id": 48,
                "text": "Case Data: The following information is computed from western union Inc. balance sheet: Cash $30,000, inventory $15,000, Land $80,000, Loans $25,000, owner's equity $100,000. Assume that general price level has increased by 5% since the beginning of the year.\n\nQuestion: Which of the following is true about western union Inc?\n\n",
                "options": [
                    { "id": "a", "text": "a- No losses or gains in purchasing power." },
                    { "id": "b", "text": "b- purchasing power gains arise as a result of holding net monetary assets." },
                    { "id": "c", "text": "c- purchasing power losses arise as a result of holding net monetary assets." },
                    { "id": "d", "text": "d- losses or gains in purchasing power pertains only to non-monetary items." },
                    { "id": "e", "text": "e- Monetary assets held by western union Inc. was the same as the monetary liabilities." }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة ويسترن يونيون: الكاش (30 ألف) أكبر من القرض (25 ألف)، يبقى إحنا شايلين أصول نقدية موجبة فبيحصل خسارة قوة شرائية صريحة كما بالجملة c.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>بما أن إجمالي الأصول النقدية للشركة (الكاش 30,000) أكبر من الالتزامات النقدية (القروض 25,000)؛ فإن صافي البنود النقدية موجب، والاحتفاظ ببنود نقدية موجبة وقت التضخم يترتب عليه خسارة قوة شرائية (purchasing power losses) وقيمتها الحسابية الفردية = (30,000 - 25,000) * 5% = 250 خسارة."
            },
            {
                "id": 49,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintaining the purchasing power of capital intact?\n\n",
                "options": [
                    { "id": "a", "text": "a- continuously contemporary accounting" },
                    { "id": "b", "text": "b- historical cost accounting" },
                    { "id": "c", "text": "c- general price-level adjustment accounting" },
                    { "id": "d", "text": "d- current cost accounting" },
                    { "id": "e", "text": "e- fair value accounting" }
                ],
                "correct": "c",
                "basmaga": "سؤال معاد مكرر للتثبيت؛ الحفاظ على القوة الشرائية ثابتة (purchasing power of capital intact) ده هدف نموذج الـ General price-level adjustment accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>نموذج المحاسبة بمستوى الأسعار العام (CPPA) يرتكز بالكامل على صيانة القوة الشرائية العامة لرأس المال الأساسي للمنشأة باستخدام الأرقام القياسية للاسعار."
            },
            {
                "id": 50,
                "text": "Distribution of all historical cost profits during times of rising prices will lead to:\n\n",
                "options": [
                    { "id": "a", "text": "a- reduction in financial capital" },
                    { "id": "b", "text": "b- increase in financial capital" },
                    { "id": "c", "text": "c- maintaining operating capacity" },
                    { "id": "d", "text": "d- erosion of operating capacity" },
                    { "id": "e", "text": "e- no impact on capital" }
                ],
                "correct": "d",
                "basmaga": "توزيع كل أرباح التكلفة التاريخية وقت التضخم والغلاء بيعمل تآكل القدرة التشغيلية للمشروع erosion of operating capacity.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>توزيع الأرباح التقليدية غير المعدلة بالكامل للملاك وقت تضخم الأسعار يحرم الشركة من الأموال اللازمة لتجديد أصولها ومخزونها، مما يسبب تآكل قدرتها التشغيلية (erosion of operating capacity)."
            },
            {
                "id": 51,
                "text": "What is not a valid criticism to historical cost accounting?\n\n",
                "options": [
                    { "id": "a", "text": "a- it is not relevant at times of changing prices." },
                    { "id": "b", "text": "b- it is not logical to add assets together that have been purchased in different periods of different purchasing power" },
                    { "id": "c", "text": "c- it understates profit in times of rising profits" },
                    { "id": "d", "text": "d- it distorts current year's operating results by including the current year's income holding gains that accrued in previous periods." },
                    { "id": "e", "text": "e- all of the above are criticism to historical cost accounting" }
                ],
                "correct": "c",
                "basmaga": "سؤال مكرر لتنويع الاختيارات؛ الجملة الخاطئة والتي لا تمثل عيباً حقيقياً للتكلفة التاريخية هي c لأنها بتعمل Overstates مش Understates للأرباح.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>التكلفة التاريخية لا تقلل الأرباح (understates profit) وقت الغلاء، بل تضخمها بشكل كبير مضلل نتيجة تجاهل التغير في القيمة الشرائية للفلوس، فالاختيار c هو العبارة المطلوبة."
            },
            {
                "id": 52,
                "text": "Which of the following statements is not true in times of inflation?\n\n",
                "options": [
                    { "id": "a", "text": "a- Holders of monetary assets will lose" },
                    { "id": "b", "text": "b- holders of monetary liabilities will gain" },
                    { "id": "c", "text": "c- if the amount of monetary assets is the same as monetary liabilities, then no gain no loss." },
                    { "id": "d", "text": "d- if the amount of monetary assets is less than the amount of monetary liabilities, a net loss would occur." },
                    { "id": "e", "text": "e- if the amount of monetary assets is more than the amount of monetary liabilities, a net loss would occur." }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن الجملة الغلط؛ لمحت لو الأصول النقدية أقل من الخصوم النقدية يحصل خسارة (net loss) دي العبارة الخاطئة لأن الموقف ده محاسبياً بيكسب مكسب Gain.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>عندما تقل الأصول النقدية عن الالتزامات النقدية للشركة وقت التضخم، فإن المنشأة تحقق مكسباً دفترياً صافياً للقوة الشرائية وليس خسارة (net loss)، مما يجعل العبارة d خاطئة علمياً وهي المطلوبة."
            },
            {
                "id": 53,
                "text": "............. differentiate between profits from trading and holding gains.\n\n",
                "options": [
                    { "id": "a", "text": "a- current cost accounting" },
                    { "id": "b", "text": "b- current purchasing power accounting" },
                    { "id": "c", "text": "c- fair value accounting" },
                    { "id": "d", "text": "d- continuously contemporary accounting" },
                    { "id": "e", "text": "e- historical cost accounting" }
                ],
                "correct": "a",
                "basmaga": "النظام اللي بيفصل بدقة وعزل تام بين أرباح التجارة والتشغيل وبين مكاسب الحيازة (differentiate trading and holding gains) هو الـ current cost accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) تنفرد وتتميز بالفصل التام بين الأرباح التشغيلية الناتجة عن النشاط التجاري (Trading profits) وبين أرباح الحيازة الناتجة عن صعود قيمة الأصول بالخلفية (Holding gains)."
            },
            {
                "id": 54,
                "text": "Realized holding gains are treated as income under.....\n\n",
                "options": [
                    { "id": "a", "text": "a- current cost accounting" },
                    { "id": "b", "text": "b- current purchasing power accounting" },
                    { "id": "c", "text": "c- fair value accounting" },
                    { "id": "d", "text": "d- continuously contemporary accounting" },
                    { "id": "e", "text": "e- historical cost accounting" }
                ],
                "correct": "e",
                "basmaga": "مكاسب الحيازة المحققة بتتعامل وتعامل كدخل صافي عادي (treated as income) جوه المحاسبة بالتكلفة التاريخية التقليدية historical cost accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: e</strong><br><br>تحت منظور الحفاظ على رأس المال المالي المتبع في التكلفة التاريخية (HC)، يتم دمج ومعاملة مكاسب الحيازة المحققة عند البيع كجزء صريح ومباشر من صافي دخل السنة القابل للتوزيع."
            },
            {
                "id": 55,
                "text": "A theory that predicts that, if certain conditions are met then particular accounting practices will be observed, is an example of:\n\n",
                "options": [
                    { "id": "a", "text": "a. Positive accounting theory" },
                    { "id": "b", "text": "b. Negative accounting theory" },
                    { "id": "c", "text": "c. Normative accounting theory" },
                    { "id": "d", "text": "d. Descriptive accounting theory" }
                ],
                "correct": "a",
                "basmaga": "النظرية اللي بتتوقع وتفسر حدوث ممارسات محاسبية معينة عند توفر شروط معينة (predicts accounting practices will be observed) دي طبعاً الـ Positive accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>هذا هو المبدأ التجريبي لنظرية المحاسبة الإيجابية (PAT)؛ حيث تصاغ في شكل فرضيات تفسيرية وتنبؤية تتوقع السلوك الفعلي والممارسات المحاسبية التي سيتم ملاحظتها عند تحقق شروط وظروف بيئية معينة للشركة."
            },
            {
                "id": 56,
                "text": "Case Data: Westinghouse Inc. commenced its operations at the beginning of the year 2018 with $100,000 inventory comprising 25,000 units at $4 each, at the end of the year all inventory items are sold for $150,000 cash. So, Westinghouse Inc. decided to acquire another 25,000 units of inventory and found that the replacement cost was $5.40 each at the year end.\n\nQuestion: Assuming no contributions from owners, no borrowing and no distributions to owners, the profit that will keep financial capital intact for Westinghouse Inc. would be equal to:\n\n",
                "options": [
                    { "id": "a", "text": "a- $50,000" },
                    { "id": "b", "text": "b- 150,000" },
                    { "id": "c", "text": "c- 135,000" },
                    { "id": "d", "text": "d- 15,000" },
                    { "id": "e", "text": "e- 35,000" }
                ],
                "correct": "a",
                "basmaga": "مسألة شركة وستينجهاوس: طالب الربح اللي بيحافظ على رأس المال المالي ثابتاً، اطرح الرقمين الأصليين (150 ألف بيع - 100 ألف تكلفة) تطلع الإجابة 50,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>الحفاظ على رأس المال المالي (Financial Capital Intact) يعتمد على المحاسبة العادية بالتكلفة التاريخية المجردة: الإيراد الفعلي (150,000) ناقص التكلفة الأصلية للبضاعة (100,000) = 50,000."
            },
            {
                "id": 57,
                "text": "Case Data: Westinghouse Inc. commenced its operations at the beginning of the year 2018 with $100,000 inventory comprising 25,000 units at $4 each, at the end of the year all inventory items are sold for $150,000 cash. So, Westinghouse Inc. decided to acquire another 25,000 units of inventory and found that the replacement cost was $5.40 each at the year end.\n\nQuestion: The profit that will keep operating capacity intact for Westinghouse Inc. would be:\n\n",
                "options": [
                    { "id": "a", "text": "a- $50,000" },
                    { "id": "b", "text": "b- 150,000" },
                    { "id": "c", "text": "c- 135,000" },
                    { "id": "d", "text": "d- 15,000" },
                    { "id": "e", "text": "e- 35,000" }
                ],
                "correct": "d",
                "basmaga": "تابع لمسألة شركة وستينجهاوس: طالب الربح اللي بيحافظ على الطاقة التشغيلية ثابتة للـ CCA، اضرب 25,000 في 5.40 تطلع 135 ألف، اطرحها من الـ 150 ألف بيع تطلع الإجابة 15,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>الحفاظ على الطاقة التشغيلية مادية (Operating capacity intact) يتطلب طرح ثمن الإحلال الحالي للبضاعة من الإيراد &rarr; ثمن الإحلال الإجمالي = 25,000 حتة * 5.40 دولار = 135,000 &rarr; الربح الجاري الصافي = 150,000 إيراد - 135,000 إحلال = 15,000."
            },
            {
                "id": 58,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintaining financial capital intact?\n\n",
                "options": [
                    { "id": "a", "text": "a- continuously contemporary accounting" },
                    { "id": "b", "text": "b- historical cost accounting" },
                    { "id": "c", "text": "c- general price-level adjustment accounting" },
                    { "id": "d", "text": "d- current cost accounting" },
                    { "id": "e", "text": "e- fair value accounting" }
                ],
                "correct": "b",
                "basmaga": "تلمح جملة صيانة رأس المال المالي ثابتاً (maintaining financial capital intact) اختار طبعاً التكلفة التاريخية التقليدية historical cost accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>منظور الحفاظ على رأس المال المالي الاسمي (Financial capital maintenance) هو المنظور والركيزة التاريخية التامة التي يعتمد عليها نموذج التكلفة التاريخية التقليدي (HC)."
            },
            {
                "id": 59,
                "text": "Which of the following is true about theories in general?\n\n",
                "options": [
                    { "id": "a", "text": "a. Theories can include any coherent set of ideas or statements to explain, or provide guidance in respect of, certain phenomena" },
                    { "id": "b", "text": "b. Theories must be empirically based to describe what is, rather than what should be" },
                    { "id": "c", "text": "c. Theories must be based on inductive reasoning to provide a generalization or prediction" },
                    { "id": "d", "text": "d. All of the given options are correct" }
                ],
                "correct": "a",
                "basmaga": "قاعدة تعريف النظرية بشكل عام؛ هي أي مجموعة متماسكة ومترابطة من الأفكار والتعريفات لتفسير وإرشاد الظواهر كما بالخيار a الحرفي.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>العبارة الشاملة الصحيحة علمياً عن النظريات هي الخيار a؛ حيث يمكن للنظرية أن تشمل أي إطار فكري متماسك من الأفكار أو المبادئ يهدف لتفسير ظاهرة معينة أو تقديم إرشاد علمي حيالها."
            },
            {
                "id": 60,
                "text": "Normative accounting theories and research seek to:\n\n",
                "options": [
                    { "id": "a", "text": "a. Explain and predict particular phenomena based on observation" },
                    { "id": "b", "text": "b. Prescribe particular approaches not driven by existing practices" },
                    { "id": "c", "text": "c. Describe what is normal, or generally accepted, practice" },
                    { "id": "d", "text": "d. All of the given options are correct" }
                ],
                "correct": "b",
                "basmaga": "سؤال مكرر لتأكيد الحفظ النهائي للبوكليت؛ أبحاث الفكر المعياري بتسعى لوصف وتقديم أساليب مثالية جديدة مستقلة عن عشوائية الواقع الفعلي الحالي (Prescribe particular approaches).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: b</strong><br><br>الهدف الأكاديمي الحتمي للنظريات والأبحاث المعيارية (Normative) هو فرض وتقديم وتوصيف (Prescribe) حلول ومناهج محاسبية صحيحة ومثالية، لا تشتق أو تتقيد بالممارسات الفعلية الحالية العتيقة للشركات."
            },
            {
                "id": 61,
                "text": "Case Data [Model 1]: In applying the CPPA model, if the price-level index was 120 at the beginning of the year, 150 at end of the year, and averaged 135 during the year.\n\nQuestion: What price-level index would be applied to sales that occurred uniformly during the year?\n\n",
                "options": [
                    { "id": "a", "text": "a. 150/135" },
                    { "id": "b", "text": "b. 135/150" },
                    { "id": "c", "text": "c. 150/120" },
                    { "id": "d", "text": "d. 120/150" },
                    { "id": "e", "text": "e. 135/120" }
                ],
                "correct": "a",
                "basmaga": "شفرة تريكة المبيعات المنتظمة وقت التضخم في الـ CPP؛ اقسم دايماً رقم المؤشر بآخر السنة على المؤشر المتوسط (Ending Index / Average Index) يعني الكسر الصح هو 150/135.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>عند تطبيق محاسبة الـ CPP على بند المبيعات أو الإيرادات التي تحدث بانتظام وانتشار متساوٍ طوال السنة (uniformly)، يتم استخدام معامل التعديل بقسمة الرقم القياسي لآخر السنة (Ending Index = 150) على الرقم القياسي المتوسط للفترة (Average Index = 135) فينتج الكسر 150/135."
            },
            {
                "id": 62,
                "text": "Case Data [ABC Inc. Case - Model 1]: By applying the Current Cost Accounting Model, compute the based on the balance sheet:\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 - (Accumulated depreciation 10,000) | Land 130,000\n\nQuestion: The value of Inventory on hand at the year-end would be equal to ..........., assuming that the inventory on hand at the year-end comprised 2,500 units that cost $10 per unit, while the replacement cost at year-end was $12 per unit.\n\n",
                "options": [
                    { "id": "a", "text": "a. 25,000" },
                    { "id": "b", "text": "b. 35,000" },
                    { "id": "c", "text": "c. 30,000" },
                    { "id": "d", "text": "d. 20,000" },
                    { "id": "e", "text": "e. 22,000" }
                ],
                "correct": "c",
                "basmaga": "تابع لمسألة شركة ABC الكبيرة: طالب قيمة المخزون بآخر السنة للـ CCA، اضرب عدد الوحدات (2500 حتة) في سعر الإحلال الجديد آخر السنة (12$) تطلع النتيجة 30,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>في نموذج التكلفة الجارية (CCA)، يتم تقييم بند المخزون المتبقي في نهاية السنة بناءً على قيمة وسعر الإحلال الحالي في تاريخ الميزانية &rarr; 2,500 وحدة * 12 دولار تكلفة إحلال = 30,000."
            },
            {
                "id": 63,
                "text": "Case Data [ABC Inc. Case - Model 1]: By applying the Current Cost Accounting Model, compute the based on the balance sheet:\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 - (Accumulated depreciation 10,000) | Land 130,000\n\nQuestion: Depreciation expense would be equal to ..........., assuming that the replacement cost at year-end of plant and equipment increased to $120,000. Plant and equipment have an expected life of 10 years with no residual value. Depreciation expense is calculated using straight method.\n\n",
                "options": [
                    { "id": "a", "text": "a. 2,000" },
                    { "id": "b", "text": "b. 10,000" },
                    { "id": "c", "text": "c. 100,000" },
                    { "id": "d", "text": "d. 12,000" },
                    { "id": "e", "text": "e. 120,000" }
                ],
                "correct": "d",
                "basmaga": "تابع لمسألة شركة ABC: طالب مصروف الإهلاك الجديد للـ CCA، اقسم سعر الإحلال الجديد للآلات (120,000) على العمر 10 سنين تطلع النتيجة 12,000 مباشرة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>تحت محاسبة التكلفة الجارية (CCA)، يتم حساب قسط ومصروف إهلاك الأصول الثابتة السنوي بقسمة تكلفة الإحلال الجديدة المقدرة آخر السنة على العمر الإنتاجي للأصل &rarr; 120,000 تكلفة إحلال / 10 سنوات عمر إنتاجي = 12,000 قسط الإهلاك الجاري."
            },
            {
                "id": 64,
                "text": "Case Data [ABC Inc. Case - Model 1]: By applying the Current Cost Accounting Model, compute the based on the balance sheet:\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 - (Accumulated depreciation 10,000) | Land 130,000\n\nQuestion: The value of land at the year-end would be equal to ..........., assuming that the replacement cost of land at the year-end reflecting an increase in price of the land by 20%.\n\n",
                "options": [
                    { "id": "a", "text": "a. 100,000" },
                    { "id": "b", "text": "b. 130,000" },
                    { "id": "c", "text": "c. 165,000" },
                    { "id": "d", "text": "d. 12,000" },
                    { "id": "e", "text": "e. 156,000" }
                ],
                "correct": "e",
                "basmaga": "تابع لمسألة شركة ABC: طالب قيمة الأرض بآخر السنة بعد زيادة سعرها بنسبة 20%، اضرب الرقم الأصلي للأرض (130,000) في 1.20 تطلع النتيجة 156,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: e</strong><br><br>طريقة الحساب لتكلفة الأرض الجارية المعدلة: قيمة الأرض الدفترية الأصلية (130,000) * معامل زيادة سعر السوق الجاري للأصل (100% + 20% = 1.20) = 156,000."
            },
            {
                "id": 65,
                "text": "Case Data [ABC Inc. Case - Model 1]: By applying the Current Cost Accounting Model, compute the based on the balance sheet:\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 - (Accumulated depreciation 10,000) | Land 130,000\n\nQuestion: The value of cash on hand at the year-end would be equal to ..........., assuming that the general price level has increased by 10% at year-end.\n\n",
                "options": [
                    { "id": "a", "text": "a. 50,000" },
                    { "id": "b", "text": "b. 55,000" },
                    { "id": "c", "text": "c. 30,000" },
                    { "id": "d", "text": "d. 45,000" },
                    { "id": "e", "text": "e. 25,000" }
                ],
                "correct": "a",
                "basmaga": "تريكة فخ الكاش في طريقة التكلفة الجارية الـ CCA؛ الكاش بند نقدي Monetary قيمته الاسمية مبتتغيرش ولا بتنضرب في أي نسب مئوية، فيفضل ثابت زي ما هو 50,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: a</strong><br><br>النقدية في الخزينة (Cash on hand) تعتبر بند نقدي مالي (Monetary item)، وتحت طريقة التكلفة الجارية (CCA) أو طريقة الـ CPP لا يتم مضاعفة أو تعديل الرقم الاسمي المكتوب على البند النقدي الإسمي مطلقاً لأنه مسجل بالفعل بدولارات حالية، فيبقى ثابتاً بقيمة 50,000."
            },
            {
                "id": 66,
                "text": "These are less common and they include obligations to transfer goods and services in the future which could change in terms of their monetary values:\n\n",
                "options": [
                    { "id": "a", "text": "a. Monetary assets" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Non-monetary liabilities" },
                    { "id": "d", "text": "d. Monetary liabilities" },
                    { "id": "e", "text": "e. Net monetary assets" }
                ],
                "correct": "c",
                "basmaga": "تلمح التزامات ووعود مستقبلية بنقل بضائع أو خدمات بتتغير قيمتها بالفلوس مع التضخم، دي الالتزامات غير النقدية Non-monetary liabilities.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>الالتزامات غير النقدية (Non-monetary liabilities) هي التعهدات والالتزامات غير الشائعة بكثرة والتي تلزم المنشأة بنقل سلع ومنافع أو أداء خدمات في فترات مستقبلية وتتغير وتتأثر قيمتها النقدية بتأثر الأسعار والتضخم."
            },
            {
                "id": 67,
                "text": "........... is the weighted average of the current prices of goods and services related to a weighted average of prices in a prior period:\n\n",
                "options": [
                    { "id": "a", "text": "a. Income" },
                    { "id": "b", "text": "b. Monetary assets" },
                    { "id": "c", "text": "c. Price index" },
                    { "id": "d", "text": "d. Covenants" },
                    { "id": "e", "text": "e. Monetary liabilities" }
                ],
                "correct": "c",
                "basmaga": "التعريف الرسمي لمتوسط الأسعار الحالي منسوباً لمتوسط أسعار سنة مسبقة، ده طبعاً الرقم القياسي للأسعار Price index.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: c</strong><br><br>المؤشر القياسي للأسعار (Price Index) هو الأداة الإحصائية المحاسبية التي تعبر عن المتوسط المرجح لأسعار سلة من السلع والخدمات الحالية منسوبة ومقسومة على متوسط أسعارها في فترة سابقة تسمى سنة الأساس."
            },
            {
                "id": 68,
                "text": "Case Data [Model 4]: In applying the CPPA model, if the price-level index was 115 at the beginning of the year, 145 at end of the year and averaged 130 during the year.\n\nQuestion: What price-level index would be applied to sales that occurred uniformly during the year?\n\n",
                "options": [
                    { "id": "a", "text": "a. 145/115" },
                    { "id": "b", "text": "b. 115/145" },
                    { "id": "c", "text": "c. 130/115" },
                    { "id": "d", "text": "d. 145/130" },
                    { "id": "e", "text": "e. 130/145" }
                ],
                "correct": "d",
                "basmaga": "تكرار لتريكة مبيعات الموديل الرابع بالأرقام الجديدة؛ اقسم دايماً مؤشر آخر السنة على مؤشر المتوسط (Ending / Average) يعني الكسر الصح هو 145/130.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: d</strong><br><br>لتعديل وحساب بند الإيرادات والمبيعات الموزعة بانتظام متساوٍ (uniformly) عبر فترات السنة وقت التضخم؛ نقسم الرقم القياسي لنهاية الفترة (145) على الرقم القياسي المتوسط السائد طوال السنة (130) فيكون الكسر التعاقدي المعدل هو 145/130."
            }
        ]
    },

    
   
    "accounting_programs_exam_model_7": {
        "title": "الامتحان السابع: بنك أسئلة شابتر 7 الكامل للـ PAT",
        "description": "بسم الله وأبدأ - بنك الأسئلة الشامل والحالات لفرضيات نظرية المحاسبة الإيجابية وعقود الإدارة والوكالة",
        "questions": [
            {
                "id": 1,
                "text": "Watts and Zimmerman's Positive Accounting Theory is:",
                "options": [
                    { "id": "a", "text": "a. One of several normative theories of accounting" },
                    { "id": "b", "text": "b. One of several positive theories of accounting" },
                    { "id": "c", "text": "c. One of several critical theories of accounting" },
                    { "id": "d", "text": "d. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "من اسم النظرية صراحة Positive Accounting Theory اختار علطول إنها إحدى النظريات الإيجابية positive theories.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>نظرية المحاسبة الإيجابية (PAT) اللي عملها واتس وزيمرمان هي أشهر مثال للنظريات الإيجابية المحاسبية القائمة على ملاحظة الواقع وتفسيره، عكس النظريات المعيارية (Normative) تماماً."
            },
            {
                "id": 2,
                "text": "A central assumption of Positive Accounting Theory is that:",
                "options": [
                    { "id": "a", "text": "a. Individuals act solely on the basis of self-interest" },
                    { "id": "b", "text": "b. Firms seek to maximize profits" },
                    { "id": "c", "text": "c. The interests of principals and agents are not aligned" },
                    { "id": "d", "text": "d. Financial statements will be audited regardless of legal requirements" }
                ],
                "correct": "a",
                "basmaga": "الافتراض المركزي والجوهري لنظرية الـ PAT (A central assumption) هو إن كل أفعال البشر مدفوعة بالمصلحة الشخصية والأنانية self-interest.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>الـ PAT مبنية على افتراض اقتصادي أساسي وصارم؛ وهو إن سلوك الأفراد دايماً مدفوع بالمصلحة الشخصية والانتهازية (self-interest) لتعظيم ثرواتهم، ومفيش مكان للأخلاق أو الولاء في فرضياتها الأساسية."
            },
            {
                "id": 3,
                "text": "The key theory that underpins Positive Accounting Theory is:",
                "options": [
                    { "id": "a", "text": "a. The Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. Normative ethical theory" },
                    { "id": "d", "text": "d. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "السؤال عن المحرك والأساس والعمود الفلسفي للنظرية الإيجابية (underpins Positive Accounting) اختار فوراً نظرية الوكالة Agency theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>برغم إن الـ PAT وقفت على كذا رافد (زي كفاءة السوق والـ CAPM)، إلا إن نظرية الوكالة (Agency Theory) هي حجر الأساس والعمود الفقري الرئيسي اللي شرح وفسر اختيارات المديرين للطرق المحاسبية."
            },
            {
                "id": 4,
                "text": "The principal's expectation of opportunistic behavior by his or her agent results in lower payments to:",
                "options": [
                    { "id": "a", "text": "a. The agent" },
                    { "id": "b", "text": "b. The principal" },
                    { "id": "c", "text": "c. The principal and the agent" },
                    { "id": "d", "text": "d. Neither the principal nor the agent" }
                ],
                "correct": "a",
                "basmaga": "لما صاحب المال (principal) يتوقع غدر وسلوك انتهازي من المدير، ده بيخليه يدفع مرتب أقل لمين؟ للمدير طبعاً (The agent) كحماية للسعر.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>في غياب الرقابة والعقود، المالك (Principal) بيحمي نفسه بذكاء ويقدم للمدير (Agent) راتب منخفض (lower payments) عشان يعوض الانحرافات المتوقعة من وراه، والمفهوم ده اسمه حماية السعر (Price Protection)."
            },
            {
                "id": 5,
                "text": "The 'political cost hypothesis' of Positive Accounting Theory suggests that:",
                "options": [
                    { "id": "a", "text": "a. Large firms are more likely to use accounting choices that reduce reported profits" },
                    { "id": "b", "text": "b. Small firms are more likely to use accounting choices that reduce reported profits" },
                    { "id": "c", "text": "c. Neither large nor small firms are more likely to use accounting choices that reduce reported profits" },
                    { "id": "d", "text": "d. Both large and small firms are more likely to use accounting choices that reduce reported profits" }
                ],
                "correct": "a",
                "basmaga": "فرض التكاليف السياسية (political cost hypothesis) تلمح معاه الشركات الكبيرة بتنقي طرق تقلل الربح الدفتري (Large firms = reduce reported profits) عشان تداري من العين والحكومة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>فرض التكاليف السياسية بينص على إن الشركات الضخمة والعملاقة (Large firms) بتكون تحت مجهر ورقابة الحكومة والضرائب، فبيتعمدوا يختاروا طرق محاسبية تصغّر أرباحهم على الورق عشان يبانوا عاديين وميتفرضش عليهم التزامات جديدة."
            },
            {
                "id": 6,
                "text": "The 'bonus plan hypothesis' of Positive Accounting Theory suggests managers of firms with bonus plans tied to reported income are more likely to use accounting methods that:",
                "options": [
                    { "id": "a", "text": "a. Increase prior period reported income" },
                    { "id": "b", "text": "b. Increase current period reported income" },
                    { "id": "c", "text": "c. Increase future period reported income" },
                    { "id": "d", "text": "d. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "المدير اللي مكافأته مربوطة بالربح (bonus plan) هينقي طرق تعجل وتزود أرباح السنة الحالية الحاضرة (Increase current period reported income) عشان يقبض الحوافز فورا.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>فرض خطط الحوافز والمكافآت (Bonus Plan Hypothesis) بيتوقع إن المدير الأناني اللي مكافأته مربوطة بصافي أرباح الميزانية، هيجري يختار طرق محاسبية بتضخم وبترفع أرباح السنة الحالية (Current period) عشان يعظم مكافأته السنادي."
            },
            {
                "id": 7,
                "text": "The 'debt/equity hypothesis' of Positive Accounting Theory predicts that:",
                "options": [
                    { "id": "a", "text": "a. The higher the firm's debt/equity ratio, the more likely managers are to use accounting methods that lower income" },
                    { "id": "b", "text": "b. The lower the firm's debt/equity ratio, the more likely managers are to use accounting methods that increase income" },
                    { "id": "c", "text": "c. The higher the firm's debt/equity ratio, the more likely managers are to use accounting methods that increase income" },
                    { "id": "d", "text": "d. None of the given options is correct" }
                ],
                "correct": "c",
                "basmaga": "فرض الديون (debt/equity hypothesis) معناه كل ما زادت ديون الشركة، كل ما المدير مال لطرق محاسبية بتزود الدخل (higher debt/equity = increase income) عشان يهرب من قيود البنك.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>فرض الديون بيتوقع إن ارتفاع نسبة الديون لحقوق الملكية بيخلي الشركة مهددة بمخالفة شروط عقود القروض البنكية (Debt covenants)، فالمدرين بينقوا طرق بتزود رقم الدخل والربح عشان يوسعوا المسافة ويبعدوا عن حدود الخطر الفني."
            },
            {
                "id": 8,
                "text": "To test whether accounting information is useful, researchers such as Ball and Brown tested whether share prices responded to:",
                "options": [
                    { "id": "a", "text": "a. Expected earnings announcements" },
                    { "id": "b", "text": "b. Forecast earnings announcements" },
                    { "id": "c", "text": "c. Unexpected earnings announcements" },
                    { "id": "d", "text": "d. All of the given options are correct" }
                ],
                "correct": "c",
                "basmaga": "دراسة العالمين الكبار بول وبراون (Ball and Brown) أثبتت إن أسعار الأسهم والبورصة بتتفاعل مع إعلانات الأرباح المفاجئة وغير المتوقعة (Unexpected earnings announcements).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>العالمين (Ball & Brown 1968) أثبتوا منفعة المعلومات المحاسبية للبورصة؛ من خلال رصد تفاعل و حركات أسعار الأسهم وصعودها عند إعلان أرقام أرباح جديدة ومفاجئة وغير متوقعة (Unexpected) للسوق."
            },
            {
                "id": 29,
                "text": "The Debt Equity Hypothesis states that the closer a firm is to violating debt covenants, the more likely they are to:",
                "options": [
                    { "id": "a", "text": "a. shift reported profits from current to future periods" },
                    { "id": "b", "text": "b. make arrangements, to pay back the debt" },
                    { "id": "c", "text": "c. shift reported profits from future to current periods" },
                    { "id": "d", "text": "d. negotiate to ease the debt covenants" }
                ],
                "correct": "c",
                "basmaga": "لما الشركة تقرب من مخالفة قيود الديون، المديرين هيعملوا ترحيل للأرباح من المستقبل للسنة الحالية (shift reported profits from future to current periods) عشان يضخموا ربح السنادي الحرج.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>الشركات المخنوقة بشروط القروض البنكية بتلجأ لترحيل ونقل أرباح السنوات القادمة والمستقبلية لتدخل جوه السنة الحالية (from future to current) لتكبير وتجميل القوائم المالية السنادي وتفادي غضب البنوك."
            },
            {
                "id": 10,
                "text": "Which one of these is not one of the Three Hypotheses of Positive Accounting?",
                "options": [
                    { "id": "a", "text": "a. The Political Cost Hypothesis" },
                    { "id": "b", "text": "b. The Bonus Plan Hypothesis" },
                    { "id": "c", "text": "c. The Debt Covenant Hypothesis" },
                    { "id": "d", "text": "d. The Normative Opportunistic Hypothesis" }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن حاجة **مش** من الفروض الثلاثة الكبرى لنظرية الـ PAT (not one of the Three Hypotheses)، اختار الجملة الغريبة المألفة وهي d الفرض المعياري الانتهازي الخيالي.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>الفروض الثلاثة الكبرى والنظامية لـ واتس وزيمرمان في الـ PAT هي حصرياً: فرض خطة المكافآت (Bonus plan)، فرض الديون (Debt/equity)، وفرض التكاليف السياسية (Political cost)، فالاختيار d هو المسمى المخترع والغريب."
            },
            {
                "id": 11,
                "text": "The political cost hypothesis:",
                "options": [
                    { "id": "a", "text": "A. Defers current earnings" },
                    { "id": "b", "text": "B. Report future earnings in current period" },
                    { "id": "c", "text": "C. Reports the earning in accordance with the accounting policies that the company has always used" },
                    { "id": "d", "text": "D. None of the above" }
                ],
                "correct": "a",
                "basmaga": "فرض التكاليف السياسية هدفه يقلل أرباح السنة الحالية، يعني بيأجل ويرحل أرباح السنادي للمستقبل (Defers current earnings).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (A)</strong><br><br>بما إن فرض التكاليف السياسية (Political cost) بيحرك المدير لتقليص وتخفيض أرباح السنة الحالية لتفادي لفت الانتباه، فالسلوك ده علمياً بيعبر عن تأجيل وترحيل الأرباح الحالية للفترات القادمة (Defers current earnings)."
            },
            {
                "id": 12,
                "text": "...........support the view that managers will tend to use FIFO method of inventory valuation at times of inflation.",
                "options": [
                    { "id": "a", "text": "a- Management compensation hypothesis." },
                    { "id": "b", "text": "b- Debt hypothesis." },
                    { "id": "c", "text": "c- Political cost hypothesis" },
                    { "id": "d", "text": "d- (a) or (b)." }
                ],
                "correct": "d",
                "basmaga": "استخدام طريقة FIFO وقت التضخم بيضخم الأرباح الدفترية، ومين اللي عايز يزود أرباح؟ فرض المكافآت وفرض الديون مع بعض، فاختار الاختيار المجمع (a) or (b).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>وقت التضخم والغلاء، طريقة الـ FIFO بتطلع تكلفة البضاعة رخيصة بسعر زمان فالربح المحاسبي بيطلع كبير جداً وتضخم. والسلوك ده بيخدم مصلحة المدير بتاع المكافآت (a) وعايز يهرب من فخ ديون البنك (b) برضه، فالاتنين صح."
            },
            {
                "id": 13,
                "text": ".......support the view that managers will tend to use LIFO method of inventory valuation at times of inflation",
                "options": [
                    { "id": "a", "text": "a- Management compensation hypothesis." },
                    { "id": "b", "text": "b- Debt hypothesis." },
                    { "id": "c", "text": "c- Political cost hypothesis" },
                    { "id": "d", "text": "d- (a) or (b)." }
                ],
                "correct": "c",
                "basmaga": "استخدام طريقة LIFO وقت التضخم بينزل ويصغّر رقم الأرباح، والوحيد اللي مصلحته يصغر الربح هو فرض التكاليف السياسية Political cost hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>وقت التضخم، طريقة الـ LIFO بتسجل تكلفة البضاعة المباعة بالأسعار الجديدة الغالية، فده بيخسف برقم صافي الربح الأرض و بيصغره، وده السلوك المثالي اللي بتلجأ له الشركات الكبيرة لتفادي لفت الأنظار السياسية (Political cost)."
            },
            {
                "id": 14,
                "text": "Capital Asset Pricing Model provides an indication of ........... on securities, and it is calculated by considering...",
                "options": [
                    { "id": "a", "text": "a- the actual return, the risk-free rate of return plus a risk/return component." },
                    { "id": "b", "text": "b- the expected return, the risk-free rate of return plus a risk/return component." },
                    { "id": "c", "text": "c- the actual return, the risk-free rate of return minus a risk/return component." },
                    { "id": "d", "text": "d- the expected return, the risk-free rate of return minus a risk/return component." }
                ],
                "correct": "b",
                "basmaga": "نموذج الـ CAPM بيقيس العائد المتوقع (the expected return) ومعادلته فيها إشارة زائد واضافة جزء المخاطرة plus a risk/return component.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>نموذج تسعير الأصول الرأسمالية (CAPM) بيعطي مؤشر وحسبة للعائد المتوقع (Expected return) للسهم، وطريقة حسابه الرياضية هي: العائد الخالي من المخاطر (risk-free كالسندات الحكومية) **مضافاً إليه (+ plus)** جزء وعلاوة المخاطر fluctuate."
            },
            {
                "id": 15,
                "text": "............. provides a particular perspective about why managers when confronted with a choice between competing accounting methods would elect to support particular method in preference to others.",
                "options": [
                    { "id": "a", "text": "a- Positive accounting theory" },
                    { "id": "b", "text": "b- The efficient market hypothesis" },
                    { "id": "c", "text": "c- Research that considers capital market's reaction to accounting information" },
                    { "id": "d", "text": "d- Agency theory" }
                ],
                "correct": "a",
                "basmaga": "المنظور والنظرية اللي بتفسر ليه المدير لما يتحط قدامه كذا بديل محاسبي مخير بينهم بينقي واحد ويسيب الباقي، دي نظرية المحاسبة الإيجابية Positive accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>ده التوصيف الفلسفي والهدف الرئيسي لنشأة نظرية المحاسبة الإيجابية (PAT) لـ واتس وزيمرمان؛ وجِدت خصيصاً لتفسير ممارسات واختيارات الإدارة بين الطرق المحاسبية المتنافسة في السوق."
            },
            {
                "id": 16,
                "text": "............. provides evidence that capital markets react to new information, if it signal a change in cash flow, but it provide little explanation for why managers might elect to use particular accounting method.",
                "options": [
                    { "id": "a", "text": "a- Positive accounting theory" },
                    { "id": "b", "text": "b- The efficient market hypothesis" },
                    { "id": "c", "text": "c- Research that considers capital market's reaction to accounting information" },
                    { "id": "d", "text": "d- Agency theory" }
                ],
                "correct": "b",
                "basmaga": "الفرضية الاقتصادية اللي أثبتت إن البورصة ذكية وبتتفاعل مع الكاش فلو بس مقدرتش تفسر ليه المدير بيختار طرق معينة، دي فرضية كفاءة السوق The efficient market hypothesis (EMH).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>فرضية كفاءة السوق (EMH) نجحت في إثبات إن البورصة واعية وبتتفاعل مع معلومات الكاش فلو الحقيقي، لكن عيبها إنها عجزت ومقدمتش تفسير لـ ليه المديرين من الأول بيقعدوا ينقوا طرق محاسبية معينة على الورق، فكانت الحلقة المفقودة."
            },
            {
                "id": 17,
                "text": ".......support the view that managers will tend to depreciate fixed assets over longer periods, while ............. support the view that managers will tend to use accelerated depreciation.",
                "options": [
                    { "id": "a", "text": "a- Political cost hypothesis, management compensation hypothesis" },
                    { "id": "b", "text": "b- Management compensation hypothesis, debt hypothesis" },
                    { "id": "c", "text": "c- Debt hypothesis, management compensation hypothesis" },
                    { "id": "d", "text": "d- Management compensation hypothesis, political cost hypothesis" }
                ],
                "correct": "d",
                "basmaga": "حساب الإهلاك على فترة طويلة (longer periods) بيزود ربح السنادي فده تبع الـ Management compensation، والإهلاك المعجل (accelerated) بيقلل ربح السنادي فده تبع الـ political cost، فاختار الترتيب d صح.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>المدير اللي عايز يكبر أرباح مكافأته (Management compensation) هيحسب إهلاك المكن على فترات طويلة عشان يقلل مصروف السنة ويضخم الربح، بينما المدير الخايف من الهجوم السياسي (Political cost) هيعجل بالإهلاك (Accelerated) عشان يصغر أرباح الورق."
            },
            {
                "id": 18,
                "text": "......can be considered as undertakings provided by a borrower as a part of a contract associated with a loan to restrict the borrower from taking particular actions.",
                "options": [
                    { "id": "a", "text": "a- contractual arrangement" },
                    { "id": "b", "text": "b- covenant" },
                    { "id": "c", "text": "c- constraints" },
                    { "id": "d", "text": "d- social contract" }
                ],
                "correct": "b",
                "basmaga": "التعهدات والقيود المحاسبية اللي بيكتبها البنك في عقد القرض عشان يقيد حركة المقترض (undertakings provided by a borrower) اسمها القيود والشروط البنكية covenants.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>الشروط والعهود الحمائية للبنوك (Covenants) هي التعهدات والبنود القانونية المدرجة جوه عقد القرض لحماية أموال البنك، وبتلزم أو بتمنع المقترض من تخطي نسب مالية ومحاسبية معينة (زي سقف الديون للأصول)."
            },
            {
                "id": 19,
                "text": "............. holds that managers will tend to use accelerated depreciation method to write off assets faster in earlier years.",
                "options": [
                    { "id": "a", "text": "a- Debt hypothesis" },
                    { "id": "b", "text": "b- Political hypothesis" },
                    { "id": "c", "text": "c- Management compensation hypothesis" },
                    { "id": "d", "text": "d- Both of Debt hypothesis and Management compensation hypothesis" },
                    { "id": "e", "text": "e- Both of management compensation hypothesis and Political cost hypothesis." }
                ],
                "correct": "b",
                "basmaga": "استخدام طريقة الإهلاك المعجل (accelerated depreciation) عشان نخلص من قيمة الأصل بدري ونصغّر أرباح السنين الأولى، ده سلوك ناتج عن فرض التكاليف السياسية Political hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>طريقة الإهلاك المعجل بتنزل بقوة ومصاريف كبيرة في أول كام سنة فبتخسف بأرباح الميزانية الأرض، وده التكتيك المثالي اللي بيتوقعه فرض التكاليف السياسية (Political cost hypothesis) للشركات الكبيرة عشان تبان أرباحها قليلة."
            },
            {
                "id": 20,
                "text": "A central assumption of positive accounting theory is that:",
                "options": [
                    { "id": "a", "text": "a- firms seek to maximize profits" },
                    { "id": "b", "text": "b- notions of loyalty or morality are incorporated in the theory" },
                    { "id": "c", "text": "c- individuals act solely on the basis of self-interest" },
                    { "id": "d", "text": "d- the interests of principals and agents are not aligned" },
                    { "id": "e", "text": "e- financial statements will be audited regardless of legal requirements" }
                ],
                "correct": "c",
                "basmaga": "سؤال مكرر لتأكيد بنك الأسئلة؛ الفرض السلوكي والأساسي للـ PAT (central assumption) هو الأنانية والمصلحة الشخصية للأفراد self-interest.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>تقوم نظرية PAT على فرضية حتمية مأخوذة من علم الاقتصاد؛ وهي إن سلوك وتحركات الأفراد داخل الشركة وخارجها نابعة فقط من المصلحة الشخصية والذاتية (self-interest) والسعي وراء الثروة."
            },
            {
                "id": 21,
                "text": "The key theory that underpins positive accounting theory is:",
                "options": [
                    { "id": "a", "text": "a- agency theory" },
                    { "id": "b", "text": "b- stakeholders theory" },
                    { "id": "c", "text": "c- legitimacy theory" },
                    { "id": "d", "text": "d- institutional theory" },
                    { "id": "e", "text": "e- normative theory" }
                ],
                "correct": "a",
                "basmaga": "تكرار البوكليت؛ النظرية والركيزة الأساسية اللي بتدعم وبتشيل الـ PAT (underpins positive accounting) هي نظرية الوكالة agency theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>نظرية الوكالة (Agency Theory) هي النواة اللي خرجت منها وبنيت عليها نظرية PAT، لأنها فسرت العلاقة التعاقدية الشائكة والصراع المالي المكتوم بين الملاك والمديرين."
            },
            {
                "id": 22,
                "text": "............. holds that managers will tend to depreciate assets over longer periods.",
                "options": [
                    { "id": "a", "text": "a- Debt hypothesis" },
                    { "id": "b", "text": "b- Political hypothesis" },
                    { "id": "c", "text": "c- Management compensation hypothesis" },
                    { "id": "d", "text": "d- Both of Debt hypothesis and Management-compensation hypothesis" },
                    { "id": "e", "text": "e- Both of management compensation hypothesis and Political cost hypothesis." }
                ],
                "correct": "d",
                "basmaga": "حساب الإهلاك على فترات طويلة (longer periods) بيقلل المصروف السنوي ويضخم الأرباح الدفترية، ومين اللي عايز يضخم أرباحه؟ فرضي الديون والمكافآت مع بعض، فاختار الخيار المشترك d.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>حساب الإهلاك على فترات طويلة بيمدد العمر الإنتاجي وبيهدي مصروف السنة فبيطلع رقم صافي الأرباح كبير وضخم، وده التكتيك اللي بيخدم فرض المكافآت (عايز يزود حوافزه السنادي) وفرض الديون (عايز يجمّل صورته قدام البنك للهروب من القيود)، فالتنين صح."
            },
            {
                "id": 23,
                "text": "............. is a proxy variable for political attention.",
                "options": [
                    { "id": "a", "text": "a- Revenues" },
                    { "id": "b", "text": "b- Firm size" },
                    { "id": "c", "text": "c- Net profits" },
                    { "id": "d", "text": "d. Market share" },
                    { "id": "e", "text": "e- Net sales" }
                ],
                "correct": "b",
                "basmaga": "المتغير والمؤشر البديل اللي بيعبر ويقيس لفت الانتباه والرقابة السياسية للحكومة (proxy variable for political attention) هو حجم كبر الشركة Firm size.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>في أبحاث الـ PAT، بيتم استخدام حجم كبر الشركة (Firm size) كمتغير بديل ومؤشر (Proxy) يعبر عن مدى لفت انتباه الرأي العام والحكومة والضرائب؛ فكل ما كبر الحجم زادت الرقابة والتكاليف السياسية."
            },
            {
                "id": 24,
                "text": "............. provides evidence that capital markets react to new information if it signals a change in cash flow.",
                "options": [
                    { "id": "a", "text": "a- Positive accounting theory." },
                    { "id": "b", "text": "b- Agency theory" },
                    { "id": "c", "text": "c- CAPM" },
                    { "id": "d", "text": "d- The efficient market hypothesis" },
                    { "id": "e", "text": "e- Research that consider capital market's reaction to accounting information" }
                ],
                "correct": "d",
                "basmaga": "تكرار بصيغة الامتحان؛ الدليل العلمي على إن البورصة واعية وبتتفاعل مع أي داتا بتلمح لتغير الكاش فلو الحقيقي، هو فرضية كفاءة السوق The efficient market hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>فرضية كفاءة السوق (EMH) هي اللي قدمت الإثبات والدليل القاطع على إن أسواق المال والبورصة بتتحرك وتتفاعل فوراً وبذكاء مع المعلومات الجديدة والطارئة طالما بتعطي إشارة حقيقية عن تغير في التدفقات النقدية (Cash flow)."
            },
            {
                "id": 25,
                "text": "To test whether accounting information is useful, Ball and Brown (1968) tested stock market reaction to:",
                "options": [
                    { "id": "a", "text": "a- forecasted earnings announcements" },
                    { "id": "b", "text": "b- management forecasts" },
                    { "id": "c", "text": "c- unexpected earnings announcements" },
                    { "id": "d", "text": "d- earnings management" },
                    { "id": "e", "text": "e- expected earnings announcements" }
                ],
                "correct": "c",
                "basmaga": "سؤال معاد للتثبيت؛ اختبار الفائدة والموثوقية عند بول وبراون تم من خلال رصد رد فعل البورصة لإعلانات الأرباح غير المتوقعة المفاجئة unexpected earnings announcements.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>الباحثان (Ball & Brown 1968) عشان يثبتوا فايدة التقارير المالية، رصدوا تفاعل البورصة وأسعار الأسهم وتغيرها الحاد فجأة فور خروج وإعلان أرقام أرباح سنوية غير متوقعة (Unexpected) وصادمة لتوقعات المحللين المسبقة."
            },
            {
                "id": 26,
                "text": "Which of the following statements is not true about Positive Accounting Theory?",
                "options": [
                    { "id": "a", "text": "a- it does not prescribe which method a firm should use" },
                    { "id": "b", "text": "b- it is used to distinguish research aimed at explanation and prediction" },
                    { "id": "c", "text": "c- one of the key theories that underpins Positive Accounting Theory is normative accounting theory." },
                    { "id": "d", "text": "d- it is designed to explain and predict which firms will, and which firms will not use a particular method." },
                    { "id": "e", "text": "e- it focuses on the relationships between the various individuals involved in providing resources to the organization." }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن الجملة الغلط عن الـ PAT (not true about PAT) اختار الجملة c اللي بتقول إن النظرية المعيارية بتدعمها، لأن الـ PAT بتكره وبتمشي عكس الفكر المعياري تماماً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>العبارة c خاطئة تماماً وغير صحيحة؛ لأن نظرية المحاسبة الإيجابية (PAT) مبنية على الفكر التجريبي التفسيري للواقع، وعمر ما يكون أساسها أو الداعم ليها هو النظريات المعيارية (Normative) القائمة على الفرض والمثالية الدفترية."
            },
            {
                "id": 27,
                "text": "Which of the following statements is true regarding the origins and development of PAT?",
                "options": [
                    { "id": "a", "text": "a- Positive research in accounting started coming to prominence around the mid-1960, and appeared to become the dominant research paradigm in the 1970s and 1980s." },
                    { "id": "b", "text": "b- Jensen and Meckling (1976), a key paper in the development of agency theory, was the paper that Watts and Zimmerman greatly relied upon when developing PAT." },
                    { "id": "c", "text": "c. The introduction of positive research into accounting represented a paradigm shift from normative research to positive research." },
                    { "id": "d", "text": "d- Currently, almost all papers in most leading academic journals are positive research." },
                    { "id": "e", "text": "e- all of the given options are correct" }
                ],
                "correct": "e",
                "basmaga": "سؤال مجمع لتاريخ وتطور أبحاث الـ PAT؛ الأربع جمل صحيحة وتاريخية تامة فاختار علطول الاختيار المجمع e.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>جميع الخيارات المذكورة صحيحة تاريخياً وعلمياً؛ حيث إن أبحاث الـ Positive سيطرت في السبعينات والثمانينات، واعتمدت كلياً على ورقة جينسن وميكلينج 1976 لـ نظرية الوكالة، وعملت نقلة فكرية وثورة علمية (Paradigm shift) في المجلات الأكاديمية الصارمة."
            },
            {
                "id": 28,
                "text": "............. holds that security prices reflect the information content of publicly available information and this information is not restricted to accounting disclosures.",
                "options": [
                    { "id": "a", "text": "a- agency theory" },
                    { "id": "b", "text": "b- positive accounting theory" },
                    { "id": "c", "text": "c- system-oriented theories" },
                    { "id": "d", "text": "d- political economy theory" },
                    { "id": "e", "text": "e- None of the above" }
                ],
                "correct": "e",
                "basmaga": "المبدأ اللي بيقول إن أسعار الأسهم بتعكس بسرعة كل المعلومات المتاحة ومش بس أرقام المحاسبة، ده نص فرضية كفاءة السوق (EMH)، وبما إنها مش مكتوبة في الاختيارات اختار None of the above.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) (لأن الإجابة الصحيحة الغائبة هي EMH)</strong><br><br>الفرضية اللي بتنص على إن أسعار الأوراق الماليّة والأسهم في البورصة بتعكس فوراً مضمون كل معلومة متاحة علناً في المجتمع ومش مقتصرة على دفاتر المحاسبة هي فرضية كفاءة السوق (Efficient Markets Hypothesis) ولأنها مش في الخيارات اخترنا e."
            },
            {
                "id": 29,
                "text": "Costs involved in preparing financial statements are considered............, while costs involved in auditing financial statements are considered............",
                "options": [
                    { "id": "a", "text": "a- bonding costs, monitoring costs" },
                    { "id": "b", "text": "b- monitoring cost, residual costs" },
                    { "id": "c", "text": "c- residual costs, monitoring costs" },
                    { "id": "d", "text": "d- monitoring costs, bonding cost" },
                    { "id": "e", "text": "e- bonding costs, residual costs" }
                ],
                "correct": "a",
                "basmaga": "ترتيب مصاريف الوكالة؛ تكلفة إعداد القوائم المالية عشان المدير يثبت أمانته هي Bonding costs، وتكلفة مراجعة الحسابات والـ Auditing هي تكاليف رقابة Monitoring costs، فاختار الترتيب a صح.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>تكلفة تجميع وإعداد الحسابات المالية (Preparing) بيتحملها المدير كـ (Bonding costs) لربط وإثبات التزامه وسلوكه بتوقعات الملاك، بينما مصاريف التدقيق والمراجعة الخارجية (Auditing) بيدفعها الملاك لرقابة وفحص المدير فبتعتبر (Monitoring costs)."
            },
            {
                "id": 30,
                "text": "Capital assets pricing model CAPM provides an indication of.......... on securities.",
                "options": [
                    { "id": "a", "text": "a- the risk return component" },
                    { "id": "b", "text": "b- the expected return" },
                    { "id": "c", "text": "c- the normal return" },
                    { "id": "d", "text": "d- the abnormal return" },
                    { "id": "e", "text": "e- the risk free rate of return" }
                ],
                "correct": "b",
                "basmaga": "سؤال مكرر كلاسيكي؛ نموذج تسعير الأصول الرأسمالية الـ CAPM بيدينا مؤشر وحسبة تامة للعائد المتوقع للسهم في البورصة the expected return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>نموذج الـ (CAPM) بيعطي وبصورة دقيقة مؤشر وعلامة عن العائد المتوقع (Expected return) للأوراق المالية والأسهم عبر دمج معدل الفائدة الخالي من المخاطر مع تقلبات بيئة السوق العامة."
            },
            {
                "id": 31,
                "text": "The principal's expectations of opportunistic behavior by his agent that results in reduction in agent's salary is referred to as........",
                "options": [
                    { "id": "a", "text": "a- technical default" },
                    { "id": "b", "text": "b- contractual arrangements" },
                    { "id": "c", "text": "c- covenants" },
                    { "id": "d", "text": "d- constraints" },
                    { "id": "e", "text": "e- price protection" }
                ],
                "correct": "e",
                "basmaga": "توقع المالك للأفعال الانتهازية واللعب من وراه وتخفيض مرتب المدير مقدماً لتعويض المشكلة، ده مصطلح حماية السعر price protection.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>عندما يتوقع صاحب رأس المال سلوكاً انتهازياً وخيانة من المدير في غياب الضوابط، يقوم بخفض وتنزيل راتبه مقدماً كتعويض وحماية ذاتية لأمواله، والآلية السلوكية دي بتسمى حماية السعر (Price protection)."
            },
            {
                "id": 32,
                "text": "The ............. predicts that large firms rather than small ones are more likely to use accounting methods that reduce reported profits.",
                "options": [
                    { "id": "a", "text": "a- Debt hypothesis" },
                    { "id": "b", "text": "b- Political hypothesis" },
                    { "id": "c", "text": "c- Management compensation hypothesis" },
                    { "id": "d", "text": "d- Both of debt hypothesis and management compensation hypothesis" },
                    { "id": "e", "text": "e- Both of management compensation hypothesis and political cost hypothesis" }
                ],
                "correct": "b",
                "basmaga": "تكرار لتثبيت الشفرة؛ الفرض اللي بيتوقع إن الشركات الكبيرة الكاسحة بتميل لتصغير وتقليل أرباح الورق لتفادي العين، هو الفرض السياسي Political hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>فرض التكاليف السياسية (Political cost hypothesis) بيتوقع ويثبت إن الشركات الكبيرة جداً في الحجم بتميل لاستعمال طرق محاسبية بتخفّض وتقلل أرباحها المعلنة خوفاً من ملاحقة الضرائب أو جماعات الضغط والبرلمان."
            },
            {
                "id": 33,
                "text": "The main advantage of using accounting earnings instead of stock prices to determine bonuses is that:",
                "options": [
                    { "id": "a", "text": "a. Stock prices are influenced by market forces that are outside the control of management" },
                    { "id": "b", "text": "b. Accounting information is independently audited" },
                    { "id": "c", "text": "c. Accounting information is unbiased" },
                    { "id": "d", "text": "d. Stock prices may be manipulated by managers engaging in insider trading" }
                ],
                "correct": "a",
                "basmaga": "الميزة الأساسية لاستخدام الأرباح الدفترية المحاسبية بدل سعر السهم في حساب حوافز المدير، هي إن أسعار الأسهم في البورصة بتتأثر بعوامل خارجية برا إرادة وسيطرة الإدارة (outside the control of management).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>الشركات بتفضل تربط حوافز المدير بالأرباح المحاسبية الدفترية بدل سعر السهم بالبورصة؛ لأن أسعار الأسهم بتلعب وبتتأثر بظروف الاقتصاد الكلي والسياسة العامة، ودي حاجات برا يد وسيطرة الإدارة تماماً (outside control) فمش من العدل محاسبتهم عليها."
            },
            {
                "id": 34,
                "text": "While rejecting the preceding investment strategy would reflect................, and mostly a (an) ............. is used to reward the manager.",
                "options": [
                    { "id": "a", "text": "a- the efficiency perspective of PAT, fixed basis." },
                    { "id": "b", "text": "b- the opportunistic perspective of PAT, fixed basis." },
                    { "id": "c", "text": "c- the efficiency perspective of PAT, accounting-based bonus schemes." },
                    { "id": "d", "text": "d- the opportunistic perspective of PAT, accounting-based bonus schemes." }
                ],
                "correct": "b",
                "basmaga": "رفض مشروع استثماري كسبان وناجح عشان مصلحة المدير الذاتية بيعبر عن السلوك الانتهازي (the opportunistic perspective)، وبيحصل غالباً لو المدير بيتقاضى مكافأة على أساس ثابت fixed basis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>لو المدير بياخد مرتب ثابت ملوش دعوة بالإنتاج (Fixed basis)، وجاله مشروع فيه مخاطرة بس هيكسب الملاك، هيرفضه حماية لمصلحته وكسله. التصرف ده بيمثل منظور الانتهازية (Opportunistic) لأن المدير قدم مصلحته ورفاهيته على ثروة أصحاب المال."
            },
            {
                "id": 35,
                "text": "Assuming self-interest drives the actions of managers; managers may have some limited incentives to adopt investment strategies that increase firm value under......",
                "options": [
                    { "id": "a", "text": "a- fixed reward." },
                    { "id": "b", "text": "b- accounting-based bonus schemes." },
                    { "id": "c", "text": "c- market-based bonus schemes." },
                    { "id": "d", "text": "d- (b) or (c)." }
                ],
                "correct": "a",
                "basmaga": "المدير بيكون عنده حوافز ضعيفة ومحدودة جداً لتكبير وتطوير قيمة الشركة (limited incentives to increase firm value) لو شغال بنظام الراتب والمكافأة الثابتة fixed reward.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>تحت فرضية الأنانية، لو راتب المدير محدد بمبلغ ثابت جامد (Fixed reward) ملوش علاقة بالأرباح أو البورصة، هيكون دافعه وحافزه لتكبير قيمة الشغل وتطوير قيمة الشركة ضعيف ومحدود جداً لأنه مش هيطوله أي زيادة مادية."
            },
            {
                "id": 36,
                "text": "Assuming self-interest drives the actions of managers, managers would not want to take great risks under............ while............ encourage managers to adopt short-term investment strategies as opposed to long-term ones.",
                "options": [
                    { "id": "a", "text": "a- accounting based bonus schemes, market based bonus schemes" },
                    { "id": "b", "text": "b- market based bonus schemes, accounting based bonus schemes" },
                    { "id": "c", "text": "c- fixed basis reward, accounting based bonus schemes" },
                    { "id": "d", "text": "d- accounting based bonus schemes, fixed basis reward" }
                ],
                "correct": "c",
                "basmaga": "المدير مش هياخد أي مخاطرة تحت المرتب الثابت (fixed basis)، بينما الحوافز المحاسبية (accounting based) بتخليه يجري ورا المشاريع قصيرة الأجل عشان يقبض مكافأته السنادي، فاختار الترتيب c صح.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>المدير بيرفض تماماً المخاطرة لو شغال بمرتب ثابت (Fixed basis) لعدم وجود عائد إضافي له. بينما لو ربطنا مكافأته بأرباح الدفاتر المحاسبية، ده هيخليه يفكر في المدى القصير بس (Short-term focus) ويرفض مشاريع المدى الطويل عشان مخرجات الكاش تظهر في ميزانية السنادي."
            },
            {
                "id": 37,
                "text": "PAT theorist may argue that it is more appropriate to remunerate managers using ............. where accounting earnings fluctuate greatly.",
                "options": [
                    { "id": "a", "text": "a- fixed basis rewards." },
                    { "id": "b", "text": "b- accounting based bonus schemes" },
                    { "id": "c", "text": "c- market based bonus schemes" },
                    { "id": "d", "text": "d- both of fixed basis reward and accounting based bonus schemes" },
                    { "id": "e", "text": "e- both of market based bonus schemes and accounting based bonus schemes" }
                ],
                "correct": "c",
                "basmaga": "لما أرباح الدفاتر والمحاسبة تتأرجح وتلعب بجنون (accounting earnings fluctuate greatly) زي شركات التعدين، الأفضل نربط مكافأته بالبورصة وسعر السهم market based bonus schemes.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>علماء الـ PAT بيروا إنه في الشركات اللي أرباحها الدفترية متقلبة جداً وبتلعب بعنف بطبيعتها (زي شركات المناجم أو التكنولوجيا وأبحاث R&D)، الأصح والأعدل هو ربط مكافآت الإدارة بـ القيمة السوقية للأسهم بالبورصة (Market-based) لأنها بتقيس التوقعات طويلة الأجل."
            },
            {
                "id": 38,
                "text": "Rewarding managers on ............. may induce them to manipulate accounting numbers to improve their apparent performance.",
                "options": [
                    { "id": "a", "text": "a- Fixed basis reward" },
                    { "id": "b", "text": "b- accounting based bonus schemes" },
                    { "id": "c", "text": "c- market based bonus schemes" },
                    { "id": "d", "text": "d- (a) and (b)" },
                    { "id": "e", "text": "e- (a) and (c)" }
                ],
                "correct": "b",
                "basmaga": "النظام اللي بيغري ويحرض المدير على التلاعب بالأرقام المحاسبية عشان يكبّر أرباح الورق (induce them to manipulate numbers) هو الحوافز المحاسبية accounting based bonus schemes.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>ربط حوافز ومكافآت الإدارة بأرقام الحسابات والدفاتر (Accounting-based) بيمثل بيئة خطر وضغط بتغري المدير الانتهازي بالتلاعب وتزوير الأرقام والسياسات لتضخيم أرباح السنة الحالية لزيادة مكافأته الشخصية بصورة وهمية."
            },
            {
                "id": 39,
                "text": "What kind of accounting policies would we predict a manager would choose if she/he worked for a company that provided a bonus plan?",
                "options": [
                    { "id": "a", "text": "a. more conservative accounting policies" },
                    { "id": "b", "text": "b. less conservative accounting policies" },
                    { "id": "c", "text": "c. overall, accounting policies have no impact on bonus plans" },
                    { "id": "d", "text": "d. none of the above" }
                ],
                "correct": "b",
                "basmaga": "المدير اللي قدامه حوافز ومكافآت أرباح (bonus plan) هيختار سياسات محاسبية أقل تحفظاً (less conservative) عشان تطلع أرباح الورق كبيرة ومبهجة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>التحفظ المحاسبي الصارم (Conservatism) بيخفي ويقلل الأرباح الحالية احتياطاً. عشان كده المدير اللي له مكافأة مربوطة بالدخل هيختار سياسات أقل تحفظاً (Less conservative) عشان يعجل بظهور الإيرادات ويضخم رقم الربح السنوي لحسابه."
            },
            {
                "id": 40,
                "text": "Defined the theory as a coherent set of hypotheticals, conceptual and pragmatic principles forming the general framework of reference for a field of inquiry. [Model 1]",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Edward and bell (1961)" },
                    { "id": "e", "text": "e. Hendriksen (1970)" }
                ],
                "correct": "e",
                "basmaga": "توصيل الموديل الأول لعام 2019؛ التعريف الكبير المنظم للنظرية بإنها برنامج متكامل من المبادئ بيعمل إطار مرجعي عام (general framework of reference)، ده تعريف العالم هندريكسن Hendriksen (1970).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>هذا هو النص المعتمد صراحة لتعريف الباحث وعالم المحاسبة الشهير هندريكسن (Hendriksen 1970)؛ حيث صاغ النظرية بكونها مجموعة متسقة ومترابطة من المبادئ العلمية والعملية التي تشكل إطاراً مرجعياً عاماً للبحوث والممارسات."
            },
            {
                "id": 41,
                "text": "Stated that Positive Accounting Theory (PAT) is designed to explain and predict which firms will and which firms will not use a particular method but it says nothing as to which method a firm should use. [Model 1]",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Edward and bell (1961)" },
                    { "id": "e", "text": "e. Hendriksen (1970)" }
                ],
                "correct": "c",
                "basmaga": "توصيل الموديل الأول لعام 2019؛ السادة الواضعين لأساس نظرية الـ PAT وصاحبي مقولة تشرح وتتوقع ومبتقولش المفروض نختار إيه، هم واتس وزيمرمان Watts and Zimmerman (1986).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>المقولة دي والتعريف التجريبي ده هو البصمة الفكرية الخاصة بمؤسسي ومطوري نظرية المحاسبة الإيجابية (PAT) العالمين الكبار واتس وزيمرمان في كتابهم التاريخي الصادر عام 1986."
            },
            {
                "id": 42,
                "text": "Investigated stock market reaction to accounting earnings announcements. [Model 1]",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Edward and bell (1961)" },
                    { "id": "e", "text": "e. Hendriksen (1970)" }
                ],
                "correct": "b",
                "basmaga": "توصيل الموديل الأول لعام 2019؛ البحث التجريبي التاريخي لرصد ودراسة رد فعل سوق المال والبورصة لإعلانات الأرباح المحاسبية، ده شغل العالمين بول وبراون Ball and Brown (1968).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>العالمان (Ball and Brown 1968) هم أصحاب الفضل الأول في إدخال أبحاث الاستجابة السلوكية لأسواق المال وتفاعل البورصة مع الأرباح المعلنة للمرة الأولى في تاريخ الأدب المحاسبي."
            },
            {
                "id": 43,
                "text": "Defined the agency relationship as a contract under which one or more principals engage another person to perform some services on their behalf. [Model 1]",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Edward and bell (1961)" },
                    { "id": "e", "text": "e. Hendriksen (1970)" }
                ],
                "correct": "a",
                "basmaga": "توصيل الموديل الأول لعام 2019؛ التعريف الرسمي لعلاقة الوكالة بإنها عقد بيفوض فيه المالك سلطة اتخاذ القرار للمدير، ده شغل جينسن وميكلينج Jensen and Meckling (1976).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>التعريف القانوني والاقتصادي الصارم لعلاقة الوكالة (Agency relationship) كعقد تفويض وإنابة تمت صياغته وإطلاقه في الورقة البحثية الأشهر عالمياً للعلماء جينسن وميكلينج عام 1976."
            },
            {
                "id": 44,
                "text": "........... proposes that managers will elect to use a particular accounting method because this method reflects underlying firm performance. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "d",
                "basmaga": "الموديل الرابع لعام 2024؛ اختيار الطريقة المحاسبية لأنها تعكس بأمانة الأداء الاقتصادي الفعلي والحقيقي والناجح للشركة، ده منظور الكفاءة Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>منظور الكفاءة (Efficiency perspective) في الـ PAT بيفترض إن اختيار السياسات المحاسبية مش قايم على السرقة أو الانتهازية، بل بينبع من رغبة الإدارة في تقديم أصدق وأكفأ صورة تعبر عن حقيقة الأداء التشغيلي للمنشأة وتوفير التكاليف."
            },
            {
                "id": 45,
                "text": "Preparing financial statements is an example of: [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Bonding costs" },
                    { "id": "b", "text": "b. Residual costs" },
                    { "id": "c", "text": "c. Monitoring costs" },
                    { "id": "d", "text": "d. Political costs" },
                    { "id": "e", "text": "e. Replacement cost" }
                ],
                "correct": "a",
                "basmaga": "الموديل الرابع لعام 2024؛ تكاليف ومصاريف إعداد ونشر التقارير والحسابات الماليّة بانتظام هي المثال الصريح في المنهج لتكاليف الارتباط Bonding costs.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>تكاليف الارتباط (Bonding Costs) بيمثلها أي مصاريف بيتحملها المدير (Agent) طواعية ليثبت التزامه وأمانته وسيره وفق تطلعات الملاك، وإصدار وإعداد التقارير المالية الدورية (Preparing financial statements) هي المثال الرئيسي ليها في المنهج."
            },
            {
                "id": 46,
                "text": "........... is a deficiency in a loan agreement that arises not from a failure to make payments as promised, but from a failure to uphold some other aspect of the loan terms. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Constraints" },
                    { "id": "b", "text": "b. Price protection" },
                    { "id": "c", "text": "c. Contracts" },
                    { "id": "d", "text": "d. Covenants" },
                    { "id": "e", "text": "e. Technical default" }
                ],
                "correct": "e",
                "basmaga": "الموديل الرابع لعام 2024؛ الإخلال والمخالفة لشروط بنود عقد القرض من غير ما نكون اتأخرنا في دفع الأقساط (failure to uphold some other aspect) ده مصطلح التعثر الفني Technical default.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>التعثر والافتراض الفني (Technical default) بيحصل لما الشركة تخل بـ شرط مالي محاسبي مسجل في العقد (زي تخطي النسبة المسموحة للديون) برغم إنها ملتزمة وبتدفع الأقساط والفوائد للبنك في مواعيدها بانتظام، وده مؤشر خطر بيعطي الحق للبنك برفع الفائدة."
            }
        ]
    },

    "accounting_programs_exam_model_8": {
        "title": "الامتحان الثامن: بنك أسئلة شابتر 8 الكامل للنظريات القائمة على الأنظمة",
        "description": "بسم الله وأبدأ - بنك الأسئلة الشامل لأسئلة البابل شيت الخاصة بنظريات الشرعية، أصحاب المصلحة، والنظرية المؤسسية والمسؤولية المجتمعية CSR",
        "questions": [
            {
                "id": 1,
                "text": "............. discusses the expectation of a society in general, while .............. provides a refined resolution by referring to particular groups within society.",
                "options": [
                    { "id": "a", "text": "a- Stakeholder theory, legitimacy theory" },
                    { "id": "b", "text": "b- Legitimacy theory, stakeholder theory" },
                    { "id": "c", "text": "c- Legitimacy theory, institutional theory" },
                    { "id": "d", "text": "d- Institutional theory, stakeholder theory" }
                ],
                "correct": "b",
                "basmaga": "لمحت كلمة المجتمع بشكل عام (society in general) يبقى دي الشرعية Legitimacy، وكلمة مجموعات معينة (particular groups) يبقى دي أصحاب المصلحة Stakeholder، اختار الترتيب b.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Legitimacy theory, stakeholder theory</strong><br><br>نظرية الشرعية بتتعامل مع المجتمع ككتلة واحدة وعقد اجتماعي عام، بينما نظرية أصحاب المصلحة بتقدم تحليل أكثر تفصيلاً وبتقسم المجتمع لمجموعات وفئات منفصلة لكل فئة توقعاتها الخاصة."
            },
            {
                "id": 2,
                "text": "............. is a generalized perception that the actions of an entity are desirable or appropriate within some socially constructed system of norms and values.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy" },
                    { "id": "b", "text": "b- Legitimation" },
                    { "id": "c", "text": "c- Legitimacy gap" },
                    { "id": "d", "text": "d- Social contract" }
                ],
                "correct": "a",
                "basmaga": "لمحت الجملة الرسمية للقبول العام والادراك العام بأن أفعال الشركة مرغوبة ومناسبة للمجتمع (generalized perception ... desirable or appropriate) اختار الشرعية Legitimacy صراحة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Legitimacy</strong><br><br>ده التعريف الأكاديمي المعتمد لمفهوم الشرعية (Legitimacy)؛ بإنها إدراك أو افتراض عام بأن أنشطة وأفعال المنشأة مرغوبة وملائمة ومناسبة ضمن منظومة القيم والأعراف المبنية اجتماعياً."
            },
            {
                "id": 3,
                "text": "............., ............., and ............. while enrich, rather than compete for, our understanding of CSR practices, provides a complementary perspective in understanding how management responds to changing social and environmental pressures and expectations.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy theory, institutional theory, stakeholder theory" },
                    { "id": "b", "text": "b- Stakeholder theory, institutional theory, legitimacy theory" },
                    { "id": "c", "text": "c- Legitimacy theory, stakeholder theory, institutional theory" },
                    { "id": "d", "text": "d- All of the above theories complement our understanding of CSR practices to the same degree" }
                ],
                "correct": "c",
                "basmaga": "الثلاثية الشهيرة للنظريات البديلة اللي بتكمل بعضها لفهم الإفصاح البيئي والاجتماعي CSR، رتبهم بالترتيب الكلاسيكي للمنهج: الشرعية، أصحاب المصلحة، ثم المؤسسية الخيار c.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Legitimacy theory, stakeholder theory, institutional theory</strong><br><br>تنص أدبيات المحاسبة على أن النظريات الثلاث (الشرعية، أصحاب المصلحة، والمؤسسية) هي نظريات متكاملة ومترابطة (Complementary) وليست متنافسة، وبتساعد معاً في تفسير استجابة الإدارة للضغوط البيئية والمجتمعية الكلية."
            },
            {
                "id": 4,
                "text": "............. complement that management will be likely to attend to the expectations of particular stakeholders, while ............. holds that all stakeholders have minimum rights that must not be violated.",
                "options": [
                    { "id": "a", "text": "a- The managerial perspective, the normative perspective" },
                    { "id": "b", "text": "b- The normative perspective, the managerial perspective" },
                    { "id": "c", "text": "c- Both reflect the normative perspective of stakeholders" },
                    { "id": "d", "text": "d- Both reflect the managerial perspective of stakeholders" }
                ],
                "correct": "a",
                "basmaga": "تلبية طلبات فئات معينة قوية ده المنظور الإداري Managerial، والقول بأن الكل له حد أدنى من الحقوق المحمية ده المنظور الأخلاقي المعياري Normative، اختار الترتيب a.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) The managerial perspective, the normative perspective</strong><br><br>الفرع الإداري (Managerial) لنظرية أصحاب المصلحة بيركز على إرضاء الفئات القوية والمؤثرة للحفاظ على بقاء الشركة، بينما الفرع الأخلاقي المعياري (Normative/Ethical) بيفترض إن لكل الفئات حقوقاً دنيا ثابتة يجب عدم انتهاكها بغض النظر عن الأرباح الكاش."
            },
            {
                "id": 5,
                "text": "The situation that appears to be the difference between how society believes an organization should act and how it is perceived that the organization has acted is referred to as:",
                "options": [
                    { "id": "a", "text": "a- Legitimacy" },
                    { "id": "b", "text": "b- Legitimation" },
                    { "id": "c", "text": "c- Legitimacy gap" },
                    { "id": "d", "text": "d- Social contract" }
                ],
                "correct": "c",
                "basmaga": "لمحت كلمة الاختلاف أو الفجوة بين توقعات المجتمع وتصرفات الشركة الفعلية (difference between how society believes ... and how it is perceived) اختار فجوة الشرعية Legitimacy gap.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Legitimacy gap</strong><br><br>فجوة الشرعية (Legitimacy gap) بتعبر عن وجود مساحة اختلاف وعدم تطابق بين تطلعات وأعراف المجتمع وبين ما يدركه المجتمع فعلياً عن ممارسات وانحرافات الشركة، وتوسعها يهدد بقاء المنشأة."
            },
            {
                "id": 6,
                "text": "The more uncertain the relationship between means and ends, the greater the extent to which company will model itself after companies it perceives to be successful.",
                "options": [
                    { "id": "a", "text": "a- Mimetic isomorphism" },
                    { "id": "b", "text": "b- Coercive isomorphism" },
                    { "id": "c", "text": "c- Normative isomorphism" },
                    { "id": "d", "text": "d- Decoupling" }
                ],
                "correct": "a",
                "basmaga": "لمحت كلمة عدم يقين وظروف غامضة (more uncertain) وبناءً عليه الشركة هتقلد الشركات الناجحة (model itself after successful) دي المحاكاة والتقليد الأعمى Mimetic isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Mimetic isomorphism</strong><br><br>التماثل بالمحاكاة (Mimetic Isomorphism) بيحصل جوه النظرية المؤسسية لما تعيش الشركة في بيئة غامضة وفيها عدم يقين (Uncertainty)، فبتروح تقلد الشركات الناجحة والكبيرة في قطاعها عشان تحمي نفسها وتبان مستقرة."
            },
            {
                "id": 7,
                "text": "............. argues that organizations that deviate from being ............. a form will potentially have problems in gaining and retaining legitimacy.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy theory" },
                    { "id": "b", "text": "b- Institutional theory" },
                    { "id": "c", "text": "c- Stakeholder theory" },
                    { "id": "d", "text": "d- (a & b)" }
                ],
                "correct": "b",
                "basmaga": "النظرية اللي بتقول إن الانحراف عن الشكل المؤسسي المتعارف عليه بيعمل مشاكل في نيل الشرعية (deviate from being ... a form) دي النظرية المؤسسية Institutional theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Institutional theory</strong><br><br>النظرية المؤسسية (Institutional Theory) بتثبت إن المنظمات لازم تتشابه وتتماثل مع الأشكال المعتمدة مجتمعياً ومؤسسياً، وإن أي انحراف (Deviate) عن الأشكال دي هيعرض المنشأة لرفض مؤسسي ومشاكل في نيل الشرعية."
            },
            {
                "id": 8,
                "text": "............. is related to the managerial branch of stakeholder theory, while organizations will address and respond to concerns of most powerful stakeholders.",
                "options": [
                    { "id": "a", "text": "a- Mimetic isomorphism" },
                    { "id": "b", "text": "b- Coercive isomorphism" },
                    { "id": "c", "text": "c- Normative isomorphism" },
                    { "id": "d", "text": "d- Decoupling" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "الارتباط الصريح بالفرع الإداري والاستجابة لأصحاب المصلحة الأقوياء المسيطرين (managerial branch ... most powerful stakeholders) ده التماثل القسري الإجباري Coercive isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Coercive isomorphism</strong><br><br>التماثل القسري والإجباري (Coercive Isomorphism) بيرتبط بالفرع الإداري لنظرية أصحاب المصلحة؛ لأن التغيير جوه الشرك بيحصل نتيجة ضغوط وتهديدات قسرية مفروضة عليك من جهات قوية بتتحكم في مواردك."
            },
            {
                "id": 9,
                "text": "............. explores how particular forms might be adopted to bring legitimacy to the organization, while ............. discusses how particular disclosure strategies might be undertaken to maintain legitimacy.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy theory, institutional theory" },
                    { "id": "b", "text": "b- Institutional theory, legitimacy theory" },
                    { "id": "c", "text": "c- Both reflect concepts behind the institutional theory" },
                    { "id": "d", "text": "d- Both reflect concepts behind the legitimacy theory" }
                ],
                "correct": "b",
                "basmaga": "تبني أشكال تنظيمية وهياكل (particular forms adopted) ده شغل المؤسسية Institutional، واستخدام إستراتيجيات تقارير وإفصاح (disclosure strategies) ده شغل نظرية الشرعية Legitimacy، اختار الترتيب b.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Institutional theory, legitimacy theory</strong><br><br>النظرية المؤسسية بتهتم بكيفية تبني الهياكل التنظيمية لتتوافق مع البيئة، بينما نظرية الشرعية بتركز أكتر على استخدام إستراتيجيات التقارير السنوية والإفصاح الطوعي كأداة للتأثير على رأي وإدراك المجتمع."
            },
            {
                "id": 10,
                "text": "Multitude of implicit and explicit expectations that society has about how organizations should conduct.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy" },
                    { "id": "b", "text": "b- Legitimation" },
                    { "id": "c", "text": "c- Legitimacy gap" },
                    { "id": "d", "text": "d- Social contract" }
                ],
                "correct": "d",
                "basmaga": "حزمة ومجموعة التوقعات الصريحة المكتوبة والضمنية المفهومة من المجتمع لعمل الشركة (implicit and explicit expectations) ده المفهوم الحرفي لـ العقد الاجتماعي Social contract.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Social contract</strong><br><br>العقد الاجتماعي (Social contract) هو مصطلح بيعبر عن مجموعة التوقعات الكلية للمجتمع تجاه الشركة؛ وبتشمل شروطاً صريحة ممثلة في القوانين والتشريعات، وشروطاً ضمنية غير مكتوبة بتمثلها قيم وأعراف المجتمع."
            },
            {
                "id": 11,
                "text": "The greater the centralization of a company's resources supply, the greater the extent to which the company will change to resemble to whom it depends for resources.",
                "options": [
                    { "id": "a", "text": "a- Mimetic isomorphism" },
                    { "id": "b", "text": "b- Coercive isomorphism" },
                    { "id": "c", "text": "c- Normative isomorphism" },
                    { "id": "d", "text": "d- Decoupling" },
                    { "id": "e", "text": "e- none of the above" }
                ],
                "correct": "b",
                "basmaga": "كل ما زاد تمركز واعتماد الشركة على جهة معينة في الموارد (depends for resources) كل ما انجبرت تقلدها وتسمع كلامها قسرياً، ده التماثل القسري Coercive isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Coercive isomorphism</strong><br><br>التماثل القسري (Coercive Isomorphism) بينص على أنه كلما زاد اعتماد المنشأة على جهة خارجية معينة لتوفير الموارد الحيوية، كلما انصاعت مجبرة لتعديل ممارساتها لتشابه وتطابق شروط وتوقعات هذه الجهة."
            },
            {
                "id": 12,
                "text": "............. argues that the organization structure and practices tend to become similar in order to conform to what society considers to be normal.",
                "options": [
                    { "id": "a", "text": "a- Legitimacy theory" },
                    { "id": "b", "text": "b- Stakeholder theory" },
                    { "id": "c", "text": "c- Institutional theory" },
                    { "id": "d", "text": "d- none of the above" }
                ],
                "correct": "c",
                "basmaga": "القول بأن هياكل وممارسات الشركات بتميل إنها تصبح متشابهة ومتطابقة لمحاكاة الطبيعي (tend to become similar) ده جوهر وميدان النظرية المؤسسية Institutional theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Institutional theory</strong><br><br>النظرية المؤسسية (Institutional theory) بتدرس ظاهرة التماثل والتشابه التنظيمي (Isomorphism)، وبتفسر ليه الشركات العاملة في نفس القطاع بتصبح هياكلها وممارساتها متشابهة مع الوقت لتلبية شروط البيئة المحيطة."
            },
            {
                "id": 13,
                "text": "Accounting disclosure policies are considered to constitute a strategy to influence the organization's relationships with other parties with which it interacts according to:",
                "options": [
                    { "id": "a", "text": "a- agency theory" },
                    { "id": "b", "text": "b- positive accounting theory" },
                    { "id": "c", "text": "c- system-oriented theories" },
                    { "id": "d", "text": "d- normative accounting theory" }
                ],
                "correct": "c",
                "basmaga": "اعتبار سياسات التقارير والإفصاح عبارة عن إستراتيجية تواصل لتنظيم وتوجيه علاقة المنشأة بالفئات المحيطة، ده فكر النظريات القائمة على الأنظمة system-oriented theories.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) system-oriented theories</strong><br><br>وفقاً للنظريات القائمة على الأنظمة (كالشرعية وأصحاب المصلحة)، الإفصاح المحاسبي مش مجرد أرقام، ده إستراتيجية هادفة وموجهة للتأثير على علاقة الشركة المفتوحة بالأطراف المختلفة جوه البيئة والمجتمع."
            },
            {
                "id": 14,
                "text": "Context: Choose from the following options (a. legitimacy | b. Legitimation | c. Legitimacy gap | d. Social contract | e. Decoupling).\n\nQuestion: Lack of correspondence between how society believes an organization should act and how it is perceived that the organization has acted.",
                "options": [
                    { "id": "a", "text": "a. legitimacy" },
                    { "id": "b", "text": "b. Legitimation" },
                    { "id": "c", "text": "c. Legitimacy gap" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "c",
                "basmaga": "سؤال قائمة التوصيل: غياب وعدم تطابق توقعات المجتمع مع الإدراك الفعلي لتصرفات الشركة (Lack of correspondence) دي فجوة الشرعية Legitimacy gap.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Legitimacy gap</strong><br><br>عدم التطابق أو الفجوة (Lack of correspondence) بين تطلعات وأحكام المجتمع وبين السلوك المدرك للشركة يمثل التوصيف الدقيق لفجوة الشرعية (Legitimacy gap)."
            },
            {
                "id": 15,
                "text": "Context: Choose from the following options (a. legitimacy | b. Legitimation | c. Legitimacy gap | d. Social contract | e. Decoupling).\n\nQuestion: Multitude of implicit and explicit expectations that society has about how an organization should conduct its operations.",
                "options": [
                    { "id": "a", "text": "a. legitimacy" },
                    { "id": "b", "text": "b. Legitimation" },
                    { "id": "c", "text": "c. Legitimacy gap" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "d",
                "basmaga": "سؤال قائمة التوصيل: حزمة التوقعات المكتوبة وغير المكتوبة لعمليات الشركة (Multitude of implicit and explicit expectations) ده العقد الاجتماعي Social contract.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Social contract</strong><br><br>التعريف الرسمي الشامل لمصطلح العقد الاجتماعي (Social contract)؛ بكونه يمثل شبكة التوقعات والالتزامات الصريحة والضمنية المتبادلة بين المنشأة والمجتمع المحيط."
            },
            {
                "id": 16,
                "text": "Context: Choose from the following options (a. legitimacy | b. Legitimation | c. Legitimacy gap | d. Social contract | e. Decoupling).\n\nQuestion: The generalized perception that an entity's actions are desirable or appropriate within some socially constructed system of norms and values.",
                "options": [
                    { "id": "a", "text": "a. legitimacy" },
                    { "id": "b", "text": "b. Legitimation" },
                    { "id": "c", "text": "c. Legitimacy gap" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "a",
                "basmaga": "سؤال قائمة التوصيل: الإدراك العام السائد بأن تصرفات المنشأة سليمة ومقبولة قِيَمياً (generalized perception ... desirable or appropriate) دي الشرعية Legitimacy.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) legitimacy</strong><br><br>هذا هو النص الأساسي لتعريف حالة الشرعية (Legitimacy) كبناء اجتماعي يعبر عن مدى ملاءمة ومقبولية تصرفات الكيان داخل بيئة المجتمع."
            },
            {
                "id": 17,
                "text": "Context: Choose from the following options (a. legitimacy | b. Legitimation | c. Legitimacy gap | d. Social contract | e. Decoupling).\n\nQuestion: The process that leads an organization being adjudged as legitimate is:",
                "options": [
                    { "id": "a", "text": "a. legitimacy" },
                    { "id": "b", "text": "b. Legitimation" },
                    { "id": "c", "text": "c. Legitimacy gap" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "b",
                "basmaga": "سؤال قائمة التوصيل: لمحت كلمة العملية والخطوات اللي بتؤدي للحكم بالشرعية (The process that leads) دي عملية إضفاء الشرعية Legitimation.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Legitimation</strong><br><br>العملية الديناميكية والخطوات التكتيكية (Process) التي تمارسها المنشأة لإقناع ونيل اعتراف المجتمع بشرعيتها تسمى عملية إضفاء وإكساب الشرعية (Legitimation)."
            },
            {
                "id": 18,
                "text": "Context: Choose from the following options (a. legitimacy | b. Legitimation | c. Legitimacy gap | d. Social contract | e. Decoupling).\n\nQuestion: A status exists when an entity's value system is congruent with the value system of the social system.",
                "options": [
                    { "id": "a", "text": "a. legitimacy" },
                    { "id": "b", "text": "b. Legitimation" },
                    { "id": "c", "text": "c. Legitimacy gap" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "a",
                "basmaga": "سؤال قائمة التوصيل: الحالة والوضع اللي بيتطابق فيه نظام قيم المنشأة مع النظام الاجتماعي (status exists ... value system is congruent) دي حالة الشرعية legitimacy.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) legitimacy</strong><br><br>توصيف حالة الشرعية كوصف ساكن (Status) يعبر عن حدوث توافق وتطابق قيمي (Congruent) بين أهداف الكيان وأعراف النظام الاجتماعي المحيط."
            },
            {
                "id": 19,
                "text": "Context: Choose from the following options (a. Isomorphism | b. Coercive Isomorphism | c. Normative Isomorphism | d. Mimetic Isomorphism | e. Decoupling).\n\nQuestion: The situation in which the formal organizational practice is separate from actual organizational practices.",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Coercive Isomorphism" },
                    { "id": "c", "text": "c. Normative Isomorphism" },
                    { "id": "d", "text": "d. Mimetic Isomorphism" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "e",
                "basmaga": "سؤال قائمة التوصيل ٢: الممارسات الشكلية الظاهرية منفصلة تماماً عن كواليس الشغل الفعلي جوه مكاتب الشركة (formal is separate from actual) ده الفصل الظاهري Decoupling.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Decoupling</strong><br><br>الفصل التنظيمي الظاهري (Decoupling) يعني إظهار هياكل معينة للمجتمع لنيل القبول والشرعية، بينما تدار الممارسات الفعلية في الخفاء بصورة منفصلة (Separate) تماماً."
            },
            {
                "id": 20,
                "text": "Context: Choose from the following options (a. Isomorphism | b. Coercive Isomorphism | c. Normative Isomorphism | d. Mimetic Isomorphism | e. Decoupling).\n\nQuestion: The more the uncertainty, the greater the extent to which the company will model itself to companies it perceives to be successful.",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Coercive Isomorphism" },
                    { "id": "c", "text": "c. Normative Isomorphism" },
                    { "id": "d", "text": "d. Mimetic Isomorphism" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "d",
                "basmaga": "سؤال قائمة التوصيل ٢: تلمح زيادة ظروف عدم اليقين والغموض والشركة تروح تقلد الناجحين (uncertainty ... model itself to successful) دي المحاكاة والتقليد Mimetic Isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Mimetic Isomorphism</strong><br><br>التماثل بالمحاكاة والتقليد (Mimetic Isomorphism) ينتج بدافع الغموض البيئي، حيث تلجأ المنشأة لنسخ وتقليد نماذج وهياكل المنظمات الناجحة لحماية مركزها التنظيمي."
            },
            {
                "id": 21,
                "text": "Context: Choose from the following options (a. Isomorphism | b. Coercive Isomorphism | c. Normative Isomorphism | d. Mimetic Isomorphism | e. Decoupling).\n\nQuestion: relates to the pressures from group norms and standards to adopt particular institutional practices.",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Coercive Isomorphism" },
                    { "id": "c", "text": "c. Normative Isomorphism" },
                    { "id": "d", "text": "d. Mimetic Isomorphism" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "c",
                "basmaga": "سؤال قائمة التوصيل ٢: تلمح كلمة ضغوط وأعراف مهنية أو جماعية مشتركة (pressures from group norms) من اسمها norm اختار التماثل المعياري Normative Isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Normative Isomorphism</strong><br><br>التماثل المعياري (Normative Isomorphism) ينشأ مدفوعاً بضغوط الأعراف الأكاديمية والمهنية المشتركة (Group norms) والقيم الثقافية التي تفرض شبهاً تنظيمياً معيناً."
            },
            {
                "id": 22,
                "text": "Context: Choose from the following options (a. Isomorphism | b. Coercive Isomorphism | c. Normative Isomorphism | d. Mimetic Isomorphism | e. Decoupling).\n\nQuestion: Particular groups with particular training will tend to adopt similar practices, or else appear to be out of line with their group.",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Coercive Isomorphism" },
                    { "id": "c", "text": "c. Normative Isomorphism" },
                    { "id": "d", "text": "d. Mimetic Isomorphism" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "c",
                "basmaga": "سؤال قائمة التوصيل ٢: فئات معينة نالت تدريباً مهنياً تخصصياً موحداً فبتميل لتبني ممارسات متشابهة (particular training ... adopt similar practices) ده التماثل المعياري المعتمد Normative Isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Normative Isomorphism</strong><br><br>التدريب المهني الموحد (Particular training) والزمالات والمناهج المشتركة تفرز نمطاً فكرياً موحداً يجعل الخريجين يتبنون ممارسات متشابهة تندرج تحت التماثل المعياري (Normative)."
            },
            {
                "id": 23,
                "text": "Context: Choose from the following options (a. Isomorphism | b. Coercive Isomorphism | c. Normative Isomorphism | d. Mimetic Isomorphism | e. Decoupling).\n\nQuestion: Related to the managerial branch of stakeholder theory, where organizations will address and respond to concerns of most powerful stakeholders.",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Coercive Isomorphism" },
                    { "id": "c", "text": "c. Normative Isomorphism" },
                    { "id": "d", "text": "d. Mimetic Isomorphism" },
                    { "id": "e", "text": "e. Decoupling" }
                ],
                "correct": "b",
                "basmaga": "سؤال قائمة التوصيل ٢: الارتباط الحتمي بالفرع الإداري وإرضاء الجهات القوية المؤثرة مجتمعياً (managerial branch ... most powerful stakeholders) ده التماثل القسري الإجباري Coercive Isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Coercive Isomorphism</strong><br><br>التماثل الإجباري القسري (Coercive Isomorphism) يتم بتحفيز وضغط قسري خارجي مباشر أو غير مباشر من أصحاب المصالح الأقوياء المسيطرين على بيئة وموارد بقاء المنشأة."
            },
            {
                "id": 24,
                "text": "In relation to Political Economy Theory, which of the following statements is false?",
                "options": [
                    { "id": "a", "text": "A. Political Economy Theory views society, politics and economics as inseparable" },
                    { "id": "b", "text": "B. Political Economy Theory is derived from Positive Accounting Theory" },
                    { "id": "c", "text": "C. Legitimacy Theory and Stakeholder Theory are derived from Political Economy Theory" },
                    { "id": "d", "text": "D. Political Economy Theory can be divided into 'classical' and 'bourgeois' political economy theories" }
                ],
                "correct": "b",
                "basmaga": "بيسأل عن العبارة الغلط عن الاقتصاد السياسي، الجملة B غلط لأن الاقتصاد السياسي هو الأب الكبير لنظريات الأنظمة ومش مشتق من الـ PAT.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (B)</strong><br><br>العبارة B خاطئة تماماً (False)؛ لأن نظرية الاقتصاد السياسي (Political Economy Theory) هي المظلة الفكرية الشاملة المستقلة المشتق منها نظريات الشرعية وأصحاب المصلحة، وليست تابعة أو مشتقة من نظرية الـ PAT الاقتصادية."
            },
            {
                "id": 25,
                "text": "The idea of the 'social contract' is that corporations only exist because they benefit:",
                "options": [
                    { "id": "a", "text": "A. Shareholders" },
                    { "id": "b", "text": "B. Governments" },
                    { "id": "c", "text": "C. Managers" },
                    { "id": "d", "text": "D. Society" }
                ],
                "correct": "d",
                "basmaga": "فكرة العقد الاجتماعي الجوهرية؛ تفترض إن الشركات وجِدت وسمح لها بالوجود في الأصل لخدمة ومنفعة المجتمع ككل Society.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (D)</strong><br><br>فلسفة العقد الاجتماعي (Social contract) تتبنى أساساً فكرياً مفاده أن المجتمع يمنح المنشأة حق الوجود القانوني والتشغيلي بشرط تقديم منافع وخدمات ورعاية للمجتمع ككل (Society) وليس للمستثمرين فقط."
            },
            {
                "id": 26,
                "text": "The difference between Positive Accounting Theory and Legitimacy Theory is that:",
                "options": [
                    { "id": "a", "text": "A. Legitimacy Theory does not rely on the assumption that all action is driven by individual self-interest" },
                    { "id": "b", "text": "B. Legitimacy Theory makes no assumptions about the efficiency of markets" },
                    { "id": "c", "text": "C. Legitimacy Theory suggests that organisations have a 'social contract' with society" },
                    { "id": "d", "text": "D. All of the given options are correct" }
                ],
                "correct": "d",
                "basmaga": "أوجه الاختلاف والتمايز بين نظرية الـ PAT ونظرية الشرعية؛ الثلاث جمل صحيحة ومعبرة جداً فاختار الاختيار الشامل الدسم d.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (D)</strong><br><br>كل الخيارات صحيحة؛ نظرية الشرعية تختلف عن الـ PAT بإنها لا تشترط تحرك البشر بالأنانية والمصلحة الضيقة فقط، ولا تشترط كفاءة البورصة وأسواق المال، وتضيف فكرة وجود عقد اجتماعي عام يربط المنشأة بالبيئة."
            },
            {
                "id": 27,
                "text": "The moral perspective of Stakeholder Theory holds that all stakeholders have the right to be treated fairly by an organisation:",
                "options": [
                    { "id": "a", "text": "A. Provided this improves the organisation's financial performance" },
                    { "id": "b", "text": "B. Regardless of the impact on the organisation's financial performance" },
                    { "id": "c", "text": "C. Because, in the long run, this will improve the organisation's financial performance" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "المنظور الأخلاقي المعياري لنظرية أصحاب المصلحة؛ بيوجب معاملة الكل بعدل وإنصاف بغض النظر عن الأثر على الأرباح والفلوس (Regardless of the impact on financial performance).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (B)</strong><br><br>الفرع الأخلاقي/المعاري لنظرية أصحاب المصلحة ينص على وجوب إدارة البيزنس لعدالة الجميع بإنصاف، بغض النظر والاهتمام (Regardless) عما إذا كان هذا التوجه سيرفع الأرباح المالية للشركة أم سيخفضها."
            },
            {
                "id": 28,
                "text": "Managerial Stakeholder Theory suggests that annual reports will be used to:",
                "options": [
                    { "id": "a", "text": "A. Gain the support of powerful stakeholders" },
                    { "id": "b", "text": "B. Report on the activities of management with respect to each stakeholder" },
                    { "id": "c", "text": "C. Explain why profits may have been sacrificed in order to respect the minimum rights of some stakeholders" },
                    { "id": "d", "text": "D. All of the given options are correct" }
                ],
                "correct": "a",
                "basmaga": "الفرع الإداري لنظرية أصحاب المصلحة؛ بيفترض دائمًا استخدام التقارير السنوية كأداة إستراتيجية لكسب تأييد ودعم المجموعات القوية المسيطرة (Gain the support of powerful stakeholders).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (A)</strong><br><br>وفقاً للفرع الإداري العملي (Managerial branch)، التقارير المحاسبية والبيئية السنوية توظفها المنشأة بذكاء لكسب دعم وموافقة (Gain support) المجموعات القوية المسيطرة على مصادر تمويل وبقاء الشركة وتشتيت معارضتهم."
            },
            {
                "id": 29,
                "text": "The stakeholder view of social responsibility states that organisations must respond to the needs of:",
                "options": [
                    { "id": "a", "text": "a. employees and customers" },
                    { "id": "b", "text": "b. shareholders and owners" },
                    { "id": "c", "text": "c. all interested parties" },
                    { "id": "d", "text": "d. all those who might sue the organisation" }
                ],
                "correct": "c",
                "basmaga": "منظور أصحاب المصلحة للمسؤولية الاجتماعية بيوجب على الشركة الاستجابة لطلبات وتطلعات كل الفئات والأطراف المهتمة بالعمل وسير المشروع (all interested parties).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>منظور أصحاب المصلحة الشامل بيؤكد إن المنشأة ليست معزولة، بل يجب أن تلبي وتستجيب لتطلعات كل الفئات المتأثرة والمؤثرة في البيئة، وهم جميع الأطراف المهتمة (all interested parties)."
            },
            {
                "id": 30,
                "text": "Which of the following is false?",
                "options": [
                    { "id": "a", "text": "A. Isomorphism refers to the adaptation of an institutional practice by an organisation" },
                    { "id": "b", "text": "B. Normative isomorphism is when organisations adopt particular institutional practices" },
                    { "id": "c", "text": "C. Coercive isomorphism is when organisations change their practices due to stakeholder pressure" },
                    { "id": "d", "text": "D. Mimetic isomorphism is when organisations copy the institutional practices of other organisations for competitive advantage practices" }
                ],
                "correct": "b",
                "basmaga": "بيسأل عن الجملة الخاطئة في الاختيارات؛ الجملة B غلط لأنها عرفت التماثل المعياري بشكل عام ومططت المعنى وطمست دور ضغوط وأعراف الجماعة والمهنة المشتركة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (B)</strong><br><br>العبارة B هي العبارة الخاطئة والمطلوبة؛ لأن التماثل المعياري (Normative isomorphism) ينبع صراحة وحصرياً من ضغوط الأعراف الأكاديمية والتدريب المهني والقيم الجماعية للمهنة، وليس مجرد تبني عام للممارسات."
            },
            {
                "id": 31,
                "text": "An organisation disclosing social and environmental information because a competitor was gaining a competitive advantage by doing so, is an example of:",
                "options": [
                    { "id": "a", "text": "A. Mimetic isomorphism" },
                    { "id": "b", "text": "B. Coercive isomorphism" },
                    { "id": "c", "text": "C. Normative isomorphism" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "a",
                "basmaga": "شركة بتطلع تقارير بيئية واجتماعية لمجرد إن في منافس ليها عمل كده وكسب ميزة سوقية (because a competitor was gaining), تقليد المنافس هو تماثل بمحاكاة Mimetic isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (A)</strong><br><br>عندما تقوم المنشأة بنسخ وتتبع وتقليد تصرفات وممارسات المنافسين السعداء والناجحين في قطاعها لنيل نفس الميزة الاستراتيجية، فإن هذا السلوك يمثل حالة تماثل بالمحاكاة (Mimetic isomorphism)."
            },
            {
                "id": 32,
                "text": "An organisation disclosing social and environmental information in response to societal expectations is an example of:",
                "options": [
                    { "id": "a", "text": "A. Mimetic isomorphism" },
                    { "id": "b", "text": "B. Coercive isomorphism" },
                    { "id": "c", "text": "C. Normative isomorphism" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "إخراج ونشر تقارير بيئية استجابةً وتماشياً مع ضغوط وتوقعات قيم المجتمع الكلي المحيط (in response to societal expectations) يندرج تحت التماثل القسري الثقافي Coercive isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (B)</strong><br><br>تعديل ممارسات وإفصاح الشركة تحت وطأة وتأثير التوقعات الثقافية والمجتمعية الكلية الملزمة يمثل امتداداً للتماثل القسري والإجباري البيئي (Coercive isomorphism)."
            },
            {
                "id": 33,
                "text": "An organisation disclosing social and environmental information in response to shareholder demands is an example of:",
                "options": [
                    { "id": "a", "text": "A. Mimetic isomorphism" },
                    { "id": "b", "text": "B. Coercive isomorphism" },
                    { "id": "c", "text": "C. Normative isomorphism" },
                    { "id": "d", "text": "D. None of the given options is correct" }
                ],
                "correct": "b",
                "basmaga": "نشر بيانات بيئية واجتماعية نتيجة ضغوط وطلبات صريحة من مساهمي وملاك الشركة الأقوياء (in response to shareholder demands) ده تماثل قسري وإجباري Coercive isomorphism.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (B)</strong><br><br>الرضوخ والاستجابة لمطالب واشتراطات فئة قوية بتتحكم في موارد تمويل الشركة كالمساهمين يمثل تطبيقاً عملياً مباشراً للتماثل القسري التنظيمي (Coercive isomorphism)."
            },
            {
                "id": 34,
                "text": "The acronym CSR stands for:",
                "options": [
                    { "id": "a", "text": "a. Corporate Search and Rescue" },
                    { "id": "b", "text": "b. Corporate Social Responsibility" },
                    { "id": "c", "text": "c. Corporate Sensitive Reliability" },
                    { "id": "d", "text": "d. Corporate Social Reality" }
                ],
                "correct": "b",
                "basmaga": "تفكيك الاختصار الشهير والمحوري للشابتر بالكامل؛ الـ CSR هو المسؤولية الاجتماعية والبيئية للشركات Corporate Social Responsibility.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>المصطلح العالمي المعتمد للاختصار المحاسبي والمجتمعي الشهير الـ (CSR) هو المسؤولية الاجتماعية للشركات والمؤسسات (Corporate Social Responsibility)."
            },
            {
                "id": 35,
                "text": "All those who are affected by or can affect the operations of the organization are known as:",
                "options": [
                    { "id": "a", "text": "a. Owners" },
                    { "id": "b", "text": "b. interested parties" },
                    { "id": "c", "text": "c. stakeholders" },
                    { "id": "d", "text": "d. stockholders" }
                ],
                "correct": "c",
                "basmaga": "التعريف الكلاسيكي الحرفي لكل من يؤثر أو يتأثر بقرارات وعمليات المنشأة (affected by or can affect) هم أصحاب المصلحة stakeholders.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>هذا هو التعريف النظامي التام الشامل المعتمد لمفهوم وفئة أصحاب المصلحة (Stakeholders)؛ ويشمل كل فرد أو جماعة تقع في محيط تأثير وتأثر أنشطة وأهداف الكيان."
            },
            {
                "id": 36,
                "text": "............. arises where organisations change their institutional practices because of (formal and informal) pressure from powerful stakeholders or the Culture expectations in society within which organisations operates. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Coercive Isomorphic" },
                    { "id": "b", "text": "b. Legitimacy gap" },
                    { "id": "c", "text": "c. Decoupling" },
                    { "id": "d", "text": "d. Mimetic Isomorphic" },
                    { "id": "e", "text": "e. Normative Isomorphic" }
                ],
                "correct": "a",
                "basmaga": "أسئلة الموديل الرابع لعام 2024: حدوث ضغوط رسمية وغير رسمية من أصحاب مصالح أقوياء لتغيير ممارساتك (pressure from powerful stakeholders) ده التماثل القسري Coercive Isomorphic.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>التماثل القسري (Coercive Isomorphism) يقع تحت إمرة وتأثير الضغوطات الرسمية وغير الرسمية التي تفرضها الأطراف القوية أو الثقافات السائدة لتجبر الكيان على تعديل وتنميط ممارساته الدفترية التنظيمية."
            },
            {
                "id": 37,
                "text": "............. explain why organizations make certain CSR disclosures or voluntarily corporate disclosures within their annual reports. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Normative accounting theory" },
                    { "id": "c", "text": "c. Efficient Markets Hypothesis" },
                    { "id": "d", "text": "d. Positive accounting theory" },
                    { "id": "e", "text": "e. System-oriented theories" }
                ],
                "correct": "e",
                "basmaga": "الموديل الرابع لعام 2024: عيلة النظريات اللي بتفسر وبتشرح ليه المنشآت بتعمل إفصاح طوعي وبيئي واجتماعي (explain why CSR disclosures) هي النظريات القائمة على الأنظمة System-oriented theories.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>النظريات القائمة على الأنظمة والمفهوم المفتوح (Systems-oriented theories) كالشرعية والمؤسسية هي الأدوات العلمية المعتمدة لشرح وتوقع دوافع الإدارات وراء الإفصاحات الطوعية والمسؤولية الاجتماعية للشركات."
            },
            {
                "id": 38,
                "text": "Under the ............. organization will not respond to all stakeholders, but rather will respond to the most powerful groups. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Positive accounting theory" },
                    { "id": "b", "text": "b. Normative Stakeholders theory" },
                    { "id": "c", "text": "c. Legitimacy theory" },
                    { "id": "d", "text": "d. Normative accounting theory" },
                    { "id": "e", "text": "e. Managerial branch of stakeholder theory" }
                ],
                "correct": "e",
                "basmaga": "الموديل الرابع لعام 2024: تلبية وخدمة طلبات المجموعات الأقوى والمسيطرة مادية وبس (respond to the most powerful) ده الفرع الإداري العملي لنظرية أصحاب المصلحة Managerial branch.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e)</strong><br><br>الفرع الإداري البراجماتي لنظرية أصحاب المصلحة (Managerial branch) يرتكز على مبدأ المنفعة والمصلحة؛ حيث لا تضيع الإدارة وقتها لإرضاء الجميع بل تركز جهودها لخدمة وتلبية توقعات الفئات الأكثر قوة وسيطرة على الموارد."
            },
            {
                "id": 39,
                "text": "............. asserts that Organizations continually attempt to ensure that their activities are perceived by outside parties as being legitimate. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Legitimacy theory" },
                    { "id": "c", "text": "c. Stakeholders theory" },
                    { "id": "d", "text": "d. Institutional theory" },
                    { "id": "e", "text": "e. Normative theory" }
                ],
                "correct": "b",
                "basmaga": "الموديل الرابع لعام 2024: السعي والمحاولة المستمرة للشركة لتبدو أنشطتها شرعية ومحترمة في عيون الأطراف الخارجية (perceived by outside parties as being legitimate) دي نظرية الشرعية Legitimacy theory صراحة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>تؤكد نظرية الشرعية (Legitimacy Theory) أن بقاء واستمرار الكيان مرهون بنظرة ورضا المجتمع الخارجي عنه، ولذلك تواصل المنشأة تعديل إفصاحاتها لتبدو أنشطتها متوافقة وشرعية (Legitimate) مع قيم البيئة."
            },
            {
                "id": 40,
                "text": "............. is considered to be the process that leads to an organization being adjudged legitimate. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Decoupling" },
                    { "id": "b", "text": "b. Legitimacy" },
                    { "id": "c", "text": "c. Legitimation" },
                    { "id": "d", "text": "d. Legitimacy gap" },
                    { "id": "e", "text": "e. Social contract" }
                ],
                "correct": "c",
                "basmaga": "الموديل الرابع لعام 2024: لمحت كلمة العملية والخطوات الديناميكية اللي بتوصل الشركة لنيل القبول والشرعية (the process that leads) دي عملية إضفاء وإكساب الشرعية Legitimation.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>عملية إضفاء وإلباس الشرعية (Legitimation) تمثل الخطوات الإستراتيجية والممارسات الدفترية العملية والعمليات (Process) التي يقودها المديرون لإقناع المجتمع الخارجي بشرعية وجود الكيان."
            },
            {
                "id": 41,
                "text": "............. holds that there will be various social contracts negotiated with different Stakeholder groups, rather than one contract with society in general. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Stakeholders theory" },
                    { "id": "c", "text": "c. Normative theory" },
                    { "id": "d", "text": "d. Legitimacy theory" },
                    { "id": "e", "text": "e. Institutional theory" }
                ],
                "correct": "b",
                "basmaga": "الموديل الرابع لعام 2024: وجود عقود اجتماعية متعددة ومتنوعة متفاوض عليها مع فئات منفصلة (various social contracts negotiated with different groups) دي نظرية أصحاب المصلحة Stakeholders theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>تتميز نظرية أصحاب المصلحة (Stakeholders theory) بالاعتراف بالتنوع والتعددية؛ وتفترض أن الكيان يبرم ويتفاوض على عدة عقود اجتماعية نوعية منفصلة مع فئات متباينة بدلاً من عقد واحد أعمى مع المجتمع ككتلة واحدة."
            },
            {
                "id": 42,
                "text": "Managers might see a need for their organizations to be seen to be adopting particular structures and practices, the actual organisational practices can be very different. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Decoupling" },
                    { "id": "c", "text": "c. Legitimacy" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Legitimacy gap" }
                ],
                "correct": "b",
                "basmaga": "الموديل الرابع لعام 2024: تكرار البوكليت؛ إظهار شكل تنظيمي وهياكل معينة للمجتمع بره بينما كواليس الشغل الفعلي جوه مختلفة تماماً (actual practices can be very different) ده الفصل التنظيمي والـ Decoupling.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b)</strong><br><br>التفكيك أو الفصل الظاهري (Decoupling) هو التكتيك المؤسسي الذي يسمح للإدارة بتبني هياكل شكلية معلنة لاستجلاب القبول الكاذب ونيل الشرعية، بينما تظل الممارسات الفعلية (Actual practices) في الجوهر منفصلة ومختلفة تماماً."
            },
            {
                "id": 43,
                "text": "Organizations conform because they are rewarded for doing so through Increased legitimacy, resources and survival capabilities. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Institutional theory" },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. Legitimacy theory" },
                    { "id": "d", "text": "d. Stakeholders theory" },
                    { "id": "e", "text": "e. Normative theory" }
                ],
                "correct": "a",
                "basmaga": "الموديل الرابع لعام 2024: انصياع وتوافق الشركات مع النمط العام السائد لأن المكافأة هي زيادة الشرعية والقدرة على البقاء (Conform because rewarded through survival) دي النظرية المؤسسية Institutional theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a)</strong><br><br>الركيزة الأساسية للنظرية المؤسسية (Institutional theory) تبرهن على أن انصياع المنشآت وموافقتها (Conform) للأنماط والتقاليد التنظيمية السائدة ليس عبثاً، بل لأن البيئة تكافئ المطيع بزيادة الشرعية والموارد وقدرات البقاء الاستراتيجي."
            },
            {
                "id": 44,
                "text": "According to ............. management must give equal consideration to the interests of all stakeholders, Regardless of whether this will lead to improved financial performance. [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Institutional theory" },
                    { "id": "b", "text": "b. Positive accounting theory" },
                    { "id": "c", "text": "c. Normative branch of stakeholder theory" },
                    { "id": "d", "text": "d. Positive branch of stakeholder theory" },
                    { "id": "e", "text": "e. Normative accounting theory" }
                ],
                "correct": "c",
                "basmaga": "الموديل الرابع لعام 2024: وجوب مراعاة كل الفئات بالتساوي والعدل بغض النظر هل ده هيكسبنا فلوس ولا لأ (Regardless of financial performance) ده الفرع الأخلاقي المعياري لنظرية أصحاب المصلحة Normative branch.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c)</strong><br><br>ينص الفرع الأخلاقي المعياري (Normative/Ethical branch) لنظرية أصحاب المصلحة على أن المنشأة يجب أن تدار لمنفعة عادلة متوازنة لجميع الأطراف، دون رضوخ أو اعتبار لحجم الأثر المالي أو الأرباح الكاش الناتجة عن ذلك التوجه."
            },
            {
                "id": 45,
                "text": "The situation where there appears to be a lack of correspondence between \"how society believes\" an organization should act and \"how it is perceived\" that the organization has acted: [Model 4]",
                "options": [
                    { "id": "a", "text": "a. Decoupling" },
                    { "id": "b", "text": "b. Legitimacy" },
                    { "id": "c", "text": "c. Legitimation" },
                    { "id": "d", "text": "d. Legitimacy gap" },
                    { "id": "e", "text": "e. Social contract" }
                ],
                "correct": "d",
                "basmaga": "الموديل الرابع لعام 2024: تكرار البوكليت للتثبيت؛ غياب وعدم التطابق التام بين معتقدات المجتمع وتصرفات الكيان المدركة (lack of correspondence) يمثل التوصيف الدقيق لـ فجوة الشرعية Legitimacy gap.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d)</strong><br><br>فجوة الشرعية (Legitimacy gap) تظهر وتتوسع تنظيمياً عند حدوث تباين وغياب للتطابق المباشر (lack of correspondence) بين سقف توقعات وقيم واعتقادات المجتمع الكلي وبين السلوك التنظيمي المدرك للمنشأة."
            }
        ]
    }
,
    "accounting_theory_exam_model_1": {
        "title": "امتحان يناير 2020 - النموذج الأول (Model 1)",
        "description": "الامتحان الرسمي المعتمد لعام 2019-2020 - المستوى الثالث - شعبة اللغة الإنجليزية",
        "questions": [
            {
                "id": 1,
                "text": "A model that states that the most useful information for economic decision making is the actual valuations, as measured by replacement cost, is:",
                "options": [
                    { "id": "a", "text": "a. Current purchasing power accounting" },
                    { "id": "b", "text": "b. Continuously Contemporary Accounting" },
                    { "id": "c", "text": "c. Current Cost Accounting" },
                    { "id": "d", "text": "d. Historical cost accounting" },
                    { "id": "e", "text": "e. Fair value accounting" }
                ],
                "correct": "c",
                "basmaga": "تلمح كلمة التقييمات الفعلية مقاسة بتكلفة الإحلال (actual valuations, measured by replacement cost) اختار التكلفة الجارية الكلاسيكية Current Cost Accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Current Cost Accounting</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) هي النموذج المعياري القائم تماماً على استخدام التقييمات الفعلية للأصول في السوق مقاسةً بـ تكلفة الإحلال (Replacement Cost) وقت إعداد القوائم."
            },
            {
                "id": 2,
                "text": "If a consumer price index had increased from 100 in 2018 to 106.67 in 2019, for a bundle of goods, what would be the current purchasing power of every dollar, compared to 2018?",
                "options": [
                    { "id": "a", "text": "a. 96.67 cents" },
                    { "id": "b", "text": "b. 93.33 cents" },
                    { "id": "c", "text": "c. $106.67" },
                    { "id": "d", "text": "d. 93.57 cents" },
                    { "id": "e", "text": "e. 93.75 cents" }
                ],
                "correct": "e",
                "basmaga": "المسألة الشهيرة للمؤشر القياسي لما يرتفع من 100 لـ 106.67، اقسم المقلوب (100 / 106.67) واختار الناتج الثابت 93.75 cents فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) 93.75 cents</strong><br><br>القوة الشرائية للدولار بتساوي مقلوب الرقم القياسي للاسعار &rarr; (100 / 106.67) = 0.9375 وبتحويلها لسنتات تطلع القيمة الصريحة 93.75 سنت."
            },
            {
                "id": 3,
                "text": "Which of the following is not an example of a normative accounting theory or research?",
                "options": [
                    { "id": "a", "text": "a. Current purchasing power accounting" },
                    { "id": "b", "text": "b. Current Cost Accounting theory" },
                    { "id": "c", "text": "c. Capital markets based (security price) research" },
                    { "id": "d", "text": "d. Fair value accounting" },
                    { "id": "e", "text": "e. Continuously Contemporary Accounting" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن حاجة **مش** من أمثلة النظريات المعيارية (not an example of a normative)، اختار أبحاث أسواق المال والبورصة Capital markets لأنها أبحاث تجريبية إيجابية Positive.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Capital markets based (security price) research</strong><br><br>أبحاث أسواق المال وحركة البورصة وأسعار الأسهم هي أبحاث قائمة على الملاحظة والتحليل وتتبع الفكر والمدرسة الإيجابية (Positive) وليست نظريات معيارية تملي ما يجب تطبيقاً."
            },
            {
                "id": 4,
                "text": "If historical cost profits are all distributed in dividends during times of rising inventory prices, this will lead to (assuming other things being equal):",
                "options": [
                    { "id": "a", "text": "a. Increase in operating capacity" },
                    { "id": "b", "text": "b. Reduction in operating capacity" },
                    { "id": "c", "text": "c. Reduction in financial capital" },
                    { "id": "d", "text": "d. Increase in financial capital" },
                    { "id": "e", "text": "e. Maintaining operating capacity" }
                ],
                "correct": "b",
                "basmaga": "توزيع أرباح التكلفة التاريخية بالكامل وقت الغلاء وتضخم الأسعار بيخسف بـ طاقة المصنع والشركة وبيعمل انخفاض أو تآكل السعة التشغيلية Reduction in operating capacity.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Reduction in operating capacity</strong><br><br>المنهج يثبت أن توزيع كامل أرباح التكلفة التاريخية الاسمي وقت الغلاء بيتسبب في عجز الشركة ماديًا عن إحلال أصولها ومخزونها بالأسعار الجديدة الغالية، فيؤدي لخفض وتآكل السعة التشغيلية (Operating Capacity)."
            },
            {
                "id": 5,
                "text": "Normative accounting theories and research seek to:",
                "options": [
                    { "id": "a", "text": "a. Describe what is normal, or generally accepted, practices" },
                    { "id": "b", "text": "b. Explain and predict particular phenomena based on observation" },
                    { "id": "c", "text": "c. Prescribe particular approaches not driven by existing practices" },
                    { "id": "d", "text": "d. Explain why managers elect to adopt particular accounting methods in preference to others." },
                    { "id": "e", "text": "e. All of the given options describe normative accounting theories and research" }
                ],
                "correct": "c",
                "basmaga": "هدف النظريات المعيارية والـ Normative دايماً هو فرض ووصف أساليب إصلاحية جديدة مستقلة عن الواقع العك الحالي (Prescribe particular approaches not driven by existing practices).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Prescribe particular approaches not driven by existing practices</strong><br><br>الأبحاث المعيارية (Normative) بتنطلق من فرض مبادئ مثالية وأحكام قِيَمية تملي على الشركات ما يجب أن يطبق (What should be) ومبتلتزمش بالممارسات السيئة الحالية الموجودة على أرض الواقع."
            },
            {
                "id": 6,
                "text": "[Matching] Defined the theory as a coherent set of hypotheticals, conceptual and pragmatic principles forming the general framework of reference for a field of inquiry.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and Bell (1961)" }
                ],
                "correct": "d",
                "basmaga": "توصيل: التعريف الفخم للنظرية بإنها إطار مرجعي عام للبحث (general framework of reference) هو صياغة العالم هندريكسن Hendriksen (1970).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Hendriksen (1970)</strong><br><br>هذا هو النص المعتمد صراحة لتعريف البروفيسور هندريكسن الصادر عام 1970؛ وصاغ من خلاله النظرية كإطار عمل متسق ومبادئ تشكل مرجعاً كلياً لاستقصاء المحاسبة."
            },
            {
                "id": 7,
                "text": "[Matching] Stated that PAT is designed to explain and predict which firms will and which firms will not use a particular method but it says nothing as to which method a firm should use.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and Bell (1961)" }
                ],
                "correct": "c",
                "basmaga": "توصيل: الجملة الشهيرة لنظرية الـ PAT بتفسر وتتوقع ومبتعدلش على حد (says nothing as to which a firm should use) هم السادة واضعيها واتس وزيمرمان Watts and Zimmerman (1986).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Watts and Zimmerman (1986)</strong><br><br>هذا هو التوصيف التجريبي لتعريف نظرية المحاسبة الإيجابية (PAT) المأخوذ حرفياً من كتاب ومؤلفات العالمين واتس وزيمرمان الصادر عام 1986 لتنقية وفصل الفكر الإيجابي عن المعياري."
            },
            {
                "id": 8,
                "text": "[Matching] Investigated stock market reaction to accounting earnings announcements.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and Bell (1961)" }
                ],
                "correct": "b",
                "basmaga": "توصيل: البحث التجريبي التاريخي لدراسة رد فعل سوق المال والبورصة لإعلانات الأرباح المحاسبية، ده شغل العالمين بول وبراون Ball and Brown (1968).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Ball and Brown (1968)</strong><br><br>العالمان (Ball & Brown 1968) هم أصحاب الفضل التجريبي الأول في تاريخ الفكر المحاسبي لإثبات منفعة الأرباح الدفترية وملاحظة استجابة وعوائد البورصة مع خروج الإعلانات المالية."
            },
            {
                "id": 9,
                "text": "[Matching] Defined the agency relationship as a contract under which one or more principals engage another person to perform some services on their behalf.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and Bell (1961)" }
                ],
                "correct": "a",
                "basmaga": "توصيل: التعريف الاقتصادي لعلاقة الوكالة بإنها عقد تفويض لعمل خدمات نيابة عن المالك (agency relationship as a contract) ده شغل جينسن وميكلينج Jensen and Meckling (1976).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Jensen and Meckling (1976)</strong><br><br>التعريف الهيكلي لعلاقة الوكالة (Agency Relationship) كصيغة عقد تفويض قانوني واقتصادي متبادل صِيغ ونُشر في ورقة جينسن وميكلينج الكبرى عام 1976 واللي قامت عليها أبحاث المحاسبة."
            },
            {
                "id": 10,
                "text": "[Matching] Proposed current cost accounting model as an alternative model to historical cost accounting model.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and Bell (1961)" }
                ],
                "correct": "e",
                "basmaga": "توصيل: الفلاسفة اللي صاغوا واقترحوا نموذج التكلفة الجارية الـ CCA كبديل للمحاسبة التقليدية التاريخية هم الثنائي إدوارد وبيل Edward and Bell (1961).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Edward and Bell (1961)</strong><br><br>العالمان إدوارد وبيل هما الرواد الأوائل اللي ابتكروا وصمموا طريقة المحاسبة بالتكلفة الجارية (CCA) لحماية الطاقة التشغيلية المادية للشركات وقت التضخم وغلاء الأسعار."
            },
            {
                "id": 11,
                "text": "In applying the CPPA model, if the price-level index was 120 at the beginning of the year, 150 at end of the year, and averaged 135 during the year, what price-level index would be applied to sales that occurred uniformly during the year?",
                "options": [
                    { "id": "a", "text": "a. 150/135" },
                    { "id": "b", "text": "b. 135/150" },
                    { "id": "c", "text": "c. 150/120" },
                    { "id": "d", "text": "d. 120/150" },
                    { "id": "e", "text": "e. 135/120" }
                ],
                "correct": "a",
                "basmaga": "تريكة مبيعات التضخم المنتظمة جوه الـ CPP؛ اقسم دايماً مؤشر آخر السنة على مؤشر المتوسط العام (Ending Index / Average Index) يعني الكسر الصح هو 150/135.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) 150/135</strong><br><br>لتعديل وتحديث البنود غير النقدية الموزعة بانتظام طوال شهور السنة كالمبيعات (sales uniformly) بطريقة الـ CPP؛ بنقسم الرقم القياسي لنهاية السنة (150) على متوسط الأرقام القياسية السائدة طوال العام (135) فينتج الكسر الحسابي 150/135."
            },
            {
                "id": 12,
                "text": "Case Data: The following Information is computed from ABC Inc.\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 | -(Accumulated depreciation) (10,000) | Land 130,000\n\nQuestion: The value of Inventory on hand at the year-end would be equal to ..........., assuming that the inventory on hand at the year-end comprised 2,500 units that cost $10 per unit, while the replacement cost at year-end was $12 per unit.",
                "options": [
                    { "id": "a", "text": "a. 25,000" },
                    { "id": "b", "text": "b. 35,000" },
                    { "id": "c", "text": "c. 30,000" },
                    { "id": "d", "text": "d. 20,000" },
                    { "id": "e", "text": "e. 22,000" }
                ],
                "correct": "c",
                "basmaga": "مسألة شركة ABC الكبيرة: طالب قيمة المخزون بآخر السنة للـ CCA، اضرب عدد الوحدات المتبقية (2500 حتة) في سعر الإحلال الجديد آخر السنة (12$) تطلع النتيجة 30,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) 30,000</strong><br><br>في طريقة التكلفة الجارية (CCA)، بيتم تقييم وعرض بند المخزون السلعي بآخر السنة بناءً على ثمن وتكلفة إحلاله واستبداله الفعلي الحالي في تاريخ الميزانية الحاضر &rarr; 2,500 وحدة * 12 دولار = 30,000."
            },
            {
                "id": 13,
                "text": "Case Data: The following Information is computed from ABC Inc.\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 | -(Accumulated depreciation) (10,000) | Land 130,000\n\nQuestion: Depreciation expense would be equal to ..........., assuming that the replacement cost at year-end of plant and equipment increased to $120,000. Plant and equipment have an expected life of 10 years with no residual value. Depreciation expense is calculated using straight method.",
                "options": [
                    { "id": "a", "text": "a. 2,000" },
                    { "id": "b", "text": "b. 10,000" },
                    { "id": "c", "text": "c. 100,000" },
                    { "id": "d", "text": "d. 12,000" },
                    { "id": "e", "text": "e. 120,000" }
                ],
                "correct": "d",
                "basmaga": "تابع لمسألة شركة ABC: طالب مصروف الإهلاك الجديد للـ CCA، اقسم سعر الإحلال الجديد والمعدل للآلات (120,000) على العمر 10 سنين تطلع النتيجة 12,000 مباشرة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 12,000</strong><br><br>جوه طريقة التكلفة الجارية (CCA)، قسط الإهلاك لازم يتحسب ويتحمل على القوائم بناءً على قيمة وسعر الإحلال الحالي للأصل الثابت بآخر السنة &rarr; 120,000 سعر الإحلال الجديد / 10 سنوات عمر إنتاجي = 12,000 قسط إهلاك جاري."
            },
            {
                "id": 14,
                "text": "Case Data: The following Information is computed from ABC Inc.\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 | -(Accumulated depreciation) (10,000) | Land 130,000\n\nQuestion: The value of land at the year-end would be equal to ........... at the year-end reflecting an increase in price of the land by 20%.",
                "options": [
                    { "id": "a", "text": "a. 100,000" },
                    { "id": "b", "text": "b. 130,000" },
                    { "id": "c", "text": "c. 165,000" },
                    { "id": "d", "text": "d. 12,000" },
                    { "id": "e", "text": "e. 156,000" }
                ],
                "correct": "e",
                "basmaga": "تابع لمسألة شركة ABC: طالب قيمة الأرض بآخر السنة بعد زيادة السعر بنسبة 20%، اضرب الرقم الأصلي الدفتري للأرض (130,000) في 1.20 تطلع النتيجة 156,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) 156,000</strong><br><br>الحساب وفق التكلفة الجارية الجارية: تكلفة الأرض التاريخية الأصلية (130,000) * معامل التضخم الجاري للأصل (100% + 20% = 1.20) = 156,000."
            },
            {
                "id": 15,
                "text": "Case Data: The following Information is computed from ABC Inc.\n- Current assets: Cash 50,000 | Account receivables 30,000 | Inventory 25,000\n- Non-current assets: Plant and equipment 100,000 | -(Accumulated depreciation) (10,000) | Land 130,000\n\nQuestion: The value of cash on hand at the year-end would be equal to ..........., assuming that the general price level has increased by 10% at year-end.",
                "options": [
                    { "id": "a", "text": "a. 50,000" },
                    { "id": "b", "text": "b. 55,000" },
                    { "id": "c", "text": "c. 30,000" },
                    { "id": "d", "text": "d. 45,000" },
                    { "id": "e", "text": "e. 25,000" }
                ],
                "correct": "a",
                "basmaga": "تريكة فخ بند الكاش في طريقة التكلفة الجارية الـ CCA؛ الكاش بند نقدي اسمي قيمته الرقمية في الميزانية مبتتغيرش ولا بتنضرب في نسب التضخم، فيفضل ثابت زي ما هو 50,000.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) 50,000</strong><br><br>النقدية في الخزينة (Cash) بند نقدي مالي (Monetary item)، وجوه طريقة التكلفة الجارية (CCA) لا يتم تعديل أو مضاعفة الأرقام الاسمية للبنود النقدية في القوائم لأنها مكتوبة ومقومة بالفعل بدولارات حالية، فتنزل ثابتة."
            },
            {
                "id": 16,
                "text": "A theory (or model) that predicts that, if certain conditions are met then particular accounting practices will be observed, is an example of:",
                "options": [
                    { "id": "a", "text": "a. Positive accounting theory" },
                    { "id": "b", "text": "b. Negative accounting theory" },
                    { "id": "c", "text": "c. Agency theory" },
                    { "id": "d", "text": "d. Normative accounting theory" },
                    { "id": "e", "text": "e. Current cost accounting theory" }
                ],
                "correct": "a",
                "basmaga": "النموذج اللي بيتوقع ويفسر حدوث ممارسات عملية معينة في المكاتب لو اتوجدت ظروف معينة (predicts accounting practices will be observed) دي طبعاً نظرية المحاسبة الإيجابية Positive accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Positive accounting theory</strong><br><br>هذا هو المبدأ التجريبي والهدف التنبئي لنظرية المحاسبة الإيجابية (PAT)؛ قايمة على وضع فرضيات تفسيرية تتوقع الممارسات الدفترية العملية للشركات بناءً على ملاحظة بيئتها الحالية."
            },
            {
                "id": 17,
                "text": "........... is a proxy variable for political attention.",
                "options": [
                    { "id": "a", "text": "a. Net Profits" },
                    { "id": "b", "text": "b. Market Share" },
                    { "id": "c", "text": "c. Net Sales" },
                    { "id": "d", "text": "d. Revenues" },
                    { "id": "e", "text": "e. Firm Size" }
                ],
                "correct": "e",
                "basmaga": "المتغير والمؤشر البديل اللي بيقيس لفت انتباه ورقابة الحكومة والضرائب للشركة (proxy variable for political attention) هو حجم كبر الشركة Firm Size.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Firm Size</strong><br><br>في فرضيات نظرية PAT، بيتم استخدام حجم كبر الشركة وحجمها (Firm size) كمتغير ومؤشر بديل (Proxy) للتعبير عن التكاليف السياسية؛ فكل ما تضخم حجم الشركة زاد تركيز الرأي العام والحكومة معاها."
            },
            {
                "id": 18,
                "text": "........... are not formed or arranged for particular purpose only, but it should be based on logical reasoning.",
                "options": [
                    { "id": "a", "text": "a. Coherent" },
                    { "id": "b", "text": "b. Ad hoc" },
                    { "id": "c", "text": "c. Systematic" },
                    { "id": "d", "text": "d. Framework" },
                    { "id": "e", "text": "e. Pragmatic" }
                ],
                "correct": "c",
                "basmaga": "القول بإن النظريات مش معمولة بشكل عشوائي أو مؤقت بس (not formed for particular purpose only) دي صفتها بإنها منظمة ومنهجية Systematic.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Systematic</strong><br><br>النظريات بطبيعتها ليست أفكاراً عشوائية مرتجلة لحل موقف طارئ مؤقت (not ad hoc)، بل يجب أن تتسم بإنها دراسات منظمة ومنهجية ومبنية بانتظام على التفكير المنطقي (Systematic reasoning)."
            },
            {
                "id": 19,
                "text": "A criticism of Positive Accounting Theory is that it tells us nothing about:",
                "options": [
                    { "id": "a", "text": "a. Whether the practice or method being used is the most efficient" },
                    { "id": "b", "text": "b. Whether the practice or method being used is the most equitable" },
                    { "id": "c", "text": "c. Which method a firm should use" },
                    { "id": "d", "text": "d. Which method a firm actually use" },
                    { "id": "e", "text": "e. Positive Accounting Theory tells us nothing about all the above options" }
                ],
                "correct": "c",
                "basmaga": "من أشهر الانتقادات والعيوب الموجهة لنظرية الـ PAT بإنها مبتعطيناش إرشاد ولا بتقولنا إيه اللي المفروض نختاره (tells us nothing about which method a firm should use).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Which method a firm should use</strong><br><br>بما إن الـ PAT نظرية مفسرة فقط ومراقبة للواقع فعلياً (What is)، فمن عيوبها وانتقاداتها بإنها سلبية ومبتقدمش أي إرشاد أو توجيه للمحاسب عما يجب ويقترض اختياره وتطبيقه (What should be)."
            },
            {
                "id": 20,
                "text": "The principal's expectation of opportunistic behaviour by his agent results in lower payments to:",
                "options": [
                    { "id": "a", "text": "a. The agent" },
                    { "id": "b", "text": "b. The principal" },
                    { "id": "c", "text": "c. Employees" },
                    { "id": "d", "text": "d. The principal and the agent" },
                    { "id": "e", "text": "e. Neither the principal nor the agent" }
                ],
                "correct": "a",
                "basmaga": "سؤال متكرر بالامتحانات؛ توقع صاحب الشركة لغدر ولعب المدير الأناني بيخليه مقدماً يعطي مرتب قليل لمين؟ للمدير طبعاً (The agent).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) The agent</strong><br><br>الملاك (Principals) تحسباً لسلوك المدير (Agent) الانتهازي في غياب المراقبة والعقود، بيقوموا بخفض مرتب الإدارة مقدماً لتعويض خسايرهم المتوقعة، والآلية دي تسمى حماية السعر (Price Protection)."
            },
            {
                "id": 21,
                "text": "Which of the following is not true about the efficient market hypothesis?",
                "options": [
                    { "id": "a", "text": "a. Capital markets react in an efficient and unbiased manner to publicly available information" },
                    { "id": "b", "text": "b. The development of efficient markets hypothesis was important to the development of PAT" },
                    { "id": "c", "text": "c. Security prices reflect the information content of publicly available information and this information is restricted to accounting disclosures." },
                    { "id": "d", "text": "d. Management cannot manipulate share prices by changing accounting methods" },
                    { "id": "e", "text": "e. The above assumptions about the efficient market hypothesis are true" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن الجملة الغلط عن كفاءة السوق الـ EMH، اختار الجملة c لأن البورصة ذكية وبتستوعب كل الداتا الحرة ومش حكر على أرقام المحاسبة بس (NOT restricted to accounting).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Security prices reflect the information content of publicly available information and this information is restricted to accounting disclosures.</strong><br><br>الخيار c يمثل عبارة خاطئة (Not true)؛ لأن فرضية كفاءة السوق تنص على أن البورصة بتستوعب وتعكس كافة المعلومات المتاحة علناً من أي مصدر كان، وليست مقتصرة أو حكراً (not restricted) على الإفصاحات المحاسبية فقط."
            },
            {
                "id": 22,
                "text": "The expected return on particular stock is calculating by considering:",
                "options": [
                    { "id": "a", "text": "a. The risk-free rate of return minus a risk/return component" },
                    { "id": "b", "text": "b. The risk-free rate of return plus a risk/return component" },
                    { "id": "c", "text": "c. The risk-free rate of return divided by a risk/return component" },
                    { "id": "d", "text": "d. The risk-free rate of return multiplying with risk/return component" },
                    { "id": "e", "text": "e. The expected return is calculating by considering only the risk/return component" }
                ],
                "correct": "b",
                "basmaga": "معادلة نموذج الـ CAPM لحساب العائد المتوقع للسهم؛ بنجمع العائد الخالي من المخاطر زائد علاوة وجزء المخاطرة (risk-free rate plus a risk/return component).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) The risk-free rate of return plus a risk/return component</strong><br><br>وفقاً لنموذج CAPM المعتمد في المنهج، العائد المتوقع للسهم يتم احتسابه بجمع العائد الآمن المضمون (risk-free كأرباح السندات الحكومية) **مضافاً إليه (+ plus)** الجزء الخاص بمخاطر تقلب السهم بالبورصة."
            },
            {
                "id": 23,
                "text": "[Matching] Represents the return from holding governmental bonds.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "d",
                "basmaga": "توصيل: الأرباح والعوائد الناتجة عن الاستثمار الآمن في السندات الحكومية (holding governmental bonds) ده العائد الخالي من المخاطر Risk-free rate of return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Risk-free rate of return</strong><br><br>معدل العائد الخالي من المخاطر (Risk-free rate) بيتم التعبير عنه وبشكل صريح في النماذج المالية بأنه العائد المستحق والثابت والآمن الناتج عن حيازة والاستثمار في السندات الحكومية وأذون الخزانة."
            },
            {
                "id": 24,
                "text": "[Matching] Proposes that managers will adopt manipulative strategies to generate the greatest economic benefits to themselves.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "c",
                "basmaga": "توصيل: افتراض إن المدير هيستعمل طرق تلاعبية عشان يعظم مصلحته وفلوسه الشخصية وبس، ده منظور الانتهازية الخالص Opportunistic perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Opportunistic perspective</strong><br><br>المنظور الانتهازي (Opportunistic / Ex-post perspective) جوه نظرية PAT بيفترض إن المدير شخص أناني مصلحجي، وبمجرد تثبيت العقود هيدور على أي ثغرة أو تلاعب لمحاذاة وتكبير مكاسبه الشخصية."
            },
            {
                "id": 25,
                "text": "[Matching] Provided evidence that the capital markets react to new information if it signals a change in cash flow.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "b",
                "basmaga": "توصيل: الفرضية اللي قدمت إثبات علمي على إن البورصة ذكية وبتتفاعل مع أي معلومة بتلمح لتغير الكاش فلو الحقيقي، هي كفاءة السوق Efficient Markets Hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Efficient Markets Hypothesis</strong><br><br>فرضية كفاءة السوق (EMH) نجحت تاريخياً في إثبات استجابة وتفاعل أسعار الأسهم بالبورصة بكفاءة مع خروج أي داتا جديدة طالما المعلومة دي بتعكس إشارة لتغير التدفقات النقدية الحقيقية."
            },
            {
                "id": 26,
                "text": "[Matching] Indicates how stock return fluctuated relative to overall stock market.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "a",
                "basmaga": "توصيل: المكون اللي بيقيس مدى تقلب وتأرجح عائد السهم صعوداً وهبوطاً مقارنة بحركة البورصة ككل، ده جزء المخاطرة والعائد Risk/return component.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Risk/return component</strong><br><br>جزء ومكون المخاطر والعائد (Risk/return component) في الـ CAPM بيقيس معامل الحساسية والتقلب (Beta) للسهم ليوضح للمستثمر مدى تأرجح عوائد هذا السهم بالتوازي مع حركة السوق الكلية صعوداً وهبوطاً."
            },
            {
                "id": 27,
                "text": "[Matching] Proposes that managers will adopt accounting methods that best reflect the underlying economic performance of the entity.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "e",
                "basmaga": "توصيل: افتراض إن المديرين بيختاروا طرق معينة لأنها الأفضل والأصدق في تعبيرها عن الأداء المالي والاقتصادي الحقيقي للمنشأة، ده منظور الكفاءة المبهج Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Efficiency perspective</strong><br><br>منظور الكفاءة المسبق (Efficiency / Ex-ante perspective) بيفترض حسن نية الإدارة، وإن اختيارهم للسياسات المحاسبية نابع من رغبتهم في عكس الأداء الاقتصادي الفعلي (economic performance) بأعلى كفاءة لتوفير التكاليف."
            },
            {
                "id": 28,
                "text": "Provided an explanation of why the selection of particular accounting methods might matter, and hence, was important in the development of PAT.",
                "options": [
                    { "id": "a", "text": "a. The Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. Capital Asset Pricing Model" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Research that considered capital markets' reactions to accounting information" }
                ],
                "correct": "b",
                "basmaga": "المنقذ الكبير اللي فسر للعلماء ليه الاختيار واللعب في الطرق المحاسبية بيفرق جداً مع الشركات وساهم في ولادة الـ PAT هي نظرية الوكالة Agency theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Agency theory</strong><br><br>نظرية الوكالة (Agency Theory) هي اللي فكت اللغز الحقيقي للمحاسبين؛ لأنها وضحت إن أرقام المحاسبة بتدخل صراحة في كتابة وصياغة شروط عقود الحوافز والديون، فبقى الاختيار بين الطرق يفرق جداً عملياً ومادياً."
            },
            {
                "id": 29,
                "text": "[Matching 2] predicts that managers of firms with bonus plans are more likely to use accounting methods that increase current year reported income.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "c",
                "basmaga": "توصيل ٢: تلمح خطط حوافز ومكافآت المديرين واختيار طرق بتضخم أرباح السنة الحالية (bonus plans = increase current year) ده فرض حوافز ومكافآت الإدارة Management compensation hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Management compensation hypothesis</strong><br><br>فرض الحوافز والمكافآت الإدارية (المعروف بـ Bonus plan hypothesis) بيتوقع إن وجود حوافز مربوطة بالدخل الدفتري بيحفز المدير انتهازياً لتضخيم أرباح السنة الحالية لتعظيم حوافزه فوراً السنادي."
            },
            {
                "id": 30,
                "text": "[Matching 2] of PAT suggests that regulation forcing firms to use a particular accounting method imposes unwarranted costs and introduces inefficiencies.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "b",
                "basmaga": "توصيل ٢: الرأي القائل بأن إجبار الشركات بقوانين ومعايير موحدة بيفرض عليها مصاريف ملهاش لازمة وبيقلل كفاءة السوق، ده نابع من منظور الكفاءة Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Efficiency perspective</strong><br><br>منظور الكفاءة في الـ PAT بيرى إن الشركات قادرة طوعياً تختار الطرق الأكفأ لبيئتها وتقليل تكاليف تعاقدها، وإن التدخل الحكومي وإجبارها على طريقة معينة بيخلق عدم كفاءة (inefficiencies) وبيفرض مصاريف غير مبررة."
            },
            {
                "id": 31,
                "text": "[Matching 2] Large firms rather than small firms are more likely to use accounting choices that reduce reported profits as predicted by ........... of PAT.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "a",
                "basmaga": "توصيل ٢: ميل الشركات الكبيرة العملاقة في الحجم لاختيار طرق محاسبية بتصغّر وتقلل الأرباح الدفترية (Large firms = reduce reported profits) ده فرض التكاليف السياسية Political cost hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Political cost hypothesis</strong><br><br>فرض التكاليف السياسية بينص على إن كبر حجم الكيان (Large size) بيجعله تحت مجهر ورقابة الدولة وجماعات الضغط، فبيتعمدوا يختاروا طرق محاسبية تخفض الأرباح عشان يبانوا عاديين ويهربوا من فرض ضرائب إضافية."
            },
            {
                "id": 32,
                "text": "[Matching 2] Managers have an incentive to adopt accounting methods that relax the potential impacts of the constraints if they had entered into agreements that involve accounting-based covenants as suggested by ........... of PAT.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "d",
                "basmaga": "توصيل ٢: الرغبة في اختيار طرق بتخفف وبتبعد الشركة عن قيود وشروط اتفاقيات القروض المكتوبة مع البنوك (accounting-based covenants) ده فرض الديون Debt/equity hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Debt/equity hypothesis</strong><br><br>فرض الديون (Debt/equity hypothesis) بيفترض إن اقتراب المنشأة المدونة من حدود وقيود البنك (Covenants) بيشكل رعب للإدارة من خطر الوقوع في فخ التعثر الفني، فبينقوا طرق بتزود رقم الأرباح والأصول للهروب والتخفيف."
            },
            {
                "id": 33,
                "text": "[Matching 2] ........... of PAT suggests that managers might elect a particular asset depreciation method that increases income even though it might not reflect the actual use of the asset.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "e",
                "basmaga": "توصيل ٢: تعمد نية المدير لتنقية طريقة إهلاك مبالغ فيها بتطول عمر الأصل لتضخيم أرباح السنة الحالية لمصلحته الشخصية بس، ده بيمثل منظور الانتهازية الخالص Opportunistic perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Opportunistic perspective</strong><br><br>منظور الانتهازية اللاحق (Opportunistic perspective) بيرى إن المدير بيستغل مرونة وثغرات المحاسبة بعد إبرام العقود لتنقية طرق (زي مد عمر إهلاك الأصول) لتكبير الأرباح وزيادة حوافزه الشخصية حتى لو مش بتعكس الواقع المادي للآلة."
            },
            {
                "id": 34,
                "text": "PAT theorists may argue that it is more appropriate to remunerate managers using ........... where accounting earnings fluctuate greatly.",
                "options": [
                    { "id": "a", "text": "a. Market-based bonus schemes" },
                    { "id": "b", "text": "b. Fixed basis rewards" },
                    { "id": "c", "text": "c. Accounting-based bonus schemes" },
                    { "id": "d", "text": "d. Both of Fixed basis rewards and Accounting-based bonus schemes" },
                    { "id": "e", "text": "e. Both of Market-based bonus schemes and Accounting-based bonus schemes" }
                ],
                "correct": "a",
                "basmaga": "لما أرباح الدفاتر والمحاسبة تتأرجح وتلعب بعنف بطبيعة نشاط الشركة (earnings fluctuate greatly) زي شركات التعدين، الأصح ربط حوافزه بالبورصة وسعر السهم Market-based bonus schemes.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Market-based bonus schemes</strong><br><br>علماء الـ PAT بيثبتوا إنه في القطاعات ذات الأرباح الدفترية المتأرجحة جداً (كشركات البترول والتعدين أو أبحاث التكنولوجيا R&D)، الأفضل ربط مكافآت الإدارة بـ القيمة السوقية للأسهم (Market-based) لأنها بتعكس النظرة والتوقعات المستقبلية طويلة الأجل."
            },
            {
                "id": 35,
                "text": "Capital asset pricing model provides an indication of ........... on securities.",
                "options": [
                    { "id": "a", "text": "a. The actual return." },
                    { "id": "b", "text": "b. The expected return" },
                    { "id": "c", "text": "c. The risk return component" },
                    { "id": "d", "text": "d. The abnormal return" },
                    { "id": "e", "text": "e. The risk-free rate of return" }
                ],
                "correct": "b",
                "basmaga": "تكرار البوكلت المضمون؛ نموذج تسعير الأصول الرأسمالية الـ CAPM بيعطينا دلالة ومؤشر عن العائد المتوقع والنموذجي المخطط للسهم The expected return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) The expected return</strong><br><br>نموذج الـ (CAPM) هو أداة رياضية واستراتيجية وظيفتها الأساسية حساب وإعطاء دلالة واضحة ومؤشر عن العائد المتوقع (Expected return) للأوراق المالية بناءً على دمج حقل الفائدة الآمنة مع حقل مخاطر السوق."
            },
            {
                "id": 36,
                "text": "Which of the following is not a feature of current cost accounting?",
                "options": [
                    { "id": "a", "text": "a. It seeks to maintain the purchasing power of capital" },
                    { "id": "b", "text": "b. It differentiates between profits from trading and from holding gains" },
                    { "id": "c", "text": "c. It uses current values which based on replacement cost" },
                    { "id": "d", "text": "d. It uses specific prices of assets rather than general price-level adjustments" },
                    { "id": "e", "text": "e. It seeks to maintain the operating capability of capital" }
                ],
                "correct": "a",
                "basmaga": "بيسأل عن ميزة **مش** تابعة للمحاسبة بالتكلفة الجارية (not a feature of current cost) اختار العبارة اللي فيها purchasing power لأن دي وظيفة الـ CPP بس.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) It seeks to maintain the purchasing power of capital</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) بتستهدف صيانة الحفاظ على رأس المال المادي أو الطاقة التشغيلية (Operating capacity)، أما صيانة القوة الشرائية العامة (Purchasing power) فدي الميزة التاريخية الحصرية لنظام مستوى الأسعار العام الـ CPP."
            },
            {
                "id": 37,
                "text": "Case Data: ARG Inc. commenced its operations by acquiring 400 items of inventory at a cost of $30 each, and sold 250 of the items for $50 each when the replacement cost was $40 each. At year-end the replacement cost of the 150 remaining items of inventory was $45.\n\nQuestion: Under historical cost accounting model, profits that would be available to dividends distribution would be equal to:\n*(Note: original booklet typo adjusted in explanation)*",
                "options": [
                    { "id": "a", "text": "a. 250 × (50 − 40)" },
                    { "id": "b", "text": "b. 250 × (40 − 30)" },
                    { "id": "c", "text": "c. 150 × (50 − 30)" },
                    { "id": "d", "text": "d. 150 × (45 − 30)" },
                    { "id": "e", "text": "e. 150 × (40 − 30)" }
                ],
                "correct": "c",
                "basmaga": "مسألة الـ 400 حتة مخزون لشركة ARG؛ أرباح التكلفة التاريخية العادية حسابياً هي ضرب الـ 250 حتة مباعة في (50 - 30) = 5000. بسبب خطأ طباعة شهير في البوكلت تم كتابة الـ 250 كـ 150 فاختار الاختيار c التابع للخطأ المطبعي الحرفي الكلاسيكي للجنة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) 150 × (50 − 30) [خطأ مطبعي رسمي بالامتحان والأصل هو 250 حتة]</strong><br><br>حسابياً تحت التكلفة التاريخية: الربح = الوحدات المباعة * (سعر البيع - التكلفة التاريخية الأصلية) &rarr; الحسبة الصح هي $250 \\times (50 - 30) = 5,000$. نظراً لخطأ مطبعي في صياغة خيارات لجنة الامتحان تم تبديل الـ 250 برقم 150 بالاختيار c وهو المعتمد بنموذج مصحح المادة الالكتروني."
            },
            {
                "id": 38,
                "text": "Case Data: ARG Inc. commenced its operations by acquiring 400 items of inventory at a cost of $30 each, and sold 250 of the items for $50 each when the replacement cost was $40 each. At year-end the replacement cost of the 150 remaining items of inventory was $45.\n\nQuestion: Under Current Cost Accounting Model, profits that would be available to dividends distribution would be equal to:",
                "options": [
                    { "id": "a", "text": "a. 250 × (50 − 40)" },
                    { "id": "b", "text": "b. 250 × (40 − 20)" },
                    { "id": "c", "text": "c. 250 × (50 − 30)" },
                    { "id": "d", "text": "d. 150 × (45 − 30)" },
                    { "id": "e", "text": "e. 150 × (40 − 30)" }
                ],
                "correct": "a",
                "basmaga": "تابع لمسألة شركة ARG: طالب ربح التشغيل الجاري للـ CCA، اضرب الكمية المباعة (250 حتة) في سعر البيع ناقص سعر الإحلال وقت البيع (50 - 40) واختار الاختيار المباشر a.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) 250 × (50 − 40)</strong><br><br>ربح التشغيل الجاري الصافي المتاح للتوزيع كأرباح (Operating profit) تحت مظلة الـ CCA بيساوي: الوحدات المباعة فعلياً (250) * (سعر البيع 50 - سعر الإحلال الحالي وقت البيع 40) = 2500 وهو الاختيار a."
            },
            {
                "id": 39,
                "text": "Case Data: ARG Inc. commenced its operations by acquiring 400 items of inventory at a cost of $30 each, and sold 250 of the items for $50 each when the replacement cost was $40 each. At year-end the replacement cost of the 150 remaining items of inventory was $45.\n\nQuestion: The unrealized holding gain would be equal to:",
                "options": [
                    { "id": "a", "text": "a. 250 × (50 − 40)" },
                    { "id": "b", "text": "b. 250 × (40 − 30)" },
                    { "id": "c", "text": "c. 250 × (50 − 30)" },
                    { "id": "d", "text": "d. 150 × (45 − 30)" },
                    { "id": "e", "text": "e. 150 × (40 − 30)" }
                ],
                "correct": "d",
                "basmaga": "تابع لمسألة شركة ARG: طالب مكسب الحيازة غير المحقق لباقي البضاعة بالخزن بآخر السنة (150 حتة)، اضرب الـ 150 في سعر آخر السنة ناقص التكلفة الأصلية (45 - 30) واختار الخيار d علطول.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 150 × (45 − 30)</strong><br><br>مكسب الحيازة غير المحقق (Unrealized Holding Gain) بيتحسب للكمية اللي لسه متباعة ومركونة بالمخازن بآخر السنة وهي (400 إجمالي - 250 مباع = 150 حتة)، مضروبة في فرق صعود السعر بآخر السنة: 150 * (سعر إحلال آخر السنة 45 - التكلفة الأصلية 30)."
            },
            {
                "id": 40,
                "text": "Case Data: ARG Inc. commenced its operations by acquiring 400 items of inventory at a cost of $30 each, and sold 250 of the items for $50 each when the replacement cost was $40 each. At year-end the replacement cost of the 150 remaining items of inventory was $45.\n\nQuestion: The realized holding gain would be equal to:",
                "options": [
                    { "id": "a", "text": "a. 250 × (50 − 40)" },
                    { "id": "b", "text": "b. 250 × (40 − 30)" },
                    { "id": "c", "text": "c. 250 × (50 − 30)" },
                    { "id": "d", "text": "d. 150 × (45 − 30)" },
                    { "id": "e", "text": "e. 150 × (40 − 30)" }
                ],
                "correct": "b",
                "basmaga": "تابع لمسألة شركة ARG: طالب مكسب الحيازة المحقق للكمية المباعة فعلياً، اضرب الـ 250 حتة مباعة في صعود السعر من التكلفة الأصلية لثمن الإحلال وقت البيع (40 - 30) واختار الاختيار b.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) 250 × (40 − 30)</strong><br><br>مكسب الحيازة المحقق فعلياً (Realized Holding Gain) بيتحسب للكمية المباعة فعلياً (250 حتة) لمطابقة وتحديد كمية صعود سعرها في السوق من تاريخ الشراء حتى تاريخ البيع: 250 * (سعر إحلال يوم البيع 40 - التكلفة الأصلية 30)."
            },
            {
                "id": 41,
                "text": "[Matching 3] Perspective taken in historical cost accounting.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "a",
                "basmaga": "توصيل ٣: المفهوم والمنظور المتبع تاريخياً وعملياً جوه المحاسبة بالتكلفة التاريخية الاسمي هو الحفاظ على رأس المال المالي Financial capital maintenance.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Financial capital maintenance</strong><br><br>محاسبة التكلفة التاريخية التقليدية (HC) تتبنى وتطبق دائمًا مبدأ صيانة رأس المال المالي الاسمي، حيث يعتبر المشروع رابحاً إذا زادت الأموال النقدية الاسمية بآخر الفترة عن أولها دون مراعاة قوى التضخم."
            },
            {
                "id": 42,
                "text": "[Matching 3] ........... are those that remain fixed in terms of their monetary value but their purchasing power of will change over time.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "d",
                "basmaga": "توصيل ٣: بنود قيمتها بالفلوس ثابتة على الورق بس قوتها الشرائية بتتغير وبتموت بمرور الوقت (fixed monetary value, purchasing power change) دي البنود والأصول النقدية Monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Monetary assets</strong><br><br>الأصول النقدية (Monetary Assets) كالنقدية السائلة بالخزنة أو البنك وحسابات المدينين تظل قيمتها الرقمية الاسمية ثابتة بالدفاتر، ولكن قيمتها وقدرتها الشرائية الفعلية تنخفض وتتغير كلياً مع التضخم."
            },
            {
                "id": 43,
                "text": "[Matching 3] Perspective adopted under Current Cost Accounting Model.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "e",
                "basmaga": "توصيل ٣: المفهوم والمنظور المتبع المعتمد جوه نظام التكلفة الجارية الـ CCA هو صيانة رأس المال التشغيلي المادي Physical capital maintenance.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Physical capital maintenance</strong><br><br>يرتكز نظام التكلفة الجارية (CCA) بصفة مطلقة على مبدأ الحفاظ على رأس المال المادي أو التشغيلي (Physical capital) لضمان احتفاظ المنشأة بقدرتها الإنتاجية واستبدال السلع دون انكماش حجم الكيان."
            },
            {
                "id": 44,
                "text": "[Matching 3] The amount that the entity would have to pay to replace an asset at the present time.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "c",
                "basmaga": "توصيل ٣: الثمن والمبلغ المالي اللي هتتحمله وتدفعه المنشأة انهارده عشان تشتري أصل بديل للي عندها (pay to replace an asset) دي تكلفة الإحلال Replacement cost.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Replacement cost</strong><br><br>تكلفة الإحلال (Replacement cost) تعبر محاسبياً وعلمياً عن القيمة السوقية الجارية الحاضرة التي يجب على الشركة التضحية بها وسدادها لاقتناء أصل بديل مماثل في نفس الوقت الحالي."
            },
            {
                "id": 45,
                "text": "[Matching 3] ........... are those whose monetary value will change over time as a result of inflation, while purchasing power remain constant.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "b",
                "basmaga": "توصيل ٣: البنود والأصول اللي قيمتها المادية بالفلوس بتزيد وتتغير مع الغلاء بس قوتها الشرائية بتفضل محتمية وثابتة (monetary value will change, purchasing power constant) دي الأصول غير النقدية Non-monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Non-monetary assets</strong><br><br>الأصول غير النقدية (Non-monetary assets) كالمباني والأراضي والمخزون ترتفع قيمتها وثمنها الاسمي بالدنانير لمواكبة موجات الغلاء، وبالتالي تحتفظ بقوتها الشرائية حرة وثابتة (Constant) عند إعادة تقييمها أو بيعها."
            },
            {
                "id": 46,
                "text": "A limitation of Current Cost Accounting Model does not include:",
                "options": [
                    { "id": "a", "text": "a. Replacement costs are easily determined, and therefore preparation cost is low" },
                    { "id": "b", "text": "b. Replacement costs do not reflect what it would be worth if the firm decided to sell it" },
                    { "id": "c", "text": "c. It may be more efficient and less costly to acquire different assets." },
                    { "id": "d", "text": "d. CCA assumes that assets would in fact be replaced with that type of asset and not another" },
                    { "id": "e", "text": "e. There are too many versions of current cost accounting, making it confusing to preparers" }
                ],
                "correct": "a",
                "basmaga": "بيسأل عن نقطة **مش** من ضمن عيوب ومحددات الـ CCA (does not include limitation)، اختار الجملة اللي بتقول إن تحديد تكلفة الإحلال سهل ورخيص لأن العكس تماماً هو اللي صح وعيب قاتل وصعب جداً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Replacement costs are easily determined, and therefore preparation cost is low</strong><br><br>من أكبر عيوب ومحددات نظام التكلفة الجارية (CCA) أن تحديد تكلفة الإحلال (Replacement cost) في السوق الفعلي صعب جداً ومعقد ومكلف ويحتاج تقدير خبراء، فقول إنها سهلة ورخيصة لا يمثل عيباً بل هو عبارة خاطئة علمياً عن النظام."
            },
            {
                "id": 47,
                "text": "In applying the CPPA model, if the price level index was 120 at the beginning of the year, 150 at end of the year, and averaged 135 during the year, which one of the following price-level indexes would be incorrect?",
                "options": [
                    { "id": "a", "text": "a. 150/135 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "b", "text": "b. 150/120 would be applied to opening net monetary assets" },
                    { "id": "c", "text": "c. 150/150 would be applied to ending net monetary assets" },
                    { "id": "d", "text": "d. 135/150 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "e", "text": "e. All of the given options are correct" }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن الكسر والمؤشر الخاطئ تماماً في التعديل (would be incorrect)، اختار d لأن المبيعات المنتظمة بنضربها في مؤشر آخر السنة مقسوماً على المتوسط (150/135) فـقلب الكسر وكتابته 135/150 هو الخطأ المطلوب اختياره.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 135/150 would be applied to sales, purchases of goods, and payment of expenses</strong><br><br>الخيار d يمثل معامل تعديل خاطئ تماماً (Incorrect)؛ لأن البنود الموزعة بانتظام طوال السنة كالمبيعات والمصاريف تعدل محاسبياً بقسمة رقم آخر السنة على رقم المتوسط (150/135) وليس العكس."
            },
            {
                "id": 48,
                "text": "........... reflects a view that the components of a theory should logically combine together to provide explanation or guidance in respect of certain phenomena.",
                "options": [
                    { "id": "a", "text": "a. Coherent" },
                    { "id": "b", "text": "b. Ad hoc" },
                    { "id": "c", "text": "c. Pragmatic" },
                    { "id": "d", "text": "d. Framework" },
                    { "id": "e", "text": "e. Systematic" }
                ],
                "correct": "a",
                "basmaga": "تكرار البوكلت الحتمي؛ تلمح ترابط وتماسك مكونات وأجزاء النظرية معاً بالمنطق وبدون تناقض (logically combine together) اختار المتماسكة Coherent فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Coherent</strong><br><br>كلمة متماسكة (Coherent) في فلسفة المحاسبة بتعني إن أجزاء ومبادئ الإطار النظري للمادة بتركب على بعضها بالمنطق السليم (logically combine) ومفيهاش أي تضارب داخلي لتقديم إرشاد سليم."
            },
            {
                "id": 49,
                "text": "[Matching 4] A deficiency in a loan agreement that arises not from a failure to make payments as promised, but from a failure to uphold some other aspect of the loan terms.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "d",
                "basmaga": "توصيل ٤: الإخلال بشرط من شروط عقد القرض برغم إن المنشأة ملتزمة وبتدفع الأقساط والفوائد في مواعيدها (failure to uphold some other aspect) ده مصطلح التعثر والافتراض الفني Technical default.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Technical default</strong><br><br>التعثر أو المخالفة الفنية (Technical default) بتحدث محاسبياً لما الشركة تخل بـ بند أو شرط مالي مكتوب في عقد البنك (زي حد الأصول للديون) برغم إنها بتسدد الأقساط بانتظام، وده مؤشر خطر بيعطي الحق للبنك برفع الفائدة."
            },
            {
                "id": 50,
                "text": "[Matching 4] The maximum amount that can be consumed during the period, while still expecting to be as well off at the end of the period as at the beginning of the period.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "b",
                "basmaga": "توصيل ٤: المفهوم الاقتصادي الشهير لعمنا هيكس؛ أقصى كمية وفلوس ينفع تصرفها وتستهلكها طوال السنة وتفضل ميسور الحال بآخر السنة زي أولها، ده تعريف الدخل Income (Well-offness).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Income</strong><br><br>هذا هو التعريف الاقتصادي الحرفي للدخل (Income) وصياغة ميسورية الحال (Well-offness) للباحث هيكس عام 1946؛ واللي بيشترط لتحديد الدخل اختيار وتحديد مفهوم واضح ومثبت لصيانة رأس المال أولاً."
            },
            {
                "id": 51,
                "text": "[Matching 4] Undertakings provided as a part of a contract associated with a loan to restrict the borrower from taking particular actions.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "c",
                "basmaga": "توصيل ٤: التعهدات والقيود والالتزامات المكتوبة جوه عقد القرض البنكي لتقييد حركات وتصرفات العميل المقترض (restrict the borrower) دي الشروط والقيود البنكية Debt covenants.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Debt covenants</strong><br><br>القيود والشروط والعهود الائتمانية للبنوك (Debt covenants) هي البنود والاشتراطات الرسمية المدرجة جوه عقد التمويل لتقييد حركات وقرارات العميل المقترض لحماية أموال البنك (مثل فرض حد أقصى للديون)."
            },
            {
                "id": 52,
                "text": "[Matching 4] Minimize managers' ability to undertake actions detrimental to the interests of the principals.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "e",
                "basmaga": "توصيل ٤: الآلية والأداة القانونية المكتوبة لتقييد يد المدير ومنعه من اتخاذ أي قرارات تضر بمصالح الملاك (Minimize managers' ability to undertake actions detrimental) دي الاتفاقيات والعقود التعاقدية Contractual arrangements.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Contractual arrangements</strong><br><br>الاتفاقيات والترتيبات التعاقدية (Contractual arrangements) المربوطة بمخرجات أرقام المحاسبة بيتم صياغتها واعتمادها قانونياً لربط وتقييد سلوك المدير الأناني ومنعه من الإضرار بالرفاهية الاقتصادية للملاك."
            },
            {
                "id": 53,
                "text": "[Matching 4] Lower salary to compensate principals for adverse actions that the managers are considered to undertake.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "a",
                "basmaga": "توصيل ٤: عرض مرتب قليل مقدماً على المدير الأناني لتعويض الملاك عن خيانتهم أو انحرافاتهم المتوقعة في الخفاء، ده مصطلح حماية السعر Price protection.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Price protection</strong><br><br>مفهوم حماية السعر (Price protection) جوه نظرية الوكالة بيفترض إن المالك الذكي في غياب العقود والرقابة بيعرض على المدير مرتب منخفض لتعويض وتحصين أمواله من أي انحرافات ذاتية متوقعة من وراه."
            },
            {
                "id": 54,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintaining the purchasing power of capital intact?",
                "options": [
                    { "id": "a", "text": "a. Fair value accounting" },
                    { "id": "b", "text": "b. Historical cost accounting" },
                    { "id": "c", "text": "c. Current cost accounting" },
                    { "id": "d", "text": "d. Continuously contemporary accounting" },
                    { "id": "e", "text": "e. General price-level adjustment accounting" }
                ],
                "correct": "e",
                "basmaga": "تلمح عبارة الحفاظ على القوة الشرائية لرأس المال ثابتة ومعافاة (maintaining the purchasing power of capital intact) اختار طريقة تعديل مستوى الأسعار العام General price-level adjustment accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) General price-level adjustment accounting</strong><br><br>نموذج المحاسبة بمستوى الأسعار العام (المعروف بـ CPPA) هو النموذج المعياري الوحيد المصمم بهدف تحديث وصيانة القوة الشرائية الحقيقية لرأس المال الثابت باستخدام الأرقام القياسية العامة للتضخم."
            },
            {
                "id": 55,
                "text": "Which of the following statements is not true in times of inflation?",
                "options": [
                    { "id": "a", "text": "a. Holders of monetary assets will lose" },
                    { "id": "b", "text": "b. Holders of monetary liabilities will gain" },
                    { "id": "c", "text": "c. Assets will have less purchasing power at the end of the period relative to beginning of the period" },
                    { "id": "d", "text": "d. If the amount of monetary assets is the same as monetary liabilities, then no gains or losses occur" },
                    { "id": "e", "text": "e. If the amount of monetary assets held is less than monetary liabilities held, then a net loss occur" }
                ],
                "correct": "e",
                "basmaga": "بيسأل عن الجملة الغلط وقت التضخم (not true)، اختار الجملة e اللي بتقول لو الأصول النقدية أقل من الديون يحصل خسارة صافية، لأن الصح إن الموقف ده بيكسب مكسب Gain مش خسارة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) If the amount of monetary assets held is less than monetary liabilities held, then a net loss occur</strong><br><br>العبارة e خاطئة وغير صحيحة (Not true)؛ لأن وجود أصول نقدية (كاش) أقل من الالتزامات والديون النقدية وقت الغلاء بيترتب عليه مكسب صافي للقوة الشرائية (Net Gain) لأننا هنسدد ديوننا بفلوس ملهاش قيمة."
            },
            {
                "id": 56,
                "text": "Research Investigated the relationship between accounting earnings and security returns suggested that if earnings announcements provided new information, then capital market would react, and the reaction taking the form of ........... return on securities.",
                "options": [
                    { "id": "a", "text": "a. The normal return" },
                    { "id": "b", "text": "b. The expected return" },
                    { "id": "c", "text": "c. The actual return" },
                    { "id": "d", "text": "d. The abnormal return" },
                    { "id": "e", "text": "e. The risk-free rate of return" }
                ],
                "correct": "d",
                "basmaga": "تلمح رد فعل البورصة وسوق المال لإعلانات معلومات أرباح جديدة ومفاجئة (capital market would react)، التفاعل ده بياخد شكل عوائد غير طبيعية ومفاجئة The abnormal return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) The abnormal return</strong><br><br>أبحاث الاستجابة السلوكية لأسواق المال (زي دراسة بول وبراون 1968) أثبتت إن خروج معلومات محاسبية جديدة فجأة للسوق بيولد حركة سريعة وتفاعل للأسهم في البورصة بياخذ شكل عوائد غير طبيعية أو شاذة (Abnormal return)."
            }
        ]
    },
    "accounting_theory_exam_model_4": {
        "title": "الامتحان الثاني: نموذج امتحانات 2023-2024 (Model 4)",
        "description": "الامتحان الرسمي الشامل والنهائي لنظريات المحاسبة المعتمد للفرقة الرابعة - شعبة اللغة الإنجليزية",
        "questions": [
            {
                "id": 1,
                "text": "Holding gains or losses are treated as income under ...........",
                "options": [
                    { "id": "a", "text": "a. Fair value accounting" },
                    { "id": "b", "text": "b. Current Cost Accounting" },
                    { "id": "c", "text": "c. Historical cost accounting" },
                    { "id": "d", "text": "d. Current purchasing power accounting" },
                    { "id": "e", "text": "e. Continuously Contemporary Accounting" }
                ],
                "correct": "c",
                "basmaga": "أرباح أو خسائر الحيازة بتتعامل كدخل عادي (treated as income) جوه المحاسبة بالتكلفة التاريخية التقليدية Historical cost علطول.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Historical cost accounting</strong><br><br>تحت منظور صيانة رأس المال المالي المتبع في المحاسبة بالتكلفة التاريخية (HC)، أي مكاسب ناتجة عن الاحتفاظ بالأصل وارتفاع سعره في السوق (Holding gains) بيتم دمجها ومعاملتها كإيراد ودخل عادي مع أرباح التشغيل عند البيع."
            },
            {
                "id": 2,
                "text": "Which of the following is not an example of a normative accounting theory or research?",
                "options": [
                    { "id": "a", "text": "a. Current purchasing power accounting" },
                    { "id": "b", "text": "b. Current Cost Accounting theory" },
                    { "id": "c", "text": "c. Capital markets based (security price) research" },
                    { "id": "d", "text": "d. Fair value accounting" },
                    { "id": "e", "text": "e. Continuously Contemporary Accounting" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن حاجة مش تبع النظريات المعيارية (not an example of a normative)، اختار أبحاث أسواق المال والبورصة Capital markets لأنها أبحاث تجريبية وضعية إيجابية Positive.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Capital markets based (security price) research</strong><br><br>أبحاث أسواق المال القائمة على رصد حركة الأسعار في البورصة واستجابتها للأرباح هي أبحاث وضعية إيجابية (Positive)؛ لأنها بتلاحظ وتفسر الواقع الحالي ومش معيارية (Normative) بتفرض طريقة مثالية معينة."
            },
            {
                "id": 3,
                "text": "Normative accounting theories and research seek to:",
                "options": [
                    { "id": "a", "text": "a. Describe what is normal, or generally accepted, practice" },
                    { "id": "b", "text": "b. Explain and predict particular phenomena based on observation" },
                    { "id": "c", "text": "c. Prescribe particular approaches not driven by existing practices" },
                    { "id": "d", "text": "d. Explain why managers elect to adopt particular accounting methods in preference to others." },
                    { "id": "e", "text": "e. All of the given options describe normative accounting theories and research" }
                ],
                "correct": "c",
                "basmaga": "هدف الفكر المعياري والـ Normative هو فرض وتقديم مناهج إصلاحية جديدة مستقلة تماماً عن ممارسات الواقع الفعلي (Prescribe particular approaches not driven by existing practices).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Prescribe particular approaches not driven by existing practices</strong><br><br>النظريات المعيارية (Normative) بتهتم بوضع وتوصيف (Prescribe) حلول ومناهج مثالية لما يجب أن يكون عليه العمل المحاسبي (What should be) لتصحيح عيوب النظام الحالي كالتكلفة التاريخية."
            },
            {
                "id": 4,
                "text": "........... arises where organisations change their institutional practices because of (formal and informal) pressure from powerful stakeholders or the Culture expectations in society within which organisations operates.",
                "options": [
                    { "id": "a", "text": "a. Coercive Isomorphic" },
                    { "id": "b", "text": "b. Legitimacy gap" },
                    { "id": "c", "text": "c. Decoupling" },
                    { "id": "d", "text": "d. Mimetic Isomorphic" },
                    { "id": "e", "text": "e. Normative Isomorphic" }
                ],
                "correct": "a",
                "basmaga": "لمحت حدوث ضغوط وتعديل للممارسات بسبب جهات قوية أو توقعات ثقافية (pressure from powerful stakeholders) اختار التماثل القسري الإجباري Coercive Isomorphic فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Coercive Isomorphic</strong><br><br>التماثل القسري (Coercive Isomorphism) جوه النظرية المؤسسية بيحصل لما الشركة تنجبر تعدل ممارساتها وهياكلها نتيجة ضغوط رسمية أو غير رسمية (Pressure) مفروضة عليها من أطراف قوية أو توقعات مجتمعية ملزمة."
            },
            {
                "id": 5,
                "text": "........... explain why organizations make certain CSR disclosures or voluntarily corporate disclosures within their annual reports.",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Normative accounting theory" },
                    { "id": "c", "text": "c. Efficient Markets Hypothesis" },
                    { "id": "d", "text": "d. Positive accounting theory" },
                    { "id": "e", "text": "e. System-oriented theories" }
                ],
                "correct": "e",
                "basmaga": "المنظومة والنظريات اللي بتشرح وتفسر ليه الشركات بتعمل إفصاح بيئي واجتماعي طوعي (explain why CSR disclosures) هي النظريات الموجهة بالأنظمة System-oriented theories.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) System-oriented theories</strong><br><br>النظريات القائمة على الأنظمة (Open System-oriented theories) زي نظرية الشرعية ونظرية أصحاب المصلحة والمؤسسية هي اللي بتشرح وبتفسر الدوافع الاستراتيجية وراء قيام الشركات بالإفصاح الطوعي والمسؤولية المجتمعية الـ CSR."
            },
            {
                "id": 6,
                "text": "........... prescribes the particular accounting practice that should be undertaken",
                "options": [
                    { "id": "a", "text": "a. Normative stakeholder theory." },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. System-oriented theories" },
                    { "id": "d", "text": "d. Normative accounting theory" },
                    { "id": "e", "text": "e. Positive accounting theory." }
                ],
                "correct": "d",
                "basmaga": "لمحت كلمة تفرض وتوصي بالممارسة المحاسبية اللي المفروض تطبق (prescribes ... should be undertaken) من اسم السؤال اختار المعيارية Normative accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Normative accounting theory</strong><br><br>النظرية المعيارية (Normative Theory) هي المنظومة الفكرية القائمة على تقديم توصيفات وإملاءات تفرض ما يجب القيام به وتطبيقه دفترياً لحل العيوب الدفترية التقليدية."
            },
            {
                "id": 7,
                "text": "Under the ........... organization will not respond to all stakeholders, but rather will respond to the most powerful groups",
                "options": [
                    { "id": "a", "text": "a. Positive accounting theory" },
                    { "id": "b", "text": "b. Normative Stakeholders theory" },
                    { "id": "c", "text": "c. Legitimacy theory." },
                    { "id": "d", "text": "d. Normative accounting theory" },
                    { "id": "e", "text": "e. Managerial branch of stakeholder theory" }
                ],
                "correct": "e",
                "basmaga": "تلبية وخدمة طلبات وتوقعات الفئات الأقوى والمسيطرة مادياً بس (respond to the most powerful groups) ده الفرع الإداري البراجماتي لنظرية أصحاب المصلحة Managerial branch.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Managerial branch of stakeholder theory</strong><br><br>الفرع الإداري (Managerial / Positive branch) لنظرية أصحاب المصلحة بيفترض إن الإدارة مش هتعرف ترضي كل الناس، فهتركز كل جهودها الإفصاحية والتشغيلية لإرضاء وتلبية توقعات الفئات القوية المسيطرة على موارد بقاء الشركة."
            },
            {
                "id": 8,
                "text": "A theory that predicts that, if certain conditions are met then, particular accounting practices will be observed, is an example of",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Negative theories" },
                    { "id": "c", "text": "c. Positive accounting theory" },
                    { "id": "d", "text": "d. Political economy theory" },
                    { "id": "e", "text": "e. Normative accounting theory" }
                ],
                "correct": "c",
                "basmaga": "توقع ورصد حدوث ممارسات عملية معينة لو اتوجدت شروط معينة (predicts ... accounting practices will be observed) دي طبعاً نظرية المحاسبة الإيجابية Positive accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Positive accounting theory</strong><br><br>النظرية الإيجابية (PAT) هي اللي بتقوم على صياغة فرضيات تجريبية بتهدف لتفسير وتوقع الممارسات المحاسبية الحالية اللي بنلاحظها في الواقع العملي عند تحقق شروط وظروف تنظيمية محددة."
            },
            {
                "id": 9,
                "text": "Proposed current cost accounting model as an alternative model to historical cost accounting model.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "e",
                "basmaga": "العلماء الرواد اللي صاغوا واقترحوا نموذج التكلفة الجارية الجوهري (Proposed current cost) هم الثنائي الشهير إدوارد وبيل Edward and bell (1961).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Edward and bell (1961)</strong><br><br>العالمان إدوارد وبيل في مؤلفاتهم الصادرة عام 1961 هم أول من صمموا نموذج المحاسبة بالتكلفة الجارية (CCA) القائم على صيانة القدرة التشغيلية المادية للأصل وعزل مكاسب الحيازة."
            },
            {
                "id": 10,
                "text": "........... decreases managers' ability to undertake actions that could be detrimental to the economic welfare of the principals",
                "options": [
                    { "id": "a", "text": "a. Income" },
                    { "id": "b", "text": "b. Price protection" },
                    { "id": "c", "text": "c. Contractual arrangements" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Debt covenants" }
                ],
                "correct": "c",
                "basmaga": "تقييد يد المدير ومنعه من اتخاذ تصرفات تضر بالرفاهية المادية للمالك الأصيل (decreases managers' ability ... detrimental) دي الترتيبات والعقود المكتوبة Contractual arrangements.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Contractual arrangements</strong><br><br>الترتيبات والعقود التعاقدية (Contractual arrangements) المربوطة بأرقام المحاسبة هي الوسيلة القانونية اللي بيصيغها الملاك (Principals) لتقييد يد المدير الانتهازي ومنعه من الإضرار بمصالح الملاك الاقتصادية."
            },
            {
                "id": 11,
                "text": "Context Matching (Q11-Q15): Use choices (a. EMH | b. Debt/equity hypothesis | c. Management compensation hypothesis | d. Efficiency perspective | e. Opportunistic perspective).\n\nQuestion: ........... proposes that managers will elect to use a particular accounting method because this method reflect underlying firm performance.",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "d",
                "basmaga": "سؤال القائمة: اختيار الطريقة المحاسبية لأنها الأفضل والأصدق في التعبير عن أداء وكفاءة الشركة الحقيقي (reflect underlying firm performance) ده منظور الكفاءة المسبق Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Efficiency perspective</strong><br><br>منظور الكفاءة المسبق (Ex-ante / Efficiency perspective) بيفترض حسن نية الإدارة، وإن اختيارهم للسياسات قايم على أساس إن الطريقة دي بتعكس الواقع المالي للشركة بأعلى كفاءة وبأقل تكلفة للتعاقد."
            },
            {
                "id": 12,
                "text": "Context Matching (Q11-Q15): Use choices (a. EMH | b. Debt/equity hypothesis | c. Management compensation hypothesis | d. Efficiency perspective | e. Opportunistic perspective).\n\nQuestion: Capital markets react in an efficient and unbiased manner to publicly available information",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "a",
                "basmaga": "سؤال القائمة: النص الحرفي والتعريف الصريح لتفاعل البورصة بكفاءة وبدون تحيز مع الداتا المتاحة (react in an efficient and unbiased manner) ده فرض كفاءة السوق Efficient Markets Hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Efficient Markets Hypothesis</strong><br><br>فرضية كفاءة السوق (EMH) هي فرضية مالية أساسية بتنص على إن أسواق المال ذكية وبتستوعب وتعكس فوراً وبدون أي تحيز (unbiased manner) مضمون كل معلومة بتنزل للجمهور."
            },
            {
                "id": 13,
                "text": "Context Matching (Q11-Q15): Use choices (a. EMH | b. Debt/equity hypothesis | c. Management compensation hypothesis | d. Efficiency perspective | e. Opportunistic perspective).\n\nQuestion: ........... suggests that managers might elect a particular asset-depreciation method that increases income even though it might not reflect the actual use of the asset.",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "e",
                "basmaga": "سؤال القائمة: تعمد اختيار طريقة إهلاك مبالغ فيها بتطول عمر الأصل لتضخيم أرباح السنة الحالية لمصلحته الشخصية بس، ده بيمثل منظور الانتهازية الخالص Opportunistic perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Opportunistic perspective</strong><br><br>المنظور الانتهازي اللاحق (Ex-post / Opportunistic perspective) بيفترض إن المدير بمجرد صياغة عقود المكافآت هيدور على أي ثغرة أو تلاعب تضخيمي للأرباح لتعظيم مكاسبه وجيبه الشخصي حتى لو خالف الواقع."
            },
            {
                "id": 14,
                "text": "Context Matching (Q11-Q15): Use choices (a. EMH | b. Debt/equity hypothesis | c. Management compensation hypothesis | d. Efficiency perspective | e. Opportunistic perspective).\n\nQuestion: ........... holds managers of firms with bonus plans tied to reported income are more likely to use accounting methods that increase current year reported income.",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "c",
                "basmaga": "سؤال القائمة: ربط خطط المكافآت باختيار طرق محاسبية بتعجل وتضخم أرباح السنة الحالية (bonus plans = increase current year) ده فرض مكافآت الإدارة Management compensation hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Management compensation hypothesis</strong><br><br>فرض المكافآت والتعويضات الإدارية بيتوقع إن المدير اللي حوافزه مربوطة بصافي أرباح الميزانية، هيميل دايماً لطرق بتضخم أرباح السنة الحالية لتعظيم القيمة الحالية للمكافأة المقبوضة فورا."
            },
            {
                "id": 15,
                "text": "Context Matching (Q11-Q15): Use choices (a. EMH | b. Debt/equity hypothesis | c. Management compensation hypothesis | d. Efficiency perspective | e. Opportunistic perspective).\n\nQuestion: ........... predicts that the higher the firm's debt/equity ratio, the more likely managers use accounting methods that increase income.",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Debt/equity hypothesis" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "b",
                "basmaga": "سؤال القائمة: ربط ارتفاع نسبة الديون لحقوق الملكية باختيار طرق تضخم وتزود رقم الربح المعلن (higher debt/equity = increase income) ده فرض الديون Debt/equity hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Debt/equity hypothesis</strong><br><br>فرض نسبة الديون لحقوق الملكية (المعروف بفرض الديون) بيتوقع إن اقتراب المنشأة المدونة من حدود وقيود البنك (Covenants)، بيخلي المدير يضخم أرباح وأصول السنة الحالية عشان يحمي الشركة من التعثر الفني."
            },
            {
                "id": 16,
                "text": "If a consumer price index had increased form 100 in 2023 to 106.67 in 2024, for a bundle of goods, what would be the current purchasing power of every dollar, compared to 2023?",
                "options": [
                    { "id": "a", "text": "a. 96.67 cents" },
                    { "id": "b", "text": "b. 106.67 cents" },
                    { "id": "c", "text": "c. 93.33 cents" },
                    { "id": "d", "text": "d. 90.57 cents" },
                    { "id": "e", "text": "e. 93.75 cents" }
                ],
                "correct": "e",
                "basmaga": "مسألة الأرقام القياسية المحفوظة؛ المؤشر لما يرتفع من 100 لـ 106.67، اقسم المقلوب المباشر (100 / 106.67) واختار الناتج الثابت 93.75 cents فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) 93.75 cents</strong><br><br>الحساب: القوة الشرائية الحقيقية للدولار بتمثل مقلوب التضخم والرقم القياسي المعلن للأسعار &rarr; (100 / 106.67) = 0.9375 وبتحويل القيمة لسنتات تطلع النتيجة الصريحة 93.75 سنت."
            },
            {
                "id": 17,
                "text": "Preparing financial statements is an example of",
                "options": [
                    { "id": "a", "text": "a. Bonding costs" },
                    { "id": "b", "text": "b. Residual costs" },
                    { "id": "c", "text": "c. Monitoring costs" },
                    { "id": "d", "text": "d. Political costs" },
                    { "id": "e", "text": "e. Replacement cost" }
                ],
                "correct": "a",
                "basmaga": "المصاريف والتكاليف اللي بيتحملها المدير لإعداد وتجميع القوائم المالية عشان يثبت أمانته للملاك (Preparing financial statements) هي المثال الحرفي لـ تكاليف الارتباط Bonding costs.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Bonding costs</strong><br><br>تكاليف الارتباط (Bonding Costs) جوه نظرية الوكالة بتعبر عن أي مصاريف بيتحملها الوكيل والمدير (Agent) طواعية ليثبت التزامه وأمانته وسيره مع تطلعات الملاك، وإعداد القوائم هو المثال الرئيسي ليها."
            },
            {
                "id": 18,
                "text": "........... asserts that Organizations continually attempt to ensure that their activities are perceived by outside parties as being legitimate",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Legitimacy theory" },
                    { "id": "c", "text": "c. Stakeholders theory" },
                    { "id": "d", "text": "d. Institutional theory" },
                    { "id": "e", "text": "e. Normative theory" }
                ],
                "correct": "b",
                "basmaga": "السعي والمحاولة الدائمة للشركة لتبدو أنشطتها متوافقة ومقبولة وشرعية في عيون المجتمع الخارجي (perceived by outside parties as being legitimate) دي نظرية الشرعية Legitimacy theory صراحة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Legitimacy theory</strong><br><br>تؤكد نظرية الشرعية (Legitimacy Theory) أن استمرار وبقاء المنشأة مرهون بمدى رضا ونظرة المجتمع الخارجي عنها، ولذلك بتكافح دايماً لتعديل إفصاحاتها لتبدو أنشطتها شرعية ومتوافقة مع قيم المجتمع."
            },
            {
                "id": 19,
                "text": "Using FIFO in periods of inflation or depreciation over longer periods reflects",
                "options": [
                    { "id": "a", "text": "a. Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Political cost hypothesis" },
                    { "id": "c", "text": "c. Efficiency perspective" },
                    { "id": "d", "text": "d. Management compensation hypothesis" },
                    { "id": "e", "text": "e. Management compensation hypothesis and Political cost hypothesis" }
                ],
                "correct": "d",
                "basmaga": "استخدام طريقة FIFO أو إهلاك على فترات ممددة وقت التضخم؛ الحركات دي هدفها تكبير وتضخم أرباح السنة الحالية، وده السلوك الانتهازي المرتبط بفرض المكافآت Management compensation hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Management compensation hypothesis</strong><br><br>استعمال طريقة الـ FIFO وقت التضخم بيطلع تكلفة البضاعة المباعة رخيصة بسعر زمان فالربح بيطلع ضخم وكبير، والمدير بينقي الحركات دي لتضخم الأرباح المعلنة لرفع قيمة مكافأته وحوافزه الشخصية السنوية."
            },
            {
                "id": 20,
                "text": "Holding gains are excluded from operating profits under",
                "options": [
                    { "id": "a", "text": "a. Fair value accounting" },
                    { "id": "b", "text": "b. Current Cost Accounting" },
                    { "id": "c", "text": "c. Historical cost accounting" },
                    { "id": "d", "text": "d. Current purchasing power accounting" },
                    { "id": "e", "text": "e. Continuously Contemporary Accounting" }
                ],
                "correct": "b",
                "basmaga": "أرباح الحيازة (Holding gains) بيتم عزلها واستبعادها تماماً من أرباح التشغيل (excluded from operating profits) تحت مظلة محاسبة التكلفة الجارية الـ CCA.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Current Cost Accounting</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) بتنفرد بعزل واستبعاد مكاسب وأرباح الحيازة (Holding gains) من أرباح التشغيل القابلة للتوزيع، وذلك لضمان الحفاظ على طاقة الشركة التشغيلية المادية intact."
            },
            {
                "id": 21,
                "text": "........... suggests that if managers consider that they are under considerable political scrutiny, this could motivate them to adopt accounting methods that reduce reported income.",
                "options": [
                    { "id": "a", "text": "a. Debt hypothesis" },
                    { "id": "b", "text": "b. Opportunistic perspective" },
                    { "id": "c", "text": "c. The Efficient Markets Hypothesis" },
                    { "id": "d", "text": "d. Management compensation hypothesis" },
                    { "id": "e", "text": "e. Political cost hypothesis" }
                ],
                "correct": "e",
                "basmaga": "الشعور بالوقوع تحت ضغط وتدقيق ومساءلة سياسية في المجتمع وتصغير وتخفيض أرباح الميزانية (under political scrutiny = reduce income) ده فرض التكاليف السياسية Political cost hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Political cost hypothesis</strong><br><br>فرض التكاليف السياسية بيثبت إن المديرين في الشركات الضخمة والعملاقة لما يشعروا بالمساءلة والرقابة الشديدة من الضرائب أو الرأي العام، هيلجأوا لطرق بتقلل الدخل والربح عشان يبانوا عاديين ويهربوا من الهجوم."
            },
            {
                "id": 22,
                "text": "........... is considered to be the process that leads to an organization being adjudged legitimate.",
                "options": [
                    { "id": "a", "text": "a. Decoupling" },
                    { "id": "b", "text": "b. Legitimacy" },
                    { "id": "c", "text": "c. Legitimation" },
                    { "id": "d", "text": "d. Legitimacy gap" },
                    { "id": "e", "text": "e. Social contract" }
                ],
                "correct": "c",
                "basmaga": "لمحت كلمة العملية والخطوات التكتيكية اللي بتقود المنشأة لنيل اعتراف المجتمع بشرعيتها (the process that leads) دي عملية إضفاء الشرعية Legitimation.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Legitimation</strong><br><br>عملية إضفاء وإكساب الشرعية (Legitimation) هي الخطوات والإجراءات العملية والديناميكية (Process) اللي بتعملها وتقودها المنشأة لإقناع ونيل اعتراف وحكم المجتمع الخارجي بشرعيتها."
            },
            {
                "id": 23,
                "text": "Defined the theory as a coherent set of hypotheticals, conceptual and pragmatic principles forming the general framework of reference for a field of inquiry.",
                "options": [
                    { "id": "a", "text": "a. Hendriksen (1970)" },
                    { "id": "b", "text": "b. Edward and bell (1961)" },
                    { "id": "c", "text": "c. Ball and Brown (1968)" },
                    { "id": "d", "text": "d. Watts and Zimmerman (1986)" },
                    { "id": "e", "text": "e. Jensen and Meckling (1976)" }
                ],
                "correct": "a",
                "basmaga": "التعريف الأكاديمي الكبير للنظرية بإنها برنامج ومجموعة مبادئ بتعمل إطار مرجعي كلي للاستقصاء (general framework of reference)، ده تعريف العالم هندريكسن Hendriksen (1970).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Hendriksen (1970)</strong><br><br>هذا هو التعريف الكلاسيكي الصارم والشامل اللي صاغه الباحث المحاسبي الكبير هندريكسن في مؤلفاته عام 1970؛ بإن النظرية بتمثل إطار عمل عام مرجعي متكامل للأبحاث والممارسات المحاسبية."
            },
            {
                "id": 24,
                "text": "........... holds that there will be various social contracts negotiated with different Stakeholder groups, rather than one contract with society in general",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Stakeholders theory" },
                    { "id": "c", "text": "c. Normative theory" },
                    { "id": "d", "text": "d. Legitimacy theory" },
                    { "id": "e", "text": "e. Institutional theory" }
                ],
                "correct": "b",
                "basmaga": "وجود عقود اجتماعية متعددة ومتنوعة متفاوض عليها مع فئات ومجموعات منفصلة (various social contracts negotiated with different groups) دي جوهر نظرية أصحاب المصلحة Stakeholders theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Stakeholders theory</strong><br><br>نظرية أصحاب المصلحة (Stakeholder theory) بتتميز بالاعتراف بالتنوع؛ وبتفترض إن المجتمع متقسم فئات ومجموعات نوعية، والشركة بالتالي بتبرم وبتتفاوض على عدة عقود اجتماعية منفصلة معاهم لتلبية توقعاتهم الفردية الحيوية."
            },
            {
                "id": 25,
                "text": "Managers might see a need for their organizations to be seen to be adopting particular structures and practices, the actual organisational practices can be very different",
                "options": [
                    { "id": "a", "text": "a. Isomorphism" },
                    { "id": "b", "text": "b. Decoupling" },
                    { "id": "c", "text": "c. Legitimacy" },
                    { "id": "d", "text": "d. Social contract" },
                    { "id": "e", "text": "e. Legitimacy gap" }
                ],
                "correct": "b",
                "basmaga": "إظهار شكل تنظيمي وممارسات شكلية معلنة برا قدام الناس بينما كواليس الشغل والعمل الفعلي جوه مختلفة تماماً (actual practices can be very different) ده الفصل التنظيمي والـ Decoupling.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Decoupling</strong><br><br>التفكيك أو الفصل الظاهري (Decoupling) في النظرية المؤسسية بيعبر عن قيام الإدارة بتبني هياكل وممارسات صورية معلنة بره لنيل الرضا والشرعية، بينما تدار الممارسات الفعلية (Actual practices) في الجوهر الخفي بصورة منفصلة تماماً."
            },
            {
                "id": 26,
                "text": "Which of the following is not true about theories in general?",
                "options": [
                    { "id": "a", "text": "a. Theories are ad hoc in nature" },
                    { "id": "b", "text": "b. Theories should be based on logical reasoning" },
                    { "id": "c", "text": "c. The components of a theory should logically combine together" },
                    { "id": "d", "text": "d. Theories are a coherent set of hypothetical, conceptual and pragmatic principles forming the general framework of reference for a field of inquiry" },
                    { "id": "e", "text": "e. Theories are scheme or system of ideas or statements held as an explanation of a group of facts or phenomena" }
                ],
                "correct": "a",
                "basmaga": "بيسأل عن العبارة الغلط عن النظريات عامة (not true)، اختار الجملة a فوراً لأن النظريات عمرها ما تكون عشوائية أو مؤقتة الغرض (Theories are NOT ad hoc).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Theories are ad hoc in nature</strong><br><br>الخيار a هو العبارة الخاطئة والمطلوبة؛ لأن المنهج بيؤكد صراحة في شابتر 1 إن النظريات العلمية ليست عشوائية أو مرتجلة لحالات طارئة فردية (not ad hoc)، بل هي بناء فكري منظم مستند بانتظام للمنطق والتحليل المستمر."
            },
            {
                "id": 27,
                "text": "Capital asset pricing model provides an indication of ........... on securities.",
                "options": [
                    { "id": "a", "text": "a. The actual return" },
                    { "id": "b", "text": "b. The expected return" },
                    { "id": "c", "text": "c. The abnormal return" },
                    { "id": "d", "text": "d. The risk, return component" },
                    { "id": "e", "text": "e. The risk-free rate of return" }
                ],
                "correct": "b",
                "basmaga": "نموذج تقييم وتسعير الأصول الرأسمالية الـ CAPM بيوفر لينا دلالة وحسبة تامة ورسمية للعائد المتوقع والنموذجي للسهم بالبورصة The expected return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) The expected return</strong><br><br>نموذج الـ (CAPM) هو أداة مالية وظيفتها الأساسية الحتمية حساب وإعطاء مؤشر عن معدل العائد المتوقع (Expected rate of return) للأوراق المالية والأسهم عبر ربط الفائدة الآمنة بعلاوة مخاطر تقلب السوق العامة."
            },
            {
                "id": 28,
                "text": "Organizations conform because they are rewarded for doing so through increased legitimacy, resources and survival capabilities",
                "options": [
                    { "id": "a", "text": "a. Institutional theory" },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. Legitimacy theory" },
                    { "id": "d", "text": "d. Stakeholders theory" },
                    { "id": "e", "text": "e. Normative theory" }
                ],
                "correct": "a",
                "basmaga": "انصياع وتوافق المنشآت مع العرف السائد لأن البيئة بتكافئها بزيادة الشرعية وموارد البقاء (increased legitimacy, resources and survival) دي جوهر وميدان النظرية المؤسسية Institutional theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Institutional theory</strong><br><br>الركيزة الأساسية للنظرية المؤسسية (Institutional theory) بتبرهن على إن انصياع وتوافق الشركات (Conform) مع الهياكل والتقاليد السائدة مش عبثي، بل لأن البيئة بتكافئ المطيع بزيادة الشرعية والموارد وقدرات البقاء والاستمرار الاستراتيجي."
            },
            {
                "id": 29,
                "text": "........... investigated stock market reaction to accounting earnings announcements.",
                "options": [
                    { "id": "a", "text": "a. Edward and bell (1961)" },
                    { "id": "b", "text": "b. Jensen and Meckling (1976)" },
                    { "id": "c", "text": "c. Ball and Brown (1968)" },
                    { "id": "d", "text": "d. Watts and Zimmerman (1986)" },
                    { "id": "e", "text": "e. Hendriksen (1970)" }
                ],
                "correct": "c",
                "basmaga": "البحث والدراسة التجريبية التاريخية لرصد رد فعل سوق المال والبورصة لإعلانات معلومات الأرباح الدفترية المحاسبية، ده شغل العالمين الكبار بول وبراون Ball and Brown (1968).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Ball and Brown (1968)</strong><br><br>العالمان (Ball and Brown 1968) هم أصحاب الفضل التجريبي الأول في تاريخ المحاسبة لإثبات منفعة الأرباح وملاحظة تفاعل البورصة وعوائد الأسهم مع خروج البيانات المالية الفجائية وغير المتوقعة."
            },
            {
                "id": 30,
                "text": "........... assumes that security prices reflect the information content of publicly available information and this information is not restricted to accounting disclosures.",
                "options": [
                    { "id": "a", "text": "a. Contractual arrangements" },
                    { "id": "b", "text": "b. Positive accounting theory" },
                    { "id": "c", "text": "c. Price protection" },
                    { "id": "d", "text": "d. Agency theory" },
                    { "id": "e", "text": "e. Efficient market hypothesis" }
                ],
                "correct": "e",
                "basmaga": "الافتراض بإن أسعار الأسهم بالبورصة بتعكس وتستوعب كل الداتا المتاحة علناً ومش حكر ولا مقتصرة على المحاسبة بس، ده نص فرضية كفاءة السوق Efficient market hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Efficient market hypothesis</strong><br><br>فرضية كفاءة السوق (EMH) بتنص وتفترض إن البورصة واعية وذكية وبتعكس عوائدها فوراً وبدون أي تحيز مضمون كل معلومة بتنزل للجمهور، ومش مقتصرة أو حكراً (not restricted) على أرقام الإفصاحات المحاسبية بس."
            },
            {
                "id": 31,
                "text": "According to ........... management must give equal consideration to the interests of all stakeholders, Regardless of whether this will lead to improved financial performance",
                "options": [
                    { "id": "a", "text": "a. Institutional theory" },
                    { "id": "b", "text": "b. Positive accounting theory" },
                    { "id": "c", "text": "c. Positive branch of stakeholder theory" },
                    { "id": "d", "text": "d. Normative branch of stakeholder theory" },
                    { "id": "e", "text": "e. Normative accounting theory" }
                ],
                "correct": "d",
                "basmaga": "وجوب مراعاة كل فئات أصحاب المصلحة بالتساوي والعدل بغض النظر هل ده هيكسبنا فلوس وأرباح زيادة ولا لأ (Regardless of financial performance) ده الفرع الأخلاقي المعياري لنظرية أصحاب المصلحة Normative branch.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Normative branch of stakeholder theory</strong><br><br>الفرع الأخلاقي المعياري (Normative/Ethical branch) لنظرية أصحاب المصلحة بيفترض إن المنشأة يجب أن تدار لعدالة ومنفعة الجميع بإنصاف، دون تضحية أو اعتبار (Regardless) لحجم الأثر المالي أو الأرباح الناتجة عن ذلك السلوك المحترم."
            },
            {
                "id": 32,
                "text": "Rewarding managers on ........... may discourage management from investment in projects that are not expected to produce consistent return or expected to produce minimal returns in early years before getting increase.",
                "options": [
                    { "id": "a", "text": "a. Market-based-bonus schemes" },
                    { "id": "b", "text": "b. Fixed basis rewards" },
                    { "id": "c", "text": "c. Accounting-based bonus schemes" },
                    { "id": "d", "text": "d. Both of Fixed basis rewards and Accounting-based bonus schemes" },
                    { "id": "e", "text": "e. Both of Fixed basis rewards and Market-based bonus schemes" }
                ],
                "correct": "c",
                "basmaga": "النظام اللي بيحرض ويجبر المدير إنه يرفض مشاريع التطوير طويلة الأجل لو الكاش فلو بتاعها مش منتظم أو قليل في الأول؛ هو نظام الحوافز المحاسبية الدفترية Accounting-based bonus schemes.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Accounting-based bonus schemes</strong><br><br>ربط مكافآت الإدارة بأرقام الحسابات الدفترية السنوية (Accounting-based) بيخلق خطر قصر النظر الاستراتيجي (Short-term focus)؛ فالمدير بيرفض يغامر ويستثمر في مشاريع تكنولوجية أو تطويرية طويلة الأجل لمجرد إن عوائدها مش منتظمة أو قليلة في أول كام سنة وهتقلل حوافزه السنادي."
            },
            {
                "id": 33,
                "text": "........... are less common and they include obligations to transfer goods and services in the future which could change in terms of their monetary values",
                "options": [
                    { "id": "a", "text": "a. Monetary assets" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Non-monetary liabilities" },
                    { "id": "d", "text": "d. Monetary liabilities" },
                    { "id": "e", "text": "e. Net monetary assets" }
                ],
                "correct": "c",
                "basmaga": "التزامات ووعود مستقبلية بنقل سلع ومنافع أو أداء خدمات وبتتغير قيمتها بالفلوس مع التضخم، دي الالتزامات غير النقدية Non-monetary liabilities.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Non-monetary liabilities</strong><br><br>الالتزامات غير النقدية (Non-monetary liabilities) هي التعهدات والالتزامات غير الشائعة بكثرة والتي تلزم المنشأة بنقل سلع ومنافع أو أداء خدمات في فترات مستقبلية وتتغير وتتأثر قيمتها النقدية بتأثر الأسعار والتضخم."
            },
            {
                "id": 34,
                "text": "The situation where there appears to be a lack of correspondence between \"how society believes\" an organization should act and \"how it is perceived\" that the organization has acted",
                "options": [
                    { "id": "a", "text": "a. Decoupling" },
                    { "id": "b", "text": "b. Legitimacy" },
                    { "id": "c", "text": "c. Legitimation" },
                    { "id": "d", "text": "d. Legitimacy gap" },
                    { "id": "e", "text": "e. Social contract" }
                ],
                "correct": "d",
                "basmaga": "وجود تباين وغياب للتطابق التام بين تطلعات واعتقادات المجتمع وبين تصرفات الكيان المدركة (lack of correspondence) يمثل فجوة الشرعية Legitimacy gap.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Legitimacy gap</strong><br><br>فجوة الشرعية (Legitimacy gap) بتعبر عن حالة وجود مساحة اختلاف وتنافر بين الكيفية اللي بيطالب المجتمع إن الشركة تمشي بيها وبين إدراك المجتمع الفعلي لممارسات وانحرافات المنشأة الحالية."
            },
            {
                "id": 35,
                "text": "Which of the following is not a feature of current cost accounting?",
                "options": [
                    { "id": "a", "text": "a. It uses current values which based on replacement cost" },
                    { "id": "b", "text": "b. It seeks to maintain the operating capability of capital" },
                    { "id": "c", "text": "c. It seeks to maintain the purchasing power of capital" },
                    { "id": "d", "text": "d. It differentiates between profits from trading and from holding gains" },
                    { "id": "e", "text": "e. It uses specific prices of assets rather than general price-level adjustments" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن ميزة **مش** تابعة للـ CCA، اختار الجملة اللي فيها purchasing power لأن صيانة الحفاظ على القوة الشرائية دي ميزة ووظيفة حصرية لنظام الـ CPP بس.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) It seeks to maintain the purchasing power of capital</strong><br><br>محاسبة التكلفة الجارية (CCA) بتستهدف صيانة الحفاظ على رأس المال المادي أو الطاقة التشغيلية (Operating capability)، أما صيانة القوة الشرائية العامة (Purchasing power) فدي ميزة نظام الـ CPP."
            },
            {
                "id": 36,
                "text": "........... is a deficiency in a loan agreement that arises not from a failure to make payments as promised, but from a failure to uphold some other aspect of the loan terms",
                "options": [
                    { "id": "a", "text": "a. Constraints" },
                    { "id": "b", "text": "b. Price protection" },
                    { "id": "c", "text": "c. Contracts" },
                    { "id": "d", "text": "d. Covenants" },
                    { "id": "e", "text": "e. Technical default" }
                ],
                "correct": "e",
                "basmaga": "مخالفة شرط مالي محاسبي مسجل في العقد برغم إن الشركة بتدفع الأقساط والفوائد للبنك في مواعيدها بانتظام، ده مصطلح التعثر والافتراض الفني Technical default.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Technical default</strong><br><br>التعثر والافتراض الفني (Technical default) بيحصل لما الشركة تخل بـ شرط مالي محاسبي مسجل في العقد (زي تخطي النسبة المسموحة للديون) برغم إنها ملتزمة وبتدفع الأقساط والفوائد للبنك في مواعيدها بانتظام، وده مؤشر خطر بيعطي الحق للبنك برفع الفائدة."
            },
            {
                "id": 37,
                "text": "Assuming self-interest, rewarding managers on ........... may induce them to not take great risks as he will not share in potential gains.",
                "options": [
                    { "id": "a", "text": "a. Market-based bonus schemes" },
                    { "id": "b", "text": "b. Fixed basis rewards" },
                    { "id": "c", "text": "c. Accounting-based bonus schemes" },
                    { "id": "d", "text": "d. Both of Fixed basis rewards and Accounting-based bonus schemes" },
                    { "id": "e", "text": "e. Both of Fixed basis rewards and Market-based bonus schemes" }
                ],
                "correct": "b",
                "basmaga": "المدير هيرفض ياخد أي مخاطرة مالية أو توسعية (not take great risks) لو شغال بنظام الراتب والمكافأة الثابتة الجامدة fixed basis rewards لعدم وجود عائد إضافي له.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Fixed basis rewards</strong><br><br>تحت فرضية الأنانية، لو راتب المدير محدد بمبلغ ثابت ملوش علاقة بالأرباح أو البورصة، هيكون دافعه وحافزه لتكبير قيمة الشغل وتطوير قيمة الشركة ضعيف ومحدود جداً لأنه مش هيطوله أي زيادة مادية."
            },
            {
                "id": 38,
                "text": "Using LIFO in periods of inflation or accelerated depreciation of fixed assets reflect",
                "options": [
                    { "id": "a", "text": "a. Bonus plan hypothesis" },
                    { "id": "b", "text": "b. Debt equity hypothesis" },
                    { "id": "c", "text": "c. Efficient Markets Hypothesis" },
                    { "id": "d", "text": "d. Political cost hypothesis" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "d",
                "basmaga": "استخدام طريقة LIFO أو الإهلاك المعجل وقت التضخم؛ الحركات دي هدفها تخفيض وتصغير أرباح السنة الحالية، وده السلوك التحوطي التابع لفرض التكاليف السياسية Political cost hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Political cost hypothesis</strong><br><br>طريقة الـ LIFO والإهلاك المعجل وقت التضخم بيحملوا قائمة الدخل بمصاريف كبيرة فبيصغروا رقم صافي الربح الدفتري المعلن، والمديرين في الشركات الكبيرة بيلجأوا للتكتيك ده عشان يبانوا عاديين ويهربوا من لفت الأنظار السياسية للضرائب."
            },
            {
                "id": 39,
                "text": "Distribution of historical cost profits during times of rising prices can actually lead to",
                "options": [
                    { "id": "a", "text": "a. Increase in operating capacity" },
                    { "id": "b", "text": "b. Reduction in operating capacity" },
                    { "id": "c", "text": "c. Reduction in financial capital" },
                    { "id": "d", "text": "d. Increase in financial capital" },
                    { "id": "e", "text": "e. Maintaining operating capacity" }
                ],
                "correct": "b",
                "basmaga": "توزيع أرباح التكلفة التاريخية غير المعدلة بالكامل وقت الغلاء والتضخم؛ بيؤدي فوراً لنقص وانخفاض حاد في حجم الطاقة التشغيلية للمنشأة Reduction in operating capacity.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Reduction in operating capacity</strong><br><br>توزيع الأرباح التقليدية بالكامل وقت زيادة الأسعار بيحرم المنشأة من السيولة الكافية لإحلال البضاعة المباعة، مما يتسبب في تجريد وتآكل القدرة التشغيلية للمنشأة (Reduction in operating capacity)."
            },
            {
                "id": 40,
                "text": "Which of the following statements is not true in times of inflation?",
                "options": [
                    { "id": "a", "text": "a. Holders of monetary assets will lose" },
                    { "id": "b", "text": "b. Holders of monetary assets will gain" },
                    { "id": "c", "text": "c. Holders of monetary liabilities will gain" },
                    { "id": "d", "text": "d. Assets will have less purchasing power at the end of the period relative to beginning of the period" },
                    { "id": "e", "text": "e. If the amount of monetary assets is the same as monetary liabilities, then no gains or losses occur" }
                ],
                "correct": "b",
                "basmaga": "بيسأل عن العبارة الغلط وقت التضخم، اختار الجملة b اللي بتقول إن حاملي الأصول النقدية بيكسبوا، لأن الصح إنهم بيخسروا قوتها الشرائية مركونة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Holders of monetary assets will gain</strong><br><br>الخيار b يمثل عبارة خاطئة تماماً وغير صحيحة (Not true)؛ لأن حيازة الأصول النقدية كالكاش وقت التضخم بيتسبب في خسارة القوة الشرائية (loss) وليس مكسبها لأن هذه الأموال تفقد قدرتها على شراء نفس كمية السلع بمرور الوقت."
            },
            {
                "id": 41,
                "text": "........... are those that remain fixed in terms of their monetary value but their purchasing power will change over time",
                "options": [
                    { "id": "a", "text": "a. Monetary assets" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Non-monetary liabilities" },
                    { "id": "d", "text": "d. Monetary liabilities" },
                    { "id": "e", "text": "e. Net monetary assets" }
                ],
                "correct": "a",
                "basmaga": "بنود قيمتها بالفلوس ثابتة على الورق بس قوتها الشرائية بتتغير وبتموت بمرور الوقت (fixed monetary value, purchasing power change) دي البنود والأصول النقدية Monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Monetary assets</strong><br><br>الأصول النقدية (Monetary Assets) كالنقدية السائلة بالخزنة أو البنك وحسابات المدينين تظل قيمتها الرقمية الاسمية ثابتة بالدفاتر، ولكن قيمتها وقدرتها الشرائية الفعلية تنخفض وتتغير كلياً مع التضخم."
            },
            {
                "id": 42,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintaining the purchasing power of capital intact?",
                "options": [
                    { "id": "a", "text": "a. Continuously contemporary accounting" },
                    { "id": "b", "text": "b. Historical cost accounting" },
                    { "id": "c", "text": "c. General price-level adjustment accounting" },
                    { "id": "d", "text": "d. Current cost accounting" },
                    { "id": "e", "text": "e. Fair value accounting" }
                ],
                "correct": "c",
                "basmaga": "تلمح عبارة الحفاظ على القوة الشرائية لرأس المال ثابتة ومعافاة (maintaining the purchasing power of capital intact) اختار طريقة تعديل مستوى الأسعار العام General price-level adjustment accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) General price-level adjustment accounting</strong><br><br>نموذج المحاسبة بمستوى الأسعار العام (المعروف بـ CPPA) هو النموذج المعياري الوحيد المصمم بهدف تحديث وصيانة القوة الشرائية الحقيقية لرأس المال الثابت باستخدام الأرقام القياسية العامة للتضخم."
            },
            {
                "id": 43,
                "text": "........... is the weighted average of the current prices of goods and services related to a weighted average of prices in a prior period",
                "options": [
                    { "id": "a", "text": "a. Income" },
                    { "id": "b", "text": "b. Monetary assets" },
                    { "id": "c", "text": "c. Price index" },
                    { "id": "d", "text": "d. Covenants" },
                    { "id": "e", "text": "e. Monetary liabilities" }
                ],
                "correct": "c",
                "basmaga": "التعريف الرسمي لمتوسط الأسعار الحالي منسوباً لمتوسط أسعار سنة مسبقة، ده طبعاً الرقم القياسي للأسعار Price index.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Price index</strong><br><br>المؤشر القياسي للأسعار (Price Index) هو الأداة الإحصائية المحاسبية التي تعبر عن المتوسط المرجح لأسعار سلة من السلع والخدمات الحالية منسوبة ومقسومة على متوسط أسعارها في فترة سابقة تسمى سنة الأساس."
            }
        ]
    },


    "accounting_theory_exam_model_3": {
        "title": "امتحان الفاينل الشامل - النموذج الثالث",
        "description": "بنك الأسئلة الرسمي المعتمد والمطابق بنسبة 100% لنص مستند امتحانات المحاسبة المالية",
        "questions": [
            {
                "id": 1,
                "text": "The key theory that underpins positive accounting theory is:",
                "options": [
                    { "id": "a", "text": "a. Agency theory" },
                    { "id": "b", "text": "b. Stakeholders theory" },
                    { "id": "c", "text": "c. Normative theory" },
                    { "id": "d", "text": "d. Legitimacy theory" },
                    { "id": "e", "text": "e. Institutional theory" }
                ],
                "correct": "a",
                "basmaga": "الأساس والعمود الفلسفي اللي شايل نظرية الـ PAT كلها (underpins positive accounting) هو نظرية الوكالة Agency theory الكبيرة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Agency theory</strong><br><br>نظرية الوكالة (Agency Theory) القائمة على علاقة المالك بالمدير والعقود المبرمة بينهم هي المحرك والأساس الفلسفي الأكبر لنظرية المحاسبة الإيجابية (PAT)."
            },
            {
                "id": 2,
                "text": "........... holds that managers will tend to depreciate fixed assets over longer periods.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Management compensation hypothesis" },
                    { "id": "c", "text": "c. Both of Debt hypothesis and Management compensation hypothesis" },
                    { "id": "d", "text": "d. Both of Management compensation hypothesis and Political cost hypothesis" }
                ],
                "correct": "c",
                "basmaga": "حساب الإهلاك على فترات ممددة وطويلة (longer periods) بيقلل مصروف السنة ويضخم أرباح الورق، ومين اللي مصلحته يضخم أرباحه؟ فرضي الديون والمكافآت مع بعض (Both of Debt and Management compensation).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Both of Debt hypothesis and Management compensation hypothesis</strong><br><br>تخفيض مصروف الإهلاك عبر مد سنوات عمر الأصل بيمهد لظهور أرباح دفترية ضخمة، والسلوك ده بيخدم فرض المكافآت (لرفع الحوافز) وفرض الديون (لتحسين الصورة أمام البنوك والهروب من القيود)."
            },
            {
                "id": 3,
                "text": "Context Matching: [a. Price protection | b. Income | c. Debt covenants | d. Technical default | e. Contractual arrangements]\n\nQuestion: A deficiency in a loan agreement that arises not from a failure to make payments as promised, but from a failure to uphold some other aspect of the loan terms.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "d",
                "basmaga": "مخالفة شرط مالي محاسبي مسجل في حقل اتفاقية القرض برغم سداد الأقساط بانتظام (failure to uphold some other aspect) ده مصطلح التعثر والافتراض الفني Technical default.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Technical default</strong><br><br>التعثر الفني (Technical default) بيحصل لما الشركة تخل بـ بند أو شرط مالي مكتوب في عقد البنك (زي حد الأصول للديون) برغم إنها ملتزمة وبتدفع الأقساط والفوائد للبنك في مواعيدها بانتظام."
            },
            {
                "id": 4,
                "text": "Context Matching: [a. Price protection | b. Income | c. Debt covenants | d. Technical default | e. Contractual arrangements]\n\nQuestion: The maximum amount that can be consumed during the period, while still expecting to be as well off at the end of the period as at the beginning of the period.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "b",
                "basmaga": "المفهوم الاقتصادي لعمنا هيكس؛ أقصى كمية وفلوس ينفع تستهلكها طوال السنة وتفضل ميسور الحال بآخر السنة زي أولها (expecting to be as well off) ده تعريف الدخل Income.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Income</strong><br><br>هذا هو التعريف الاقتصادي الحرفي للدخل (Income) وصياغة ميسورية الحال (Well-offness) للباحث هيكس عام 1946."
            },
            {
                "id": 5,
                "text": "Context Matching: [a. Price protection | b. Income | c. Debt covenants | d. Technical default | e. Contractual arrangements]\n\nQuestion: Undertakings provided as a part of a contract associated with a loan to restrict the borrower from taking particular actions.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "c",
                "basmaga": "التعهّدات والقيود والالتزامات المكتوبة جوه عقد التمويل لتقييد حركات المقترض (restrict the borrower) دي الشروط البنكية Debt covenants.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Debt covenants</strong><br><br>القيود والشروط الائتمانية للبنوك (Debt covenants) هي البنود والاشتراطات الرسمية المدرجة جوه عقد التمويل لتقييد حركات وقرارات العميل المقترض لحماية أموال البنك."
            },
            {
                "id": 6,
                "text": "Context Matching: [a. Price protection | b. Income | c. Debt covenants | d. Technical default | e. Contractual arrangements]\n\nQuestion: Minimize managers' ability to undertake actions detrimental to the interests of the principals.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "e",
                "basmaga": "الآلية والأداة القانونية لتقييد يد المدير ومنعه من اتخاذ أي قرارات تضر بمصالح الملاك (Minimize managers' ability) دي الاتفاقيات والعقود التعاقدية Contractual arrangements.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Contractual arrangements</strong><br><br>الاتفاقيات والترتيبات التعاقدية (Contractual arrangements) المربوطة بمخرجات أرقام المحاسبة بيتم صياغتها لربط وتقييد سلوك المدير الأناني ومنعه من الإضرار بالرفاهية الاقتصادية للملاك."
            },
            {
                "id": 7,
                "text": "Context Matching: [a. Price protection | b. Income | c. Debt covenants | d. Technical default | e. Contractual arrangements]\n\nQuestion: Lower salary to compensate principals for adverse actions that the managers are considered to undertake.",
                "options": [
                    { "id": "a", "text": "a. Price protection" },
                    { "id": "b", "text": "b. Income" },
                    { "id": "c", "text": "c. Debt covenants" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Contractual arrangements" }
                ],
                "correct": "a",
                "basmaga": "عرض مرتب قليل مقدماً على المدير الأناني لتعويض الملاك عن خيانتهم المتوقعة في الخفاء، ده مصطلح حماية السعر Price protection.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Price protection</strong><br><br>مفهوم حماية السعر (Price protection) جوه نظرية الوكالة بيفترض إن المالك الذكي في غياب العقود والرقابة بيعرض على المدير مرتب منخفض لتعويض وتحصين أمواله من أي انحرافات ذاتية متوقعة."
            },
            {
                "id": 8,
                "text": "Which of the following measurement models of accounting equate with the perspective of maintaining the purchasing power of capital intact?",
                "options": [
                    { "id": "a", "text": "a. Fair value accounting" },
                    { "id": "b", "text": "b. Historical cost accounting" },
                    { "id": "c", "text": "c. Current cost accounting" },
                    { "id": "d", "text": "d. Continuously contemporary accounting" },
                    { "id": "e", "text": "e. General price-level adjustment accounting" }
                ],
                "correct": "e",
                "basmaga": "تلمح عبارة الحفاظ على القوة الشرائية لرأس المال معافاة وثابتة (maintaining the purchasing power of capital intact) اختار طريقة تعديل مستوى الأسعار العام General price-level adjustment accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) General price-level adjustment accounting</strong><br><br>نموذج المحاسبة بمستوى الأسعار العام (المعروف بـ CPPA) هو النموذج المعياري الوحيد المصمم بهدف تحديث وصيانة القوة الشرائية الحقيقية لرأس المال الثابت باستخدام الأرقام القياسية العامة للتضخم."
            },
            {
                "id": 9,
                "text": "Which of the following statements is not true in times of inflation?",
                "options": [
                    { "id": "a", "text": "a. Holders of monetary assets will lose" },
                    { "id": "b", "text": "b. Holders of monetary liabilities will gain" },
                    { "id": "c", "text": "c. Assets will have less purchasing power at the end of the period relative to beginning of the period" },
                    { "id": "d", "text": "d. If the amount of monetary assets is the same as monetary liabilities, then no gains or losses occur" },
                    { "id": "e", "text": "e. If the amount of monetary assets held is less than monetary liabilities held, then a net loss occur" }
                ],
                "correct": "e",
                "basmaga": "بيسأل عن الجملة الغلط وقت التضخم (not true)، اختار الجملة e اللي بتقول لو الأصول النقدية أقل من الديون يحصل خسارة صافية، لأن الصح إن الموقف ده بيكسب مكسب Gain مش خسارة.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) If the amount of monetary assets held is less than monetary liabilities held, then a net loss occur</strong><br><br>العبارة e خاطئة وغير صحيحة؛ لأن وجود أصول نقدية (كاش) أقل من الالتزامات والديون النقدية وقت الغلاء بيترتب عليه مكسب صافي للقوة الشرائية (Net Gain) لأننا هنسدد ديوننا بفلوس فقدت قيمتها."
            },
            {
                "id": 10,
                "text": "Research investigated the relationship between accounting earnings and security returns suggested that if earnings announcements provided new information, then capital market would react, and the reaction taking the form of ........... return on securities.",
                "options": [
                    { "id": "a", "text": "a. The normal return" },
                    { "id": "b", "text": "b. The expected return" },
                    { "id": "c", "text": "c. The actual return" },
                    { "id": "d", "text": "d. The abnormal return" },
                    { "id": "e", "text": "e. The risk-free rate of return" }
                ],
                "correct": "d",
                "basmaga": "تلمح رد فعل البورصة وسوق المال لإعلانات معلومات أرباح جديدة ومفاجئة (capital market would react)، التفاعل ده بياخد شكل عوائد غير طبيعية ومفاجئة The abnormal return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) The abnormal return</strong><br><br>أبحاث الاستجابة السلوكية لأسواق المال (زي دراسة بول وبراون 1968) أثبتت إن خروج معلومات محاسبية جديدة فجأة للسوق بيولد حركة سريعة وتفاعل للأسهم في البورصة بياخذ شكل عوائد غير طبيعية أو شاذة (Abnormal return)."
            },
            {
                "id": 11,
                "text": "In applying the CPPA model, if the price-level index was 120 at the beginning of the year, 150 at end of the year, and averaged 135 during the year, what price-level index would be applied to sales that occurred uniformly during the year?",
                "options": [
                    { "id": "a", "text": "a. 150/135" },
                    { "id": "b", "text": "b. 135/150" },
                    { "id": "c", "text": "c. 150/120" },
                    { "id": "d", "text": "d. 120/150" },
                    { "id": "e", "text": "e. 135/120" }
                ],
                "correct": "a",
                "basmaga": "تريكة مبيعات التضخم المنتظمة جوه الـ CPP؛ اقسم دايماً مؤشر آخر السنة على مؤشر المتوسط العام (Ending Index / Average Index) يعني الكسر الصح هو 150/135.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) 150/135</strong><br><br>لتعديل وتحديث البنود غير النقدية الموزعة بانتظام طوال شهور السنة كالمبيعات (sales uniformly) بطريقة الـ CPP؛ بنقسم الرقم القياسي لنهاية السنة (150) على متوسط الأرقام القياسية السائدة طوال العام (135) فينتج الكسر الحسابي 150/135."
            },
            {
                "id": 12,
                "text": "A model that states that the most useful information for economic decision making is the actual valuations, as measured by replacement cost, is:",
                "options": [
                    { "id": "a", "text": "a. Current purchasing power accounting" },
                    { "id": "b", "text": "b. Continuously Contemporary Accounting" },
                    { "id": "c", "text": "c. Current Cost Accounting" },
                    { "id": "d", "text": "d. Historical cost accounting" },
                    { "id": "e", "text": "e. Fair value accounting" }
                ],
                "correct": "c",
                "basmaga": "تلمح كلمة التقييمات الفعلية مقاسة بتكلفة الإحلال (actual valuations, measured by replacement cost) اختار التكلفة الجارية الكلاسيكية Current Cost Accounting.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Current Cost Accounting</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) هي النموذج المعياري القائم تماماً على استخدام التقييمات الفعلية للأصول في السوق مقاسةً بـ تكلفة الإحلال (Replacement Cost) وقت إعداد القوائم."
            },
            {
                "id": 13,
                "text": "If a consumer price index had increased from 100 in 2018 to 106.67 in 2019, for a bundle of goods, what would be the current purchasing power of every dollar, compared to 2018?",
                "options": [
                    { "id": "a", "text": "a. 96.67 cents" },
                    { "id": "b", "text": "b. 93.33 cents" },
                    { "id": "c", "text": "c. $106.67" },
                    { "id": "d", "text": "d. 93.57 cents" },
                    { "id": "e", "text": "e. 93.75 cents" }
                ],
                "correct": "e",
                "basmaga": "المسألة الشهيرة للمؤشر القياسي لما يرتفع من 100 لـ 106.67، اقسم المقلوب (100 / 106.67) واختار الناتج الثابت 93.75 cents فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) 93.75 cents</strong><br><br>القوة الشرائية للدولار بتساوي مقلوب الرقم القياسي للاسعار &rarr; (100 / 106.67) = 0.9375 وبتحويلها لسنتات تطلع القيمة الصريحة 93.75 سنت."
            },
            {
                "id": 14,
                "text": "Which of the following is not an example of a normative accounting theory or research?",
                "options": [
                    { "id": "a", "text": "a. Current purchasing power accounting" },
                    { "id": "b", "text": "b. Current Cost Accounting theory" },
                    { "id": "c", "text": "c. Capital markets based (security price) research" },
                    { "id": "d", "text": "d. Fair value accounting" },
                    { "id": "e", "text": "e. Continuously Contemporary Accounting" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن حاجة **مش** من أمثلة النظريات المعيارية (not an example of a normative)، اختار أبحاث أسواق المال والبورصة Capital markets لأنها أبحاث تجريبية إيجابية Positive.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Capital markets based (security price) research</strong><br><br>أبحاث أسواق المال وحركة البورصة وأسعار الأسهم هي أبحاث قائمة على الملاحظة والتحليل وتتبع الفكر والمدرسة الإيجابية (Positive) وليست نظريات معيارية تملي ما يجب تطبيقاً."
            },
            {
                "id": 15,
                "text": "If historical cost profits are all distributed in dividends during times of rising inventory prices, this will lead to --- (assuming other things being equal)",
                "options": [
                    { "id": "a", "text": "a. Increase in operating capacity" },
                    { "id": "b", "text": "b. Reduction in operating capacity" },
                    { "id": "c", "text": "c. Reduction in financial capital" },
                    { "id": "d", "text": "d. Increase in financial capital" },
                    { "id": "e", "text": "e. Maintaining operating capacity" }
                ],
                "correct": "b",
                "basmaga": "توزيع أرباح التكلفة التاريخية بالكامل وقت الغلاء وتضخم الأسعار بيخسف بـ طاقة المصنع والشركة وبيعمل انخفاض أو تآكل السعة التشغيلية Reduction in operating capacity.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Reduction in operating capacity</strong><br><br>المنهج يثبت أن توزيع كامل أرباح التكلفة التاريخية الاسمي وقت الغلاء بيتسبب في عجز الشركة ماديًا عن إحلال أصولها ومخزونها بالأسعار الجديدة الغالية، فيؤدي لخفض وتآكل السعة التشغيلية (Operating Capacity)."
            },
            {
                "id": 16,
                "text": "Rivermative accounting theories and research seek to:",
                "options": [
                    { "id": "a", "text": "a. Describe what is normal, or generally accepted, practice" },
                    { "id": "b", "text": "b. Explain and predict particular phenomena based on observation" },
                    { "id": "c", "text": "c. Prescribe particular approaches not driven by existing practices" },
                    { "id": "d", "text": "d. Explain why managers elect to adopt particular accounting methods in preference to others." },
                    { "id": "e", "text": "e. All of the given options describe normative accounting theories and research" }
                ],
                "correct": "c",
                "basmaga": "هدف النظريات المعيارية والـ Normative دايماً هو فرض ووصف أساليب إصلاحية جديدة مستقلة عن الواقع العك الحالي (Prescribe particular approaches not driven by existing practices).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Prescribe particular approaches not driven by existing practices</strong><br><br>الأبحاث المعيارية (Normative) بتنطلق من فرض مبادئ مثالية وأحكام قِيَمية تملي على الشركات ما يجب أن يطبق (What should be) ومبتلتزمش بالممارسات السيئة الحالية الموجودة على أرض الواقع."
            },
            {
                "id": 17,
                "text": "Context Matching: [a. Jensen and Meckling (1976) | b. Ball and Brown (1968) | c. Watts and Zimmerman (1986) | d. Hendriksen (1970) | e. Edward and bell (1961)]\n\nQuestion: Defined the theory as a coherent set of hypotheticals, conceptual and pragmatic principles forming the general framework of reference for a field of inquiry.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "d",
                "basmaga": "توصيل: التعريف الفخم للنظرية بإنها إطار مرجعي عام للبحث (general framework of reference) هو صياغة العالم هندريكسن Hendriksen (1970).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Hendriksen (1970)</strong><br><br>هذا هو النص المعتمد صراحة لتعريف البروفيسور هندريكسن الصادر عام 1970؛ وصاغ من خلاله النظرية كإطار عمل متسق ومبادئ تشكل مرجعاً كلياً لاستقصاء المحاسبة."
            },
            {
                "id": 18,
                "text": "Context Matching: [a. Jensen and Meckling (1976) | b. Ball and Brown (1968) | c. Watts and Zimmerman (1986) | d. Hendriksen (1970) | e. Edward and bell (1961)]\n\nQuestion: Stated that PAT is designed to explain and predict which firms will and which firms will not use a particular method but it says nothing as to which method a firm should use.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "c",
                "basmaga": "توصيل: الجملة الشهيرة لنظرية الـ PAT بتفسر وتتوقع ومبتعدلش على حد (says nothing as to which a firm should use) هم السادة واضعيها واتس وزيمرمان Watts and Zimmerman (1986).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Watts and Zimmerman (1986)</strong><br><br>هذا هو التوصيف التجريبي لتعريف نظرية المحاسبة الإيجابية (PAT) المأخوذ حرفياً من كتاب ومؤلفات العالمين واتس وزيمرمان الصادر عام 1986 لتنقية وفصل الفكر الإيجابي عن المعياري."
            },
            {
                "id": 19,
                "text": "Context Matching: [a. Jensen and Meckling (1976) | b. Ball and Brown (1968) | c. Watts and Zimmerman (1986) | d. Hendriksen (1970) | e. Edward and bell (1961)]\n\nQuestion: Investigated stock market reaction to accounting earnings announcements.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "b",
                "basmaga": "توصيل: البحث التجريبي التاريخي لدراسة رد فعل سوق المال والبورصة لإعلانات الأرباح المحاسبية، ده شغل العالمين بول وبراون Ball and Brown (1968).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Ball and Brown (1968)</strong><br><br>العالمان (Ball & Brown 1968) هم أصحاب الفضل التجريبي الأول في تاريخ الفكر المحاسبي لإثبات منفعة الأرباح الدفترية وملاحظة استجابة وعوائد البورصة مع خروج الإعلانات المالية."
            },
            {
                "id": 20,
                "text": "Context Matching: [a. Jensen and Meckling (1976) | b. Ball and Brown (1968) | c. Watts and Zimmerman (1986) | d. Hendriksen (1970) | e. Edward and bell (1961)]\n\nQuestion: Defined the agency relationship as a contract under which one or more principals engage another person to perform some services on their behalf.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "a",
                "basmaga": "توصيل: التعريف الاقتصادي لعلاقة الوكالة بإنها عقد تفويض لعمل خدمات نيابة عن المالك (agency relationship as a contract) ده شغل جينسن وميكلينج Jensen and Meckling (1976).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Jensen and Meckling (1976)</strong><br><br>التعريف الهيكلي لعلاقة الوكالة (Agency Relationship) كصيغة عقد تفويض قانوني واقتصادي متبادل صِيغ ونُشر في ورقة جينسن وميكلينج الكبرى عام 1976 واللي قامت عليها أبحاث المحاسبة."
            },
            {
                "id": 21,
                "text": "Context Matching: [a. Jensen and Meckling (1976) | b. Ball and Brown (1968) | c. Watts and Zimmerman (1986) | d. Hendriksen (1970) | e. Edward and bell (1961)]\n\nQuestion: Proposed current cost accounting model as an alternative model to historical cost accounting model.",
                "options": [
                    { "id": "a", "text": "a. Jensen and Meckling (1976)" },
                    { "id": "b", "text": "b. Ball and Brown (1968)" },
                    { "id": "c", "text": "c. Watts and Zimmerman (1986)" },
                    { "id": "d", "text": "d. Hendriksen (1970)" },
                    { "id": "e", "text": "e. Edward and bell (1961)" }
                ],
                "correct": "e",
                "basmaga": "توصيل: الفلاسفة اللي صاغوا واقترحوا نموذج التكلفة الجارية الـ CCA كبديل للمحاسبة التقليدية التاريخية هم الثنائي إدوارد وبيل Edward and bell (1961).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Edward and bell (1961)</strong><br><br>العالمان إدوارد وبيل هما الرواد الأوائل اللي ابتكروا وصمموا طريقة المحاسبة بالتكلفة الجارية (CCA) لحماية الطاقة التشغيلية المادية للشركات وقت التضخم وغلاء الأسعار."
            },
            {
                "id": 22,
                "text": "A theory (or model) that predicts that, if certain conditions are met then particular accounting practices will be observed, is an example of:",
                "options": [
                    { "id": "a", "text": "a. Positive accounting theory" },
                    { "id": "b", "text": "b. Negative accounting theory" },
                    { "id": "c", "text": "c. Agency theory" },
                    { "id": "d", "text": "d. Normative accounting theory" },
                    { "id": "e", "text": "e. Current cost accounting theory" }
                ],
                "correct": "a",
                "basmaga": "النموذج اللي بيتوقع ويفسر حدوث ممارسات عملية معينة في المكاتب لو اتوجدت ظروف معينة (predicts accounting practices will be observed) دي طبعاً نظرية المحاسبة الإيجابية Positive accounting theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Positive accounting theory</strong><br><br>هذا هو المبدأ التجريبي والهدف التنبئي لنظرية المحاسبة الإيجابية (PAT)؛ قايمة على وضع فرضيات تفسيرية تتوقع الممارسات الدفترية العملية للشركات بناءً على ملاحظة بيئتها الحالية."
            },
            {
                "id": 23,
                "text": "........... is a proxy variable for political attention.",
                "options": [
                    { "id": "a", "text": "a. Net Profits" },
                    { "id": "b", "text": "b. Market Share" },
                    { "id": "c", "text": "c. Net Sales" },
                    { "id": "d", "text": "d. Revenues" },
                    { "id": "e", "text": "e. Firm Size" }
                ],
                "correct": "e",
                "basmaga": "المتغير والمؤشر البديل اللي بيقيس لفت انتباه ورقابة الحكومة والضرائب للشركة (proxy variable for political attention) هو حجم كبر الشركة Firm Size.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Firm Size</strong><br><br>في فرضيات نظرية PAT، بيتم استخدام حجم كبر الشركة وحجمها (Firm size) كمتغير ومؤشر بديل (Proxy) للتعبير عن التكاليف السياسية؛ فكل ما تضخم حجم الشركة زاد تركيز الرأي العام والحكومة معاها."
            },
            {
                "id": 24,
                "text": "........... reflects the perspective that theories are not formed or arranged for particular purpose only, but it should be based on logical reasoning.",
                "options": [
                    { "id": "a", "text": "a. Coherent" },
                    { "id": "b", "text": "b. Ad hoc" },
                    { "id": "c", "text": "c. Systematic" },
                    { "id": "d", "text": "d. Framework" },
                    { "id": "e", "text": "e. Pragmatic" }
                ],
                "correct": "c",
                "basmaga": "القول بإن النظريات مش معمولة بشكل عشوائي أو مؤقت بس (not formed for particular purpose only) دي صفتها بإنها منظمة ومنهجية Systematic.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Systematic</strong><br><br>النظريات بطبيعتها ليست أفكاراً عشوائية مرتجلة لحل مشكلة طارئة، بل هي بناء فكري شامل مستند بالكامل للقواعد والمنطق المنظم المستمر (Systematic reasoning)."
            },
            {
                "id": 25,
                "text": "A criticism of Positive Accounting Theory is that it tells us nothing about:",
                "options": [
                    { "id": "a", "text": "a. Whether the practice or method being used is the most efficient" },
                    { "id": "b", "text": "b. Whether the practice or method being used is the most equitable" },
                    { "id": "c", "text": "c. Which method a firm should use" },
                    { "id": "d", "text": "d. Which method a firm actually use" },
                    { "id": "e", "text": "e. Positive Accounting Theory tells us nothing about all the above options" }
                ],
                "correct": "c",
                "options_correct_note": "",
                "basmaga": "من أشهر الانتقادات والعيوب الموجهة لنظرية الـ PAT بإنها مبتعطيناش إرشاد ولا بتقولنا إيه اللي المفروض نختاره (tells us nothing about which method a firm should use).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Which method a firm should use</strong><br><br>بما إن الـ PAT نظرية مفسرة فقط ومراقبة للواقع فعلياً (What is)، فمن عيوبها وانتقاداتها بإنها سلبية ومبتقدمش أي إرشاد أو توجيه للمحاسب عما يجب ويقترض اختياره وتطبيقه (What should be)."
            },
            {
                "id": 26,
                "text": "The principal's expectation of opportunistic behaviour by his agent results in lower payments to:",
                "options": [
                    { "id": "a", "text": "a. The agent" },
                    { "id": "b", "text": "b. The principal" },
                    { "id": "c", "text": "c. Employees" },
                    { "id": "d", "text": "d. The principal and the agent" },
                    { "id": "e", "text": "e. Neither the principal nor the agent" }
                ],
                "correct": "a",
                "basmaga": "سؤال متكرر بالامتحانات؛ توقع صاحب الشركة لغدر ولعب المدير الأناني بيخليه مقدماً يعطي مرتب قليل لمين؟ للمدير طبعاً (The agent).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) The agent</strong><br><br>الملاك (Principals) تحسباً لسلوك المدير (Agent) الانتهازي في غياب المراقبة والعقود، بيقوموا بخفض مرتب الإدارة مقدماً لتعويض خسايرهم المتوقعة، والآلية دي تسمى حماية السعر (Price Protection)."
            },
            {
                "id": 27,
                "text": "Which of the following is not true about the efficient market hypothesis?",
                "options": [
                    { "id": "a", "text": "a. Capital markets react in an efficient and unbiased manner to publicly available information" },
                    { "id": "b", "text": "b. The development of efficient markets hypothesis was important to the development of PAT" },
                    { "id": "c", "text": "c. Security prices reflect the information content of publicly available information and this information is restricted to accounting disclosures." },
                    { "id": "d", "text": "d. Management cannot manipulate share prices by changing accounting methods" },
                    { "id": "e", "text": "e. The above assumptions about the efficient market hypothesis are true" }
                ],
                "correct": "c",
                "basmaga": "بيسأل عن الجملة الغلط عن كفاءة السوق الـ EMH، اختار الجملة c لأن البورصة ذكية وبتستوعب كل الداتا الحرة ومش حكر على أرقام المحاسبة بس (NOT restricted to accounting).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Security prices reflect the information content of publicly available information and this information is restricted to accounting disclosures.</strong><br><br>الخيار c يمثل عبارة خاطئة (Not true)؛ لأن فرضية كفاءة السوق تنص على أن البورصة بتستوعب وتعكس كافة المعلومات المتاحة علناً من أي مصدر كان، وليست مقتصرة أو حكراً (not restricted) على الإفصاحات المحاسبية فقط."
            },
            {
                "id": 28,
                "text": "The expected return on particular stock is calculating by considering:",
                "options": [
                    { "id": "a", "text": "a. The risk-free rate of return minus a risk/return component" },
                    { "id": "b", "text": "b. The risk-free rate of return plus a risk/return component" },
                    { "id": "c", "text": "c. The risk-free rate of return divided by a risk/return component" },
                    { "id": "d", "text": "d. The risk-free rate of return multiplying with risk/return component" },
                    { "id": "e", "text": "e. The expected return is calculating by considering only the risk/return component" }
                ],
                "correct": "b",
                "basmaga": "معادلة نموذج الـ CAPM لحساب العائد المتوقع للسهم; بنجمع العائد الخالي من المخاطر زائد علاوة وجزء المخاطرة (risk-free rate plus a risk/return component).",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) The risk-free rate of return plus a risk/return component</strong><br><br>وفقاً لنموذج CAPM المعتمد في المنهج، العائد المتوقع للسهم يتم احتسابه بجمع العائد الآمن المضمون (risk-free كأرباح السندات الحكومية) مضافاً إليه (+ plus) الجزء الخاص بمخاطر تقلب السهم بالبورصة."
            },
            {
                "id": 29,
                "text": "[Context Matching 2]: [a. Risk/return component | b. Efficient Markets Hypothesis | c. Opportunistic perspective | d. Risk-free rate of return | e. Efficiency perspective]\n\nQuestion: Represents the return from holding governmental bonds.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "d",
                "basmaga": "توصيل: الأرباح والعوائد الناتجة عن الاستثمار الآمن في السندات الحكومية (holding governmental bonds) ده العائد الخالي من المخاطر Risk-free rate of return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Risk-free rate of return</strong><br><br>معدل العائد الخالي من المخاطر (Risk-free rate) بيتم التعبير عنه وبشكل صريح في النماذج المالية بأنه العائد المستحق والثابت والآمن الناتج عن حيازة والاستثمار في السندات الحكومية وأذون الخزانة."
            },
            {
                "id": 30,
                "text": "[Context Matching 2]: [a. Risk/return component | b. Efficient Markets Hypothesis | c. Opportunistic perspective | d. Risk-free rate of return | e. Efficiency perspective]\n\nQuestion: Proposes that managers will adopt manipulative strategies to generate the greatest economic benefits to themselves.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "c",
                "basmaga": "توصيل: افتراض إن المدير هيستعمل طرق تلاعبية عشان يعظم مصلحته وفلوسه الشخصية وبس، ده منظور الانتهازية الخالص Opportunistic perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Opportunistic perspective</strong><br><br>المنظور الانتهازي (Opportunistic / Ex-post perspective) جوه نظرية PAT بيفترض إن المدير شخص مصلحجي بحت، وبمجرد تثبيت العقود هيدور على أي ثغرة أو تلاعب لتعظيم مكاسبه الشخصية."
            },
            {
                "id": 31,
                "text": "[Context Matching 2]: [a. Risk/return component | b. Efficient Markets Hypothesis | c. Opportunistic perspective | d. Risk-free rate of return | e. Efficiency perspective]\n\nQuestion: Provided evidence that the capital markets react to new information if it signals a change in cash flow.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "b",
                "basmaga": "توصيل: الفرضية اللي قدمت إثبات علمي على إن البورصة ذكية وبتتفاعل مع أي معلومة بتلمح لتغير الكاش فلو الحقيقي، هي كفاءة السوق Efficient Markets Hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Efficient Markets Hypothesis</strong><br><br>فرضية كفاءة السوق (EMH) نجحت تاريخياً في إثبات استجابة وتفاعل أسعار الأسهم بالبورصة بكفاءة مع خروج أي داتا جديدة طالما المعلومة دي بتعكس إشارة لتغير التدفقات النقدية الحقيقية."
            },
            {
                "id": 32,
                "text": "[Context Matching 2]: [a. Risk/return component | b. Efficient Markets Hypothesis | c. Opportunistic perspective | d. Risk-free rate of return | e. Efficiency perspective]\n\nQuestion: Indicates how stock 'return fluctuated relative to overall stock market.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "a",
                "basmaga": "توصيل: المكون اللي بيقيس مدى تقلب وتأرجح عائد السهم صعوداً وهبوطاً مقارنة بحركة البورصة ككل، ده جزء المخاطرة والعائد Risk/return component.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Risk/return component</strong><br><br>جزء ومكون المخاطر والعائد (Risk/return component) في الـ CAPM بيقيس معامل الحساسية والتقلب (Beta) للسهم ليوضح للمستثمر مدى تأرجح عوائد هذا السهم بالتوازي مع حركة السوق الكلية صعوداً وهبوطاً."
            },
            {
                "id": 33,
                "text": "[Context Matching 2]: [a. Risk/return component | b. Efficient Markets Hypothesis | c. Opportunistic perspective | d. Risk-free rate of return | e. Efficiency perspective]\n\nQuestion: Proposes that managers will adopt accounting methods that best reflect the underlying economic performance of the entity.",
                "options": [
                    { "id": "a", "text": "a. Risk/return component" },
                    { "id": "b", "text": "b. Efficient Markets Hypothesis" },
                    { "id": "c", "text": "c. Opportunistic perspective" },
                    { "id": "d", "text": "d. Risk-free rate of return" },
                    { "id": "e", "text": "e. Efficiency perspective" }
                ],
                "correct": "e",
                "basmaga": "توصيل: افتراض إن المديرين بيختاروا طرق معينة لأنها الأفضل والأصدق في تعبيرها عن الأداء المالي والاقتصادي الحقيقي للمنشأة، ده منظور الكفاءة المبهج Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Efficiency perspective</strong><br><br>منظور الكفاءة المسبق (Efficiency perspective) بيفترض حسن نية الإدارة، وإن اختيارهم للسياسات المحاسبية نابع من رغبتهم في عكس الأداء الاقتصادي الفعلي بأعلى كفاءة لتوفير التكاليف."
            },
            {
                "id": 34,
                "text": "Provided an explanation of why the selection of particular accounting methods might matter, and hence, was important in the development of PAT.",
                "options": [
                    { "id": "a", "text": "a. The Efficient Markets Hypothesis" },
                    { "id": "b", "text": "b. Agency theory" },
                    { "id": "c", "text": "c. Capital Asset Pricing Model" },
                    { "id": "d", "text": "d. Efficiency perspective" },
                    { "id": "e", "text": "e. Research that considered capital markets' reactions to accounting information" }
                ],
                "correct": "b",
                "basmaga": "المنقذ الكبير اللي فسر للعلماء ليه الاختيار واللعب في الطرق المحاسبية بيفرق جداً مع الشركات وساهم في ولادة الـ PAT هي نظرية الوكالة Agency theory.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Agency theory</strong><br><br>نظرية الوكالة (Agency Theory) هي اللي فكت اللغز الحقيقي للمحاسبين؛ لأنها وضحت إن أرقام المحاسبة بتدخل صراحة في كتابة وصياغة شروط عقود الحوافز والديون، فبقى الاختيار بين الطرق يفرق جداً عملياً ومادياً."
            },
            {
                "id": 35,
                "text": "[Context Matching 3]: [a. Political cost hypothesis | b. Efficiency perspective | c. Management compensation hypothesis | d. Debt/equity hypothesis | e. Opportunistic perspective]\n\nQuestion: predicts that managers of firms with bonus plans are more likely to use accounting methods that increase current year reported income.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "c",
                "basmaga": "توصيل ٢: تلمح خطط حوافز ومكافآت المديرين واختيار طرق بتضخم أرباح السنة الحالية (bonus plans = increase current year) ده فرض حوافز ومكافآت الإدارة Management compensation hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Management compensation hypothesis</strong><br><br>فرض الحوافز والمكافآت الإدارية (المعروف بـ Bonus plan hypothesis) بيتوقع إن وجود حوافز مربوطة بالدخل الدفتري بيحفز المدير انتهازياً لتضخيم أرباح السنة الحالية لتعظيم حوافزه فوراً السنادي."
            },
            {
                "id": 36,
                "text": "[Context Matching 3]: [a. Political cost hypothesis | b. Efficiency perspective | c. Management compensation hypothesis | d. Debt/equity hypothesis | e. Opportunistic perspective]\n\nQuestion: of PAT suggests that regulation forcing firms to use a particular accounting method imposes unwarranted costs and introduces inefficiencies.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "b",
                "basmaga": "توصيل ٢: الرأي القائل بأن إجبار الشركات بقوانين ومعايير موحدة بيفرض عليها مصاريف ملهاش لازمة وبيقلل كفاءة السوق، ده نابع من منظور الكفاءة Efficiency perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Efficiency perspective</strong><br><br>منظور الكفاءة في الـ PAT بيرى إن الشركات قادرة طوعياً تختار الطرق الأكفأ لبيئتها وتقليل تكاليف تعاقدها، وإن التدخل الحكومي وإجبارها على طريقة معينة بيخلق عدم كفاءة (inefficiencies)."
            },
            {
                "id": 37,
                "text": "[Context Matching 3]: [a. Political cost hypothesis | b. Efficiency perspective | c. Management compensation hypothesis | d. Debt/equity hypothesis | e. Opportunistic perspective]\n\nQuestion: Large firms rather than small firms are more likely to use accounting choices that reduce reported profits as predicted by -- of PAT.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "a",
                "basmaga": "توصيل ٢: ميل الشركات الكبيرة العملاقة في الحجم لاختيار طرق محاسبية بتصغّر وتقلل الأرباح الدفترية (Large firms = reduce reported profits) ده فرض التكاليف السياسية Political cost hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Political cost hypothesis</strong><br><br>فرض التكاليف السياسية بينص على إن كبر حجم الكيان (Large size) بيجعله تحت مجهر ورقابة الدولة وجماعات الضغط، فبيتعمدوا يختاروا طرق محاسبية تخفض الأرباح عشان يهربوا من الضرائب."
            },
            {
                "id": 38,
                "text": "[Context Matching 3]: [a. Political cost hypothesis | b. Efficiency perspective | c. Management compensation hypothesis | d. Debt/equity hypothesis | e. Opportunistic perspective]\n\nQuestion: Managers have an incentive to adopt accounting methods that relax the potential impacts of the constraints if they had entered into agreements that involve accounting-based covenants as suggested by ------- of PAT.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "d",
                "basmaga": "توصيل ٢: الرغبة في اختيار طرق بتخفف وبتبعد الشركة عن قيود وشروط اتفاقيات القروض المكتوبة مع البنوك (accounting-based covenants) ده فرض الديون Debt/equity hypothesis.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Debt/equity hypothesis</strong><br><br>فرض الديون (Debt/equity hypothesis) بيفترض إن اقتراب المنشأة من حدود وقيود البنك (Covenants) بيشكل خطر وقوع في فخ التعثر الفني، فبينقوا طرق بتزود رقم الأرباح والأصول للتخفيف والهروب."
            },
            {
                "id": 39,
                "text": "[Context Matching 3]: [a. Political cost hypothesis | b. Efficiency perspective | c. Management compensation hypothesis | d. Debt/equity hypothesis | e. Opportunistic perspective]\n\nQuestion: of PAT suggests that managers might elect a particular asset depreciation method that increases income even though it might not reflect the actual use of the asset.",
                "options": [
                    { "id": "a", "text": "a. Political cost hypothesis" },
                    { "id": "b", "text": "b. Efficiency perspective" },
                    { "id": "c", "text": "c. Management compensation hypothesis" },
                    { "id": "d", "text": "d. Debt/equity hypothesis" },
                    { "id": "e", "text": "e. Opportunistic perspective" }
                ],
                "correct": "e",
                "basmaga": "توصيل ٢: تعمد نية المدير لتنقية طريقة إهلاك مبالغ فيها بتطول عمر الأصل لتضخيم أرباح السنة الحالية لمصلحته الشخصية بس، ده بيمثل منظور الانتهازية الخالص Opportunistic perspective.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Opportunistic perspective</strong><br><br>منظور الانتهازية اللاحق (Opportunistic perspective) بيرى إن المدير بيستغل مرونة وثغرات المحاسبة بعد إبرام العقود لتنقية طرق لتكبير الأرباح وزيادة حوافزه الشخصية حتى لو مش بتعكس الواقع المادي للآلة."
            },
            {
                "id": 40,
                "text": "PAT theorists may argue that it is more appropriate to remunerate managers using [accounting earnings] where accounting earnings fluctuate greatly.",
                "options": [
                    { "id": "a", "text": "a. Market-based bonus schemes" },
                    { "id": "b", "text": "b. Fixed basis rewards" },
                    { "id": "c", "text": "c. Accounting-based bonus schemes" },
                    { "id": "d", "text": "d. Both of Fixed basis rewards and Accounting-based bonus schemes" },
                    { "id": "e", "text": "e. Both of Market-based bonus schemes and Accounting-based bonus schemes" }
                ],
                "correct": "a",
                "basmaga": "لما أرباح الدفاتر والمحاسبة تتأرجح وتلعب بعنف بطبيعة نشاط الشركة (earnings fluctuate greatly) زي شركات التعدين، الأصح ربط حوافزه بالبورصة وسعر السهم Market-based bonus schemes.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Market-based bonus schemes</strong><br><br>علماء الـ PAT بيثبتوا إنه في القطاعات ذات الأرباح الدفترية المتأرجحة جداً (كشركات البترول والتعدين أو أبحاث التكنولوجيا R&D)، الأفضل ربط مكافآت الإدارة بـ القيمة السوقية للأسهم (Market-based) لأنها بتعكس التوقعات المستقبلية طويلة الأجل."
            },
            {
                "id": 41,
                "text": "Capital asset pricing model provides an indication of ------- on securities.",
                "options": [
                    { "id": "a", "text": "a. The actual return." },
                    { "id": "b", "text": "b. The expected return" },
                    { "id": "c", "text": "c. The risk return component" },
                    { "id": "d", "text": "d. The abnormal return" },
                    { "id": "e", "text": "e. The risk-free rate of return" }
                ],
                "correct": "b",
                "basmaga": "تكرار البوكلت المضمون؛ نموذج تسعير الأصول الرأسمالية الـ CAPM بيعطينا دلالة ومؤشر عن العائد المتوقع والنموذجي المخطط للسهم The expected return.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) The expected return</strong><br><br>نموذج الـ (CAPM) هو أداة مالية وظيفتها الأساسية حساب وإعطاء دلالة واضحة ومؤشر عن العائد المتوقع (Expected return) للأوراق المالية."
            },
            {
                "id": 42,
                "text": "Which of the following is not a feature of current cost accounting?",
                "options": [
                    { "id": "a", "text": "a. It seeks to maintain the purchasing power of capital" },
                    { "id": "b", "text": "b. It differentiates between profits from trading and from holding gains" },
                    { "id": "c", "text": "c. It uses current values which based on replacement cost" },
                    { "id": "d", "text": "d. It uses specific prices of assets rather than general price-level adjustments" },
                    { "id": "e", "text": "e. It seeks to maintain the operating capability of capital" }
                ],
                "correct": "a",
                "basmaga": "بيسأل عن ميزة **مش** تابعة للمحاسبة بالتكلفة الجارية (not a feature of current cost) اختار العبارة اللي فيها purchasing power لأن دي وظيفة الـ CPP بس.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) It seeks to maintain the purchasing power of capital</strong><br><br>المحاسبة بالتكلفة الجارية (CCA) بتستهدف صيانة الحفاظ على رأس المال المادي أو الطاقة التشغيلية (Operating capability)، أما صيانة القوة الشرائية العامة (Purchasing power) فدي ميزة نظام الـ CPP."
            },
            {
                "id": 43,
                "text": "[Context Matching 4]: [a. Financial capital maintenance | b. Non-monetary assets | c. Replacement cost | d. Monetary assets | e. Physical capital maintenance]\n\nQuestion: Perspective taken in historical cost accounting.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "a",
                "basmaga": "توصيل ٣: المفهوم والمنظور المتبع تاريخياً وعملياً جوه المحاسبة بالتكلفة التاريخية الاسمي هو الحفاظ على رأس المال المالي Financial capital maintenance.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Financial capital maintenance</strong><br><br>محاسبة التكلفة التاريخية التقليدية (HC) تتبنى وتطبق دائمًا مبدأ صيانة رأس المال المالي الاسمي، حيث يعتبر المشروع رابحاً إذا زادت الأموال النقدية الاسمية بآخر الفترة."
            },
            {
                "id": 44,
                "text": "[Context Matching 4]: [a. Financial capital maintenance | b. Non-monetary assets | c. Replacement cost | d. Monetary assets | e. Physical capital maintenance]\n\nQuestion: ........... are those that remain fixed in terms of their monetary value but their purchasing power of will change over time.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "d",
                "basmaga": "توصيل ٣: بنود قيمتها بالفلوس ثابتة على الورق بس قوتها الشرائية بتتغير وبتموت بمرور الوقت (fixed monetary value, purchasing power change) دي البنود والأصول النقدية Monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) Monetary assets</strong><br><br>الأصول النقدية (Monetary Assets) كالنقدية السائلة بالخزنة أو البنك تظل قيمتها الرقمية الاسمية ثابتة بالدفاتر، ولكن قيمتها وقدرتها الشرائية الفعلية تنخفض وتتغير كلياً مع التضخم."
            },
            {
                "id": 45,
                "text": "[Context Matching 4]: [a. Financial capital maintenance | b. Non-monetary assets | c. Replacement cost | d. Monetary assets | e. Physical capital maintenance]\n\nQuestion: Perspective adopted under Current Cost Accounting Model.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "e",
                "basmaga": "توصيل ٣: المفهوم والمنظور المتبع المعتمد جوه نظام التكلفة الجارية الـ CCA هو صيانة رأس المال التشغيلي المادي Physical capital maintenance.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (e) Physical capital maintenance</strong><br><br>يرتكز نظام التكلفة الجارية (CCA) بصفة مطلقة على مبدأ الحفاظ على رأس المال المادي أو التشغيلي (Physical capital) لضمان احتفاظ المنشأة بقدرتها الإنتاجية."
            },
            {
                "id": 46,
                "text": "[Context Matching 4]: [a. Financial capital maintenance | b. Non-monetary assets | c. Replacement cost | d. Monetary assets | e. Physical capital maintenance]\n\nQuestion: The amount that the entity would have to pay to replace an asset at the present time.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "c",
                "basmaga": "توصيل ٣: الثمن والمبلغ المالي اللي هتتحمله وتدفعه المنشأة انهارده عشان تشتري أصل بديل للي عندي (pay to replace an asset) دي تكلفة الإحلال Replacement cost.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Replacement cost</strong><br><br>تكلفة الإحلال (Replacement cost) تعبر محاسبياً وعلمياً عن القيمة السوقية الجارية الحاضرة التي يجب على الشركة التضحية بها وسدادها لاقتناء أصل بديل مماثل في نفس الوقت الحالي."
            },
            {
                "id": 47,
                "text": "[Context Matching 4]: [a. Financial capital maintenance | b. Non-monetary assets | c. Replacement cost | d. Monetary assets | e. Physical capital maintenance]\n\nQuestion: - are those whose monetary value will change over time as a result of inflation, while purchasing power remain constant.",
                "options": [
                    { "id": "a", "text": "a. Financial capital maintenance" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Replacement cost" },
                    { "id": "d", "text": "d. Monetary assets" },
                    { "id": "e", "text": "e. Physical capital maintenance" }
                ],
                "correct": "b",
                "basmaga": "توصيل ٣: البنود والأصول اللي قيمتها المادية بالفلوس بتزيد وتتغير مع الغلاء بس قوتها الشرائية بتفضل محتمية وثابتة (monetary value will change, purchasing power constant) دي الأصول غير النقدية Non-monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Non-monetary assets</strong><br><br>الأصول غير النقدية (Non-monetary assets) كالمباني والأراضي والمخزون ترتفع قيمتها وثمنها الاسمي بالدنانير لمواكبة موجات الغلاء، وبالتالي تحتفظ بقوتها الشرائية حرة وثابتة."
            },
            {
                "id": 48,
                "text": "A limitation of Current Cost Accounting Model does not include:",
                "options": [
                    { "id": "a", "text": "a. Replacement costs are easily determined, and therefore preparation cost is low" },
                    { "id": "b", "text": "b. Replacement costs do not reflect what it would be worth if the firm decided to sell it" },
                    { "id": "c", "text": "c. It may be more efficient and less costly to acquire different assets." },
                    { "id": "d", "text": "d. CCA assumes that assets would in fact be replaced with that type of asset and not another" },
                    { "id": "e", "text": "e. There are too many versions of current cost accounting, making it confusing to preparers" }
                ],
                "correct": "a",
                "basmaga": "بيسأل عن نقطة **مش** من ضمن عيوب ومحددات الـ CCA (does not include limitation)، اختار الجملة اللي بتقول إن تحديد تكلفة الإحلال سهل ورخيص لأن العكس هو اللي صح وعيب وصعب جداً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Replacement costs are easily determined, and therefore preparation cost is low</strong><br><br>من أكبر عيوب ونقاط نقد نظام التكلفة الجارية (CCA) أن تحديد تكلفة الإحلال في السوق صعب ومعقد ومكلف ويحتاج تقدير خبراء، فقول إنها سهلة ورخيصة عبارة خاطئة عن النظام."
            },
            {
                "id": 49,
                "text": "In applying the CPPA model, if the price level index was 120 at the beginning of the year, 150 at end of the year, and averaged 135 during the year, which one of the following price-level indexes would be incorrect?",
                "options": [
                    { "id": "a", "text": "a. 150/135 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "b", "text": "b. 150/120 would be applied to opening net monetary assets" },
                    { "id": "c", "text": "c. 150/150 would be applied to ending net monetary assets" },
                    { "id": "d", "text": "d. 135/150 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "e", "text": "e. All of the given options are correct" }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن الكسر والمؤشر الخاطئ تماماً في التعديل (would be incorrect)، اختار d لأن المبيعات المنتظمة بنضربها في مؤشر آخر السنة مقسوماً على المتوسط (150/135) فـقلب الكسر وكتابته 135/150 هو الخطأ المطلوب اختياره.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 135/150 would be applied to sales, purchases of goods, and payment of expenses</strong><br><br>الخيار d يمثل معامل تعديل خاطئ تماماً (Incorrect)؛ لأن البنود الموزعة بانتظام طوال السنة كالمبيعات والمصاريف تعدل محاسبياً بقسمة رقم آخر السنة على رقم المتوسط (150/135) وليس العكس."
            },
            {
                "id": 50,
                "text": "reflects a view that the components of a theory should logically combine together to provide explanation or guidance in respect of certain phenomena.",
                "options": [
                    { "id": "a", "text": "a. Coherent" },
                    { "id": "b", "text": "b. Ad hoc" },
                    { "id": "c", "text": "c. Systematic" },
                    { "id": "d", "text": "d. Framework" },
                    { "id": "e", "text": "e. Pragmatic" }
                ],
                "correct": "a",
                "basmaga": "تكرار البوكلت الحتمي؛ تلمح ترابط وتماسك مكونات وأجزاء النظرية معاً بالمنطق وبدون تناقض (logically combine together) اختار المتماسكة Coherent فوراً.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (a) Coherent</strong><br><br>كلمة متماسكة (Coherent) في فلسفة المحاسبة بتعني إن أجزاء ومبادئ الإطار النظري للمادة بتركب على بعضها بالمنطق السليم (logically combine) ومفيهاش أي تضارب داخلي."
            },
            {
                "id": 51,
                "text": "Case Data [Page 37 Duplicated]: Perspective taken in historical cost accounting:",
                "options": [
                    { "id": "a", "text": "a. Efficiency perspective" },
                    { "id": "b", "text": "b. Opportunity perspective" },
                    { "id": "c", "text": "c. Financial capital maintenance" },
                    { "id": "d", "text": "d. Purchasing power maintenance." },
                    { "id": "e", "text": "e. Physical operating capital maintenance" }
                ],
                "correct": "c",
                "basmaga": "منظور صيانة الحفاظ المتبع في التكلفة التاريخية التقليدية هو صيانة رأس المال المالي Financial capital maintenance.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (c) Financial capital maintenance</strong><br><br>المحاسبة بالتكلفة التاريخية (HC) تقوم بصفة مطلقة على منظور صيانة الحفاظ على رأس المال المالي الاسمي المجرد، ولا تلتفت للقدرة التشغيلية أو التضخم."
            },
            {
                "id": 52,
                "text": "Case Data [Page 37 Duplicated]: ........... are those whose monetary value will change over time as a result of inflation, while their purchasing power remain constant.",
                "options": [
                    { "id": "a", "text": "a. Monetary assets" },
                    { "id": "b", "text": "b. Non-monetary assets" },
                    { "id": "c", "text": "c. Non-monetary liabilities" },
                    { "id": "d", "text": "d. Monetary liabilities" },
                    { "id": "e", "text": "e. Net monetary assets" }
                ],
                "correct": "b",
                "basmaga": "بنود قيمتها بالفلوس بتزيد وتتغير مع التضخم بس قوتها الشرائية بتفضل محتمية وثابتة (monetary value will change, purchasing power constant) دي الأصول غير النقدية Non-monetary assets.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Non-monetary assets</strong><br><br>الأصول غير النقدية (Non-monetary assets) كالمباني والأراضي والمخزون ترتفع قيمتها وثمنها الاسمي بالدنانير لمواكبة موجات الغلاء، وبالتالي تحتفظ بقوتها الشرائية حرة وثابتة."
            },
            {
                "id": 53,
                "text": "Case Data [Page 37 Duplicated]: In applying the CPPA model, if the price-level index was 115 at the beginning of the year, 145 at end of the year and averaged 130 during the year, what price-level index would be applied to sales that occurred uniformly during the year?",
                "options": [
                    { "id": "a", "text": "a. 145/115" },
                    { "id": "b", "text": "b. 115/145" },
                    { "id": "c", "text": "c. 130/115" },
                    { "id": "d", "text": "d. 145/130" },
                    { "id": "e", "text": "e. 130/145" }
                ],
                "correct": "d",
                "basmaga": "مسألة تريكة مبيعات التضخم بالأرقام الجديدة لصفحة 37؛ اقسم دايماً مؤشر آخر السنة على المؤشر المتوسط (Ending / Average) يعني الكسر الصح هو 145/130.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 145/130</strong><br><br>لتعديل وحساب بند الإيرادات والمبيعات الموزعة بانتظام متساوٍ (uniformly) عبر فترات السنة وقت التضخم؛ نقسم الرقم القياسي لنهاية الفترة (145) على الرقم القياسي المتوسط السائد طوال السنة (130) فيكون الكسر المعدل هو 145/130."
            },
            {
                "id": 54,
                "text": "Case Data [Page 37 Duplicated]: ........... are costs inherent in the principal-agent relationship:",
                "options": [
                    { "id": "a", "text": "a. Residual costs" },
                    { "id": "b", "text": "b. Agency costs" },
                    { "id": "c", "text": "c. Monitoring costs" },
                    { "id": "d", "text": "d. Political costs" },
                    { "id": "e", "text": "e. Replacement cost" }
                ],
                "correct": "b",
                "basmaga": "التكاليف والمصاريف اللصيقة واللازمة لعلاقة الوكالة بين صاحب المال والمدير (costs inherent in the principal-agent relationship) اسمها تكاليف الوكالة Agency costs.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Agency costs</strong><br><br>تكاليف الوكالة (Agency costs) بتعبر عن إجمالي المصاريف والأعباء المالية الملازمة واللصيقة بطبيعة علاقة الوكيل بالأصيل (كالرقابة والارتباط والخسائر المتبقية)."
            },
            {
                "id": 55,
                "text": "Case Data [Page 37 Duplicated]: lower salary to compensate principals for opportunistic actions of the managers:",
                "options": [
                    { "id": "a", "text": "a. Financial constraints" },
                    { "id": "b", "text": "b. Price protection" },
                    { "id": "c", "text": "c. Contractual arrangements" },
                    { "id": "d", "text": "d. Technical default" },
                    { "id": "e", "text": "e. Debt covenants" }
                ],
                "correct": "b",
                "basmaga": "عرض راتب منخفض لتعويض الملاك مقدماً عن تصرفات المدير ولعبه بالخفاء (lower salary to compensate principals) ده مصطلح حماية السعر Price protection.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (b) Price protection</strong><br><br>مفهوم حماية السعر (Price protection) جوه نظرية الوكالة بيفترض إن المالك في غياب العقود والرقابة بيعرض على المدير مرتب منخفض لتعويض وتحصين أمواله من أي انحرافات."
            },
            {
                "id": 56,
                "text": "Case Data [Page 37 Duplicated]: In applying the CPPA model, if the price level index was 130 at the beginning of the year, 160 at end of the year, and averaged 145 during the year, which one of the following price-level indexes would be incorrect?",
                "options": [
                    { "id": "a", "text": "a. 160/145 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "b", "text": "b. 160/130 would be applied to opening net monetary assets" },
                    { "id": "c", "text": "c. 160/160 would be applied to ending net monetary assets" },
                    { "id": "d", "text": "d. 145/160 would be applied to sales, purchases of goods, and payment of expenses" },
                    { "id": "e", "text": "e. All of the given options are correct" }
                ],
                "correct": "d",
                "basmaga": "بيسأل عن الكسر والمؤشر الخاطئ تماماً في التعديل بالأرقام الجديدة (would be incorrect)، اختار d لأن المبيعات المنتظمة بنضربها في مؤشر آخر السنة مقسوماً على المتوسط (160/145) فـقلب الكسر وكتابته 145/160 هو الخطأ المطلوب اختياره.",
                "explanation": "<strong class=\"text-emerald-700\">الإجابة الصحيحة: (d) 145/160 would be applied to sales, purchases of goods, and payment of expenses</strong><br><br>الخيار d يمثل معامل تعديل خاطئ تماماً (Incorrect)؛ لأن البنود الموزعة بانتظام طوال السنة كالمبيعات والمصاريف تعدل محاسبياً بقسمة رقم آخر السنة على رقم المتوسط (160/145) وليس العكس."
            }
        ]
    }


};








