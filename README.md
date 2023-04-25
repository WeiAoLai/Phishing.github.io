# Phishing.github.io
### web程式設計，復刻釣魚網站[**LINE**]
❤ **Notion筆記：**[\更完整介紹，歡迎點擊此連結^-^~/](https://www.notion.so/84ebe31accc0448a8745e469810911aa?pvs=4)

* #### index.html(復刻LINE網頁)
* #### style.css(佈局，參考LINE原始碼[F12])
* #### main.js(按鍵事件，點擊)

## 網站介紹：

目標網站：[LINE Login](https://access.line.me/oauth2/v2.1/noauto-login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fclient_id%3D1653650356%26redirect_uri%3Dhttps%253A%252F%252Fcontact-cc.line.me%252FloginCallback%252F%253FpreviousUrlForRedirect%253D%25252Fpc%25252F%25252Fzh-hant%25252F%26state%3Deb2a69f008bf0efaa7d9e49be9ac36c0%26response_type%3Dcode%26enable_continue_without_login%3Dtrue%26scope%3Dopenid%2Bprofile%2Bemail%2Bphone&loginChannelId=1653650356&loginState=vsb4waxpRn0OGkre4iijsS#/)

## 設計理念：

釣魚網站顧名思義就是要釣魚！釣使用者的資料，所以這邊盡量還原了LINE登入頁面的樣子，然而金絮其外敗絮其內，裡面的重要元件都被我換成彈跳視窗，只要點擊登入就會被我帶到反詐騙官網，或是騙你中毒......等等驚喜，等你來發現！

### JavaScript：
```
** 蒐集使用者的手機號碼 **
function click_MdBtn02(){
    var phone = prompt("\n非常抱歉，因為系統問題暫時無法連線。\n\n改傳送手機驗證碼，請輸入手機號碼。");
    if(phone != true){
        alert("\n您可以再次嘗試。");
    }
    else if (phone == null || phone.length > 10 || phone.length < 10) {
        alert("\n輸入錯誤!請再次嘗試。");
    }
    else {
        var message = "\n驗證碼已傳送到："+ phone + " \n\n30秒內若沒有收到驗證碼，請再次嘗試。 " ;
        alert(message);
    }
}
```
```
** 強制塞廣告或跳轉網頁 **
function click_MdBtn01(){
    alert("\n感謝提供您的帳號與密碼！\n\n已將病毒贈與您。")
    window.open("https://165.npa.gov.tw/#/").focus();
}
```
```
** 警告 **
    if(confirm("\n是否真的忘記密碼？") == true) {
        alert("\n已替您將密碼上鎖 AuA\n\n如有問題，165專線歡迎您 :)")
    }
```
<aside>
❤ **釣魚網站LINE復刻版：** [LINE Login](https://weiaolai.github.io/Phishing.github.io/)
</aside>
