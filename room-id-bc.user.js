// ==UserScript==
// @name         Booking
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.booking.com/hotel/*.html*
// @downloadURL  https://raw.githubusercontent.com/clarajorda/room-id/master/room-id-bc.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        console.log('ready...');

        $('div.hprt-roomtype-block').each(function( index, value ) {
            var roomid = $(value).attr("data-room-id");
            // roomid = roomid.replace('RD','');
            $('a', value).after(', <b>RoomID = ' + roomid + '</b>');
        });
    });
})();
