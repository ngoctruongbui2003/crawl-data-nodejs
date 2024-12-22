const playlists = [
    {
        id: 1,
        name: 'Top Songs: Sơn Tùng M-TP',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/chung-ta-cua-hien-tai-son-tung-m-tp.m0ooS1OfYFVi.html",
            "https://www.nhaccuatui.com/bai-hat/hay-trao-cho-anh-son-tung-m-tp-ft-snoop-dogg.vtEybe9NxLw7.html",
            "https://www.nhaccuatui.com/bai-hat/chay-ngay-di-son-tung-m-tp.fuwWtPb4h3B2.html",
            "https://www.nhaccuatui.com/bai-hat/chung-ta-khong-thuoc-ve-nhau-son-tung-m-tp.Qtd3XdEr5XtP.html",
            "https://www.nhaccuatui.com/bai-hat/em-cua-ngay-hom-qua-son-tung-m-tp.9Fd4zVvPMIbf.html",
            "https://www.nhaccuatui.com/bai-hat/muon-roi-ma-sao-con-son-tung-m-tp.2AwsjotRy1ES.html",
            "https://www.nhaccuatui.com/bai-hat/nhu-ngay-hom-qua-son-tung-m-tp.xFre2rAcLCTk.html",
            "https://www.nhaccuatui.com/bai-hat/buong-doi-tay-nhau-ra-son-tung-m-tp.mPjFpFGJhzko.html",
            "https://www.nhaccuatui.com/bai-hat/nang-am-xa-dan-son-tung-m-tp.siR8wyzc1NG9.html",
            "https://www.nhaccuatui.com/bai-hat/con-mua-ngang-qua-son-tung-m-tp.jKtQogltJZ.html",
            "https://www.nhaccuatui.com/bai-hat/khong-phai-dang-vua-dau-son-tung-m-tp.SZtJn3M4xe2O.html",
            "https://www.nhaccuatui.com/bai-hat/noi-nay-co-anh-son-tung-m-tp.JzDZ5BW4RSTI.html",
            "https://www.nhaccuatui.com/bai-hat/mot-nam-moi-binh-an-son-tung-m-tp.27co2YRnwBTJ.html",
            "https://www.nhaccuatui.com/bai-hat/anh-sai-roi-son-tung-m-tp.7sP7rhnjpMJ0.html",
            "https://www.nhaccuatui.com/bai-hat/am-tham-ben-em-son-tung-m-tp.Sttn5Z5WPKPR.html",
            "https://www.nhaccuatui.com/bai-hat/an-nut-nho-tha-giac-mo-son-tung-m-tp.IOel90rXTGw6.html",
            "https://www.nhaccuatui.com/bai-hat/lac-troi-son-tung-m-tp.kM9SkAzMbTKV.html",
            "https://www.nhaccuatui.com/bai-hat/tien-len-viet-nam-oi-son-tung-m-tp.Izj3gn5b7bZy.html",
            "https://www.nhaccuatui.com/bai-hat/you-of-yesterday-khac-hung-remix-son-tung-m-tp.SYAIUdtVqRNN.html",
            "https://www.nhaccuatui.com/bai-hat/khuon-mat-dang-thuong-son-tung-m-tp.kfPSh6WlPR3U.html",
            "https://www.nhaccuatui.com/bai-hat/co-chac-yeu-la-day-son-tung-m-tp.PDQhy2jOk147.html",
            "https://www.nhaccuatui.com/bai-hat/con-mua-xa-dan-son-tung-m-tp.YRHvjaOi44LL.html",
            "https://www.nhaccuatui.com/bai-hat/chac-ai-do-se-ve-son-tung-m-tp.aFBoEMDWHdPu.html",
            "https://www.nhaccuatui.com/bai-hat/thai-binh-mo-hoi-roi-son-tung-m-tp.2YqlDLWYMOQm.html",
            "https://www.nhaccuatui.com/bai-hat/nang-am-ngang-qua-son-tung-m-tp.r2uSBXI8j8ms.html"
        ]
    },
    {
        id: 2, // Danh doi - Obito
        name: 'Đánh đổi',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/intro-obito.aPd7cfPStVRy.html",
            "https://www.nhaccuatui.com/bai-hat/xuat-phat-diem-obito.XkIezhddwRMo.html",
            "https://www.nhaccuatui.com/bai-hat/cl5-interlude-obito.WpCUyOLY59IU.html",
            "https://www.nhaccuatui.com/bai-hat/dau-duong-xo-cho-obito-ft-lang-ld.oNrdOeshSTxb.html",
            "https://www.nhaccuatui.com/bai-hat/bien-gioi-long-binh-obito.xaK2ufJDP4oO.html",
            "https://www.nhaccuatui.com/bai-hat/16-obito.xQRRZ60qy0J9.html",
            "https://www.nhaccuatui.com/bai-hat/sai-gon-oi-obito.HaEC65GNGaXZ.html",
            "https://www.nhaccuatui.com/bai-hat/tron-chay-obito.AuH0OJRO30ND.html",
            "https://www.nhaccuatui.com/bai-hat/cat-canh-interlude-obito.WclMYoabkAyJ.html",
            "https://www.nhaccuatui.com/bai-hat/ha-noi-obito-ft-vstra.d134Al3iEsL1.html",
            "https://www.nhaccuatui.com/bai-hat/vo-dieu-kien-obito.JWCY1OZhO1Nh.html",
            "https://www.nhaccuatui.com/bai-hat/danh-doi-obito-ft-rpt-mck.xhe7vA8gRERx.html",
            "https://www.nhaccuatui.com/bai-hat/backstage-freestyle-obito.9lZWDV7JkVJH.html",
            "https://www.nhaccuatui.com/bai-hat/tell-the-kids-i-love-them-obito-ft-shiki.NgCn5K89L6ws.html",
            "https://www.nhaccuatui.com/bai-hat/uoc-mo-cua-me-interlude-obito.Rqkn0Ddcu2av.html",
            "https://www.nhaccuatui.com/bai-hat/con-ke-ba-nghe-obito.WojwXpyFuo5N.html",
            "https://www.nhaccuatui.com/bai-hat/champion-obito.EmCL1qPOOzP7.html",
            "https://www.nhaccuatui.com/bai-hat/chua-xong-obito.Ogym6DqpGbwd.html",
            "https://www.nhaccuatui.com/bai-hat/tu-su-obito.IimYQz5fT2W3.html",
            "https://www.nhaccuatui.com/bai-hat/outro-obito.y9AQSjmYO4Gf.html"
        ]
    },
    {
        id: 3, // An - Lil Wuyn
        name: 'An',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/intro-lil-wuyn.D3SPhCHozhF1.html",
            "https://www.nhaccuatui.com/bai-hat/an-lil-wuyn-ft-minstu.IEfAp3jesEn3.html",
            "https://www.nhaccuatui.com/bai-hat/mo-mat-lil-wuyn-ft-den.tpRRkICa4MBi.html",
            "https://www.nhaccuatui.com/bai-hat/no-way-back-lil-wuyn-ft-b-wine.U8ySSaaYO6Zu.html",
            "https://www.nhaccuatui.com/bai-hat/tam-tu-lil-wuyn-ft-cam.REtezTNPn7Dq.html",
            "https://www.nhaccuatui.com/bai-hat/chop-mat-lil-wuyn-ft-young-h-ft-pjpo.vxr5rQj83Ezm.html",
            "https://www.nhaccuatui.com/bai-hat/nao-biet-dau-lil-wuyn.tvnKJ3DQNGSW.html",
            "https://www.nhaccuatui.com/bai-hat/vu-vo-lil-wuyn-ft-16-brt.AkruyhybMGip.html",
            "https://www.nhaccuatui.com/bai-hat/thay-doi-lil-wuyn.ujoFQu8m3Jqt.html",
            "https://www.nhaccuatui.com/bai-hat/more-life-lil-wuyn.9e90buRj6eCF.html",
            "https://www.nhaccuatui.com/bai-hat/nham-mat-lil-wuyn-ft-spyder-ft-kwzzzy.TLIfKNdhfBJ7.html",
            "https://www.nhaccuatui.com/bai-hat/hao-quang-lil-wuyn-ft-rhymastic.ZRMxZxVQCMU6.html",
            "https://www.nhaccuatui.com/bai-hat/fnd-lil-wuyn-ft-vsoul.G37Ur8zdrxVY.html"
        ]
    },
    {
        id: 4, // Nhung tiec nuoi - Vu
        name: 'Những tiếc nuối',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/neu-nhung-tiec-nuoi-vu.dvLYRJQDgLFW.html",
            "https://www.nhaccuatui.com/bai-hat/mua-mua-ay-vu.JloHP5sAf9Ye.html",
            "https://www.nhaccuatui.com/bai-hat/ngoi-cho-trong-van-vuong-vu-ft-my-anh.UrMtud3m1Ksf.html",
            "https://www.nhaccuatui.com/bai-hat/danh-het-xuan-thi-de-cho-nhau-vu-ft-ha-anh-tuan.umgyBvkr1wvn.html",
            "https://www.nhaccuatui.com/bai-hat/va-em-se-luon-la-nguoi-toi-yeu-nhat-vu-ft-khang.AVa8eFOQunBP.html",
            "https://www.nhaccuatui.com/bai-hat/nhung-chuyen-bay-vu.v72eYSOtf1Ps.html",
            "https://www.nhaccuatui.com/bai-hat/may-khoc-vi-dieu-gi-vu.4aTXs1Dz6zwg.html",
            "https://www.nhaccuatui.com/bai-hat/nhung-loi-hua-bo-quen-vu-ft-dear-jane.cJ6lXsQLONjC.html",
            "https://www.nhaccuatui.com/bai-hat/khong-yeu-em-thi-yeu-ai-vu-ft-low-g.exrnjWcqFJNW.html",
            "https://www.nhaccuatui.com/bai-hat/binh-yen-vu-ft-binz.56Um1CgCynmG.html"
        ]
    },
    {
        id: 5, // thank u, next - Ariana Grande
        name: 'thank u, next',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/imagine-ariana-grande.v2zlhp7nGmHA.html",
            "https://www.nhaccuatui.com/bai-hat/needy-ariana-grande.A3rLKG0bjP23.html",
            "https://www.nhaccuatui.com/bai-hat/nasa-ariana-grande.bciYDReVYl6X.html",
            "https://www.nhaccuatui.com/bai-hat/bloodline-ariana-grande.cMNXAZjv3Zxr.html",
            "https://www.nhaccuatui.com/bai-hat/fake-smile-ariana-grande.bi27acxF1mTY.html",
            "https://www.nhaccuatui.com/bai-hat/bad-idea-ariana-grande.p4xHkElfV4Gm.html",
            "https://www.nhaccuatui.com/bai-hat/make-up-ariana-grande.iWCh6VbWil7N.html",
            "https://www.nhaccuatui.com/bai-hat/ghostin-ariana-grande.hyGbPooNFmdr.html",
            "https://www.nhaccuatui.com/bai-hat/in-my-head-ariana-grande.5YxfZYXZgk2n.html",
            "https://www.nhaccuatui.com/bai-hat/7-rings-ariana-grande.6jZz4fuWkTt3.html",
            "https://www.nhaccuatui.com/bai-hat/thank-u-next-ariana-grande.UDIK6t5XWnHS.html",
            "https://www.nhaccuatui.com/bai-hat/break-up-with-your-girlfriend-im-bored-ariana-grande.QDlP7gLfDsuj.html"
        ]
    },
    {
        id: 6,
        urls: [
            "https://www.nhaccuatui.com/bai-hat/mat-ket-noi-duong-domic.uJ8qLJzC9wH5.html",
            "https://www.nhaccuatui.com/bai-hat/tai-sinh-tung-duong.pRWD2qnMLHNL.html",
            "https://www.nhaccuatui.com/bai-hat/anh-da-lam-gi-dau-rap-viet-ft-nhat-hoang-ft-thuy-chi.vR9ZLLyOma6r.html",
            "https://www.nhaccuatui.com/bai-hat/tinh-dau-qua-chen-anh-trai-say-hi-ft-quang-hung-masterd-ft-negav-ft-phap-kieu-ft-erik.ZViQdtds3AH7.html",
            "https://www.nhaccuatui.com/bai-hat/lan-uu-tien-quang-hung-masterd-ft-jsol-ft-hurrykng-ft-duong-domic-ft-mopius.58zlb0WV5sp0.html",
            "https://www.nhaccuatui.com/bai-hat/binh-yen-vu-ft-binz.56Um1CgCynmG.html",
            "https://www.nhaccuatui.com/bai-hat/luot-tren-con-song-rap-viet-ft-dangrangto.8uPdufDbpDRT.html",
            "https://www.nhaccuatui.com/bai-hat/e-la-khong-the-anh-quan.r27tf4MELOuA.html",
            "https://www.nhaccuatui.com/bai-hat/di-giua-troi-ruc-ro-from-di-giua-troi-ruc-ro-ngo-lan-huong.ISY94SDm2hFh.html",
            "https://www.nhaccuatui.com/bai-hat/exit-sign-hieuthuhai.u004JyzIoGWx.html",
            "https://www.nhaccuatui.com/bai-hat/kim-phut-kim-gio-isaac-ft-negav-ft-hieuthuhai-ft-hurrykng-ft-phap-kieu-ft-anh-trai-say-hi.I27zoLp2Ovzz.html",
            "https://www.nhaccuatui.com/bai-hat/anh-dau-tu-luc-em-di-tran-manh-cuong.aN8avC2wBVjC.html",
            "https://www.nhaccuatui.com/bai-hat/ngao-ngo-anh-trai-say-hi-ft-hieuthuhai-ft-erik-ft-anh-tu-atus-ft-jsol-ft-orange.gwkZrcqfbbOI.html",
            "https://www.nhaccuatui.com/bai-hat/sao-hang-a-anh-trai-say-hi-ft-hieuthuhai-ft-duong-domic-ft-song-luan-ft-jsol.9hVrZ2qY9XqD.html",
            "https://www.nhaccuatui.com/bai-hat/duoi-tan-cay-kho-hoa-no-jack-j97.fNpJXs4PSSPY.html",
            "https://www.nhaccuatui.com/bai-hat/tran-bo-nho-anh-trai-say-hi-ft-duong-domic.PJMDWo8qSqvI.html",
            "https://www.nhaccuatui.com/bai-hat/cham-hoa-mono.7YtLdl79idwL.html",
            "https://www.nhaccuatui.com/bai-hat/cho-mot-nguoi-rap-viet-ft-gill-ft-captain.nHigLNMdy8H1.html",
            "https://www.nhaccuatui.com/bai-hat/qua-tung-khung-hinh-rap-viet-ft-hustlang-robber-ft-ngan.Sx4DMgqxRpxD.html",
            "https://www.nhaccuatui.com/bai-hat/1tinhyeu-rap-viet-ft-hustlang-robber.bCPTqDLmMjR4.html",
            "https://www.nhaccuatui.com/bai-hat/hustlang-all-day-rap-viet-ft-hustlang-robber.CyLKD1v4vbsG.html",
            "https://www.nhaccuatui.com/bai-hat/catch-me-if-you-can-anh-trai-say-hi-ft-quang-hung-masterd-ft-negav-ft-cong-duong-ft-nicky.jFehIyXrCHMm.html",
            "https://www.nhaccuatui.com/bai-hat/bau-troi-moi-da-lab-ft-minh-toc-lam.Azs1yEsbO630.html",
            "https://www.nhaccuatui.com/bai-hat/troi-em-lai-anh-trai-say-hi-ft-quang-hung-masterd.O8F8TRrOO8Cy.html",
            "https://www.nhaccuatui.com/bai-hat/hao-quang-rhyder-ft-duong-domic-ft-phap-kieu-ft-anh-trai-say-hi.GE48izoiT3Oz.html",
            "https://www.nhaccuatui.com/bai-hat/chan-thanh-anh-trai-say-hi-ft-rhyder-ft-captain-ft-quang-hung-masterd-ft-wean-ft-ali-hoang-duong.ABLMB2aG7Gtr.html",
            "https://www.nhaccuatui.com/bai-hat/khoa-ly-biet-the-masked-singer-ft-voi-ban-don.4TTDL1BIR4XN.html",
            "https://www.nhaccuatui.com/bai-hat/ngua-o-dangrangto-ft-teuyungboy-ft-donal.1Nr12dvjtPpl.html",
            "https://www.nhaccuatui.com/bai-hat/noi-dau-dinh-kem-anh-tu-atus-ft-rhyder.Sb4n5RZ46YPe.html",
            "https://www.nhaccuatui.com/bai-hat/truong-dinh-hoang-lil-van.nM0VNnnaTCH7.html",
            "https://www.nhaccuatui.com/bai-hat/regret-anh-trai-say-hi-ft-quan-ap-ft-phap-kieu-ft-quang-trung-ft-ali-hoang-duong-ft-lam-bao-ngoc.0U4Pr5esABDT.html",
            "https://www.nhaccuatui.com/bai-hat/nhung-loi-hua-bo-quen-vu-ft-dear-jane.cJ6lXsQLONjC.html",
            "https://www.nhaccuatui.com/bai-hat/lao-tam-kho-tu-thanh-hung.q9m7BQR5d9oZ.html",
            "https://www.nhaccuatui.com/bai-hat/pin-du-phong-duong-domic-ft-lou-hoang.k2TvHW1YQGPI.html",
            "https://www.nhaccuatui.com/bai-hat/phong-zin-zin-tlinh-ft-low-g.xSDKNwZIQPPY.html",
            "https://www.nhaccuatui.com/bai-hat/khong-the-say-hieuthuhai.hluCHOE8Rkd4.html",
            "https://www.nhaccuatui.com/bai-hat/khong-ra-gi-truc-nhan.A731vnPxo6VI.html",
            "https://www.nhaccuatui.com/bai-hat/dau-phai-vo-anh-rap-viet-ft-dangrangto.wUI1ftKF406O.html",
            "https://www.nhaccuatui.com/bai-hat/trai-ho-vu-rap-viet-ft-gill-ft-icy-famou.HY5DEKRfxGhb.html",
            "https://www.nhaccuatui.com/bai-hat/me-yeu-con-cuong-seven-ft-phan-dinh-tung-ft-bang-kieu-ft-jun-pham-ft-tu-long-ft-truong-the-vinh-ft-tuan-hung-ft-soobin-ft-st-son-thach-ft-kay-tran-ft-bb-tran.S6G2LWUe6mHy.html",
            "https://www.nhaccuatui.com/bai-hat/mot-doi-14-casper-ft-bon-nghiem-ft-buitruonglinh.ESFq1iGH8zTQ.html",
            "https://www.nhaccuatui.com/bai-hat/ban-doi-karik-ft-gducky.mX8e5tI588ih.html",
            "https://www.nhaccuatui.com/bai-hat/doa-phu-dung-cuoi-cung-anh-trai-say-hi-ft-duc-phuc.KZA4qsTv3Vol.html",
            "https://www.nhaccuatui.com/bai-hat/hop-on-da-show-tlinh-ft-low-g.aYLxhJMqB1Wx.html",
            "https://www.nhaccuatui.com/bai-hat/ai-hong-nhan-dunghoangpham.ScyyrCRfpD8p.html",
            "https://www.nhaccuatui.com/bai-hat/anh-biet-roi-rhyder-ft-anh-trai-say-hi.Pkd8bL4Ah3ce.html",
            "https://www.nhaccuatui.com/bai-hat/van-su-tuy-duyen-thanh-hung.qLfp4cugFJ6s.html",
            "https://www.nhaccuatui.com/bai-hat/mot-nua-su-that-24kright-ft-ngan-ft-hipz.7uwkTmMAGERP.html",
            "https://www.nhaccuatui.com/bai-hat/7-lan-vap-nga-8-lan-dung-len-miina-dreamer-ft-rin9-ft-dreamer.ONmc6zZNBmMU.html",
            "https://www.nhaccuatui.com/bai-hat/love-somebody-rap-viet-ft-coolkid-ft-young-puppy.Y82miMCy8f1Q.html",
            "https://www.nhaccuatui.com/bai-hat/wrong-times-puppy-ft-dangrangto.0lTwDzgDWI2q.html",
            "https://www.nhaccuatui.com/bai-hat/trinh-hieuthuhai.m3kUqJlhSxnG.html",
            "https://www.nhaccuatui.com/bai-hat/khong-yeu-em-thi-yeu-ai-vu-ft-low-g.exrnjWcqFJNW.html",
            "https://www.nhaccuatui.com/bai-hat/u-thi-chia-tay-captain-ft-rhyder.U9EpKQ7w4t2m.html",
            "https://www.nhaccuatui.com/bai-hat/roi-em-se-gap-mot-chang-trai-khac-the-masked-singer-ft-hippohappy.DCEdaAfER9UV.html",
            "https://www.nhaccuatui.com/bai-hat/ngay-dep-troi-de-noi-chia-tay-lou-hoang.33UwqCkqiAeK.html",
            "https://www.nhaccuatui.com/bai-hat/anh-thoi-nhan-nhuong-cover-kieu-chi.zwkWhleOWFDp.html",
            "https://www.nhaccuatui.com/bai-hat/deu-la-cua-em-quang-trung-ft-song-luan-ft-anh-tu-atus-ft-anh-tu-ft-duong-domic-ft-anh-trai-say-hi.yLOyAkwsTktH.html",
            "https://www.nhaccuatui.com/bai-hat/minh-anh-thoi-negav.j5zHTISPbKto.html",
            "https://www.nhaccuatui.com/bai-hat/cam-tu-cau-rayo-ft-huynh-van.sHwNWcmv9l0j.html"
        ]
    },
    {
        id: 7, // HIT ME HARD AND SOFT - Billie Eilish
        name: 'HIT ME HARD AND SOFT',
        urls: [
            "https://www.nhaccuatui.com/bai-hat/skinny-billie-eilish.XZF4ykDorXXL.html",
            "https://www.nhaccuatui.com/bai-hat/lunch-billie-eilish.PgFzxaJhTAC8.html",
            "https://www.nhaccuatui.com/bai-hat/chihiro-billie-eilish.DSN82JFUxqFS.html",
            "https://www.nhaccuatui.com/bai-hat/birds-of-a-feather-billie-eilish.1CdynevOiNtB.html",
            "https://www.nhaccuatui.com/bai-hat/wildflower-billie-eilish.nCl36vgH8nsz.html",
            "https://www.nhaccuatui.com/bai-hat/the-greatest-billie-eilish.Oh8DuOmVqwli.html",
            "https://www.nhaccuatui.com/bai-hat/lamour-de-ma-vie-billie-eilish.0ClUk2vV9vGS.html",
            "https://www.nhaccuatui.com/bai-hat/the-diner-billie-eilish.qv7iHRG74bnN.html",
            "https://www.nhaccuatui.com/bai-hat/bittersuite-billie-eilish.6OP3H80yYK0y.html",
            "https://www.nhaccuatui.com/bai-hat/blue-billie-eilish.uaLlPI0LBz3k.html"
        ]
    },
    {
        id: 8,
        name: 'The Wxrdies', 
        urls: [
            "https://www.nhaccuatui.com/bai-hat/ca-khuc-cuoi-wxrdie.0TGFNRbzzD9k.html",
            "https://www.nhaccuatui.com/bai-hat/then-choa-kayc-ft-wxrdie.Kq1PeT2VM1e1.html",
            "https://www.nhaccuatui.com/bai-hat/bang-qua-cau-giay-wxrdie-ft-rpt-jasondilla.tptw20d0fjj7.html",
            "https://www.nhaccuatui.com/bai-hat/den-tham-anh-di-wxrdie.MFJXze5bEhHE.html",
            "https://www.nhaccuatui.com/bai-hat/life-of-a-hxstler-wxrdie.ptnVGCDnrBKA.html",
            "https://www.nhaccuatui.com/bai-hat/lonely-stonie-wxrdie.Vy89lwNG18g1.html",
            "https://www.nhaccuatui.com/bai-hat/may-dua-nhoc-wxrdie.ruga6W0eJh1J.html",
            "https://www.nhaccuatui.com/bai-hat/tro-ve-justatee-ft-wxrdie.ov9kCRPBnaxC.html",
            "https://www.nhaccuatui.com/bai-hat/pray-for-kayc-ft-wxrdie.Pd4tjzpWK9ZR.html",
            "https://www.nhaccuatui.com/bai-hat/boi-vi-wxrdie.8oZssmhfFwi7.html",
            "https://www.nhaccuatui.com/bai-hat/tim-anh-ghen-wxrdie-ft-lvk-ft-dangrangto-ft-teuyungboy.r7mmU7i2AauQ.html",
            "https://www.nhaccuatui.com/bai-hat/get-money-wxrdie-ft-thai-vg.CAa91eKtVSia.html",
            "https://www.nhaccuatui.com/bai-hat/anh-freestyle-gill-ft-wxrdie.E1keOJMBh40m.html",
            "https://www.nhaccuatui.com/bai-hat/dau-dau-wxrdie.lmstWH8wnUZB.html",
            "https://www.nhaccuatui.com/bai-hat/29-wxrdie-ft-mason-nguyen.B0XcxxL0qXEJ.html",
            "https://www.nhaccuatui.com/bai-hat/sieu-nhan-ngao-24kright-ft-wxrdie.qnod2cx4x6QY.html",
            "https://www.nhaccuatui.com/bai-hat/gia-tai-wxrdie-ft-baby-moke.cFw7cnSZVfIe.html",
            "https://www.nhaccuatui.com/bai-hat/loi-song-wxrdie.Xn5gQqu1BNZ3.html",
            "https://www.nhaccuatui.com/bai-hat/nu-cep-wxrdie.v7qTaIOW6JSE.html",
            "https://www.nhaccuatui.com/bai-hat/tong-ket-wxrdie-ft-lil-wuyn.p3EvycJxR6Lv.html",
            "https://www.nhaccuatui.com/bai-hat/ca-2-wxrdie-ft-qnt-ft-spideyboy.EaMjjblt00lf.html",
            "https://www.nhaccuatui.com/bai-hat/lau-dai-wxrdie-ft-flava-sati.KKRfocCrt3M8.html",
            "https://www.nhaccuatui.com/bai-hat/moi-em-mcee-blue-ft-wxrdie.VkfbcqOjgTve.html",
            "https://www.nhaccuatui.com/bai-hat/thic-qe-wxrdie.v0JsW5pDTeK5.html"
        ]
    }
]

module.exports = playlists;