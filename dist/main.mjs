import "./main.css";
import {jsx as $hgUW1$jsx, jsxs as $hgUW1$jsxs} from "react/jsx-runtime";
import $hgUW1$react, {useRef as $hgUW1$useRef, useState as $hgUW1$useState, useEffect as $hgUW1$useEffect} from "react";
import $hgUW1$dayjs from "dayjs";
import $hgUW1$dayjsplugincustomParseFormat from "dayjs/plugin/customParseFormat";
import $hgUW1$classnames from "classnames";





var $2fed32a54a53d836$export$34e0f9847d4c02dd;
var $2fed32a54a53d836$export$675bc0f5721dbbd7;
var $2fed32a54a53d836$export$62c3fdea1232bbe6;
var $2fed32a54a53d836$export$fa1a145585762549;
var $2fed32a54a53d836$export$8a72154329c4894f;
var $2fed32a54a53d836$export$380ba132e7e1f4be;
var $2fed32a54a53d836$export$f58742ec0087f4f5;
$2fed32a54a53d836$export$34e0f9847d4c02dd = `SIuwVW_container`;
$2fed32a54a53d836$export$675bc0f5721dbbd7 = `SIuwVW_guide`;
$2fed32a54a53d836$export$62c3fdea1232bbe6 = `SIuwVW_timeRowContainer`;
$2fed32a54a53d836$export$fa1a145585762549 = `SIuwVW_timeRow`;
$2fed32a54a53d836$export$8a72154329c4894f = `SIuwVW_channelColumn`;
$2fed32a54a53d836$export$380ba132e7e1f4be = `SIuwVW_nowButton`;
$2fed32a54a53d836$export$f58742ec0087f4f5 = `SIuwVW_scheduleLine`;









const $1fbad53519a9d314$export$be15ff444ccef421 = 9;


var $f419c485b7bd4524$export$fb184b623420d9be;
var $f419c485b7bd4524$export$57bf213be019eeb0;
var $f419c485b7bd4524$export$2da9be4cfdb689b1;
var $f419c485b7bd4524$export$89da14300d534261;
$f419c485b7bd4524$export$fb184b623420d9be = `AUQOOG_title`;
$f419c485b7bd4524$export$57bf213be019eeb0 = `AUQOOG_show`;
$f419c485b7bd4524$export$2da9be4cfdb689b1 = `AUQOOG_time`;
$f419c485b7bd4524$export$89da14300d534261 = `AUQOOG_active`;


const $cf4f946ae53be08c$var$Show = ({ title: title , start: start , end: end  })=>{
    const startDate = $hgUW1$dayjs(start);
    const endDate = $hgUW1$dayjs(end);
    const now = $hgUW1$dayjs();
    const isActive = now.isAfter(startDate) && now.isBefore(endDate);
    const duration = endDate.diff(startDate, 'minutes');
    const showWidth = duration * $1fbad53519a9d314$export$be15ff444ccef421;
    return /*#__PURE__*/ $hgUW1$jsxs("div", {
        className: $hgUW1$classnames($f419c485b7bd4524$export$57bf213be019eeb0, isActive ? $f419c485b7bd4524$export$89da14300d534261 : undefined),
        style: {
            width: showWidth,
            minWidth: showWidth,
            maxWidth: showWidth
        },
        children: [
            /*#__PURE__*/ $hgUW1$jsx("span", {
                className: $f419c485b7bd4524$export$fb184b623420d9be,
                children: title
            }),
            /*#__PURE__*/ $hgUW1$jsxs("span", {
                className: $f419c485b7bd4524$export$2da9be4cfdb689b1,
                children: [
                    startDate.format('HH:mm'),
                    " - ",
                    endDate.format('HH:mm')
                ]
            })
        ]
    });
};
var $cf4f946ae53be08c$export$2e2bcd8739ae039 = $cf4f946ae53be08c$var$Show;


var $34d8be53f4e3f1ae$export$9ff5e22cfd89ce70;
$34d8be53f4e3f1ae$export$9ff5e22cfd89ce70 = `aKAv9a_channelRow`;


const $83366bc64e373c67$var$ChannelRow = ({ schedules: schedules , className: className  })=>{
    return /*#__PURE__*/ $hgUW1$jsx("div", {
        className: $hgUW1$classnames($34d8be53f4e3f1ae$export$9ff5e22cfd89ce70, className),
        children: schedules.map(({ title: title , start: start , end: end  })=>{
            return /*#__PURE__*/ $hgUW1$jsx($cf4f946ae53be08c$export$2e2bcd8739ae039, {
                title: title,
                start: start,
                end: end
            }, `${start}-${end}-${title}`);
        })
    });
};
var $83366bc64e373c67$export$2e2bcd8739ae039 = $83366bc64e373c67$var$ChannelRow;




