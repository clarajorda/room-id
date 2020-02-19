// ==UserScript==
// @name         Booking CI/CO Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.booking.com/hotel/kr/donnaekohillresort.en-gb.html?label=gen173nr-1FCAsofUISZG9ubmFla29oaWxscmVzb3J0SDNYBGgsiAEBmAEJuAEGyAEM2AEB6AEB-AELiAIBqAIDuAL2q6nkBcACAQ;sid=3a413d1eb92f94cdc03d1569ccca1b2d;all_sr_blocks=132275601_103611485_2_0_0;checkin=2019-04-09;checkout=2019-04-10;dest_id=900048053;dest_type=city;dist=0;group_adults=2;hapos=1;highlighted_blocks=132275601_103611485_2_0_0;hp_group_set=0;hpos=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1552569943;srpvid=fc455e6b93d60156;type=total;ucfs=1&
// @downloadURL https://raw.githubusercontent.com/clarajorda/room-id/master/room-id-bc.user.js
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
