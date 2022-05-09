/* eslint-disable */
export default function ({ route }) {
  (function(u,p,s,c,r){u[r]=u[r]||function(p){(u[r].q=u[r].q||[]).push(p)},u[r].ls=1*new Date();
    var a=p.createElement(s),m=p.getElementsByTagName(s)[0];a.async=1;a.src=c;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//files.upscore.com/async/upScore.js','upScore');

  window.upScore({
    config: {
      domain: 'telegram.hr',
      article: '#article-body',
      track_positions: route.name !== 'index',
    },
  })
}