var $02e5fe17e0693873$export$1f95fbd68d964d36;
$02e5fe17e0693873$export$1f95fbd68d964d36 = `UFROqq_channel`;


const $06056b8b1d7eaa8a$var$Channel = ({ logo: logo , name: name  })=>{
    return /*#__PURE__*/ $hgUW1$jsx("div", {
        className: $02e5fe17e0693873$export$1f95fbd68d964d36,
        children: /*#__PURE__*/ $hgUW1$jsx("img", {
            src: logo,
            alt: name
        })
    });
};
var $06056b8b1d7eaa8a$export$2e2bcd8739ae039 = $06056b8b1d7eaa8a$var$Channel;




var $4ed12de620e0d126$export$8a72154329c4894f;
$4ed12de620e0d126$export$8a72154329c4894f = `SDDS_G_channelColumn`;


const $dd996d4b3315b50a$var$ChannelColumn = ({ children: children  })=>{
    return /*#__PURE__*/ $hgUW1$jsx("div", {
        className: $4ed12de620e0d126$export$8a72154329c4894f,
        children: children
    });
};
var $dd996d4b3315b50a$export$2e2bcd8739ae039 = $dd996d4b3315b50a$var$ChannelColumn;




var $91452c0d9d8c03ac$export$ffc4d0086f1a4c9;
var $91452c0d9d8c03ac$export$fa1a145585762549;
var $91452c0d9d8c03ac$export$2da9be4cfdb689b1;
var $91452c0d9d8c03ac$export$d1ebe7ad909ba80f;
$91452c0d9d8c03ac$export$ffc4d0086f1a4c9 = `aBd_cG_marker`;
$91452c0d9d8c03ac$export$fa1a145585762549 = `aBd_cG_timeRow`;
$91452c0d9d8c03ac$export$2da9be4cfdb689b1 = `aBd_cG_time`;
$91452c0d9d8c03ac$export$d1ebe7ad909ba80f = `aBd_cG_hourBox`;



const $d21d1b89afe760d2$var$TimeRow = ({ startHour: startHour , endHour: endHour  })=>{
    const hours = [];
    const hourWidth = 60 * $1fbad53519a9d314$export$be15ff444ccef421;
    for(let i = startHour; i <= endHour; i += 1)hours.push(/*#__PURE__*/ $hgUW1$jsxs("div", {
        className: $91452c0d9d8c03ac$export$d1ebe7ad909ba80f,
        style: {
            width: hourWidth,
            maxWidth: hourWidth,
            minWidth: hourWidth
        },
        children: [
            /*#__PURE__*/ $hgUW1$jsxs("span", {
                className: $91452c0d9d8c03ac$export$2da9be4cfdb689b1,
                children: [
                    i,
                    ":00"
                ]
            }),
            /*#__PURE__*/ $hgUW1$jsx("div", {
                className: $91452c0d9d8c03ac$export$ffc4d0086f1a4c9
            })
        ]
    }, i));
    return /*#__PURE__*/ $hgUW1$jsx("div", {
        className: $91452c0d9d8c03ac$export$fa1a145585762549,
        children: hours
    });
};
var $d21d1b89afe760d2$export$2e2bcd8739ae039 = $d21d1b89afe760d2$var$TimeRow;





var $55b89e7ef3d4eb91$export$2347d5adf642377e;
var $55b89e7ef3d4eb91$export$34e0f9847d4c02dd;
var $55b89e7ef3d4eb91$export$53f1d5ea8de3d7c;
$55b89e7ef3d4eb91$export$2347d5adf642377e = `rsWLSG_needle`;
$55b89e7ef3d4eb91$export$34e0f9847d4c02dd = `rsWLSG_container`;
$55b89e7ef3d4eb91$export$53f1d5ea8de3d7c = `rsWLSG_line`;


