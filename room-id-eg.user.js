// ==UserScript==
// @name         Expedia Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.expedia.com/*.Hotel-Information*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// @downloadURL https://raw.githubusercontent.com/clarajorda/room-id/master/room-id-eg.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        console.log('ready...');

        $('tbody.room').each(function( index, value ) {
            const roomid = $(value).data('room-code');

            $('tr > th', value).append('<b>' + roomid + '</b>');
            $('h3.room-name', value).append(', <b>RoomID = ' + roomid + '</b>');
        });
    });
})();
