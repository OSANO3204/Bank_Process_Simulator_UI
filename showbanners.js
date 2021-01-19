let MyBanners=new Array("downloadhip.jpg","downloadrockband.jpg","downloadsavage21.jpg");

banner=0
function ShowBanners(){
if (document.images){ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",1000)
}
<script type="text/javascript" src="showbanners.js"></script>
}
