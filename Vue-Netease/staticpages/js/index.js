window.onload=function () {

  ;(function () {
    const  styleN = document.createElement("style");
    const width = document.documentElement.clientWidth/16;
    styleN.innerHTML = 'html{font-size:'+width+'px!important}';
    document.head.appendChild(styleN);
  })();
};
