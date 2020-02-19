// ==UserScript==
// @name         Booking
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://www.booking.com/hotel/*
// @downloadURL  https://raw.githubusercontent.com/clarajorda/room-id/master/room-id-bc.user.js
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;

    $(document).ready(function() {
        console.log('ready...');

        $('div.room-info').each(function( index, value ) {
            var roomid = $(value).attr("id");
            // roomid = roomid.replace('RD','');
            $('a', value).after(' <b>RoomID = ' + roomid + '</b>');
        });
    });
})();
