/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Background script

**/

var enabled_sites = {
    adfly: true,
    shinkme: true,
    shst: true,
    croco: true,
    linkshrink: true,
    ouo: true,
    spam: true
}

function save_sites(){
    chrome.storage.local.set({'enabled_sites': enabled_sites}, function (result) {
        console.log("Updated data.");
    });
}

chrome.storage.local.get('enabled_sites', function (result) {
    if(result == null) return;
    enabled_sites = result.enabled_sites;
    console.log("Successful loaded data.");

    if(enabled_sites == null || (enabled_sites != null && enabled_sites.adfly == null)){
        enabled_sites = {
            adfly: true,
            shinkme: true,
            shst: true,
            croco: true,
            linkshrink: true,
            ouo: true,
            spam: true
        }
    }
});



var requestFilter_sh = {
    urls: [
    "*://*.sh.st/*",
    "*://*.clkmein.com/*",
    "*://*.viid.me/*",
    "*://*.xiw34.com/*",
    "*://*.destyy.com/*",
    "*://*.ceesty.com/*",
    "*://*.clkme.me/*",
    "*://*.cllkme.com/*",
    "*://*.corneey.com/*",
    "*://*.festyy.com/*",
    "*://*.gestyy.com/*",
    "*://*.jnw0.com/*",
    "*://*.qaafa.com/*",
    "*://*.wiid.me/*",
    "*://*.xiw34.com/*"
    ]
};

var requestFilter_spam = {
    urls: [
    "*://*.newtabtv.com/*",
    "*://*.muzicplay.com/*",
    "*://*.adexchangemachine.com/*",
    "*://*.medianewpage.com/*",
    "*://*.mysagagame.com/*",
    "*://*.nextoptim.com/*",
    "*://*.newtab-tv.com/*",
    "*://*.best2017games.com/*",
    "*://*.hicpm10.com/*",
    "*://*.thewhizmarketing.com/*",
    "*://*.williamhill.es/*",
	"*://*.top10posts.com/*",
	"*://*.baiduccdn.com/*",
    "*://*.beforceive.com/*",
    "*://*.gamezjet.com/*",
    "*://*.fftrak.pro/*",
    "*://*.translationbuddy.com/*",
    "*://*.dnoppus.com/*",
    "*://*.elvenar.com/*",
    "*://*.esgentside.com/*",
    "*://*.tviso.com/*",
    "*://*.gamez1a.com/*",
    "*://*.mgid.com/*",
    "*://*.bestgame.directory/*",
    "*://*.popads.net/*",
    "*://*.adk2x.com/*",
    "*://*.usupporthelperslr.win/*",
    "*://*.62b70ac32d4614b.com/*",
    "*://*.pushedwebnews.com/*",
    "*://*.trackweblink.com/*",
    "*://*.di-mart.com/*",
    "*://*.couponxplorer.com/*",
    "*://*.musicgalary.tk/*",
    "*://*.occasic.com/*",
    "*://*.twobisqui3l.com/*",
    "*://*.musikzoo.com/*",
    "*://*.expertadvice.ga/*",
    "*://*.stream-direct.co/*",
    "*://*.addictedtomovies.co/*",
    "*://*.alfredean.com/*",
    "*://*.durined.com/*",
    "*://*.deloton.com/*", 
    "*://*.forminine.com/*",    
	"*://*.girrrly.com/*",
    "*://*.onclickclear.com/*",
    "*://*.juegos-online.info/*",
    "*://*.perfecttoolmedia.com/*",
    "*://*.onclkds.com/*",
    "*://*.optimum-io-speed.site/*"
    ]
};

