// video-hakata.html の文法・語彙解説の英/日翻訳（中国語原文をAIが翻訳。ネイティブ校正なし）
// 键：段号.序号（和 GRAMMAR / VOCAB 里的位置对应，从1开始）
const GV_I18N = {
  en: {
    G: {
      '1.1': { meaning: "…is enough / it would be fine if… (condition + suggestion)", explain: "\"Verb ba-form + ii\" means \"it's enough to get to this point\", with a slightly concessive tone — normally arriving in the afternoon would be enough, but the next sentence immediately turns around to explain why that is not what happened." },
      '1.2': { meaning: "It has been arranged / decided that… (an objective, fixed arrangement, not something the speaker has just decided)", explain: "\"koto ni natte iru\" stresses that this is an arrangement that has already been fixed and is not decided on the spot by the speaker (a work schedule), as opposed to \"koto ni suru\" (the speaker actively decides)." },
      '1.3': { meaning: "If… / after doing… (condition, often with a \"discovery\" nuance)", explain: "\"Ittetara\" is the colloquial contraction of \"itteitara\" and means \"if I only went for work and came straight back\"; after \"tara\" the speaker often adds an evaluation of that situation (here \"ajikenai\" = dull)." },
      '2.1': { meaning: "depending on… / according to… (basis / cause)", explain: "\"N ni yotte\" here means \"the taste differs depending on the shop\" — the \"depending on / according to\" usage (another common meaning is \"the agent of the action in a passive sentence\", which is not the usage here)." },
      '2.2': { meaning: "is regarded as… / is generally considered… (an objective conclusion, not the speaker\\'s own opinion)", explain: "A more written / formal way to say \"is widely regarded as\" than \"to iwarete iru\", often used when introducing history or origins where you need to sound objective." },
      '2.3': { meaning: "looks… / seems… (a direct impression from seeing something, not hearsay)", explain: "\"I-adjective stem + sou\" means \"looks…\", an intuitive judgment after seeing something with your own eyes; keep it separate from \"(plain form) + sou desu\" meaning \"I heard\" (that is the hearsay sou, this is the appearance sou)." },
      '3.1': { meaning: "it seems… / I hear that… (conjecture / hearsay, with a nuance of \"I\\'m not sure, but apparently\")", explain: "\"Rashii\" means the speaker did not see it personally but is inferring from hearsay or signs; the tone is softer and leaves more room than \"sou desu\"." },
      '3.2': { meaning: "may… / it\\'s okay to… (permission)", explain: "\"Te-form + mo ii\" is the most basic \"permission\" pattern; here it relays that \"they were allowed to use this shop name in the first place\"." },
      '3.3': { meaning: "the fact that… / in other words… (turning a whole sentence into a noun so you can comment on it)", explain: "Although this exact line does not contain \"to iu koto\", this way of \"first relay a fact, then add your own comment\" appears again and again through the whole trademark-dispute narration and is a very practical skeleton for reporting: \"~ to iu koto desu / to iu koto ga wakarimashita\"." },
      '4.1': { meaning: "without… (= the written-style form of \"naide\")", explain: "\"Zu ni\" = \"naide\" and means \"doing the latter action without doing the former\"; it is slightly more formal than \"naide\" and is more common in writing or formal situations." },
      '4.2': { meaning: "ended up… / before I knew it… (potential form means \"can…\"; \"te shimau\" carries regret or surprise)", explain: "\"Taberareru\" is the potential form of \"taberu\" (can eat); adding \"te shimau\" means \"I could eat it without noticing / I ended up eating a lot\", with a nuance of \"I didn\\'t expect that\"." },
      '4.3': { meaning: "called… / the so-called… (adding an explanation or naming to a noun)", explain: "\"Noun1 to iu noun2\" is the most basic \"introducing a name\" pattern — \"a ramen shop called Nagahama Shogun\" — very frequent in everyday talk and when introducing places." },
      '5.1': { meaning: "because of… / owing to… ", explain: "\"N ga aru kankei de\" is a soft way of saying \"because of the fact that there is…\", often used to explain a cause that is not absolute but does have an effect (here: \"because the airport is nearby, there's a height limit\")." },
      '5.2': { meaning: "maybe… / perhaps… (a low-confidence guess)", explain: "Expresses a guess the speaker is not sure about; the tone is weaker and more modest than \"deshou\" or \"hazu da\"." },
      '5.3': { meaning: "looks… (same usage as ②, with a new example to reinforce it)", explain: "This whole part describes \"the view from Fukuoka Tower\" and uses the appearance sou and conjecture patterns heavily to describe \"what it looks like\" — a very useful combination for describing scenery and first impressions." },
      '6.1': { meaning: "(I myself) decided to… (the speaker\\'s active decision, the counterpart of \"koto ni natte iru\" in ①)", explain: "It makes a pair with \"koto ni natte imasu\" in part 1 — \"koto ni suru\" is a decision the speaker makes on the spot (here \"I decided to lie on my side and rest\"), while \"koto ni natte iru\" is a fixed arrangement not decided by oneself; the two are often studied side by side." },
      '6.2': { meaning: "without… (same as ④, appearing once more)", explain: "The same pattern as \"okane o harawazu ni\" in part 4 appearing again — this time \"flew back on a ticket exchanged with miles without paying\", showing how frequent this pattern is in everyday \"did B without doing A\" situations; worth remembering." }
    },
    V: {
      '1.1': { kind: "Place", explain: "One of the central areas of Fukuoka City, home to Hakata Station and Hakata Port, and the biggest transport hub area in Kyushu. The speech recognition misheard this word twice in the video subtitles (\"墓多\") — this is a known real ASR limitation of this project, not the place\\'s actual name.", linkLabel: "Wikipedia · Hakata" },
      '1.2': { kind: "Place", explain: "Haneda is Tokyo\\'s main airport, while Fukuoka Airport is famous for being only a few subway minutes from the city centre — one of the few airports in Japan you can reach from downtown almost without transferring.", linkLabel: "Wikipedia · Fukuoka Airport" },
      '2.1': { kind: "Food", explain: "One of the original schools of Fukuoka tonkotsu ramen: thin noodles + rich white pork-bone broth. The noodles are made thin on purpose so that fish-market workers short on time could slurp them down quickly and get back to work — the video also mentions this history.", linkLabel: "Wikipedia · Nagahama ramen" },
      '2.2': { kind: "Food", term: "Goma-saba (sesame mackerel)", explain: "One of Fukuoka\\'s specialties: raw mackerel with a sesame sauce. The video says \"this is probably the only place in the country where you can eat mackerel raw\" — because the parasite risk of mackerel from the sea near Fukuoka is relatively easier to control, which makes the dish possible as sashimi." },
      '2.3': { kind: "Food", explain: "One of Fukuoka\\'s most famous specialties: pollock roe cured with chili pepper, common in rice balls, pasta and bento — almost synonymous with Fukuoka souvenirs.", linkLabel: "Wikipedia · Mentaiko" },
      '3.1': { kind: "Food / Culture", term: "Ganso (originator)", explain: "\"Ganso\" means \"the very first founder / the authentic original shop\" and often appears in the names of long-established shops to stress legitimacy — this is also the core of the trademark-dispute story in this part, where several shops each want to prove they are the real \"ganso\"." },
      '3.2': { kind: "Food / Culture", explain: "A style of eating unique to Hakata ramen: when your noodles are finished you can order an extra serving of \"noodles only, no soup\", usually much cheaper than a full bowl — said to have developed from the ramen-stall culture of Nagahama.", linkLabel: "Wikipedia · Kaedama" },
      '4.1': { kind: "Place / Culture", term: "Kushida Shrine (くしだじんじゃ) and the Hakata Gion Yamakasa", explain: "The most important shrine in the Hakata area. The \"Hakata Gion Yamakasa\" float festival held every July has been listed as UNESCO Intangible Cultural Heritage. The video subtitles heard \"山笠\" as \"ダッシュ\" — another real example of a speech-recognition error.", linkLabel: "Wikipedia · Hakata Gion Yamakasa" },
      '4.2': { kind: "Place", explain: "Fukuoka\\'s biggest entertainment and nightlife district, a river sandbar between the Naka River and the Hakata River; its yatai (street stall) culture is also famous.", linkLabel: "Wikipedia · Nakasu" },
      '4.3': { kind: "Food culture", term: "Ika no odorigui (eating live squid)", explain: "Live squid is prepared on the spot and eaten raw while its body is still moving, emphasising \"so fresh it's still moving\" — a thrilling freshness-showcase way of eating common in Japan\\'s coastal regions." },
      '5.1': { kind: "Place", term: "Fukuoka Tower", explain: "A 234 m seaside observation tower. Because Fukuoka Airport is so close to the city, the whole city has building height limits, so Fukuoka Tower was for a time one of the tallest buildings in the city, giving a 360° view over Hakata Bay.", linkLabel: "Wikipedia · Fukuoka Tower" },
      '5.2': { kind: "Place", explain: "A long, thin land-tied-island / sandbar landform that separates Hakata Bay from the Genkai Sea; from Fukuoka Tower or a plane you can clearly see how it \"draws\" the sea into two parts.", linkLabel: "Wikipedia · Umi-no-Nakamichi" },
      '6.1': { kind: "Travel knowledge", term: "Mile award ticket (miles-for-flight redemption)", explain: "Exchanging flight miles accumulated with an airline for a free ticket. The \"I came back on an award ticket bought with leftover miles, without paying\" in the video is exactly this system — often mentioned together with \"shugyo\" (deliberately flying more to raise your membership tier), a Japanese business-travel culture meme." }
    }
  },
  ja: {
    G: {
      '1.1': { meaning: "…すればよい／…だといい（条件＋提案）", explain: "「動詞ば形＋いい」は「このくらいまでできれば十分」という意味で、少し譲歩の語気があります——本来は午後に着けばよいのですが、次の文ですぐに話を転じて、なぜそうしなかったかを説明しています。" },
      '1.2': { meaning: "（すでに）…ことに決まっている（客観的に決まった予定。話し手がその場で決めたことではない）", explain: "「ことになっている」は、すでに決まっていて話し手がその場で決めたものではない予定（仕事の行程）であることを強調します。話し手が自分で決める「ことにする」とは区別されます。" },
      '1.3': { meaning: "もし…なら／…したら（条件。「発見」のニュアンスを伴うことも多い）", explain: "「行ってたら」は「行っていたら」の口語的な縮約形で、「仕事のためだけに行って帰るなら」という意味です。「たら」の後には、その状況に対する話し手の評価（ここでは「味気ない」）が来ることが多いです。" },
      '2.1': { meaning: "…によって異なる／…に応じて（根拠・原因）", explain: "ここでの「Nによって」は「店によって味に違いがある」という意味で、「…に応じて／…次第で」の用法です（もう一つよくある意味は受身文での動作主ですが、ここはその用法ではありません）。" },
      '2.2': { meaning: "…とされている／一般に…と認められている（客観的な定説で、話し手の主観ではない）", explain: "「と言われている」よりも書き言葉的で、やや改まった「広く…と認められている」という言い方です。歴史や由来など、客観的に見せたい場面でよく使われます。" },
      '2.3': { meaning: "…そうだ／…らしく見える（見た直感的な印象で、伝聞ではない）", explain: "「い形容詞の語幹＋そう」は「…に見える」という意味で、目で見たあとの直感的な判断です。「（普通形）＋そうです」の「聞いたところでは」という用法（伝聞のそう）とは区別してください。こちらは様態のそうです。" },
      '3.1': { meaning: "…らしい／…だそうだ（推測・伝聞。「確かではないが、聞いたところでは」というニュアンス）", explain: "「らしい」は、話し手が自分の目で見たのではなく、噂や兆候から推測したことを表します。「そうです」より婉曲で、含みを残した言い方です。" },
      '3.2': { meaning: "…てもいい（許可）", explain: "「て形＋もいい」は最も基本的な「許可」の文型で、ここでは「この店名を使ってもよいと許可された」ことを伝えています。" },
      '3.3': { meaning: "…ということ（一文全体を名詞化して、あとでコメントしやすくする）", explain: "この一文自体には「ということ」は出てきませんが、「まず一つの事柄を伝えて、そのあと自分のコメントを加える」という言い方は、商標争いの語り全体で何度も出てきます。「～ということです／ということが分かりました」は報告に便利な文型の骨格です。" },
      '4.1': { meaning: "…ずに／…しないで（＝「ないで」の書き言葉）", explain: "「ずに」＝「ないで」で、「前の動作をしないで後の動作をした」ことを表します。「ないで」よりやや改まった語気で、文章や正式な場面でよく使われます。" },
      '4.2': { meaning: "可能形＋てしまう（可能形は「…できる」、てしまうは残念・意外の語気）", explain: "「食べられる」は「食べる」の可能形（食べることができる）で、「てしまう」を付けると「気づかないうちに食べられてしまった／たくさん食べてしまった」という、「こうなるとは思わなかった」ニュアンスになります。" },
      '4.3': { meaning: "…という（名詞に説明や名前を付ける）", explain: "「名詞1という名詞2」は最も基本的な「名前の紹介」の文型で、「長浜将軍というラーメン店」のように、日常会話や場所の紹介で非常によく使われます。" },
      '5.1': { meaning: "…の関係で／…という事情があって", explain: "「Nがある関係で」は「…という事情があるために」という婉曲な言い方で、絶対的ではないが確かに影響がある原因の説明によく使われます（ここでは「空港が近いので高さ制限がある」）。" },
      '5.2': { meaning: "…かもしれない（確信の低い推測）", explain: "話し手自身も確かでない、確信の低い推測を表します。「でしょう」「はずだ」よりも弱く、控えめな語気です。" },
      '5.3': { meaning: "…そうだ（様態、続き。②と同じ用法で、新しい例文で定着させる）", explain: "このパート全体が「福岡タワーから見た景色」を描写していて、様態のそうと推測の文型を多用して「どんなふうに見えるか」を描いています。景色や第一印象を描写するときにとても使える文型の組み合わせです。" },
      '6.1': { meaning: "（私は）…ことにした（話し手の主体的な決定。①の「ことになっている」の対になる）", explain: "第1パートの「ことになっています」とちょうど対になります。「ことにする」は話し手がその場で自分で決めた決定（ここでは「横向きに寝て休むことにした」）、「ことになっている」は自分では決めない既定の予定で、この二つはよく並べて学ばれます。" },
      '6.2': { meaning: "…ずに（続き。④と同じで、ここでもう一度出てくる）", explain: "第4パートの「お金を払わずに」と同じ文型がもう一度出てきました——今回は「お金を払わず、マイルで交換した航空券で帰ってきた」という場面で、「AをしないでBをした」という日常の場面でこの文型がよく出てくることが分かります。覚えておく価値があります。" }
    },
    V: {
      '1.1': { kind: "地名", explain: "福岡市の中心エリアの一つで、博多駅や博多港があり、九州最大の交通の要衝です。動画の字幕では、この語が音声認識で2回聞き間違えられました（「墓多」）。これは本プロジェクトで把握している実際の音声認識の限界で、地名が本当にそう呼ばれるわけではありません。", linkLabel: "ウィキペディア・博多" },
      '1.2': { kind: "地名", explain: "羽田は東京の主要空港で、福岡空港は「市の中心から空港まで地下鉄で数分」で有名です。日本で数少ない、乗り換えなしでほぼ市街地から直行できる空港です。", linkLabel: "ウィキペディア・福岡空港" },
      '2.1': { kind: "グルメ", explain: "福岡の豚骨ラーメンの元祖の流派の一つ：細麺＋濃厚な白濁豚骨スープ。魚市場で働く時間のない人が「ずるっ」とすぐ食べ終えて仕事に戻れるよう、麺をわざと細くしたと言われます——この歴史は動画でも触れられています。", linkLabel: "ウィキペディア・長浜ラーメン" },
      '2.2': { kind: "グルメ", term: "ごまサバ", explain: "福岡の名物の一つで、生のサバをごまだれで生食します。動画では「全国でもここだけだと思いますが、サバを生で食べられる」と言っています。福岡近海のサバは寄生虫のリスクを比較的管理しやすいため、刺身として出せるそうです。" },
      '2.3': { kind: "グルメ", explain: "福岡で最も有名な特産品の一つで、スケトウダラの卵を唐辛子で漬けたもの。おにぎり、パスタ、お弁当によく使われ、福岡土産の代名詞のような存在です。", linkLabel: "ウィキペディア・明太子" },
      '3.1': { kind: "グルメ／文化", term: "元祖（がんそ）", explain: "「元祖」は「最初の創始者／本家の店」という意味で、老舗の店名によく使われて正統性を強調します。このパートの商標争いの話の核心でもあり、何軒もの店が自分こそ「元祖」だと主張しています。" },
      '3.2': { kind: "グルメ／文化", explain: "博多ラーメン独特の食べ方：麺を食べ終えたら、スープなしで「麺だけ」の替え玉を別に注文でき、普通は一杯よりずっと安いです。長浜のラーメン屋台の文化から発展したと言われます。", linkLabel: "ウィキペディア・替え玉" },
      '4.1': { kind: "地名／文化", term: "櫛田神社（くしだじんじゃ）と博多祇園山笠", explain: "博多エリアで最も重要な神社で、毎年7月に行われる山車のお祭り「博多祇園山笠」はユネスコの無形文化遺産に登録されています。動画の字幕では「山笠」が「ダッシュ」と聞き取られており、これも実際の音声認識エラーの例です。", linkLabel: "ウィキペディア・博多祇園山笠" },
      '4.2': { kind: "地名", explain: "福岡最大の繁華街・歓楽街で、那珂川と博多川に挟まれた中洲の土地です。屋台文化も有名です。", linkLabel: "ウィキペディア・中洲" },
      '4.3': { kind: "グルメ文化", term: "イカの踊り食い", explain: "生きたイカをその場でさばき、体がまだ動いているうちにそのまま生で食べる食べ方で、「新鮮すぎてまだ動いている」ことを強調します。日本の沿岸地域によくある、鮮度を見せつけるスリルのある食べ方です。" },
      '5.1': { kind: "地名", term: "福岡タワー", explain: "高さ234メートルの海辺の展望タワー。福岡空港が市街地に近すぎるため市内全体に建物の高さ制限があり、福岡タワーは一時期市内で有数の高い建物でした。博多湾を360度見渡せます。", linkLabel: "ウィキペディア・福岡タワー" },
      '5.2': { kind: "地名", explain: "細長い陸繋島／砂州の地形で、博多湾と玄界灘を隔てています。福岡タワーや飛行機から、海面を二つに「区切る」独特の形がはっきり見えます。", linkLabel: "ウィキペディア・海の中道" },
      '6.1': { kind: "旅行の知識", term: "マイル特典航空券", explain: "航空会社で貯めた搭乗マイルを無料航空券に交換する制度。動画で言っている「残ったマイルで特典航空券に交換して、お金を払わずに帰ってきた」がまさにこれです。会員ランクを上げるためにわざと多く飛ぶ「修行」という日本のビジネス旅行文化のネタとよく一緒に語られます。" }
    }
  }
};
