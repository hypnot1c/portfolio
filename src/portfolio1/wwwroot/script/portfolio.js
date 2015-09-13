/// <reference path="../../wwwroot/lib/jquery/dist/jquery.js" />
/// <reference path="../lib/material-design-lite/material.js" />


//$('nav.navigation').click(function (event) {
//  var a = event.target;
//  var cls = a.className.split(' ');
//  $('body').attr('class', cls[cls.length - 1]);
//  var path = '/';
//  if ($(a).hasClass('main')) path = '/' //'@Url.Action("Index", "/")';
//  if ($(a).hasClass('examples')) path = 'examples'; '@Url.Action("Index", "examples")';
//  if ($(a).hasClass('resume')) path = 'resume';//'@Url.Action("Index", "resume")';
//  $('#content').load(path + ' #content', function () {
//    componentHandler.upgradeAllRegistered();
//  });
//  history.pushState({ path: path }, '', path);
//  return false;
//});
