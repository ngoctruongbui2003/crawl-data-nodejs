const linkProducts = [
    "/products/jordan-1-elevate-low-atmosphere-dh7004-600-38",
    "/products/jordan-1-high-denim",
    "/products/jordan-1-high-satin-snake-36-5",
    "/products/jordan-1-low-desert-berry-553560-616-36",
    "/products/jordan-1-low-golf-aegean-storm-dd9315-115-44",
    "/products/jordan-1-low-gs-light-madder-root-dm8960-801-38-5",
    "/products/jordan-1-low-lucky-green-dc0774-304-40",
    "/products/jordan-1-low-lucky-green-dc0774-304-39",
    "/products/jordan-1-low-marina-blue-dc0774-114-36",
    "/products/jordan-1-mid-gs-banned-554725-074-40",
    "/products/jordan-1-mid-gs-banned-554725-074-36",
    "/products/jordan-1-mid-hyper-royal-554724-077-40-5",
    "/products/jordan-1-mid-hyper-royal-554724-077-40-6",
    "/products/jordan-1-mid-retro-taxi-554725-701-36",
    "/products/jordan-1-mid-reverse-bred-554724-660-44-5",
    "/products/jordan-1-mid-se-turf-orange-bq6931-802-38-5",
    "/products/jordan-1-mid-se-turf-organe-bq6931-802-40",
    "/products/jordan-1-mid-signal-blue-bq6931-402-40",
    "/products/jordan-1-retro-hi-og-light-smoke-grey-555088-126-41",
    "/products/jordan-1-retro-hi-pantent-bred-575441-063-37-5",
    "/products/jordan-1-retro-high-golf-uni-blue-dq0660-400-42-5",
    "/products/jordan-1-university-blue-36",
    "/products/jordan-5-retro-raging-bull-red-dd0587-600-43",
    "/products/jordan-6-travis-scott-british-khaki-dh0690-200-37-5",
    "/products/nike-jordan-1-low-se-sail-raitan-fb7168-121-45",
    "/products/adidas-adifom-superstar-black-white-ig0241-38",
    "/products/adidas-campus-00s-black-white-38-5",
    "/products/adidas-forum-low-royal-blue-fy7974-38",
    "/products/adidas-forum-low-white-grey-if2733-36-5",
    "/products/adidas-gazelle-indoor-cream-white-38-6",
    "/products/adidas-gazelle-indoor-cream-white-38-5",
    "/products/adidas-samba-core-black-41",
    "/products/adidas-samba-indoor-x-lionel-messi-id3550-45",
    "/products/adidas-samba-solar-red-42-5",
    "/products/adidas-vl-court-lifestyle-hq1801-44",
    "/products/adifom-superstar-black-hq8752-44-5",
    "/products/adizero-cybersonic-tennis-if0435-45",
    "/products/air-max-1-lv8-obsidian-dh4059-100-41",
    "/products/air-span-2-laser-blue-ah8047-001-41",
    "/products/asics-gel-spotlyte-amor-super-aurum-1203a396-40",
    "/products/bbc-x-pharrell-x-nmd-running-dog-gz1664-42-5",
    "/products/blazer-low-77-vintage-da6364-001-42",
    "/products/blazer-mid-77-light-bone-dq7673-001-42",
    "/products/campus-00s-black-white-gum-hq8708-36-5",
    "/products/campus-00s-white-black-if8761-45",
    "/products/cat-sofa-headphone-black-38",
    "/products/centennial-85-low-white-green-36-5",
    "/products/champion-sneaker-36",
    "/products/convs-run-star-hike-42",
    "/products/court-vision-low-white-red-gold-dh3158-106-39",
    "/products/court-vision-next-nature-hm9862-001-40-5",
    "/products/court-block-white-ig6862",
    "/products/d-o-n-issue-44-5",
    "/products/disney-kermit-stan-smith-gx9513-44-5",
    "/products/dunk-low-panda-dd1391-100-44-5",
    "/products/adifom-superstar-black-white-36-5",
    "/products/alexander-wang-sneaker-30123n026-41",
    "/products/blazer-sacal-snow-beach-44-5",
    "/products/clot-x-gazelle-halo-ivory-ih3144-38",
    "/products/gucci-slide-black-gold-519996-35",
    "/products/mmy-hank-og-a05fw702-42",
    "/products/nike-blazer-ow-university-red-dh7863-100-40",
    "/products/yeezy-350-v2-butter-48",
    "/products/yeezy-350-v2-carbon-fz5000-36",
    "/products/yeezy-350-v2-mx-rock-45",
    "/products/yeezy-350-v2-black",
    "/products/yeezy-700-mnvn-laceless-analog-ig4798-42-5",
    "/products/yeezy-700-v2-tephra-fu7914-42",
    "/products/yeezy-700-v3-fade-salt-id1674-42-5",
    "/products/yzy-700-v3-kynaite-37",
    "/products/yeezy-700-v3-mono-safflower-hp5425-42-5",
    "/products/yzy-qntm-barium-38-5",
    "/products/yzy-350-v2-mono-clay-gw2870-41",
    "/products/af-1-low-malachite-dq7658-300-42",
    "/products/af-1-lx-tear-away-red-swoosh-39",
    "/products/af1-07-white-light-photo-blue-hf3836-100",
    "/products/af1-07-white-university-red-fz7187-100",
    "/products/af1-low-trang-vien-den",
    "/products/af1-low-07-white-swoosh-panda",
    "/products/af1-low-3m-summit-white-ct2299-100-38-5",
    "/products/af1-low-all-white-83",
    "/products/af1-low-black-white",
    "/products/af1-low-catechu-cz0269-101-38",
    "/products/af1-low-lv8-black-chile-racer-blue",
    "/products/af1-low-lv8-nba-black-wolf-grey",
    "/products/af1-low-matsuri-41",
    "/products/af1-low-ct2302-100",
    "/products/af1-low-prm-2-molten-metal-fv3616-101-41",
    "/products/af1-low-shadow-solar-red-db3902-100-38",
    "/products/af1-low-triple-white-dd8959-100-40-5",
    "/products/af1-low-white-black-ct2302-100",
    "/products/af1-low-white-black-43",
    "/products/af1-low-white-grey",
    "/products/af1-mid-all-white",
    "/products/af1-mid-certified-fresh-dq8766-001-42",
    "/products/chuck-70-admiral-elm-a06524c-37",
    "/products/chuck-70-hi-herringbone-a03661c-37",
    "/products/chuck-70-parchment-162062c-42-5",
    "/products/chuck-lift-platform-y2k-heart-a09115c-36",
    "/products/chuck-taylor-hot-tea-a06564c-37",
    "/products/converse-all-star-70-hi-cdg-white-36-5",
    "/products/converse-chuck-70-feng-chen-wang-169840c-41",
    "/products/converse-polo-1",
    "/products/converse-x-feng-chen-wang-chuck-70-169839c-40",
    "/products/old-skool-black-white-vn00003hy28-40-5",
    "/products/vans-of-the-wall-tee",
    "/products/vans-slip-on-spider-web-vn0a3jex1jj-38",
    "/products/vans-style-24-hibicus-pack-40",
    "/products/vans-x-mastermind-tee",
    "/products/dunk-hi-prm-somos-familia-dz5354-045-42",
    "/products/dunk-high-1985-sp-yellow-42",
    "/products/dunk-high-first-use-red-42-5",
    "/products/dunk-low-panda-dd1503-101-40",
    "/products/dunk-low-photo-dust-dd1503-103-39",
    "/products/dunk-polar-blue",
    "/products/dunk-low-white-hyper-royal-dv0831-104-41",
    "/products/sb-dunk-concepts-turdunken-dc6887-200-44-5",
    "/products/adi-x-ghosted-3-tf-inflight-eg8199-43",
    "/products/crazyfast-league-fg-orange-ie2377",
    "/products/crazyfast-3-fg-core-black-gy7429",
    "/products/predator-accuracy-3-tf-orange-gw4641-43",
    "/products/baskets-gel-venture-6-1203a362-45",
    "/products/lebron-witness-vii-white-silver-dm1123-100-43",
    "/products/zoom-freak-2-alphabet-cw3162-001-46",
    "/products/jd-1-mid-gs-banned-554725-074-39",
    "/products/jd-1-retro-hi-silver-toe-c00461-001-41",
    "/products/jd1-low-bred-toe-2-0-553558-161-46",
    "/products/jd1-mid-banned-554724-074-42-5",
    "/products/jd1-mid-se-gs-metallic-gold-dc1420-700-38-5",
    "/products/jordan-1-elevate-low-se-bred-dq1823-006-40",
    "/products/jordan-1-gs-light-madder-root-dm8960-801-40",
    "/products/jordan-1-hi-og-lucky-green-dz5485-031-45",
    "/products/jordan-1-hi-rare-cool-grey-705300-024-38",
    "/products/jordan-1-hi-red-elephant-838850-600-36",
    "/products/jordan-1-high-banned-38",
    "/products/jordan-1-high-bred-toe-43",
    "/products/jordan-1-high-fusion-red-42",
    "/products/jordan-1-high-game-royal-37-5",
    "/products/jordan-1-high-og-chicago-lost-and-found-fd1437-612-36",
    "/products/jordan-1-high-og-light-fushion-red-555088-603-48-5",
    "/products/jordan-1-high-og-unc-to-chicago-cdo461-046-41",
    "/products/jordan-1-low-elevate-french-blue-dh7004-400-43",
    "/products/jordan-1-low-elevated-bred-dq1823-006-38-5",
    "/products/jordan-1-low-fuchsia-ck3022-005-44-5",
    "/products/jordan-1-low-gs-black-fire-red-553560-063-36",
    "/products/jordan-1-low-og-neutral-grey-cz0775-100-39",
    "/products/jordan-1-low-panda-dco774-101-40",
    "/products/jordan-1-low-pine-green-553560-36",
    "/products/nike-jordan-1-low-sb-unc-blue-cj7891-401-43",
    "/products/jordan-1-low-se-craft-light-olive-fd6819-300-40",
    "/products/jordan-1-low-se-diamond-dh6931-001-43",
    "/products/jordan-1-low-se-gs-spades-dj5186-100-38-5",
    "/products/jordan-1-low-white-grey-dc0774-105-40-5",
    "/products/jordan-1-mid-alternate-bred-dq8426-060-40-5",
    "/products/buckle-bad-bunny-last-forum-hq2153-44-5",
    "/products/kwondo-1-gd-peaceminusone-dh2482-100-40-5",
    "/products/country-xlg-if8078-45",
    "/products/court-vision-triple-black-cd5463-002-42",
    "/products/vl-court-3-0-id6285-44",
    "/products/waffle-one-natural-da7995-102-40",
    "/products/blazer-mid-77-next-nature-do1344-101-41",
    "/products/court-legacy-da5380-102-40",
    "/products/court-vision-next-nature-dh2987-101-42-5",
    "/products/copa-premiere-grey-gum-if7528-41",
    "/products/gazelle-bold-wild-pink-gum-id6997-37",
    "/products/sl-72-rs-utility-yellow-ie6526-45",
    "/products/campus-oos-semi-lucid-ho3471-44",
    "/products/campus-oos-carbon-lucid-id2064-45",
    "/products/forum-low-cl-x-indigo-herz-ie1855-39",
    "/products/scuderia-ferrari-drift-cat-306864-04-43",
    "/products/court-vision-game-royal-cd5463-103-43",
    "/products/uptempo-96-copy-paste-dq5014-068-43",
    "/products/blazer-sacai-patent-leather-dm6443-100-44",
    "/products/puma-slipstream-mix-388635-02-41",
    "/products/originals-crazy-byw-2-0-542759-42",
    "/products/campus-oos-core-black-hq8708-41",
    "/products/blazer-low-jumbo-sail-dn2158-101-40-5",
    "/products/ultra-boost-dna-4-0-core-black-fy9318-40",
    "/products/m2k-tekno-orange-av4789-100-43",
    "/products/waffle-sacai-clot-kiss-of-death-dh1347-100-43",
    "/products/gradas-white-black-gum-fw3378-42",
    "/products/centennial-85-low-cloud-green-gx2214-44",
    "/products/originals-retropy-e5-ie1937-42",
    "/products/skechers-tidao-51982-43",
    "/products/adapt-2-0-plnet-of-hoops-45",
    "/products/adapt-auto-max-fireberry-cz6804-001-42",
    "/products/adapt-bb-2-0-astronomy-blue-44-5",
    "/products/adapt-bb-2-0-black-bq5397-001-40-5",
    "/products/adapt-bb-2-0-planet-of-hoops-42-5",
    "/products/adifom-q-black-carbon-ie7449-42",
    "/products/af1-low-travis-scott-cactus-black-39",
    "/products/alexander-wang-puff-trainer-black",
    "/products/balenciaga-slide-neon-green-37",
    "/products/balenciaga-triple-s-clear-sole-541624-40",
    "/products/brushed-leather-chocolate-2de127-42",
    "/products/burberry-sneaker-44-5",
    "/products/common-projects-og-achilles-39",
    "/products/fendi-mocassino-cam-7",
    "/products/fog-1-oatmeal-ar4237-900-42-5",
    "/products/gucci-ace",
    "/products/gucci-ace-heart-36",
    "/products/gucci-ace-stars-37",
    "/products/gucci-ace-trai-thom-35",
    "/products/gucci-ace-trai-thom-37",
    "/products/gucci-leather-web-white-233334-6-5-fit-40-5",
    "/products/gucci-rhyton-logo-leather-35-5",
    "/products/jordan-1-high-pure-platium-41",
    "/products/jordan-1-high-sbb-40-5",
    "/products/jordan-1-mid-obsidian-royal-36",
    "/products/jordan-1-retro-hi-nrg-union",
    "/products/kwondo-1-gd-panda-dh2482-101-42",
    "/products/kwondo-1-gd-triple-white-dh2482-100-43",
    "/products/lv-run-away-sneaker-0291-size-7-fit-40-41",
    "/products/maison-margiela-sock-painter-42",
    "/products/af1-07-essential-wheat-ct1989700-36",
    "/products/af1-07-lv8-x-nba-red-bq4420-600-40",
    "/products/af1-07-mid-lv8-wolf-grey-804609-006-41",
    "/products/af1-blue-gum-sole-aq3778-994-36",
    "/products/af1-crater-summit-whtie-cz1524-100-40",
    "/products/af1-crater-summit-whtie-cz1524-100-41",
    "/products/af1-custom-by-you-dn4165-991-37-5",
    "/products/af1-just-do-it-summit-dv7584-100-40",
    "/products/af1-low-all-white-29-5",
    "/products/af1-low-digtal-swoosh-cw1577-100-40",
    "/products/af1-low-easter-cw0367-100",
    "/products/af1-low-just-do-it-white-tan-f81852-111-40",
    "/products/af1-low-orange-skeleton-cu8067-800-42",
    "/products/af1-low-reverse-stitch-uni-red-cd0886-600-42-5",
    "/products/af1-low-shadow-arctic-pink-cu5315-001-38",
    "/products/af1-low-shadow-sunset-pulse-cu8591-101-38",
    "/products/af1-low-tie-dye-dark-sulphur-cz0337-700-44",
    "/products/af1-low-white-custom-315116-112-37-5",
    "/products/af1-low-white-green-dh7561-105-42",
    "/products/af1-low-world-champion-dq0300-100-40",
    "/products/af1-mid-qs-jewel-oil-green-dq3505-100-44",
    "/products/af1-olympic-gold-medal-718152-700-42",
    "/products/af1-plt-af-orm-metallic-silver-38",
    "/products/af1-react-coconut-milk-40",
    "/products/af1-utilty-white-black-40-5",
    "/products/af1-utilty-qs-white-av6247-100-40-5",
    "/products/af1-white-medium-blue-dh7561-104-40",
    "/products/af1-worldwide-pack-ck7213-001-42",
    "/products/af1-x-goretex-hi-wtr-phantom-cq7211-002-40-5",
    "/products/sf-af1-mid-mushroom-917753200-41",
    "/products/ambush-x-chuck-70-white-166516c-40",
    "/products/chuck-70-at-cx-red-a06119c-41",
    "/products/chuck-70-high-black-162050c-37",
    "/products/chuck-70-high-peace-unity-172259c-41",
    "/products/chuck-move-black-high-top-568497c-41-5",
    "/products/chuck-taylor-construct-45",
    "/products/converse-chuck-70-feng-chen-wang-169840c-41",
    "/products/cv-run-star-motion-white-ao3242c-38-5",
    "/products/one-star-academy-pro-suede-a06426c-42",
    "/products/osk-kenzo-floral-white-vn0a4p3x01h1-44",
    "/products/ro-x-turbodrk-chuck-70-black-172344c-42-5",
    "/products/run-star-hike-crater-171574c-40",
    "/products/run-star-motion-black-white-171545c-39",
    "/products/run-star-motion-hi-trance-form-a00874c-38",
    "/products/run-star-motion-light-twine-171547c-40",
    "/products/run-star-motion-marbled-a03552c-42",
    "/products/dunk-cmft-denim-705434101-40",
    "/products/dunk-hi-light-chocolate-dh5348-100-41",
    "/products/dunk-hi-michigan-cz81149-700-41",
    "/products/dunk-high-aluminum-36",
    "/products/dunk-high-culture-day-dr8753-077-41",
    "/products/dunk-low-brown-sashiko-44",
    "/products/dunk-low-custom-dj6188-101-42",
    "/products/dunk-low-disrupt-red-gum-ck6654-600-38-5",
    "/products/dunk-low-disrupt-royal-36-5",
    "/products/dunk-low-indigo-haze-dd1503-500-40-5",
    "/products/dunk-low-kasina-industrial-cz6501-100-43",
    "/products/dunk-low-brown-basalt-38",
    "/products/dunk-low-night-maroon-dv0831-102-44",
    "/products/dunk-low-off-white-uni-red-ct0856-600-41",
    "/products/dunk-low-ow-lot-19-of-50-dj0950-119-42",
    "/products/nike-dunk-low-ow-lot-29-of-50-dm1602-103-41",
    "/products/dunk-low-retro-panda-dd1391-100-45",
    "/products/dunk-low-sb-what-the-paul-cz2239-600-36",
    "/products/dunk-low-sp-syracuse-cu1726-101-40",
    "/products/sb-dunk-hi-faust-black-gold-dh7755-001-46",
    "/products/sb-dunk-high-oski-shark-ci2692-001-40",
    "/products/sb-dunk-low-blue-fury-36",
    "/products/sb-dunk-low-medicon-toy-42",
    "/products/sb-dunk-low-papa-bear-36",
    "/products/sb-dunk-low-raygun-tie-dye",
    "/products/wmns-dunk-hi-aluminum",
    "/products/crocs-pink-38",
    "/products/kawa-shower-pink-40-5",
    "/products/yeezy-slide-dark-onyx-id5103-40-5",
    "/products/yeezy-slide-salt-id5480-44-5",
    "/products/yeezy-slide-slate-grey-id2350-10",
    "/products/crocs-pink-38",
    "/products/kawa-shower-pink-40-5",
    "/products/yeezy-slide-dark-onyx-id5103-40-5",
    "/products/yeezy-slide-salt-id5480-44-5",
    "/products/yeezy-slide-slate-grey-id2350-10",
    "/products/klay-thompson-kt7-anta-812231101-45",
    "/products/curry-flow-9-x-sesame-3024248-102-41",
    "/products/d-o-n-issye-3-universe-black-42",
    "/products/d-rose-retro-simeon-fw3665",
    "/products/flow-furt-x-black-history-month-3025344-500-44",
    "/products/flow-futr-x-white-metalic-gold-45-5",
    "/products/foamposite-pro-yzy-42-5",
    "/products/jordan-why-not-zero-5-dc3638-158-41",
    "/products/kd-trey-5-ii-china-pack-683275-030-44",
    "/products/kobe-1-protro-think-16-46",
    "/products/kyrie-6-vast-grey-bq4630-003-41",
    "/products/kyrie-low-5-white-game-royal-dj6014-100-44",
    "/products/lebron-16-multi-color-bq5969-900-44-5",
    "/products/lebron-18-low-palmer-cv7562-300-41",
    "/products/lebron-18-low-viotech-cw5635-200-45",
    "/products/lebron-19-bred-cz0203-001-41",
    "/products/lebron-19-low-black-red-dh1270-001-42",
    "/products/lebron-9-low-revwerse-liverpool-dq6400-300-44",
    "/products/mamba-fury-black-gym-red-41",
    "/products/mars-white-fire-red-42",
    "/products/nike-kd-12-by-you-bq7697-991-42",
    "/products/pg-3-manba-mentality-41",
    "/products/pg-4-black-grey-teal-43",
    "/products/pg-5-white-black-cw3164-100-42",
    "/products/pro-bounce-low-42",
    "/products/trae-young-1-icee-h68998-45",
    "/products/wade-808-2-lavender-abp5037-1-45",
    "/products/way-of-wade-2-ice-blood-abp5037-6c-46",
    "/products/zoom-freak-3-digital-da0694-500-42-5",
    "/products/zoom-freak-3-ep-project-34-da0695-001-42",
    "/products/vo-nike-dai",
    "/products/vo-nike-ngan",
    "/products/vo-nike-vua",
    "/products/adidas-sport-deodoriser",
    "/products/adidas-sport-foam-cleaner",
    "/products/adidas-sport-protector-200ml",
    "/products/adidas-sport-wipes",
    "/products/crep-protect-cure-ultimate-cleaning-kit",
    "/products/crep-protect-starter-pack",
    "/products/crep-protect-200ml-can"
]

const products = [
    {
        "name": "JORDAN 1 ELEVATE LOW ATMOSPHERE - DH7004 600 - 38",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO30082408",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">JORDAN 1 ELEVATE LOW ATMOSPHERE - DH7004 600 - 38</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "948d15947090d7ce8e81_4f6b764f0e0c40e98f064d090dbb655c_grande.jpg",
            "caf33655-6f2d-406d-8c1b-73fad85b9696_8ed66a5b32cd43cb91e4531f62b9ca43_compact.jpg",
            "a30f412a-5f09-4911-92cc-f9772ff2b2cf_8c4408bae4b5490cb081d4bfe4d48ca3_compact.jpg",
            "8517e4cf-64bd-4933-bbfd-a13b2eebabfe_4959275e044d4b129753b550d892fc2b_compact.jpg",
            "16c6b328-9793-4b89-bc5b-a4c9800b8dac_6a62078f1fa945ce97f27aeb11778fdf_compact.jpg",
            "c8fe79c6-56e3-4b97-9126-8f6e4248633e_70f907ca6f7f4867b16912ab16ffa45d_compact.jpg",
            "4503f8c2-8a96-41cb-8490-749a4fc8df5c_a67907b71f2f4f64b37898c0fb07b613_compact.jpg",
            "3b1847fe-c553-4caf-a36c-e0722bb8d0f3_5ed3a7dab3a34f6297f511e6a374459d_compact.jpg",
            "b0067863-b87f-4b67-97c8-3a0998e0b38f_33c627044ee94caf88b75dd9edd5ec40_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH OG 'DENIM'",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "NE00071-3",
        "price_now": "3,500,000₫",
        "price_compare": "6,500,000₫",
        "sizes": [
            "36.5",
            "37.5",
            "38",
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>JORDAN 1 HIGH OG 'DENIM'</p><p>Tình trạng: NEW&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 năm đối với giày trên 1 triệu. 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p>\n\t\t\t",
        "images": [
            "1a2cf784-614d-475d-96af-e4980c2e6974_705d4854a81c4e7e843378471438ae62_grande.jpg",
            "00498fb7-47f6-45ca-a725-96dc6597078f_ad8bfe8e937c423f91a94c050fee7664_compact.jpg",
            "a2ee5614-49d3-473e-9a71-e9e30b57faae_51877b562563421b9f9925abea8910c2_compact.jpg",
            "f7d8fe09-4b5f-4b9a-bd95-914818037c2d_9e8eb3b0a3044becb9c121bf21909e8e_compact.jpg",
            "1_ac3bb485439540a2852464ddeb28a39c_compact.jpg",
            "2.1_bbae1be4d7914cb89dafea42a66251e7_compact.jpg",
            "2.2_f1265cc2da73444ab87b241c659ca7fc_compact.jpg",
            "2_1c96e8846f744128a0086662ce90e42b_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH SATIN SNAKE - CD0461 601 - 36.5",
        "brand": "jordan",
        "type": "Jordan New",
        "sku": "BO30122333",
        "price_now": "1,200,000₫",
        "price_compare": "1,950,000₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>JORDAN 1 HIGH SATIN SNAKE - CD0461 601 - 36.5</p><p>Tình trạng: NEW&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5979759956537_d586a8dbf4cce21568b03cf1cdb0b152_2801ead984cd48d5a40319ddb60f4650_grande.jpg",
            "d5f4ca63-4584-4b1f-a1a9-b5c7d63a2b12_b318aa21ec214f329c51f19504a474d9_compact.jpg",
            "b72354fe-0bc8-4bc2-9fe3-afd15e1224b2_bc7dee3982be4dfaab6cc8d7a6c1b436_compact.jpg",
            "556d75b3-787b-4bbd-83ba-00c75ceaeb25_de0d998c6ec44bd7939683cab0012b89_compact.jpg",
            "4bffe856-5a24-43a6-9ad1-ba4d47c0e44e_86f74438d96140a380fb4d9584e1610e_compact.jpg",
            "96fb3dd1-0f5e-4807-a266-ce28616033d8_99244bd850494407b54710b64e3dd721_compact.jpg",
            "a9f64b63-8716-4eee-b7a4-bfc0d5d3f239_bfed9091ae6248c2bb8d613da5160651_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW DESERT BERRY - 553560 616 - 36",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 LOW DESERT BERRY - 553560 616 - 36</span><div><span style=\"font-size:15px\">Tình trạng: NEW - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "43303859-a215-4ae8-8b86-19fe62b7f0a2_08bd8e7899154fbe95671898e63b5e92_grande.jpeg",
            "0ea6b4d4-f01b-400d-af9b-850a170f225b_8d1f10f42f524fcebc078ce4b0a6c0ca_compact.jpg",
            "e99f7a55-befe-4cb4-8459-3069a8c6e779_6ca1828cb9924b96b356ac202b559c32_compact.jpg",
            "594be350-730e-4350-b2aa-4bca7ff7ccf9_c150f35223cf43a7a32ee4ab753bc051_compact.jpg",
            "da6317d3-9e0c-46fe-b88e-8fe9383acd56_5f9b91a9bcc54c62bfec06538029e05c_compact.jpg",
            "3b8c7869-31db-4117-bd52-e0c80df1d241_4fa93388ef444dfb919e10dae3a9a422_compact.jpg",
            "646c99b1-a272-480c-a04f-69b38662fe6e_a280eb0da76f4fb6b4c210e3390c845c_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW GOLF AEGEAN STORM - DD9315 115 - 44",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO28092424",
        "price_now": "3,300,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 LOW GOLF AEGEAN STORM - DD9315 115 - 44&nbsp;</span><div><span style=\"font-size:15px\">Tình trạng: NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "027abded-8ac0-4faf-9426-a3e828889293_246d299e4cb3409c96203241c4d117bb_grande.jpeg",
            "4e879eb8-7e4b-47aa-9d43-9e5c64ef1a17_31518ae9503c46b39196be2c982a9725_compact.jpg",
            "50863b97-8b21-4f27-a22a-f8845f48f636_0bfcbf353e6647daa27d9db6ab3b3cf4_compact.jpg",
            "6d935ad5-041c-488a-b063-ebb9e4ea1a83_a38d3dfa6eaa4a80a4a5e2333965b0e5_compact.jpg",
            "928884d2-9464-4ba3-af88-a0ada2dfa2b9_8bcd36c7b4f94db7b09d1d0262a30ef6_compact.jpg",
            "84698675-a466-48d8-850a-2546401cc9d6_93bf499dcaae4c259b11f76327d76ff5_compact.jpg",
            "d86561b5-1152-446b-bbae-2b2bc9c762dd_178989d922bd44388a01171ec1bdeec7_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW GS LIGHT MADDER ROOT - DM8960 801 - 38.5",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO16082403",
        "price_now": "1,400,000₫",
        "price_compare": "1,800,000₫",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">JORDAN 1 LOW GS LIGHT MADDER ROOT - DM8960 801 - 38.5</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979759514020_ef3617c6942e830ae056abd2a3a6a355_9e6ceb1407e348c8a631fc0ec206be09_grande.jpg",
            "fa8428dd-9fbe-4c24-bcf0-43aac2b5f289_968315a8cc444f858e2cdca8c71408b7_compact.jpg",
            "f2a46262-32b4-4fc6-9776-0a80d038c114_4f4a6f08f35446b6af14376948c0f8d5_compact.jpg",
            "3784fdee-9a95-4b8f-9e21-885bb88fea26_b4b9388291574ed08b1b1cb03cb28c9a_compact.jpg",
            "28bf9836-d6c7-4183-9a5d-643e7eaff19c_cf1b0c344c4e417f84e465ee75fc64a0_compact.jpg",
            "20dabaed-9266-456f-bbe9-409336499cd4_0a96a004897d4179a9d2ff17aca921f5_compact.jpg",
            "b93e40c3-5263-4d19-80f4-8bd12965a767_760fe5f4c9764f73a4cff99e32fd1f5e_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW LUCKY GREEN - DC0774 304 - 40",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">JORDAN 1 LOW LUCKY GREEN - DC0774 304 - 40</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "cd2c7bb4967632286b67_fce718bb9a8b465cab9200e0b85f42c0_grande.jpg",
            "99b757c7-9521-42b8-83bb-a07a9f95bd59_606bacf8628a428e912d99a3747e226b_compact.jpg",
            "77a0a4da-6e7c-4c6f-a92d-6d3d98c13fe2_81528330001b412a97ff83820e357f83_compact.jpg",
            "0c0b6d7c-5fae-45ed-8ad2-64fd1389fc72_7b2ac4b616ef4202b0dfc5c2c861dac5_compact.jpg",
            "0a8036c4-323c-48a7-8f37-e565d133a3de_63ca65fdaf8e4c319b7606cd9d27a69e_compact.jpg",
            "e77d2464-7b45-4436-b950-ad080cb9534e_30a192f9531c495095c282e2daca0d23_compact.jpg",
            "c921ba1a-dfbf-4178-ad10-246328d073c0_5fbf702254bf4c3dbed4157b71666325_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW LUCKY GREEN - DC0774 304- 39",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "",
        "price_now": "1,600,000₫",
        "price_compare": "0₫",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>JORDAN 1 LOW LUCKY GREEN - DC0774 304- 39<p>Tình trạng: NEW - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 1 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883025859177_7d3a094fd207eb5ba66e70141db586f1_39c8b526b8b14bfdaa6a3b41a753eec9_grande.jpg",
            "78346bba-21c7-48b7-b1de-432d049f4bbe_a12a418ec7334c8fa5cddabc44474d21_compact.jpg",
            "ae328dde-7a84-4416-9ff4-c44a6bc153d0_26b62bd14bc04a3fb921cad6eda3bce0_compact.jpg",
            "ebc1c50e-50f6-4c09-a080-86890a67beac_e448f84bb86341d0903ef17ad561735b_compact.jpg",
            "a48f4dc8-619e-4d8f-8195-e2d873bd629a_c5085eb91f99408cbfda88dc25f7e57c_compact.jpg",
            "b5520dc5-6893-4398-974a-7369b1fbf4c5_0175301e4bfa445dae100693fa07d7e8_compact.jpg",
            "756fde11-0b46-4bf6-9b93-8c80413f19b6_fd3cbeabc9664ff7b7d73a5c5546bf63_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW MARINA BLUE - DC0774 114 - 36",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO22102402",
        "price_now": "1,200,000₫",
        "price_compare": "1,450,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">JORDAN 1 LOW MARINA BLUE - DC0774 114 - 36<div>Tình trạng: &nbsp;NEW - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div>\n\t\t\t",
        "images": [
            "z5979760019233_ead4a638fe61a358115a20c2f9bd561e_479b00e0c821418aa8f586f32bd242ab_grande.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID GS BANNED - 554725 074 - 36",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO24092404",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 MID GS BANNED - 554725 074 - 36<br>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "33840cf1ac330a6d5322_5a1c75f9c90a455391eb2fed7a582de8_grande.jpg",
            "59ff977e-71ef-4cfd-beb3-5454d3eed6c7_3cf113cd0dc346c4a7762a3a601b6a49_compact.jpg",
            "1d8aa35c-a9b9-48cb-ba4d-109315be69a6_e8a966778397408b9136d6e9b3ff7d26_compact.jpg",
            "7452aaf6-14e3-41c2-b8ba-fcdecf65c13e_307778f691084e95b9df39df28e497a5_compact.jpg",
            "711d4f2f-eaaf-4c69-88bf-33fb8eeb82dc_4ce830c1cde040cd90f5af49191876d1_compact.jpg",
            "ec9b60c2-3b40-4040-99ad-c4e3a0936fdd_cd7d43f984bd4fed88bc85ad9550dc34_compact.jpg",
            "452891b9-2a3c-45d3-ba4f-8ea9f8d50cbe_abd2ee16d9894b218e5b02e98d97a752_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID GS BANNED - 554725 074 - 36",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO16082413",
        "price_now": "1,450,000₫",
        "price_compare": "1,800,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">JORDAN 1 MID GS BANNED - 554725 074 - 36</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; LIKE NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979759665204_a2822c1037bbe6008d66576cae8736b7_1b295de2d14d4149ad5da9154e269f5c_grande.jpg",
            "737330ce-421d-441b-9ebb-49ed72593321_89458f73680e44af813edd5073876934_compact.jpg",
            "f7566cfa-ac03-411a-9b63-d74bc8e6d23d_e578bd4b1df14d949d35a7e2369f2b5d_compact.jpg",
            "10a4679d-62e2-4d0f-accb-102d8e07aac5_49b57dcdc3414a538b83ccb783e27883_compact.jpg",
            "9fba18af-c283-4764-84ce-1714d38ef4fc_8e8f7ac573314744b0f3d4424bc22d6a_compact.jpg",
            "7c07fd26-bb7d-415c-bfa3-43592552a8d9_ca70a673de464a0c9e638adc9eec6c42_compact.jpg",
            "d248b4fa-8637-4efb-8a54-93bd47e1a188_6a4b63cdae154ea58356159e8f900cd3_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID HYPER ROYAL - 554724 077 - 40.5",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO26072417",
        "price_now": "2,000,000₫",
        "price_compare": "2,800,000₫",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JORDAN 1 MID HYPER ROYAL - 554724 077 - 40.5&nbsp;<p>Tình trạng:&nbsp; LIKE NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883025350605_081de7191b8a01951e34d369ad900e12_2797b6893e7d4daab62c0e01ecb287e7_grande.jpg",
            "a9b27cd8-87b7-4427-9f48-7a11f9c8b139_193a84fa570b454eaad4def871359e27_compact.jpg",
            "18d6d179-d5e1-42c4-98bd-bedf5de6035e_5f4803f00b9b406cb005ba82c651611e_compact.jpg",
            "a40e820e-676d-4c3e-a2b8-f88d1aad9131_92310464aaf3479e927bb24b4059e4aa_compact.jpg",
            "1771c4b3-5b06-4b9e-92df-d701b5c5d58b_e9f87196cf0c4d38b26320d7a3d99e48_compact.jpg",
            "e02fa64d-78c6-4c1a-9645-165e277624ea_e59f1f59fe064b10ac15bd49f8e250fc_compact.jpg",
            "a828902d-b3f7-4eb5-94d1-3fea9cdd7273_1c33bbbee80f4c4ab7d3fa5b8de08019_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID HYPER ROYAL - 554724 077 - 40.5",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO28092444",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">LV TRAINER - 8.5</span><div><span style=\"font-size:15px\">Tình trạng: LIKE NEW - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "292cc2e6-b533-44db-bbc7-8559bd8e5ed1_ce35ff774c764550a77ee2cd6edb8a5b_grande.jpeg",
            "735f2fac-afce-43ec-a815-e1481258ad4b_25fb291045b447d290acd33239536518_compact.jpg",
            "7b1b4f25-5ed5-49b7-bf07-78b33ecdb701_0bc49c8e91b444e9b76db1098172001f_compact.jpg",
            "9f1aff36-b5e9-4ab6-9cd6-bfae3cb2d4f5_87bca773248e4d4292e487f1f880b885_compact.jpg",
            "adf0b866-7817-4e0a-9cdf-7e1cc45c975f_c341021962e74c25af6ac70337faacee_compact.jpg",
            "236694b1-7e36-4d1c-999c-d656fe5d51fe_157b79a216ce43bc945ec7bebc481455_compact.jpg",
            "8b2cb025-0092-450b-ad0e-23996df307fe_4fac86fc6b3c4bd4859e7b2dda08767c_compact.jpg",
            "0a686d3f-49ba-4531-b164-1640fadf48a0_bb482e8a6a5049b28dab941b026d8cb0_compact.jpg",
            "a2827691-875a-44f8-ad31-1892579bf572_e899fd7cb1f949ef8efca9303535e12d_compact.jpg",
            "885df73c-4ff1-432d-bb06-7bffa6f24bfd_f7c48e11f79f4bd3b00a6b76fe2335cf_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID RETRO TAXI - 554725 701 - 36",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO05072401",
        "price_now": "1,450,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>JORDAN 1 MID RETRO TAXI - 554725 701 - 36<p>Tình trạng: NEW&nbsp; -&nbsp; FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5979760535393_26c8a7ea02a4b04e635b3ac67a02b36c_673f50805894497a943bb2d55d81cbbb_grande.jpg",
            "42aa8d16-4e56-42ad-8528-fcc9f5f26a98_f27dfcaa4ad0456696381055cffc834b_compact.jpg",
            "1c23e20b-122f-4d56-a49d-b55931241a20_0c74754041ee4712aac8382d41070edd_compact.jpg",
            "666276c8-d249-4940-abc6-d67185897f69_46e83dc781a149d8886631a179878f2f_compact.jpg",
            "40fd648a-30fa-4d5e-8d05-8b6f292a8b54_bf451f71989944a7997e94c023e9dd27_compact.jpg",
            "1898cd85-5028-4ab9-a44a-552c16796c49_7277410f1824480f8098dbb230cc392f_compact.jpg",
            "1a618ab1-eb74-47ce-8790-ec05a672eeae_a0b145aa4533443d95fd8e2303525aef_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID REVERSE BRED - 554724 660 - 44.5",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO22042425",
        "price_now": "2,000,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>JORDAN 1 MID REVERSE BRED - 554724 660 - 44.5</p><p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5784705322928_fdd98a91a2ace7f42e044bb334099d98_13b1a61b659f4fb2a2887d9fbbd6a6e2_grande.jpg",
            "e9a48211-acda-420f-8c9d-00843c2cf98f_36ea9cf51dde41d8b06bfcd1d29a7382_compact.jpg",
            "9b21315b-ab47-481c-8d61-ece4238e703d_a60b0751cc4b48a0a7c3ae06096e80e0_compact.jpg",
            "ac0a81db-b3ac-4c54-8d07-0478dc7308f5_0a04f6d1b07047d4a9e6dbdab99b41e2_compact.jpg",
            "5c7fa8c6-db85-469e-926f-fbb4d2b3d8c9_aba630ac286b4837941e62127a450e94_compact.jpg",
            "3ceb46b3-5edb-4fc3-8c09-b38af97dec4a_4eb172b1aa9a4f308ac59a8957176979_compact.jpg",
            "aa38a124-38b1-41c3-9968-cb221f313c78_973273d7dcc04306933ba2ee40a58b6c_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID SE TURF ORANGE - BQ6931 802 - 38.5",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "",
        "price_now": "1,450,000₫",
        "price_compare": "0₫",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>JORDAN 1 MID SE TURF ORANGE - BQ6931 802 - 38.5<p>Tình trạng: NEW -&nbsp;FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5979760473779_573a831bac73936c1abc476cce41225d_c638cd4407ed4e8c9974b3a4776a8b73_grande.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID SE TURF ORANGE - BQ6931 802 - 40",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO20092408",
        "price_now": "1,800,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 MID SE TURF ORANGE - BQ6931 802 - 40&nbsp;</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5905900591502_0a3861b2654048a28e0980c125b44569_3d4db739af8d443291ff40f8b400a5c0_grande.jpg",
            "ee14afcc-3f98-4efe-9e0b-d246c9b9432e_7dbeef9d944c495e86900e9967c51a89_compact.jpg",
            "d749bdb1-d6ea-4cf1-8a13-8313ed37bc3f_51b8168a5a22463c8e59a9f42cb6522e_compact.jpg",
            "c825d51b-ef4c-41b9-a127-298b03e4009f_5e5261d4926d4c50887c51523f882844_compact.jpg",
            "cb9cb7e4-3c65-4f0e-a22a-4c9924c4927b_4adeab7eda474c92b85adde08a8ba533_compact.jpg",
            "7cc1c131-f689-4690-9cca-cfab66e53a80_dc9a4543c9a9490f8dd71b84576046d1_compact.jpg",
            "c97bc3b6-8a2b-4e0a-a0de-5713618af13d_7383f87c22a947de8afff41316f1ba9b_compact.jpg",
            "e4eaf2ab-1a1b-423e-82ca-f1840192c3a1_fb3183ade69444d494215b3697c900f8_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID SIGNAL BLUE - BQ6931 402 - 40",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO06072404",
        "price_now": "1,600,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>JORDAN 1 MID SIGNAL BLUE - BQ6931 402- 40<p>Tình trạng: NEW - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5979759207964_a043f6b10c96413aff6bb87a53829075_08c8b3445519497da5282d25e36543be_grande.jpg",
            "aa33636a-1de9-4275-925b-d992f3583e02_4700bfe7f8aa43ccbb535315bdc976b2_compact.jpg",
            "a95961f3-22e2-49e0-b289-f33380770e92_aa3a3a7a772548df9d5d5b56c55736e6_compact.jpg",
            "425b561f-12de-4516-b686-98b6c1f52b7b_1f753078aa884e26918b16b824bbd1d1_compact.jpg",
            "d52a0fdb-8608-421c-96b6-e0f1b57b8eb0_fe9ef846df684623a7bb536b8aeafef9_compact.jpg",
            "b2d8efc5-285a-4ea9-ace4-61047480a941_7bb4e5d2629d4977ac06213e38336c29_compact.jpg",
            "e690d333-49ca-4f35-9893-8192cbf5d5c4_cb3f60186af54f0d9536184bf08060a7_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 RETRO HI OG LIGHT SMOKE GREY - 555088 126 - 41",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO20092404",
        "price_now": "3,500,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 RETRO HI OG LIGHT SMOKE GREY - 555088 126 - 41</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "9e77cf2dbc221a7c4333_3be7542dd5ed43b681194cf581059b05_grande.jpg",
            "c4c59720-570e-43ac-b661-07bdb09b808b_1847f07059f8495996824c2d1fd903c9_compact.jpg",
            "bd1a7023-ab2f-4c1a-ab1a-78852bf28cb0_e61efef9ab26414db5cae0b2b7d8d3dc_compact.jpg",
            "561b794a-f9e1-47c0-a6c3-63241bacf126_e0ab1b0aed6649e8be3b91ea3c74df94_compact.jpg",
            "62b1e597-f4da-4c3a-8b92-4d162107d6c4_638766e3b22c434dbf2adf93bec8ada8_compact.jpg",
            "504de20d-de9a-43b7-8c18-0b3dfa8da603_7a778a566c224909a312a3c8f715093b_compact.jpg",
            "3bffbd7f-024a-4da8-b21a-294f3b9b866e_13dfa3e2ce4c4b988e45ad8ea693d5f2_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 RETRO HI PATENT BRED - 575441 063 - 37.5",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO27102449",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "37.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi&nbsp; &nbsp;&nbsp;</span><hr><span style=\"font-size:15px\">JORDAN 1 RETRO HI PATENT BRED - 575441 063 - 37.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "a51732567d41c51f9c50_eab40d7bb0d64a2d9321cf6e86e701e7_grande.jpg",
            "f3ea5a03-25b2-48f2-a104-32c3bd591656_69da0bd042ae4c63a801783b42e6d998_compact.jpg",
            "6d498723-6179-4af7-8d5b-3f6851b600ce_82872316a2b8419e8ae426e570399ace_compact.jpg",
            "22d10c6d-4f43-4625-b857-5bb587888460_036474a2032f462280be2f2cb498f09b_compact.jpg",
            "be5a02e4-9d2d-46b1-957d-da6a5c09bc95_6f2f4f630f4e405fb1aa988f944dacc2_compact.jpg",
            "ee8e298e-0573-42a9-b7b3-40b2fbd53ad8_c99f20e49db24d61930b595c00c7ffa5_compact.jpg",
            "7b8cb9f3-4fdc-4675-b217-ab149014aae6_31482a9c3aa3419692ccabb544f89b7b_compact.jpg",
            "d3b48989-c4cd-45b8-bc9d-824746674263_eab14fd405e246439b0f705905836b9b_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 RETRO HIGH GOLF UNI BLUE - DQ0660 400 - 42.5",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO25092409",
        "price_now": "4,800,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 RETRO HIGH GOLF UNI BLUE - DQ0660 400 - 42.5</span><div><span style=\"font-size:15px\">Tình trạng: NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "e66613b8a47a02245b6b_cbfc4e26208e4ab995b3997cdc4bcd3f_grande.jpg",
            "2beba58f-ad4e-407c-9fbe-b6e6ee3b5b26_7e2eedeb07d343abbdd19e4ad4f379aa_compact.jpg",
            "e153cbaf-fe8e-46f4-ac2c-913a0ad4552b_b09d86b523d14c579acb6c77cf3b7820_compact.jpg",
            "05a8ca1d-ea7e-458d-b0bb-5fd8be4916d5_63bf2aa35fa0452cbaf96e30f50f4bcb_compact.jpg",
            "3fba0a79-f8da-4279-be16-0c3f0aa5e9ba_10335689c16948d39782948409003668_compact.jpg",
            "72e2fca2-8f39-4584-b5b8-d51ffa8cd1bf_534625f50c3a404fb0e342ff3bdf7051_compact.jpg",
            "2be17400-ce0d-42b3-b6ee-ff241cee42f5_fd25f11685594feabd47cb404d5e4c8d_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 UNIVERSITY BLUE - 575441 134 - 36",
        "brand": "jordan",
        "type": "Jordan New",
        "sku": "BO30122328",
        "price_now": "2,000,000₫",
        "price_compare": "3,000,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>JORDAN 1 UNIVERSITY BLUE - 36</p><p>Tình trạng: NEW&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5979760068006_1e1e1645e81f9296f70fc165fb884986_5ae1e5fddc6743e385a3d8230f3441ce_grande.jpg",
            "71f7343c-dde2-40b7-9cbc-c91b45d3d933_bc13c11b6d86414798890ae3cb6b5dfe_compact.jpg",
            "beeddaab-9654-43d4-ba0e-c77171715f41_4c005a7286e047e18e5bdd6d89ff1163_compact.jpg",
            "5f8fec13-e840-4680-b5e5-2fd95da63a90_0ec308836aab4e24a64ec6fcb66680cc_compact.jpg",
            "6e5da5a6-bc09-49bb-8fbe-6ffc7584bec0_3e253fd6cba4458188be2f572eaa714e_compact.jpg",
            "2d428d0c-a75d-4bbe-846c-f72a16c23889_67dc29c449774356855f9097b0a7248a_compact.jpg",
            "b782a718-34d9-4278-b527-5488cd91bad3_3830c205a9d2416da934a32c5e120471_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 5 RETRO RAGING BULL RED - DD0587 600 - 43",
        "brand": "jordan",
        "type": "Jordan New",
        "sku": "BO05042421",
        "price_now": "3,800,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>JORDAN 5 RETRO RAGING BULL RED - DD0587 600 - 43</p><p>Tình trạng: LIKE NEW - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5603962545783_e934d7d51e73857533f023ec2e0728fd_f8d3658e97f94dc4b0561b53b7d470b8_grande.jpg",
            "406c4744-4a85-43f0-9847-96b0f963e593_20715073e11e4c09963d6d9d03867c93_compact.jpg",
            "99204695-c8b7-4f7c-9290-5cfcc88d63b7_990d1ae020634efc8a18231237847b35_compact.jpg",
            "5cf98b2b-3cf3-4fed-93fd-2a485518b738_ab55c3ce83ee4036a0d0c31445c8b2ed_compact.jpg",
            "37c84e1a-23cb-4a1e-82e3-ecdc03bb07fb_75ac3e0e5bbc40a4bbfe54b3cdc82473_compact.jpg",
            "4a9d4847-3d18-4d0e-af0b-ea7684c7c3cc_3c22fe67c6f44ce0b213cdcaaa049293_compact.jpg",
            "71a0475a-4377-49e8-ac48-5139c8e94cfd_9afb85cd6ff941ae872381b96cbb0a91_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 6 TRAVIS SCOTT BRITISH KHAKI - DH0690 200 - 37.5",
        "brand": "JORDAN",
        "type": "Jordan New",
        "sku": "BO11102430",
        "price_now": "4,000,000₫",
        "price_compare": "",
        "sizes": [
            "37.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 6 TRAVIS SCOTT BRITISH KHAKI - DH0690 200 - 37.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "5dc72e043a30836eda21_00b49ef578f04f9f8fafe773c43f92d9_grande.jpg",
            "c64b36bc-d1bd-43d6-b33f-7014a12ea1d8_f16e0b0b5386411f8f3fec00619415d5_compact.jpg",
            "fc996838-7336-4393-a8e3-979ee0b204ed_7a5fa71b8ec54627a6fd18a415746580_compact.jpg",
            "15ae9e75-2619-43c5-ac19-ae9662c6362c_5cba805e5d4541d49f020ec7c69ec8fe_compact.jpg",
            "b50d17bd-46eb-45cb-b60d-b417cdd045aa_f26d6cae078d40aaa34ee4e7743caa68_compact.jpg",
            "83c39b72-5504-4e8c-a0f2-192c309a7bba_e381b25047304d3587d25f6950bd4cad_compact.jpg",
            "9612ea22-3e74-422d-affd-0fd3ed848730_f47982e3e31f4350956583899760579f_compact.jpg"
        ]
    },
    {
        "name": "NIKE JORDAN 1 LOW SE SAIL RAITAN - FB7168 121 - 45",
        "brand": "Jordan",
        "type": "Jordan New",
        "sku": "BO01082420",
        "price_now": "3,500,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>NIKE JORDAN 1 LOW SE SAIL RAITAN - FB7168 121 - 45</p><p>Tình trạng: NEW - FULL BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5685718942510_ad76e76270ee6dc706671aad5ac325d5_8f12158d2f4e4bb4852b1b149b84cb62_grande.jpg",
            "10ff1d89-25a1-4115-a459-3c53c5a09e57_cd9e6d69656244a5bd83b2891a5c8c90_compact.jpg",
            "ca09ca64-7ef2-449a-94e9-5a396fb294ac_f8137e97c85845298bde25ae505521bf_compact.jpg",
            "74d03397-43a9-4e48-a9c8-15434cfbbadd_7ac14fa5046943abb4b576d5c6bdd5ef_compact.jpg",
            "da4523d3-9339-4b67-a8e0-73468a932bfd_a65b9e0755964f19a3a4d0dacfc8d123_compact.jpg",
            "20ba4ad0-6c4a-447a-8943-5f8dabd3f5ef_c10ecabafdbf495f8a290f8698080c03_compact.jpg",
            "74878e78-8a11-48fe-9b0e-5954db9b1b69_11195599d261474a897f3931b513b27b_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS ADIFOM SUPERSTAR BLACK WHITE - IG0241 - 38",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO01082402",
        "price_now": "1,400,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>ADIDAS ADIFOM SUPERSTAR BLACK WHITE - IG0241 - 38</p><p>Tình trạng: NEW - FULL&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5979775828790_ce9d78e2db2a3b8cc3ceef84c7e5cd2b_2ab2f5eff5e94a36a68e1949b67bc182_grande.jpg",
            "70db69ff-a481-4819-8c09-f69e80abcc97_b727fcb1c00a448b98e7e9177962cec4_compact.jpg",
            "55669ccf-f871-4424-a8fc-b86cd0057e55_ba601ed2dc674c3db62c10594f38e160_compact.jpg",
            "c94999c5-b8ce-4a3d-bfb1-2bae018404fd_57693a497cc04cf883120e8fa0f40045_compact.jpg",
            "3760caa2-c9ec-4fac-9d6f-7b0cfa0bccb9_cc2ec74a72f84dab991a591f30b9d811_compact.jpg",
            "61c1a218-3049-44d0-aa2c-12980b7d793a_3206d24edf1c4a6f8a38254725e87ecc_compact.jpg",
            "57d4b718-b0d9-4080-b21a-94bcb1287516_1a13c96a75f94bc2aa681e60759c0ac2_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS CAMPUS 00S BLACK WHITE - 38.5",
        "brand": "ADIDAS",
        "type": "CASUAL NEW",
        "sku": "BO06082434",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ADIDAS CAMPUS 00S BLACK WHITE - 38.5<div>Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5703323543667_259b36b25d2c357c9cc3e9275e1ae366_5d0331e555de49bbafb787042a50c182_grande.jpg",
            "261602e6-43a5-4ac2-b3f6-05f5d7100848_c7356489b34f4b8dbbf4df70fd0c4be9_compact.jpg",
            "42e00202-01b9-4309-8e89-3048e7f5768c_2def8e4484b746dd89e9647116eef64d_compact.jpg",
            "2d7cbb89-1576-46ad-af3d-c981ce1f90e8_83bbb020141b4dcfaf18cfc3dd986675_compact.jpg",
            "3cbdac60-d041-48bb-8ec9-8e03a421c853_60e481c807d946adad1883fc0fd65f45_compact.jpg",
            "74a43fc9-4d97-4a1f-8188-0a7b719a4c21_9934e6f52faa42b5a40b3d02d575e416_compact.jpg",
            "40b8c5a0-7e31-4fb1-9abf-a155124041c8_4ffe7cf1c7d741ccb8212ece103ef62a_compact.jpg",
            "f46b9441-833e-4022-b3c5-affe8ec4e1f3_5366639103714008b11de8983cb2e235_compact.jpg",
            "44293e5f-639f-46bb-8d74-741b48fa14a7_a862c2b7d73d476e8b1309245af16da7_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS FORUM LOW ROYAL BLUE - FY7974 - 38",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO06082431",
        "price_now": "999,000₫",
        "price_compare": "1,450,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ADIDAS FORUM LOW ROYAL BLUE - FY7974 - 38<div>Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 1&nbsp;tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5883024549039_753ecde3ceabb4888d10b1d0bfa19393_4fad5adfdb55491f9c6b026e3cd1ff72_grande.jpg",
            "2c5227a6-e78d-4e85-ba8a-a90069372c20_b2441507f84a40cab390b19922e26cf6_compact.jpg",
            "368df696-e8a9-4d49-94bf-2b5d2b59af41_f4ac50007055494194e12aee3c678643_compact.jpg",
            "f489e217-df29-4eda-888d-baed2825cbf4_94b626d4faa242b4abf1399cb9847f42_compact.jpg",
            "1df84275-4d93-4a0d-9548-708c0e39d181_815bb700edaa45ab8a0904a65e3c1cf7_compact.jpg",
            "aa57cf8c-da72-470e-a380-d888bed28c73_5ea774aefe84405ba7beda99109e92e9_compact.jpg",
            "a21db183-e10b-42bc-a468-534b72d2b7f1_9f23de7396be414eb4d957ddfa93f496_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS FORUM LOW WHITE GREY - IF2733 - 36.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "",
        "price_now": "999,000₫",
        "price_compare": "0₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>ADIDAS FORUM LOW WHITE GREY - IF2733 - 36.5</p><p>Tình trạng: NEW - FULL BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5979778031267_cfac3903970fb50e1db654ab85bf4b60_3b4ffad0c989411b96c7b9c958898a76_grande.jpg",
            "43ded808-4c36-4e19-82d2-3a1af04f03c1_d43adfeb88b745d2a4cb4956eb8cfd95_compact.jpg",
            "caaffae4-2b05-419a-bd63-cc2c1af0803f_2b83178527694a34b8b6057fef62fb75_compact.jpg",
            "2b191efb-05e7-4622-9ff3-e40b2f7c63aa_1fa56d49330b4768af6390f406516607_compact.jpg",
            "acc6d4d1-5e0f-4b5f-88f1-611e0e486c14_17e6ef4450d84d2e8c1a4d61b7ee8854_compact.jpg",
            "6c60d495-6f71-4498-a339-8bb285b11366_27e4e2629c574fcc98a6cd24327cfc0e_compact.jpg",
            "4940706a-42b3-4aff-b0ec-a0b821898724_eb5f15280c7c4603a5cbe15b5b842b0c_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS GAZELLE INDOOR CREAM WHITE - 38.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO06082409",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ADIDAS GAZELLE INDOOR CREAM WHITE - 38.5<div>Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5703321868287_1b37ec36ba388fd953d2b05d86c16386_911b09d1f852494e87f3ddc8b892c27d_grande.jpg",
            "71cded5a-34ea-4ebe-b641-c88550391a29_e1354bbd22b04672b07367dbcf2db3ad_compact.jpg",
            "603259b7-a6a5-4a0d-a56d-4c7ea237c847_8aa74070c92b431991dd296a406e6446_compact.jpg",
            "b4853bf8-0208-48ef-9080-9bd61bf7f0ca_f3762a08c4b94fa38bbdc0955b689a11_compact.jpg",
            "271b45fe-c995-451c-9fc0-9bbac9228ab3_16bbcb1b34df4128ad17d5515ccb97c2_compact.jpg",
            "8dfd9984-a265-4b93-af4c-d71d3a2048d9_e3ded9fff0e9427688fafeda0667c7ab_compact.jpg",
            "0bf05347-3480-4914-91fe-6df33339630d_ed4a2fc1362e43608187068915243a85_compact.jpg",
            "2742a344-cd69-4ce4-8263-9af4126961a3_4e389aebb18a49aa8d6f2eaf7b7bc22f_compact.jpg",
            "3cc3e320-896f-4d02-bea4-61c19245c964_ad558cc7fe2042848e36fd177c96c937_compact.jpg",
            "2eb9fae1-2a0e-4247-b1fa-797c2ff1eee1_87e1643f8b4b4a5aba5af9033d176bc7_compact.jpg",
            "ce696279-b593-472a-a784-d97057b651eb_5c7f81e257aa4f32abc8e48f678e4893_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS GAZELLE INDOOR CREAM WHITE - 38.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO01082409",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>ADIDAS GAZELLE INDOOR CREAM WHITE - 38.5</p><p>Tình trạng: NEW - NO&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5685719035555_c4a4ef215855e80002ece26adf8dbaf6_e5374955623b41928fdf960c44b43795_grande.jpg",
            "fc7b1a28-8fb1-4329-9b43-27e4c976f861_a29126abbfed4422ab7372ed70df2d90_compact.jpg",
            "6e06725f-61d1-48c7-b9c4-56407c15206b_0205a60814314c1f96b7818e525806f5_compact.jpg",
            "4de2eb7e-12a7-4b68-9b5b-bddbe3a7a257_0acea5255487490d99eee63da8d1d13f_compact.jpg",
            "9efbf848-ac67-437d-94c4-877dbc152845_e98c1b9059d448a6a28bdbd3fac148ca_compact.jpg",
            "e4a88bcd-317b-4cb1-a633-c7352cfe05dd_3e52d45665ae45c6a3880edd6a559dd7_compact.jpg",
            "cd785ffe-7cfa-4960-9306-9573ef5e694c_a314d1997ad04374bf983b8033f686b9_compact.jpg",
            "53d63f92-5308-44c5-988f-f2defdeaf8bc_ea7f8f631e3047a7a63d705645aa28f0_compact.jpg",
            "55604a4e-a93c-49e1-93d6-4a2d318f3dc1_65752c206e78428cb8f982a323d97472_compact.jpg",
            "24d4f34e-c0e5-40d0-8afe-6a89fc6f6ffd_e609641b6faa4e81af7819813f582349_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS SAMBA CORE BLACK - B75807 - 41",
        "brand": "ADIDAS",
        "type": "CASUAL NEW",
        "sku": "BO15012402",
        "price_now": "1,800,000₫",
        "price_compare": "2,490,000₫",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>ADIDAS SAMBA CORE BLACK - 41&nbsp;</p><p>Tình trạng: NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 6 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5784705179749_e282556c06e1fea774badf110145917f_6d896336bb554d0fa2a93c68a99fd73e_grande.jpg",
            "32a376d1-ec4a-449b-9f8f-1f5293517079_f5c3d2a7764f4625bd33a4f68ea4d5d5_compact.jpg",
            "08bcb186-cfad-49b2-8314-18d2cbd64e24_811819b5d15d4286a592be9a3ab1150d_compact.jpg",
            "db79e9ea-5805-46b6-bbc6-8b6ab5bf646f_7dd69676007d4fc2af5e3f826773e5aa_compact.jpg",
            "182c5f02-4e8b-4674-8408-3059af47a0d9_9304e3876d7e42f08205ce3c91f437ac_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS SAMBA INDOOR X LIONEL MESSI - ID3550 - 45",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO06082417",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ADIDAS SAMBA INDOOR X LIONEL MESSI - ID3550 - 45<div>Tình trạng:&nbsp; NEW-&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5703322410736_3a99f2293f175f1587240b9af29d96e1_84ef5d68089a4237bb6f352253c4dc85_grande.jpg",
            "92a7d9f2-a027-45ef-af5b-0d0c2fd35fe2_144620040b5f47c9a1e1f99a8f34adc1_compact.jpg",
            "f810a017-ee22-4716-bf02-fc7cdfc8a5d9_1e23bacda9c945cc957350ec4509907d_compact.jpg",
            "3eae7c02-85a9-40a6-8ee8-79531f2f2612_0ea46007b43c4b51950ddeb978d7e053_compact.jpg",
            "26314775-fc11-4dbf-b74d-bd48bf0a0d29_bf78e8ec66154d819df93309e067445d_compact.jpg",
            "cb470ea8-84d1-4801-8521-0d50e909197c_3cbcd89cb35548b1a584cbcb177dbe18_compact.jpg",
            "7bec19ca-6690-4784-b83f-ca8223eb04f0_461c013d6f1e4156b40bd4cf91290ce5_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS SAMBA SOLAR RED - IF6513 - 42.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO15012403",
        "price_now": "1,650,000₫",
        "price_compare": "2,490,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>ADIDAS SAMBA SOLAR RED - 42.5&nbsp;</p><p>Tình trạng: NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 1 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5979777563546_f0542404243cfc09a5d85c6eab4edd44_23b58a7e49d04a478127bd38b33a2ce7_grande.jpg",
            "f650c6cc-f4c7-45f8-aad3-5d22bd7b2f94_5cd49659c2a74611a35ea14f1e958d6d_compact.jpg",
            "01631d16-83a6-4134-8a17-734742fe57ad_bc70d0acd1a146b4bf459e87203c824d_compact.jpg",
            "2d96d10f-01c3-4d4a-a5f5-d8ce03717144_ce41876f825d4a3eacdbe20e88bbd867_compact.jpg",
            "4b9e08df-438f-4f1f-b527-53bef92149bd_8999732240834284add3a6c0b3af6bb1_compact.jpg"
        ]
    },
    {
        "name": "ADIDAS VL COURT LIFESTYLE - HQ1801 - 44",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO13072422",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>ADIDAS VL COURT LIFESTYLE - HQ1801 - 44</p><p>Tình trạng: NEW - FULL BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5838477327365_196d33f5d61952b106b07ad5dd645d6a_333f8b8ab44b48e7b60c8ae76177f22c_grande.jpg",
            "ab34eb37-bf74-4e0c-b8c9-d352aa1ae63b_59a397f75fae47f9b2a4a8e14cf1c1ed_compact.jpg",
            "18b6a017-b75c-4818-930b-0aaf3b544968_0a5b0be0d241480b8fbd40ea1726bb07_compact.jpg",
            "98f165b9-41d5-407e-ba68-b89f7d616ad0_ced8a602f3b04a81a25fa6f36ad38ce4_compact.jpg",
            "974696a3-1df0-43b4-bff7-ae11185874d4_5dff9994c0c04077bbf9b00dd5d38607_compact.jpg",
            "b106dafc-8eb5-4df5-89ab-4cdaf7f02ea4_335bba89212d4237a27842ef3e17f9c1_compact.jpg",
            "49a97702-13fb-4f2a-b5f7-bad7a2cd4eef_15f5d0081fec444bad6f3f7b72acb9f8_compact.jpg"
        ]
    },
    {
        "name": "ADIFOM SUPERSTAR BLACK - HQ8752 - 44.5",
        "brand": "ADIDAS",
        "type": "CASUAL NEW",
        "sku": "",
        "price_now": "1,400,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">ADIFOM SUPERSTAR BLACK - HQ8752 - 44.5</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; LIKE NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "9a5dccd9231b8745de0a_eea0ce55edb443a8ae0bb5fcbed715cd_grande.jpg",
            "33bd07f5-abff-4950-8ccb-5a000cbe19dd_edee1e0d07a340879794c67f515f2a3a_compact.jpg",
            "ae684b0f-385f-418d-8d75-07afc22b116b_d83428eeaeb14373ae507b4aa1a2e10d_compact.jpg",
            "489a8102-a042-4ba2-b89a-71a6f8f96b5d_d33299861c684300914de2e7bbd803ce_compact.jpg",
            "a1024c63-b455-44b7-91e6-aa37cbf15779_05451bd7c8e4485a98126aefa971a75a_compact.jpg",
            "e5ea5c81-6879-4324-a357-ab070b7d7718_8b6a00480cd4433f8dac2bee6cb51173_compact.jpg",
            "866cfdb4-d970-4c85-aa8c-3cef4fbc0a9a_304d7d577c024a78a420508a12621d62_compact.jpg"
        ]
    },
    {
        "name": "ADIZERO CYBERSONIC TENNIS - IF0435 - 45",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO24092401",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ADIZERO CYBERSONIC TENNIS - IF0435 - 45<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "4b5d88ddec53550d0c42_6350b85021d345e5ab32471423c9ce87_grande.jpg",
            "3abfe0eb-b6f6-4d96-bb75-22809f37cddb_1fdb1ad94dcd471fac769145c4c55c18_compact.jpg",
            "0edb2fe2-69d2-4071-919d-ec96fd22d460_8bd46f5398e444b899d932c83d826071_compact.jpg",
            "6c843b84-0658-41a5-95e3-a2d0828a2216_8afc0aaf69644363a134363275826ff0_compact.jpg",
            "7effb525-b5f9-4fc4-9873-f03b688d93c9_e09e5ed042e5442d8a92c59980d232a7_compact.jpg",
            "a15560ee-1f29-432e-90be-4d30fbebacf5_3c8d8f8d87144301be3319e496ebf697_compact.jpg",
            "d77007e7-557f-4169-b36c-9b9dd488755c_840a8fbd04374e9c93815865f3afdaff_compact.jpg"
        ]
    },
    {
        "name": "AIR MAX 1 LV8 OBSIDIAN - DH4059 100 - 41",
        "brand": "NIKE",
        "type": "Casual New",
        "sku": "BO18102409",
        "price_now": "2,650,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:16px\">AIR MAX 1 LV8 OBSIDIAN - DH4059 100 - 41</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "b5d4e187460bff55a61a_64859102d22b45799ee054200df69f5a_grande.jpg",
            "887a7971-7520-482b-a5a4-aff0c89fbf5f_692bf18c711644deb95d18a0b2b5f129_compact.jpg",
            "f47a272b-5803-48a8-91cb-45bb113ce9e9_df4dc96acd8d4de2bcee0a000e81f0aa_compact.jpg",
            "4aaafae5-a3c9-47c7-abde-b0ad474962ec_7da4354aff734327932caa52662bbb1d_compact.jpg",
            "107dd353-bf1b-4ce8-bac3-cdf35a1f6517_2f19eeccb9ae49a88c3c9bc3e10166db_compact.jpg",
            "fc0682bc-a09f-474d-a2a9-f790e0662aa5_584bcd78625640ada9c0a7328bd147ed_compact.jpg",
            "c38cb36b-f063-49d9-a107-a2ab20ab91f8_2d7dfa2cc52a4aa9b8b4934ef74c16cc_compact.jpg"
        ]
    },
    {
        "name": "AIR SPAN 2 LASER BLUE - AH8047 001 - 41",
        "brand": "NIKE",
        "type": "Casual New",
        "sku": "BO18102406",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>AIR SPAN 2 LASER BLUE - AH8047 001 - 41<br>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "6864707616f8afa6f6e9_f79612d392e143d3aba1cd801fa53695_grande.jpg",
            "7b75c192-3d2e-494d-a06a-04eae6b3dde2_68572638c5db4792a8bf407ce2de0926_compact.jpg",
            "bbc61f88-c48b-4810-8069-a89cef6d0cf9_bbb3e56db1844cde98bcc9c198301937_compact.jpg",
            "9a497264-582b-4bcb-9b77-7b3f5c848446_065f8d2900b540ef91b3247e004d2f16_compact.jpg",
            "7be8b35c-32fc-42f2-b950-5a8fff94f94f_f9bceba576704714abfcfe59c5810165_compact.jpg",
            "d28dd751-0737-4bb5-94a9-0681b41e1591_b36c2f6bc7fa45e58a74b539d1e22594_compact.jpg",
            "9bab8ba3-abe4-4508-8e17-8dfda8fb4552_c3fedaf9c3eb47abbaa72e323a2943aa_compact.jpg",
            "10eb55db-5741-4035-9ed6-70392e77c8fc_cf53f94af46c4f8dab264bae3cc17b79_compact.jpg"
        ]
    },
    {
        "name": "ASICS GEL SPOTLYTE AMOR SUPER AURUM - 1203A396 - 40",
        "brand": "Asics",
        "type": "Casual New",
        "sku": "BO25092403",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">ASICS GEL SPOTLYTE AMOR SUPER AURUM - 1203A396 - 40</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "99b867e9d02b76752f3a_a4f7f2049e654d1da86f677fbb02f94d_grande.jpg",
            "fe94246e-89c7-44fd-924e-604d442b4610_4195ef1457044241b2961f660b40bbe2_compact.jpg",
            "e143c45a-80af-4d89-97c6-9af0c0944bca_271c76537f22403595430116213a925e_compact.jpg",
            "46db5b21-5e35-4dab-85b4-1bb06095af52_d6cea63fd2054e578e337ea62599b8ae_compact.jpg",
            "c8464426-13b3-438f-9213-e43d296bd6fc_d7a1ab22f2f1476aa8007a4ba12b79c6_compact.jpg",
            "dc67f8d0-3c86-4814-ad23-2d16be11db62_dc396c9da7314bbb866eae24cd2a06db_compact.jpg",
            "f3bafdbc-2ab0-4c91-969b-de9dd6845294_73a3ba82a36748f496f40c033aff0c4b_compact.jpg"
        ]
    },
    {
        "name": "BBC X PHARRELL X NMD RUNNING DOG - GZ1664 - 42.5",
        "brand": "ADIDAS",
        "type": "CASUAL NEW",
        "sku": "BO16082428",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">BBC X PHARRELL X NMD RUNNING DOG - GZ1664 - 42.5</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "e5dcd1673ea59afbc3b4_146af800947345e5b2bc91c2d9c56df5_grande.jpg",
            "add52c2e-facc-4bdd-a100-0ae5b7b64ea9_f07cc7ae35624903b841f75388bf8518_compact.jpg",
            "9c3fa8c2-16cd-4681-befe-48d6ea91232b_54e9c1e9d32a4f05a5dc9953f5a1bd7e_compact.jpg",
            "9e8132a8-6766-4dde-ac25-0e881fee19ce_978b3c97196b49f995a61d849a27158b_compact.jpg",
            "144bd87b-4f8b-44a3-828e-ded046d8e01c_e724973f41a74b6a9360adaff1d9cd22_compact.jpg",
            "0aaf209b-f52b-477b-ae37-0799c6dea6d0_0cf114d9560440138b072fb182fe8716_compact.jpg",
            "f06f602a-4f29-4cd1-84f5-8464be54ca36_2b27f2a806a14b479e9fb226d9f4fd6f_compact.jpg"
        ]
    },
    {
        "name": "BLAZER LOW 77 VINTAGE - DA6364 001 - 42",
        "brand": "NIKE",
        "type": "CASUAL NEW",
        "sku": "BO23082408",
        "price_now": "1,400,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\"><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></span><hr><span style=\"font-size:15px\">BLAZER LOW 77 VINTAGE - DA6364 001 - 42</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span></div>\n\t\t\t",
        "images": [
            "a55384f3996d3d33647c_408fe771eacd4b90af0c5af75621cf52_grande.jpg",
            "e3a6064f-e55b-4d9c-aaa5-13224dffc315_1077504daed64c05b2615ca5e88decfb_compact.jpg",
            "61df01fb-c32d-49a2-948e-21483cadb6c5_199bf54f0371444fa8b1251e66cd2b18_compact.jpg",
            "baf2fab2-1fe6-475f-a6c5-a0080c5912f2_ac6fe6775f7c4ecfa28389aeb746ab9b_compact.jpg",
            "0c86fa2a-4c53-4a57-b7e3-22dc762aac18_a6748a7fe3f946068d94f9c4215eb3a0_compact.jpg",
            "08ff1df0-c061-482b-8c4f-83f1db17e59d_62a480d2b0704e6cbf05de430005ed97_compact.jpg",
            "02a5dad5-e608-4c81-a658-98d27e12c998_d079591ec7914f3aa0f16ac7e8c21abb_compact.jpg",
            "987599b1-79fa-4d70-99cd-482bde926c2a_f8ea0d20ef8345429f01bfa6fee3b626_compact.jpg",
            "b542b877-1320-470c-a6f3-a03226125486_93b0cbac2fa741089e720f77eb2fb544_compact.jpg"
        ]
    },
    {
        "name": "BLAZER MID 77 LIGHT BONE - DQ7673 001 - 42",
        "brand": "NIKE",
        "type": "Casual New",
        "sku": "",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>BLAZER MID 77 LIGHT BONE - DQ7673 001 - 42</p><p>Tình trạng:&nbsp; NEW&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "cc93c081f1605e3e0771_e2b9611ed6e54e649e2c06c1807d193b_grande.jpg",
            "cc93c081f1605e3e0771_b90eb3d749ce4f9aa9004836abb168e4_compact.jpg",
            "7ecf5e7f-86ad-4cfb-bd0b-ca35f3f96639_96415734772944b69b7a86b98bddb31f_compact.jpg"
        ]
    },
    {
        "name": "CAMPUS 00S BLACK WHITE GUM - HQ8708 - 36.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO26072423",
        "price_now": "1,450,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><p>----------------------<span style=\"font-size: 1em;\">----------------</span><span style=\"font-size: 1em;\">----------------</span><span style=\"font-size: 1em;\">---------------</span></p><p>CAMPUS 00S BLACK WHITE GUM - HQ8708 - 36.5</p><p>&nbsp;Tình trạng: NEW - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024334948_218d5a56f474b5d97d038996fa8096c0_7d3b3d23db574beda97d776bbba7b8d3_grande.jpg",
            "4078bf19-ec4a-4fba-b872-c1d80e6daf2f_6428e596162242ccafe5c3ddda4b4688_compact.jpg",
            "e39ed27d-77ee-4a92-883a-b477c257cc0b_2d827b943b84486d830feb1f231ab828_compact.jpg",
            "7d48de9d-f115-4aa7-b151-78469fb464e9_b096dc42c64440868d511161253d0148_compact.jpg",
            "259a260d-868c-49a1-a689-61d40980041c_593cc1d9e5584fc583a9dc844bc1c6f2_compact.jpg",
            "e004685a-1403-4558-ba78-a3f97ca8d0b8_a345057fc3a8452ab2ab95bceadddbc1_compact.jpg",
            "c1d78444-06ba-47e5-9973-0862dc593c03_b77ee48b0a22443d9b170bac45a285f7_compact.jpg"
        ]
    },
    {
        "name": "CAMPUS 00S WHITE BLACK - IF8761 - 45",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO18102404",
        "price_now": "1,950,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:16px\">CAMPUS 00S WHITE BLACK - IF8761 - 45</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "4d824393e41f5d41040e_c01575705f6c4293b7ba34999f4f0715_grande.jpg",
            "cce62396-ceba-4996-80b6-db10912c0381_2d1bb90a0a304a3fb1bde7e04968515e_compact.jpg",
            "8a69d5b0-ddfe-40cb-9282-3b183216c4bd_eaf5c3be01264913b36c4962bf2914a8_compact.jpg",
            "166527eb-a990-4988-8234-423db8d04f1b_2629b4be4a704b5ab581db05a5e60336_compact.jpg",
            "ae3a0eeb-4f78-4d6e-80fc-120c42a03953_48d5f43a8a0f45d183d6a616c324bba8_compact.jpg",
            "05dd31eb-948e-4e1b-b615-42704477aff2_6d2c6331567d427388d1404d765f7052_compact.jpg",
            "69275e35-fcb2-4dc2-878c-96cc289f6899_e938a5679fe94eea926f169aa536b3b0_compact.jpg"
        ]
    },
    {
        "name": "CAT & SOFA HEADPHONE BLACK - 38",
        "brand": "Cat&Sofa",
        "type": "CASUAL NEW",
        "sku": "",
        "price_now": "800,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CAT &amp; SOFA HEADPHONE BLACK - 38<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "997c1f057301d45f8d10_66fa30b44b61414e8bf2f0a92d35b508_grande.jpg",
            "60a4f8c0-339e-4436-8e42-23ae2907bd07_8651c58da8d14bd89e2b15c742ac8dc5_compact.jpg",
            "e6e1bc9d-cbe0-46b7-a539-019cfd85f0e1_357e736dd68548b8846b4c98929fcfec_compact.jpg",
            "99ab3528-fd38-47f2-b4bb-90b7da933af1_e336c1ccc51548b6a821d245fe77b920_compact.jpg",
            "001c1dbb-097e-4d47-85e7-30f4fe905236_5607e7dbc5984b06a362c1e45c5db197_compact.jpg",
            "c58d15e6-fd21-4669-8b6d-3621e560dc7b_10d73581d85f418da136c5a2b05bd934_compact.jpg",
            "9e58e607-a56c-467b-a158-ad0ec784588a_1b540d04430549acbd5efb09f68e27f6_compact.jpg",
            "510058a4-b514-4dc0-b229-1d6a4080d641_b12c09d82ab74689a53d5ee3fa41fad3_compact.jpg"
        ]
    },
    {
        "name": "CENTENNIAL 85 LOW WHITE GREEN - 36.5",
        "brand": "Adidas",
        "type": "Casual New",
        "sku": "",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>CENTENNIAL 85 LOW WHITE GREEN - 36.5</p><p>Tình trạng: NEW&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "ae26e204cf5b63053a4a_7cffcf7473e34d5bb6d977bc8f6259db_grande.jpg",
            "cd13d6bc71e5ddbb84f4_b97ec06c9796484e894f83ae8e4be099_compact.jpg",
            "dc5bccf46badc7f39ebc_280d72bfeae24753b6d0095d00cb04b4_compact.jpg",
            "014377e3d0ba7ce425ab_c7ec29d5d29142faa80412bc22c964bd_compact.jpg",
            "f3bd4f1fe84644181d57_f154f98dcfbc44c89e18fd009433637e_compact.jpg",
            "d36746c5e19c4dc2148d_f3cb7f714c8645db8dda368e3cfc9755_compact.jpg",
            "07979a333d6a9134c87b_efdad235c5eb47d287b37cbd797c64c5_compact.jpg"
        ]
    },
    {
        "name": "CHAMPION SNEAKER - 36",
        "brand": "CHAMPION",
        "type": "Casual New",
        "sku": "BO13092405",
        "price_now": "1,500,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><div><span style=\"font-size: 1em;\">CHAMPION SNEAKER</span></div><div>Tình trạng:&nbsp; NEW &nbsp;-&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5979777969957_88b41001c46297e639883897e5a69924_931498ce4ea64719a8f05b32f8e7c1ee_grande.jpg",
            "b974bf3c-8cc5-452c-b4d6-5e9e772070d5_524a58d1739c413b9a13f8bbfb5d65e7_compact.jpg",
            "4baeac7b-79c6-4d33-b13a-c62834b69d5c_c132148b21234ad380063ec16116aa32_compact.jpg",
            "009d719c-4be1-43d1-8722-71d7f1bda065_36c9084c196543d080e84fb200ca2cdb_compact.jpg",
            "1a9b8365-3b8c-4e58-97fe-3fbccac74ca1_b1c572c741bb4ce2a9fd4860b1efe882_compact.jpg",
            "2848835d-2ef5-4ddc-8671-e94fd15ff846_131b06d9d9174cf3afd1c693d73ab2af_compact.jpg",
            "ef2741d8-12a6-4c1e-a561-6bec4210f136_55fd2f086a1648539a6710caccf03219_compact.jpg"
        ]
    },
    {
        "name": "CONVS RUN STAR HIKE - 42",
        "brand": "Converse",
        "type": "Casual New",
        "sku": "BO24022418",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>CONVS RUN STAR HIKE - 42</p><p>Tình trạng: LIKE NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "831a57d6b61e1b40420f_c3d86552cb194c9d84f2e9594222bf89_grande.jpg",
            "01c02ac4-e55a-4aff-8ef0-09ed5ed31f02_761036a1cd894284a6f5857032b4b83d_compact.jpg",
            "2f3c437c-b590-42ba-9cf2-37c92313d74b_861800853c5d4474adb9e0e92b32d9aa_compact.jpg",
            "c9858abc-2025-4338-9b21-9f92fa5003e0_94da76a1254645caad4b2a105ec508e0_compact.jpg",
            "7ef36d81-0b9f-4386-9ca7-e44e0ffc5194_03185a3468e44c49b063bd4407200eac_compact.jpg",
            "5076575c-2d1e-4756-bf3c-840604e2906f_ed0ffb2c24914963aaeaa5434cd3c142_compact.jpg",
            "f7688ccb-65c3-4596-9a56-836f8af78d0a_d13e117089c9464b8585391871013cc8_compact.jpg"
        ]
    },
    {
        "name": "COURT VISION LOW WHITE RED GOLD - DH3158 106 - 39",
        "brand": "NIKE",
        "type": "CASUAL NEW",
        "sku": "BO30082406",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">COURT VISION LOW WHITE RED GOLD - DH3158 106 - 39</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "700036d453d0f48eadc1_6babff09ce534f51981d4ff3680f5a01_grande.jpg",
            "4fbce42c-0796-4f91-8acc-59ad4f8c3a11_57318a8581474ce5a2426ad6af5117d2_compact.jpg",
            "561c83bc-5bdf-41b2-8c1f-81b9bcee7bee_6cef9daa1b264a35b55ff8b46815fd0a_compact.jpg",
            "d9309e14-ab5c-4bc0-ad25-a890f2d78913_bd6506dc212b48b3a0264d94bec00fe5_compact.jpg",
            "a89e8a18-24d3-481a-9f6e-0bfaada14684_b67afe56f68947bdb1642b9d6ad2c146_compact.jpg",
            "bbcadb5c-e327-4942-9aeb-0829edba5cad_8810a49d27e04ba991f97588879eb412_compact.jpg",
            "7d4d8a89-b3d5-4648-bb55-5e3e8b3ec2b7_f2ece78cd7e8456aad6121809cf11833_compact.jpg"
        ]
    },
    {
        "name": "COURT VISION NEXT NATURE - HM9862 001 - 40.5",
        "brand": "NIKE",
        "type": "Casual New",
        "sku": "",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">COURT VISION NEXT NATURE - HM9862 001 - 40.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "a26770a46490ddce8481_4e5f4e78381644a0b1e8510ae5d14e06_grande.jpg",
            "be9bd594-fd8d-4483-9f8f-111368bf3f0f_2ced731a285e4381bfaa9221aa882005_compact.jpg",
            "e2667e47-9043-45ef-83ef-9a81181f433f_fee9bf411e05461ba991ace13b102a3c_compact.jpg",
            "66b2a3cb-4889-4e61-a45f-90fa97365738_f6cc7c1c5ecd4b46b3782728947fac56_compact.jpg",
            "7b94b13d-9f03-4d3b-aa8b-e4a7069407e5_4333111a169a4b0cae93dfd087fb3a87_compact.jpg"
        ]
    },
    {
        "name": "COURTBLOCK WHITE - IG6862 - 40.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO03102403-2",
        "price_now": "850,000₫",
        "price_compare": "1,050,000₫",
        "sizes": [
            "40",
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">COURT BLOCK WHITE - IG6862</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span><br><span style=\"font-size:18px\"><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 1&nbsp; tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979777255826_25467ac541d5c9815030c3a6c867c711_07a3d26c960943f99ce1013122db0a38_grande.jpg"
        ]
    },
    {
        "name": "D.O.N. ISSUE - HR1783 - 44.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO22032426",
        "price_now": "1,400,000₫",
        "price_compare": "1,800,000₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>D.O.N. ISSUE - 44.5</p><p>Tình trạng: NEW&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời&nbsp;</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5905899871436_f042ef7acaeeeffebfccd27a12b7c239_adaeb5dbd1ef4f52a29d8110dcc6433b_grande.jpg",
            "bc675071-c203-4254-a9a7-9c5271c6c1ad_c9a12c394f3f47f39fa3ec1cf01d62ca_compact.jpg",
            "6665094a-a305-48e5-ad7d-e67144451347_fcf2d9cd9f0146df9e827c14db62929a_compact.jpg",
            "61057e3a-ee7e-488c-a82b-97e88a3ebb5d_339b925283bf41658c58b79f2141ffb5_compact.jpg",
            "b6538c44-a54b-4689-8805-d042ba68bae8_a8d2772d32a64df9b389190817204272_compact.jpg",
            "0d1f6ede-0ce5-47cb-97f3-d733306d29e8_f64b80ec62b945b3a32271db872d6552_compact.jpg",
            "fc33b507-87f9-4dfd-a362-47af35142df3_eb12c0b98e004e43bba4e6e892e272a7_compact.jpg"
        ]
    },
    {
        "name": "DISNEY KERMIT STAN SMITH - GX9513 - 44.5",
        "brand": "ADIDAS",
        "type": "Casual New",
        "sku": "BO27102445",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">DISNEY KERMIT STAN SMITH - GX9513 - 44.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "23637c2e33398b67d228_76bfa6bc710f4a93b6fed743be3ab377_grande.jpg",
            "290db022-1a9f-4b57-b108-db585a7d9387_aae1262c4f2344bf8fa7547886ba381c_compact.jpg",
            "7e36c74e-5f2a-4dfb-b1e2-30f518e1d22a_7c0689330fd4461286dd5a471cd44787_compact.jpg",
            "9c0bd34f-a763-4e30-8331-bc6e01c66cbd_7b8b97ea571b4dc6ac60113efa826b15_compact.jpg",
            "9292548d-4183-413c-b14f-6390e03c9c86_3c717a5b4eda44d2b63cfe48e490a0db_compact.jpg",
            "779e2209-4599-4875-b562-5df31d243159_c1d99fc444c648029912cec6d1c56966_compact.jpg",
            "305175bb-0353-4a63-97b3-9820eeb1f97e_81e72886474444cf8a8ecbc29004a375_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW PANDA - DD1391 100 - 44.5",
        "brand": "NIKE",
        "type": "Casual New",
        "sku": "BO08102401",
        "price_now": "2,500,000₫",
        "price_compare": "2,850,000₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">DUNK LOW PANDA - DD1391 100 - 44.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5905899817262_b2a51789128a5ea77f873db2197bc554_594e218183d84676b6f48bf09eae6dea_grande.jpg"
        ]
    },
    {
        "name": "ADIFOM SUPERSTAR BLACK WHITE - HQ8752 - 36.5",
        "brand": "Adidas",
        "type": "hypebeast new",
        "sku": "BO09122317",
        "price_now": "1,400,000₫",
        "price_compare": "2,200,000₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>ADIFOM SUPERSTAR BLACK WHITE - HQ8752 - 36.5</p><p>Tình trạng: NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>&nbsp;</p>\n\t\t\t",
        "images": [
            "z5784705807047_b8f852c72492fc19c62317cf5b0bed9e_f100f7fc6ffa42829511809e350b3552_grande.jpg",
            "0ce546b8-f560-46af-89d8-f3e1a49d8eec_d37e6c7109f340368fa6631b65bfba77_compact.jpg",
            "d619c174-b6bf-4242-96b9-0f2f94ead211_6e8a36b642f441099ed7a6b12c95cb01_compact.jpg",
            "5fa2d088-9665-447d-b992-5fb9b7ef8abd_66af18b35070484a9820f8e4a04b99e1_compact.jpg",
            "944d518e-6a4c-4843-bbf5-3da9d4d57f79_1b76df140fda47f18ab217811aa83101_compact.jpg",
            "d66df54a-760e-46ff-823e-5e4bbcc8844d_e0ddbc2722384371bd6d9034ff72bd34_compact.jpg",
            "13a44cdc-55dd-4ffa-851d-80a64b315c1f_da253542c35245f1804ea35680edb6b0_compact.jpg"
        ]
    },
    {
        "name": "ALEXANDER WANG SNEAKER - 30123N026 - 41",
        "brand": "ALEXANDER WANG",
        "type": "hypebeast new",
        "sku": "",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>ALEXANDER WANG SNEAKER - 30123N026 - 41<p>Tình trạng: USED&nbsp; -&nbsp; NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "b22f1d4389e42aba73f5_1e83718511a4403192d106dfbde2a4c6_grande.jpg",
            "ecf507a5-0c9b-40f3-b495-83372c214d5e_0c23fbf02a9547589586769441df5908_compact.jpg",
            "75f264ee-713d-49d7-af80-bb5f22751789_8347843a3bea4392acdfaa3c56306646_compact.jpg",
            "ceca436a-7365-40ef-a006-e3b776677933_a10db0a50f90480391aa2bb9d8197195_compact.jpg",
            "d50916a6-7051-47b5-b063-12f7702a0db3_9768192799b3459caf8605736d70549d_compact.jpg",
            "7e1a9949-d3e2-4a0e-ade9-35f0e33b2fd2_4a3cb66360b14731990e30706b14a5e1_compact.jpg",
            "0a929e08-96c3-4782-b912-83c94df8bdea_e5c0f8c36426449884f4766a8491798c_compact.jpg"
        ]
    },
    {
        "name": "BLAZER SACAI SNOW BEACH - BV0072 700 - 44.5",
        "brand": "NIKE",
        "type": "hypebeast new",
        "sku": "",
        "price_now": "3,000,000₫",
        "price_compare": "0₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>BLAZER SACAI SNOW BEACH - BV0072 700 - 44.5</p><p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5784706195722_9632fc87f0f2d059cf896262d0646929_be11a17dd1b8468b8d1e8121eacfa319_grande.jpg",
            "1e148c57-0cb9-4ead-b50d-32dff48b6950_24a830c5f53b493b89622a763a58ef0f_compact.jpg",
            "11c2409e-fbaf-4b53-a384-a41066269473_7a151f4afbb94634bac391feb1ddc0f6_compact.jpg",
            "05c5efbf-5768-40b7-b0f6-7b06ab020545_81900a2652bd4678906bf5df985c9f36_compact.jpg",
            "6e43c61a-f27b-492a-b583-d1c2df156e8a_ae001512e3cb4799960eb664ebed2a6f_compact.jpg",
            "9b440237-6073-4af2-b6e1-deff5bc9b470_6f3ac66342964771a860805b5070e9bd_compact.jpg",
            "b751b1cd-cdb7-4896-a794-e1ad3f4cde28_79c8450621ab48b7a0c865484007b71f_compact.jpg",
            "0e9d9b5e-30aa-41bc-93a7-064d5e3ab4f3_2b3439ba6fe843f9b3a14e542f82a1fd_compact.jpg",
            "0d737d8b-f482-49c3-8627-ddcbcb6f4d9f_9205cf2f34454dd8bebbd34c4bfab75d_compact.jpg",
            "c9387dec-28c7-4ad1-9614-0b6be910142e_e9a5a37330204f53aaa4d6a3d1af3365_compact.jpg",
            "830cff32-fcb6-4ae0-9b67-2d5c726f4e85_6710f821d32b43ceb7ec6f64d6773697_compact.jpg"
        ]
    },
    {
        "name": "CLOT X GAZELLE HALO IVORY - IH3144 - 38",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO20092407",
        "price_now": "3,000,000₫",
        "price_compare": "3,800,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">CLOT X GAZELLE HALO IVORY - IH3144 - 38</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979777380360_814d1fb751221f8e8984bea00df45fc4_5c3e5b5ea9674a8aada9c5141cb0f273_grande.jpg",
            "e5f3f984-9e9e-4c53-833c-f172225c1072_f577282674124fa4a69c2a5477c26471_compact.jpg",
            "bfac550a-1e65-4bca-8e49-3f81bf249d7e_02b5b77719a04f2dbf7f56b4a6737dce_compact.jpg",
            "ca4f20b0-2017-4046-9ed2-1d88c46aca7b_13da1ad28c1f4e87867db3e29ec67d73_compact.jpg",
            "16135d61-b97c-430a-aa66-d18a0558eeeb_96b69ecb0e8d47e4b5ce030594dd8499_compact.jpg",
            "1ce3e1b4-c6ae-4eac-ab15-45f4918b92e9_da20a8fc379d480e8d6910a9fc726ddc_compact.jpg",
            "f1e93181-34cd-4563-a585-c4a45b8596fb_00c97226aa5d472a8386798f15f5011b_compact.jpg"
        ]
    },
    {
        "name": "GUCCI SLIDE BLACK GOLD - 519996 -  35",
        "brand": "Gucci",
        "type": "hypebeast new",
        "sku": "BO12072406",
        "price_now": "1,800,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "35"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>GUCCI SLIDE BLACK GOLD - 519996- &nbsp;35<p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883025229179_9289999d13f582958550e71ea87c1824_c3493ea2927e45ad8ca396ec1db644dc_grande.jpg",
            "bdb55e99-1369-42e1-8bd2-d5ea05d8cbc6_b7ab84d17f444a15ad3b0495ba96625d_compact.jpg",
            "27e2f76f-8df1-4143-8fbf-96ca8093b97e_2959c177686947c3be1437caf06ebf0f_compact.jpg",
            "61afe59f-80df-47e0-ae71-493c5a619ecb_4a69f74bc1dd465d8ed9582fa299be3b_compact.jpg",
            "afcd7191-ae16-45e7-9f3f-00d8b1ac8a0b_109a16d08f7b45e19d342537c02b2be8_compact.jpg",
            "7e4ad683-51fc-4513-85b0-78c39ed75244_1ec6615f0e1c477fb9b76763d4d3ca22_compact.jpg",
            "a648b7f2-f649-47c3-9ff8-d2b28f682b9e_73ec129826f64e8591a2c95e2a2802b8_compact.jpg"
        ]
    },
    {
        "name": "MMY HANK OG - A05FW702 - 42",
        "brand": "MIHARA YASUHIRO",
        "type": "hypebeast new",
        "sku": "",
        "price_now": "5,000,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">MMY HANK OG - A05FW702 - 42</span><div><span style=\"font-size:15px\">Tình trạng: LIKE NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "29576dfeda3c7c62252d_4cb307df95b44915a1e04cbef5503341_grande.jpg",
            "149780be-d5d5-4349-b920-2fe9f2799771_21d3fa1df5404a11aceb09583d0ca027_compact.jpg",
            "8b2a1b88-357a-4124-8809-267f251ff71b_7482e9b6afc54811b63bf20d353859bf_compact.jpg",
            "befba6b2-f0c7-4592-b431-a837fae2ff4f_b71d8f835683433f8d7d138501a4545c_compact.jpg",
            "0418d749-f012-4c67-b297-3f916ffa8de8_a1c147f6ad404596b23fe8c094340822_compact.jpg",
            "218e9552-46f0-45c8-853d-cb6efcc5d133_5547837b1e1c451faa2c6f971a758072_compact.jpg",
            "6884fb2d-1089-436d-8384-3ebf413c63a5_e2a8e02982a24f648345583377e44443_compact.jpg",
            "28d2f167-1b80-4a1d-80d7-3fa7aa4f5204_846f161b0319473ca4d98b22d81d3ef1_compact.jpg",
            "6acde4d4-234b-492f-9226-64eaf4376bb5_0f3bbee6c5f9476384f38407fe4f561f_compact.jpg",
            "8c818ca7-bb92-4b99-9b97-73b51dd27f87_47be7c9bfeaa4eaa9e0efe519dfee72d_compact.jpg",
            "5ef4530a-83d3-468e-828f-757d892f0130_85ce2962a5564a84bfa9a83a43491315_compact.jpg",
            "b9a8b24a-7869-43ac-8764-75df4e2a16e4_45049c8f20ae4b0cb06c59fb685f943f_compact.jpg",
            "4531704f-b471-4e8b-b5e4-c2250d0cee3b_4599c1eea41b4114b956f1d26660c62a_compact.jpg",
            "4b04c436-e781-47a1-be9f-b9eab541567c_c1ced6dbae5d4dd1bc7f3145edd25fd0_compact.jpg",
            "b4a5bd34-1ea8-4951-ad91-9c45839c962e_3dea8c0a81dc4d389d648d0479c34557_compact.jpg"
        ]
    },
    {
        "name": "NIKE BLAZER OW UNIVERSITY RED - DH7863 100 - 40",
        "brand": "NIKE",
        "type": "hypebeast new",
        "sku": "BO06082416",
        "price_now": "2,800,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>NIKE BLAZER OW UNIVERSITY RED - DH7863 100 - 40<div>Tình trạng:&nbsp; NEW-&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5703322351443_bea5993fac23446e19c161fbf67fa9b3_d5dfc0a8f6924a18a0ed926ef8242018_grande.jpg",
            "94cec9e9-f3a6-477a-a995-c224f23dd4e0_89d073bfe29a46c29169cad5d9195d0b_compact.jpg",
            "557fc7bf-eea2-4f93-a7eb-8442ee3ecffb_8090ddccd39842dc831e1a822642358e_compact.jpg",
            "7ddb6d68-41d9-46ec-b726-1a3424d93a1e_d24e3390cba94a76950b00dbe88af97d_compact.jpg",
            "78fce2a7-6a1d-4908-926f-78939ac3fd0f_b140935f7fb943d2bdb7f41414964eae_compact.jpg",
            "4700dd2d-64b6-4cc5-9725-5dbbc3313901_ed022533700d4720bd44b9d0017ad66e_compact.jpg",
            "fd03d3c6-cd15-4ed1-86b4-897de355cd9b_b505169a4193488bbfe0219eabec9a0e_compact.jpg",
            "5c69af92-90cc-420a-b5b7-69173e0af62e_4915b0a635be4a5fb52c76102374a7d3_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 350 V2 BUTTER - F36980 - 48",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO01072308",
        "price_now": "2,450,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "48"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>--------------------------------------------------------------</p><p>YEEZY 350 V2 BUTTER - 48</p><p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 1&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5883025688633_a6bd8a295fcd2ef709f0aa673dd68e31_34d90beb6c294b4992d830cf77f0b8b9_grande.jpg",
            "d84efb0f-b666-48dc-9541-0a8813e79615_83b6275fc1854932a60d179d94309bb7_compact.jpg",
            "318f7ff8-3f3a-478c-ac5b-14717131edaa_ed951c27e0f14797900c13d4c5bede87_compact.jpg",
            "42b9fe05-b75a-4d86-8d52-529103ebf0f5_88f8798eaf804324992733ca1ff5c978_compact.jpg",
            "92852925-9ff5-47f2-97ba-0cdd2f6b10fe_3c73e9f93eba419888ca99e78dc080a5_compact.jpg",
            "2612d8d8-2980-4356-8892-c83e3ca318cf_ee0e2e3575904961bdd96758eb93095d_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 350 V2 CARBON - FZ5000 - 36",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO16082410",
        "price_now": "1,700,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">YEEZY 350 V2 CARBON - FZ5000 - 36</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979776066450_61345f70bec93b8970ce77e68360393c_6ae6af9c2cfd4b74bb5a59eee43ed936_grande.jpg",
            "1ffbdb38-2ed0-4e5e-97c1-c3395291944b_e5005bedc71a4df89b1d549860276979_compact.jpg",
            "da62b060-fffa-42d8-91ee-fbf2e314b7a0_adf7cbf00a16454990aba09f32801650_compact.jpg",
            "e41ebf05-b985-4004-87c4-56548aee8a7a_2b4b0eb4b1bf4234a58f843b979c7499_compact.jpg",
            "cd939236-fe08-4003-b46f-675ec29941e3_9e4af95a74cc481a8feb1145b7026780_compact.jpg",
            "f31871c7-becb-4e40-8231-440b4c8e9930_f388366babaf4cd49d8df0fdf4fbfb06_compact.jpg",
            "54ec4cf1-633c-4568-96be-c974d6b1e292_86b5ecd0c54c40e2be6867f3657ead3f_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 350 V2 MX ROCK",
        "brand": "Adidas",
        "type": "hypebeast new",
        "sku": "BO03112303-1",
        "price_now": "5,500,000₫",
        "price_compare": "",
        "sizes": [
            "41",
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>--------------------------------------------------------------</p><p>YEEZY 350 V2 MX ROCK&nbsp;</p><p>Tình trạng: NEW&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 1 tháng đối với giày cũ - 2 tháng đối với giày mới.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p>\n\t\t\t",
        "images": [
            "9ab0da6a5255fe0ba744_4087e161cc934b4cb27c109e45534916_grande.jpg",
            "5e37d18b-4d90-4ad4-bca2-66170dd2bc4a_938498e01b07416f97800600c10c4ce2_compact.jpg",
            "5f418ee9-ffa4-4f09-b35a-b4e919232904_10d1ac1280da430597f237c20a9d573b_compact.jpg",
            "478fd23a-bd21-4368-ae3a-519fb21e6691_396299fc75284b089286727b5512751d_compact.jpg",
            "08814852-1e77-443f-be76-969961e50090_63733589e7a447a6b17b7dbaba317cb6_compact.jpg",
            "ecfadefd-362c-4fa5-a825-21de95b63643_feb44071f25e48ddb51effd07f864083_compact.jpg"
        ]
    },
    {
        "name": "Yeezy 350 V2 Onyx",
        "brand": "Adidas",
        "type": "hypebeast new",
        "sku": "NE000002 -3",
        "price_now": "2,999,000₫",
        "price_compare": "",
        "sizes": [
            "34",
            "35",
            "38",
            "38.5",
            "40"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "4b584c66d2d605885cc7_afe7f32842dc410fbaf3f35b31809c28_grande.jpg",
            "13_c57707753c884b8ba0ca51fd900ee163_compact.jpg",
            "14_83555ee035e6450887d8896ec12a30d6_compact.jpg",
            "15_a1ab04c930d44ad6b409381e6a25bef7_compact.jpg",
            "16_b7e557a9c5c246b9b8dc5aad4ab80b47_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 700 MNVN LACELESS ANALOG - IG4798 - 42.5",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO30082411",
        "price_now": "3,000,000₫",
        "price_compare": "3,800,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">YEEZY 700 MNVN LACELESS ANALOG - IG4798 - 42.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979776563238_cf66cd36535c08e7f77ad192163d38ea_6e6432b7b012440bb24ff06d7adf5a44_grande.jpg",
            "b553d801-7009-496a-b73c-990caebf60ca_bd20f59a31e64ea1b360512be6b39ede_compact.jpg",
            "2c8cdda7-ea71-4de2-8a86-585c70a75988_c7d37d4e27924aacadc355b53d4a8d19_compact.jpg",
            "58997afe-85a8-49a6-9c68-97404d6cb3c8_0ad953c61592422f8c7e02a385b02179_compact.jpg",
            "e3e02c1f-1105-4f71-8dd1-96a72a103793_c4ebb9aca9ed4a6a9a983775eef39d23_compact.jpg",
            "0fe2ab1b-3d4d-408b-aad5-71c6067ba815_5bd194fb09b847c4a03efd4dcb54aebe_compact.jpg",
            "6ce5da26-76c1-4ecd-a5d1-2fb1750d6b64_42cb2fba2498488dadf8c816aba4d5f1_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 700 V2 TEPHRA - FU7914 - 42",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "",
        "price_now": "3,800,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">YEEZY 700 V2 TEPHRA - FU7914 - 42</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "84ae491223168448dd07_6c02ff07e75148c4b58bf2b40a824d10_grande.jpg",
            "641e9ced-e284-43f0-97af-4c92668c7ee2_f3d731923a794aab9479d34af261f01a_compact.jpg",
            "4e849be2-8eb8-4cf2-b431-1818dabc44bb_90cfd6af77a244fbafb7c508c50516d0_compact.jpg",
            "647d06ad-d26d-400b-b238-970612590530_424e98af8998452d8436d1ece4f02028_compact.jpg",
            "5f42fde3-f0ab-490b-a595-37873fa7b788_400351057b8d456f808bee3c686aab13_compact.jpg",
            "f3b21092-fe3d-440c-abb2-2feedb1fd50d_cb01f61b4fb74515915667f418dac5d7_compact.jpg",
            "91d56a9b-7635-4b68-9f0a-4ea98d044e9d_2438df02ee34497ba139fb31b936d140_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 700 V3 FADE SALT - ID1674 - 42.5",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO30082404",
        "price_now": "3,000,000₫",
        "price_compare": "3,800,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">YEEZY 700 V3 FADE SALT - ID1674 - 42.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979776965594_e593ed44e73a2dfe849b1fbdc06ffabe_5ddec56e47834f7c92cfcced4b075464_grande.jpg",
            "8c3165e2-428b-413c-8be7-bdbb0da9ac83_0a84bc8b798649a4863daf6d9c693371_compact.jpg",
            "b34766ca-dbbc-4c36-8c2d-245b6e23de99_a55d87fb51bb452e8ebb86e8a750c91e_compact.jpg",
            "11e5f9ab-e7f1-4a2c-9722-c2e363ed73b1_fff65b5a90504923a3531ed78cf5df66_compact.jpg",
            "0b05e9e4-fb69-4464-a771-72e71b70b910_ecd714e8c896482c9633f9faf0b322e1_compact.jpg",
            "ea8322e2-1c93-4f6a-b71b-404aee9d00ef_51bc3cfa73694af9be4824a7d2be2bce_compact.jpg",
            "ba97a1a5-3bf5-401c-80b9-82d6bc4b7e3f_2a8ab321a0d442dbb4441b34713399e0_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 700 V3 KYANITE - GY0260 - 37",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO20022401",
        "price_now": "2,000,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>YZY 700 V3 KYNAITE - 37</p><p>Tình trạng:&nbsp; NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5979776731017_e117e741ed7c3e7c26f07306ece9d14c_c1755425fb024491a1439547f0b02456_grande.jpg",
            "80398e30-f000-45ba-a5db-999831946969_50758c456d8243f0b08321b096286673_compact.jpg",
            "e04d458d-511f-43f8-9462-3ab42de170bd_ae0ed6db21d44e25894f41378dd08b2a_compact.jpg",
            "76d34756-f95a-4d0d-8574-500ae5ec2b52_a8c484e62fb3413286dd2738694d0a95_compact.jpg",
            "67d51e52-783a-48ad-96f7-ad89bf3444e1_92b4ae24094f40f3a4f8c3012c8f1b0c_compact.jpg",
            "a25ed6fc-98e1-4054-a695-5a34a7fb4084_2c59754164814668816c097a163af8fa_compact.jpg",
            "df6b71ec-4d13-4b1f-89c0-f7c3a95cf263_b1e5f74ea5e34586a6a7af7defccd2c2_compact.jpg"
        ]
    },
    {
        "name": "YEEZY 700 V3 MONO SAFFLOWER - HP5425 - 42.5",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO30082407",
        "price_now": "3,000,000₫",
        "price_compare": "3,800,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">YEEZY 700 V3 MONO SAFFLOWER - HP5425 - 42.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979776518262_78480f098a044a4e3f276844b300b6d8_3b40b0a635af4ae3926382034c5350ee_grande.jpg",
            "dd861818-68aa-4045-a881-0d415590d3b1_a1cf806026194ebabe739d4515c73e91_compact.jpg",
            "373c1c95-eb07-4ede-a2e2-b8994891e15b_3507e1dbbe8c42788e9a16264644e45b_compact.jpg",
            "6c73e3cb-aba6-4c6a-8539-53992ac00f09_8b9349bc6a7f42fca11e6ecc94a13f01_compact.jpg",
            "6d1356fb-ce32-4569-8320-586b83f84daf_3b9a813b3150452bbbe613dad381882e_compact.jpg",
            "99f447a6-405f-41cb-aafe-0b614b2c1fa8_15cedc7b792e4327a9fc98a95823683a_compact.jpg",
            "1cfa15fb-d64e-4f0b-9c32-da39a92f3e87_a2fce55eb8b749f08fa38e938f6e06b2_compact.jpg"
        ]
    },
    {
        "name": "YEEZY QNTM BARIUM - 38.5",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO05092324",
        "price_now": "1,500,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>YZY QNTM BARIUM - 38.5</p><p>Tình trạng:&nbsp; &nbsp;NEW-FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;60 ngày kể từ ngày mua.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "4e011fa48614514a0805_cd7034038dd5450cad4718d91ef18658_grande.jpg",
            "c3fd5f53-0f44-470b-80c6-74d9e5868693_e8b84905711e424fa7ea2093716b3f05_compact.jpg",
            "45234c34-6ff1-476d-a9a5-1ab6ae3e289c_55814aaf37c244a2899d480c6eccdbd6_compact.jpg",
            "aaeb1658-26e7-4440-8ed8-308112beaa81_f004a406090c46638f8e0ce809138ffc_compact.jpg",
            "db135380-4265-43a0-967e-2c4f6af9d1ac_946445afedb240199071f4a77189c394_compact.jpg",
            "8deed8ef-1ad4-47d3-b99b-5d8e88241380_a688a798eb984e2b9f1c7820552498b3_compact.jpg",
            "0ebaf9bf-ff66-4311-813b-0da06667b3d6_ff33d792f4cc49339855f4d17af6b7e0_compact.jpg"
        ]
    },
    {
        "name": "YZY 350 V2 MONO CLAY - GW2870 - 41",
        "brand": "ADIDAS",
        "type": "hypebeast new",
        "sku": "BO11102428",
        "price_now": "1,800,000₫",
        "price_compare": "2,200,000₫",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">YZY 350 V2 MONO CLAY - GW2870 - 41<br>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "z5979776345738_3c820122c8057c1517bfb0d535a8c737_f68c53fa19f64108ae9681c7e151bf84_grande.jpg",
            "4dc0d59a-5a7e-43bf-8617-58b20f8462ec_76c5ca53ba29464fafe8427b87728bc9_compact.jpg",
            "03e39010-29d8-4eea-b86e-c9cbd509a27d_8a35360029da46f29a3e09da1b972080_compact.jpg",
            "c7912279-850d-478e-b684-232480b65ada_625edc661cc8473c96052f8476ead81e_compact.jpg",
            "98459f18-e59e-41ef-8c61-b1eb3253bb84_de80c0b56c7d4343ad3aaa1a29f46f07_compact.jpg",
            "7801a0bf-a605-41f6-b598-d700e72bbc52_2d2d795dbfcc4ea3a820348fb72fe884_compact.jpg",
            "0219a8c2-dbf5-424b-958b-380992aa2486_777ad7b2b6724ba988c708d0ebc5001e_compact.jpg",
            "c1afba42-79d3-4973-ba1e-16ca867a87de_218cce6accdb442c91426c45b7486a8b_compact.jpg",
            "1a1b91f9-772f-47e6-9d77-09bc9941fb7b_ee179e822e9444278271c6af7b7eaff9_compact.jpg"
        ]
    },
    {
        "name": "AF 1 LOW MALACHITE - DQ7658 300 - 42",
        "brand": "Nike",
        "type": "AF1 New",
        "sku": "BO25062401",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF 1 LOW MALACHITE - DQ7658 300 - 42</p><p>Tình trạng: NEW - NO&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "4752276092f831a668e9_2ca4ae2abdd24d8cb1791920916a3730_grande.jpg",
            "89ff61d7-76d0-4d32-8cef-e575821b5919_bccaf8c42aa447c186626c630413f832_compact.jpg",
            "e2eee89d-e91e-46c5-b461-9d1353f0c43c_b4f22e64d7664caabfffdb393a77e5da_compact.jpg",
            "1992c9d7-59ab-42a4-92d0-ab63f5f0cfcb_4c8d48f166c549b69ca5d2194d924571_compact.jpg",
            "afff0027-92df-4509-a557-a5a6d1b11107_7ad0d9b229ad402f82d0e6cf91ddea24_compact.jpg",
            "8ca849b0-aa42-4e1a-80f5-a679b5eedd2e_59a450e438014727a8903200bfb95be5_compact.jpg",
            "81b1affa-210b-42fc-ac50-3ba08a417dc8_e1ecea422fb4400a81c90d5a7087bf98_compact.jpg"
        ]
    },
    {
        "name": "AF 1 LX TEAR AWAY RED SWOOSH - 39",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO28102349",
        "price_now": "2,300,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">MAKE SNEAKERS GREAT AGAIN !!!</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Thương hiệu uy tín hàng đầu Việt Nam </span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">7</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\"> năm tuổi</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">AF 1 LX TEAR AWAY RED SWOOSH</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Tình trạng: LIKE NEW - FULL&nbsp;BOX&nbsp;</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành keo </span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">6 tháng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành chính hãng trọn đời</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Không thử giày, không nhận đổi trả.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">.</span> &nbsp;</span></span></p>\n\t\t\t",
        "images": [
            "z5626121169747_b6cdea469cb940e230dd6ac4288c3937_c6e5ca7a170249e083d4d2e8265bfc6b_grande.jpg",
            "7dac016c-83ed-406f-a688-77da2c954db1_71c80e8f4db14f8cb4b947d5099b636c_compact.jpg",
            "746043d3-0f15-4f40-a30e-5ae96924b52d_57bc6b6fb4ab453595248c5765ea53bc_compact.jpg",
            "61367b1c-f3b8-4399-87e4-d9e6850bfb29_21808dd51548444aac1e2abf05305eb1_compact.jpg",
            "2c6e13e5-1c74-4b88-8b4b-b29dae8f5d11_bd68b12644ac498aa54c39bc9d7c06b5_compact.jpg",
            "36db70be-ea4b-4fe3-b454-8f108cc66b4e_576e2afe07894d58ba121c3f6dafcdfb_compact.jpg",
            "4f839079-1412-4ab7-ae85-d669b7f72d91_cbf50045f4a2428cbc00c5f744739a2c_compact.jpg"
        ]
    },
    {
        "name": "AF1 07 WHITE LIGHT PHOTO BLUE - HF3836 100",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO16082409",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">AF1 07 WHITE LIGHT PHOTO BLUE - HF3836 100&nbsp;</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "ae742bca-384d-44ef-93d4-dc01635e65d2_d6fce613f50c4348b36571918b867a7c_grande.jpg",
            "bfda6503-229c-43e2-9dba-8cb65bfbde6b_665ea1b98e8f477eb8ca4e13b80d9120_compact.jpg",
            "9fba13c9-0921-4b8c-9e43-93d651c1f33a_7a7fa07944b74982ab13c0ac32ffec29_compact.jpg",
            "837f6ad2-f5ae-4e27-a66c-24d7a0d19367_1d177e0f5ba2434980a6083f0296df40_compact.jpg",
            "29cdba21-d5b5-4b55-8487-d86715b1d9f1_b5cf0bea63f842178fe74e3a5e4ec2ae_compact.jpg",
            "6ac87bec-30ad-4ede-9151-a04e0265ef5b_7622d2008fa440239d563c800c32171b_compact.jpg",
            "e39abdee-0073-4a98-a899-9aae49bee161_b00bc04cf5084987b61409c1e27c0973_compact.jpg"
        ]
    },
    {
        "name": "AF1 07 WHITE UNIVERSITY RED - FZ7187 100",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO16082407-2",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "42.5",
            "43"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">AF1 07 WHITE UNIVERSITY RED - FZ7187 100</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "87d10116-cccd-4f87-8d87-a0e5a13bbc5b_b21d388a65a64094bdaf4078a5b1235f_grande.jpg",
            "f7a710a1-af2a-42af-bc50-e8ba9ef04e4c_73694fd0ec694f85abf6372108f599d4_compact.jpg",
            "b87ac596-92e6-402b-bd13-63793884e3dd_fcc642f1e2014508880b432a94ade9b5_compact.jpg",
            "838a4457-1361-4235-83ce-2607b2286400_bb27e59ab8f34001a7fdf3f9b48931dd_compact.jpg",
            "43536e97-1577-43e0-821d-2002f1859b0d_c26f5184cb9742028217016ed9091962_compact.jpg",
            "e7d594c9-38c6-4227-8758-6aa0d892fba7_449a155fa7a0400aacc1edb0f403aa42_compact.jpg",
            "2db06898-09e3-4091-9b71-d3acc8122526_9358852e40f849c294ce0e8efe8e5806_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW 07 WHITE BLACK OUTLINE SWOOSH",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO30012301-4",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "41",
            "42.5",
            "43",
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p>AF1 LOW 07 WHITE BLACK OUTLINE SWOOSH<p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "d3fbc817-e9e0-48cc-8bca-6f8155d015df_1c9f49c871d34b718717b49332d39bd0_grande.jpg",
            "d74ddcad-a6d8-4366-88d0-9283e1cb2469_a83125edf2254d19935c4a81feef972e_compact.jpg",
            "89b17fe6-28a3-4ca6-936f-8c177baf9b45_37c24924a40b4b479e575d9f1ee145b0_compact.jpg",
            "5694d8f7-0a24-4aba-8553-d11fad775a19_f4c3c95317ec44eca16d1f9bfad15b88_compact.jpg",
            "3f0ff6e3-31f9-4011-a91c-debb5808e596_d59c5528aef74464865c895afeabb2bf_compact.jpg",
            "5366011e-7bda-4bf7-8acb-250de794e334_59493db2ca19492dbec586b56b342f9f_compact.jpg",
            "bbc35c9e-1de4-4186-8f12-f833ac84461a_db79912b9b1a472fa2e479ad6174fbac_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW 07 WHITE SWOOSH PANDA",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO16122316-2",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "39",
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p>AF1 LOW 07 WHITE SWOOSH PANDA<p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "ba4a219062e8cab693f9_c6de1c96c5b14bf28aeab7a59ec64ca6_grande.jpg",
            "f6ca414b-2549-436e-833b-7033197e325e_be1ad749f25b4b41847f1d4ee71cfda1_compact.jpg",
            "8c67c5be-dace-49f0-8d6a-8a037202a712_14260a3e8a5d49959c744265b1694180_compact.jpg",
            "c79e969b-28b7-494f-a9a5-4dcf4711e4e2_c6dbf1d00a634cde8f149e168b868106_compact.jpg",
            "f879d09e-cfd2-47d7-9bcb-439ca190379f_de7f693fc16645019ea2180aa80216fe_compact.jpg",
            "32258f25-a801-493b-98c8-6d17520f0443_f2ff4e1d1248463a895e98695948a0fa_compact.jpg",
            "a8a21d4f-5e29-4afa-80a7-a29c94082e06_c3889fa4aca747c19c174e7077c33e5c_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW 3M SUMMIT WHITE - CT2299 100 - 38.5",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO27102412",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 LOW 3M SUMMIT WHITE - CT2299 100 - 38.5&nbsp;</p><p>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "32ddfaf26efed6a08fef_682522d867214a09af02e3a7d4cd0754_grande.jpg"
        ]
    },
    {
        "name": "AF1 LOW ALL WHITE",
        "brand": "Nike",
        "type": "AF1 New",
        "sku": "NE171122001-1",
        "price_now": "1,650,000₫",
        "price_compare": "2,200,000₫",
        "sizes": [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">MAKE SNEAKERS GREAT AGAIN !!!</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Thương hiệu uy tín hàng đầu Việt Nam </span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">7</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\"> năm tuổi</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">AF1 LOW TRIPLE WHITE</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Tình trạng: NEW - NO BOX&nbsp;</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành keo </span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">6 tháng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành chính hãng trọn đời</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Không thử giày, không nhận đổi trả.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">.</span> &nbsp;</span></span></p>\n\t\t\t",
        "images": [
            "z5784704840453_f90245195a009ab193325ae193186586_d7f3a5bd25004c94bc617188c328c7a5_grande.jpg",
            "6_5b0675e2904d4554b1c856958f080c54_compact.jpg",
            "250_04595f5020e94567aa5e32f7c152742b_compact.jpg",
            "251_5a5801508845434489ab42428b35e927_compact.jpg",
            "252_0b78d5d46a6044c88c149dea340d62c3_compact.jpg",
            "253_083be89bca0d458883a263e26f5e8cf0_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW BLACK WHITE",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO02082317-1",
        "price_now": "1,400,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "38",
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 LOW AN20 BLACK WHITE</p><p>Tình trạng: NEW - FULL&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5905900292254_ada8d8af2fe4cb568de9524ade0a7959_e891ac2e0fc7447eaadd6a7fb94c3eeb_grande.jpg",
            "33c0b54d-74a7-41f4-855a-c66984395132_5b96ce332e1940cfba484b75dcf72390_compact.jpg",
            "cc79ed02-3f11-47af-809c-0979000ea486_eea27134d1094ed0b5aef3a4c0588329_compact.jpg",
            "8627a8d2-f4d4-4f08-a637-357a107a6d96_1fc3ae570af248ffa32c9975a506a21f_compact.jpg",
            "714ecd02-52e5-4a20-a82c-5b3266f0c792_c2f9e0300c304c7f9b67b4b4342446d9_compact.jpg",
            "f5b9152b-0a50-47ca-8c84-f6cfac1b0aa5_a642a24c591f49dfbda37b3386b9f15d_compact.jpg",
            "df6b89c4-2b9e-4d18-9189-e8a9c87aabda_b3bafe48c801489c91e564a3d5c2c07a_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW CATECHU - CZ0269 101 - 38",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO27102411",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 LOW CATECHU - CZ0269 101 - 38</p><p>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "9b1908389c34246a7d25_85496a35edff4d3cbf4ee61f4b98db29_grande.jpg",
            "1c2f8d1a-698f-4824-a423-719bf109847f_981234cc9418432596df42f0133c0236_compact.jpg",
            "222b3f87-e13c-4532-bc90-b1bc4fc89223_687bac506d624e8c9710bf4d4d5273df_compact.jpg",
            "8041c6fe-c398-451e-aac5-0fa081855c57_5cc70dc8fe524fc2bea24fca8d31c922_compact.jpg",
            "a984e162-6731-459a-ac19-8d8f6d9252b5_d24be4998db74b93a226b70ff9f9ec59_compact.jpg",
            "a2cef13e-75ca-459a-889f-171c7882dd11_f1b41b18318c485c988647083244977a_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW LV8 BLACK CHILE RACER BLUE",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO02082321-1",
        "price_now": "1,450,000₫",
        "price_compare": "1,649,000₫",
        "sizes": [
            "36",
            "38",
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 LOW LV8 BLACK CHILE RACER BLUE</p><p>Tình trạng: NEW - NO&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5784704792192_678deca8cc35b904240383241b0432ff_01838c95145e482a9400f4f02055f09c_grande.jpg",
            "dd5a7b07-d0bc-4081-bb3a-31b176510ee7_8cea8e3340f04f969f85905050e75eac_compact.jpg",
            "e41a2b42-4e3f-4af9-a52b-6b4dbec292ef_6b6fd323253b4855b829dac52496dc54_compact.jpg",
            "afde93b2-4742-4c09-93ad-e3da5adc1054_45b7535fb4974ca79dd29d67ed2c17b0_compact.jpg",
            "a750ca2b-893f-46cd-9db0-eace7fc0b055_afc2c0108eda4c648eb514e78db5399f_compact.jpg",
            "5e1ad1d7-5d11-453c-8491-768a5c6a2e15_097844f760d5489f949c66e9038b23fc_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW LV8 NBA BLACK WOLF GREY",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO02082320-1",
        "price_now": "999,000₫",
        "price_compare": "1,650,000₫",
        "sizes": [
            "36",
            "38",
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 LOW LV8 NBA BLACK WOLF GREY</p><p>Tình trạng: NEW - FULL&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5905900495155_9a31cb70114a274e9b3950f17a26c06e_d922d6f73c6640b5935106aea0c9b279_grande.jpg"
        ]
    },
    {
        "name": "AF1 LOW MATSURI - 41",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO22032407",
        "price_now": "1,999,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 LOW MATSURI - 41</p><p>Tình trạng: LIKE NEW - FULL&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "83b6fe6d5dc6f198a8d7_a4ce2296d566421fbf319aba5e7b151b_grande.jpg",
            "ff2041ba-0437-45cc-b271-c04b8d5e5e85_29bff781b79d4bf08869333217077027_compact.jpg",
            "908072ef-3c7d-4640-931e-24c028d842f1_0c39cd8a56de40c5b01ccb2678191981_compact.jpg",
            "47c929a0-948b-449c-9c05-40787c4e61c3_e6624f1137974015bc90548e07062115_compact.jpg",
            "a4f4d74c-b3f7-47be-806a-b673cbb12fa3_d932eca4bfb648078ad5ac8be365b219_compact.jpg",
            "08e7b5f8-22a8-4806-973f-93debcbd581c_57457aab328747df82efb3ba33aee6d9_compact.jpg",
            "16fbce66-9f64-4f12-aa4e-53edc990a14a_12f2df73ecaa41ffba718abde810d2c2_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW PEBBLED LEATHER",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO05032401-1",
        "price_now": "2,000,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "42.5",
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 LOW PEBBLED LEATHER</p><p>Tình trạng: NEW - NO&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "acd4633a0267ad39f476_5789d2559e0245f9b386758e70cd8459_grande.jpg"
        ]
    },
    {
        "name": "AF1 LOW PRM 2 MOLTEN METAL - FV3616 101 - 41",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO11102426",
        "price_now": "3,800,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">AF1 LOW PRM 2 MOLTEN METAL - FV3616 101 - 41<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "dc1fa6d3b2e70bb952f6_1ff09aa6d1e64332a172b5683280a546_grande.jpg",
            "a207159f-737a-4213-837d-35b7e484bab2_66466987835443dcbf10cb1f81ff5c46_compact.jpg",
            "498b150e-594f-4988-8f1c-b14c4464067c_07acaaf9c6ff439fa0d45ba4aae098e6_compact.jpg",
            "47657531-9604-4140-a7f9-22972108563f_ffd368f6453e40c5affeb5dfd97a95e1_compact.jpg",
            "22ae83dc-e6d7-4c1e-8a91-40ed05742969_34e69ead31ed4b8ea9558e8129ae464b_compact.jpg",
            "75114c4c-fffd-4e4e-b2e4-33d01608195c_1ff05cc574fe4dd0822e24bf553e8700_compact.jpg",
            "d7ef55e8-91c8-4060-9a84-5466117247e0_2ac95f73f53b4cf4abe78903230a47e8_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW SHADOW SOLAR RED - DB3902 100 - 38",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO27102415",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 LOW SHADOW SOLAR RED - DB3902 100 - 38</p><p>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "fc33b120252c9d72c43d_713c16ac66034051a8f3b96855a205e1_grande.jpg",
            "d7d1313f-da56-4b0b-9f7a-beaf582e563b_43489969f0cc4c408804418036d24575_compact.jpg",
            "4b2821aa-2b62-44b4-ae8f-a211d74fd00e_33f17bb6745f45d3a7ed8cd769bb19cc_compact.jpg",
            "a4a8f9c7-0f8b-4d5e-805f-33afa8596fed_c9127b2535c64468a2d510c2c8b45230_compact.jpg",
            "dee645d2-f6a6-4899-aad2-d0703e55fca6_49c8a4a1763b4a008aba0b9426fe0c78_compact.jpg",
            "1206b9d7-681e-4021-9ceb-e8c4935c8210_c011fd683b254c49bcaa6176232c2b90_compact.jpg",
            "eac90a93-7135-4c2d-ae44-93110e291736_12270901a8f342eaa9d8b60f81738ba5_compact.jpg",
            "f0043e0f-d228-47ef-8133-9cd1ad91ca18_36f1621848794a32b15d25bb218daad4_compact.jpg",
            "57efb6ee-2a75-46bc-9fce-af04712e1fb2_a48d8962f09e45b0a163af2158062d12_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW TRIPLE WHITE - DD8959 100 - 40.5",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO15102402",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">AF1 LOW TRIPLE WHITE - DD8959 100 - 40.5&nbsp;</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "5cc7b833bfd0068e5fc1_3ee2fea06743402aabb78b98d410b599_grande.jpg",
            "853230af-b4e0-4a32-b447-c34708d11097_3a5ec0818d0f403bb55bbbf1e1bf3bd7_compact.jpg",
            "c2c65151-6d1f-4c83-b47a-80ff92070617_72f42087c87548628c23d95e3783ad5c_compact.jpg",
            "f29684de-5d9e-43da-9ecd-1ba5ee9d11e3_1c84fcf522354b29bcaa8e3e5e27bce6_compact.jpg",
            "874fdcd6-f31a-4468-b488-3feec06fb445_3de1ad3716e44168bdaab1992de53d53_compact.jpg",
            "8217e726-cb7e-4f97-a471-049df3f83b12_a246a51382d3432393a0b30ca16e8045_compact.jpg",
            "5985e4a1-d709-4a68-a953-99a3f18d690a_bdc613549faf42da808983b60c922d67_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW WHITE BLACK - CT2302 100",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO16082408-2",
        "price_now": "2,000,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "42.5",
            "43"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:18px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:18px\">AF1 LOW WHITE BLACK - CT2302 100</span><div><span style=\"font-size:18px\">Tình trạng:&nbsp; NEW -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span><hr><span style=\"font-size:18px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "0c9bddd8311a9544cc0b_01aae016eec64906af631a75e95b906b_grande.jpg",
            "8dd03aff-284e-49e3-9b55-869461338a0c_c50cacc8f4084153a07c7215a2fa1862_compact.jpg",
            "eef6556d-01e1-4b3a-b9b8-cffce89844b6_b7c72958cb70447f9c25b26158fe01f4_compact.jpg",
            "04985c81-b22b-463f-9087-aab830b33435_fbca74bd2a6c41b19838cbc1e22c979e_compact.jpg",
            "e8c458b5-613b-443e-abc3-d5170a49d729_202e4450c311492cb11770f7d926eb09_compact.jpg",
            "59b7cdcf-e5fa-4f64-927f-8fe605970a8e_a622b82518ac4cd19a89edf652ab1d38_compact.jpg",
            "d45cd7c5-b589-4946-94f1-ece6db10c330_88b03ab1ae314a8787dd3d1a4d4d8115_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW WHITE BLACK - FQ4296 101 - 43",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO16082431",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "bd908b4d-8fc4-4104-bc26-e5d1efc18a1a_9a0a0d287a164c14817be6aa342eb96d_grande.jpg"
        ]
    },
    {
        "name": "AF1 LOW WHITE WOLF GREY",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "NE171122003-5",
        "price_now": "1,650,000₫",
        "price_compare": "1,950,000₫",
        "sizes": [
            "36",
            "37.5",
            "38.5",
            "40",
            "38",
            "39",
            "35.5",
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p>AF1 LOW WHITE WOLF GREY<p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5785090722139_b854ecf83b38fbacaf97e9b023da6c4f_b801325bc7974729918974e84a242f33_grande.jpg",
            "11_ceb1d7e87f554ec9a2c2be62b61553a1_compact.jpg",
            "12_ef0be9abbcf14b88bed9e82140d99ae2_compact.jpg",
            "13_e5a3a120aae6420db57a182bd6db478a_compact.jpg",
            "14_97bfcf920427485b9a2b81199240a7f3_compact.jpg"
        ]
    },
    {
        "name": "AF1 MID ALL WHITE",
        "brand": "Nike",
        "type": "AF1 New",
        "sku": "NE171122002-2",
        "price_now": "1,900,000₫",
        "price_compare": "2,200,000₫",
        "sizes": [
            "36.5",
            "37.5",
            "38",
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p>AF1 MID ALL WHITE<p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "7_25cadaca0e2e49b584f9d16ba2ca09d8_grande.jpg",
            "8_03427389ca7540eb9ef58b5c48ac74a9_compact.jpg",
            "9_37b2e95c46ad4cab90164152663df8a8_compact.jpg",
            "10_e530de9f994c43f4b113d2327bc6df1c_compact.jpg"
        ]
    },
    {
        "name": "AF1 MID CERTIFIED FRESH - DQ8766 001 - 42",
        "brand": "NIKE",
        "type": "AF1 New",
        "sku": "BO01062404",
        "price_now": "1,450,000₫",
        "price_compare": "1,650,000₫",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 MID CERTIFIED FRESH - DQ8766 001 - 42</p><p>Tình trạng: NEW - FULL&nbsp;BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5785091271971_9799571700659bcba9cdcf2225ae08b7_9ceef296dccd4e2aa138f23ede9ac6af_grande.jpg",
            "9d6a321b-67ee-4e9a-bb65-c2f4fe29a710_d9c4d01c2c0241ecbbad422852e67b4f_compact.jpg",
            "c6881d73-58e9-465e-8c65-281146d61ff8_54712be0140841fc8c83b84a2a47ce77_compact.jpg",
            "bf40b2cb-6f99-48cb-aeda-1fb80e145e73_b279b2e90035406e8076f22185978bd7_compact.jpg",
            "5ab2031d-c9e5-40c7-9334-f31631b53c16_855162c376044c70b8d2685c29156243_compact.jpg",
            "2397016a-9abb-4744-9b82-940aa7d1b93a_0c2b862af6ef41eba2dfa9574c6b8c7c_compact.jpg",
            "713a45ac-b140-4a2a-9a13-2a2d9cdabae9_ecce61f887384ca7ad751054390859cf_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 ADMIRAL ELM - A06524C - 37",
        "brand": "CONVERSE",
        "type": "Vans & Converse New",
        "sku": "",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK 70 ADMIRAL ELM - A06524C - 37<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "30da88f1ee7f57210e6e_47f5f8e1182c411bb6c53d6c4ff65260_grande.jpg",
            "f02ac5be-5181-4250-b7ba-54987ba95477_1758b24e52124d018db9a676f4cb6a03_compact.jpg",
            "3b5f3fea-2e16-49a1-bb0b-c2a1db8e6c83_b99b3817fb824bc68b3f230b57e81ea8_compact.jpg",
            "3fb435f7-25aa-4082-b4ab-5977e6030e71_cce8f5ced4624ad98fb867f4f15ac1a5_compact.jpg",
            "a25e179f-951e-45d6-999e-dc5e0f548994_df9ec6962d0d47489aad0a0953148ffd_compact.jpg",
            "1c002a86-8b2a-4afc-83da-5a500f7d0881_a4a659b2873a49eabf5d33ce128f5114_compact.jpg",
            "f4ef64f3-3316-4b6c-bc6a-ce35960ceb37_b21c668034bd4748a1fab7d453c8bedb_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 HI HERRINGBONE - A03661C - 37",
        "brand": "CONVERSE",
        "type": "Vans & Converse New",
        "sku": "BO18102401",
        "price_now": "500,000₫",
        "price_compare": "",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK 70 HI HERRINGBONE - A03661C - 37<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "z5942235024137_764d5daf225c02b206b7c6571fd2556d_04786e8de96645f1b3c93f6cfc63b8d9_grande.jpg",
            "fe48a064-355f-4821-b943-4830e4304616_f06e6dd816f54eeaa4a2721d3d7041e1_compact.jpg",
            "b0c28db8-89d6-4fb2-aceb-5471eb7a822d_1ed363911a3f4bf4904de26150eaa0e7_compact.jpg",
            "5ee365e7-f0f6-4402-97af-48a3dd4809f2_aefbdbe4ce724a9b9160a637ea49bc12_compact.jpg",
            "2c2a67af-1608-456f-8edb-60faf15dcdfd_b95d85197aab438c93fdc96bb336f482_compact.jpg",
            "633ef8a6-8294-4ca3-87a4-692555e1938f_0aa2f69efcc848d081965f1d24ea52b7_compact.jpg",
            "5c895baf-afe3-41e8-b360-b8a0fa17aab4_6340fc4ef5d64745b8196a6a2e5a6a57_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 PARCHMENT - 162062C - 42.5",
        "brand": "CONVERSE",
        "type": "Vans & Converse New",
        "sku": "BO27102437",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CHUCK 70 PARCHMENT - 162062C - 42.5&nbsp;</p><p>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "22b4d0a547a9fff7a6b8_e05c23cb10a64f9e8bb0caf9a226bc77_grande.jpg",
            "dc8486d3-f656-4a53-802f-e0be1c19f483_1b3fd4bf89374becac2af8e81c949de7_compact.jpg",
            "e3b8e685-25ee-4e12-bba0-c399a3314e02_520df06cd3984d8784d72212a023bf76_compact.jpg",
            "dc66f9cb-c9bb-4710-b973-ae02473951b4_9453700f4bfe4efd9385ce91bdb26f9b_compact.jpg",
            "610d1838-9466-46d7-8e19-c05ff7a00c5d_8b6e4366f0fa42668fe5e3752a01337b_compact.jpg",
            "cec734af-2d31-4629-9dfb-cd969f220bab_284c7b5ef7f34f9ab9108b38eab74546_compact.jpg",
            "b0cefa3f-81f7-4c4e-bfc0-db167b356bf8_ffe38899a4394d3d9de3c4e0f4a839df_compact.jpg"
        ]
    },
    {
        "name": "CHUCK LIFT PLATFORM Y2K HEART - A09115C - 36",
        "brand": "CONVERSE",
        "type": "Vans & Converse New",
        "sku": "BO27102429",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CHUCK LIFT PLATFORM Y2K HEART - A09115C - 36</p><p>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "a34e42bbd5b76de934a6_e1beab75262f4cac83361255bcb7a1a7_grande.jpg",
            "ee32f403-15f8-45cf-acd1-2c6c8e199b47_9b8b1b52038b431ca364a5068215b7fa_compact.jpg",
            "279b918d-e707-4266-9a3d-74f65f7d7c5a_f6fc4565117c4c7ba47b00971e65a4fe_compact.jpg",
            "15df0a99-f83b-434e-8987-b7b9f086f806_babf9a67779f4e929ad40d2b7e41bbc9_compact.jpg",
            "4ca2c8af-19aa-4053-a5ca-1f1e0d8d121f_9356a3709fc64fad839e6696e0e5b886_compact.jpg",
            "9cf15ef2-38e7-4257-a483-8e20b251a8cc_1f68432182d8448895e94dc8d55bba85_compact.jpg",
            "1b978e77-b531-4936-b962-73c34c745aae_e406f87c2f254df48448ce17bb7a61b1_compact.jpg"
        ]
    },
    {
        "name": "CHUCK TAYLOR HOT TEA - A06564C - 37",
        "brand": "CONVERSE",
        "type": "Vans & Converse New",
        "sku": "BO18102404",
        "price_now": "400,000₫",
        "price_compare": "",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK TAYLOR HOT TEA - A06564C - 37<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "707f9949ffc746991fd6_050b56539df249aa8a87dd0145ae95bb_grande.jpg",
            "9b83758e-89b8-4bbb-a710-68b9cd5389db_4587f8d145d942f6b0dfb22c12f6a7dd_compact.jpg",
            "f0a8b8a2-d9f8-4b23-af91-b9816d780c90_fa4f4cc284524d029e2560f79280f3ff_compact.jpg",
            "c33eba1f-bce0-431f-8a8b-aed3d06a2155_30fbc8bce5854d5286f7a5fe1e52816b_compact.jpg",
            "d7bbc0b6-67f2-4af7-9ab2-21eac1d9023d_550dd854a02242b5969fb87e713e1cd6_compact.jpg",
            "9b89b45a-8a58-48d8-aea1-17a40a74d50b_94fd140308464d24b2fc822afc0730c1_compact.jpg",
            "9dfdf024-4b6d-4f45-b8e4-ac6ecbb58683_570edd8f8e164845971f3ab92f1727c5_compact.jpg"
        ]
    },
    {
        "name": "CONVERSE ALL STAR 70 HI CDG WHITE - 36.5",
        "brand": "Converse",
        "type": "Casual Used",
        "sku": "BO09122337",
        "price_now": "1,050,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>CONVERSE ALL STAR 70 HI CDG WHITE - 36.5</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 60 ngày kể từ ngày mua</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p>\n\t\t\t",
        "images": [
            "z4956054317083_4583232047ddc91bafa8f6b04f88abf6_2ee05a128aa445fd97ff70c3076bc681_grande.jpg",
            "1a3f4cea-7b47-4bf1-8c76-e0bc4fcae03d_362d6d4f0e4f4d5683f98cc31c9fe5be_compact.jpg",
            "87f562e0-759b-440b-8474-07d1ef61d765_2e73168cdeea47b9948256f6e44cc934_compact.jpg",
            "769fb484-9e01-47b1-b7dd-97de3ae11ba0_de52f7100d05467580fe3d33406b2798_compact.jpg",
            "26f34dd8-b89f-4d19-80a7-65851efcf096_3b7a59e4a8e14bfa80b7b63135752690_compact.jpg",
            "abb18ee4-af52-4a1a-a2ac-7770cbe93e87_3a7c5ea0c55f447f8e449b6f589580b5_compact.jpg",
            "d3169ba1-ce80-4737-a82a-8e34b019b8ac_f4d7f9efe3474a77bd1ecf21ba8de772_compact.jpg"
        ]
    },
    {
        "name": "CONVERSE CHUCK 70 FENG CHEN WANG - 169840C - 41",
        "brand": "Converse",
        "type": "Vans & Converse Used",
        "sku": "BO1207240715",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>CONVERSE CHUCK 70 FENG CHEN WANG - 169840C- 41<p>Tình trạng: USED- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5626121065766_4ddee840bd2ce1e79fcf6693ad50e065__1__062d5d27cd5144b4b60ba72d24e220a5_grande.jpg",
            "5949b268-388b-4928-97b7-b6a0d277be9d_fc9c29eb327147a08bf6a28dc91395e8_compact.jpg",
            "ba4114dc-2656-468d-a31e-740a3c8f9364_f811c4a0ec844e4bbf2d63d8017c147c_compact.jpg",
            "ce7ae406-4056-47bf-a574-ced5b4c7e1a9_09b4e33c09ce4991a3047e05782c30a4_compact.jpg",
            "6fbac72d-4bde-4ac0-bec4-72be68b4faaf_89360eeb3c064677acc113b77142ef11_compact.jpg",
            "dc215009-e2f5-4f34-8b96-3991471f4548_84776b998bb346adb0f563f4a26bd5c2_compact.jpg",
            "35a3c0b1-9775-4edd-8acc-2c0374ce463a_24f410fc19a3475d93cd11ea72b6c02a_compact.jpg"
        ]
    },
    {
        "name": "CONVERSE POLO",
        "brand": "CONVERSE",
        "type": "POLO",
        "sku": "AN02092402",
        "price_now": "120,000₫",
        "price_compare": "",
        "sizes": [
            "M"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "img_2245_2eba35031a3044f2a664aea4a176f545_grande.jpg",
            "img_2246_1228e79245af4525b71d2ca96599fe5b_compact.jpg",
            "img_2247_5286481b6dac400d80256b7159437795_compact.jpg",
            "img_2248_544fbdb236db4fd8a753f4fa5465cebd_compact.jpg",
            "img_2249_2ea10af06ec9489f85f5b837ca20e14b_compact.jpg",
            "img_2250_4484a797089848bea16bcce75bb08e81_compact.jpg",
            "img_2251_8a533c6c16674b3a8d85168256ba370d_compact.jpg"
        ]
    },
    {
        "name": "CONVERSE X FENG CHEN WANG CHUCK 70 - 169839C - 40",
        "brand": "Converse",
        "type": "Casual Used",
        "sku": "BO01082419",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>CONVERSE X FENG CHEN WANG CHUCK 70 - 169839C - 40</p><p>Tình trạng: USED - FULL BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5685719015117_2aec6621054d1e4e34bad0ae9e04b50d_b2cec82ac50d4fd3aa2eebd9b9d8ee56_grande.jpg",
            "e6af0254-6ff1-4115-86a9-4229cd3e9840_c13638f584d94a64ba2461fe5e531293_compact.jpg",
            "3d2fd5ce-5542-4873-8f68-26d65fd2c044_413f17155c1a4d1ebb0494882da9669d_compact.jpg",
            "54061a74-0cca-45b8-a5b7-5febf1c67484_8975ca8002444b5d8afcd167e32f3e0f_compact.jpg",
            "3532b673-ac4f-4272-b6b6-85f9262dcd3f_e6153a4e69d64c658548058708b2ca31_compact.jpg",
            "d8168e4d-6767-423b-8aa7-118667acd884_593b319e48df48a393b092616253e5e1_compact.jpg",
            "dc0fd9a1-bba4-4e55-9a65-dcfe4aa38f4e_44592a79b6da444f91a9a39c765aaa20_compact.jpg",
            "9eed7dd7-8673-40ce-a8e6-85d02568c7e0_9e4340fc7c6b49b695a37e3faf5fd46c_compact.jpg",
            "9b995014-3888-4467-b5bd-00170f71e89b_a19a7fe4ef7c42ce9d1ceb7b10b76991_compact.jpg",
            "11fce425-5312-4262-aa15-c1797d4ed058_21d56c55bca4444ead25f68370cd3980_compact.jpg",
            "032f7ff0-8192-477d-919b-b2b7cc5aee51_3192b439d9874d63a6736670e4098af2_compact.jpg"
        ]
    },
    {
        "name": "OLD SKOOL BLACK WHITE - VN00003HY28 - 40.5",
        "brand": "VANS",
        "type": "Vans & Converse New",
        "sku": "BO18102422",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>OLD SKOOL BLACK WHITE - VN00003HY28 - 40.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "c4d473fa1474ad2af465_c4c2ecdda48141fab4393805d96505cf_grande.jpg",
            "a0e5daa1-bf22-4828-83cd-4dd885b0c612_85e73ab5e9bf4c73a8ea8d79b4b453f7_compact.jpg",
            "c1d1def2-b25b-4db4-b2d8-1d4321e5a29e_64fbf4c892fc4c24b5d3f03cd384805a_compact.jpg",
            "cef67479-c192-425f-ad7f-c60c06e64a23_accba89768db41919fbd274612757f8f_compact.jpg",
            "150eac47-cf66-496f-ad65-b591ca368d29_825071c621fe425b897f7b6c20eda747_compact.jpg",
            "de7b19ff-1987-42fb-9745-8d7172a412a6_6352acc11c024b8f83fccbd5b29eac19_compact.jpg",
            "2e206556-c628-44c8-b34f-9066760b6b1b_3eb140cdbce54747ba4955ad10d92daf_compact.jpg"
        ]
    },
    {
        "name": "VANS OF THE WALL TEE",
        "brand": "Vans",
        "type": "ÁO",
        "sku": "an25022421",
        "price_now": "50,000₫",
        "price_compare": "90,000₫",
        "sizes": [
            "M"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "img_5381_c8858b0820754aefb9b4c827d1713028_grande.jpg",
            "img_5382_acb417bec4ae4286a9205e76d4106932_compact.jpg",
            "img_5383_75f45efa0ee24ccb85b212d915d0b8d8_compact.jpg",
            "img_5384_76dc7fa3b8c24a2f80629c80eaae2f5e_compact.jpg",
            "img_5385_8757617359694147b88335e0fa97b88a_compact.jpg",
            "img_5386_0980e29c94da43a7b298a0702bd7b8ea_compact.jpg"
        ]
    },
    {
        "name": "VANS SLIP ON SPIDER WEB - VN0A3JEX1JJ - 38",
        "brand": "Vans",
        "type": "Vans & Converse New",
        "sku": "BO28042419",
        "price_now": "350,000₫",
        "price_compare": "900,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>VANS SLIP ON SPIDER WEB - VN0A3JEX1JJ - 38</p><p>Tình trạng: NEW&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>KHÔNG BẢO HÀNH KEO LỖI</p><p>BẢO HÀNH CHÍNH HÃNG TRỌN ĐỜI</p>\n\t\t\t",
        "images": [
            "z5913644455071_a9c05f32acc895cb806ef81998a9ff06_1e1119040bde4568b4fe47e2e6c4484d_grande.jpg",
            "ee3afc395dacf3f2aabd_02249d294f474f669b584b84b48068b3_compact.jpg",
            "59c9e8014a94e4cabd85_beb37c1acfa541cca37582a476e1e3fa_compact.jpg",
            "313c395c98c936976fd8_12a0a90904e64db48af2ad765821684b_compact.jpg",
            "472e4891e904475a1e15_2391f4f4cd49428bbb86ac28b94b4016_compact.jpg",
            "edfcc15060c5ce9b97d4_21097630f57c450489c00a8ccfc78436_compact.jpg",
            "32c2d78c7619d8478108_392c0a3b87e947cdad0e5d8afd598f5a_compact.jpg"
        ]
    },
    {
        "name": "VANS STYLE 24 HIBICUS PACK - 40",
        "brand": "Converse",
        "type": "Vans & Converse New",
        "sku": "BO14012318",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>----------------------------------------</p><p>VANS STYLE 24 HIBICUS PACK - 40</p><p>Tình trạng: NEW - CÓ tem - FULL box</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 60 ngày kể từ ngày mua</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p>\n\t\t\t",
        "images": [
            "1258a14e2e25f57bac34_a76098c55f9141a0bf77814a7007c7af_grande.jpg",
            "d2def0af-e384-494a-835b-eb637c73bb34_2d65c9ad175c45429685e7b252306685_compact.jpg",
            "adc6f7d4-a532-4773-9750-d866ce52aaca_b5ff42aef0954e16bd5c120549a1ca88_compact.jpg",
            "dcc28f7e-388c-4229-957b-f0b3446e3429_e507558fc30c4bc88f2e98955cdb77eb_compact.jpg",
            "1d1b965b-e6ff-4d0b-9e28-16ebbc894cdf_c5e8ed8a8a0142349da7c5bd301cf1b0_compact.jpg",
            "f5a44aa8-ef96-433f-a6a8-357574705df8_aa767396bf294f49859842c20516f5e8_compact.jpg",
            "c51565ba-939a-442b-8488-51b24de3e153_a30208f7888b416abed48648a76bb296_compact.jpg"
        ]
    },
    {
        "name": "VANS X MASTERMIND TEE",
        "brand": "VANS",
        "type": "TEE",
        "sku": "AN16102417",
        "price_now": "180,000₫",
        "price_compare": "",
        "sizes": [
            "M"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "img_6310_f4289a31d6174d068fb450c96aa38dd5_grande.jpg",
            "img_6316_1e0c2dae79c3480f86c9a83c14ee4889_compact.jpg",
            "img_6311_e285c820d860452da4368d0445768b14_compact.jpg",
            "img_6312_66bdd0d099c348f8b592179a4a696af8_compact.jpg",
            "img_6313_84e8bcf9d3b44471bee9c9f67326ab9b_compact.jpg",
            "img_6314_2d9afbe853fc4cc1b6dcf50c0c4614dd_compact.jpg",
            "img_6315_4059aa52ecad4be48c6af7975d3d398f_compact.jpg",
            "img_6317_f47eabca537a43668d36dbbf2532a240_compact.jpg",
            "img_6318_208c764362be4c9f88baee788565364c_compact.jpg",
            "img_6319_c646a44fe8844eac9a75b997530ae2fc_compact.jpg",
            "img_6320_4a17f8c838f74ecf9418dac4f586e1ab_compact.jpg",
            "img_6321_8d55fb7babc34c898435659673302fb8_compact.jpg"
        ]
    },
    {
        "name": "DUNK HI PRM SOMOS FAMILIA - DZ5354 045 - 42",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO30082415",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">DUNK HI PRM SOMOS FAMILIA - DZ5354 045 - 42</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "4c187a451041b71fee50_2ea2c004ef044462b6f43b503f270e3a_grande.jpg",
            "95fa3798-33d5-4a72-8a4a-dc6a4b60db11_95fccb361f4c4add85856f8c7a0cb38e_compact.jpg",
            "afb951e7-bdd0-4535-8163-499059d0e4f2_799f01428925414dabe8d9650ae049be_compact.jpg",
            "1e60ec40-7272-4e68-b065-80a81db879be_a39c27eece5540e7aaae8f4fe1b74e87_compact.jpg",
            "3836cfd8-5451-47c7-8a13-10d32cdb0b61_a56fce0c8c054f74b15290ba6b552f58_compact.jpg",
            "f4853fc1-b58c-4668-81c7-6f77180d9029_1a3ae4ef669545428e090683c3ac550a_compact.jpg",
            "b8c8961f-af73-48e2-8f94-f903892620cf_8824ec422d454226b1b4ecf9b3c1a369_compact.jpg",
            "167b4f3f-ff05-49db-ba24-872b2a60c147_009f0b5472144b27af4421b30d1f778b_compact.jpg",
            "6905fb30-1a00-4f9f-9977-f7577e55a45d_952a3fd6b64a44039d672fec2095f289_compact.jpg",
            "295df97e-0ddd-400d-bc31-e8268ea4b54f_bc754c4c4eba4a219a6dc47d52044d08_compact.jpg",
            "4ee4165c-8384-4044-ac52-f909e1547b08_a8cee4b491c44cdb844522009d76a17a_compact.jpg",
            "9675c0a2-e8c6-439c-86f6-c07ceedf9ff4_7ac9c65bec9c41d7876748f3f8d9fdb0_compact.jpg"
        ]
    },
    {
        "name": "DUNK HIGH 1985 SP YELLOW - 42",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO06012407",
        "price_now": "1,400,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>DUNK HIGH 1985 SP YELLOW - 42</p><p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "0642aa8a-63ec-4eb4-8634-bcd85165e63c_a469c210bdc3473d9d6829949e1174f6_grande.jpg",
            "99740956-e42b-4dc0-b273-0050c7b3b531_050c1d4de0bb421aac411f5447d0d708_compact.jpg",
            "0c3d8c8d-cf2c-497e-b447-e9cc428c6f0a_3360058575544df8a019ee82599e3321_compact.jpg",
            "85f3b768-7630-45cf-81f9-ee79de7eb5bd_476f133739fa4b4f94207156ed39cad8_compact.jpg",
            "0c6f814d-43d6-4d59-8418-2fc5bd6a3d55_b08ac2dfefb846bbaf08be4e5e2e0b19_compact.jpg",
            "dc36c1db-843b-4956-815f-9059240efbc8_308d29b4956e4b9e9ef8e979ede954c2_compact.jpg",
            "b081c815-6158-44d6-be5b-2a9a5c6fb6c8_fc008743816f4a7fad787106406b8f76_compact.jpg"
        ]
    },
    {
        "name": "DUNK HIGH FIRST USE RED - 42.5",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO15032404",
        "price_now": "1,800,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>DUNK HIGH FIRST USE RED - 42.5</p><p>Tình trạng: NEW - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "656a6b06-eb78-4337-a8e4-a1800e446c6f_feba85d540264ddca5c73b44fd2c06f2_grande.jpg",
            "50b492f3-1c57-4a52-985f-e7f529f4413c_827acd1d87254bb785960facc42c5483_compact.jpg",
            "eff8f95d-e76b-4a9a-bf33-73e5f2d0e453_2c3d6533e9794f36a012bd34426e86ba_compact.jpg",
            "f02dece6-479b-49b7-913a-3218299f90ff_7ecf3842741f4747b82fa9952277653c_compact.jpg",
            "209f17bf-a47f-4d65-91f8-fef2de2df086_41b4ad358f674076861c3902d92c8813_compact.jpg",
            "11f72acf-7e62-4ba9-b0d6-547167ed3c65_3703b34b5d9d406fb8e51161df9dcfcd_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW PANDA - DD1503 101 - 38",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO06092401",
        "price_now": "2,300,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">DUNK LOW PANDA - DD1503 101 - 38</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "18d1f5261dc3ba9de3d2_59d67423571347e5a9be9a12f23f2042_grande.jpg",
            "6c0e8a8b-9928-44f5-984f-e2c7514b6736_f2f59bfa4c1e440984efe7cee02be358_compact.jpg",
            "fa44ad96-1185-47a5-b08e-c7b2594b9895_86fc3106ccc14fb4a5ce1ef9ad4617b3_compact.jpg",
            "9f954af5-0bd7-47ee-82c7-edea309296eb_d5fab8f674ad4cfaa7f50ce9e40426be_compact.jpg",
            "d1dd4e13-2c4d-40eb-bee5-ddccb1cb06ce_b1ddd9373e434db791cc46ca4d138b65_compact.jpg",
            "f82cd9a6-9632-4ac4-a311-24dd63d332ed_a3778d2bbbd84a3dba4b7deb7f022e6b_compact.jpg",
            "e921544d-368a-463b-a86c-05c8c1ca9363_58190c0a1acc4ec69047be031ddcf406_compact.jpg",
            "33c285c3-1455-4c0a-94e3-07714e6379cf_0a98cfe83bce48a1925db483b4f0e52a_compact.jpg",
            "5d3a49d7-a2b8-4101-945b-e64768b0cc62_921723c3cccd4e16bcf46ca312c35568_compact.jpg",
            "f59219e0-86a6-4da3-9f43-570f15df86ca_05a577065c7049aebe07f9f5c019d429_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW PHOTON DUST - DD1503 103 - 39",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "",
        "price_now": "1,400,000₫",
        "price_compare": "0₫",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">DUNK LOW PHOTO DUST - DD1503 103 - 39</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 1&nbsp; tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979759366054_85d6335dc3f47ae8ab1b3e50b808a2ea_53260ae58b484f0ca8186b06b718d6c6_grande.jpg",
            "9ecb4ab0-0095-48c9-9658-de723f5a48fa_5298844912f24ae8a7d0f8394a5d2f26_compact.jpg",
            "6f793ab5-2b23-4d52-9e94-c347947619a4_f93d6f4cbd0c4e5ca7a88074998c1568_compact.jpg",
            "5111f11d-4445-4c0b-b67d-ec1db65ffa8b_a41abd2a478c4172a3a7a13e7eff4302_compact.jpg",
            "e47e1c57-22a6-438c-90c3-d0f20a8b8207_2fd16fc88e77492b85d2ae238a2b5453_compact.jpg",
            "abf93130-0d2d-4f6e-86f5-1a0f81e03049_0f9b877306f44d76a8a76117382c7dc7_compact.jpg",
            "aafa6628-2449-4b05-8a6c-5f06d3366b67_d2eb0ca585b24e8180d6c3af2058f554_compact.jpg",
            "950b7733-7c62-4a30-a173-0a7e1c61a50f_0848781335de4e75a700cbda061fbca8_compact.jpg",
            "ab7ad159-9dea-415b-8648-b79cecb96eb0_a930d0f2b95c40eea2b81fcad41e7cda_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW POLAR BLUE - DV0833 400",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO15122302",
        "price_now": "2,200,000₫",
        "price_compare": "2,800,000₫",
        "sizes": [
            "39",
            "42",
            "40.5",
            "40",
            "42.5",
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">DUNK LOW POLAR BLUE - DV0833 400&nbsp;</span><div><span style=\"font-size:15px\">Tình trạng: NEW - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "z5979760413982_25d4d60899b6a55567c08efdb4d94e50_d7373cdb07db4a2db1f1f823d2e052c4_grande.jpg"
        ]
    },
    {
        "name": "DUNK LOW WHITE HYPER ROYAL - DV0831 104 - 41",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "",
        "price_now": "1,200,000₫",
        "price_compare": "0₫",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\"><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></span><hr><span style=\"font-size:15px\">DUNK LOW WHITE HYPER ROYAL - DV0831 104 - 41</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; NEW -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span></div>\n\t\t\t",
        "images": [
            "z5979759776348_2b948b57e98a1fb0298e2b2ecb71b876_c6df8bfdd04d4300af63cb212fca37f4_grande.jpg",
            "951252b3-8d68-4ce3-a2be-3a0504cb9576_fa3ca92e633c4f81b65318cfa3e3830d_compact.jpg",
            "41b2fbac-e788-41e1-bf4a-4bc1afd6e9bc_8c099b842d4b462b888be081fe3897e4_compact.jpg",
            "f4380c65-3014-49c0-ad4a-ca01f444b0e6_dce8e61145784315b845290fd1247a5e_compact.jpg",
            "875b4b6d-19fa-47b6-b5a6-8a88d9de4f2e_353dc2be994f429d9079db19c1ad3066_compact.jpg",
            "a9c7d030-b4d2-4907-bf86-5fefc16d1c92_79e989a3726d411089bf1d89088d7d27_compact.jpg",
            "c195642e-76dd-4dfc-96eb-62b9b3f534c6_4df21b825f95456aaf16d76164cc2f56_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK CONCEPTS TURDUNKEN - DC6887 200 - 44.5",
        "brand": "NIKE",
        "type": "Dunk New",
        "sku": "BO27102451",
        "price_now": "3,500,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">SB DUNK CONCEPTS TURDUNKEN - DC6887 200 - 44.5<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "c6185d561241aa1ff350_c01512c830eb48d18749bcae8debc3e8_grande.jpg",
            "42f91b10-a551-4ce5-ad69-664e46bb4fec_02fe5abc27e7447bb6844a76ccb2bbef_compact.jpg",
            "9a5faafc-5b2c-46eb-9e5d-cb98274c7867_b5bd7d084e9d4e7b8f33b42457f68851_compact.jpg",
            "feffff00-8620-4666-a573-84fb4ed998ee_84e5a011749b47a39786263ef4019125_compact.jpg",
            "9cc85bf4-61c9-4fa7-a584-7a5cc8527450_135a129c71844893953bba4ca6311fa4_compact.jpg",
            "b8215d8b-133b-465c-873b-9c59392aa99b_fc73fef021354c9f91cd8c9c470e010d_compact.jpg",
            "dee766c7-fc3f-4900-8db1-bf513181d77f_7ba1c68e5ee64e7ea88aceee578c9dc1_compact.jpg"
        ]
    },
    {
        "name": "ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43",
        "brand": "ADIDAS",
        "type": "Football New",
        "sku": "BO23072401",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>ADI X GHOSTED.3 TF INFLIGHT - EG8199 - 43&nbsp;<p>Tình trạng: LIKE NEW - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "241be122cc3669683027_f6fe12d46ec7479fbeb3ed9f6aff8108_grande.jpg",
            "d419b2f9-ba94-40d7-bbc8-75f3d83da166_319a759d67d1499eae88ba6583bfd922_compact.jpg",
            "25e644f8-f7c1-4fc8-b3b3-37cb0fd009fb_16ee9e5497284218b95420a2536cb335_compact.jpg",
            "b9033fe4-d6ee-4399-87cb-8ddf5b93f563_b3cbb06bd28d427aab80d165321de6c5_compact.jpg",
            "d16e4195-0096-46f7-9cfb-034e0e9bd752_8aa98411f6e5418093f50ff16b429a1e_compact.jpg",
            "8eeb870f-d302-459d-9f3a-eb4a3ef0c412_f139bf94b7e94ee489f7349aed77b5b2_compact.jpg",
            "79ef0d7d-b0ab-474b-84da-e998ddc2f96d_85b0ab2346ec43758bd50c5fccdc1249_compact.jpg"
        ]
    },
    {
        "name": "CRAZYFAST LEAGUE FG ORANGE - IE2377",
        "brand": "ADIDAS",
        "type": "Football New",
        "sku": "BO26062403-1",
        "price_now": "1,500,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "42.5",
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>CRAZYFAST LEAGUE FG ORANGE - IE2377<p>Tình trạng: NEW&nbsp; -&nbsp; NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5784704888752_e43b70d73a025ee61a816fd531cecf1b_88936d1635014b83b45a114972a2e3af_grande.jpg",
            "3346ec32-ee99-475c-9bf6-834776688353_4bec12c8628249e0b64ffaf0cf44c41b_compact.jpg",
            "4b05d18e-a0d8-4df0-a77f-58cbd1f76913_4098e4d6644244a18b4e8dfc6e1af1bf_compact.jpg",
            "3d544f0d-73fa-41c9-9a11-5b0b5541ba01_0f4f6d543d90430c83dca360dae3c5d1_compact.jpg",
            "0a148751-797e-4a20-b8cd-25f29d09dfc9_a73f6846d5d94827bbc57754d26bc020_compact.jpg",
            "1ca3260c-8e96-4350-a72f-400fd5c309b8_f448bcab9dbc4e65b6a83c5255dfe5d2_compact.jpg",
            "3e3e3b82-9968-4c36-87f4-e0c1d5b074f9_ec363c9d938d42338dc2b1b42b98de98_compact.jpg"
        ]
    },
    {
        "name": "CRAZYFAST.3 FG CORE BLACK - GY7429",
        "brand": "ADIDAS",
        "type": "Football New",
        "sku": "BO26062402-1",
        "price_now": "1,500,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "42",
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>CRAZYFAST.3 FG CORE BLACK - GY7429&nbsp;<p>Tình trạng: NEW&nbsp; -&nbsp; NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5784704743611_9df5687f9945a1f111d5e7a3aaf360c9_92cd13b362db4d3ba8ffbc0c4ee9df63_grande.jpg",
            "63b3d857-8a6c-413f-b67c-b101a6085db4_501a674c497e4732a92f00a2407a59d8_compact.jpg",
            "dff03968-d322-46d2-ae3d-adfae12561a2_40dfab03846b4bd3bc93e5e09892df70_compact.jpg",
            "5f66aef5-4a4a-4ae9-b3a2-14fc87b94875_02eb9b2d8414441293e5c67504c7332b_compact.jpg",
            "0b88d4f6-d019-4334-94e6-5b272d9f83de_b002834342264dd9b567317db5cede56_compact.jpg",
            "121cdced-a37a-4d0a-b40b-3e2c2c1117d9_789ffdfcf6164a42bbed1e09e67d5339_compact.jpg",
            "ac647005-a442-4777-900c-6aa6229853e6_5a45d013ca8942e58e2c1ab71485b331_compact.jpg"
        ]
    },
    {
        "name": "PREDATOR ACCURACY.3 TF ORANGE - GW4641 - 43",
        "brand": "ADIDAS",
        "type": "Football New",
        "sku": "BO23072405",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>PREDATOR ACCURACY.3 TF ORANGE - GW4641 - 43<p>Tình trạng: NEW&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "f321e784-8c36-40d3-9923-27d8761da93a_d68475e83ea64c7b9fa7ba73741d5958_grande.jpg",
            "a902f3aa-96ca-4021-8323-69bc4b9d0aeb_82c6e1b1624345f3918569ba27ad3c3c_compact.jpg",
            "71d1fcd8-b09d-4503-9839-f396ef76ff52_b5bd8711f7cc4051a89be2427609299f_compact.jpg",
            "099b0baa-14f4-4bea-abcb-f39a13febd88_728f3c61678d47f784be130008988fa7_compact.jpg",
            "bc44a9ff-be32-47bd-91fa-9cd8148f4728_6b21fe4a09ed45f583cfea6c8c05632b_compact.jpg",
            "1cfdc414-b1ff-4000-bc2f-da74dba3cc58_4c4703cbc63d4458b05c28b9c211f563_compact.jpg",
            "8ca4d38c-4476-4b09-860a-24254562ab02_2d43980956f24411abde2b316671beb7_compact.jpg"
        ]
    },
    {
        "name": "BASKETS GEL VENTURE 6 - 1203A362 - 45",
        "brand": "Asics",
        "type": "Basketball New",
        "sku": "BO04082422",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>BASKETS GEL VENTURE 6 - 1203A362 - 45<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "7bd9ce70aafe13a04aef_a068240b1557466e937c342b3f6335c3_grande.jpg",
            "60c2e239-39bb-482b-8b27-e6b960af38aa_100c3680935d4813abab885b7be7e2f8_compact.jpg",
            "74b56317-938e-4f33-bf68-7427d3262955_ff83ed062c9e47409a93682ff68a727b_compact.jpg",
            "df8bcb9d-8476-4fdb-af6c-e39e7b87e066_ea6abb6016bc412689d6678bd8488479_compact.jpg",
            "8350904a-7bc1-4259-9692-689dd0c138ba_f53859b834f14cf5ac3343540b4a6b66_compact.jpg",
            "14c039d6-964c-4361-b30d-8d2b9254811a_0b02fb48afed4e32b84b4e3a5ac677a2_compact.jpg",
            "5c390ae4-c561-4d4e-8baf-713344c3039f_a61d4b7182d246e7a3ccd9f1f2377684_compact.jpg"
        ]
    },
    {
        "name": "LEBRON WITNESS VII WHITE SILVER - DM1123 100 - 43",
        "brand": "NIKE",
        "type": "Basketball New",
        "sku": "BO01082426",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>LEBRON WITNESS VII WHITE SILVER - DM1123 100 - 43</p><p>Tình trạng: NEW - NO BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5685719007476_902accfafede73af02ec53142e6acf3b_18d16014925f4c4e9455a72eb9812e60_grande.jpg",
            "67f44c9e-fe20-4e1a-8b75-1618145fc62c_73436e5dce344fe98422e775a69cc7e0_compact.jpg",
            "c3ab4c4b-9e27-4181-a3d4-523100f43f85_dff5ade081394217971a01dcff9a1d31_compact.jpg",
            "d21c1e97-7220-4d7e-a6cd-a5a27e90bc7d_82f15fa612f7414e8f1bf212869d32f5_compact.jpg",
            "2550ff15-f8e7-438f-933a-2bee49f1b126_f151455622784452a8d360abc7c26c35_compact.jpg",
            "b7831aee-f6fb-4dcf-be0d-65cee3cd8c33_ca3169fbe3264392966f316911945ad0_compact.jpg",
            "130e6c8f-e90b-44ac-9eeb-845637da42e5_b765a652eac244df9c565a7efca4b019_compact.jpg"
        ]
    },
    {
        "name": "ZOOM FREAK 2 ALPHABET - CW3162 001 - 46",
        "brand": "NIKE",
        "type": "Basketball New",
        "sku": "BO14102411",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "46"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>ZOOM FREAK 2 ALPHABET - CW3162 001 - 46<br>Tình trạng:&nbsp; NEW&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "aa0b3b734caaf5f4acbb_263fbc803aef460494a9cd2433960cfe_grande.jpg",
            "46c45467-18c5-4654-adca-ff7bdcc2a093_eec6dd65a0fe49fa8bf2292b71585128_compact.jpg",
            "2e690996-c3f2-445d-89c1-fffa77b0b8bd_5971238754004b4788e04dbb7dd942be_compact.jpg",
            "2c544693-a2b3-48b9-8ca7-d43b0e53dcf3_bc880973fc3d4427baa651a88f1aec1f_compact.jpg",
            "5b546cc2-0077-4d60-ab12-01a18dc3743d_3b1836a6d76a4ffe9cfea4fc5cb3b68d_compact.jpg",
            "0be15898-14ef-4f21-8a10-a73b4692e839_5d66454d246241dca9c0efc0b4c4d9d4_compact.jpg",
            "97b9b7dc-3d6b-427b-90bc-f9d083480936_0209ca3ae752403bb0be744ed40855f8_compact.jpg"
        ]
    },
    {
        "name": "JD 1 MID GS BANNED - 554725 074 - 39",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO07092401",
        "price_now": "1,600,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JD 1 MID GS BANNED 554725 074 - 39<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "z5804529674518_3e0ed97b6a1e98df8f7cec52c456fe7a_96c1975195924291bd0669364a9f1c98_grande.jpg"
        ]
    },
    {
        "name": "JD 1 RETRO HI SILVER TOE - C00461 001 -41",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO22082411",
        "price_now": "1,950,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>JD 1 RETRO HI SILVER TOE - C00461 001 -41<br>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</div>\n\t\t\t",
        "images": [
            "z5756287611333_974dc1574ce76161d810510991e016ea_773918188fbb4ab69f0eb0115f26fd6b_grande.jpg",
            "07ec2709-9956-45bf-9e64-241891d9f5ed_869c7e97c0d0430599b20406f5d6516a_compact.jpg",
            "6ceb9d1e-c7a6-4c63-940d-fb7b90a882fd_7c4cb3d210ae4efaa71045595faaf7a8_compact.jpg",
            "b408c90e-9aa3-46d0-b94f-4a43e21e78c1_aff2fa3512ac46108780f726c0971c74_compact.jpg",
            "4b442108-e8b0-4308-b7b5-bfeff6888228_8a030f68a0bd48a9ace662ac99468a71_compact.jpg",
            "ac3e3573-41c2-4851-b4ed-19402d08f47a_76e8ba96230145f8b6011e2d899abec9_compact.jpg",
            "ea9d9d47-d151-4765-aa1c-09ff7c2d8bd5_a214cf15bad640a9b955b635c64d0de4_compact.jpg",
            "41957698-1f30-4f7d-9eb9-ffba0356d1ab_a6cfd1011f0447ef96a78a3f63f275d5_compact.jpg",
            "cd4384c9-3990-4077-972d-10d4577a60fc_bb725034b61c40bcb2e1ba38520862c5_compact.jpg",
            "afc38903-2c00-48e3-9c74-798acd5d3745_1832e48a92a0491186a660bd57edc65e_compact.jpg",
            "cdcdfd57-0e7a-466a-bb6f-a641107da5bf_764484830b5d4fdebdec2d0be7b2a4df_compact.jpg"
        ]
    },
    {
        "name": "JD1 LOW BRED TOE 2.0 - 553558 161 - 46",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO11102416",
        "price_now": "2,300,000₫",
        "price_compare": "",
        "sizes": [
            "46"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JD1 LOW BRED TOE 2.0 - 553558 161 - 46<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "9bf704d2-2753-4adc-a490-a376b394f65a_ad2bfceb5a244b878929d51a7d96c6fa.jfif",
            "41d90b47-3a70-4886-b70a-38bb4b862ae8_b33ed923886d40f7a8c7d6a4d365930f_compact.jpg",
            "913e0cca-d078-493c-bdfe-db2d869ec738_a6a8dc66df0f40b5aad32602f17dc7f0_compact.jpg",
            "988b1e39-265d-406c-9c6b-7acefabb504d_e4e4618dbce04581ba2c9640b720c699_compact.jpg",
            "5e6aec72-f95d-464c-8b82-bcabfbf87f4a_4543e4f39d6c4bf9910b62aef1a53cb4_compact.jpg",
            "35aa3c07-d476-4f75-ac95-57bf4959071c_4344720837c3452ba0676ac5e2d2f310_compact.jpg",
            "751e867c-3924-4167-9a8f-fd476c715ad1_2b8cf449693f49919a0be727ccdb4858_compact.jpg",
            "1aca19b4-7c29-4602-97e3-1f37c4bbb66b_e7cf462ba7054a498da62ef76e7bde49_compact.jpg"
        ]
    },
    {
        "name": "JD1 MID BANNED - 554724 074 - 42.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "",
        "price_now": "1,950,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JD1 MID BANNED 554724 074 - 42.5<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "z5804529743689_7b0a7bdb660416bd144967c4d4003c40_3bbcac0e59ba424e9982ed914cb4e723_grande.jpg"
        ]
    },
    {
        "name": "JD1 MID SE GS METALLIC GOLD - DC1420 700 - 38.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO22082410",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>JD1 MID SE GS METALLIC GOLD - DC1420 700 -38.5<br>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</div>\n\t\t\t",
        "images": [
            "z5756287545247_699d09f90997b8730960eb8fbb44db0a_fead3bf2d45741ae9e188d89ff86f57b_grande.jpg",
            "250ed767-e82f-4ff6-94f8-731ba8db53f4_e59a249071b3464cb304c95e0db02530_compact.jpg",
            "95d3474c-e63e-408d-944d-a86699a21074_b90c3080b69a4dc5896799f41b59ff8f_compact.jpg",
            "f38df022-44ef-41cd-8cf0-d30f91c1e284_9e00975b60ce44d08ed51daa3e57d267_compact.jpg",
            "fd8298ec-dcc1-4a8f-9596-d8ed6aa846ce_ff06a041ae294affb953a7a644ff9e31_compact.jpg",
            "2b20fa36-1b81-46af-9d22-7e15a6eded16_c9905e88ee2b4de3a46f902264663fbe_compact.jpg",
            "2d23ebb9-8760-41c9-9ff9-7880247d2f51_5e1b6b26ec2d4d57b442f18f8a488913_compact.jpg",
            "b5875297-ee56-4aa7-9ae9-75307fdfa4ed_c1a41600384a4c9ebdfab78c8876c0ed_compact.jpg",
            "150fc4f7-6728-4f5a-b10f-e37b43edb8ce_2abd0c6a288c48b49fa5b432339f7dd8_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 ELEVATE LOW SE BRED - DQ1823 006 - 40",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO27102422",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>JORDAN 1 ELEVATE LOW SE BRED - DQ1823 006 - 40</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "6c326f93f89f40c1198e_b73dae1175bc4ed497308f472ee76e13_grande.jpg",
            "d414b646-6f6b-44f3-a2dd-97a1075664fa_e0c1153ae9be4da1a823c252ef88c7c9_compact.jpg",
            "8ea9eefd-6803-4f0a-b354-bdfcc5f88cba_dfa7878e55f64209a928e56f346cb7d5_compact.jpg",
            "9c1b4b63-2882-4a87-9057-f11de362033e_c48fec8422024e87b9a232f0e55a0777_compact.jpg",
            "b73eba64-bf1a-4dff-b9af-ab3bacc40a19_5ff9f752a03849b7a1e464fb3593bbbc_compact.jpg",
            "861b7421-7b97-4de2-9510-83076de381a0_0f2d8b9e0d3642ba841c1d4db6316a6c_compact.jpg",
            "67271033-c8cf-4a9e-b4ad-2b71f1c850de_aa1e6e96a37e4de09b478133de627396_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 GS LIGHT MADDER ROOT - DM8960 801 - 40",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO15062415",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>JORDAN 1 GS LIGHT MADDER ROOT - DM8960 801 - 40<p>trạng: USED - NOBOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "653f85894690e5cebc81_2c8e2af8f7324db7884d9ebcfbe709ba_grande.jpg",
            "f2a9750a-2d19-40fb-8497-43c153cbca21_c3da79473a0e434ea15af0a91d250ad1_compact.jpg",
            "afdc2539-8c0a-4e02-94fd-2b58eef9d25f_44551d2550ab4abda5e2017b7cfee1cb_compact.jpg",
            "aed93427-89b1-4e1d-9541-fb9d8fb61bee_5d160e4fd0774e65af7b45076192fd60_compact.jpg",
            "906fb66c-3c78-41b3-84ce-f9449281e9ba_9e0e351f6b4d48098340e949b97bab2f_compact.jpg",
            "432d5c24-4ed1-4b61-8134-3012c9d3b955_de09df3b16914590b9355db9bbbed724_compact.jpg",
            "16aa99f6-4f2a-4ab3-b317-e6416e97265a_841dd9c5ad924cc3a6be59e9cdaa50cd_compact.jpg",
            "ca1565cc-ba1c-415e-adc4-70d87f35a788_706ee74522694a8ea33fc79548e0dd9b_compact.jpg",
            "a5d332c2-2b0a-4663-a4f6-d00afcaa7b98_89c7035ae74c466d921fc19514340a21_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HI OG LUCKY GREEN - DZ5485 031 - 45",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "",
        "price_now": "3,300,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">JORDAN 1 HI OG LUCKY GREEN - DZ5485 031 - 45</span></p><p><span style=\"font-size:1em\">Tình trạng: USED- FULL&nbsp;BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5556737981825_2a18724ccbf0698accc9195afec7eccd_19e3a1486ac741d19a1f02f6e461ffff_grande.jpg",
            "09f783cc-fa3f-40db-a98b-aae2b4cfdad9_2036c379e8be4e16b2b58e6b86ebfd78_compact.jpg",
            "5f51ab65-8ca2-4376-8078-1da5cf50cebe_b9b151124a4c48d8ab3f4570df048a27_compact.jpg",
            "227541c3-369c-4e15-a7b0-a585956b0728_81e3fc6678a34f448d8d4955723d2198_compact.jpg",
            "bea73de8-6302-47f4-a36f-a471f754fa03_deb231fdeda043b480ee26afd6f25832_compact.jpg",
            "bb5c70fe-1401-4191-a759-a7377e1b103a_4ef900c269e147fbb0877aacaefe8c91_compact.jpg",
            "8d05279f-0e8c-45db-9ec8-119551c6c57d_77c64c834ca545d3a6e82268efeac294_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HI RARE COOL GREY - 705300 024 - 38",
        "brand": "jordan",
        "type": "Jordan Used",
        "sku": "BO19042414",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>JORDAN 1 HI RARE COOL GREY - 705300 024 - 38</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "cc0c2e298b3e25607c2f_bffbadf3289d4426a15b2f05a2188abe_grande.jpg",
            "e289bea7ba8514db4d94_8e7544d288a84a2fa4ae40e065e0492b_compact.jpg",
            "508763aa6788c9d69099_1e514cd8f6ea44d8a5b28db28267fb61_compact.jpg",
            "b50051175535fb6ba224_f9c651c33b1d46dda945f27e6559b692_compact.jpg",
            "ccbb26aa22888cd6d599_9aeca55db2494058b59386d01f0362c3_compact.jpg",
            "47d9e5c0e1e24fbc16f3_005381251cff4462a309f0a7a26145f0_compact.jpg",
            "4c79ec67e845461b1f54_cf0341c09c874c0296e84c8a232f5ff9_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HI RED ELEPHANT - 838850 600 - 36",
        "brand": "jordan",
        "type": "Jordan Used",
        "sku": "BO19042411",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>JORDAN 1 HI RED ELEPHANT - 838850 600 - 36</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "5bf29af23fe591bbc8f4_aa32fab401694d27878744a98c357c59_grande.jpg",
            "140f0dc8f7ea59b400fb_9577382aed2547c2a19e7da56e798dba_compact.jpg",
            "4a1b9ade60fccea297ed_1ebfb76d0e50458d99358e9c96539cf4_compact.jpg",
            "0dfe303aca1864463d09_86bb0b12a6c04a64a8c4d3df250b96d0_compact.jpg",
            "f2e2672f9d0d33536a1c_a4b409b0fbd44502b4cd8ccac5dd39e2_compact.jpg",
            "188fa03c5a1ef440ad0f_58f903f82f354a2889711213d65c4253_compact.jpg",
            "68a7991c633ecd60942f_852ccd2ea79344888ff223b1b0ea6e4f_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH BANNED - 575441 001 - 38",
        "brand": "jordan",
        "type": "Jordan Used",
        "sku": "BO31122301",
        "price_now": "2,450,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>JORDAN 1 HIGH BANNED - 38</p><p>Tình trạng: USED&nbsp; - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng&nbsp; &nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024440335_9808c0bfcd70e5f65469e1fd6917b4f7_dc1dcf4b614d40a699f86e5503c8bc67_grande.jpg",
            "ab4a336a-e4d5-4bcf-a8eb-6d670fc8d2f8_1d6f66e9cd4245e48f97d720478ff987_compact.jpg",
            "8a4c1ab1-ca08-4843-bdb4-2b1103a863d6_591b147c3599465381ea37bbf9cc390c_compact.jpg",
            "9507e5d1-1f47-4af5-bf2e-7ad41dc31c29_69b7d7ce069949f2af2028c5730591ed_compact.jpg",
            "98255b04-1b64-482f-80fb-f3bb9d87477f_1e40a8e6e0a54299a83c65f2236a8de0_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH BRED TOE - 43",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO26012403",
        "price_now": "7,500,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>JORDAN 1 HIGH BRED TOE - 43&nbsp;</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "1df8784c7040da1e8351_bceb64f4aee74427b09f09618a548bab_grande.jpg",
            "48eb6850-743f-48d8-87b2-afbea4f4799e_3702cdb2c7a340f2a19d51b4ddef498a_compact.jpg",
            "6bc68d1f-19f4-4f01-8b95-ca8b5fdcb1d7_846cd46cd5d5467687aee3d4fb811ecd_compact.jpg",
            "16b11b33-765b-4504-a1e2-8a212f2b7eea_204edb61cddb4d59ac0fca5deae33b69_compact.jpg",
            "c2322e31-a4e4-4a49-b475-5d66a6db5bb0_b14863a40a834ca8ab1cd3ac8504aa1c_compact.jpg",
            "4bbf3263-3f28-4a98-a31d-70ce362248c8_741257ec49d54843a20d397d9a040dd0_compact.jpg",
            "3453414a-b88d-4c59-a347-b4ab424f37ac_cf63252c98074867b0f64cf96b1be7c9_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH FUSION RED - 42",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO26012406",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>JORDAN 1 HIGH FUSION RED - 42</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 6 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5838852719699_a5f1d1936c7ecae00c91921039e93df1_cbc66a914c554f4da7276ec64bed4026_grande.jpg",
            "0decfba5-72b1-4831-b874-7f6463962b76_8c7452e9cc7342bc884ce67f6a0ec071_compact.jpg",
            "f529b798-eccd-4fc3-a61e-bdb3cdcbf3d9_e9f90a8ef75e4cd1b47efbe5fdb6253a_compact.jpg",
            "d43edb7d-7d67-417c-99f2-51b9dd1e97b1_baa64538137d4407ba4dd3cd0e1bca88_compact.jpg",
            "91659427-0513-4d62-b229-4363bc0f332a_b8ff6d416ee84a7a86d2ea39aa0a68b9_compact.jpg",
            "1feb01c9-01b5-410e-8a61-4d9cda6f62bc_7ce74f3c796f44a2aa1a47d2a218ed66_compact.jpg",
            "9ff85427-63b0-4ba9-a073-a56d6b5615ca_3bfca86db5b94fe3b3fc666cd13efb26_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH GAME ROYAL - 37.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO17012402",
        "price_now": "1,400,000₫",
        "price_compare": "1,600,000₫",
        "sizes": [
            "37.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>JORDAN 1 HIGH GAME ROYAL - 37.5</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5414755294281_c51c25bf7e72cf9d27cd80f61031f3b5_ef10be89a6f44716bf6f1230f214f8a8_grande.jpg",
            "298c2df1-7457-4cf4-9787-7e481759ba83_8c70f8bf7aa148e4b219fa4733a3aa06_compact.jpg",
            "b9865d3a-9572-43df-bde6-493a5e77e704_c098d12de41c49939113ae332e7a4eee_compact.jpg",
            "3316d152-168c-4298-96e8-06d765c2c962_c06e9917950640268e16d954ae64ffc9_compact.jpg",
            "707355e2-b5ca-4984-80a5-a410a55acfa5_dbc9596b94944e749dc9f3b75da0beaa_compact.jpg",
            "1161f28f-ed91-449c-b56d-82192ddebf1d_3407eafac61f43268a9385a2d3585b24_compact.jpg",
            "9557aac9-f587-467f-951d-68d3424a1030_d6b807521c6147ba9965f2043a94a046_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH OG CHICAGO LOST AND FOUND - FD1437 612 - 36",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO26072412",
        "price_now": "3,300,000₫",
        "price_compare": "3,800,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JORDAN 1 HIGH OG CHICAGO LOST AND FOUND - FD1437 612 - 36<p>Tình trạng: USED&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5905900682703_79ce24612fff9d0092e2138b7e54ef2a_ae6df1453727434391d867be4495811b_grande.jpg",
            "0a106f3a-82ba-4eb9-b594-0da1c8c5d254_d7e82bb0f1d7454fbddea8758645390d_compact.jpg",
            "9fe46fb2-ca12-427c-844e-6c9238a09aa1_4fc927fa22b3440886973d74cf3cd31a_compact.jpg",
            "ac9830ea-4d02-41b1-8600-a7448906df33_da055ddd39064ff6a07a78aa46974c0a_compact.jpg",
            "4a104f40-d409-422a-b7f4-5d8001e3e30e_3cdd6ac814164534870f28f27b04a018_compact.jpg",
            "21669149-5b57-4c3d-a672-2448400e7fc3_3109de4a68964cb1b20efb6cb6e83e5f_compact.jpg",
            "faa472d6-55ac-4127-a802-6f21891e6257_1e95d063ce42419a80c5657b11449038_compact.jpg",
            "ee08b158-7946-4f3d-a9f1-7ec3e06ec42e_3f21a0c27b594a30ad568f0fcbdd1da2_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH OG LIGHT FUSHION RED - 555088 603 - 48.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO23082406",
        "price_now": "1,500,000₫",
        "price_compare": "",
        "sizes": [
            "48.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\"><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></span><hr><span style=\"font-size:15px\">JORDAN 1 HIGH OG LIGHT FUSHION RED - 555088 603 - 48.5</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span></div>\n\t\t\t",
        "images": [
            "8fb20de6-861b-4d34-852d-6d7d5c19fda6_0ba06b8be9dd423eb8d531c0f8d86ee1_grande.jpg",
            "f4653c9f-3a3c-4250-bf89-18483ac28d85_87dcf823797a4b478fab3a7d37fa93d6_compact.jpg",
            "eefb51bc-d4cc-469c-a806-313fc6602be5_80e5955a8daa4c59ac3b0f77cfca08f8_compact.jpg",
            "55020bff-ec94-4c8d-be31-bebf5eb56edf_174f619d2aeb4143b6d2da4c1f9ba840_compact.jpg",
            "20220654-e0a7-449e-993b-4a3b66af8d2d_23c692b0b4064fffad49e6e9f56c113f_compact.jpg",
            "3dcbff67-5d6e-42e9-a610-9739b61cb3e3_092423436bb5431ea834f7551f6cdada_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH OG UNC TO CHICAGO - CDO461 046 - 41",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO26072418",
        "price_now": "1,600,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JORDAN 1 HIGH OG UNC TO CHICAGO - CDO461 046 - 41<p>Tình trạng:&nbsp; USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp; tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5979760275518_6aa3b912d27915b2c6d2dcf1f08d49f5_8cc5b1e6808d4160a0ffdb21357f2127_grande.jpg",
            "b1529690-00af-492b-8182-1a3f41d582dd_895bded2282048aeae4e657e5feee462_compact.jpg",
            "013352d2-3409-4e9c-8dd8-8388de7afecd_7ec438166fb14a92b9f0ddabd3dea73f_compact.jpg",
            "7c830381-712b-4dbf-8bcb-70fc47673a45_5a09afad67314388be466d4eeec43384_compact.jpg",
            "ee308494-b9fb-4987-95bd-d1d71c298748_1f0d6255061c4267a88f0941c370bd41_compact.jpg",
            "ed13d52a-2e54-4bbd-9527-175c0ae9a46e_87a9ca3b9a1c4a46885e86ad970ecbb7_compact.jpg",
            "be6c03d9-8d96-4a65-857a-4c96e5147e76_0bd3d89abdef4eff8f92a854dddabd37_compact.jpg",
            "e878381d-ce6f-49ae-ab5d-c0c4fc6b3f3d_63538702112841e790d67d0fd2a5c0a8_compact.jpg",
            "1b1da502-01a6-4b21-8b46-27e742ceb4bf_6a9903b8e1644884860596cb44c5a48b_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW ELEVATE FRENCH BLUE - DH7004 400 - 43",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO12092411",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW ELEVATE FRENCH BLUE - DH7004 400 - 43<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "e0a62ff6cc596b073248_095929a5e27a4ae894c80950f35b4b75_grande.jpg",
            "54df35a2-739b-4e38-b90b-aef0fb9e24cd_a8f4cdf5017140cebe6a03638e7d3721_compact.jpg",
            "c3eccaee-888e-447e-a366-1adf1619694f_27fefe5f5d524f348284f1603adb8eef_compact.jpg",
            "c17c9ed2-1e8a-4721-8753-ff3c822abb20_1817f52c328644dfbbc0988896709db4_compact.jpg",
            "1529534f-8e86-4a71-a413-06e21cad4949_f235f4156446436eb990a89d9fd71ce3_compact.jpg",
            "733236a7-ed2c-494b-a07e-38b43aba4c58_79c31669efb348a1ad2835e1c5abda6d_compact.jpg",
            "a2d802a4-4dee-44db-b739-ed745da4ce3f_b43f28f9598a47c0b3270b304ba30b92_compact.jpg",
            "929caed3-d597-4623-8e25-b6b7cb1b4ec0_4d0f5e35bfe04de8961a0598a16a85df_compact.jpg",
            "5d447cd4-dbc7-48d6-b67d-95e464f495f9_0697f6905a9047c7b4f0d1c76cced2c1_compact.jpg",
            "cea45a8a-65c3-4e4c-b78a-cb569051238c_a3c423b39ae944eaab084fcd91cee3c7_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW ELEVATED BRED - DQ1823 006 - 38.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO21062420",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6&nbsp;năm tuổi</p>JORDAN 1 LOW ELEVATED BRED - DQ1823 006 - 38.5<p>Tình trạng: USED&nbsp; -&nbsp; FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 3 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5838850976561_1755943516467acc3fe2f7d9ae2b0fce_925030147ef447b49c403e481b693bef_grande.jpg",
            "802640cf-6fff-49ee-85b5-74542c61f772_ad33d4b58bed4d80b06a417372394fa7_compact.jpg",
            "4d0fdb00-54a1-498e-a941-0cc4372755e9_88ce7643ac6346dcb550a1a4ecc2fad1_compact.jpg",
            "2875986d-42ec-4ea6-adba-e0ef83c65a7c_3819f7fc35f44977abc346552ba628bc_compact.jpg",
            "ccbcdbaa-b6ef-4184-99a5-d35f9c12fa83_96887dab9f3c482180363e72cf738460_compact.jpg",
            "12845fc2-f4df-4784-859c-5268d3872463_cbb5d9f88d8c44a8ae4da6a62e26d1ee_compact.jpg",
            "69b2e164-c677-4a87-ab0c-50bd9306a1c3_53c7ad8a4c894c4b8f554cd6c68cba0a_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW FUCHSIA - CK3022 005 - 44.5",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO14102412",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW FUCHSIA - CK3022 005 - 44.5<br>Tình trạng:&nbsp; USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "838067a6-b7e3-4941-999f-bab1dc605aec_fadbf111775a4369a5bb2e50a63aa1ad_grande.jpg",
            "69a3d321-61ea-4dd3-9ae9-3df0f06104d2_db081acaee624c90b5f7728068c6e10e_compact.jpg",
            "2794033e-7c8e-4f57-a199-9e71a2910282_781c8e42afd04deea15679184dc0676f_compact.jpg",
            "d3087bd6-702e-4108-864e-b5fff5f6d0bf_1ac1b8efee08446f80c458c77bda2eb8_compact.jpg",
            "bfce34e0-0bcf-40d2-8057-7b9fcd44d8ce_374aa42b5c4f4542b01a421a3614cc6d_compact.jpg",
            "0d05aeab-6af9-49a9-9a7c-f29f8f790095_56cd30ff4a1d414db790ed0cbe41c115_compact.jpg",
            "00509e27-68e9-44b8-be2c-274e014ed275_7516d62eea504bd8abd3bfa15de22ff9_compact.jpg",
            "ef4502ee-f972-453d-9b80-6df906e15a6a_a8fda4bdf8f942f3a20dd86b99747f0a_compact.jpg",
            "c718ef19-bb40-4a7d-a9e8-a020d102647f_29050bc2f2cd4051be59c6c294d9d5f9_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW GS BLACK FIRE RED - 553560 063 - 36",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO21052421",
        "price_now": "980,000₫",
        "price_compare": "1,400,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JORDAN 1 LOW GS BLACK FIRE RED - 553560 063 - 36<p>Tình trạng: USED - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5883024193628_7d23d0ff6eeeca70561d5f316d66a258_39e9101e969e40b1bd06e34b95afd6d3_grande.jpg",
            "cf69e7cc-11be-4681-be64-1c0a68507097_9ab265e53e964e66bfe03e16cbb1766a_compact.jpg",
            "f531e73d-8da8-4c74-9103-8174fd4d0af7_73b1f506da774f808b0336842659f49f_compact.jpg",
            "f1785912-845a-4ccc-8c30-aaba4dfcd679_d91d4b653f5b4d778a8027216c6441ce_compact.jpg",
            "b1657f4a-5140-4d46-9f29-ee6cd83f9951_ae18e047b01d4af4810a6412a7aa17c3_compact.jpg",
            "1ab617a0-4475-421f-973e-316cf85715e1_875f6baaad224f5d8737810285042101_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW OG NEUTRAL GREY - CZ0775 100 - 39",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>JORDAN 1 LOW OG NEUTRAL GREY - CZ0775 100 - 39<p>Tình trạng: USED&nbsp; -&nbsp; NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "db92a6a01338b066e929_9c4c0b70bc944b8d9c202ed83da23351_grande.jpg",
            "6b6e07d7-b870-4d64-8ec1-df78c2096553_e6cea848f6c64822aeae755e3de689ac_compact.jpg",
            "a8139cb8-feff-4e84-9757-3da4a8fa63e5_e64142d43fe8407ea9327211ac328c50_compact.jpg",
            "11052287-004a-47df-aaa0-1cc5934263c8_31060bf14601442ea00b6a047260ea72_compact.jpg",
            "94cc098e-7f6f-4a5d-815b-1d8b8c331edf_b0d8d4d63e124c7e804bcc8855c78281_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW PANDA - DCO774 101 - 40",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO11102402",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW PANDA - DCO774 101 - 40<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "5ccc687bbd4e04105d5f_e02bb83fa2284d579e601ecb01e69d1e_grande.jpg",
            "e0bfd414-a3ab-438a-8758-fe7cb818aad8_3c28438a0acf4ea590af56bd028150d0_compact.jpg",
            "d3588300-e60f-4f2e-b867-6aecdc7b8a77_437c1b519a104c4aa64a93aa0b236a1a_compact.jpg",
            "ba298b5a-3e50-4fb0-affe-1f79d5eeb051_df2c4db542744a508e3ce8e39ae14030_compact.jpg",
            "1dd55e0f-5d16-4863-a070-762cb54e1864_7fa251b4f40642f68bc9674e873dc041_compact.jpg",
            "30ccac16-4cc6-479e-b3c8-60fb308f2056_0453d437288a44c6ad8cd35eda0b5b5c_compact.jpg",
            "c91bd30c-c37a-4f8d-b224-269ebdec96c1_f8bb6c1df0544f70b0b1d3e639871a1e_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW PINE GREEN - 553560 - 36",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO19092416",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW PINE GREEN - 553560 - 36<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "0e71de8dfe8258dc0193_9ad722c162a54c98b7dde2da72f8110d_grande.jpg",
            "b0a9aa25-81dd-4001-9dca-f8a1b53986e1_7a82f71329094812bfa3bd13ef6e12ca_compact.jpg",
            "fd841543-9d1d-4574-bafe-b28a0626a1ff_112f5e6e6e394aaaa65ae59fa4c9b27c_compact.jpg",
            "e855fe75-f414-424a-9c22-0cc20dc185c7_ed97290b9c3f4ff7b0d7fd0227b0fd70_compact.jpg",
            "47eef13d-e7bb-4894-bd9a-1be5d0080958_58feb592d5094a3cb8ccd6e8c3ad45a0_compact.jpg",
            "a4dca34e-259b-47b1-ab8c-d56937e3eb0c_0d75780ba99d4b49826c8f7ba5adbf3e_compact.jpg",
            "aad0a7b6-dab5-47ce-9888-095c8ff8ac45_862286398f53439ab9057137afacdba6_compact.jpg",
            "f515a3c4-cda8-4810-ab99-4147becd880c_2b0ddb009d7543c9a34aad51beeca540_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW SB UNC BLUE - CJ7891 401 - 43",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO19072413",
        "price_now": "2,800,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>NIKE JORDAN 1 LOW SB UNC BLUE - CJ7891 401 - 43<p>Tình trạng: USED - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883024746164_9ba2dde2d8b0c77fb1e0d9272ed2ae0a_e378d107c4ea482bad6c6979581f7f2a_grande.jpg",
            "7b39da45-edf2-4d50-ac83-0a2a97e1598f_2b62d730a4c0420eb0f86c8e4074f099_compact.jpg",
            "3703fc86-5e93-4065-9f3c-da53c94ec7b4_3b0d68fe28a74af48b1d40f9246ac1f5_compact.jpg",
            "d9c77639-58a4-4761-a539-e0b556a175d3_1520d4ae93cc491d854d70e9ac7deaae_compact.jpg",
            "250ed387-88d1-4ecc-b6e8-91009e99afbb_9b1c576f51544488abd42be91e5c30a8_compact.jpg",
            "24c1f13b-08df-41a7-93e6-2a8fa2823d2b_94ca40264aae4500b8e12dd2f3466f04_compact.jpg",
            "2084d970-3e34-4dca-91ca-a0137b7b8bc5_0905dff90f3f47fb9f863f1e4b6c660d_compact.jpg",
            "e0a474eb-a4fb-4df8-a2b7-8941edc23741_fc404c3088e64cfbad339efd7f767d0e_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW SE CRAFT LIGHT OLIVE - FD6819 300 - 40",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO15102401",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 LOW SE CRAFT LIGHT OLIVE - FD6819 300 - 40</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "7fa6375d30be89e0d0af_2f26bc3e69d842bfbec2cdc365bd1060_grande.jpg",
            "255037da-fa99-44ac-826f-008019ace429_69006fd758114eb392322e8c40511c8f_grande.jpg",
            "0e7014b3-65c1-44a3-bacd-4014febd7209_7caac28d24564fb383980675edc5d89a_grande.jpg",
            "ace4845d-4572-4961-b71e-8d75f16c9515_4066a253027c47a8b44d0a667221442c_grande.jpg",
            "c3dd96e6-dfdc-42ad-91df-4109bc245275_6d1d4c45e7984c27a741ad9979e05b02_compact.jpg",
            "d6c8319e-e086-4563-9c85-986a02c429c6_08d1fa3c0128421886366719fde1dfb4_compact.jpg",
            "ff6219a8-c6a2-4020-883e-8da67b9436eb_1002db3ee546433399e522e4a3e74af4_compact.jpg",
            "47eea133-dcc6-41aa-91e4-a61f42caa1f4_c1ca195b1714459eab34c558d7e7a590_compact.jpg",
            "00ad466f-9a7b-4708-a69f-2caf4587a09f_3b235f676b76429c988ac39d64d02fed_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW SE DIAMOND - DH6931 001 - 43",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "BO19092436",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW SE DIAMOND - DH6931 001 - 43<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "c12bc99e4390e5cebc81_d3d6ca3a7b3b4d5b9a4f2d80dec836e0_grande.jpg",
            "f90fe829-5e5a-4837-b715-08ccad04efce_625b5dbdc2e544afbcbc1fcb97889be1_compact.jpg",
            "e7b29211-7e82-4588-8321-40428493142d_7b1460d987fa4394b6bf5773bbe1c3c9_compact.jpg",
            "5bc7d8ea-5224-4778-9c2c-ac018df4e16a_e64b51617ad745db9a24cbb2ccf57154_compact.jpg",
            "bb4108c8-dbff-4b3d-96c7-1e775f798b33_5b9ad97e85544d57b1ae14523126d5db_compact.jpg",
            "64e3e587-dca2-459a-aa7f-cae4311c6852_001a91a5fe3e4d8bacd6213d3defc91f_compact.jpg",
            "8c8670f6-a9df-4a2e-b789-f2ac0016a3f8_9f42fcccca7448778e99fa4b3c575624_compact.jpg",
            "b2e693b9-665e-4c1d-8d7c-2c3a25009114_5de6810d50fd424d9a14c907caf602db_compact.jpg",
            "f2284af0-d368-4b82-99a0-3d192bed8ae4_8b58cc29dea048008a1673176ce09aa4_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW SE GS SPADES - DJ5186 100 - 38.5",
        "brand": "Jordan",
        "type": "Jordan Used",
        "sku": "",
        "price_now": "1,500,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 LOW SE GS SPADES - DJ5186 100 - 38.5<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "884ae1318d352a6b7324_d43f5b49ce3b484eb1534dc5dfc78b07_grande.jpg",
            "ba902454-20bd-46a0-823c-1f041e33dd5c_6e5cb1b54efd472d84a3ba4c9eb85fc1_compact.jpg",
            "5d42304d-8bd1-4e0e-a382-467167dfc3a4_8c152734958b4b7bb096081c17a9a0b4_compact.jpg",
            "407f462d-f047-440d-b037-762bfd18ff4a_6e748ec458134759b811213118bdb4f1_compact.jpg",
            "28008661-7b97-4682-939b-7c4a652cf1a6_f576c48b73434e5a8714473677c53cdd_compact.jpg",
            "3ef793c3-f7eb-4d82-bab4-aadb55547345_b50df55081424d59823044045c8d65e7_compact.jpg",
            "6fa891db-f4df-4936-89c3-ecd23c6cb5d6_46b982be999d4462b5a5fffff1af277c_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 LOW WOLF GREY - DC0774 105 - 40.5",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO15102405",
        "price_now": "1,950,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">JORDAN 1 LOW WOLF GREY - DC0774 105 - 40.5</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 1 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.&nbsp;&nbsp;</span></div>\n\t\t\t",
        "images": [
            "z5979759725823_9b32822a78144986dd3591f6f3fa42bc_3ef2b27ca2654e1ca6cfaada9cc4fe32_grande.jpg",
            "6a65bc39-1e4f-41f7-b317-d7f091675219_02abfbfd91484ec88c73e80fd5e1dcef_compact.jpg",
            "7313e506-9ece-4ec3-a1a8-2049b70be9e3_7d16399627fe40c88ef1d1a16cae53d4_compact.jpg",
            "4b68e9ca-f8e0-43f8-bf50-b147f46ed642_491e2b4e17b9412ea604c9ebeaa8c2b7_compact.jpg",
            "2fb6124c-5992-4ed8-b241-5a720c221fc2_7478d18d4d8640979d2234c1eefad052_compact.jpg",
            "fbefa9db-a437-4028-bbe8-3d697b98f9dd_b922c241956d445497140643ff3589cd_compact.jpg",
            "3acff975-7930-46d7-97fc-19daffc48e75_27a284dabc2e49ac8fe18d204f3621d5_compact.jpg",
            "30132372-450b-4db2-b9e5-f562af1e2a09_e5645459e7344be685171a8c8c3f11b6_compact.jpg",
            "559a2fb0-a557-440b-8c7a-8c96e5baa7a8_d7d8cce4f3a1499296d3e2755e73befe_compact.jpg",
            "c9bb9f41-9217-442a-9dc1-ed760c67a07c_396bacfbb7884f2ea036442cd46c6786_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID ALTERNATE BRED - DQ8426 060 - 40.5",
        "brand": "JORDAN",
        "type": "Jordan Used",
        "sku": "BO14102417",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN 1 MID ALTERNATE BRED - DQ8426 060 - 40.5<br>Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "ff6a407c37a58efbd7b4_aefd10e9d1e04637923fc3e05a587313_grande.jpg",
            "cc5a7165-f734-4364-bf07-30bc9525fcfd_84c45121af684e2bad852690b4c9b627_compact.jpg",
            "a34cdbd1-2537-4f42-815c-6e0a65428f76_f566ef58d73343368dfcba1d3ea401a6_compact.jpg",
            "592ed54c-5818-433f-9f75-0d51f13b94bc_7c28de318f8f46a893829f1f065b8f8f_compact.jpg",
            "b6cfaef9-84e4-4a15-95af-1844eb2c70b3_acf3ac71c24449998da67eadbcd7ae34_compact.jpg",
            "8acb1898-11b7-4f69-be48-1114bcb1a29e_ff6880e22bcf46f9a345ed8c30e83ae4_compact.jpg",
            "56b6e33b-b9d9-4718-a8fe-4d045a83e094_7340490170db44c39571212078dd418b_compact.jpg",
            "db5e2f26-197a-4ea0-9076-a818679aea9b_26f8d673080b4066abcd4f63b8323d1b_compact.jpg",
            "61013368-dcfd-4bd9-ac7e-c8729aab4831_21d323a52de84621918f387885a33710_compact.jpg",
            "30ab1389-7526-4c13-a48e-acef1f0886f9_2b614b41b44844ce918e1c42426a8e4a_compact.jpg",
            "69d5c73a-5678-4df2-8807-ab74e681de55_1dda092f8d7e4140bf1143727d4f4134_compact.jpg"
        ]
    },
    {
        "name": "BUCKLE BAD BUNNY LAST FORUM - HQ2153 - 44.5",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102455",
        "price_now": "3,000,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">BUCKLE BAD BUNNY LAST FORUM - HQ2153 - 44.5<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "8ac915875a90e2cebb81_0575d3356cb4495b84d6ec253cb10dc1_grande.jpg",
            "c334b74b-1279-4641-89d6-f2ff741df836_7796a10cee4e4539871b15b8c21911c7_grande.jpg",
            "dd686af3-9fe8-4efc-bf1b-973514ee4bd3_bad14c9203994a80b086e7744b426f03_grande.jpg",
            "2217df1b-ff31-4c00-898a-c38a76bb797d_c209ffb8504f48eda83388af41ad712d_grande.jpg",
            "2fbb25c9-30fa-47fd-9160-d01a4cb8df5a_2b8b143485d446318088638231aef7a2_compact.jpg",
            "c0c902b9-89b5-4af0-8405-68edf66d9296_4d356632a0544b9f8b00a66e7fa6bd97_compact.jpg",
            "18d34537-7197-45b2-aea2-4c9f8495c5a6_bb283fe606da4202ac35731fe4e011ec_compact.jpg",
            "6662d47d-11d5-482e-883a-56eceae56e21_abe142af538f40e9ae72f28175ebe39e_compact.jpg",
            "d5f17f0e-b871-41f8-9682-5986d7ee299b_97e4a78603894a7e81d8c40a1bb41d2d_compact.jpg"
        ]
    },
    {
        "name": "KWONDO 1 GD PEACEMINUSONE - DH2482 100 - 40.5",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO27102444",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">KWONDO 1 GD PEACEMINUSONE - DH2482 100 - 40.5<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "9ff7acbae3ad5bf302bc_067b16ed25e143dc9685e8d24271fb81_grande.jpg",
            "243261de-8bbc-4cce-adc3-71d89083d6a4_dd1027bb12b5425fb1634c43eec34494_compact.jpg",
            "9ff861ac-7234-482e-b0cc-3224d1c50186_84fb65212b2e4fc696bd24b5fbaf07bd_compact.jpg",
            "59cbabcd-1934-4e9a-adf5-6cd848571442_a47340b556954d31864129882222283c_compact.jpg",
            "41c7686b-9dac-4dac-8545-ed85f0d5a928_74e20d95d88346119964d5caada2ee49_compact.jpg",
            "55cca00e-835d-4d0f-bfbd-5b8867579be1_ff42a823962643d1a273d9c10958f66d_compact.jpg",
            "6e0ccf56-5329-4f1a-bdd4-bb69f5c51ebd_f3aaaed9664e432e898975cfa91b1fa7_compact.jpg",
            "2f120680-549c-44ac-8b5e-73d14c7c544c_a7616c05e13a4afab5c27c6a74b116ae_compact.jpg",
            "a3e119de-7427-4236-8580-fd53b4590b79_8d4fde2fc8f54c0c93800a72b14a56f3_compact.jpg",
            "5917bee8-4b79-40b0-a9fd-b521e3166f29_049b27212270489cac358599e8ad2c1b_compact.jpg",
            "f406c51d-227a-48ce-b836-3e848061c436_a7663b403ea34351a7369860837b4d5a_compact.jpg"
        ]
    },
    {
        "name": "COUNTRY XLG - IF8078 - 45",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102442",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>COUNTRY XLG - IF8078 - 45</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "606a4922de2e66703f3f_7a96706a34ab472b90724627428be093_grande.jpg",
            "e9c04d5e-6ef2-42aa-bac0-aac40f72fd6f_3988a9d4a86b4926b681d01ceb800d39_compact.jpg",
            "09fc7501-8110-4f68-b8fa-63663bbdc638_1f83c01b69a14c9cbcafcc9f4cd9eded_compact.jpg",
            "a593429f-af09-42f1-a803-5a9ffeada380_86d1bd7853d44725b798cc758a8ab095_compact.jpg",
            "6d15dac6-e4d6-4cc6-ab8a-a679d1aa71d6_7e65eb1547ec4f579030815c0d1998f0_compact.jpg",
            "8b6ca92e-b61e-4a6b-bacc-6b2946b8f0ca_6c1596072bf3435e9f893eb89520558f_compact.jpg",
            "dd3256c5-d4c2-4402-9076-07811e7a4618_d2e929659a3c452bb355d75bc2dd373d_compact.jpg"
        ]
    },
    {
        "name": "COURT VISION TRIPLE BLACK - CD5463 002 - 42",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO27102440",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>COURT VISION TRIPLE BLACK - CD5463 002 - 42</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "068966fff1f349ad10e2_a36a56c855b84e0bacd87913fdfbc73b_grande.jpg",
            "0c1e7458-4b5e-435a-a0d7-d39c162e7337_9b3943a398ee4b5cb1c20a3e58534e6b_compact.jpg",
            "3d01e9e7-89c4-4b1a-9a5f-009b63f66578_eb0fd77c3840457ea341f2eab715dc35_compact.jpg",
            "f737c105-83e2-4b05-92e1-6695eaf8b828_0ff1ad3f895c48428eb855766028f0e1_compact.jpg",
            "d1cd69bd-9e3b-41f5-8ff8-464702c463e4_fad59445879c4212930e6645c85d0920_compact.jpg",
            "e48c777b-3bbc-4a9b-a3e0-5d6ed6fcba27_dd554114c70d4e2aacfa6e13e02bfa34_compact.jpg",
            "4270478e-11b0-4834-b71a-17a4e480cda7_96316dda9f2f4b13bb2b3551df341fdd_compact.jpg"
        ]
    },
    {
        "name": "VL COURT 3.0 - ID6285 - 44",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>VL COURT 3.0 - ID6285 - 44</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "31f85afdcdf175af2ce0_d3a58c22f10e4ab4836d74fdcdbb0cc6_grande.jpg",
            "1898d822-0879-4cea-9eac-f2095d0bc74a_92027275504541cabfcb7fc3634f23d6_compact.jpg",
            "c9b9b7b5-3daf-43e6-b84e-d27f0c934cf6_6c940d14fe964598a5e9a07b5517246d_compact.jpg",
            "3a34bd46-d265-4148-96a2-5858418c4694_3877b2f0fe594717ae42e52f849d229b_compact.jpg",
            "1770d734-2d7a-48e7-ad33-70486b786186_48e86382f24b4b5484d21654473b07c4_compact.jpg",
            "287070bb-b601-4e63-9e56-1c8c3e0fd1ce_3c9f7f23dbd94fc58012ba5b0cf88dae_compact.jpg",
            "6539ac47-eac6-4507-a947-f7f417760e16_20eb2e27196440c4a39f7fe60a158772_compact.jpg",
            "a6511882-6886-452a-9cfa-fa0532937ee2_33856e149c6d4224b21f91e5bb148732_compact.jpg",
            "951f14e7-cb33-4a6c-b4e2-6d9df77e8eaf_e0d6c753b8ba4ed8a8bc219903db2df6_compact.jpg"
        ]
    },
    {
        "name": "WAFFLE ONE NATURAL - DA7995 102 - 40",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO27102431",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>WAFFLE ONE NATURAL - DA7995 102 - 40</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "86a78c681b64a33afa75_c448d060431a48dc86ff91eb87d5bf71_grande.jpg",
            "071400f5-8991-497e-888b-9fdada3ea98c_11ee021b84e441fdb13bc861a586df49_compact.jpg",
            "a548bf25-42b6-4013-9eb6-367a478450af_6030827317404318a84e67fe7c32224d_compact.jpg",
            "db48650b-89c8-48e7-ace3-192ccdf355e6_2759176a99b04b9ba6c26129a41b1f82_compact.jpg",
            "b9fb0249-eb68-430c-8be4-d0fee72a1a01_d981967832784175a2a2f00c3789399d_compact.jpg",
            "7a28db0e-6878-4235-9ef1-4717ee7aaa2d_45e7080949cf486cac5a5794c41f3351_compact.jpg",
            "9b3039c4-9b3e-4bb4-a9c7-f44b7aaf21ca_d1c030b4e66f4d9e914d5c2875d9dc5e_compact.jpg"
        ]
    },
    {
        "name": "BLAZER MID 77 NEXT NATURE - DO1344 101 - 41",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO27102430",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>BLAZER MID 77 NEXT NATURE - DO1344 101 - 41</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "2669a09537998fc7d688_e2714eddc95e429696114a8f1cc1871c_grande.jpg",
            "c818c8d2-94d9-4f96-9205-a7cc420ad8ed_b9b8c4ec6c0e4a43876dc38254d7f1a4_compact.jpg",
            "2dfc1d3d-150c-477e-ad9a-01c2248cc8c6_3f2e4cfe28394857b260a2432bba0bab_compact.jpg",
            "8027406c-20cf-4954-9a25-63fb7f25fc18_cb7ed8960f7d49319bb92b69c7240e5b_compact.jpg",
            "ddc53590-5e21-4925-be3e-cdd26c790678_f59d67c18e864205a95d20d82144ffe7_compact.jpg",
            "0fd13dc1-00ae-40da-8762-cc83c1947743_3beddcd772814348b77a050f471f33da_compact.jpg",
            "45f91371-dc81-464d-bc4b-6c28858fd36b_3c3ef60e192745f3a9fece223dac6462_compact.jpg",
            "20181c82-da1c-4230-8860-f579b6ed09cb_01612b69faad4826a37def4f4d46034f_compact.jpg",
            "c7eb34e3-00fc-4c07-afee-dd4711cab5da_28db84cec5894eb4a41221d416ee6e92_compact.jpg"
        ]
    },
    {
        "name": "COURT LEGACY - DA5380 102 - 40",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>COURT LEGACY - DA5380 102 - 40</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "f0efa677317b8925d06a_05d9b88c7ae443fbbc9db63f94ead117_grande.jpg",
            "644369d0-468d-42a4-b236-f2f8b1028d19_c5ed7dc8cd804d39bc52450e510a5f0b_compact.jpg",
            "4c3196da-e33f-47b7-a546-cb438aba82a4_c1d55a5a7c9a472b97342e298999e5dc_compact.jpg",
            "8b34c2bf-2401-4fb0-8ba6-211d55ec0dbd_ed26f64bfe184b9aa09e8d9275fbcb76_compact.jpg",
            "46c5ef09-5b17-4d95-aea4-6e1967414fa9_2a9c1fa356ec4d98b8ff38b6b17926b7_compact.jpg",
            "25de6407-7b6d-4009-8c4d-919f32dd0d5c_06e4d6d0228544d6a89252806549622c_compact.jpg",
            "db43c5a7-8a07-42d8-a18e-5c19973c06da_b7f47264537f4dd19801267c24877403_compact.jpg",
            "89274cb0-0151-49d8-9d20-a2b5aa3c6496_3255f5b1f6814227a696c5afe8d4781a_compact.jpg",
            "9b6cb9a3-143c-4fe7-8439-6616261b400b_c178b2ed23a54f2c9596f555552a50f4_compact.jpg"
        ]
    },
    {
        "name": "COURT VISION NEXT NATURE - DH2987 101 - 42.5",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "",
        "price_now": "700,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>COURT VISION NEXT NATURE - DH2987 101 - 42.5</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "75ec8757105ba805f14a_d12144067670465a87ea39f806f32bca_grande.jpg",
            "b9c3d8b2-8d24-4acc-8634-ebced5c3620a_82576da741c34b6caaa6b6d8540134ea_compact.jpg",
            "3f6584a5-8cf3-4010-88bd-d856b15ead21_ee3f628a2c1d4935969fd2d6270b37de_compact.jpg",
            "173d5d37-f396-48ce-aa68-008eed6ea818_98e42fecf047418baaffe749ed50bb5f_compact.jpg",
            "ceef3e3f-f085-4e59-aa53-342c508f8823_c0caf74865c6449fbbe1fb60c1421d83_compact.jpg",
            "7677f8c8-1fa0-4965-b939-3c7f232a26a5_4e044c80faf04a819bbda195b2c25ac4_compact.jpg",
            "ec922257-7b1b-4041-b00c-76c5a083bc91_b18b0104e3b9406e8ca5c7532b6f8954_compact.jpg",
            "a2a6d991-9941-438d-9c5a-a16f5f1fbfb9_b1a06abd0cca468f84df508aaed01183_compact.jpg"
        ]
    },
    {
        "name": "COPA PREMIERE GREY GUM - IF7528 - 41",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102421",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>COPA PREMIERE GREY GUM - IF7528 - 41</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "220a105f84533c0d6542_25edd001c52a49ac831cd394e1c5880a_grande.jpg",
            "e00f6a1e-4f99-47cc-a752-a335b09f8eb2_dbf316e48e2247d694ac9604f86618a0_compact.jpg",
            "4227c6ff-00b9-4170-b441-5b912cf2cb02_8027975e27db465098a6b681a28a972e_compact.jpg",
            "6f903cb7-cccb-4c68-8610-8b41b75fa260_c33d199987e548a6b801be7afb40fe19_compact.jpg",
            "7512355f-bb98-4770-a9aa-8ad88798b1a7_3c604836e1fa40e9a3c1bb90401fb603_compact.jpg",
            "25a7ab11-b9ea-4d67-a446-4645282fd4ed_41f9a4f23545430583348f4be63a9543_compact.jpg",
            "3c1e0359-ab0f-471a-9c0d-c563ebbd24ea_f3a633dc881e4d2d80c7aad85a54e8a8_compact.jpg",
            "0b166747-41be-4d4d-a5a4-a9ac7335ac05_122c78140f7d42f18dc246a63004a356_compact.jpg",
            "cdfe8873-ffb3-495b-9dc5-9e97fd3d132a_fa5b5534a4354d8e9d5e3cd3d9a8031b_compact.jpg"
        ]
    },
    {
        "name": "GAZELLE BOLD WILD PINK GUM - ID6997 - 37",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102417",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>GAZELLE BOLD WILD PINK GUM - ID6997 - 37</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "216ee30a7706cf589617_c4c65229431f47aa92f3ebab0ae4a963_grande.jpg",
            "30187a56-4530-48f6-ae3f-43fdd7ba5212_1674932bbcf54969b4a8e4919db53af0_compact.jpg",
            "ece0fed7-5a34-43f6-8d78-3c12a3d2a52f_9ab1753f729a467e8b6ee0af5a3e416f_compact.jpg",
            "5a999109-1dfa-4531-a6a7-4a03ec371def_0f0dcf91c303405cb4374a75f1b7b037_compact.jpg",
            "2f07850e-26eb-4a32-af95-6bb255285460_da14a2ab748b4d2abf38d2be444b9284_compact.jpg",
            "25cddbbf-169c-431c-91bf-24fcc7ae953c_6a075ad326e5426f8a7796b044ba4ec4_compact.jpg",
            "45d3f205-4ad8-44e5-bc03-00ceec69b372_234c9f18048f47ed991108d7e0178bd3_compact.jpg"
        ]
    },
    {
        "name": "SL 72 RS UTILITY YELLOW - IE6526 - 45",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102416",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>SL 72 RS UTILITY YELLOW - IE6526 - 45</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "557d1b628f6e37306e7f_d35fa3974d30497e959859f669fbe6e3_grande.jpg",
            "cfa7c886-f6cb-40ee-ba69-9eada39c2ba3_1d476695e0744964ae39b10a5296a05f_compact.jpg",
            "839d8d7f-531b-40ac-8235-fef5a02d2a81_6b7f522881a048d987568b38094394b1_compact.jpg",
            "3c12550e-fd3d-448b-bc81-64a4cd01f90d_ca0ec0aa399d44cb9db870cbd9951121_compact.jpg",
            "df564307-4d07-4e4f-bc10-344de670888d_10b760eb2f4a4d6e91e15e8701241732_compact.jpg",
            "f0680318-3534-451d-9016-b3b1bd0abe53_e8c0397a348649a09f2d7230150bc89c_compact.jpg",
            "b4524ecc-0c92-426e-85c5-4e5be00cd84e_f06063c231514995b50ae2ef3de2049d_compact.jpg"
        ]
    },
    {
        "name": "CAMPUS OOS SEMI LUCID - HO3471 - 44",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102414",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CAMPUS OOS SEMI LUCID - HO3471 - 44</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "4d57a651325d8a03d34c_c88af8e4bff8447aac4ac40b1c782aee_grande.jpg"
        ]
    },
    {
        "name": "CAMPUS OOS CARBON LUCID - ID2064 - 45",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102408",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CAMPUS OOS CARBON LUCID - ID2064 - 45</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "065b46a7d2ab6af533ba_e08c6c7b012346f2b562949319f4c7cd_grande.jpg",
            "a48148d6-67e2-4fef-ac9d-dc047be199d3_86ccb280a8d84e4e8b026f9f56cfb871_compact.jpg",
            "7b48363c-b83e-49a8-9a0b-590062d48d7c_1ac44e85ae9f4758a8e9582a157c1709_compact.jpg",
            "3b912ab4-7070-4b3e-903d-431719cdeddc_c301a447027d4dbaad3b48f64b47a98a_compact.jpg",
            "a8dbe359-73d4-4ece-b050-521891c5ce9b_1870e4b251e245afb836f67a35910f7f_compact.jpg",
            "149f3f13-97fa-4b1e-afa2-a7cd5eb5c9aa_cb3c8e4f1c8f4e9a9ae82de1f1225edf_compact.jpg",
            "c29f1d60-5ee1-44cd-a6d4-f3e9e6bd76fc_7a865124a03b454280f447cd0545b5a0_compact.jpg"
        ]
    },
    {
        "name": "FORUM LOW CL X INDIGO HERZ - IE1855 - 39",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO27102404",
        "price_now": "550,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>FORUM LOW CL X INDIGO HERZ - IE1855 - 39</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "483c3db2a9be11e048af_cedd05c1428f42d1bbb154df4c38cf8d_grande.jpg",
            "ef65e601-db90-4994-b79f-32c90525decb_de5270f2444b4d01853257c685b63aae_compact.jpg",
            "6a53292c-8f5d-490f-93f3-c3bee632e6e4_f8439d0d40f54c77bda6e8ec1a2ea0f1_compact.jpg",
            "4dd8b04d-f3e8-44ba-b756-d2b5a6cac89f_0e16d6722b01412e90238364d7aa3610_compact.jpg",
            "47b11ff6-7c81-4a80-b819-b517c7a97d2a_d4d573583be04ac3a882ad4db93ad41b_compact.jpg",
            "fed90456-8954-4a31-b331-3a288be77cdc_5df3ac8746db4af4951773aa8909ac90_compact.jpg",
            "5171e383-b05f-488c-ab58-4e9e3c297730_4f06037891d14302bf09fcdc2f2fb345_compact.jpg",
            "600b61b4-ff24-4591-b248-023b61200bec_a787f6882e9a4196b88934c9ca0ec967_compact.jpg",
            "e85c215b-2a46-436b-8246-7f1851016807_8fafc7aafabe480f8d915694c4e86a1a_compact.jpg",
            "4a49d513-76c5-489e-b8b8-72aaa86c7b73_760d49ac350f44d89c93d4dbd0c156ce_compact.jpg"
        ]
    },
    {
        "name": "SCUDERIA FERRARI DRIFT CAT - 306864 04 - 43",
        "brand": "PUMA",
        "type": "Casual Used",
        "sku": "BO27102403",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>SCUDERIA FERRARI DRIFT CAT - 306864 04 - 43<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "01073a85ae8916d74f98_612696e5aa8e4cc5bb56a0525939fdfd_grande.jpg",
            "ac8a98e2-ad18-4a3c-a5e5-a37ef9f0b33f_3e1d9a1ab1da4620900744c799c44b33_compact.jpg",
            "3ba6a0e7-6ce7-4be9-88ee-9688da16b277_92fe9e03fe0a4411865ca6a6d674fa9c_compact.jpg",
            "d725ced0-c4c4-4d57-b388-571f0c409e0b_28813d32c8374bb1beb243b9f3813856_compact.jpg",
            "96adaa08-fe28-472b-8257-3fc2461b14c3_60e161f4223b493282d48b0911cd64ae_compact.jpg",
            "44044a60-c06c-4016-b1bf-9afeb07547c3_5f2f9899c9964e7686be3065e6384a8e_compact.jpg",
            "85dabb75-35e6-4551-9eeb-2db043fe0f5a_eed58b0d03ab4e1790c5812364328af6_compact.jpg"
        ]
    },
    {
        "name": "COURT VISION GAME ROYAL - CD5463 103 - 43",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102442",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>COURT VISION GAME ROYAL - CD5463 103 - 43<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "c938519a2dd69588ccc7_350cdd0458904fd4bfbd61e87a90fc0f_grande.jpg",
            "d51c315b-24b9-4319-a195-4aa6b6422ecf_0471b9850c804e01a92c0e1485ea59e9_compact.jpg",
            "915b786a-c48e-4ee1-8eb7-fea9cc7b7a9a_d41996db065b4ef8a1f40954a311e36f_compact.jpg",
            "c1639cea-bae9-4224-a90b-1faff892a6f9_817b446cf7c6408b9a1479cc37f54131_compact.jpg",
            "b92007b0-611c-41b1-a135-46db9060d9ad_3b67851782944fb4a800399f250a7b16_compact.jpg",
            "ea26a7d3-b0ce-4ac2-8b4d-4b464ecc9a42_455108b97a7d4837a6929c4f682b0ca4_compact.jpg",
            "e2dcfb4e-1472-44b9-9c4a-5a6b2b87404c_a646f66cc036483ab4a264b70a091673_compact.jpg",
            "e52f7175-2643-4fe4-8e8a-114ed0b0481e_157064a76e5f42d8b2db3eca521e0ed4_compact.jpg"
        ]
    },
    {
        "name": "UPTEMPO 96 COPY/PASTE - DQ5014 068 - 43",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102441",
        "price_now": "1,950,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>UPTEMPO 96 COPY/PASTE - DQ5014 068 - 43<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "edfc765f0a13b24deb02_b444385ccf77434fa125908c0e322316_grande.jpg",
            "cff05516-a688-4fee-b152-1b0838a70166_6b754c24892c41f4bc2c0b15ae60c656_compact.jpg",
            "bfa0b32d-99fc-40d3-b001-1238aad18f37_07ef0b1e13764898b6213d9f37bc7703_compact.jpg",
            "3b20726a-5118-4f3a-b168-9d32506df090_88de53cef4134483a70d12a33a379238_compact.jpg",
            "0410de54-fa39-4ac6-aec5-7ace508d0649_77988f6e9d77422ba5ffa780069276d1_compact.jpg",
            "70b77fab-5bbf-4175-98a7-c0b9e6c71856_f4c9495bdfc1418b973fcb4ed87b1925_compact.jpg",
            "2ce3d737-e7be-45f7-b131-544034424722_bde2b3125e494a2185fdfe0c457b6dfb_compact.jpg",
            "3d044a36-98e5-4620-9d19-98cdf313052f_d6483cb0995c4241ac75c767bf1f8f3c_compact.jpg",
            "221e5fb7-bf0b-407b-8089-d3c7760b8629_cbe4678539b649ad94338d630c0da759_compact.jpg"
        ]
    },
    {
        "name": "BLAZER SACAI PATENT LEATHER - DM6443 100 - 44",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102439",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>BLAZER SACAI PATENT LEATHER - DM6443 100 - 44<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "8939469b3ad78289dbc6_94d3afcbcfc04b71bdae71d05028b196_grande.jpg",
            "b6ce5757-8b2a-4768-9759-61032a18d36a_04a99b58f22d4320bdd4c3a83941eb44_compact.jpg",
            "40c9fad5-5f21-4e66-9d25-2fa6f19e7b15_aacc420b6e814c0797cea4fb1887345a_compact.jpg",
            "7f596e08-ce86-420e-8766-8943c7104c89_0b11d86c992d4295a7c43356b908ebb0_compact.jpg",
            "00c3a221-6aa3-48fc-9818-a99e7f9cb91f_4d166f1519bf4e2894e9ab5fbb6314e2_compact.jpg",
            "eb3e40e0-21e7-4319-8d34-0328789761d8_dcb3b3c53c47477c9a966b3222483d4c_compact.jpg",
            "69de6ae2-552f-474c-85cf-3e9723f031f1_ef253662a2b34c14871d23e8e49c8fe6_compact.jpg",
            "092f3eea-29a9-4aa5-bc73-6813bbf79196_e13f40bc31e740afb377c5a7f60da453_compact.jpg",
            "74ee34ef-93fb-4b9f-9f21-2b5363372f6f_6494c48d0c4943b69d4ea273df998824_compact.jpg"
        ]
    },
    {
        "name": "PUMA SLIPSTREAM MIX - 388635 02 - 41",
        "brand": "PUMA",
        "type": "Casual Used",
        "sku": "BO22102429",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>PUMA SLIPSTREAM MIX - 388635 02 - 41<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "2b04b5a6c9ea71b428fb_10b44242bec74d4b9f956d674a7a8875_grande.jpg",
            "2b3717ff-280f-41f8-874e-ac80111363f9_1d3083fea0734e60a67e51ce27b17ebd_compact.jpg",
            "6275818c-db33-44fb-b61c-866096b315af_8e24d5cd517443f0b9cc9a7a87162c7b_compact.jpg",
            "f0aca1b9-ebc7-43c4-89d4-879bd42964eb_d45b71e6d76e4478af325edc82ffe8e9_compact.jpg",
            "2e293f9e-b750-4423-8946-5acb83ea66e5_5e393234ccc042a8895ebaaeabe299a2_compact.jpg",
            "8259ecf0-7579-473a-87eb-42794113afa3_2ec01431ef65413bb422d9b602a63c23_compact.jpg",
            "7e0d1261-1d31-4812-a88d-247ff0633eaa_54b4f2257df042e386527ba2d77842cb_compact.jpg"
        ]
    },
    {
        "name": "ORIGINALS CRAZY BYW 2.0 - 542759 - 42",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO22102426",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>ORIGINALS CRAZY BYW 2.0 - 542759 - 42<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "c94521e05dace5f2bcbd_ec248b41b5f34135942b0fedcdd0ceb4_grande.jpg",
            "ac1f5537-ed59-46d5-91de-1a7a42187552_4fd4e7e8432c4131a5af4c9082412532_compact.jpg",
            "8f31c7dc-ff89-4c87-8299-a84427a2373c_cbe8a582ce7d4e9894eb888e467be488_compact.jpg",
            "db50f857-a4f2-446b-a46e-5be3af253863_e4900f0f119649b89f30612b19f47e54_compact.jpg",
            "eef3c813-d384-4f95-8ac7-dc612da3e454_e65aace0cff642d7a2aab52eac65b7f8_compact.jpg",
            "5dc58ce0-9659-4998-b39b-87aee4645120_13979f4bf7d04c54abbc865eeb30cfd7_compact.jpg",
            "dec2b24c-dcfe-44f9-9c3b-f458a55dfd38_898879b2cca64f72a11c7e2ff095b9ac_compact.jpg"
        ]
    },
    {
        "name": "CAMPUS OOS CORE BLACK - HQ8708 - 41",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO22102425",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>CAMPUS OOS CORE BLACK - HQ8708 - 41<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "055ac086bcca04945ddb_33fb970a93804dcaabb834d514a617ac_grande.jpg",
            "712d72cc-4a5d-4ac1-ac51-1cce82420b3f_652ac3e159e14b2aaa64812c861cc1b8_compact.jpg",
            "aa6f11ee-7bb8-452a-99b3-251ede40ff5e_e44c667b739d43c5ad81b4a71d48b719_compact.jpg",
            "1cfd7c9c-2991-4f98-8583-f54c219eb76e_a5f0cb623af74e55a009a00002e61316_compact.jpg",
            "2b6833ae-36e6-4401-81db-3db397f1c65a_2b79b15ce6b54acebffb5e14ccae88d7_compact.jpg",
            "5674c70a-cc4c-42d4-a1e3-f5eab276a564_5eb7affc025c4c74a48fcd433d65f695_compact.jpg",
            "3fce1e7d-bf82-4d79-ad23-8b22647cfd50_ea73a97cd00548fea175da016291c923_compact.jpg"
        ]
    },
    {
        "name": "BLAZER LOW JUMBO SAIL - DN2158 101 - 40.5",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102424",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>BLAZER LOW JUMBO SAIL - DN2158 101 - 40.5<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "af4a89e9f5a54dfb14b4_5605cff4945843499219c64cc32499f6_grande.jpg",
            "977912cd-59ef-44c9-83c7-3ba76a482d06_fd8e615e039344aa8c528eb93f34aaa0_compact.jpg",
            "6fbca132-457e-48c1-95cf-6d503c2d0e6a_165b25804854449aa76f26ad78afbec8_compact.jpg",
            "de636d76-2701-4e41-b884-3d556dfa557e_947a7dfc6b1744df9ad32e34a9ee11e9_compact.jpg",
            "08f5a3f4-f1ec-4a4c-9e6a-dcf8b84a0294_7beb09bf388c4379813444cec5c114b2_compact.jpg",
            "76c41eec-ffd7-4811-a573-68f1260c4ecd_2428853803f44e59abd74cb3e6a1e136_compact.jpg",
            "ffb1131a-6462-4194-b471-a3e1673132ca_d5e397c3b6ea4665a1369a6ccca95ba2_compact.jpg",
            "c7277f3a-9d55-4221-89e4-067965bc3472_361fd7063f6a4883aeb001855ea2620b_compact.jpg",
            "fa62f7ba-0ca2-4043-b1e2-f1fc1c3c9906_d61e7d2e312a49cf8cec1b29172a2844_compact.jpg",
            "a167a689-1040-4fa1-bc80-7fdae8199c0e_0af62775448349df871d7a803a48a494_compact.jpg"
        ]
    },
    {
        "name": "ULTRA BOOST DNA 4.0 CORE BLACK - FY9318 - 40",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO22102423",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>ULTRA BOOST DNA 4.0 CORE BLACK - FY9318 - 40<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "caf70c557019c8479108_3f709ba2d23147b98bd9db659fc2fcf4_grande.jpg",
            "9c93b46b-653d-40bf-b6e1-867da47333e1_224e3da40c4343ab8eba238303c37777_compact.jpg",
            "dc3e6e41-8c9c-464d-8d36-b9813e4a0310_c7441309b5b1429da43f9f59f9967c8f_compact.jpg",
            "6d026cee-2a41-40ea-9154-f0c1a6cddbb4_8dd7c3b9471840fc8479e093337cb4ee_compact.jpg",
            "129f21e3-930e-475b-a80d-b0357d674f17_6b0cbad0523b4b17856fe256dc5766a2_compact.jpg",
            "bbf8472b-b5ed-4988-b88a-389f65fea75c_9ca85e3be3ba40baaae87a8baa1bf9d5_compact.jpg",
            "947b976a-d2cb-4525-bbb1-9b7fefbebad0_5799203fb8a04d01b70c96d168ae3fd8_compact.jpg",
            "8db85d86-ca6d-4e21-9d9f-0ce7f25c52fa_ed1f0bd85c7e4a7db306b65b59d2e082_compact.jpg",
            "84e6934a-060f-450b-ae21-f81d00f0377e_e868a29056f041a7a202718fd693f5b5_compact.jpg",
            "991ec149-552f-4973-968f-530bf7898115_aee79fb0cd4242af85e1f4711b083ee9_compact.jpg",
            "ea2b31ff-796e-40b6-ae14-d47169173cb5_6cec4d49dcc4407bb16dfc0eba9edefa_compact.jpg",
            "c6faf4fa-5cd8-4ff3-8e3d-08182ef4784e_9b2d6667f0f341b796dd9fb1b0443069_compact.jpg"
        ]
    },
    {
        "name": "M2K TEKNO ORANGE - AV4789 100 - 43",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102415",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>M2K TEKNO ORANGE - AV4789 100 - 43<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "5ce81c346078d8268169_0f735a3224ae43b8b42504f9fbec5f53_grande.jpg",
            "15a08a93-e4a6-4bd2-82d1-799bec424315_25311afcd22b4269bf41d0948cd46a76_compact.jpg",
            "25395c9c-369c-494f-a013-09024197b306_eafd7d72293040f2af11eac16d85628b_compact.jpg",
            "165966dd-6f6e-485a-b3c9-643d5f3fc36c_fa7cd585240942baacd4d8e5d729b802_compact.jpg",
            "f109f062-8ced-4232-9300-a6c72f023879_8b5a0888cf764495bd6735ac7c0e78d3_compact.jpg",
            "0ddae40d-566c-4605-a495-0abcae33bcc7_6f038fd4cfa74f2abc1376451684aa66_compact.jpg",
            "55986f35-9b48-48dc-8432-b61485a157d8_ff3758a23fa54f92adcd18a577d747c1_compact.jpg",
            "a7ccb8b0-04c6-44d9-85e1-110badb31332_b93ce8f536544823a3f524fc485add36_compact.jpg",
            "2122c018-b6e1-4ab6-b880-a6498fb68a62_ae1922cbf2234127bc466d6334a12b36_compact.jpg"
        ]
    },
    {
        "name": "WAFFLE SACAI CLOT KISS OF DEATH - DH1347 100 - 43",
        "brand": "NIKE",
        "type": "Casual Used",
        "sku": "BO22102410",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>WAFFLE SACAI CLOT KISS OF DEATH - DH1347 100 - 43<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "dd0697a0ebec53b20afd_70944ba6cfc54d3fb5c02f78b4c261d6_grande.jpg",
            "7f645e5f-0cc3-4d39-808c-d7263ab23bbe_4345419dab364ef38a864a2592e0f281_compact.jpg",
            "9f219ddf-1ec2-41a1-b91c-06a435465f2b_da8d7aa3030e4afe928862375656bd7a_compact.jpg",
            "03cfc120-d169-4e5f-977f-7f923c8c344c_1eb9bdee523f428a82faac585a2fae3a_compact.jpg",
            "fcd0dfd5-e16f-464c-8532-ceba49b8d7be_ba8643b70aed4f58bf310bb64d4fb463_compact.jpg",
            "23138345-dc2a-4017-a67c-507adab49722_78512fbd84d04f598223cf4b84df73f2_compact.jpg",
            "29264dd3-1469-4836-8439-0bce0350dfb1_1d823b3538ea470f8e6887a8b2f6b014_compact.jpg",
            "ef06368a-4ab8-4c3b-85c4-861401a3658d_664856f1e05a428cb89eec077f7da17a_compact.jpg",
            "373a449b-f838-4047-b120-dd6091303b69_d63361e513d04f00831be59de9b5fd81_compact.jpg",
            "111ed81b-b110-4742-9a69-463e89c38a79_006eb31fe7204a438052dd4486eb6c1d_compact.jpg"
        ]
    },
    {
        "name": "GRADAS WHITE BLACK GUM - FW3378 - 42",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>GRADAS WHITE BLACK GUM - FW3378 - 42<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "0d8b21285d64e53abc75_bb794157c1db4c9199ce76ab0da50421_grande.jpg",
            "3615b8f0-fe57-4939-b235-5ce1feb3e9a9_cd627c34a30a45ee9e897afd04d4d00b_compact.jpg",
            "5c93351a-058c-41ff-913e-b350e6fd29e8_228c9b05666a490e8f5ed432061c7a0c_compact.jpg",
            "cf51011f-ad9c-4164-8a85-9924f757e50d_8798a82d9fe54903970f1781387e2a12_compact.jpg",
            "84f22ca8-b51c-494e-8874-128fc885b166_b7ea68d9e77947d4b1bb9e11f4d2abb6_compact.jpg",
            "b47fb41e-d35e-4e07-99d4-8aac92a5ae2f_56363a98e5ab4960b6d8d6bc8f4c3dbd_compact.jpg",
            "00a80900-a624-48a7-b505-ad08c1689339_6a82aff8e0a8462cb9346e0e36d7b1ef_compact.jpg",
            "238c5313-350c-45a1-9e08-d1413ed763da_12644743f48b41f18e0f236eb6dce1f6_compact.jpg",
            "8f09802e-2df4-412f-85f9-c05f11ab6299_134288bde28044379363e9d68a7a87d8_compact.jpg",
            "33d8599b-10ee-4911-b085-050b318d3c61_0500e298f44e42cc89dacd3f8fe96cc9_compact.jpg"
        ]
    },
    {
        "name": "CENTENNIAL 85 LOW CLOUD GREEN - GX2214 - 44",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>CENTENNIAL 85 LOW CLOUD GREEN - GX2214 - 44<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "df4d49ec35a08dfed4b1_332f7ff49aa1478e8d8bf8fe38ed98af_grande.jpg",
            "f8a4db09-8918-4979-aa85-0d748c9336fa_8460dbb4009c4476b0f22fc8ec2940f8_compact.jpg",
            "394b4c74-4833-41ac-bf25-541d3bbdb876_a90768739360467b9d5582fbb56d0cd3_compact.jpg",
            "8927d63e-10ad-4e9a-9ee1-845b9765f41d_51943d56ec0d4f1e95e93b2a33462be0_compact.jpg",
            "a965396a-ec04-4177-9642-d88f4569d7ab_a36588afa68e48f49c18075b53cb2ebe_compact.jpg",
            "8bfdf42a-cc90-4a59-ac31-cc0624eb2eba_eefb5d6572264aba91b94b57373bc2cf_compact.jpg",
            "8e8dfb2e-f862-4d8b-9ef7-ddedb905bead_48886427383f427d9f7f84520bea5097_compact.jpg",
            "a11a063b-d718-4edd-aa4f-ab76c9a7dd4b_d0c1f7e920be4f54a5172ac9d8a14c93_compact.jpg",
            "aeb59c89-ca9d-46fb-9076-c2ab51820688_7325c74904fd4803851048f077116e06_compact.jpg",
            "20cf9b88-b5f7-42b5-ad0b-89feb58ee6a1_1de4d9a2d69a4443aa37ab68c44a7091_compact.jpg",
            "f235393c-aa19-43ca-a91a-305b41616021_54137559d9444e9f8972f30fe3a95599_compact.jpg",
            "bd2a8f8e-fc3f-4179-9f7e-542f88b31053_c53d4de98a5e4d1595d0caf4b4a9aec4_compact.jpg"
        ]
    },
    {
        "name": "ORIGINALS RETROPY E5 - IE1937 - 42",
        "brand": "ADIDAS",
        "type": "Casual Used",
        "sku": "BO22102405",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>ORIGINALS RETROPY E5 - IE1937 - 42<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "f72336ff4ab3f2edaba2_dfc058c76ead48a7b61c87374cfef62d_grande.jpg",
            "9b072d1b-b0ab-4db5-ba07-d1aea5f59a4b_f93a96879930435282347433b02fd171_compact.jpg",
            "914f2f9a-5b64-4a03-b22b-67f4b7cd0c36_c4ef680b901b40b8b57429aacdaac806_compact.jpg",
            "5f694dd3-2add-46ef-8f3e-1a9a38bfe8ac_fc94abee40a84e04bc779397064bfbf7_compact.jpg",
            "feeed45f-0850-4eba-8d4d-48446c89af8f_7ee351fa230641b8a9e5cebb85383612_compact.jpg",
            "0e3fa9b0-c800-48e1-ada2-c456a1b90982_562bc24152504fe0a28d48e78d1c0f87_compact.jpg",
            "af6e0852-ac5e-4812-bbd2-9390818c0a50_01f7d361477a4e0295362d6d1f5d42ba_compact.jpg",
            "5adda8e9-301f-4bfa-bc00-a5c24028af32_6476e8db4b004622ad0e6d229ad166c9_compact.jpg"
        ]
    },
    {
        "name": "SKECHERS TIDAO - 51982 - 43",
        "brand": "Skechers",
        "type": "Casual Used",
        "sku": "BO18102414",
        "price_now": "400,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>SKECHERS TIDAO - 51982 - 43<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "beaed02eb6a00ffe56b1_a189f43f617e49a1895d93130a6057b1_grande.jpg",
            "6b155e24-65ba-4625-b7bf-cab429f85b5f_0429b4965c9a498bbf9cf2f57c1704a4_compact.jpg",
            "354759b0-522a-40a7-8b58-d4a67520b748_bc5f57c57bdb4bc6ade005cfb8605fb6_compact.jpg",
            "2b1b01a1-54b2-474c-a170-ee2dee4a1364_c9a22bca9e6f45e8a51481d0d218962d_compact.jpg",
            "f1ff1bc9-05ec-4516-9565-0fc8c29d123b_86caaea186c3400da7dde3c327aca7b4_compact.jpg",
            "c59c32d1-79e8-489d-a3bd-ff00d8ef661d_305c8cb490164efa85ecccb77f88dd0b_compact.jpg",
            "3ae58af2-2246-4e8f-9eca-af0ebc36e3cd_b285ae357bc54d87930f19599f3a0474_compact.jpg",
            "9efc292c-32a7-4ee5-8dd0-a8282675d30d_54f958302453462ca598fd9581a9c08f_compact.jpg"
        ]
    },
    {
        "name": "ADAPT 2.0 PLANET OF HOOPS - BQ5397 401 - 45",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO17012414",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>ADAPT 2.0 PLNET OF HOOPS - 45</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5414755675616_0018472c721d840834cc8a2877cdb82b_82c522371b334d1cb0294fd2c1b74658_grande.jpg",
            "d10883ee-c3de-4f93-b126-5fd4a92db5d8_a01ee440f81f4486b84a99eab776e97c_compact.jpg",
            "cd6e05e4-80ce-42f4-8d83-007ed88fae6c_c3f1248c2aca4951a0cde84fa3cc358e_compact.jpg",
            "6ba5f76a-fb0c-4f9d-8e17-ed2ef3758ce3_e4560a65349943ea84fb39640c25bdc8_compact.jpg",
            "a9d9fe32-a0ab-4ee8-bd75-1d655e7d7b5b_8e88b6d8714c42e6af20e457edb10be2_compact.jpg",
            "1e80d4da-c55c-4a72-9a49-ada1aff82e24_ffbe2c916c284b279e2578e843f8e45f_compact.jpg",
            "c4d69680-e9b3-41cc-a3d1-13effb543554_1167c8be3d854a359d1a353a05f9ecab_compact.jpg",
            "af4f1de0-e5dd-4ee7-aa4b-89047dfac305_ba4996e6ae994f78a297ae6acc658f8a_compact.jpg",
            "452ee371-f30c-4fc9-b3b9-02e442cb97f6_5f05d95e983b4ae9904e1d8fe7aff7a3_compact.jpg",
            "3a75dd91-03ca-4275-8464-9371791e72d7_61af0a39f84848f78dcacc8941790d5d_compact.jpg",
            "e9827c49-e85d-4d98-b932-d234c83caf12_876e68cbe57940dba6d7313c05f8e28e_compact.jpg"
        ]
    },
    {
        "name": "ADAPT AUTO MAX FIREBERRY - CZ6804 001 - 42",
        "brand": "Nike",
        "type": "hypebeast used",
        "sku": "BO26072411",
        "price_now": "2,000,000₫",
        "price_compare": "2,650,000₫",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>ADAPT AUTO MAX FIREBERRY - CZ6804 001 - 42<p>Tình trạng: USED&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5905899305364_a348e12ed36e8e1d0edf167435bcce2b_389d6eb2ce304999a86207ed73d39b91_grande.jpg",
            "8062324a-27c3-4ca6-ad33-63ed19cedcec_bf0e93eaa87f41a0b13c2a33f7a9cc67_compact.jpg",
            "d8595752-6030-4aa3-8f26-2b4726e088de_fd7223a78c954254a7caf1b6d035b9a1_compact.jpg",
            "8ca640c3-a8ec-43ba-b17d-6eb4030d7e33_0240fdc788274d7eba53676f708be3db_compact.jpg",
            "bc4d3a54-dcbb-4003-bccc-b8c4efb84842_68ebab08def447c1a6cd524126817043_compact.jpg",
            "0a17a3e5-2ca4-49a5-8a01-dca0e9c6b16b_76ed305c73f34c489e6ac58f70317ab3_compact.jpg",
            "f8f2942e-adfb-4455-8932-2274d2684b01_3e07736a8c124f84932dfef50569b76f_compact.jpg",
            "4396b2e8-6901-4cdb-8275-d076ba2f22af_c30600a4ec0c4f0d918244992f418eaa_compact.jpg"
        ]
    },
    {
        "name": "ADAPT BB 2.0 ASTRONOMY BLUE - BQ5397 400 - 44.5",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO29072303",
        "price_now": "1,600,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>ADAPT BB 2.0 ASTRONOMY BLUE - 44.5</p><p>Tình trạng: USED - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883025919818_a185cfdf75dd6512c763367f28f4dc22_6e3019b1d44f47779b4ca03e50c678a2_grande.jpg"
        ]
    },
    {
        "name": "ADAPT BB 2.0 BLACK - BQ5397 001 - 40.5",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO28042408",
        "price_now": "1,800,000₫",
        "price_compare": "2,600,000₫",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>ADAPT BB 2.0 BLACK - BQ5397 001 - 40.5</p><p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "851f6516-9568-43ce-9b33-13cd957b6fe7_b6fd22a17e9d42e58c4001709bc339e4_grande.jpg",
            "e6739796-479f-4856-b759-45b598f9838b_1f79a201cbb94c1989293bea97cc6b43_compact.jpg",
            "7947b32b-1ef2-4a8a-932e-d7e2adbc7397_0163888d5abe4a22a25445627510f4d8_compact.jpg",
            "3cdcf459-5386-42d6-86c4-92075b9b5912_3403911c81f8426bb72ecba1a005a24d_compact.jpg",
            "8f3f4da1-5b45-4508-98eb-449fb4f6b7cb_f0e3edd8e55b42988d8fdc2c686d2d8c_compact.jpg",
            "5fdf828c-c83f-43b8-9e23-bc3d7cb72e5d_fa6a421a395940b2997908274ebcea51_compact.jpg"
        ]
    },
    {
        "name": "ADAPT BB 2.0 PLANET OF HOOPS - BQ5397 401 - 42.5",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO22072312",
        "price_now": "2,200,000₫",
        "price_compare": "3,000,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>ADAPT BB 2.0 PLANET OF HOOPS - 42.5</p><p>Tình trạng: USED&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 6 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024490741_25d131ea62b66f6970e6146c5624d3f4_76f3cf45048d4af385731571103105ee_grande.jpg"
        ]
    },
    {
        "name": "ADIFOM Q BLACK CARBON - IE7449 - 42",
        "brand": "ADIDAS",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "900,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>ADIFOM Q BLACK CARBON - IE7449 - 42</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "a31a8e6a1a66a238fb77_b8136c3657394fddbb756b09b747567d_grande.jpg",
            "4d0f2add-b4e5-435e-afbf-93cd4cdfd008_3143a536e72f41aeb9a24028ab53caa6_compact.jpg",
            "cc29cfb6-9d62-4851-8696-0549f1e8671f_bc196c865d4b4ba7bbe01bc38579855e_compact.jpg",
            "e034e70a-3139-4be5-b1c0-cfb882bd82cd_a438f93d6246451fad780b1ac662bf74_compact.jpg",
            "a621b18a-a8a1-43fd-91f2-181af4cd6f76_71c80a73b71a477a9827f570267d5bfa_compact.jpg",
            "6864bb3c-2263-4364-ae3d-06e4a5d1ca54_d0dc29fb9604445b878e5d34c9767218_compact.jpg",
            "481ad685-22e4-49ea-9ac7-ac8321cc1188_3f015eddc20c48e983480446346e2a25_compact.jpg",
            "215abbc5-860e-4cb2-ac24-5d437fb95ae4_cdf67ec15e7c4805a79eaa9e269a15d2_compact.jpg",
            "1a902bb7-8c86-4c8d-bc66-75020333db1d_4202589a0ef0406192d288003832e046_compact.jpg",
            "3ad4a110-73e7-482f-9d58-6a08033e6fd6_7bfb3f92cede44f08bd95503447d2c6c_compact.jpg",
            "c4760a31-ef1f-4d67-a9b2-a3548470b3a2_d4304c7d52a84819956d8ff8ef554e59_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW TRAVIS SCOTT CACTUS BLACK - 39",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO03102406",
        "price_now": "3,500,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">AF1 LOW TRAVIS SCOTT CACTUS BLACK - CN2405 900 - 39</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span><br><span style=\"font-size:18px\"><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "4a0503562a13934dca02_344851f6aa7b4b029198baafa18b984d_grande.jpg"
        ]
    },
    {
        "name": "ALEXANDER WANG PUFF TRAINER BLACK - DB2614 - 43",
        "brand": "ALEXANDER WANG",
        "type": "hypebeast used",
        "sku": "BO09062431",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JALEXANDER WANG PUFF TRAINER BLACK - DB2614 - 43<p>trạng: USED - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5519687387545_1a0303b8d1c15ec09b0474dcf54cb487_d40ddfe0219743cfb018f34b0cf15752_grande.jpg",
            "bea53ab9-d130-46a8-8e1b-67d28bb7ae05_49fb2418dae445179492797c3c6e255a_compact.jpg",
            "a116feed-07dd-470e-a0a4-e9acc5451fa5_99717bb39bdc4767876622b19ccc295e_compact.jpg",
            "3cd848ed-5973-49c7-9854-0d984009d8af_9679425057494b29aa356bc7a48cb99a_compact.jpg",
            "0a490b9a-1b86-4daf-a9ff-1a0765b2c357_7b0e82e442924ff689cf1e2b684f4884_compact.jpg",
            "9522153a-6d7a-400b-b566-3fa37e59eb0c_c7fdf03acffa42c197be2b6d76b5faaa_compact.jpg",
            "abfbe3f6-03a0-40d0-85cb-10e13448904e_05268af3f25e4f2fb6d6832f8ca1ff39_compact.jpg"
        ]
    },
    {
        "name": "BALENCIAGA SLIDE NEON GREEN - 37",
        "brand": "Balenciaga",
        "type": "hypebeast used",
        "sku": "BO12072414",
        "price_now": "2,500,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>BALENCIAGA SLIDE NEON GREEN - 37<p>Tình trạng: USED- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883024798192_b893ae670e714c3936dd39d75d0ebd53_f577aa6193dc4f30b1c7fea2cb08a35e_grande.jpg",
            "6de3925a-f4a8-40b6-a78a-a94f423a3b37_b19da725c99b4688841bf1b714dca81f_compact.jpg",
            "ca0e9189-9352-4097-9455-e89973bcd987_0b6ba8d0daf849dbb22ae1955cbb1a01_compact.jpg",
            "8fb14ad0-6994-45c0-98af-ce548f0a5b64_d26c6964640d4c949573f0789123fb3a_compact.jpg",
            "c3bc31fd-f654-4602-808e-ee0f0f53700a_1c38a47c7ef04c9f982f3d72ddb14c38_compact.jpg",
            "7ce1f0d5-67b5-4a98-b0c6-b4da3b8aa325_43fbf6bf96694b25b1c7869339f49de1_compact.jpg",
            "9900538b-61a6-40a4-a0c1-3c8f38878f56_43ea7d40314542c1aad8eff88b061fdb_compact.jpg",
            "fe75a5b3-d1a2-4f95-95ac-5efd07e41b35_61e5eb0ee05b4e27b4c2609abbfe28f0_compact.jpg",
            "ad77a935-da64-4913-919f-b9ec6866f48e_df7e24cc603b4868b64faa12fc9e2e9a_compact.jpg",
            "179f3d43-84f7-4972-bbac-34d99c546879_5328c9a7c0a34003bd4e618c2d8e541f_compact.jpg",
            "8be1a268-81d4-4af2-8437-94ecbbb7e975_847131cc5eed402ca13a34312d9f480b_compact.jpg",
            "bd507efe-5283-4ae1-916b-7a4df0bb7907_36b2c69f89594178a67b31777a0b94c3_compact.jpg",
            "56ce75a6-3091-40f3-984b-5588e26f2870_883c7fbdaaea4f619603a76e1cd2ad97_compact.jpg"
        ]
    },
    {
        "name": "BALENCIAGA TRIPLE S CLEAR SOLE - 541624 - 40",
        "brand": "Balenciaga",
        "type": "hypebeast used",
        "sku": "BO11102433",
        "price_now": "6,000,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">BALENCIAGA TRIPLE S CLEAR SOLE - 541624 - 40<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "275cf89fecab55f50cba_45190fcf2d4b44fead69945c9dc1d3b3_grande.jpg",
            "b04b24a9-ef45-410f-971a-81ad71749bfe_15859c84ce084d6cab45a8b56b06b1bc_compact.jpg",
            "abffb4ed-77d5-4cb5-9934-c9664731c6f6_cf20a87c6ccb460da9ab02b279340f6f_compact.jpg",
            "f4e3d6f1-d16f-41c1-bf9a-4c92870c495f_bd2a121f0f8a486887c7fa4225ccae35_compact.jpg",
            "fe8b7c9f-e17f-4bc6-9e4d-18ae9d1a746b_13b2c919438747f99fe6ce7d0bb3ac6c_compact.jpg",
            "69291c27-9ede-4a28-8aca-8b74ddc3c024_197dda05b6ec41debe7fac4132b2387c_compact.jpg",
            "6e28462f-b77b-4d0d-b50f-c6b65c02a0bb_73ec6a7987f54211a09d754aa6a3c802_compact.jpg",
            "d784dd83-b42f-4069-bad9-5d117d7e95dd_ab518de8c56e4b6c8df58265dcdd5284_compact.jpg",
            "b786bf49-d56c-4616-96c4-6a1ccf51006a_f0dd746b0d7041d0a7498bc980cf6bea_compact.jpg",
            "524763c1-f7e9-45f8-a3ed-500f56a10919_ef06f115698b4df4a813bf6824f056c9_compact.jpg",
            "509f06d6-bf4c-44d6-9987-b1d8f671781e_08c7d336fa854ab68e7bd06b672fd613_compact.jpg",
            "eff6f621-2db6-4daf-af1d-edb5558c5a1c_71f94612127d47f1ae595a4392b5aec3_compact.jpg"
        ]
    },
    {
        "name": "BRUSHED LEATHER CHOCOLATE - 2DE127 - 42",
        "brand": "PRADA",
        "type": "hypebeast used",
        "sku": "BO20092401",
        "price_now": "14,500,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">BRUSHED LEATHER CHOCOLATE - 2DE127 - 42</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "ca9e727bca746c2a3565_f07ec957aa0c4daa92547284906fca71_grande.jpg",
            "3aca8b4d-f705-4bf4-9a04-3310622cbcb7_d5d126b313da492d945e9c759789a844_compact.jpg",
            "fb4672a4-849a-4ffd-8da0-a06e6726e735_6eb31c626a434730918ad08d06e881c2_compact.jpg",
            "6206d4a2-3f96-43c7-815b-ef92fafbe4e7_7685a9e6cbbd488c867e11383fe25e61_compact.jpg",
            "729082e9-ac01-4432-b080-23c01a5c0366_90e85d55f6cd4b859e1e6b1db132a88f_compact.jpg",
            "df856ad2-33fd-4434-a606-e5fede293892_bf9d1121c99d4ab1924bf436ae1a962e_compact.jpg",
            "b10d2919-cac3-4fc8-84ee-d0d479f483d8_1b541314e5c54f7e8c84d7f34deefb6e_compact.jpg",
            "9924df81-7743-471b-a9eb-50c88a27dd9a_7fae5909723044d187e98e8770d76e72_compact.jpg",
            "5c8340f7-6d9b-4d0a-b79f-20b709fb522a_4ab573e48b914f42beaf5cc84eca9ff5_compact.jpg",
            "01949650-baae-47cb-831c-444494ae9b1a_cf078d0af9f944fb98648e3ab593c2d1_compact.jpg",
            "e1b566f9-eafe-494f-8346-32ab6f64c456_f4a4d1956257485da3c71dce20bf1310_compact.jpg",
            "9af88a40-3800-4938-9ab4-a7fd204b223c_7df7235370f4466da3e27d91b860cd96_compact.jpg"
        ]
    },
    {
        "name": "BURBERRY SNEAKER - 44.5",
        "brand": "Burberry",
        "type": "hypebeast used",
        "sku": "BO21032304",
        "price_now": "2,500,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>Tên :&nbsp;BURBERRY SNEAKER - 44.5</p><p>Tình trạng: USED - có tem - FULL box</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;<br>&nbsp;</p>\n\t\t\t",
        "images": [
            "z5905899715338_d87f10983276092f4357c0489eca20ad_e7448f66386f4d99ad5e206dc88fd40a_grande.jpg"
        ]
    },
    {
        "name": "COMMON PROJECTS OG ACHILLES - 3701-39-0506 - 39",
        "brand": "Common Projects",
        "type": "hypebeast used",
        "sku": "BO03052432",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>COMMON PROJECTS OG ACHILLES - 39</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "ba3000591a1cbb42e20d_fffc707dbc59441885a62a63b73be38b_grande.jpg",
            "2e95998c9ddf3c8165ce_2749846ad9d94d8f8e96db888d8b9dbe_compact.jpg",
            "b4085c105843f91da052_969c1d6df26c4e6c806435cd9a8b7c23_compact.jpg",
            "4b9a158511d6b088e9c7_87a467411e25465da51680dd67605d11_compact.jpg",
            "dbc2ccddc88e69d0309f_1eaa653913e344cc8ebbdc6e641b8d7f_compact.jpg",
            "ea275d115942f81ca153_c69d515b3a8c48b6856baf2336144884_compact.jpg",
            "9b93e2a5e6f647a81ee7_5e958297c09448d98a51bd938d91b277_compact.jpg",
            "e6c059f65da5fcfba5b4_0ebb9a3258f44b57b757c4dde836b8ed_compact.jpg"
        ]
    },
    {
        "name": "FENDI MOCASSINO  CAM - 7",
        "brand": "Fendi",
        "type": "hypebeast used",
        "sku": "BO30122306",
        "price_now": "2,500,000₫",
        "price_compare": "3,500,000₫",
        "sizes": [
            "7"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>FENDI MOCASSINO &nbsp;CAM - 7</p><p>Tình trạng: USED&nbsp; - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5906089334715_a87e6147772281d0ed2e0a843fa250d0_65468f3df2a24f8994be24a21b1fe698_grande.jpg",
            "acc218c3-13cb-4c4a-aee1-565c2868be84_9de2e894307f47568c1d288cab1072f2_compact.jpg",
            "5fef5f37-0889-4989-8516-044ed8207017_3d2f6242fabf41498bc5faf150849e9c_compact.jpg",
            "84359c2a-f6cc-4a41-9a8f-aa74c0d168d2_ad80d4b5f7cc47e6b364ebe881145b97_compact.jpg",
            "f1c65737-31ea-4bce-adc4-6bcbc310fb58_56aa4c326f684fd7b02d361b59c7e071_compact.jpg",
            "9743e7a1-e13d-4135-bd80-4ac85f24606b_b0082cf7c55940d6878d43f2efdfe100_compact.jpg",
            "2e07a79a-11f3-4082-9e7a-892c1e26c9c8_8b6d458a6fd044a5bdb884fc5e39e120_compact.jpg",
            "6643f52d-8d7d-48f7-9d55-6ba38bed78d3_39a3e585f85340e5b9a510e826e5d928_compact.jpg",
            "c095cf3f-8037-4b56-aa02-cf258e6041b6_402bae1400c24344a902b84087c59562_compact.jpg"
        ]
    },
    {
        "name": "FOG 1 OATMEAL - AR4237 900 - 42.5",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "3,800,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\"><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></span><hr><span style=\"font-size:15px\">FOG 1 OATMEAL - AR4237 900 - 42.5</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span></div>\n\t\t\t",
        "images": [
            "a36f3c13218d85d3dc9c_dfca3690a8624fb8b7c327779db0b439_grande.jpg",
            "fdc31743-57fc-47e5-9171-36f21676fd53_b5f0cfbed2ad43bf95ac5d6fe6637552_grande.jpg",
            "ba4a44b1-764f-46d5-9c7e-7ab03331c51d_dfdd60438b784a35bb07fb940ad6b9a4_grande.jpg",
            "bf84ffef-fb9b-4007-b71f-389ed305bdf7_1c064149a06d4d7cbb6e209577ec1d10_grande.jpg",
            "0296a26a-b4fe-453b-9e27-2e93c6efd648_13aa1e03b3cb47bb9ddce32dd51651ae_compact.jpg",
            "bf34b5bf-2cd6-4010-9e88-d2b7b2d9501e_a8d509e69ff44e0c8c345b9795297361_compact.jpg",
            "728106fb-369e-4862-8c63-fc8f60cc52e7_42d2b4c4f2874b03b16a33fdb91c8d71_compact.jpg",
            "8daa42d3-6c5d-4c55-bdbf-e254c5c6182e_b4e5982464004ce9b6a137b828f43f9e_compact.jpg",
            "8e0c75e0-caac-4288-ab05-c767dae8eb68_34043bfdc3a942b19ba5fbd44cdaf517_compact.jpg",
            "f75516e3-df19-4114-876d-ae52a02c76d0_e93fce8fd5454c7680d76efc0fbf4d97_compact.jpg",
            "b85236eb-3f03-4829-a1a2-6f88b1658aa8_9f5aa54b80d34f2babac5dcdb2d09f12_compact.jpg"
        ]
    },
    {
        "name": "GUCCI ACE - 470012 - 7.5G",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "2,300,000₫",
        "price_compare": "",
        "sizes": [
            "7.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>GUCCI ACCE - 470012 - 7.5 (FIT 41)<p>trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5519687343098_13da30b5d27056b55c824987801feb7e_3a4a6548f1614887af8a887b7f37e9bb_grande.jpg",
            "c6567b92-33f9-4d21-8cc8-de8921683129_961d5ed63add4a2789bd06060ad88538_compact.jpg",
            "214be5e7-f9b7-4a65-b7f1-a0604e4d695e_86fad87572674fa4b1db64e219b96da3_compact.jpg",
            "d8258904-fe70-480c-87e0-043ef17084cf_d7e3af88d5504ffb8806482443dac5a1_compact.jpg",
            "c120c6fe-2382-469e-9f12-123b891a7916_20c2f409d5084148a30c4e96e60b09b6_compact.jpg",
            "2cf98a61-4812-49e4-835e-4b646c4e2e04_a447156b2c3b416e895d357a62dee833_compact.jpg",
            "f52b84df-a16e-49d2-bb4d-f182deafc0e6_30f5d62661af44c4ac81212186a08177_compact.jpg",
            "08fd0a95-9ba8-4f44-a4b0-85d18fd830d0_27833927d0a143beaeaeac6e410fa7b6_compact.jpg",
            "98294100-be78-4c01-a3d5-d61559f3eaac_d321c85bad2f4c8a9dc8b8b490836932_compact.jpg",
            "a07b21ef-9741-49ec-b8b9-d0851a43a483_0632d75163b643a592a83c76fe8aedd6_compact.jpg",
            "f4cab936-a901-4b1b-8e67-82c62b78f64b_6c9a5478fd12439a8d605238adc960e3_compact.jpg",
            "a1e08b73-f792-4d23-93d5-8414bd20b626_781c8724b6c24711adad79ad28b38f14_compact.jpg",
            "e09c8640-a56d-4244-845a-2df58c4b801e_492ef3d5a09c4e2187c3a9f348aff93d_compact.jpg",
            "c187b4fa-c8f2-42f0-9d4e-d68ac84a77eb_3fe9e85af9af40f184ac2d4f757c9228_compact.jpg"
        ]
    },
    {
        "name": "GUCCI ACE HEART - 36",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "BO20012432",
        "price_now": "2,200,000₫",
        "price_compare": "3,000,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>GUCCI ACE HEART - 36</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883026076312_8e0275e03f7e8da92f7f441ba4b3e20d_3574dc0fc14e4ba084996a15a2a534e0_grande.jpg"
        ]
    },
    {
        "name": "GUCCI ACE STARS - 37",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "BO15032422",
        "price_now": "1,200,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>GUCCI ACE STARS - 37</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024549120_b37a576d1f3ea60c5f34ff00244686c1_7b521debef794cfda6870616bb005fb0_grande.jpg",
            "8031737c-ba8e-45f2-8e64-e55af342243e_5461ac9222c049c3a8f17b9d895f3f83_compact.jpg",
            "d3081ace-d336-419c-9018-dbe1aae29ed0_6cd9c399e1814f058b6a8d6e7e9d6043_compact.jpg",
            "459661d3-06a4-446f-8f22-ddea00e978e2_bc811046bdd1450d8678a03dcdd52f56_compact.jpg",
            "14129d38-0e96-46c8-b556-54e1539d9f57_cb3ef28d3c5b49b1b8e3c5ed5e614b20_compact.jpg",
            "56f4d3ab-aa15-4c3b-8fc0-4eeef1a80063_b7e1d01856ec4c7b9ea2a016e5ea9006_compact.jpg",
            "ba5a02ae-1b09-4e40-a3c6-f68213783218_cc389a6344bb4a8d8b8aa913807435ba_compact.jpg"
        ]
    },
    {
        "name": "GUCCI ACE TRÁI THƠM - 35",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "BO20012427",
        "price_now": "1,600,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "35"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>GUCCI ACE TRÁI THƠM - 35</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883026015840_02a41413c8eeba509c20936bd0900645_b074985007944e228e1cb378e08f6a37_grande.jpg",
            "ac2a9d16-2492-49ea-85c0-5a2be7704b2a_52a5c67607c44ee89027a0471b8f3576_compact.jpg",
            "011d0243-bcf3-4afb-a02e-252cf3e8cac6_afbfa5fd247c4ee39d993d30d9565024_compact.jpg",
            "fe5024ca-2229-417d-8e3c-1822dacce072_952b55b50d91455688ef6bb99f3c6ce9_compact.jpg",
            "151019ab-2fcb-4c49-b5ed-b03898597a8f_8edad20208a6440db9c2a829585c8276_compact.jpg",
            "808fdd80-eec4-4b41-bdd4-fc87cd10a65b_68c49a8a4400404b8a9e4a0f0d79e7fb_compact.jpg",
            "5990a5a0-5a0c-40cf-b2fa-c470c800d3f0_12ba1aaec6874c1fb25fea264bdee487_compact.jpg"
        ]
    },
    {
        "name": "GUCCI ACE TRÁI THƠM - 36",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "BO20012424",
        "price_now": "900,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>GUCCI ACE TRÁI THƠM - 36</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 3 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5838477288687_436c50942164a6b9bfd1db6206961dd9_88979b4909194363b2647667c4cd14b0_grande.jpg",
            "6f95b9cf-7b31-4e4e-be26-a05c5ccfb6e4_f2b553f9322a4145a308f370400e94d4_compact.jpg",
            "56a3fd73-1b7b-44d2-b945-627a9d54b705_391126b110f44f9c9696bd083c7df046_compact.jpg",
            "b58bdfd9-b723-42a4-a1c0-ecffb3d6bcf4_c05561682905464f99bef962f2e1c2d9_compact.jpg",
            "2dc89d02-520a-445b-ae41-f77352d2d776_5a7005e33124453da3b83afb1fa7201c_compact.jpg",
            "670243be-c3d8-4156-b2bb-f9922af2b6ea_c180dc39410248769765d03781e9b403_compact.jpg",
            "20e5c1d4-398f-49cc-9fa5-8acdb8a6c754_bf4b31e7ed6048f89ab75260caa54703_compact.jpg",
            "91c04dc4-d905-4562-a507-d6829e5525cf_e7b29cc1fa9d43e09f60f211326d5139_compact.jpg"
        ]
    },
    {
        "name": "GUCCI LEATHER WEB WHITE - 233334 - 6.5(FIT 40.5)",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "BO28092403",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>GUCCI LEATHER WEB WHITE - 233334 - 6.5(FIT 40.5)<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "d4f340a67222d47c8d33_ad8aee4e726b4a549d4b5983d846b7d9_grande.jpg",
            "aa24612c-7cb0-4b6a-8c01-812aeb1fedb9_cf1f23f02fe144009ae8778204f5bb21_compact.jpg",
            "78ce4636-344b-4d32-a6d5-0ce6df4e7e2b_f357c96417bf4b8599222513033db67f_compact.jpg",
            "bf2946cf-a5ca-4ea6-9326-ea3367d92552_9df1621e08cc4c25983e0510da96ad29_compact.jpg",
            "d69aafab-3fe1-4311-96b3-fea6850673e1_84f007194f234e97bf3bdadfcbdad19a_compact.jpg",
            "21bb8caa-2d12-41db-94d0-e0663047e649_d1e71e1552b043fd8704ecdd40848808_compact.jpg",
            "e146d2ac-58da-4dfa-bafb-ae316fefb6e5_30b7280011fa415eb1f9c85e3e28691d_compact.jpg"
        ]
    },
    {
        "name": "GUCCI RHYTON LOGO LEATHER - 35.5",
        "brand": "Gucci",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "3,200,000₫",
        "price_compare": "",
        "sizes": [
            "35.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>GUCCI RHYTON LOGO LEATHER - 35.5<p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5607123864285_bd6ec9f1c773277630c28e4377f263c5_ec28c664c6eb41c6944ad5b8523cd8c3_grande.jpg",
            "20d978d7-88bf-4386-a558-417c3a93fd28_10f437720d1b4e96bdf2ff4ca58eb6b6_compact.jpg",
            "93584faa-680a-491c-8cdf-3e7f69f5e940_73024cc4575b4fc8b661eab6cd323466_compact.jpg",
            "7981d8bd-f500-4759-9087-1e49a0b2fe02_f0a5d7d897f84c5884451c7f7f8940f9_compact.jpg",
            "f5a046a1-38ac-4bbf-aa43-d9c996bfeed5_79d64eba2fb9441a895a6c573f380bab_compact.jpg",
            "57c0557a-2c0a-4747-8b51-f0ec3ac95ed2_ba2598a2eab440e893502ad959f8cf70_compact.jpg",
            "27622312-b26f-4e2b-b102-09724da04c6c_306599881c984c828d6ec5e286092817_compact.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH PURE PLATIUM - 41",
        "brand": "jordan",
        "type": "hypebeast used",
        "sku": "BO09012413",
        "price_now": "2,299,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổI</p><p>JORDAN 1 HIGH PURE PLATIUM - 41</p><p>Tình trạng: USED&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "fcf26d723d5e9600cf4f_a61878b22270472cafd971448b42da52_grande.jpg"
        ]
    },
    {
        "name": "JORDAN 1 HIGH SBB - 40.5",
        "brand": "jordan",
        "type": "hypebeast used",
        "sku": "BO09012410",
        "price_now": "3,999,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổI</p><p>JORDAN 1 HIGH SBB - 40.5</p><p>Tình trạng: USED&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "0978aaf0fadc518208cd_70090b4aa064471baeb88ffa94417bc3_grande.jpg"
        ]
    },
    {
        "name": "JORDAN 1 MID OBSIDIAN ROYAL -36",
        "brand": "Jordan",
        "type": "hypebeast used",
        "sku": "BO31032320",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi<br>----------------------------------------<br>Tên :&nbsp;JORDAN 1 MID OBSIDIAN ROYAL -36<br>Tình trạng: USED - có tem - NO box</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 1 tháng đối với giày cũ - 2 tháng đối với giày mới.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;<br>&nbsp;</p>\n\t\t\t",
        "images": [
            "jordan_1_mid_obsidian_royal_-36_c4839d8f8b86496983e267a93d89de22_grande.jpg"
        ]
    },
    {
        "name": "JORDAN 1 RETRO HI NRG UNION- BV1300 106 - 44",
        "brand": "jordan",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "10,000,000₫",
        "price_compare": "0₫",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>JORDAN 1 RETRO HI NRG UNION&nbsp;- BV1300 106 - 44<p>trạng: USED- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5936945351233_f4e7e8648dd6a9700369eee4d8c74661_c42be56253d347ff9f119c168a374dc7_grande.jpg",
            "5cee5ddb-953a-4ac4-9773-89c801c9cd5c_c52a6d48d5564b5aad2257423216f08d_compact.jpg",
            "071bd056-08e2-4246-b3bd-4354dca0855d_f8d0a1d84e2344f38762aedc0fdb7d3f_compact.jpg",
            "f1be39c2-7b3c-4f34-8ed5-5d1d4ff857cc_f27f158da90a4ba995a8eaae8e50e592_compact.jpg",
            "62f19e57-2e30-4597-b7ba-fa9c4827fd88_12dd5d7c238544d1ad0cb5bdb2a3f218_compact.jpg",
            "a398ff38-2db4-4ede-b35c-31878c2d647c_9e9dee717c74448b8a0e111f6426c6af_compact.jpg",
            "c18012d9-e588-43bc-afb2-5f28f17a89ad_8ca14cb08c374c0eaae20f48991766d0_compact.jpg"
        ]
    },
    {
        "name": "KWONDO 1 GD PANDA - DH2482 101 - 42",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "BO22102404",
        "price_now": "3,300,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">KWONDO 1 GD PANDA - DH2482 101 - 42<br><div>Tình trạng: &nbsp;USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div>\n\t\t\t",
        "images": [
            "80901c78-4eb0-4be6-b1b9-4fc17394d19d_9c2dc042a9a646d9bdde6d179ec6cef3_grande.jpg"
        ]
    },
    {
        "name": "KWONDO 1 GD TRIPLE WHITE - DH2482 100 - 43",
        "brand": "NIKE",
        "type": "hypebeast used",
        "sku": "",
        "price_now": "2,700,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">KWONDO 1 GD TRIPLE WHITE - DH2482 100 - 43<br><div>Tình trạng: &nbsp;USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div>\n\t\t\t",
        "images": [
            "02126b7b-1695-4e4c-a0a9-380f2e168a85_98b1338a9d6a45d5947ad8c0171b1d58_grande.jpg"
        ]
    },
    {
        "name": "LV RUN AWAY SNEAKER - 0291 - SIZE 7 ( fit 40 41 )",
        "brand": "Louis Vuitton",
        "type": "hypebeast used",
        "sku": "BO27102452",
        "price_now": "9,500,000₫",
        "price_compare": "",
        "sizes": [
            "7"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">LV RUN AWAY SNEAKER - 0291 - SIZE 7 ( fit 40 41 )<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "a02837677870c02e9961_1dad5b982e83416c842cca6ebef41c38_grande.jpg",
            "ca617b3e-8268-480d-a0af-b8dc1904bebe_7291f2547404471abfc43eb5e72c14a3_compact.jpg",
            "1b44538e-fe08-4dbb-b56b-305b37ced952_e797b48da3a2465cb8db942b2fb60601_compact.jpg",
            "7d4f610f-54eb-4376-83ee-3c761004b57f_72bc361024a04e0c8db50655d9033e96_compact.jpg",
            "34eb49fc-135e-4a07-8f33-83821ddab7d1_871a3aeeb12845a6b467ee37b8dc20e7_compact.jpg",
            "b4938327-1f69-4bf2-8a30-97770b1de335_5c6780f5438748bf81b0c2e7fbe5090e_compact.jpg",
            "f5c84045-9132-4323-b7d6-5f576e9691d7_eeabb687f93a47e2804192b859fb355b_compact.jpg",
            "84e4b908-5f7b-4122-a5af-faf267ea64b9_2a90c26ce80a46eeba68f6c9cae45bc1_compact.jpg",
            "1f21b871-fa86-48ed-9f11-37912911b1ab_8d10ed33d00b4274970df5b6c39c0f8b_compact.jpg",
            "dab7b881-a113-4b9b-82c2-6572d04d445f_cb8081c9a1ce4ba9bab6c5c2d652aec4_compact.jpg",
            "fc0c47a0-506e-4a09-8718-e8df5c3f46df_a4f65c81d55444419d022034553d64b5_compact.jpg",
            "38924ed1-7e68-48dd-ba42-21d974bf0d6b_7bfe6fee79924383a79102a7b15d5f18_compact.jpg",
            "79246e99-5be5-4fdb-a568-302446f53037_a0aad577777a4188b4d20072e6d26a9e_compact.jpg"
        ]
    },
    {
        "name": "MAISON MARGIELA SOCK PAINTER - 42",
        "brand": "Maison Margiela",
        "type": "hypebeast used",
        "sku": "BO30082401",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\"><em><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></em></span><hr><span style=\"font-size:16px\">MAISON MARGIELA SOCK PAINTER - 42</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "85613ea095a432fa6bb5_1c325fd895e44ce2be4297fe3bbf18ec_grande.jpg",
            "aaca4eb0-4542-43ea-b806-09d665f651cd_9cee4bc21c5446c494e3ccd2b62dea57_compact.jpg",
            "a5419bc4-5e91-45b2-b522-e6f63f21ba1a_18fdbf07c63a4b1ea65a30e33f0a6c5e_compact.jpg",
            "c6d93248-33ef-4ad1-8929-224121e26fdc_4cd6c160e32547dab1cc3a1cbdbee031_compact.jpg",
            "942cc85f-563f-4c1f-a42d-f871597dee15_2a75589fb6ec4441975c4b9a0591a497_compact.jpg",
            "730b3d73-351b-4b89-a854-cd5a8f6e93ac_a3506fc51e1d409eb117b4f6199f875e_compact.jpg",
            "78677c22-9ecf-4b07-9add-885f36303dcc_33ce6730fe7b40098f56caa041304a6b_compact.jpg",
            "16236855-4d6e-4b93-96b4-297a44c83de4_44afae46a01a4168ba2eb14c40310c7a_compact.jpg",
            "2da8ea9d-803b-46f2-855b-50e33050011b_09ada56bea84464c99103d85b243c597_compact.jpg",
            "f3b35e6a-beae-4d1f-8ef9-3edbdfa7389f_d6c411bed26a46a68392aa51f0cd03b5_compact.jpg",
            "62d6ff57-70f3-4a9f-a6c4-0084696d0ef2_05f5f2980ab0402cbf5cdc030862f283_compact.jpg",
            "61bf7ead-c42d-488d-8dd1-e7c01b8fe0fb_3d3ba5c8ef9d469bb21e9f3d1f9b2ef1_compact.jpg"
        ]
    },
    {
        "name": "AF1 '07 ESSENTIAL WHEAT - CT1989 700 - 36",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO21062426",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 '07 ESSENTIAL WHEAT - CT1989700 - 36</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "z5838850923479_9b860b8631ce8aad5d74964c1ce9e5b5_c229312aef7345a3b876f29b77625f66_grande.jpg",
            "bfd24897-928b-42dc-8698-59741cf433e2_c03a1c4f46ce4afdbcd2960d5ae6c853_compact.jpg",
            "666a23ef-a8bc-4a1b-951c-b792481de1e8_dbfa98bb640f4ab8b946b3729adb3edf_compact.jpg",
            "dd440a89-64ee-4a59-b8ae-5c0b0daca500_25d5559642ee476d9dff1ba3d7f80f9c_compact.jpg",
            "aec9fccb-3253-4cf5-9642-3efa6ef475a3_234269ed321942489ebff07101b7d7c3_compact.jpg",
            "8f4829b0-b26f-4f24-8541-12a542719d68_c79b77bf8cb54cf98ecf329e619471d6_compact.jpg",
            "e25f02a0-183f-4b96-922c-0e0ec2dd8d87_39f3690c3f1e40b987a31699d081fa65_compact.jpg"
        ]
    },
    {
        "name": "AF1 07 LV8 X NBA RED - BQ4420 600 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072433",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>AF1 07 LV8 X NBA RED - BQ4420 600 -40</p><p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5679566748088_a13922ed010f60107a224800702647ce_667efc6887664ce9ba237d6f2d51f5d7_grande.jpg",
            "c1195cfc-44c9-4679-a47e-ed5746efa10a_96d0b487a18448608efca356e3497637_compact.jpg",
            "66f49902-c192-4212-9bb6-8187787a65d7_7c4f89fb634f495db6f5af23475e5ae4_compact.jpg",
            "cac1ae4b-7e6e-4c98-afe8-cf4dd58d187b_e65a1698f6f24dd4961231fb6acdddd7_compact.jpg",
            "02f19e23-71d8-429f-893c-4d1a69ebf97f_8d39ee0ee2924d6a905849fd4e1f1b8b_compact.jpg",
            "0b3023a2-79b7-4065-bb85-0250efbf3c3d_1576b9038f6e4b84b7506491e8fa60e6_compact.jpg",
            "c63e753e-e4eb-46db-b040-92c0205ae7fe_6ce0ec1b722d4681a336cd6405aefb81_compact.jpg",
            "33d17ae4-a7d4-4e5f-a302-bfcf71552698_184fad9308cd4ef7a4293ffd1b3a634d_compact.jpg",
            "dbb9aad6-8694-492d-aa82-ed9623625825_b2db2a2c9d3e433b89ef858c5820c7c3_compact.jpg"
        ]
    },
    {
        "name": "AF1 07 MID LV8 WOLF GREY - 804609 006 -41",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072421",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>AF1 07 MID LV8 WOLF GREY - 804609 006 -41</p><p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5679566664376_2f964481e6c78bdba7e81cda288ab84c_1d1841e9e331497ab20565512f5138a6_grande.jpg",
            "7c9761e0-b558-4388-bfff-bf621d7da65a_3fb34d894d764cc1a1c82c4058be9ea5_compact.jpg",
            "a79828f5-0299-4316-9b4d-1bcc7926d4f8_7000de8aa0c243f581d007ee1ef48710_compact.jpg",
            "260a20d6-ab67-49e4-af8e-0d94a89c3e47_71ff34e206da45359adfc8be70be8dec_compact.jpg",
            "050105e0-e233-4fc8-812d-f09788335aec_405a986d26384fa9ab0ca50f0395afed_compact.jpg",
            "180234f7-705c-4f1b-9e2b-031ee93945c5_a574b90a4dbe481b8fcdf7c28aaedb9e_compact.jpg"
        ]
    },
    {
        "name": "AF1 BLUE GUM SOLE - AQ3778 994 - 36",
        "brand": "Nike",
        "type": "AF1 USED",
        "sku": "BO25062424",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 BLUE GUM SOLE - AQ3778 994 - 36</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "78c7d2fa6762c43c9d73_404293360e9d4af6ab6789b32ecb51ba_grande.jpg",
            "375ebc7c-5099-4427-86be-7d79e475bdba_2d0f829e93874d8397ed7575695cf5b3_compact.jpg",
            "fdc57653-2c30-407c-a302-f77162e4c0a1_2dd6fd1ccdce440da589d97477755518_compact.jpg",
            "1fece420-8c58-40cb-a91d-2a1a6db8792f_011fa37566be4af194a3c91f1d1a0adf_compact.jpg",
            "8de97a2b-fcfd-474a-be40-d9a3f8f6f0b0_a4490e9606704efea8492375d50ed408_compact.jpg",
            "a8fe42a6-5257-4498-99f6-0d956cb9138c_4d71756f4cc74657a73132796b2e552d_compact.jpg",
            "be14a9c7-69fc-400a-9549-54f534d6fffe_96a40054777b44c7b2223cda7a72ea79_compact.jpg"
        ]
    },
    {
        "name": "AF1 CRATER SUMMIT WHTIE - CZ1524 100 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072412",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>AF1 CRATER SUMMIT WHTIE - CZ1524 100 - 40<p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566641165_4d0138b9741495693f8e8ce30e332d5d_6321623cf73348678435dc57b4cf6378_grande.jpg",
            "fcf7edf3-7400-43fc-8f4e-a9408cf757ab_ff0b0489691746e3a6effa4b7b02717f_compact.jpg",
            "75362426-4f8e-4927-a4b2-1b24bec2206a_a659762118974c719229b11e352f4c09_compact.jpg",
            "54d06fa9-5552-4de4-b1ab-d673e581fd99_1e3b1f6478e84807a9dc86c31ce0a28e_compact.jpg",
            "ca08f888-a50f-4179-88c1-9a701411ec0b_13063ef3753a420383f4988f5d7d837f_compact.jpg",
            "0c7be7ec-0cf3-4158-82b7-c2bdfe10fa0a_2bd07a3a95784605ab2feaf471453c88_compact.jpg",
            "51c71c2d-ba97-4d08-b0ab-87660579a6fc_cfb1f3a487bb44039f7471816b6a2806_compact.jpg"
        ]
    },
    {
        "name": "AF1 CRATER SUMMIT WHTIE - CZ1524 100 - 41",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO25052438",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 CRATER SUMMIT WHTIE - CZ1524 100 - 41</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "90760a52032ca372fa3d_500e5dcdc51742ebbfbb6278021d649e_grande.jpg",
            "a712918d-c66c-4a48-b23a-0f6b8c680a2c_e0f6e16104614813a91b3cd4a834d293_compact.jpg",
            "979a2541-e455-40cb-a5f1-abdfae63f4dd_adca57954a61431289f6cce9c18e4848_compact.jpg",
            "6b22458c-246c-4a14-994a-c5089481e3ab_428adb0978a94b72924b9aa29b29563d_compact.jpg",
            "ab959dae-5e89-477b-90ea-b995b0bad603_5ef472a4953d45cdb3d60a441650c160_compact.jpg",
            "b57973ac-8a9a-4f27-9426-76aafa9ae401_814dc69517224084a8810dfc39b930ed_compact.jpg",
            "0a7c51f9-7e23-4597-a32f-eb6ca5d5976f_16bca34de19346849298f41c60cfd372_compact.jpg"
        ]
    },
    {
        "name": "AF1 CUSTOM BY YOU - DN4165 991 - 37.5",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO13042428",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "37.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 CUSTOM BY YOU - DN4165 991 - 37.5</p><p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "8404b49b74d7da8983c6_c7cbbfa4b3bf4183987a6e3b52c1c5c9_grande.jpg",
            "4b0a975e6917c7499e06_32cd55c6c9144530abb38ef30aa1678d_compact.jpg",
            "0aa9d4f02ab984e7dda8_385e20c7ec6c462a885e7396d1449e14_compact.jpg",
            "8599ebc01589bbd7e298_15d3a85593374e7b88a7139f391a2907_compact.jpg",
            "c51b85517b18d5468c09_590bf8ae0952489e848ed17fcbb21657_compact.jpg",
            "3629757c8b35256b7c24_bbec04fef34644d59db6914ec953de1c_compact.jpg",
            "df1e68499600385e6111_0ffcf8a71f8243f2a8f586b7db1a55e7_compact.jpg"
        ]
    },
    {
        "name": "AF1 JUST DO IT SUMMIT - DV7584 100 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>AF1 JUST DO IT SUMMIT - DV7584 100 - 40<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "b080b33a27369f68c627_13172167372d4884bf8c1d1109bc8222_grande.jpg",
            "2cbdba28-eb31-4afa-a8d5-c888f449c792_9dd39bced921442285d35dc98bed2343_compact.jpg",
            "e756e6a5-756b-4c03-87ae-35d202fd3834_cf03a4cf9684482da47bf51844e7f461_compact.jpg",
            "3a2fff0f-d7a3-43cc-9103-0a0a7a0b02ad_241d6afbc6274a92a1b4daf4bc6e51af_compact.jpg",
            "0cdd66e6-660e-491d-a47f-73f73ab0079d_704e2f1e23d2484c83eae8544a5d63b4_compact.jpg",
            "18c910af-58db-42e2-866b-2293459ee5ea_c0448ba8f44645cdac1918afa070a07d_compact.jpg",
            "0003ee48-6141-4072-8b45-84abf82f1e1d_31af07130b6640599b91035a3f6ab271_compact.jpg",
            "85c50c5b-5b86-4a2a-b7bf-3ac42e6281e7_59212e1754254e87bd8ef8265af3311d_compact.jpg",
            "0d2f885a-1d61-4fa1-a774-ac491fb46aac_2d35acd96cc049da879e6dbce24b7e6c_compact.jpg",
            "fabebecc-2eb1-403e-882b-22adf539f5ba_95fe8924b1cd4ac592ba2965beca2d51_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW ALL WHITE - 29.5",
        "brand": "Nike",
        "type": "AF1 Used",
        "sku": "BO17022351",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "29.5"
        ],
        "descriptions": "\n\t\t\t\t<p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">MAKE SNEAKERS GREAT AGAIN !!!</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Thương hiệu uy tín hàng đầu Việt Nam </span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">7</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\"> năm tuổi</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">AF1 LOW ALL WHITE - 29.5</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Tình trạng: USED - NO BOX</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</span></span></span></p><div align=\"center\" style=\"text-align:center\"><hr></div><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành keo 3</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">&nbsp;tháng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Bảo hành chính hãng trọn đời</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Không thử giày, không nhận đổi trả.</span></span></span></p><p><span style=\"font-size:12pt\"><span style=\"font-family:Calibri,sans-serif\"><span style=\"font-family:&quot;Times New Roman&quot;,serif\">Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span><span style=\"font-family:&quot;Times New Roman&quot;,serif\">.</span> &nbsp;</span></span></p>\n\t\t\t",
        "images": [
            "09b7f481a4a17eff27b0_3381d3a7e97f4f9c826d93013a61298a_grande.jpg"
        ]
    },
    {
        "name": "AF1 LOW DIGTAL SWOOSH - CW1577 100 - 40",
        "brand": "Nike",
        "type": "AF1 USED",
        "sku": "BO29072410",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>AF1 LOW DIGTAL SWOOSH - CW1577 100 40<p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566666269_3f0b8574e793033473840482d2cbdc70_5769c6ae6c5147d7940f1929cfbf2cbf_grande.jpg",
            "a29320d0-9c27-4589-a9d9-15d811aed7d4_a25ecf155dd043cca3ddfb8c9a2b6391_compact.jpg",
            "15a2d195-6fcd-40e2-a098-5b76d8d027e1_04604b8a58ec45559fbf74a228de3b7c_compact.jpg",
            "960f77bf-6012-4fbb-89fe-18bcd8bce5ca_8290af005e3749c8bf4075b24929c0d0_compact.jpg",
            "189729ac-4b20-4b66-a355-80ec80a2cae3_634c9afa8f9e4f3684bd0319788206b0_compact.jpg",
            "28a5d684-14e3-4966-b93d-c9325a501057_4d20cf56c4854903b58d1df5eb08090e_compact.jpg",
            "1493b779-b83f-4b0f-ba9b-14c831b2135b_741eebb469b948bfb1ce7941eb3e9964_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW EASTER - CW0367  100",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072413",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>AF1 LOW EASTER - CW0367 &nbsp;100<p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566637033_7f5a41b4d000322885ab29de0e75153f_b60cde1d754d423d85e2c692ed44a53d_grande.jpg",
            "e099f7c1-e8be-4b93-a428-6a085ed739a9_f3996147cb85489e8bbaf48ed0c68a76_compact.jpg",
            "76b9fcf5-9b0b-44cc-86a6-bc766b2be018_448537c063394d89a242e9d24c94584c_compact.jpg",
            "79fdc355-9894-43cd-a3cd-4fd266616ac9_1eaa2ed944534c35b534ba0714c5b3bd_compact.jpg",
            "c5a59d01-fd39-44f3-b20a-94f98557459e_1ea0af02742b4739be6282b8f331951f_compact.jpg",
            "0825bb6c-ecd3-4d70-811d-b07e3432c818_1f81501288de42958f653b423886891d_compact.jpg",
            "9a65123f-10a4-4cf5-9902-19bf70e53552_01b4d7b94b8c46b5907d324765cac834_compact.jpg",
            "b008695c-2be5-44c3-9244-89abbca237b3_66650de7739f4121810a381cad7777d9_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW JUST DO IT WHITE TAN - F81852 111 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072436",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>AF1 LOW JUST DO IT WHITE TAN - F81852 111 - 40</p><p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5679566757850_e04cdb5a14f819a3f83b35f33135778d_6075a77cf9ac436993181a2f04ed7f09_grande.jpg",
            "c41a0dfe-53dc-43bf-b57c-2d30c677cf48_30d28c64d2604783b8211b32a5f83c0b_compact.jpg",
            "a4d01e7c-ce67-4d50-a062-ea87e7ea3b87_e34398de64b547308d4bce712a942325_compact.jpg",
            "f6299439-a1a1-495e-bc6f-9518bba62a0d_cee0db8caca0456b8e1401b1a58cbbd6_compact.jpg",
            "c03209bb-ef56-4b5b-b337-5064ac7790af_36cde95fcaf94d6a8489009d3dbcb8c1_compact.jpg",
            "cc379cd3-ea52-40ba-9cf9-da767ad36fe5_f31b86349ad64c78b022feadd39d90d7_compact.jpg",
            "339e52b6-2793-41e9-b1e4-1c368a55ca15_6bb1d636b2c04adb895d32bd74ff82bc_compact.jpg",
            "5114a9f3-19ca-4688-865a-f9c73a534cbf_a34e4097aacd4d6ba036fccda9215359_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW ORANGE SKELETON - CU8067 800 - 42",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO18102407",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:16px\">AF1 LOW ORANGE SKELETON - CU8067 800 - 42</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "1f259d503adc8382dacd_519bbdcd97b44d21a7b5cd284cd07361_grande.jpg",
            "ae201848-3246-4a29-9ea8-19720e15ec55_09e283e599754ab598ccd69dab0f7940_compact.jpg",
            "a8a7a1ba-9a20-410f-9c4d-d40c8ca0187f_eff43d55513841aea7fed392343555c8_compact.jpg",
            "17d95eb2-57cb-42e2-b0f1-c0372a8d6253_4d7979c616bd47c9ab8ebfa2b8bc78e0_compact.jpg",
            "c4ffaeca-f121-455d-98b1-6203d26903fd_b47655497b23481c84b66b6460d7c956_compact.jpg",
            "0f07c4b0-753e-415e-ab55-8163e3ffd50f_25ed4688b19b4d3c9006feddfe930c1a_compact.jpg",
            "1dd397b5-b2d9-46a7-b4b1-d0af4fe0c1a9_786e1ef57ce34579bf06de3852669dcd_compact.jpg",
            "5bb211b3-f7c9-499c-b469-cc0fb3a4ae61_103a08d6cfed4dae99655ec0f88c668b_compact.jpg",
            "de0d76db-3eee-4b3b-b33f-d530afc00711_188a033f8ba04dc6b6cf4fa029c2d025_compact.jpg",
            "0aacb1af-19db-45b1-be74-110c919645f2_acdb76d18e714cd890bf611ddf0bb0da_compact.jpg",
            "77037f49-b3dd-4e8d-a49e-3d10f4b3df7b_ad1655ba43cb48c48e94bd0b9086d18e_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW REVERSE STITCH UNI RED - CD0886 600 - 42.5",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO14102416",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>AF1 LOW REVERSE STITCH UNI RED - CD0886 600 - 42.5<br>Tình trạng:&nbsp; USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "4ccee0ec97352e6b7724_8ffccda432c44da68c81491f9c347882_grande.jpg",
            "b6d136d3-fd42-4784-b362-bbe652f8d390_e78caa457581493c8b79d2b9145acb0f_compact.jpg",
            "4ae16916-33ee-46b1-8258-92ae0ba1e42b_6de47c81218a44e8832a04b374ea0b53_compact.jpg",
            "9a961a69-8428-45f0-940d-8bdf1771c6f8_c4866fa0039b468b809a424a7f9a1fd2_compact.jpg",
            "c0a454bb-5252-4939-9f25-e781e6f91975_353c11846a88403b9554a17c1065a6d0_compact.jpg",
            "9cb7220e-a151-4669-9b4f-0e63a52f1147_51ced4e908a1422db4258d91c6a4c809_compact.jpg",
            "c8ba2467-21a1-4b29-adb5-552ad3fa16a5_43e1eed79a7a4071af1ca3a44d6be2e4_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW SHADOW ARCTIC PINK - CU5315 001 - 38",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO27102407",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 LOW SHADOW ARCTIC PINK - CU5315 001 - 38</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "fb4146b3d2bf6ae133ae_a5573c3266384558b62661de20aff6fe_grande.jpg",
            "e31a6c91-90fb-4e10-84df-146fa70170ba_46da7f1661544e51b979474244159cc6_grande.jpg",
            "ffcfbae5-0296-4cc6-b9b0-269bd91f7269_22f31e0c78034d47962f08c3f58edd5a_grande.jpg",
            "ad32ea13-ddd7-4204-a1ec-531a2b6bd7bf_2f16e8b3151546a290e0260fabf322ce_grande.jpg",
            "f6111803-732f-4d6d-ac78-fb5f3dd96255_8f98ddb8f11b4846828b83ef6b3d8d60_compact.jpg",
            "2a0cf97c-2644-42be-b754-a105d6798c95_28d1985144ea466c9020dd954a9211fc_compact.jpg",
            "ae0b4983-e76e-4f2a-93f1-35f34dc81212_3ebd1c0a87e94329ae1e3db3c5f875af_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW SHADOW SUNSET PULSE - CU8591 101 - 38",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO27102423",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 LOW SHADOW SUNSET PULSE - CU8591 101 - 38</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "ed54c2fb55f7eda9b4e6_590ff861c6c040e49a14439db9343614_grande.jpg",
            "0f8987f6-29a9-4976-98d4-30e1b6023ce9_8bd4deebe73e4b71a94c267394c94665_compact.jpg",
            "00ed4dc4-0481-4f91-b83f-b2063f617d9f_1da53e0ec1d14d17a18cb25d86979359_compact.jpg",
            "bd5deb6d-b321-4657-a8d8-3ea90aac211d_be58cb5d99d344f79267b90a94110c62_compact.jpg",
            "6ba68e82-412c-4d3e-95d6-ab74a5016fc0_dac936b92f024573bdd855bc01a68e93_compact.jpg",
            "f592e6ac-bded-4388-843a-ea9751ad6b57_147d7b504be14176a975decd6cf0fbbf_compact.jpg",
            "1aa7a95e-2a9c-4176-b553-b0ef472c4706_3ce0441e61ad4948910ef7c3d374cce2_compact.jpg",
            "ea6a2d98-b1f9-41c5-a179-1b864c9552af_e7e1c252652e4ddeb61d0f4cf2816fd3_compact.jpg",
            "4e66935b-ed89-4e27-8144-aa0906ba3375_10fcb5e5f66c4c569952237c9b6f1d07_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW TIE DYE DARK SULPHUR - CZ0337 700 - 44",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO28092415",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>AF1 LOW TIE DYE DARK SULPHUR - CZ0337 700 - 44<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "13f8cbadf9295f770638_252811a556d84ecdb55360ed061ed116_grande.jpg",
            "3ac602c7-026d-4bf0-8b78-4d053fc25c9a_84885032a3094d5995ce4d79cb5900bf_compact.jpg",
            "c5c84ea6-d657-4ba6-9901-4d577242d6b3_a88ffd169abc4936bf0059dd1cc4a3c5_compact.jpg",
            "e5da0440-7ba8-4af5-9c5d-ce59f8cea12d_f02a3db76db34abbaccd097598285de4_compact.jpg",
            "f54e4ca4-9f10-4f9c-afbf-87278dfd9632_77b56a131c5444d4a53dfe8349c6ce78_compact.jpg",
            "8a843424-08fa-4706-81ac-c462b40a3a59_1fb5d00073ed4cbba34acb41b7ed7a08_compact.jpg",
            "0fa714cf-ed0a-42be-85f3-e03fb090c70e_87d8d0fe12824e48a6c963440a023fe4_compact.jpg",
            "b78da0ef-9326-4c2f-b31b-c76e839b3097_96ca803d3ba14df09191c1feb5184d57_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW WHITE CUSTOM - 315116 112 - 37.5",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072417",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "37.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>AF1 LOW WHITE CUSTOM - 315116 112 - 37.5<p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "7d304d32-40b1-41c0-8f1c-2af023f0d2ad_60fb28cf493841cf8dfb33a64415d2e9_grande.jpg",
            "7ef24836-5a03-41aa-a927-db9c3231d11c_dda43e1b6c58460ca5ea33ba4f3a1c19_compact.jpg",
            "5c246009-1d55-443b-918e-33482d2e640d_d9b8915bb84a4f7a91e04ebfff31379c_compact.jpg",
            "cda2253b-1d68-4ac6-a5ac-fc256608eb53_7ea700ec7dae468d9771434c3737917a_compact.jpg",
            "0cc2cebb-d631-4a9f-a711-0115f35ff25e_f1261283cf2c4f50b2b23a7190fa7e71_compact.jpg",
            "8567d7cf-9957-4806-a1d0-18734732b11f_a5ee8ec29ead474b9496f27f6b6f707f_compact.jpg",
            "498f69d0-8cec-4fe5-aa3a-6c30efb68599_17544d9f51574cdfa73aa462a98a6cae_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW WHITE GREEN DH7561 105- 42",
        "brand": "Nike",
        "type": "AF1 USED",
        "sku": "BO29072411",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>AF1 LOW WHITE GREEN DH7561 105- 42</p><p>Tình trạng:&nbsp; USED -&nbsp; No BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566801226_e8dd42641a989dc2b89b59a37a6a7a8f_ea956e8a9dbb40c3b3c8a1df701eaa8b_grande.jpg",
            "ec746d09-6819-407e-b97b-192d9defc68f_9be5efe8039c4ebb92c74aecb145a917_compact.jpg",
            "2b4fc8b2-19f1-4f61-8072-4027ab82871a_a0d5bf4ba0ea462cafb82adbdd807512_compact.jpg",
            "83f702a7-b7a1-4b6b-9950-e18fd842486b_d10e0c2d9b98421c9df87691a61de34c_compact.jpg",
            "aec1833f-75f2-4f7c-a3f6-899222eae9b7_be2f5ca78c1049fe9ee7ad02758716dd_compact.jpg",
            "069a8b0a-a9ae-4c9d-84c3-8676fe687a98_a9d6a8baf4d34c3c98214be06f6b3845_compact.jpg",
            "94d80c64-bad9-474f-a8e9-e0bc56e5703e_c84327951cfe4a5e9a58b0ea801c7809_compact.jpg",
            "a04e6dfa-a045-4718-93ce-b2bc756c7a8c_7e754cd6f4164af8a1c5a7772b5a8538_compact.jpg",
            "bc321f4e-8175-48e2-b4c9-72f350c10780_417775643d5b426985c85a0ac2a0c753_compact.jpg",
            "3a15cb22-5114-48f0-8825-f37d9f117b09_bf7cc319786b46b9a3c70893b8a39575_compact.jpg",
            "b055ce5f-2507-47ec-bb38-d80417cdacea_5b01c5b97fc1470980a8ae43bed42f66_compact.jpg"
        ]
    },
    {
        "name": "AF1 LOW WORLD CHAMPION - DQ0300 100 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO14102410",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>AF1 LOW WORLD CHAMPION - DQ0300 100 - 40<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "ecdb57ac2075992bc064_28689492220048faa595c3b91967c5df_grande.jpg",
            "7a265294-799e-483c-ad63-b846095a26de_d614e7396b9b47a0b3d6683788d86251_grande.jpg",
            "ece73d1c-61d9-47f9-a371-0dbc3c1cf99f_3d463548702b4b9a9802aa6b3247f397_grande.jpg",
            "e692479c-51b3-456d-8fc9-a46c9ad58a5b_b288d548c03248da9af236ea97acbb28_grande.jpg",
            "a0b6e4d5-ba7c-42f4-b990-a7f4fd456124_2be6efb2098248e682251e967ccee396_compact.jpg",
            "4101ac7c-d566-4d2d-8e45-a9d081352232_ebc8880695ed49029a3074b1381a4461_compact.jpg",
            "33d2e4ba-02a1-454c-a455-8df9462cde4f_f29f43dbc0304dfe9476e554a1e52c80_compact.jpg",
            "a6473a64-6fcf-4678-b7d5-e0c03b7c89fe_b37ce32cc1af4685a3ad2f0e6377746e_compact.jpg",
            "b98f4b52-05fe-4547-97b5-02f47351500f_525e53054793453db7537f5569f55a31_compact.jpg"
        ]
    },
    {
        "name": "AF1 MID QS JEWEL OIL GREEN - DQ3505 100 - 44",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO27102435",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>AF1 MID QS JEWEL OIL GREEN - DQ3505 100 - 44</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "74ff76c7e1cb599500da_5098b46ad1784cfe925bfebf6a21076b_grande.jpg",
            "bc3c3854-e49f-4aab-89e2-1290c157b9cc_3af9337b24e04ef8a8ea9001e542337a_compact.jpg",
            "0b47f21b-1ec5-4141-b8a0-c17510ad6c9c_7ea0a39a0b854086b479767cdc80fa20_compact.jpg",
            "41949d96-65cc-4f55-90db-4b370ae49deb_87108947a0724b51929a554e7cd99fbb_compact.jpg",
            "6d0bcb33-0e8d-4ed5-9353-ba08f6e7f4af_9cb0cf9ca8174bf7b14004b9acd9b815_compact.jpg",
            "59a2e991-c0ab-4453-a0e9-848590ca2f3d_a95dab0887e94289b2ae4950540ccf65_compact.jpg",
            "48b2f6e8-f3b5-4a56-a0e7-390713659bb4_e7a3fcd08d234a61a31a6157b2966d26_compact.jpg"
        ]
    },
    {
        "name": "AF1 OLYMPIC GOLD MEDAL - 718152 700 - 41",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072428",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>AF1 OLYMPIC GOLD MEDAL - 718152 700 - 41</p><p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5679566709535_cb733039c8c047be1a248d6bf676f378_4ba866151f634dc59996e28552976528_grande.jpg",
            "e1f7ca1c-a98a-4a00-8e6d-75fd28fd4a5f_e9b0c2e8f5d245b6834579a705564aef_compact.jpg",
            "dad5fbef-6fbf-4ab0-b765-bf3511a4a47d_171cae76627748c08d670a4adf705ec3_compact.jpg",
            "b2c333bf-78c2-4285-8408-b08ed43b8c53_2d66881adcc44154a499ddf6937a1454_compact.jpg",
            "9a3c2968-2001-49ec-85fa-9f8dbe48f69f_76f59768f80843b984eaf11825e37a24_compact.jpg",
            "c3ba8762-9684-4708-ae09-9eebb59d6298_8db37d7a647f45b796613051b3604a8d_compact.jpg",
            "a112ad6a-08a5-44a5-870e-0cd262272cfa_d76ad0b721c445c09c3986dfaf3bd7cc_compact.jpg",
            "10d4e708-8cb6-47d5-aea8-9676f61b7fc2_1f8d8d60e3bd4a99a2ed5ff45431fac4_compact.jpg",
            "dcac152b-cb78-4b9a-bf7d-a43194929203_77b4972002fe4133a7126bbb403e918d_compact.jpg"
        ]
    },
    {
        "name": "AF1 PLT.AF.ORM METALLIC SILVER - 38",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO23022408",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 PLT.AF.ORM METALLIC SILVER - 38</p><p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "3c21868af4b159ef00a0_e23e7d2c8ba547b39dea218b01668a47_grande.jpg",
            "abc74bad-3d40-4a44-8d07-2d4751939175_f2e52813f90b45a4a35c9bd75dc4588d_compact.jpg",
            "66508bd9-35ab-448e-84b1-fea0d831db08_d310a5df5669405584d30251396d7aed_compact.jpg",
            "db7f010f-3d1e-49f5-89bd-9913a6e5385c_3d376d4b256a42faa91ced1e0c7ca1c5_compact.jpg",
            "b4343709-1477-40b2-b7e5-5156174aebef_90a1c4246040436e8fcb5d38b324bf79_compact.jpg",
            "c4d1de39-6f27-4657-bb55-252b735b5ade_4c5a4770b540467eb5ad77634ab93cb6_compact.jpg",
            "2658dc54-098e-4464-947d-bd52a45fe351_d73222d4dc034460bb99989e2e707ab0_compact.jpg"
        ]
    },
    {
        "name": "AF1 REACT COCONUT MILK - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO25032430",
        "price_now": "700,000₫",
        "price_compare": "850,000₫",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 REACT COCONUT MILK - 40</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "d54ef768b2211d7f4430__1__962056ca45304d9ea699964dac6c7d22_grande.jpg",
            "ef9f703f-8661-4e17-aafc-e599b9817e8c_762c911425434b6685d84bd3114f86f5_compact.jpg",
            "fc671ed8-0b3b-4966-bf55-0041d672b9ca_2c267bde06914393aeec84562b0c652b_compact.jpg",
            "5a7e9e9e-a70c-489d-9d28-0a6004a2888a_dccd49c0873b4698abf424f9e9a711e7_compact.jpg",
            "c0b5b086-ad4d-418a-b894-5825ba2fc88a_a972dc119bc54d56867099b6467ca349_compact.jpg",
            "df93a926-5616-4913-9e77-a7940de077b3_aeefb35730df4c8cb7d23abf57330e60_compact.jpg",
            "1fb0ac91-6b9f-45a7-916d-82c289aec8c5_4c539f97cdbd4e778cdc368e059d42e4_compact.jpg"
        ]
    },
    {
        "name": "AF1 UTILITY WHITE BLACK - 40.5",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO25032427",
        "price_now": "800,000₫",
        "price_compare": "950,000₫",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>AF1 UTILITY WHITE BLACK - 40.5</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "7f48771f32569d08c447_2220aa70cf9b427d9dbe6cd06ec7c6b0_grande.jpg",
            "c07a0a02-f406-41ea-9f9d-c3b20fd4d651_5174138c66844a50beeff50f6f4acad0_compact.jpg",
            "f07e498e-0cac-4935-b55b-c08dd7fddcf8_8ef0a517e9394bd6a299325495899861_compact.jpg",
            "03b1be53-58b6-46fc-a1f0-404c233efb96_bd980773c6924e8d96dcf5f383563c48_compact.jpg",
            "dac57060-f113-4e23-a87f-9df579b4de8a_38ed29f84fc04a0eb7e0ccb8d3a8faf5_compact.jpg",
            "1d55b585-5538-415d-93d9-320a5547f4c6_fe73fdc04fb749c2a8a2215500eb99bd_compact.jpg",
            "bf9f0844-ea67-43fa-8a02-37dd9deb72b1_dfa557dc9e684848a4a8099a07d961a5_compact.jpg",
            "6b5d614d-bd6a-4c22-b73f-d67606e4dfef_f668c47a21eb4eb4ac2145ced0fafa36_compact.jpg"
        ]
    },
    {
        "name": "AF1 UTILTY QS WHITE - AV6247 100 - 40.5",
        "brand": "Nike",
        "type": "AF1 USED",
        "sku": "BO29072405",
        "price_now": "800,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>AF1 UTILTY QS WHITE - AV6247 100 - 40.5</p><p>Tình trạng:&nbsp; USED -&nbsp; No BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566781388_88cfcca2c9640fdbe55bcbab61cefcca_2a5d7cb784fd4becb0e2c9a615d5eeae_grande.jpg",
            "5ef5d7e8-8f40-457a-b7fd-2737c794b2b6_c6f1812c1479463aa7d9e41fa6ad6add_compact.jpg",
            "e10d98c6-ee82-43d1-ba04-93428814b6c3_bb0d00fff3ab4309b0f6c31738d4c76a_compact.jpg",
            "37370fbc-ad7d-4976-a13d-1e6e0ff58b00_216e3dab43c744398402c3247df3fb42_compact.jpg",
            "85c0be66-570b-4d13-b276-8e04654cf912_8c749d03d7634ea4bf23318278c094c1_compact.jpg",
            "25dbd666-46c7-488b-b462-467438bff364_9a4a81113c2e442a82d931a634d0924c_compact.jpg",
            "ed400684-9aa5-46af-b1ea-b33f8a58cf3d_7d544a71856c40988d45db75c4800439_compact.jpg",
            "b1c1c69d-2a4e-4292-868f-eaf55baf0c08_0c53d50e0e7245c6bc2e4fb3435d99da_compact.jpg",
            "e2bee89e-23c2-4de3-ae7e-ce775d59c242_75446efbaaa54f62a7cc84e850355893_compact.jpg"
        ]
    },
    {
        "name": "AF1 WHITE MEDIUM BLUE - DH7561 104 - 40",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072415",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>AF1 WHITE MEDIUM BLUE - DH7561 104 - 40<p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566714749_b8c0e7a9bbaa15be43417e12f6f2abc1_b1a8ac290358444d8b8e37a8bd982301_grande.jpg",
            "c7508c7d-75ed-4e8c-b81c-db01c877bee7_03941d678d304920aa427c2b3f5a3ccc_compact.jpg",
            "033ed561-d1a0-4441-a2bf-4020afcb468a_f0177f28c94c450db1904a966ff93a16_compact.jpg",
            "6b361129-bffd-4c7f-b5da-b504ec2fe3d0_ec70e5e0fe8d43489150f480046d4bdc_compact.jpg",
            "c1460203-3ba3-4078-8804-c69aa5059d50_e34e396e86324d9e85f2191dc0358de4_compact.jpg",
            "f6d131dc-e919-48cb-8f40-58fbfd38a681_200b96bf094549498b4d589ce5d14912_compact.jpg",
            "84b4db1e-6d3a-4be8-a09b-0ff45dcdbd50_5c5b2a66da9446a5b066c18623126d5d_compact.jpg",
            "d8121054-8616-43d2-ba1d-dc6ccef94d97_8d998a3da5fe45eaa34f6433bcbde232_compact.jpg",
            "c1ae7a9a-a5ef-48bc-b397-5401e1680e54_15d78c11898040b29d7c388a0bbb03a1_compact.jpg",
            "15adf998-1cfb-4c53-b8da-d36037a17b62_5a0bb11b261b48328dadb6a6b99d4205_compact.jpg",
            "04c2e8fd-65fe-418c-8176-b58635489158_8c5cd4830069448da51b441a1252c43f_compact.jpg",
            "f7ca7eb0-d67d-4b53-b67e-d583e9f35ee0_6e1e67ace9c04add8e4b2cd4feff9618_compact.jpg",
            "7b386b6f-aa23-473c-99f7-0b23d233c969_da161fec3cf1425ea806c4570dd40926_compact.jpg",
            "db8d23a5-a39d-4851-a0b7-53d5cf2a3705_52af120255bb4068ac3b83f74fa20853_compact.jpg",
            "679d94cf-ef62-40ad-9f02-e9ea26ddba8a_e351e7b356cd4b1aa8b1afb926e1a2b8_compact.jpg"
        ]
    },
    {
        "name": "AF1 WORLDWIDE PACK - CK7213 001 - 41",
        "brand": "Nike",
        "type": "AF1 USED",
        "sku": "BO29072400",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p><span style=\"font-size: 1em;\">AF1 WORLDWIDE PACK - CK7213 001&nbsp;</span></p><p>Tình trạng:&nbsp; USED&nbsp; - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời.</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5679566830740_a10ef06e9276cf187fc98b7b1988b17b_3a4efd40d1d747d7a915467a1bd21a02_grande.jpg",
            "93a0620e-9730-4a91-af81-e667d20ce5b1_31a725e956264880a996f389f0dd20a8_compact.jpg",
            "0e02e88e-4e17-4986-aefe-752b73aa7050_7da8d40a6bd0456abd3795733ad8c979_compact.jpg",
            "06ce16ec-7cca-4b25-95ba-7e5e36106e56_fa12a74c22aa4a1b8281ec1e777d0367_compact.jpg",
            "1ef3c9e5-9d0c-4358-b5ee-dd70a30f7f25_ae2d502c954a4af4ba4e3fd3a91f5bed_compact.jpg",
            "ccaf3f6e-750f-46f8-8057-6a0718a9d59c_e2b3b34229f74f6fb151534a684ecdec_compact.jpg",
            "182a3c5b-beb4-4981-bfde-ff1af065a04b_99232f3b92aa4453abd0838f6e7a0cad_compact.jpg",
            "b0defc7e-96e0-47dc-9db4-40360c530b4c_1b92557a3c4b4913a08f00537b48c1e0_compact.jpg"
        ]
    },
    {
        "name": "AF1 X GORETEX HI WTR PHANTOM - CQ7211 002 - 40.5",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO29072427",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>AF1 X GORETEX HI WTR PHANTOM - CQ7211 002 - 40.5</p><p>Tình trạng:&nbsp; USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "c1968e4a-6f74-49c3-aea3-dc7afdf99b6e_ece81edb2e564c34ae5cc8a336631fea_grande.jpg",
            "4f262977-16c4-4074-af8e-6fd44aa1b4bd_31c39e52923342afaad5b107ba8859b8_compact.jpg",
            "a32f7830-1b78-47a6-ae28-fe3059966687_8345ca62eb24499f92e5b4390e89b6f0_compact.jpg",
            "15c51fc9-b2cd-453b-b9b0-d11a6d270961_2d9ec81824844c09a2a716ffac191ead_compact.jpg",
            "7278dd1e-f5ee-41f0-abe6-34f8d2dbb04a_229a86a4198e4d6c9cc4fa48a845e7b2_compact.jpg",
            "cd1dea6f-d70c-46aa-92e4-263513c17d62_bb79b00434684b8b9f56841a3285ff21_compact.jpg",
            "86a14dec-ab76-498e-b14a-59c4e973c9b0_656bb671872e471faeb7fb7bb86bac59_compact.jpg",
            "155123f2-36af-41d3-9d1d-97db1e0431c3_de0f357a649b4455b8b3a8ece7b88b1a_compact.jpg",
            "2eccea82-b8a7-4ae2-b29d-c215e5365071_633e0265eb54415e840b2d8210760246_compact.jpg"
        ]
    },
    {
        "name": "SF AF1 MID MUSHROOM - 917753200 - 41",
        "brand": "NIKE",
        "type": "AF1 USED",
        "sku": "BO31052437",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>SF AF1 MID MUSHROOM - 917753200 - 41</p><p>Tình trạng: USED - NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store. &nbsp;</p>\n\t\t\t",
        "images": [
            "d87f4153a48d04d35d9c_3d1a21d6c22f45a0989189c294de0eb7_grande.jpg",
            "b3af645c2ab18aefd3a0_c8d35b33f717493e8fcf11e7320b9a26_compact.jpg",
            "c5b7a75ae9b749e910a6_78306cd6c73046638bdd27c6c4ce5b26_compact.jpg",
            "5129e3c4ad290d775438_3e9691965779457ab690c2a363c88a00_compact.jpg",
            "9b8ad4669a8b3ad5639a_575625df309d4fe28e16095a2b0e06f9_compact.jpg",
            "5c8e33607d8dddd3849c_7af2f38664f449de810fb3f0a075b301_compact.jpg",
            "e19b24726a9fcac1938e_8921c1a95d324433aa96d82b037da7c6_compact.jpg"
        ]
    },
    {
        "name": "AMBUSH X CHUCK 70 WHITE - 166516C - 40",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "",
        "price_now": "3,000,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>AMBUSH X CHUCK 70 WHITE - 166516C - 40<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "9b1999bbe5f75da904e6_d985c3d88d25492ba43a357187b56bc2_grande.jpg",
            "e545d246-b59b-4333-89a7-8b4f5527b9af_1aaaedae057e41898675b1197618a057_compact.jpg",
            "5e7947e7-0e29-4d99-9b10-981993e97336_34dad13203424c008039501292c9fd19_compact.jpg",
            "b72ab05e-e470-4024-9b5d-4b82bd8ff613_88221c701d9b4eeda68235dfc8dfe342_compact.jpg",
            "07706c4c-e8cd-4e79-883a-e7a6462f5c6a_9721f0deddfd47a682a7923dd84c7cbc_compact.jpg",
            "d6c9ec40-8221-4106-8b0f-0a852c8147f9_e42a7d1d219a42808dee8c20559ae840_compact.jpg",
            "7496eff7-7ec4-40f8-befc-7365980aa1a5_20b9cc9f37ae4dce855a90bc4d071a1c_compact.jpg",
            "a873af38-644a-459d-88c2-3ff39d6c2376_01a1d5b2562241cea63bb5f477cef590_compact.jpg",
            "086be66b-de46-43fc-8894-c87fdf21acf3_b593941314b44789a9bc8a2deb19e4d9_compact.jpg",
            "9e0e17e4-f70e-4401-a1df-46706a5a6223_6161e13424684bc39c6e16b080cb8dfd_compact.jpg",
            "f544b618-e930-41da-b834-6519e6488619_3eea00958ba14db9b69bef8d30ca3ded_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 AT CX RED - A06119C - 41",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CHUCK 70 AT CX RED - A06119C - 41</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "d7db84941098a8c6f189_2326d32826bc417bb13c054a908b52a8_grande.jpg",
            "bbd1edd7-252c-466c-8d89-fd59de8f255b_ea7c7e533fa140f986196244708a0dda_compact.jpg",
            "a636201b-f728-4918-bff6-324451201f01_685c6115dda24e24b09c60904a4c4b4b_compact.jpg",
            "d0ee66c6-3d55-4c74-b692-363f79003e13_0f692a018a984c1890677a19acd36021_compact.jpg",
            "73ef9336-4553-4ed4-ad84-28c98376899e_8f82274373df4c4cb148d67640da255e_compact.jpg",
            "7fd21690-ac59-4f5e-afce-48585549792b_7b024c84e4c94765a4f83c553cd5238d_compact.jpg",
            "432b9967-f884-4430-8450-a2abfa7cbac8_50aef54915fa4c2a9d7e49087b4e11c3_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 HIGH BLACK - 162050C - 37",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO28092421",
        "price_now": "500,000₫",
        "price_compare": "",
        "sizes": [
            "37"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK 70 HIGH BLACK - 162050C - 37<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "00ea80dcde5878062149_a795d59150a247e7870fc3d09975ebcf_grande.jpg",
            "9f01b3bd-dd93-42b9-b3b2-df43f87a61b8_228bd83694c4460c91dc66d0679a3000_compact.jpg",
            "9d0e04cf-74b8-4314-9022-a4545527474f_05b499a85d3842eba0f77492481c2838_compact.jpg",
            "ec1f96fe-0ea3-4a1b-bdf2-b02acd0907e8_4b4c3b0c27c644d6b9e061a0bee4ee28_compact.jpg",
            "b8ec599c-b537-4a15-8738-8b54e42cf890_d65001012b6b4a889757597a7d9f60d7_compact.jpg",
            "25bfb753-749b-4f22-a7e2-a021260e2f9e_50cbff859dd144a3883692de9de0b690_compact.jpg",
            "348890be-60c2-4e34-ae3a-87bb5414f0be_cbcef6cae187463483d8399928b6081e_compact.jpg",
            "30119deb-55a0-40fb-aa52-b7c033a29ef9_7c26f06765ca41adbf69ab8ad0165355_compact.jpg"
        ]
    },
    {
        "name": "CHUCK 70 HIGH PEACE & UNITY - 172259C - 41",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO14102407",
        "price_now": "450,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK 70 HIGH PEACE &amp; UNITY - 172259C - 41<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "ffc88a66fcbf45e11cae_2c5805ba71b74a5db04edb62281f687d_grande.jpg",
            "62e1960e-925a-41ff-8a85-a3b7c6a362bf_1f9dc36d96714942b307951b721caa81_compact.jpg",
            "417b79c2-e8d7-4901-a48c-4b4156d3f854_8ccd536ef1a54934be36c2f18e4d1b83_compact.jpg",
            "019e8494-88d3-4f3d-a110-1ace973f48c4_394adff03bbf4bca8d939895d08c8ffc_compact.jpg",
            "744efb91-e621-42e1-afa9-487ef0faa4a7_8901c071a8794b48b7b11f22b67bc309_compact.jpg",
            "99bbf1a7-8e9e-4993-b491-c2d2f9413f64_acce7293a9384ddeb778572509d95917_compact.jpg",
            "d7f2977c-4860-494c-84b6-11816c2a520c_78c84805f49a404b91a24900a2749119_compact.jpg"
        ]
    },
    {
        "name": "CHUCK MOVE BLACK HIGH TOP - 568497C - 41.5",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO19092420",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CHUCK MOVE BLACK HIGH TOP - 568497C - 41.5<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "b14379ad69a2cffc96b3_0ba2c2c9f5a24722984da5cfca2c157d_grande.jpg",
            "10dfa642-3e45-4fd7-9ea8-f88bc094f558_0a813bea72074fdc94ce8c283f85cdad_compact.jpg",
            "b8487c66-832f-4d4e-95b3-9fa4b21da4ca_b631c703f2c64179bf2d1256fc81d3b8_compact.jpg",
            "f747392e-cd6f-4149-bad5-b274071a8436_59c3ad2c304b41cbade1b03bcec6eceb_compact.jpg",
            "61a93f87-b922-4d74-9fe3-4fcf37796cd2_a1495164e4ec448c98134f0a30383db8_compact.jpg",
            "93e4bc0f-4e96-404c-9cdd-1bacadca50fd_e54bf9cc6f374840bc9ff84a060ea6a3_compact.jpg",
            "7f020631-f783-464a-b6d1-3d6862cc6f37_56c2a7024dbb4553bdffab20509fd260_compact.jpg"
        ]
    },
    {
        "name": "CHUCK TAYLOR  CONSTRUCT - 45",
        "brand": "Converse",
        "type": "Vans & Converse Used",
        "sku": "BO15032415",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>CHUCK TAYLOR &nbsp;CONSTRUCT - 45</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "0813b89a36529a0cc343_cea65a5826804140ba5d3f9b1e891ae2_grande.jpg",
            "f3265c937f41d31f8a50_4fc673819555462d8d0917e1c00288f0_compact.jpg",
            "d3867a3359e1f5bfacf0_a72f1e6b5f654e82832f6a3af504a726_compact.jpg",
            "7522d197f2455e1b0754_bb7e7c9b621844e1acb514eabac4cb00_compact.jpg",
            "a675cdcfee1d42431b0c_d599fc7fc7ce4df4bac205aed461937d_compact.jpg",
            "0a306d8a4e58e206bb49_03b92c2bc1234c18b9393f9da23d4b06_compact.jpg",
            "4978d3c1f0135c4d0502_dd8039c6ddb141c1bb11938f33aaf123_compact.jpg"
        ]
    },
    {
        "name": "CONVERSE CHUCK 70 FENG CHEN WANG - 169840C - 41",
        "brand": "Converse",
        "type": "Vans & Converse Used",
        "sku": "BO1207240715",
        "price_now": "2,200,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>CONVERSE CHUCK 70 FENG CHEN WANG - 169840C- 41<p>Tình trạng: USED- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5626121065766_4ddee840bd2ce1e79fcf6693ad50e065__1__062d5d27cd5144b4b60ba72d24e220a5_grande.jpg",
            "5949b268-388b-4928-97b7-b6a0d277be9d_fc9c29eb327147a08bf6a28dc91395e8_compact.jpg",
            "ba4114dc-2656-468d-a31e-740a3c8f9364_f811c4a0ec844e4bbf2d63d8017c147c_compact.jpg",
            "ce7ae406-4056-47bf-a574-ced5b4c7e1a9_09b4e33c09ce4991a3047e05782c30a4_compact.jpg",
            "6fbac72d-4bde-4ac0-bec4-72be68b4faaf_89360eeb3c064677acc113b77142ef11_compact.jpg",
            "dc215009-e2f5-4f34-8b96-3991471f4548_84776b998bb346adb0f563f4a26bd5c2_compact.jpg",
            "35a3c0b1-9775-4edd-8acc-2c0374ce463a_24f410fc19a3475d93cd11ea72b6c02a_compact.jpg"
        ]
    },
    {
        "name": "CV RUN STAR MOTION 'WHITE' - AO3242C - 38.5",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO19092410",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CV RUN STAR MOTION 'WHITE' - AO3242C - 38.5<br>Tình trạng:&nbsp; LIKE NEW&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "4d648098a09706c95f86_d2fc1d526abd47a6b9a42f07e972c6d5_grande.jpg",
            "53af09b1-cef8-4511-88d1-818c78fd4cfc_e81e041cb57644d094a205e934efae9b_compact.jpg",
            "4d701378-976d-4e27-a0d1-e4ad8b8fd983_d956810402bf44da9e817181deeafa9f_compact.jpg",
            "52992b1e-5b8e-4e83-8d47-bc592ec26ff8_36d79feb9d8b404380073145bf7d3934_compact.jpg",
            "d696e3b9-b152-4c41-a0c4-52c74144e09f_fa73f5638be545f8aebfa933368cc2bb_compact.jpg",
            "80a2bd42-73e1-4046-aee0-1978021ba842_100803dd5907455e87e8680435553137_compact.jpg",
            "c65ad2e2-03e3-4def-ac0a-a85c761f12f2_541766b788434b53b5c65d9a81d7f9d0_compact.jpg",
            "0677159e-9a55-41ff-af35-3fc04b56aba6_450bf09970e44773a9fe0dc139111de7_compact.jpg",
            "d441c72f-f518-456f-a117-5a80bbf3b697_a3ee45a643c347198b2ba8dc10cb647e_compact.jpg",
            "254e83cb-5180-49bd-a1a7-ab1db5e47114_65f0ce4704594ab29c49a158b004460f_compact.jpg",
            "b9e3363d-2f43-4079-b210-1a0bfbe59628_b83ff91693ef40a99b4c62a1801808c1_compact.jpg",
            "358319f9-5007-4a8f-8cf4-d32cdcc907d8_97509cc263104486aab74e25a1cbb664_compact.jpg"
        ]
    },
    {
        "name": "ONE STAR ACADEMY PRO SUEDE - A06426C - 42",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO22102434",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>ONE STAR ACADEMY PRO SUEDE - A06426C - 42<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "6ef71b51671ddf43860c_737afc936b7545eb8e58920c303cc85f_grande.jpg",
            "f7b511b3-ee1b-4b08-8195-465c02b067be_a262fa8bec0d47e4954e9a865d49026e_compact.jpg",
            "58072f00-ccff-43d2-8d5f-a13deea76f7a_9ce566a8f37c40b0a4ff6e854a9cabfa_compact.jpg",
            "92b32a42-7c9c-49a6-9d12-b9ed9976b1f1_cba9a770c1d44f48a2ffd845ed3cf1d8_compact.jpg",
            "d11ecf61-65a9-46f9-8323-05a179fb3429_8d027bf5294a445bb07e0a2c96b9afe0_compact.jpg",
            "43072044-6a5b-41a6-934e-35718237ca9a_38a56fc407a944abb265f2bb14f2d987_compact.jpg",
            "0594261e-3303-42a4-8965-04e32d068d54_cdc1add3b4a94c20b9165150031b928f_compact.jpg",
            "24b6a8bf-9769-4a4b-b1ee-5ceefb7c676c_0c2afb7d0da54282b54854e82aa9cffe_compact.jpg",
            "c5c935f5-87d5-48f5-9fd6-278f1c0542a6_6fee1af1bd3e4ccb910ea734adb9b7f0_compact.jpg"
        ]
    },
    {
        "name": "OSK KENZO FLORAL WHITE - VN0A4P3X01H1 - 44",
        "brand": "Vans",
        "type": "Vans & Converse Used",
        "sku": "BO08052408",
        "price_now": "1,250,000₫",
        "price_compare": "2,000,000₫",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">OSK KENZO FLORAL WHITE - VN0A4P3X01H1 - 44</span></p><p><span style=\"font-size:1em\">Tình trạng: USED- FULL&nbsp;BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024132780_cbf70760037d3ffea086f98538f14855_336e68aaf04c4c48836cc4c02992e2fb_grande.jpg",
            "48b6686f-d077-41b8-a4e7-3393e41a8c15_25c83a8124d047a19a2d2a8f8ce37f1f_compact.jpg",
            "1e03cf74-afdb-4881-9a61-ac55b64fd401_433bafb1ccaa4315a2104d5b8ea54326_compact.jpg",
            "186fa2c1-0579-46c5-b454-5138a8df57ba_2a59f7837bb54b1e8a1e9b9b7c852592_compact.jpg",
            "34a92ee5-b6f9-4629-a2ca-79f7f1898a89_2bcc3636616e4032aa5f0dbcac8aff6f_compact.jpg",
            "8460727a-a2b4-40a7-a266-45238ac82438_28bb78de5d06456482d6c400850a897f_compact.jpg",
            "7392f57a-c9a0-4019-b616-cf7454afb409_5452e9b0fcd04b91925eae74bae6a941_compact.jpg"
        ]
    },
    {
        "name": "RO X TURBODRK CHUCK 70 BLACK - 172344C - 42.5",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO23082420",
        "price_now": "3,000,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\"><strong>MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</strong></span><hr><span style=\"font-size:15px\">RO X TURBODRK CHUCK 70 BLACK - 172344C - 42.5&nbsp;</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</span></div>\n\t\t\t",
        "images": [
            "c08b0bda1744b31aea55_fb9eaecbcee247ad8a0b786b64beb6c1_grande.jpg",
            "2fcdd2dc-cecf-4428-b93e-b638800ed468_2423e98c585948a3be7684e0762b949d_compact.jpg",
            "cd11de1d-3710-4862-bf2e-9c18a37021d2_a07bf9be58764e66a2d5504851b86707_compact.jpg",
            "9a1263a1-86bd-4b7b-ab7b-49e94160bb4c_0e93cb3e7d7d4da98952d889f575403b_compact.jpg",
            "4a75af73-5bdf-4feb-9d6f-39118f285032_4a7b930bff5940bc8b1eca67dadbbc1e_compact.jpg",
            "8e913412-fb04-4d3f-8bd7-b1ac89461915_da17d05dd8d34d7a985c35e15149fb67_compact.jpg",
            "35af4747-3844-4d6b-83a9-e7bb1482c33b_ff3407c3363d438b9d8ad7cd18dce209_compact.jpg",
            "e8db941a-c00c-4c72-8321-10ebe913d7e3_e44338e5a887466dbb95e41cb89f0d51_compact.jpg"
        ]
    },
    {
        "name": "RUN STAR HIKE CRATER - 171574C - 40",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO22102419",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>RUN STAR HIKE CRATER - 171574C - 40<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "4897824bfe0746591f16_e2177faf53ac41208f927419d003dae9_grande.jpg",
            "51f1ace8-25c1-423a-aef7-2d181cc1c5e7_2a1927a4239f4b079dbce39a1c079158_compact.jpg",
            "6a10578a-307e-4a6f-b112-9888913db821_e60617410abd4b76b6c2a77828e90a86_compact.jpg",
            "1c7bce90-e1e8-46e5-ae2a-2e25c6bc11cf_42bc24145d5a4986979ff8f4a2a671d1_compact.jpg",
            "038cbe64-7960-488a-935a-b5057dde7632_09b6aeb5a21e4a60bc19ef84206cf7c4_compact.jpg",
            "d6e91bf8-b09d-4409-9212-bce21ea960fe_2a03e582a2514e66b3a6e4f7be9307ed_compact.jpg",
            "bc89719e-2fd7-47c2-8469-642329fabc57_f48cd9d55a3545418c61216da4e446c3_compact.jpg",
            "58be0e6d-56ff-4517-9682-e06753c0085c_690af32f47174ce2b4604b492667155c_compact.jpg",
            "6ea7d9b1-1eea-4576-a770-0fe5313471ef_30505358f7e642e9ab5e33dc4f6ec2ff_compact.jpg"
        ]
    },
    {
        "name": "RUN STAR MOTION BLACK WHITE - 171545C - 39",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO22102428",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "39"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>RUN STAR MOTION BLACK WHITE - 171545C - 39<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "72804d22316e8930d07f_1784f345271c481b9c50eed3bb3f4770_grande.jpg",
            "3f6c82cf-ca1e-4d07-94f2-0fb32a5f9a4e_d079bc4c09884f98a9e38e7f1dcc79fe_compact.jpg",
            "97d84c5b-42e4-48be-882f-5ff8e4c1fdf5_f18f9a63fb0a49a59d6858ffa78c098a_compact.jpg",
            "6e4b774c-7be8-4cda-ac82-5e523a4bf794_cf8e7a16d0804f78af9aea9e6c1fb07b_compact.jpg",
            "15c3d2b8-a5a6-4f5c-ae37-0e7df8303886_ab06c45a67c043918cd7c2ad0c8aef58_compact.jpg",
            "aed7e1bc-5fb5-4e00-a1f0-e19732f0a669_1bcf770c44e84ccd81eb09287ceb4f91_compact.jpg",
            "710e51a4-4c2c-48d6-a267-d05dbff04421_1f4ae7c2528441429b2ec30601e6e4f7_compact.jpg",
            "3207a887-020b-4c58-8a5e-c7ca6a035699_2237eebc749042649f0903dc0adbe238_compact.jpg",
            "cf80f9e3-4342-4644-b79b-b19d9fdc2cc5_0a566ed6c4044136a346443da0ca4ad8_compact.jpg",
            "c5182bc1-d129-4c6a-b3de-c5d2000fc0b7_7924fae867b842e4b1add281c79cab88_compact.jpg"
        ]
    },
    {
        "name": "RUN STAR MOTION HI TRANCE FORM - A00874C - 38",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO19092411",
        "price_now": "900,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>RUN STAR MOTION HI TRANCE FORM - A00874C - 38<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "f37d8681a68e00d0599f_825ac1279a9d467db1226525d56870a3_grande.jpg",
            "41a33a48-f127-4a1d-84df-c9049f5cf95f_1e1bdc5d3b9d4791b8b7c062978aa519_compact.jpg",
            "14bfb155-72ec-40bc-9f27-2b35eeae3381_28cbbc2632d94bcea15af527fd0505c1_compact.jpg",
            "71533b75-48ef-40ea-847b-a7e0e9ea4e46_df840dc9858f4dba812bb7569e282b65_compact.jpg",
            "5f39bcf0-6de9-4105-8062-06afd3735c94_05563648dc7845538d8cbdfef0a98d81_compact.jpg",
            "d4c6aea3-bb0f-43e5-a578-6e0703696eb8_7f63f332c0ca44a1bc47fd2d96565940_compact.jpg",
            "925ac247-868c-42c1-beb3-775610de97f6_7bee32002e1e45fca10dd034051788ab_compact.jpg",
            "90e6e1b1-1328-4c2f-b0b5-859ad292019c_d85cf404bc1a4143ad914ada06ecd2ee_compact.jpg",
            "e636b2eb-2582-4b36-8275-13e61751e42e_53381e0b07f344a0b651a68bae0a99aa_compact.jpg",
            "cf33a074-0a19-429e-8e7d-32327f8b9a8c_a0e401a30ed947fb8a08decb26b3224a_compact.jpg"
        ]
    },
    {
        "name": "RUN STAR MOTION LIGHT TWINE - 171547C - 40",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO22102417",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>RUN STAR MOTION LIGHT TWINE - 171547C - 40<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "824c20ee5ca2e4fcbdb3_60c31544b29a4f6283e2a7512c2b3095_grande.jpg",
            "b6ba200b-f500-408b-860f-3d00b02446a3_dcd1c14e6f2d408ebefa9521efa2939c_compact.jpg",
            "04342e6d-d52c-4388-a883-601a3062f8b0_11393307697e4137b2288a0faa6cbbde_compact.jpg",
            "2b7a23b6-a4f4-4dfc-9b19-3a2ddd015761_10cadaa6f76d48c89b204e595c7e3b7e_compact.jpg",
            "707de487-4ee7-45b5-b89f-c0606f6fc5f7_ce057473cb6349ab9ff7a7ba2e0b64ab_compact.jpg",
            "8d2d6afa-3026-43ab-aba8-b20ed36dff74_95d930734a414cc494f604a92ac0519d_compact.jpg",
            "8e82607b-a8d7-4f86-9737-7a00e14281a2_700f522bb09047e9b4a3e0c1cbb65cb8_compact.jpg",
            "c73a8473-efae-4fcb-a46f-da039db14f4f_aa6a14302f064d799c7e8632c50eefc8_compact.jpg",
            "337e9457-5e0f-42f2-b766-e81c3c871377_2cf3c816d5f141cca321a68a2ab6a1bb_compact.jpg"
        ]
    },
    {
        "name": "RUN STAR MOTION MARBLED - A03552C - 42",
        "brand": "CONVERSE",
        "type": "Vans & Converse Used",
        "sku": "BO03102401",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>RUN STAR MOTION MARBLED - A03552C - 42<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "z5892082777826_f086874d7f3513879b0d0514df219361_35d4cdf933e340c8ad2097443af92581_grande.jpg",
            "66654b1d-a823-4436-887b-e81ff6ee60ec_60ef40521e874f7f955a58aba53c18ed_compact.jpg",
            "2b8d5b02-8433-4d9d-bc8f-98e5a8f0cae0_0d1b74e183174d8d9c259edc3d54a5c7_compact.jpg",
            "4f7e0fd8-b8fa-45f5-9a3d-37c23fbbb79d_13aefbe9ca234dc68396ee49039c58fd_compact.jpg",
            "e62593ba-03a5-4e1f-abd9-ca857f241f53_18700ff6b48645f88c9466a22cc1f216_compact.jpg",
            "d1aed480-5796-43be-aea2-6fb3482cd325_c5743d453ac44925a44cdd8c19efcbab_compact.jpg",
            "fb62faf0-fd00-4d26-8810-2303cd2a6894_8a724bff4e164f389964a508d5cf73e5_compact.jpg",
            "af325481-ec3f-4b17-bae5-67ee1fb179a8_5bc4e6ca019d4743a54ca0e882969e8d_compact.jpg",
            "2428630c-019b-497b-a621-d8f0841f287f_da16cd0072154e9faf1b7a98c3cd3d47_compact.jpg"
        ]
    },
    {
        "name": "DUNK CMFT DENIM - 705434101 - 40",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO31052440",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<hr><p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p>DUNK CMFT DENIM - 705434101 - 40&nbsp;<p>Tình trạng: USED - NOBOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "152db70452daf284abcb_7302cf8c2303460ead4210fb0a335677_grande.jpg",
            "567e5bb2145fb401ed4e_427d83db9a444ec69ccd020b107542dc_compact.jpg",
            "797952bd1d50bd0ee441_4f54fc942c2f439aa26cfe9326e3dfff_compact.jpg",
            "1e908654c9b969e730a8_cb69484e7d114f928b06b8fe4097d6e9_compact.jpg",
            "2b89f84fb7a217fc4eb3_416a15a47c3343a59130a6e06b01af09_compact.jpg",
            "01d7b217fdfa5da404eb_b351af97cd8342bbb928e9862e268d88_compact.jpg",
            "2eb3b18cfe615e3f0770_b01b51af50d74c34b7435735b419d623_compact.jpg",
            "6ed44eeb0106a158f817_f57e2fd0aec54a26be4d088f2b14505a_compact.jpg"
        ]
    },
    {
        "name": "DUNK HI LIGHT CHOCOLATE - DH5348 100 - 41",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "",
        "price_now": "1,600,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>DUNK HI LIGHT CHOCOLATE - DH5348 100 - 41<br>Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.ADI\n\t\t\t",
        "images": [
            "62c79a453e7c9a22c36d_d0714e23bf37447e95851e9abdf68ca9_grande.jpg",
            "2134953f-ea57-49b2-8a56-e29397e35afc_82c9b3ed3aa646df8ad54171fbd46fa9_compact.jpg",
            "478da734-0a67-4efd-b930-ff1e41478fab_7067027378f64436a1df15e33a32f28d_compact.jpg",
            "fa085587-9d00-42d1-91d4-d1a39db00e7a_29a8baf0b2604f62b3ca5d0fd65ed768_compact.jpg",
            "a5b52cbd-6142-4480-8691-92851e87811e_e350db6b2c084756b23f7905d858e65b_compact.jpg",
            "80a77277-06ec-4ca9-a51f-f5a7b05a4cb6_ad28aa3e4eb04969a7117b371fffa2ad_compact.jpg",
            "ce5a707f-67c2-4722-8754-364e39178867_3024fbcb39684f4d95513fc81218e5f4_compact.jpg",
            "ffd4e6df-32d0-4bd6-ad6c-dc4a5157a0c6_7c0b89a9a5484ca5810fe813605cd2e4_compact.jpg",
            "e13143ec-9452-4450-a528-a27796025a5b_84708dfa9a084474852671cc2295f9c3_compact.jpg"
        ]
    },
    {
        "name": "DUNK HI MICHIGAN - CZ81149 700 - 41",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO22082423",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>DUNK HI MICHIGAN - CZ81149 700 -41<br>Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store\n\t\t\t",
        "images": [
            "z5756288546825_d09fc121bc5b9f85bcaea45f81d92e1b_69e77909f49f4bccae59eb334aa37be6_grande.jpg",
            "2eb08482-8b54-401f-9c5e-2e728378297f_45e928d29b2a4b36a3bc88b44d325630_compact.jpg",
            "f41bb241-718b-4458-9b13-e968c2496974_c8513f9a9a22447793fdad3788509320_compact.jpg",
            "bc608c56-2b93-4904-a2fa-869b5797b96d_3fa6d28e0ddf4bcaaeeeb4f40120603e_compact.jpg",
            "aaa7aa33-90f1-47ed-9060-0522ba480e92_f07db18bf1954ed08a3c5e2fd801bca1_compact.jpg",
            "4c470e6a-09b7-4af6-a2cd-b49be53625c0_4c2869b225b049c1a4e206f902f78d1c_compact.jpg",
            "2706cc03-4628-4a12-972d-46dc2a8d65a3_dcc30510adf94256b25504a6ad8e867c_compact.jpg"
        ]
    },
    {
        "name": "DUNK HIGH ALUMINUM - DD1869 107 - 36",
        "brand": "Nike",
        "type": "Dunk Used",
        "sku": "BO14012355",
        "price_now": "1,050,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>DUNK HIGH ALUMINUM - 36</p><p>Code: DD1869 107</p><p>Tình trạng: USED&nbsp;&nbsp;- CÓ tem - FULL box</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 3 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;</p>\n\t\t\t",
        "images": [
            "z5838477180482_3b5eb616e67879e2d944b8a85f0b43d2_58da425549cd42b3bab92a3682450b17_grande.jpg"
        ]
    },
    {
        "name": "DUNK HIGH CULTURE DAY - DR8753 077 - 41",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>DUNK HIGH CULTURE DAY - DR8753 077 - 41</p><p>Tình trạng: USED&nbsp;- NO BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "ab576a367073d12d8862_0986d0061b3e47418541332363f2ef73_grande.jpg",
            "be0f0dd5288689d8d097_7f0292cc905d4cb1b1d8d616df5044b9_compact.jpg",
            "087da38c86df27817ece_15ca8b38b6ac4976b5a16a83dc445c1f_compact.jpg",
            "da0764dd418ee0d0b99f_056b4ef9b7f841c1abd0e0c2fa383807_compact.jpg",
            "406caa9c8fcf2e9177de_cdf54fe0927d4026b2030391aba0d540_compact.jpg",
            "aa99706d553ef460ad2f_1ce6c30b11234b9f83e4078c13631027_compact.jpg",
            "7775dc8df9de588001cf_a49880a74aad4b238799be9fe89c32b0_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW BROWN SASHIKO - 44",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO15032410",
        "price_now": "2,000,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>DUNK LOW BROWN SASHIKO - 44</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "0bac2837a6ff0aa153ee_1e5b9ca94ea64d068bafa500a69ea54a_grande.jpg"
        ]
    },
    {
        "name": "DUNK LOW CUSTOM - DJ6188 101 - 42",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>DUNK LOW CUSTOM - DJ6188 101 - 42<p>Tình trạng: USED - NOBOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "c7b998d17d0fdd51841e_da269fa9ad4c43d19eaf40ed4107ebd6_grande.jpg",
            "31987f23-93f3-466b-a914-bba88f7c7af0_997a1b925bbd48179603da95d2eab1c5_compact.jpg",
            "09b3a748-358b-44e3-be54-1aadc80df799_0ab15d2caa8a44c8931c326d7b88a2d0_compact.jpg",
            "2fc90990-a0ad-4f34-8914-e439d3e6bafb_62bbfb8743c545aba9592503e045c66d_compact.jpg",
            "b981fcfc-0550-4cb2-b5d6-f619bbdee2cd_e096402417934140975396fb5b2c36b5_compact.jpg",
            "44ddf7ea-e0bc-47de-8a7f-c015f68041b0_a1af3d99fe7747e29695534df113438f_compact.jpg",
            "bb40b676-680e-4237-8ef5-0d32afebbb5e_73fbfa440e0949dea93d420d9f45c595_compact.jpg",
            "6fbd9e93-670e-4dc2-ac42-ab24e361d7b3_ccd5d2a15f1d429a91efefa35ac53b46_compact.jpg",
            "6940cd61-b92c-416d-b0b0-42db2abf5056_cad85734df124f3b8aab6e268bd2a875_compact.jpg",
            "22d840c2-b148-4473-901a-fda5ed089af0_88d5d30cf76147c1aa1841928439c236_compact.jpg",
            "ed6a4d31-1c9e-4c6d-b55f-60a16095fc0c_5a2e51d248c34c0a99ca9aca3c5fa7aa_compact.jpg",
            "f5c8c90b-438a-4ab2-9536-d299b978f0d6_69be0b78cfc9453daecdcd32515b01c4_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW DISRUPT RED GUM - CK6654 600 - 38.5",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO22082409",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "38.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>DUNK LOW DISRUPT RED GUM - CK6654 600 -38.5<br>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store\n\t\t\t",
        "images": [
            "z5756287468696_52f3108d343d1abc2c09cd05378a287a_92ad16847a924e1ca3607a4fba904cd3_grande.jpg",
            "2270c0f8-d064-40f7-b410-efd5bc55889c_7256788850c34a9fbef5b58c799ad4e8_compact.jpg",
            "54d8d4cc-c13d-4451-a111-9222f246b237_6bc9fbebc9c24decacd9da4bc38b2dac_compact.jpg",
            "a6931d66-f6c7-407d-954d-6c4cbfaceaeb_e0d7d1a7e8624a768d59b53f71ff6882_compact.jpg",
            "fe40c006-0fef-4ffc-a958-418dbf9eea62_72ef1a0484214529abb30f40b5fb233f_compact.jpg",
            "80d3f345-ffdf-424e-892e-26fe18a138d5_d1e4ccd436d9416483951b4bcdca1a69_compact.jpg",
            "f26588ab-046d-43ad-bd6c-e4e830aaee77_4e86391e903a4b528ef1e3301f7028f1_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW DISRUPT ROYAL - 36.5",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO25032416",
        "price_now": "1,050,000₫",
        "price_compare": "1,450,000₫",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>DUNK LOW DISRUPT ROYAL - 36.5</p><p>Tình trạng: USED&nbsp; - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng đối với giày dưới 1 triệu, 1 năm đối với giày trên 1 triệu.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "79d24ff80ab1a5effca0_206c21902e7147adb50ecd2ea5aa6caf_grande.jpg"
        ]
    },
    {
        "name": "DUNK LOW INDIGO HAZE - DD1503 500 - 40.5",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO12092426",
        "price_now": "1,200,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>DUNK LOW INDIGO HAZE - DD1503 500 - 40.5&nbsp;<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "47e437b6d41973472a08_3fb99c671326423597f305d8acda1944_grande.jpg",
            "2c716b43-daa5-4428-abbe-ba85acfc572b_66d2ca29469f4436b2272a486cbb2779_compact.jpg",
            "35cfb1fb-9003-4a08-890a-c7e850e64109_2364edef0bb84c17b7a2bcfc53ab3b6a_compact.jpg",
            "f44d0b5e-112e-47c5-b61a-df812ccfd8c4_2d37e74acae3426baa4e3d7445dedac8_compact.jpg",
            "ae69a939-237f-4826-8a0c-8df061af15eb_2571c2583c8d4813bf8adb805131c6e2_compact.jpg",
            "39465bef-523b-4d83-8620-59b1e9caa4b2_743ea24393b94145bc315ae3d4ca9879_compact.jpg",
            "97310a48-332c-447d-a563-514567052eb3_40176feb4e854ca89542601abb913e30_compact.jpg",
            "f775dda5-95ee-45e2-940a-b0c8fcc4f3cf_83d2d96c545743588bf7b08144e96871_compact.jpg",
            "c262720f-9a4a-406d-b81a-e0a491d62c2a_f654d51e2fc54433bce0653138a7dcb1_compact.jpg",
            "d724219f-8bf9-4b62-adef-0fe34639b56c_521fefef706b4932a133242d34a43f9d_compact.jpg",
            "21367c88-c0c9-4cec-bf5c-c8126d43ca69_416042eca5d342f795124070577ab4a4_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW KASINA INDUSTRIAL - CZ6501 100 - 43",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO28092440",
        "price_now": "9,999,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">DUNK LOW KASINA INDUSTRIAL - CZ6501 100 - 43DUNK LOW KASINA INDUSTRIAL - CZ6501 100 - 43</span><div><span style=\"font-size:15px\">Tình trạng: USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "ab059c7e-2f19-4591-b820-be3c81152af5_f719407d1a00490f9340e3385c2a5edc_grande.jpeg",
            "2ab42400-0b4b-4d4c-9012-59ad17789577_eda7f531d39e4a009f96315e92fa026b_compact.jpg",
            "1b4933d2-dc17-416c-8433-016394af17c2_f4051e0d46644466a15ef6b81d8ecb5f_compact.jpg",
            "c2d99fb1-b272-45c8-8d89-a60ef659bc40_e846e5b180b64a649490ca3d4b7ca058_compact.jpg",
            "cfe6a8b3-5dda-4673-abe1-d59e9dbcf4a0_63e9642769df466686ece2d25e165031_compact.jpg",
            "50ac8a26-35ae-4078-9b0a-6854b28b42f0_d28beab9e2144a8fb089cc5930e8b46d_compact.jpg",
            "ae3ac882-b4cf-43df-b540-3d46d1ac855c_e60715a093c34d6e8d3469babb78fcf3_compact.jpg",
            "2906207a-c080-4203-816c-0dcf367e99f5_25557fd132c24f0db38b882623773bd8_compact.jpg",
            "ea3e745d-da9c-4ecb-8888-6af790fcec6f_9ac01da2f2de4056bf070608aa9e0945_compact.jpg",
            "1c036c96-9bda-413b-ba07-d03ab51168fe_85295038646f45d1b2dada2e31c79955_compact.jpg",
            "cdbdc864-7d79-44f6-afcd-6dec61aba9e4_4bd5c068df92476bb49372bc012d248b_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW LIGHT OREWOOD BROWN - DX6060 111 - 38",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO29032420",
        "price_now": "1,400,000₫",
        "price_compare": "3,300,000₫",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>DUNK LOW LIGHT OREWOOD BROWN - DX6060 111 - 38</p><p>Tình trạng: USED - FULL BOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5979760124028_49f1884a16f3b51cead250a305e4b8c8_5d78fbc1be7844c58f387c53e75fab6f_grande.jpg",
            "b4a4dccc-cf7a-49b9-887d-3aec539a92cc_a17312d7f0fd4033b8a227b3cbfe25fa_compact.jpg",
            "b6a8c3aa-5b2b-4de2-86fe-3b95d2d8bda4_349b7fa42cd74f01a8449e59bf6bee7f_compact.jpg",
            "4cbaa4c4-ce01-4ab8-a376-c46af2350ca8_e210e8ff90464ae68bf840e9b509f519_compact.jpg",
            "89699b39-943c-4d81-908e-141cec739530_04099f829b1c4430815d7ad7e498ccad_compact.jpg",
            "6158fee4-7a23-41c7-a3d1-f2019199e07a_4b936d6990e04d46a7e804c0645c58b6_compact.jpg",
            "b676b2ef-a77d-4a0c-a4e6-7b19af590ce1_5a3c6e8df2b34106abb892cb320fcf70_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW NIGHT MAROON - DV0831 102 - 44",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO11102403",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>DUNK LOW NIGHT MAROON - DV0831 102 - 44<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "2efa2e4cfb7942271b68_87caaa2db6184f668c02ed6212aa390e_grande.jpg",
            "49cae187-cbd5-4c6b-8775-0ea1159b4d9a_31d429920f7d4721be72ffa2320c6b82_compact.jpg",
            "1a43ad90-a2df-40b8-b72a-ec6adabe358e_32b5ae424b424daeba31857555ea31fc_compact.jpg",
            "13e2a9c5-5adf-467a-945a-ed08a9a72cac_02cd7b3da226481fa4bb8d80d023d79d_compact.jpg",
            "cc92b4fd-60e6-4f11-889a-6d915a84749c_62145917cedd41048facb30762683a17_compact.jpg",
            "a5689aaa-c455-4280-b31f-d4000518b9df_7215c2efad7947c780aff41e4e6fbc84_compact.jpg",
            "bda37175-e197-4b6f-8136-4041a528a287_d27f65e803f2485eafb4c2127f4901a1_compact.jpg",
            "384b97e9-61f7-4a14-8cd0-4f959107ed7b_d8df0992e6424fdd9b4eed3f23d0f4fc_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW OFF WHITE UNI RED - CT0856 600 - 41",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO03102415",
        "price_now": "6,000,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">DUNK LOW OFF WHITE UNI RED - CT0856 600 - 41</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</span><br><span style=\"font-size:18px\"><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</span></div>\n\t\t\t",
        "images": [
            "affe187032358b6bd224_f41ce967d3db41d8bd9044e1ca36fbd2_grande.jpg"
        ]
    },
    {
        "name": "DUNK LOW OW LOT 19 OF 50 - DJ0950 119 - 42",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO27102447",
        "price_now": "4,200,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">DUNK LOW OW LOT 19 OF 50 - DJ0950 119 - 42<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span>\n\t\t\t",
        "images": [
            "f354671a280d9053c91c_90b84c5c9dc14706ab598ec7918c4e5b_grande.jpg",
            "eb099e82-02ad-40f2-a029-3108df888daf_bfebff1089204411beee34e7e264d8b3_compact.jpg",
            "49d00df0-a162-4abc-968d-ebb4498f4983_3617abc4b6e94b77854a07cda3a0712c_compact.jpg",
            "19832e3b-aac1-46c9-9ff1-9f3ef9bbeece_e4c29248472b4179b7c8297385c177f1_compact.jpg",
            "7d3dbdca-b8bc-47dd-9e99-afb72ebf6c37_f6cb2b8bd8484b1d9e402ea3456fbb18_compact.jpg",
            "c06e85c3-bd36-44c0-9e89-f3d71d12101b_902f1d8fcdfc41e08a782885c9acc632_compact.jpg",
            "d94be2d9-3af9-4771-81c3-2e24ad8bf3c9_f30d35ce54c641c59925461bacb52b6e_compact.jpg",
            "47419d7f-92d0-4991-b4a7-5a4403ef752a_0ade17d0b13d4a3aa4463e7a7e5bd9b7_compact.jpg",
            "84a106f4-014b-485f-8bf6-230945d261c0_7f0a8c222c5b4f588a55a047187b1e4e_compact.jpg",
            "990b2d63-1092-4226-a476-2113cd2b5afd_4b9deaeb4817463ca7b270bf30441759_compact.jpg",
            "649214f1-43e7-4214-bed0-26d792074b4e_c32588b2f4254c229a9321c689b0fa1c_compact.jpg",
            "32140a6b-ad0f-40ea-87b4-a1994a285e31_d2638ab45bd349d6abc707bea217df84_compact.jpg",
            "8ff1b824-2f7f-459e-9ede-1594daa46be3_340f6f6ec06149328342830fdf9c3c5c_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW OW LOT 29 OF 50 - DM1602 103 - 41",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO06082424",
        "price_now": "3,800,000₫",
        "price_compare": "5,000,000₫",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>NIKE DUNK LOW OW LOT 29 OF 50 - DM1602 103 - 41<div>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</div>\n\t\t\t",
        "images": [
            "z5936945202759_60e2f72be5a80cf71f2b072c988c1ac0_a535ec992e774d7da1a75e5b9629883b_grande.jpg",
            "e339af17-d7d8-4999-bda5-fd3819f2fc2b_4ff91c4d110349df8cfa69256b29e9a1_compact.jpg",
            "8d591df4-cebd-4fbe-a32f-99ff7bb70edf_010187c5bf024fbfbd41afe8b28be21e_compact.jpg",
            "216e5fe3-1c78-41bb-b49b-72ebd2d5c1ad_c2e01712e43d4e0b92c9114fe8522c9f_compact.jpg",
            "8d34aea6-1ca9-450b-828e-c6a1bcfa4d91_d75fd83404c149468208353e17220b59_compact.jpg",
            "b1010a0c-8a4f-4066-adf3-e60e88db563c_ee16ae895cab42e7ace58331a54451ee_compact.jpg",
            "31d59d8f-78ad-4356-8c91-e7adfbc98331_474500271cd7465aa696ab9e8eeb0e4a_compact.jpg",
            "d9f62200-e125-4b0c-8620-7cc737302bad_83f11de29e0d4b299e1e554441fc5804_compact.jpg",
            "ff598ff2-e680-4f22-aee7-ae6c0f9ba9be_12e5fafa9f764465b09863d7d93793aa_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW RETRO PANDA - DD1391 100 - 41",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO22102414",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<div>DUNK LOW RETRO PANDA - DD1391 100 - 41<div>Tình trạng:&nbsp; USED&nbsp; -&nbsp; FULL&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</div></div>\n\t\t\t",
        "images": [
            "4c2c978eebc2539c0ad3_9f46883f96474d9ca2c65daa9d2a5f4a_grande.jpg",
            "7641d0c7-0b14-46a7-bac8-3a43affab588_0d5065021ee644a6a3cd4a565c28d03b_compact.jpg",
            "479ed665-f244-46cb-84d3-c2824fe2333e_3538c9fb484e4e81a9a909516c4a4d78_compact.jpg",
            "48f7b246-db80-4fb8-b4d0-b024be3eba62_250238f1914448ab86d1fed87647ba9c_compact.jpg",
            "53e474bf-6435-41db-91e9-f84448ec54b6_d9bd0acbebd64374b150cef6565e3b36_compact.jpg",
            "f3d6ce32-553f-4e4e-a78c-ea9b1e38da39_ff608e937e62413a844c43385527b888_compact.jpg",
            "c01a3bd5-4caf-4d3f-9ec5-27331b1c8525_ef6208842c644dd89d6002e6c1676da8_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW SB WHAT THE PAUL - CZ2239 600 - 36",
        "brand": "Nike",
        "type": "Dunk Used",
        "sku": "BO26062401",
        "price_now": "4,800,000₫",
        "price_compare": "",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>DUNK LOW SB WHAT THE PAUL - CZ2239 600 - 36<p>Tình trạng: USED&nbsp; -&nbsp; FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "17a5323ba69c05c25c8d_81d26450fa454575ae083c124a784e16_grande.jpg",
            "fad14831-f4cd-4e0e-aac2-04b6c799ef70_231a647dc2c342cdb98ddb1cbddd1b4d_compact.jpg",
            "edc4bb82-eaf1-4624-8876-4b28ec7c862f_dea37ef677e048bd9ad01513acf87edf_compact.jpg",
            "5e33fd84-c318-4138-9c97-3e072dbeaac0_7bdf8cc3213f48c3939899cb42f91f78_compact.jpg",
            "fc9f9fd4-9169-4a4a-9471-24c48fef6648_d4a6f14b97ab4616be1142fec611225d_compact.jpg",
            "ef52dc7c-8734-491e-a1fd-085a19066f13_da5f4b26aaa34df1bbceb7dea5e0d3a7_compact.jpg",
            "9c6b9b64-7c89-4bff-a41c-98b347aa5441_c4b369f5ae344bbeaf2bf6f8e5c4cc85_compact.jpg"
        ]
    },
    {
        "name": "DUNK LOW SP SYRACUSE - CU1726 101 - 40",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "",
        "price_now": "1,400,000₫",
        "price_compare": "0₫",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr><p>DUNK LOW SP SYRACUSE - CU 1726 101 - 40</p><p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5979759833990_9c555f23b0a11f65a1d8a84010d9d5ff_74a4a27cc8df40a1b7b8594873f1554e_grande.jpg",
            "5f380cb3-4bca-4de3-90c1-eb85e566909f_37063be9871e41e188d9ff0afbde1392_compact.jpg",
            "dc8bd82b-9ff5-47b6-b136-626db2877d9c_f231488853dd4dd8839e22b9f28e7c0b_compact.jpg",
            "1f11f317-e16c-4e14-9920-3f6db3acf10e_1b42eebf64c24c889b8a79a203e79fa7_compact.jpg",
            "bd244393-448b-4f96-b041-27660a71720e_866a5303563e457a8fdaed80d5c1e44c_compact.jpg",
            "867fb0cd-67b2-41ef-b2cc-730035f84b31_493d372215c4438f927fe6a9338f0d7e_compact.jpg",
            "177f8f9c-af14-451c-94f4-9e3c75ae57cc_b33a7304e12947a3ae7100cf78cd868e_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK HI FAUST BLACK GOLD - DH7755 001 - 46",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "",
        "price_now": "1,800,000₫",
        "price_compare": "0₫",
        "sizes": [
            "46"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>SB DUNK HI FAUST BLACK GOLD - DH7755 001 - 46<p>Tình trạng: USED - FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5883024889533_0e20cbd59179c323c8d1bfa5de8b011c_32d0ddb1c92e4bf1a0ba16f96bb76828_grande.jpg",
            "2ecd027e-767e-4e3e-86e6-d42be39c8604_85811e50ad4d40f3a8c93c2345582c54_compact.jpg",
            "04c4c749-05ac-44ed-b19b-ef536bcc6faa_7bb88184d0f04570b4d62bbe98bd9b41_compact.jpg",
            "28ca8fe1-dc9e-4c61-9459-6d014d51c677_9c4963b0884c436eb5ed4fd31163335b_compact.jpg",
            "9ea3379f-8453-487f-b919-8d8dc95df03d_ce5408f137bb415bad5bed80d223d761_compact.jpg",
            "101f91c1-b2a9-42f5-a39e-2c1d0d69e19d_b169f79ff687420098b37b9bdaac6f08_compact.jpg",
            "e80d2b47-8602-4045-96b5-08bec517a83f_ea423187d3a34c5f8601b94ac2fba89e_compact.jpg",
            "d0d975d0-843a-4374-b5f2-ce8e3ed6f6b6_181f515940ba4840b77281f7defcc2c4_compact.jpg",
            "98779e7f-f50d-4a5c-9207-6a836cd84a90_e51b3447c6874d9e910c291922f026ba_compact.jpg",
            "0fa07d3d-0cae-4e15-9d78-9668e635d102_ae354d9b1bcf4fe7a28dfc4e0f7ad790_compact.jpg",
            "1cec0fa9-1d3c-42b6-8c5b-4f0c8ce98809_38908c3d45ea4e3ca7878ac3edf2db2f_compact.jpg",
            "024c58a3-3636-48fa-88a0-c8f5b8599375_7c6cead4a11a42229aeec38c2469cc55_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK HIGH OSKI SHARK - CI2692 001 - 40",
        "brand": "NIKE",
        "type": "DUNK USED",
        "sku": "BO03102403",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "40"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>SB DUNK HIGH OSKI SHARK - CI2692 001 - 40<br>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "z5892082776496_20eb2116e2679dcc2fe0686220933395_30b5b93a6d604d4cbb4d5f7f628953cb_grande.jpg",
            "5bf9f3db-d1d2-459c-915c-909485ad07bc_f021a78d22d840c6a84e4dc60127c7dd_compact.jpg",
            "ab204969-61d2-46c9-92f1-3c48466dfba2_12cd9c5bf09944398c9af58e03321033_compact.jpg",
            "ef2284be-d38b-40ff-a708-8e25d6ad18dd_bf7044530440495689bf3feff13f399d_compact.jpg",
            "57070d10-e139-4815-a7ca-a7ba58df4043_7ce05b54ed064b36881c99d2c08c7ed9_compact.jpg",
            "ecd2727f-0483-4602-9783-b17ea9bffa9e_954870b078524b599234072716d391f5_compact.jpg",
            "a43c073e-b8ac-42f7-9b0a-82e767e3b966_fec6d6b5bf67460da377ffc7aff30693_compact.jpg",
            "45d8e126-8697-49cb-a5bc-d73e8972500d_bf528f9eeb5444199f8916bebdbe6435_compact.jpg",
            "b104e043-1acd-4e58-8100-eac1168463a6_9937d8067a4c45cc9efa8a78784aec89_compact.jpg",
            "8a9b3978-c447-4e31-87ed-065a3a75b584_52ddb72a53ef4660a35dfc5b0b6ac636_compact.jpg",
            "08822374-09c3-4100-9e70-a9179a5e0e28_33cb8b767a7143bda926318570835de0_compact.jpg",
            "ce25919b-57d3-4786-9d35-8ddce2efd235_69795f54f9c74d7b8d4d84b2890fcae9_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK LOW BLUE FURY - BQ6817 400 - 36",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO30122323",
        "price_now": "1,200,000₫",
        "price_compare": "2,300,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>SB DUNK LOW BLUE FURY - BQ6817 400 - 36</p><p>Tình trạng: USED - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 1 THÁNG&nbsp;</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5979759461501_33aa5cbd6673ca4e8868cb911413d846_864035c28350447e873fab106c842826_grande.jpg",
            "309092ae-f7fc-48a1-9673-78e881edb1f0_adfa99a332e54277964ba0f857c69e4f_compact.jpg",
            "22df2229-458f-4557-a45a-c8273c656dc3_4229e8459b244869825e82d77b26537e_compact.jpg",
            "4f35cf47-1e41-4666-b9c4-31bb0d987fa8_45ecf1b422ed4d86b8e1a95a4384dabc_compact.jpg",
            "84568caa-6ed4-4b0f-9f0c-602cdd83add9_7ade3c1de50748399bb419aa6de07e8a_compact.jpg",
            "9c6283d5-769b-4774-9e2d-815a86514f77_a35f820194314773bb4d94f33bca6fa7_compact.jpg",
            "c793d9d8-fa56-4151-86ec-c1047eba50b2_91e85759c3de43eb9fa63b35b61abb21_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK LOW MEDICOM TOY - 42",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO09012405",
        "price_now": "1,800,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổI</p><hr><p>SB DUNK LOW MEDICON TOY - 42</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để&nbsp;được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 1&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5883024656902_7006f5e16d44429e4228de062a3049b6_f82a8ad162854674bc3fbff08da950d2_grande.jpg",
            "2f875923-a8a8-4fd9-8c95-339d04144ff7_25525c7f749f4c7fab2c3ea05efd4c4a_compact.jpg",
            "ef3cba37-040d-429e-9820-62008484cf5b_0f1f0cd24dab4352bf64321de65b95ea_compact.jpg",
            "7676c191-5841-4eb8-9ddb-524a6dd62481_ac94ac6ea86c4158a32333a118a1dbb0_compact.jpg",
            "c50688cd-26db-4d53-b47c-ccc44eb1889f_5a96781fb3b8417eb9e1e2b6031e3644_compact.jpg",
            "46fa1382-9fd3-46af-92de-96cdafa9fa3b_96f0833eff2c4a7ebe639124187a61be_compact.jpg",
            "4e9e905d-4d21-411c-9347-d0b3f424816d_889f933f0b3a4aa6a4c78489b3b7bd90_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK LOW PAPA BEAR - BQ6817 700 - 36",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO30122318",
        "price_now": "1,400,000₫",
        "price_compare": "2,500,000₫",
        "sizes": [
            "36"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr><p>SB DUNK LOW PAPA BEAR - BQ6817 700 - 36</p><p>Tình trạng: USED&nbsp; - FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>BẢO HÀNH KEO 1 THÁNG</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store&nbsp;&nbsp;</p>\n\t\t\t",
        "images": [
            "z5979759269105_afc9bf04aea3ffe7bff8e99a7f98eced_4562cd50f6334d1c913bd609bb448d1e_grande.jpg",
            "99d821f2-3e6d-45a6-b5f5-6abde8312e64_53f87c0dfe5c40d2882762ddd5da6b6f_compact.jpg",
            "777581d7-dc7c-47d1-a05b-886b6616fa49_5a109fb7b1414b73b51d2b5748dfdd19_compact.jpg",
            "acd04afa-6d96-4803-8257-16da28f6100a_f0749cb403c74e91a82a652045b0095d_compact.jpg",
            "87fab921-7338-4f98-83bd-f0cbc392e95f_783e7a04d084454e8a727a969e2fae05_compact.jpg",
            "09b5220c-f5d3-4d99-8bbc-4d17fddbed6f_271bf2032e8a4413b01d15a7e18f9581_compact.jpg",
            "e0faa64a-f085-48bb-bfc7-bd012b8f64a3_f6ff2257098049edb358c6a3ec82652f_compact.jpg"
        ]
    },
    {
        "name": "SB DUNK LOW RAYGUN TIE DYE- BQ6832 101 - 41",
        "brand": "Nike",
        "type": "Dunk Used",
        "sku": "BO09062424",
        "price_now": "3,500,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>SB DUNK LOW RAYGUN TIE DYE&nbsp;- BQ6832 101 - 41<p>trạng: USED- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5603962532854_3479bf859eb2303d48c50f08ad496d1e_d709d02cc9bf412ab0624e6aaa8b4368_grande.jpg",
            "256c2132-c0b9-4bc9-a816-4ebf10c45499_d5d88ee6d5e3416e91885cb079930701_compact.jpg",
            "6bead04e-eff0-4d7f-87c4-5a77171efacc_51a735c0e61f4204b04669379a60c97b_compact.jpg",
            "f74e9857-ed1c-49cb-8e23-555ba5c390be_a2183606b3c94551898d657f74f5da96_compact.jpg",
            "ab654138-7f1f-4a4f-ba1c-9126d5640dc1_74e5867283cd4a6b9d8ed8933a7d877f_compact.jpg",
            "896541c4-30b4-4603-8701-333cbefb6d3f_f6fef9aaccdd4a0dbede6a097bb362e8_compact.jpg",
            "ca5c9f12-7d2e-4abc-9be9-90e8b645d169_348db33b4a47461384fa04eb619438b3_compact.jpg"
        ]
    },
    {
        "name": "WMNS DUNK HI ALUMINUM - DD1869 107 - 36.5",
        "brand": "NIKE",
        "type": "Dunk Used",
        "sku": "BO09062429",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "36.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>WMNS DUNK HI ALUMINUM - DD1869 107 - 36.5&nbsp;<p>trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5823503711100_e416123999370a3af79f5bd8a6f21056_2d7910ad13fd4c33b576de4341d17e7e_grande.jpg",
            "8df0b09b-0893-4868-978a-6c5bd5b793aa_097920979bba492e9355b9e664bd2985_compact.jpg",
            "3746c815-7684-4473-a3e7-508115bf3dc0_5abc9248efe648109790d7039572d1bc_compact.jpg",
            "babe56a5-aaba-4bc5-9800-cdcf59e388df_2fa2f28978e140cea14514615b8dcbe7_compact.jpg",
            "5cdbb5f3-d7b6-4ad9-8350-ff95e9df527c_2f2106f9f861446f863f1c0fc5fb7e9f_compact.jpg",
            "13f3cfed-1dde-4133-b3b1-cd1adb00edcc_7e9215d159254bb78511f0434c7e66d4_compact.jpg",
            "5f2f7f90-0d81-4c3e-8e83-118c7f5e9a6c_dca02daafe9642e0962b3683c5db82fd_compact.jpg"
        ]
    },
    {
        "name": "CROCS PINK - 38",
        "brand": "Crocs",
        "type": "Slide Used",
        "sku": "",
        "price_now": "400,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CROCS PINK - 38</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "982c3e18aa14124a4b05_3e6008ef07424e49aa04313c5e19884e_grande.jpg"
        ]
    },
    {
        "name": "KAWA SHOWER PINK - 40.5",
        "brand": "NIKE",
        "type": "Slide Used",
        "sku": "BO09062302",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>--------------------------------------------------------------</p><p>KAWA SHOWER PINK - 40.5</p><p>Tình trạng: USED&nbsp;&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 1 tháng đối với giày cũ - 2 tháng đối với giày mới.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store S</p>\n\t\t\t",
        "images": [
            "72643209758da0d3f99c_de3e5b8e9f984ad9b5ed20e7283566b8_grande.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE DARK ONYX - ID5103 - 40.5",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "",
        "price_now": "1,750,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>YEEZY SLIDE DARK ONYX - ID5103 - 40.5</p><p>Tình trạng: USED&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "fcf78010849f26c17f8e_0de74b3fe55146e4b0ff3fb0a9ee96e2_grande.jpg",
            "a19fa9ee-1668-450a-a71a-0a9f8d91888a_731fbf042bcd4604905613498bc01a15_grande.jpg",
            "9fc0193e-3f60-450f-9810-ac7f3b747810_a96c3ed032c34d56a3ebefe034c8c616_grande.jpg",
            "b539a473-6d80-4963-8911-04fd89d82fd5_7837e28a10094d4bbc160eec20f0e38a_grande.jpg",
            "b288b395-dedb-49f3-9861-3948e196468e_0df23a15c7b34220a56ce1a13782795e_compact.jpg",
            "79545ff6-ffa7-4edc-b954-ad80e35a87c8_0fbee15cdef7484c858ada224d67b847_compact.jpg",
            "246c710e-3c80-4584-808b-177792ec39cb_ecd5d81cb3b748529d59b96841ca1366_compact.jpg",
            "196ea2ee-634b-4c07-9585-11f4fce618c9_290dc6b861804d848a981c0213ef7204_compact.jpg",
            "0f22437f-754d-4190-b1cd-88148a0dca50_88a334d6c8634f709d1c0a900d6b776f_compact.jpg",
            "2b63efb3-5879-4f1d-90e5-6af688c5e15c_86347f4785ec404b92619eea0d6c2a46_compact.jpg",
            "5a170c92-f314-4e0d-9ed2-5edabb835a01_c4236e45ec98466e826d556c1d2365d5_compact.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE SALT - ID5480 - 44.5",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "BO18102406",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:16px\">YEEZY SLIDE SALT - ID5480 - 44.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "96adc6c46148d8168159_4bad4a0a9a0d4599a7906fc155482d85_grande.jpg",
            "b88aff4b-63e4-4820-8f6e-79a09346c7c7_99c2319a52984d318ed4902c3adf3e0c_compact.jpg",
            "c90ea291-fa0c-4302-b2a8-fe4f8421a787_14bd9651fc054abf926f6ad85525cb31_compact.jpg",
            "a2ffe82c-50ce-411a-aaca-bfda5e0dcd3b_70133fa572554bc5a3c01dbe49d2f6c3_compact.jpg",
            "49acdfde-d31c-4a70-b461-10326817e9eb_caded35f18d2456f88049816346e9587_compact.jpg",
            "39b37202-99d2-467e-ad40-05fcaf5a1aa5_1fd54e9b0b414a9998899d5cf3d43ade_compact.jpg",
            "1b737611-3720-4d06-acef-31f83d5441f8_e8c22cb2a4714aabbf30d227d548c8ad_compact.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE SLATE GREY - ID2350 - 10",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "10"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">YEEZY SLIDE SLATE GREY - ID2350 - 10</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "8cbbb74fb0ac09f250bd_fa699706e9304363ac2171d0db593c34_grande.jpg",
            "f18bb0ec-e58b-4049-bc9b-7edaa627240b_538cfd9067904b4b9bd27a5eca0e0848_compact.jpg",
            "8fc06e8b-3e99-40f0-b67d-1ae19d2515cf_2997014cde54410c9de8ffb3b3d05011_compact.jpg",
            "8b2cbd74-5d5c-4921-897b-429b5e0fd450_7744c78e0eb54e0ea09f674f0956c1df_compact.jpg",
            "40b7e9f4-dabe-4328-9cef-cb622e10c1cd_f4f33cb5b41a44869a293475333454e3_compact.jpg",
            "1bfb10c3-c58e-43dc-bb3f-9190f4b26abc_ed87d52a99bb4449bea2855286e5375e_compact.jpg",
            "4eb7c0f9-5727-4ef5-b77d-5ffc6db1ec9c_ce233ecc5add434abcedb1ee75f986f6_compact.jpg",
            "7b472af3-76ea-4c6e-949e-e2d5163d87c5_982522f11194422aae77e54ff1f9260b_compact.jpg"
        ]
    },
    {
        "name": "CROCS PINK - 38",
        "brand": "Crocs",
        "type": "Slide Used",
        "sku": "",
        "price_now": "400,000₫",
        "price_compare": "",
        "sizes": [
            "38"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<p>CROCS PINK - 38</p><p>Tình trạng:&nbsp; USED&nbsp; -&nbsp; NO&nbsp;BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</p>\n\t\t\t",
        "images": [
            "982c3e18aa14124a4b05_3e6008ef07424e49aa04313c5e19884e_grande.jpg"
        ]
    },
    {
        "name": "KAWA SHOWER PINK - 40.5",
        "brand": "NIKE",
        "type": "Slide Used",
        "sku": "BO09062302",
        "price_now": "650,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><p>--------------------------------------------------------------</p><p>KAWA SHOWER PINK - 40.5</p><p>Tình trạng: USED&nbsp;&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><p>--------------------------------------------------</p><p>Bảo hành keo 1 tháng đối với giày cũ - 2 tháng đối với giày mới.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store S</p>\n\t\t\t",
        "images": [
            "72643209758da0d3f99c_de3e5b8e9f984ad9b5ed20e7283566b8_grande.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE DARK ONYX - ID5103 - 40.5",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "",
        "price_now": "1,750,000₫",
        "price_compare": "",
        "sizes": [
            "40.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>YEEZY SLIDE DARK ONYX - ID5103 - 40.5</p><p>Tình trạng: USED&nbsp;- FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "fcf78010849f26c17f8e_0de74b3fe55146e4b0ff3fb0a9ee96e2_grande.jpg",
            "a19fa9ee-1668-450a-a71a-0a9f8d91888a_731fbf042bcd4604905613498bc01a15_compact.jpg",
            "9fc0193e-3f60-450f-9810-ac7f3b747810_a96c3ed032c34d56a3ebefe034c8c616_compact.jpg",
            "b539a473-6d80-4963-8911-04fd89d82fd5_7837e28a10094d4bbc160eec20f0e38a_compact.jpg",
            "b288b395-dedb-49f3-9861-3948e196468e_0df23a15c7b34220a56ce1a13782795e_compact.jpg",
            "79545ff6-ffa7-4edc-b954-ad80e35a87c8_0fbee15cdef7484c858ada224d67b847_compact.jpg",
            "246c710e-3c80-4584-808b-177792ec39cb_ecd5d81cb3b748529d59b96841ca1366_compact.jpg",
            "196ea2ee-634b-4c07-9585-11f4fce618c9_290dc6b861804d848a981c0213ef7204_compact.jpg",
            "0f22437f-754d-4190-b1cd-88148a0dca50_88a334d6c8634f709d1c0a900d6b776f_compact.jpg",
            "2b63efb3-5879-4f1d-90e5-6af688c5e15c_86347f4785ec404b92619eea0d6c2a46_compact.jpg",
            "5a170c92-f314-4e0d-9ed2-5edabb835a01_c4236e45ec98466e826d556c1d2365d5_compact.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE SALT - ID5480 - 44.5",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "BO18102406",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:16px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:16px\">YEEZY SLIDE SALT - ID5480 - 44.5</span><div><span style=\"font-size:16px\">Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:16px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "96adc6c46148d8168159_4bad4a0a9a0d4599a7906fc155482d85_grande.jpg",
            "b88aff4b-63e4-4820-8f6e-79a09346c7c7_99c2319a52984d318ed4902c3adf3e0c_compact.jpg",
            "c90ea291-fa0c-4302-b2a8-fe4f8421a787_14bd9651fc054abf926f6ad85525cb31_compact.jpg",
            "a2ffe82c-50ce-411a-aaca-bfda5e0dcd3b_70133fa572554bc5a3c01dbe49d2f6c3_compact.jpg",
            "49acdfde-d31c-4a70-b461-10326817e9eb_caded35f18d2456f88049816346e9587_compact.jpg",
            "39b37202-99d2-467e-ad40-05fcaf5a1aa5_1fd54e9b0b414a9998899d5cf3d43ade_compact.jpg",
            "1b737611-3720-4d06-acef-31f83d5441f8_e8c22cb2a4714aabbf30d227d548c8ad_compact.jpg"
        ]
    },
    {
        "name": "YEEZY SLIDE SLATE GREY - ID2350 - 10",
        "brand": "ADIDAS",
        "type": "Slide Used",
        "sku": "",
        "price_now": "1,850,000₫",
        "price_compare": "",
        "sizes": [
            "10"
        ],
        "descriptions": "\n\t\t\t\t<span style=\"font-size:15px\">MAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</span><hr><span style=\"font-size:15px\">YEEZY SLIDE SLATE GREY - ID2350 - 10</span><div><span style=\"font-size:15px\">Tình trạng:&nbsp; USED - FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br><em><strong>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</strong></em></span><hr><span style=\"font-size:15px\">Bảo hành keo 6 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.</span></div>\n\t\t\t",
        "images": [
            "8cbbb74fb0ac09f250bd_fa699706e9304363ac2171d0db593c34_grande.jpg",
            "f18bb0ec-e58b-4049-bc9b-7edaa627240b_538cfd9067904b4b9bd27a5eca0e0848_compact.jpg",
            "8fc06e8b-3e99-40f0-b67d-1ae19d2515cf_2997014cde54410c9de8ffb3b3d05011_compact.jpg",
            "8b2cbd74-5d5c-4921-897b-429b5e0fd450_7744c78e0eb54e0ea09f674f0956c1df_compact.jpg",
            "40b7e9f4-dabe-4328-9cef-cb622e10c1cd_f4f33cb5b41a44869a293475333454e3_compact.jpg",
            "1bfb10c3-c58e-43dc-bb3f-9190f4b26abc_ed87d52a99bb4449bea2855286e5375e_compact.jpg",
            "4eb7c0f9-5727-4ef5-b77d-5ffc6db1ec9c_ce233ecc5add434abcedb1ee75f986f6_compact.jpg",
            "7b472af3-76ea-4c6e-949e-e2d5163d87c5_982522f11194422aae77e54ff1f9260b_compact.jpg"
        ]
    },
    {
        "name": "ANTA KLAY THOMPSON KT7 ANTA - 812231101 1 - 45",
        "brand": "ANTA",
        "type": "Basketball Used",
        "sku": "BO21052402",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>KLAY THOMPSON KT7 ANTA - 812231101 1 - 45<p>Tình trạng: USED&nbsp;- FULL BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5823504206104_621e598effe9c1ec7119da4a453b26a4_970ca60c869049d291f461991b559119_grande.jpg",
            "63f07153-e5cd-4877-9fea-3ebc923cea2f_ea881bb5efa4494bbde83d4e163628c1_compact.jpg",
            "b69809f4-6948-4a89-afae-42a13711a1f4_3f8b56f259a448138dd0806dbc10e8a9_compact.jpg",
            "336a9c1e-ed00-4340-ae14-44d12133e572_0fb33a8753494df19422cb933e3f9d3b_compact.jpg",
            "ba2aa091-bede-47df-9ab7-af39cab036a3_c80ec717a9ca4218b7cbf1b6863f9f3a_compact.jpg",
            "aff488e2-5489-420b-aa87-5d1d4e3d6b5e_ef4af19c2f694ebf9840e054e6aae394_compact.jpg",
            "535e8db8-8063-4389-ba4f-22da8d55e4f7_c3336867c0b74ab6bddf4bf12fcdf3fb_compact.jpg"
        ]
    },
    {
        "name": "CURRY FLOW 9 X SESAME - 3024248 102 - 41",
        "brand": "Under Amour",
        "type": "Basketball Used",
        "sku": "BO15082412",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>CURRY FLOW 9 X SESAME - 3024248 102 - 41<br>Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.\n\t\t\t",
        "images": [
            "2a4195c331fa95a4cceb_68a06de501464a62bd8141cccc215947_grande.jpg",
            "0aae8b12-b383-4b36-899d-e5aa62fdfd24_622ca60a507b4e8bb27799cb1f7b2fee_compact.jpg",
            "32e17d43-82d8-4b0d-975a-d33d4ea8cc2a_cf63005790914853b1f375fb91cd71fa_compact.jpg",
            "0232f207-69b5-4194-88ce-e72b9b076c5e_b8aba313ba75401b8ec7c2debe4bbc78_compact.jpg",
            "28a5b7a5-6f59-40a5-9ed9-c8e00d58e69e_c7185340e7dc477898a969415d2c3fcf_compact.jpg",
            "e613410d-6b71-4c8a-bb68-badb7fca71fc_a56713ccd2244e8297955f2ecf6808f1_compact.jpg",
            "a39a6618-3117-4f65-89e1-2754d8811ee0_d2d3d2ee7e524b2e9fa78bbd9331e4e0_compact.jpg"
        ]
    },
    {
        "name": "D O N ISSUE 3 UNIVERSE BLACK - 42",
        "brand": "ADIDAS",
        "type": "Basketball Used",
        "sku": "BO27022415",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">D O N ISSUE 3 UNIVERSE BLACK - 42&nbsp;&nbsp;</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "839ce794a7650a3b5374_a56cac80047d47cd859c29bedbfa1b09_grande.jpg"
        ]
    },
    {
        "name": "D ROSE RETRO SIMEON - FW3665 - 46.5",
        "brand": "D ROSE",
        "type": "Basketball Used",
        "sku": "BO21062429",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "46.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr><p>D ROSE RETRO SIMEON - FW3665 - 46.5</p><p>Tình trạng: USED&nbsp; -&nbsp; NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5838477225645_ce4d42dd71d00e83ba9ccb615f90384e_06c3a7d0c53a4361b6a5164510e889e4_grande.jpg",
            "332d54a1-40c0-444e-acfb-042639b54e50_916d295eca4f4a59ac177f732e39e6ca_compact.jpg",
            "15f61463-12f7-45e2-adee-deb1d24cac79_8615f5e2fa834d04b619da11bc773fd6_compact.jpg",
            "d5273a7c-12cb-4f34-aeb0-dc8ae7246c8d_89d6c12c14d0495d942f4f87240b2eef_compact.jpg",
            "b2ec3373-471a-457a-baa9-83adde5a92b8_091de9216564494fb0bf490fc542e2c0_compact.jpg",
            "83eac085-d747-484c-a2fe-d3c333d97668_8614bfe786e14b0283064350e316684e_compact.jpg",
            "811353bd-b7e3-45ff-ba15-11bfd368ba13_f8ec391e3f724205b81414bc79d982e5_compact.jpg",
            "897b7bc8-66f7-4e89-9d54-a93f6cbe698d_92db4be293114e63a34b8a72ad3dfa4b_compact.jpg"
        ]
    },
    {
        "name": "FLOW FURT X BLACK HISTORY MONTH - 3025344 500 - 44",
        "brand": "basketball",
        "type": "Basketball Used",
        "sku": "BO22082418",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>FLOW FURT X BLACK HISTORY MONTH - 3025344 500 -44<br>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store\n\t\t\t",
        "images": [
            "z5756288195464_918760a13e4cb1d758c9032ff29e2a38_781960e746a740d4b55b42acd78d8c2e_grande.jpg",
            "de8f85b4-53fc-49f2-9e72-cd4c2e577371_caea14b1eaa149e1ae806fd832d04415_compact.jpg",
            "552c7bfd-4207-4107-8837-ba8c9ea31248_794cf6bbcdcd4df1b62e4cb8a33f7213_compact.jpg",
            "9b16bd8a-2fad-4273-ab21-4480a068b989_c1ee8e924954482183c43d57391fd67d_compact.jpg",
            "61df581b-76ee-4295-ac30-aabac5249246_b5ed86b7fa884fad80c4f81ba114f319_compact.jpg",
            "b8704cf2-94e9-4fb8-ba11-5f59926546d1_1f2d3472458d481ba6ad7d117d8a8177_compact.jpg",
            "08472d37-195d-4bf4-b798-5c2455e15a1f_e14d8e8635d74862ac0210e8695d1159_compact.jpg"
        ]
    },
    {
        "name": "FLOW FUTR X WHITE METALIC GOLD - 45.5",
        "brand": "Under Amour",
        "type": "Basketball Used",
        "sku": "BO27022435",
        "price_now": "750,000₫",
        "price_compare": "",
        "sizes": [
            "45.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr>FLOW FUTR X WHITE METALIC GOLD - 45.5<p><span style=\"font-size:1em\">Tình trạng: USED - NO&nbsp;BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "8a3d63f1077fbe21e76e_4aa8bbe8f9bc45d0aafa75db8b18f550_grande.jpg"
        ]
    },
    {
        "name": "FOAMPOSITE PRO YZY - 616750 001 - 42.5",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO27022403",
        "price_now": "1,250,000₫",
        "price_compare": "1,850,000₫",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3&nbsp;tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5838477234074_0ee6ca29c6e6106cd7fa42768d9e0043_6a5c6f3166ad4c599bd9eb15bc386ae4_grande.jpg",
            "67e966bf-985e-4ff5-8dc2-b1dd6ef57434_914487e2886f4372b82ead432d901ef6_compact.jpg",
            "24dc3603-8abc-4884-9671-076988aac677_005cd181edd4481081b8d8d0e8ddd342_compact.jpg",
            "af0b20dc-8217-4898-a5ea-6a3b725fcf58_92be8502b3644cebbf4b68394b894aaf_compact.jpg",
            "ee9f82a3-09c1-4295-8b0f-0d7718e0c859_901b3c5c4e2844d1befbc86455c2d26b_compact.jpg",
            "573b540e-c712-48f2-8cce-068624345734_ff6e91d552964c2a97d28852a4dc7506_compact.jpg",
            "783e74aa-8525-44c4-a98e-e0cd0d47d31f_5ab5cc91f355492f84a79ee42f33f39c_compact.jpg"
        ]
    },
    {
        "name": "JORDAN WHY NOT ZERO.5 - DC3638 158 - 41",
        "brand": "Jordan",
        "type": "Basketball Used",
        "sku": "",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>JORDAN WHY NOT ZERO.5 - DC3638 158 - 41<br>Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.ADI\n\t\t\t",
        "images": [
            "f04587c723fe87a0deef_7b5087190aa646bda133c6bceaa87f5e_grande.jpg",
            "d75ac9ec-a8ac-4033-b247-d899b787cf8e_6ba48b943d044dce9739337e2e972269_grande.jpg",
            "495c008a-4687-4db8-a216-82f58d71bca9_885b5a8f7ec242faac2f638c7ea6b36c_grande.jpg",
            "e6836570-431b-4dc1-96bf-e276d51a2a23_e677b7cd65784e77930c5f23b0796a06_grande.jpg",
            "07cdf1e7-cdc5-423c-b493-eeb15dcb7495_6d1dd7d921a24d5fb7990d8ea8ed762b_compact.jpg",
            "39206c70-595c-4272-ae54-75cc34ded023_0738b9428f794c8895b7994ab06872dd_compact.jpg",
            "2e595343-90b1-4b16-b315-21e85bf1b44a_aeb16fc7418f47e9ba56546c3b626a6b_compact.jpg",
            "0be3e081-5427-44e7-a87d-ab7d8f3b2a53_86b2cd8bd4c84630aee9c2f34dce3902_compact.jpg"
        ]
    },
    {
        "name": "KD TREY 5 II CHINA PACK - 683275 030 - 44",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO09062430",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>KD TREY 5 II CHINA PACK - 683275 030 - 44<p>Tình trạng: USED&nbsp;- NOBOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "585011bddff57cab25e4_1e7c9ec6c0fd4325bc8f7dfa55f15b96_grande.jpg",
            "ea01970f-ceb7-4769-bf50-a2ccf73dc74d_518d747a0a8d44eba17cdd5e21e83d9f_compact.jpg",
            "6bee50fb-73a0-4d89-bb4c-deb65eebd94b_85d276cb2303448188108b5262c15af4_compact.jpg",
            "55d0f0a5-a356-46f1-b0b2-18bea30b2d2d_3cf9c1a8ce7d49b595352d2f0287e621_compact.jpg",
            "6f4014e3-3051-4626-a243-ea159b6382e5_bf148c8cda8d41759cc498715eecd5fe_compact.jpg",
            "f34a1558-28c8-4590-abde-9af37f419913_a38f7edfcf2f4941bf5252dde435a481_compact.jpg",
            "9ef63c20-3345-4e47-ae6d-3ec913188910_8cdd5fde5d124815a3694d0a9382197e_compact.jpg"
        ]
    },
    {
        "name": "KOBE 1 PROTRO THINK 16 - AQ2728 101 - 46",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "",
        "price_now": "2,500,000₫",
        "price_compare": "",
        "sizes": [
            "46"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 6 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5823504561216_e2518aecb673769eb8c7949eab4369b7_b240a4328f234ec6aa1f85ee46bae160_grande.jpg"
        ]
    },
    {
        "name": "KYRIE 6 VAST GREY - BQ4630 003 - 41",
        "brand": "Khác",
        "type": "Basketball Used",
        "sku": "BO24052499",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>KYRIE 6 VAST GREY - BQ4630 003 - 41</p><p>Tình trạng: USED - NOBOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "z5471662103752_0a18a4c28ab7b7e3b1e30142af28166f_58b1da2983394eb090787c71a9363652_grande.jpg",
            "edcccd86-38bd-4e2e-ba62-b2092aa886bd_f52d8263c56b477e9c2c16d47d7b79f2_compact.jpg",
            "ccbca93d-8f8a-4c44-a762-231ea70bfe98_3efb34b29efb4b508329f1151468cb13_compact.jpg",
            "1a7cdc59-27e0-4366-9a89-43c9cd589ace_0bc2048a9fc74d6ba252c5903e2cb375_compact.jpg",
            "a160c447-eb65-4aee-a445-cb36af61989c_2263335d8adc4f608368474eb0986e97_compact.jpg",
            "bcdb80f5-b1ab-4c60-9132-fe908df7c779_6fdb9b54ee0942a0b3442ef4ffbbdc1d_compact.jpg",
            "66437434-593d-4b6e-b29b-5fde6440439e_cd4d9b57f9ec402abb21a73dda18b99e_compact.jpg"
        ]
    },
    {
        "name": "KYRIE LOW 5 WHITE GAME ROYAL - DJ6014 100 - 44",
        "brand": "Nike",
        "type": "Basketball Used",
        "sku": "BO18072445",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>KYRIE LOW 5 WHITE GAME ROYAL - DJ6014 100 - 44</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "4a6fff6e6027c5799c36_8311a231489f4b7792c41cdab2cce033_grande.jpg",
            "59a41520-7de1-403e-8d2d-2c98cbcf91d3_163d02eec5514f1e89a0c0efa91375c5_compact.jpg",
            "a303addb-08e4-421c-b37f-cbda9a2fbc1c_e16905c614904223abaaa365b8c8cc83_compact.jpg",
            "efd0fdb9-fc82-4287-ae8f-ba62ff709f28_89eec4a321ca4866ab0de85951520e4f_compact.jpg",
            "a0ab5afc-a784-4947-a89d-dfa9902de3f3_52159855ff7148a68b451ed35a09ab8f_compact.jpg",
            "16f5d8f0-b08b-485f-8384-c81879282db3_c8088eff45d743389df3515d02a73660_compact.jpg",
            "c18a6ab2-127c-4729-97e1-9da09168d00d_56081f77f112415ab2ce42774c5e4101_compact.jpg",
            "72fd9257-971d-4393-ac2f-f8b6f05489b6_3f1bd857593a4b73a22aa2f0e860b937_compact.jpg",
            "f22e7c0b-0e4c-40f9-bea3-b918d74358b5_11910c38f28e40259d31bdf84a45a198_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 16 MULTI COLOR - BQ5969 900 - 44.5",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO14102415",
        "price_now": "1,250,000₫",
        "price_compare": "",
        "sizes": [
            "44.5"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>LEBRON 16 MULTI COLOR - BQ5969 900 - 44.5<br>Tình trạng:&nbsp; USED - NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.\n\t\t\t",
        "images": [
            "5a07413436ed8fb3d6fc_957ab7c946c2453395b3106bbb5e8f16_grande.jpg",
            "54f7e30b-4c23-47bf-8209-a4968789b775_1a81726e5d784433b8c1b2e4aa8fd270_compact.jpg",
            "892a33d0-2ffe-41ab-a980-30979b720f03_f9b4c30d3b75455a8e2a982389866e01_compact.jpg",
            "83b8a996-4a0e-43bf-91cb-92e7bd177fad_0ba3cd6708ec4b55a1db005cb7ac9867_compact.jpg",
            "aad97417-0c12-4058-a4c0-72219c9b0570_bf3e6b47e66e4c5f8f4edcb4f8ac363e_compact.jpg",
            "08c1de13-5585-4df4-b534-c4823a5a1936_a0cccdb447fa430985bb403250ae64fb_compact.jpg",
            "35f4c7c7-885b-4908-b982-bfa3d3640175_6c38544265ba439fa6f75751ffb0dbfc_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 18 LOW PALMER - CV7562 300 - 41",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO21062418",
        "price_now": "1,500,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p>LEBRON 18 LOW PALMER - CV7562 300 - 41<p>Tình trạng: USED&nbsp; -&nbsp; FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "162a5caef241511f0850_74e9ff89010d45e6af455d8fc43705f8_grande.jpg",
            "ddcb8730-112b-4e3f-9302-8f2fee928741_f1540afc741c4e93bc442d8a0f10943a_compact.jpg",
            "fa46351e-7b56-4983-8066-8e5a003eb788_b7b257c975f04d75b96a9ff6304b5f6b_compact.jpg",
            "2a8249a5-339c-4113-a84c-dc2d16f9cb69_caee6055207d4fec9322b2053dc33993_compact.jpg",
            "ab45f2af-9335-4d6e-a157-5b2b7458d282_c268875f73dd499c90dfa9af3f380b37_compact.jpg",
            "e5036b02-44bb-417d-9607-1e1ed9b493a3_35dfcc63f4754d43849f629a9b09c3ec_compact.jpg",
            "34c50edc-2ad6-4666-87c3-aa55f5a68fcf_8d4588f0caff4d90bf47ce15bc7b7eac_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 18 LOW VIOTECH - CW5635 200 - 45",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO08052434",
        "price_now": "1,650,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">LEBRON 18 LOW VIOTECH - CW5635 200 - 45</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 6 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5626121137951_d204492e441095bd241a99d6c453ceda_32aa7bb4efce471c95f3f3b5b47f607a_grande.jpg",
            "f75505f8-18f9-466c-bd83-5d4833490d28_887fdbc7e76b402aa6d5c3b8ceae40a7_compact.jpg",
            "1e281775-573f-44e5-8789-8458294c9c17_b53c954988504c1795a39a9690569033_compact.jpg",
            "5977bd51-8f8c-4d7b-a4f9-eae24f29d3b6_0f05c5c72b3948f79692066740aa825f_compact.jpg",
            "a6d2280c-790f-4e42-bdc2-190479e3cf23_8b2eeada28ee40d48b1307dcb52d652b_compact.jpg",
            "73d20990-a9fb-4e7b-a1d6-de67d630b19c_c96ae4ad215043da8c65e1b005781de7_compact.jpg",
            "c1fe675f-ec1d-4693-a750-d25dad8081ba_c10e6046b36747e081e30dda5f1f98c2_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 19 BRED - CZ0203 001 - 41",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO31052404",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><hr>LEBRON 19 BRED - CZ0203 001 - 41<p>Tình trạng: USED - FULLBOX&nbsp;</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store</p>\n\t\t\t",
        "images": [
            "a8d788bb6d65cd3b9474_d5747f0b8c4742238cb6e87b0027e3c0_grande.jpg",
            "7722dbc6-6111-4e59-a773-d4af23f5fb8e_f9a84a48d66d43969ea140f53552d761_compact.jpg",
            "79496962-7483-440a-83bd-4be6fedec21e_da8ddcd22ed542bfb3eab662cbaf8da4_compact.jpg",
            "bc31b8ef-a045-4747-89e3-8672501018c8_34d46de3c53d4f77960e647b29ae12b9_compact.jpg",
            "e1c3beb0-9e7a-4f96-a3f2-cb105e8b150d_46b42de653c447e8b7306b1499e02320_compact.jpg",
            "4b78aef4-bb41-4264-a712-57f414056423_e431f8dce6a84dd5b36a9c45d6abd88f_compact.jpg",
            "d5fddac3-66e7-47a1-b6e3-ee17463a8811_fd70a3b7ff414daebcf24054a0181e3e_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 19 LOW BLACK RED - DH1270 001 - 42",
        "brand": "Nike",
        "type": "Basketball Used",
        "sku": "BO04072433",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>LEBRON 19 LOW BLACK RED - DH1270 001 - 42<p>Tình trạng: USED&nbsp; -&nbsp; NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "b36678755169f337aa78_92710936386e40a8bb3b1ee033fbe8ce_grande.jpg",
            "7d21680d-9545-4084-b262-d839296fe11f_a87afbe062e9419385552e5e6609a02d_compact.jpg",
            "7ea562c4-25d3-4e7e-9055-385ee6669873_757a728b493547a6bbf4f401c4ee5aa9_compact.jpg",
            "c27c634a-3522-48ab-ae2b-2620885b1eff_342d639b0e1a4d008fda93cc67d71dd2_compact.jpg",
            "36bb9ba1-be04-49bb-805d-7b89aa059299_0d23b838003a497ea025f1380804e262_compact.jpg",
            "4fd7acca-3499-418c-965c-7524399c1cda_705b01e5c80c40e2b5776650d1242943_compact.jpg",
            "a0ca78b3-b820-480b-88d8-94bf0fe40ef4_c1722deac39e49d48eb6ed31a72bfcce_compact.jpg"
        ]
    },
    {
        "name": "LEBRON 9 LOW REVWERSE LIVERPOOL - DQ6400 300 - 44",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO22082430",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "44"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>LEBRON 9 LOW REVWERSE LIVERPOOL - DQ6400 300 - 44<br>Tình trạng:&nbsp; USED -&nbsp; FULL BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store\n\t\t\t",
        "images": [
            "4fe79948e8ee4cb015ff_a73cd1f0f5c1435a9623d3ae74c2a02c_grande.jpg",
            "20cc7caa-e45b-4466-adfe-dda5ffdec518_f70b71ab92094164b0442af1ed2619c0_compact.jpg",
            "e037de0d-5f5e-4632-996a-c86dc19576eb_12d1db06e3bc4ffabb9d540254fd294c_compact.jpg",
            "52760361-ca3e-44d3-8b24-d7e81362482d_06c54bbcc7924655aee0a3211a5a0915_compact.jpg",
            "d5bc00ef-feb5-4268-a6d2-f30940e71904_816ae21cb2d246da9569c4edb65a5940_compact.jpg",
            "70649973-6493-4732-bf27-6336ebeca397_c25d0d0046b545238e711a8f231dc0e3_compact.jpg",
            "84ec12d9-2e42-4b6f-a5e8-9679fac3f35b_8ea47c81cfc44f108d641055a13edd70_compact.jpg",
            "a99683b9-ca7d-468d-a216-4b5c418dbe02_da13a00850cb46bd81e4fd0f81c41f3e_compact.jpg",
            "9fd36fe7-aa34-4293-a334-1e2d325b3016_dade29f28d444298b4a008f2a7b60eb4_compact.jpg"
        ]
    },
    {
        "name": "MAMBA FURY BLACK GYM RED - 41",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO27022402",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">MAMBA FURY BLACK GYM RED - 41</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "4b76bc20fcd1518f08c0_5f8ef65a77964521a9b74dc515fa69a0_grande.jpg"
        ]
    },
    {
        "name": "MARS WHITE FIRE RED - 42",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO27022421",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr>MARS WHITE FIRE RED - 42<p><span style=\"font-size:1em\">Tình trạng: USED - NO&nbsp;BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "aef8dbdf9b2e36706f3f_32c968b62eb24594a352a7e810b15398_grande.jpg"
        ]
    },
    {
        "name": "NIKE KD 12 BY YOU - BQ7697 991 - 42",
        "brand": "Nike",
        "type": "Basketball Used",
        "sku": "BO18072449",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>NIKE KD 12 BY YOU - BQ7697 991 - 42</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "bfcb12c58d8c28d2719d_837868c2d1f844c9b9d06c7fa974bb09_grande.jpg",
            "ff482c80-5f14-4465-98fd-9af50eeca592_193c20e0844641ae9b72df61e3dc3442_compact.jpg",
            "543ad2e2-2ca2-4437-ad3e-b3d828dc4d8e_2dde20ba34ed45559bc11b303e5cc6fa_compact.jpg",
            "54da6285-2254-44fc-81d6-5eb85d0d7b8c_63b468a121654161aa9d4d25a6680917_compact.jpg",
            "191d17d3-ff9d-4790-bacb-a61c3e1b72d8_790afc5203fc45a3891c7c5713fd50d5_compact.jpg",
            "770bb0a2-6825-4cc1-ab7e-24bfd90401a4_4a0b9053d671495d8e904e885dc0e0b8_compact.jpg",
            "e5752f6b-ffa4-4161-ba82-3ed602ccfa75_d3aaefc15bda446fbc3e26b6a99fa2e6_compact.jpg"
        ]
    },
    {
        "name": "PG 3 MANBA MENTALITY - 41",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO27022412",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "41"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">PG 3 MANBA MENTALITY - 41</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo&nbsp;1 năm đối với giày trên 1 triệu, 6 tháng đối với giày dưới 1 triệu</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5549868475177_1c19cf21ed9beb4f88e64894f6e8d030_d057d8bb3dbd483cb05b5dfde9320b41_grande.jpg",
            "643b3c26-98a6-4b1d-8cf4-7239bf85542e_c721a28a7e754038b08e38666687ec57_compact.jpg",
            "2bad2d30-39ca-4673-994a-17f24fe88e08_5a16597e3a9b4ebe9298d83cce9e46ff_compact.jpg",
            "519eddb4-21e8-429e-a08a-095deddeeeba_e39ff33bed0b4579a4932514d6aaa16c_compact.jpg",
            "db7f5082-7169-46ca-83d3-d6a04a6913b6_2d18413384e24bc3b0acf66217a2e96f_compact.jpg",
            "eedca3c5-42a6-41e3-a4b8-8dcbb5726ff2_fd60e11d8b024538b2a6305f5909ac3f_compact.jpg",
            "3a5bf307-dc2b-46d3-bca7-91ca2a34ac72_85b0d5012ad14f6dac1c9ca9984043be_compact.jpg"
        ]
    },
    {
        "name": "PG 4 BLACK GREY TEAL - 43",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO27022414",
        "price_now": "1,000,000₫",
        "price_compare": "",
        "sizes": [
            "43"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">PG 4 BLACK GREY TEAL - 43&nbsp;</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "9040e148a1b90ce755a8_03036cd037d9461b9d51d35af36fd7a2_grande.jpg"
        ]
    },
    {
        "name": "PG 5 WHITE BLACK - CW3164 100 - 42",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO15082422",
        "price_now": "999,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\tMAKE SNEAKERS GREAT AGAIN !!!<br>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi<br>———————————————————<br>PG 5 WHITE BLACK - CW3164 100 - 42<br>Tình trạng:&nbsp; USED -&nbsp; NO BOX<br>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.<br>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!<br>——————————————————<br>Bảo hành keo 3 tháng.<br>Bảo hành chính hãng trọn đời.<br>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.<br>Không thử giày, không nhận đổi trả.<br>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.ADI\n\t\t\t",
        "images": [
            "b7dc1e5eba671e394776_edcc18baace04ea390213d47e8d3e277_grande.jpg",
            "16954245-e193-4019-b9ac-eca198c02958_bda8d90d4d8449ecaf106f4d91bb0041_compact.jpg",
            "2d207bbe-a2f8-495a-80df-15fd5b12d507_e14fc975e0b441f8bc7309cb32552fa3_compact.jpg",
            "e7b69e94-8063-4396-93f9-11d5992d8a92_8a15e833f0b448e2bac4760f34b243a6_compact.jpg",
            "bc7befb1-c7d3-4645-807c-f2f14c9f751b_819943b446b44233a631df1ac46f6a8e_compact.jpg",
            "3632fed4-dfe2-433f-ba99-1ad1b42f8aba_b020d83b83ce493c9ca840d1acf6c804_compact.jpg",
            "c74c94e5-7072-43f5-b4a7-c18a5f49bd2c_8d3032ea20b1495bb58b8bd6462880ad_compact.jpg",
            "9b50ac7e-dfac-4649-9186-e2588179fca9_73ba7d2eeb43447691795f7a64db54dc_compact.jpg"
        ]
    },
    {
        "name": "PRO BOUNCE LOW - 42",
        "brand": "ADIDAS",
        "type": "Basketball Used",
        "sku": "BO27022405",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 6 năm tuổi</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p><span style=\"font-size:1em\">PRO BOUNCE LOW - 42</span></p><p><span style=\"font-size:1em\">Tình trạng: USED - NO BOX</span></p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr style=\"border-right-style: none; border-bottom-style: none; border-left-style: none; border-right-color: currentcolor; border-bottom-color: currentcolor; border-left-color: currentcolor; border-image-source: none;\"><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "z5549868394860_5d774c0784328f38f18348a86e59b879_ede6dddfbfca42afac629f97e74a0dd2_grande.jpg",
            "9f494d30-8427-47af-94fb-f35778122895_b8807ad3f71c4cae903dc3bd6bc5b0c4_compact.jpg",
            "73ea82b4-0aba-4f98-9772-1a03c470e17a_a6fe111c531b41ae8dffc314aabd3093_compact.jpg",
            "76a4382c-8ee9-4dbb-9431-bd8210c7e9d6_66a7b47f199847779e9ce7aa2f9f9464_compact.jpg",
            "e3d6054d-c387-4363-8387-93225f6544c8_438e808d44e74482b4da1f2763aec9ab_compact.jpg",
            "94b928cc-a98c-4453-9666-45ac9419dfbe_ebb4174e22324460974ac1ef72494b59_compact.jpg",
            "1cd39142-32c7-41b6-b57f-c83b7ed8e587_010c19e9d77f4a54976f2441ec3923da_compact.jpg"
        ]
    },
    {
        "name": "TRAE YOUNG 1 ICEE - H68998 - 45",
        "brand": "ADIDAS",
        "type": "Basketball Used",
        "sku": "BO03052444",
        "price_now": "1,450,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7 năm tuổi</p><hr><p>TRAE YOUNG 1 ICEE - H68998 - 45</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store &nbsp;</p>\n\t\t\t",
        "images": [
            "5ed7ef8d8b03325d6b12_dbb5a4c36f7443e18b8e6dea722066c1_grande.jpg",
            "56a1815bab080a565319_df96934071844b989164f17c5163a629_compact.jpg",
            "3ceb3c131640b71eee51_cd46dc6abdd24ded9b6167cd0b2c6c29_compact.jpg",
            "e7acb5519f023e5c6713_cdc5cd81cf324df3864ae0fc19dca32f_compact.jpg",
            "af0221ff0bacaaf2f3bd_b44f05783fe4402cbeba1700f929e1d7_compact.jpg",
            "5978b3779a243b7a6235_251ae9caabd24a2d8d4f2ce722c5043b_compact.jpg",
            "400bd503fc505d0e0441_54e56770c1e947f98d76197a9e438295_compact.jpg"
        ]
    },
    {
        "name": "WADE 808 2 LAVENDER - ABP5037 1 - 45",
        "brand": "Lining",
        "type": "Basketball Used",
        "sku": "BO25062422",
        "price_now": "950,000₫",
        "price_compare": "",
        "sizes": [
            "45"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>WADE 808 2 LAVENDER - ABPS037 1 - 45<p>Tình trạng: USED&nbsp; -&nbsp; NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "2212ef838b0d32536b1c_91d9893fd2c9480f9cbe98ac8effe5bb_grande.jpg",
            "c35df113-11f1-4d03-b3c9-0114c64d1eb2_a8f9c9ca799346fcb8e301f05b1a6efc_compact.jpg",
            "fac8f2fd-9633-4d23-be4b-0e905287f892_784d47f434c5478e92c4989fdf1640ec_compact.jpg",
            "c55965e2-9368-4db6-a003-a8afc8b8f288_68ebb547ee96424da27d72876e7e6ffd_compact.jpg",
            "2be366da-9731-4383-9274-8784df5640d7_cacfc492574840208d20684817c56367_compact.jpg",
            "f5d92f6b-c6df-4877-be53-1662ac135875_4585657dd84a434aa216240230b3b467_compact.jpg",
            "ad789b10-9f20-4acd-9fd0-493ae67e4e32_e626b1f85aaf417ca44ebe688123ea39_compact.jpg"
        ]
    },
    {
        "name": "WAY OF WADE 2 ICE BLOOD - ABP5037 6C - 46",
        "brand": "NIKE",
        "type": "Basketball Used",
        "sku": "BO21062409",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "46"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>WAY OF WADE 2 ICE BLOOD - ABP5037 6C - 46</p><p>Tình trạng: USED&nbsp;- NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng.</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả. Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "174b96d7f2594b071248_da76073dfb744ce0afb8dc0fdd767171_grande.jpg",
            "29b72f67-85da-436e-9fb7-ad6a9f56810b_94c835f207194dfe9d771aaf26cca3d7_compact.jpg",
            "8f609199-248d-40c0-8a04-4ace8015d182_fca2ff130f874f84be346e4e8be1bec0_compact.jpg",
            "1f9f3d4b-670d-4f64-95e2-354f572a1f3a_28bdaddb04224b99ac4ce0678ecf944c_compact.jpg",
            "3ab31d5b-510f-4d64-a526-799111f9bce0_05bab6d074274daabcb041788cb5f57a_compact.jpg",
            "0c3d605f-aa70-4e04-8aa5-c347641ffdc0_12573f08a3754775a597f670f20a1da7_compact.jpg",
            "b32c79d2-1c89-4511-a7ea-f74c67cf5259_1883956d1ff94132a6b601e880bd2b29_compact.jpg"
        ]
    },
    {
        "name": "ZOOM FREAK 3 DIGITAL - DA0694 500 - 42.5",
        "brand": "Nike",
        "type": "Basketball Used",
        "sku": "",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42.5"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam 7&nbsp;năm tuổi</p><hr>ZOOM FREAK 3 DIGITAL - DA0694 500 - 42.5<p>Tình trạng: USED&nbsp; -&nbsp; FULL&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "z5838850991277_29c79369b51ded4e040247cdfb4922c8_552b149125a04e96a295136594ad4603_grande.jpg",
            "857e679d-81d4-4a66-bb93-1f36520225e6_19791962ad264bbe983ad3b8231b6c96_compact.jpg",
            "14d6e10c-52c9-426e-a01b-3cbf6929ef6b_a698a15581ea4a3f897de5086d283599_compact.jpg",
            "2797f5bc-ea07-442b-800b-0957a8914793_2884351cf0f44e0aaf30a675825905e4_compact.jpg",
            "f5f96f8b-9d0a-41b9-88e4-87aa0bec1cf8_db00b461277347de8d5c04f4841f3e5e_compact.jpg",
            "9931faa5-6f96-4f12-93c6-57043d6dd010_d877c24076f74c888d1bc8eca5ba4a59_compact.jpg",
            "cf847651-3211-4131-9893-ecac14e00faf_e9cacd4b7a0041b5a03e1369a8d7aba8_compact.jpg"
        ]
    },
    {
        "name": "ZOOM FREAK 3 EP PROJECT 34 - DA0695 001 - 42",
        "brand": "Nike",
        "type": "Basketball Used",
        "sku": "BO13072444",
        "price_now": "850,000₫",
        "price_compare": "",
        "sizes": [
            "42"
        ],
        "descriptions": "\n\t\t\t\t<p>MAKE SNEAKERS GREAT AGAIN !!!</p><p>Thương hiệu uy tín hàng đầu Việt Nam&nbsp;7 năm tuổi</p><p>ZOOM FREAK 3 EP PROJECT 34 - DA0695 001 - 42</p><p>Tình trạng: USED - NO&nbsp;BOX</p><p>Size: inbox cho Bèo để được tư vấn size một cách tốt nhất.</p><p>NẾU SẢN PHẨM KHÔNG CÓ HÌNH ẢNH CHI TIẾT, KHÁCH YÊU VUI LÒNG INBOX CHO BÈO TRƯỚC KHI CHỐT NHÉ!</p><hr><p>Bảo hành keo 3 tháng</p><p>Bảo hành chính hãng trọn đời</p><p>Khách vui lòng kiểm tra kĩ trước khi thanh toán nhận hàng.</p><p>Không thử giày, không nhận đổi trả.</p><p>Cảm ơn đã tin tưởng lựa chọn mua hàng tại Bèo Store.</p>\n\t\t\t",
        "images": [
            "2b64a983ad0c0f52561d_804bc13ca9f84833ae777c7942a0a61d_grande.jpg",
            "af19ced8-651f-4061-a437-b085a16e1e62_c50d80c27b024cfababc927dd25badc6_compact.jpg",
            "32e81cd8-a1f1-40a6-88a6-1e4b0446b0f0_cb4fecd602f14755907a2809d42bfcc5_compact.jpg",
            "9b1cdce3-82d0-4ccc-8ba2-111f54ba96aa_32e4413930824fb6b34fd7c32c2fec68_compact.jpg",
            "74524e06-a201-4f99-84e3-17b1b878dc13_9bb80cba67f44e48bdac79839a704742_compact.jpg",
            "8770a4d6-520f-4018-87e6-cf86d2f12959_95350709772846679f9956c6cfdbdbc8_compact.jpg",
            "a402f955-62b4-49d5-a4e4-ccc2c892e9ec_62bfc033d55e41738a9e728717d6733e_compact.jpg",
            "26be851f-71f6-48a8-8015-47f31fcb7dcb_e35de1e9406f473aaecaee970eccdbba_compact.jpg"
        ]
    },
    {
        "name": "Vớ Nike Dài",
        "brand": "Nike",
        "type": "Vớ",
        "sku": "vo161122001",
        "price_now": "50,000₫",
        "price_compare": "",
        "sizes": [
            "Dài"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "1_94318eb346f74d60bd9daf13d1b1e661_grande.jpg"
        ]
    },
    {
        "name": "Vớ Nike Ngắn",
        "brand": "Nike",
        "type": "Vớ",
        "sku": "vo161122003",
        "price_now": "50,000₫",
        "price_compare": "",
        "sizes": [
            "Ngắn"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "2_e04130d33f674d06af156e1caceb4567_grande.jpg"
        ]
    },
    {
        "name": "Vớ Nike Vừa",
        "brand": "Nike",
        "type": "Vớ",
        "sku": "",
        "price_now": "50,000₫",
        "price_compare": "",
        "sizes": [
            "Vừa"
        ],
        "descriptions": "\n\t\t\t\t\n\t\t\t",
        "images": [
            "3_400e81bf66f94ce8b272660b098489f5_grande.jpg"
        ]
    },
    {
        "name": "Adidas Sport - Deodoriser",
        "brand": "ADIDAS",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042403",
        "price_now": "208,000₫",
        "price_compare": "320,000₫",
        "sizes": [
            "200ml"
        ],
        "descriptions": "\n\t\t\t\tChất khử mùi giày dép mang lại hương thơm cam chanh nhẹ nhàng, tươi mát cho cảm giác thoải mái lâu dài.<br>Chỉ cần lắc nhẹ và xịt vào trong giầy giúp xử lý mùi hôi và tạo sự thông thoáng.<br>• Hương cam chanh.<br>• Dễ sử dụng.<br>• Mùi dễ chịu.<br>• Cải thiện hiệu quả làm mát.<br>• Lâu dài.<br>• Có thể tái chế nhôm.<br>• Nắp nhựa tái chế.\n\t\t\t",
        "images": [
            "e7b02ea8-abb6-4638-8f8b-289d53c006d2_5b2e985e1fee4b77bbcdc005365fc220_grande.jpg"
        ]
    },
    {
        "name": "Adidas Sport - Foam Cleaner",
        "brand": "ADIDAS",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042402",
        "price_now": "247,000₫",
        "price_compare": "380,000₫",
        "sizes": [
            "200ml"
        ],
        "descriptions": "\n\t\t\t\tBọt làm sạch tức thì với nắp tích hợp bàn chải, dễ sử dụng giúp chủ động làm sạch bụi bẩn và vết bẩn trên giày.<br>• Một chai có thể sử dụng cho 20-25 đôi giầy<br>• Bọt sử dụng sẵn (khi nhấn nút ... bọt tức thì).<br>• Không cần nước.<br>• Lắc và Xịt.<br>• Nắp bàn chải tích hợp chổi.<br>• Dễ dàng mang theo người.<br>• Có thể tái chế nhôm.<br>• Nắp nhựa tái chế\n\t\t\t",
        "images": [
            "37e0f362-2df3-47bd-8ed0-514d890c316e_635fb537a5364dac8935b56e4496ae99_grande.jpg"
        ]
    },
    {
        "name": "Adidas Sport - Protector",
        "brand": "ADIDAS",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042401",
        "price_now": "247,000₫",
        "price_compare": "380,000₫",
        "sizes": [
            "200ml"
        ],
        "descriptions": "\n\t\t\t\t<p>Bình xịt có tác động nhanh tạo ra một lá chắn vô hình bảo vệ đẩy lùi chất lỏng và vết bẩn.<br>Công nghệ Nano siêu hiệu quả ngăn chất lỏng và vết bẩn làm hỏng bất kỳ chất liệu nào, đồng thời không ảnh hưởng đến sự thông thoáng của giày và hiệu suất của từng vận động viên hoặc người tiêu dùng.<br>• Một chai xịt có thể sử dụng cho hơn 15 đôi giầy<br>• Thời gian khô nhanh - 10 phút / lớp (2 lớp).<br>• Hiệu quả trên nhiều chất liệu khác nhau - da thuộc, da lộn, nubuck, canvas.<br>• Công nghệ nano tạo ra một lá chắn chống nước để bảo vệ giày.<br>• Có thể tái chế nhôm.<br>• Nắp nhựa tái chế.</p>\n\t\t\t",
        "images": [
            "8c324eca-d6c8-468e-b78d-6e17b4c3fec3_3e94dd6f4ac74c7a838eecccca91723c_grande.jpg"
        ]
    },
    {
        "name": "Adidas Sport - Wipes",
        "brand": "ADIDAS",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042404",
        "price_now": "162,500₫",
        "price_compare": "250,000₫",
        "sizes": [
            "15 pcs"
        ],
        "descriptions": "\n\t\t\t\tKhăn lau khẩn cấp sử dụng để làm sạch tức thì khi đang di chuyển. Sử dụng khi cần thiết để xử lý những vết bẩn.<br>• 15 khăn lau.<br>• Làm sạch nhanh chóng.<br>• Kích thước nhỏ, dễ mang theo.<br>• Thơm mát.<br>• Có thể tái chế nhôm.<br>• Nắp nhựa tái chế.\n\t\t\t",
        "images": [
            "4137cf92-4279-43e1-b8a5-274d04a63ab9_0406064f1b5e4752ae0e25de9a17f286_grande.jpg"
        ]
    },
    {
        "name": "Crep Protect - Cure Ultimate Cleaning Kit",
        "brand": "Crep Protect",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042405",
        "price_now": "400,000₫",
        "price_compare": "500,000₫",
        "sizes": [
            "Kit"
        ],
        "descriptions": "\n\t\t\t\tBộ dụng cụ làm sạch cuối cùng có tất cả các công cụ cần thiết để làm sạch cú đôi giầy của bạn!<br>• x 1 Dung dịch vệ sinh, Dung dịch làm sạch được cải tiến 100ml / 3.5 Oz. Rửa hơn 50 đôi giày thể thao.<br>• x 1 Bàn chải chuyên dụng, có hơn 17000+ lông, lông ngắn hơn cho kết quả làm sạch tốt hơn, trong khi lông bàn chải đủ mềm để làm sạch các vật liệu tinh tế hơn.<br>• x 1 Khăn lau bằng sợi vải, siêu mềm, không mài mòn và có khả năng thấm hút cao.<br>• x 1 Hộp đựng\n\t\t\t",
        "images": [
            "0a6ff19e-e704-4501-a437-b313b71342a4_54559ab53d1a4f599b4e3eddb056afa8_grande.jpg",
            "016a3d02-fdd1-4f67-b28a-aea8939a9ed9_2be14211a4354da79fdc67a48d4fcfed_compact.jpg",
            "080e6676-70be-4f2f-9ee2-bd485f1e4238_b010b25610554210b65de5aabd685f63_compact.jpg",
            "d64a518b-f8f9-429e-a711-5946570db836_3b609c3cb599405f8250e0b36ae8a657_compact.jpg",
            "d9f680cb-88a7-4617-8c1f-11d7ca3275a0_b5a3d22d8d8f4ab5a7cd75eb5189a0aa_compact.jpg",
            "e5ef1963-35ad-43a6-ad3f-b09fdecf4865_07c70b5eff0f49c7b3107deaa3a5254d_compact.jpg",
            "e09fd767-6e91-4be3-9258-18728a8d3805_524d8a1b31ac479a85578a2035f480ca_compact.jpg"
        ]
    },
    {
        "name": "Crep Protect - Starter Pack",
        "brand": "Crep Protect",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042407",
        "price_now": "520,000₫",
        "price_compare": "650,000₫",
        "sizes": [
            "Kit"
        ],
        "descriptions": "\n\t\t\t\tBộ sản phẩm vệ sinh/bảo vệ giày tổng hợp siêu nhỏ gọn (Ready To Fly)<br>- 1 Bình xịt siêu chống nước 50ml tạo ra một lớp phủ vô hình giúp đẩy lùi chất lỏng và ngăn ngừa vết bẩn. Để sử dụng trên da lộn, nubuck và giày vải. Crep Protect rất dễ áp dụng và nhanh khô. Áp dụng 2 lớp<br>- 1 Sản phẩm vệ sinh giày cổ điển của chúng tôi hiện đã được sửa đổi thành một giải pháp tạo bọt hiệu quả, sẵn sàng để sử dụng, với nắp lông mềm độc đáo, để làm sạch chuyên sâu toàn diện có dung tích 50ml<br>- 6 Khăn lau giày khẩn cấp đã được tẩm sẵn dung dịch vệ sinh, hiệu quả tức thì.\n\t\t\t",
        "images": [
            "064c026b-3d33-4737-9e07-6789e93edb96_c5bef3d541a7475380cd1cc2b2ab52c3_grande.jpg",
            "286b537a-72eb-4960-ac97-fa06611af158_151b52559c1945f0b8b881a94d0b927e_compact.jpg",
            "f02019ef-fb7d-4be0-be99-3f45fea43e3d_ec5eab5f77f14928a670e660f10107ac_compact.jpg"
        ]
    },
    {
        "name": "Crep Protect 200ml Can",
        "brand": "Crep Protect",
        "type": "Vệ Sinh Giày",
        "sku": "BO17042406",
        "price_now": "400,000₫",
        "price_compare": "500,000₫",
        "sizes": [
            "200ml"
        ],
        "descriptions": "\n\t\t\t\tBình xịt siêu chống nước 200ml tạo ra một lớp phủ vô hình giúp đẩy lùi chất lỏng và ngăn ngừa vết bẩn. Để sử dụng trên da lộn, nubuck và giày vải. Crep Protect rất dễ áp dụng và nhanh khô. Áp dụng 2 lớp.\n\t\t\t",
        "images": [
            "5a2731c2-0c13-4c88-8196-588ef72e6a75_194bb46e032c4123a3f2123cdb84273f_grande.jpg",
            "dfb8950c-99b6-4ad4-8ea1-251eb12ea724_e98030cc1ea84c15984a42bb9cb644b0_compact.jpg",
            "427e8770-e637-49fd-b1bc-069ca3d3a575_c2f30889987743638da48187e8ab57c2_compact.jpg"
        ]
    }
]

// {
//     id: 1;
//     name: "JORDAN 1 ELEVATE LOW ATMOSPHERE - DH7004 600 - 38";
//     brand: "Jordan";
//     type: "Jordan New";
//     sku: "DH7004 600";
//     size: ["38",  "39"];
//     price_now: "2,500,000₫";
//     price_compare: "3,500,000₫";
//     detailed: "Giày Jordan 1 Elevate Low Atmosphere - DH7004 600 - 38";
//     img: {
//         img_compact: "https://beostore.s3.us-west-1.amazonaws.com/products/1/1_compact.jpg";
//         img_grande: "https://beostore.s3.us-west-1.amazonaws.com/products/1/1_grande.jpg";
//         img_master: "https://beostore.s3.us-west-1.amazonaws.com/products/1/1_master.jpg"
//     }
// }

module.exports = linkProducts;
