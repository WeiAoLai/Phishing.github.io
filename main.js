const MdBtn02 = document.getElementById("MdBtn02");
MdBtn02.addEventListener('click', e => {});
function click_MdBtn02(){
    var phone = prompt("\n非常抱歉，因為系統問題暫時無法連線。\n\n改傳送手機驗證碼，請輸入手機號碼。", "0900000000");
    if (phone == null) {
        alert("\n您可以再次嘗試。");
    }
    else if (phone.length > 10 || phone.length < 10) {
        alert("\n輸入錯誤!請再次嘗試。");
    }
    else {
        var message = "\n驗證碼已傳送到："+ phone + " \n\n30秒內若沒有收到驗證碼，請再次嘗試。 " ;
        alert(message);
    }
}

const MdBtn01 = document.getElementsByClassName("MdBtn01");
MdBtn01.addEventListener('click', e => {});
function click_MdBtn01(){
    alert("\n感謝提供您的帳號與密碼！\n\n已將病毒贈與您。")
    window.open("https://165.npa.gov.tw/#/").focus();
}

const mdMN03EtcLink01 = document.getElementsByClassName("mdMN03EtcLink01");
mdMN03EtcLink01.addEventListener('click', e => {});
function click_mdMN03EtcLink01(){
    alert("\n為何不登入？\n\n請聯繫我們。")
    window.open("https://contact-cc.line.me/zh-hant/?continue_without_login=true").focus();
}

const mdMN03EtcLink02 = document.getElementById("mdMN03EtcLink02");
mdMN03EtcLink02.addEventListener('click', e => {});
function click_mdMN03EtcLink02(){
    if(confirm("\n是否真的忘記密碼？") == true) {
        alert("\n已替您將密碼上鎖 AuA\n\n如有問題，165專線歡迎您 :)")
    }
}




