/* eslint-disable */
export default ({ route }) => {
  let dotmetricsId = '1182';
  const path = route.path
  if (path.includes('/politika-kriminal')) {
    dotmetricsId = '1174';
  }
  if (path.includes('/biznis-tech')) {
    dotmetricsId = '1176';
  }
  if (path.includes('/kultura')) {
    dotmetricsId = '1178';
  }
  if (path.includes('/zivot')) {
    dotmetricsId = '1179';
  }
  if (path.includes('/pitanje-zdravlja')) {
    dotmetricsId = '12607';
  }
  if (path.includes('/openspace')) {
    dotmetricsId = '12608';
  }
  if (path.includes('/super1')) {
    dotmetricsId = '4136';
  }
  if (path.includes('/telesport')) {
    dotmetricsId = '1175';
  }
  if (path === '/') {
    dotmetricsId = '1173';
  }

    window.dm=window.dm||{AjaxData:[]};
    window.dm.AjaxEvent=function(et,d,ssid,ad){
      dm.AjaxData.push({et:et,d:d,ssid:ssid,ad:ad});
      if(typeof window.DotMetricsObj != 'undefined') {DotMetricsObj.onAjaxDataUpdate();}
    };
    var d=document,
      h=d.getElementsByTagName('head')[0],
      s=d.createElement('script');
    s.type='text/javascript';
    s.async=true;
    s.src='https://dmscript.dotmetrics.net/door.js?id=' + dotmetricsId;
    h.appendChild(s);
}