const $0ae79f68d400b0f7$var$LiveIndicator = /*#__PURE__*/ $hgUW1$react.forwardRef(({ style: style  }, ref)=>{
    return /*#__PURE__*/ $hgUW1$jsxs("div", {
        className: $55b89e7ef3d4eb91$export$34e0f9847d4c02dd,
        style: style,
        ref: ref,
        children: [
            /*#__PURE__*/ $hgUW1$jsx("div", {
                className: $55b89e7ef3d4eb91$export$2347d5adf642377e
            }),
            /*#__PURE__*/ $hgUW1$jsx("div", {
                className: $55b89e7ef3d4eb91$export$53f1d5ea8de3d7c
            })
        ]
    });
});
var $0ae79f68d400b0f7$export$2e2bcd8739ae039 = $0ae79f68d400b0f7$var$LiveIndicator;


$hgUW1$dayjs.extend($hgUW1$dayjsplugincustomParseFormat);
const $5f9008890260250b$var$Guide = ({ epg: epg  })=>{
    const liveRef = $hgUW1$useRef(null);
    const [liveOffset, setLiveOffset] = $hgUW1$useState(0);
    const channels = [];
    const schedules = [];
    let startHour = 0;
    let endHour = 0;
    epg.channels.forEach((channel)=>{
        channels.push({
            name: channel.title,
            logo: channel.images.logo
        });
        schedules.push({
            schedules: channel.schedules
        });
    });
    // Get lowest hour of first show and highest hour of last show on any channel
    schedules.forEach((channel)=>{
        if (channel.schedules.length > 0) {
            const firstHour = $hgUW1$dayjs(channel.schedules[0].start).hour();
            const lastHour = $hgUW1$dayjs(channel.schedules[channel.schedules.length - 1].end).hour();
            if (firstHour < startHour) startHour = firstHour;
            if (lastHour > endHour) endHour = lastHour;
        }
    });
    // Update the live indicator position every 9/60th of a minute (to move it by 1 pixel)
    $hgUW1$useEffect(()=>{
        const interval = setInterval(()=>{
            const secondsFromStart = $hgUW1$dayjs().diff($hgUW1$dayjs(`${startHour}:00:00`, 'H:mm:ss'), 'seconds');
            // 150 is width of the ChannelColumn
            const offset = Math.floor(secondsFromStart * $1fbad53519a9d314$export$be15ff444ccef421 / 60) + 150;
            setLiveOffset(offset);
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    const handleNowButtonClick = ()=>{
        liveRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };
    return /*#__PURE__*/ $hgUW1$jsx("div", {
        className: $2fed32a54a53d836$export$34e0f9847d4c02dd,
        children: /*#__PURE__*/ $hgUW1$jsxs("div", {
            className: $2fed32a54a53d836$export$675bc0f5721dbbd7,
            children: [
                /*#__PURE__*/ $hgUW1$jsx("div", {
                    className: $2fed32a54a53d836$export$8a72154329c4894f,
                    children: /*#__PURE__*/ $hgUW1$jsx($dd996d4b3315b50a$export$2e2bcd8739ae039, {
                        children: channels.map(({ logo: logo , name: name  })=>/*#__PURE__*/ $hgUW1$jsx($06056b8b1d7eaa8a$export$2e2bcd8739ae039, {
                                logo: logo,
                                name: name
                            }, name)
                        )
                    })
                }),
                /*#__PURE__*/ $hgUW1$jsxs("div", {
                    className: $2fed32a54a53d836$export$62c3fdea1232bbe6,
                    children: [
                        liveOffset > 0 && /*#__PURE__*/ $hgUW1$jsx($0ae79f68d400b0f7$export$2e2bcd8739ae039, {
                            style: {
                                left: liveOffset
                            },
                            ref: liveRef
                        }),
                        /*#__PURE__*/ $hgUW1$jsx($d21d1b89afe760d2$export$2e2bcd8739ae039, {
                            startHour: startHour,
                            endHour: endHour
                        }),
                        schedules.map((channel, index)=>{
                            return /*#__PURE__*/ $hgUW1$jsx($83366bc64e373c67$export$2e2bcd8739ae039, {
                                schedules: channel.schedules,
                                className: $2fed32a54a53d836$export$f58742ec0087f4f5
                            }, channels[index].name);
                        })
                    ]
                }),
                /*#__PURE__*/ $hgUW1$jsx("button", {
                    className: $2fed32a54a53d836$export$380ba132e7e1f4be,
                    onClick: handleNowButtonClick,
                    type: "button",
                    children: "Now"
                })
            ]
        })
    });
};
var $5f9008890260250b$export$2e2bcd8739ae039 = $5f9008890260250b$var$Guide;


var $149c1bd638913645$export$2e2bcd8739ae039 = $5f9008890260250b$export$2e2bcd8739ae039;


export {$149c1bd638913645$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=main.mjs.map