var requestFilter_adf = {
    urls: [
	"*://*.agileurbia.com/*",
	"*://*.threadsphere.bid/*",
	"*://*.zipteria.com/*",
	"*://*.queuecosm.bid/*",
    "*://*.yobuilder.com/*",
    "*://*.quamiller.com/*",
    "*://*.microify.com/*",
    "*://*.babblecase.com/*",
    "*://*.cogismith.com/*",
    "*://*.abpmirror.tk/*",
    "*://*.ad.inventivetalent.org/*",
    "*://*.adf.ly/*",
    "*://*.anitoons.co.vu/*",
    "*://*.atomcurve.com/*",
    "*://*.atominik.com/*",
    "*://*.ay.gy/*",
    "*://*.battleate.com/*",
    "*://*.bluenik.com/*",
    "*://*.casualient.com/*",
    "*://*.flyserve.co/*",
    "*://*.getrom.net/*",
    "*://*.infortr.co.vu/*",
    "*://*.j.gs/*",
    "*://*.ksatech.info/*",
    "*://*.manggugel.ga/*",
    "*://*.mmoity.com/*",
    "*://*.picocurl.com/*",
    "*://*.pintient.com/*",
    "*://*.q.gs/*",
    "*://*.riffhold.com/*",
    "*://*.simizer.com/*",
    "*://*.tinyical.com/*",
    "*://*.tinyium.com/*",
    "*://*.viahold.com/*",
    "*://*.zo.ee/*",
    "*://*.skamason.com/*"
    ]
};

var requestFilter_shinkme = {
    urls: [
    "*://*.fas.li/*",
    "*://*.shink.in/*",
    "*://*.shink.me/*"
    ]
};

var requestFilter_ouo = {
    urls: [
    "*://*.ouo.io/*",
    "*://*.ouo.press/*"
    ]
};

var requestFilter_croco = {
    urls: [
    "*://*.croco.site/*"
    ]
};

var requestFilter_linkshrink = {
    urls: [
    "*://*.linkshrink.net/*"
    ]
};

/** Adf.ly sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.adfly)return;
    chrome.tabs.executeScript(details.tabId, {file:"js/sites/adfly.js",runAt:"document_start"});
}, requestFilter_adf);


/** Croco.sites sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.croco)return;
    chrome.tabs.executeScript(details.tabId, {file:"js/sites/croco.js",runAt:"document_start"});
}, requestFilter_croco);


/** ShinkMe sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.shinkme)return;
    if (details.type == "main_frame" && details.url.indexOf("shink.in") != -1) chrome.tabs.update(details.tabId, {url: details.url.replace("shink.in", "shink.me")});
    chrome.tabs.executeScript(details.tabId, {file:"js/sites/shinkme.js",runAt:"document_start"});
}, requestFilter_shinkme);


/** ouo.io sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.ouo || details.url.split("/")[3] == "rgo" && details.type != "main_frame")return;
    chrome.tabs.executeScript(details.tabId, {file:"js/sites/ouo.js",runAt:"document_start"});
}, requestFilter_ouo);

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    if (!enabled_sites.ouo || details.url.split("/")[3] != "go" || details.url.split("/").lenght == 5)return;
    var newRef = "http://ouo.io/"+details.url.split("/")[4];
    var gotRef = false;
    for(var n in details.requestHeaders){
        gotRef = details.requestHeaders[n].name.toLowerCase()=="referer";
        if(gotRef)break;
    }
    if(!gotRef) chrome.tabs.update(details.tabId,{"url":newRef});
    console.log("Unbugged ouo: "+newRef);
    return {requestHeaders:details.requestHeaders};
}, requestFilter_ouo, ['requestHeaders', 'blocking']);

/** LinkShrink sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.linkshrink)return;
    chrome.tabs.executeScript(details.tabId, {file:"js/sites/linkshrink.js",runAt:"document_start"});
}, requestFilter_linkshrink);


/** SpamShit sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.spam)return;
    if (details.type == "main_frame") chrome.tabs.remove(details.tabId);
}, requestFilter_spam);


/** Sh.sh sites **/
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    if (!enabled_sites.shst)return;
    var headers = details.requestHeaders;
    headers = headers.filter(function(x) { return x.name !== 'User-Agent'; });
    return { requestHeaders: headers };
}, requestFilter_sh, ['requestHeaders', 'blocking']);

