// ==UserScript==
// @name     Steam Clear Aliases Button
// @version  1
// @author Rottweiler https://steamcommunity.com/profiles/76561198043640068/
// @grant    none
// @include  https://steamcommunity.com/profiles/*
// @include https://steamcommunity.com/id/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

(function() {
  var r= $('<a class="btn_profile_action btn_medium" onclick="ShowClearAliasDialog();"><span>Clear Aliases</span></a>');
  $(".profile_header_actions").append(r);
})();
