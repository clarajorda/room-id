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

        $$('a.room-rate-dialog-trigger__btn').each(function( index, value ) {
            const link= $(value).data('href');
	    const roomdid = link.split('=')[1].split('-')[1];
            $(value).after(', <b>RoomID = ' + roomid + '</b>');
        });
    });
})();
