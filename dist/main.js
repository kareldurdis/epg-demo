require("./main.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$react = require("react");
var $8zHUo$dayjs = require("dayjs");
var $8zHUo$dayjsplugincustomParseFormat = require("dayjs/plugin/customParseFormat");
var $8zHUo$classnames = require("classnames");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $9e9c494d63e0cbec$exports = {};

$parcel$defineInteropFlag($9e9c494d63e0cbec$exports);

$parcel$export($9e9c494d63e0cbec$exports, "default", () => $9e9c494d63e0cbec$export$2e2bcd8739ae039);




var $cb10d6aca11019f3$export$fa1a145585762549;
var $cb10d6aca11019f3$export$62c3fdea1232bbe6;
var $cb10d6aca11019f3$export$380ba132e7e1f4be;
var $cb10d6aca11019f3$export$675bc0f5721dbbd7;
var $cb10d6aca11019f3$export$34e0f9847d4c02dd;
var $cb10d6aca11019f3$export$8a72154329c4894f;
var $cb10d6aca11019f3$export$f58742ec0087f4f5;
$cb10d6aca11019f3$export$fa1a145585762549 = `SIuwVW_timeRow`;
$cb10d6aca11019f3$export$62c3fdea1232bbe6 = `SIuwVW_timeRowContainer`;
$cb10d6aca11019f3$export$380ba132e7e1f4be = `SIuwVW_nowButton`;
$cb10d6aca11019f3$export$675bc0f5721dbbd7 = `SIuwVW_guide`;
$cb10d6aca11019f3$export$34e0f9847d4c02dd = `SIuwVW_container`;
$cb10d6aca11019f3$export$8a72154329c4894f = `SIuwVW_channelColumn`;
$cb10d6aca11019f3$export$f58742ec0087f4f5 = `SIuwVW_scheduleLine`;









const $0c3c8b91ddb06a1c$export$be15ff444ccef421 = 9;


var $b941e06a5ad4c553$export$fb184b623420d9be;
var $b941e06a5ad4c553$export$89da14300d534261;
var $b941e06a5ad4c553$export$57bf213be019eeb0;
var $b941e06a5ad4c553$export$2da9be4cfdb689b1;
$b941e06a5ad4c553$export$fb184b623420d9be = `AUQOOG_title`;
$b941e06a5ad4c553$export$89da14300d534261 = `AUQOOG_active`;
$b941e06a5ad4c553$export$57bf213be019eeb0 = `AUQOOG_show`;
$b941e06a5ad4c553$export$2da9be4cfdb689b1 = `AUQOOG_time`;


const $b4eb43c814dc050f$var$Show = ({ title: title , start: start , end: end  })=>{
    const startDate = ($parcel$interopDefault($8zHUo$dayjs))(start);
    const endDate = ($parcel$interopDefault($8zHUo$dayjs))(end);
    const now = ($parcel$interopDefault($8zHUo$dayjs))();
    const isActive = now.isAfter(startDate) && now.isBefore(endDate);
    const duration = endDate.diff(startDate, 'minutes');
    const showWidth = duration * $0c3c8b91ddb06a1c$export$be15ff444ccef421;
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
        className: ($parcel$interopDefault($8zHUo$classnames))($b941e06a5ad4c553$export$57bf213be019eeb0, isActive ? $b941e06a5ad4c553$export$89da14300d534261 : undefined),
        style: {
            width: showWidth,
            minWidth: showWidth,
            maxWidth: showWidth
        },
        children: [
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("span", {
                className: $b941e06a5ad4c553$export$fb184b623420d9be,
                children: title
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("span", {
                className: $b941e06a5ad4c553$export$2da9be4cfdb689b1,
                children: [
                    startDate.format('HH:mm'),
                    " - ",
                    endDate.format('HH:mm')
                ]
            })
        ]
    });
};
var $b4eb43c814dc050f$export$2e2bcd8739ae039 = $b4eb43c814dc050f$var$Show;


var $5842e21e3af0d39c$export$9ff5e22cfd89ce70;
$5842e21e3af0d39c$export$9ff5e22cfd89ce70 = `aKAv9a_channelRow`;


const $61592090e7fd7062$var$ChannelRow = ({ schedules: schedules , className: className  })=>{
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
        className: ($parcel$interopDefault($8zHUo$classnames))($5842e21e3af0d39c$export$9ff5e22cfd89ce70, className),
        children: schedules.map(({ title: title , start: start , end: end  })=>{
            return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($b4eb43c814dc050f$export$2e2bcd8739ae039, {
                title: title,
                start: start,
                end: end
            }, `${start}-${end}-${title}`);
        })
    });
};
var $61592090e7fd7062$export$2e2bcd8739ae039 = $61592090e7fd7062$var$ChannelRow;




var $d016169b22671327$export$1f95fbd68d964d36;
$d016169b22671327$export$1f95fbd68d964d36 = `UFROqq_channel`;


const $0805e885300d760b$var$Channel = ({ logo: logo , name: name  })=>{
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
        className: $d016169b22671327$export$1f95fbd68d964d36,
        children: /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("img", {
            src: logo,
            alt: name
        })
    });
};
var $0805e885300d760b$export$2e2bcd8739ae039 = $0805e885300d760b$var$Channel;




var $9f8d41ce3ae85e56$export$8a72154329c4894f;
$9f8d41ce3ae85e56$export$8a72154329c4894f = `SDDS_G_channelColumn`;


const $52773a3260ed17e9$var$ChannelColumn = ({ children: children  })=>{
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
        className: $9f8d41ce3ae85e56$export$8a72154329c4894f,
        children: children
    });
};
var $52773a3260ed17e9$export$2e2bcd8739ae039 = $52773a3260ed17e9$var$ChannelColumn;




var $f4c3fe27d05689ce$export$d1ebe7ad909ba80f;
var $f4c3fe27d05689ce$export$2da9be4cfdb689b1;
var $f4c3fe27d05689ce$export$ffc4d0086f1a4c9;
var $f4c3fe27d05689ce$export$fa1a145585762549;
$f4c3fe27d05689ce$export$d1ebe7ad909ba80f = `aBd_cG_hourBox`;
$f4c3fe27d05689ce$export$2da9be4cfdb689b1 = `aBd_cG_time`;
$f4c3fe27d05689ce$export$ffc4d0086f1a4c9 = `aBd_cG_marker`;
$f4c3fe27d05689ce$export$fa1a145585762549 = `aBd_cG_timeRow`;



const $5621853ad471e9fe$var$TimeRow = ({ startHour: startHour , endHour: endHour  })=>{
    const hours = [];
    const hourWidth = 60 * $0c3c8b91ddb06a1c$export$be15ff444ccef421;
    for(let i = startHour; i <= endHour; i += 1)hours.push(/*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
        className: $f4c3fe27d05689ce$export$d1ebe7ad909ba80f,
        style: {
            width: hourWidth,
            maxWidth: hourWidth,
            minWidth: hourWidth
        },
        children: [
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("span", {
                className: $f4c3fe27d05689ce$export$2da9be4cfdb689b1,
                children: [
                    i,
                    ":00"
                ]
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
                className: $f4c3fe27d05689ce$export$ffc4d0086f1a4c9
            })
        ]
    }, i));
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
        className: $f4c3fe27d05689ce$export$fa1a145585762549,
        children: hours
    });
};
var $5621853ad471e9fe$export$2e2bcd8739ae039 = $5621853ad471e9fe$var$TimeRow;





var $7bddd0981542c764$export$53f1d5ea8de3d7c;
var $7bddd0981542c764$export$34e0f9847d4c02dd;
var $7bddd0981542c764$export$2347d5adf642377e;
$7bddd0981542c764$export$53f1d5ea8de3d7c = `rsWLSG_line`;
$7bddd0981542c764$export$34e0f9847d4c02dd = `rsWLSG_container`;
$7bddd0981542c764$export$2347d5adf642377e = `rsWLSG_needle`;


const $7146933080e590f9$var$LiveIndicator = /*#__PURE__*/ ($parcel$interopDefault($8zHUo$react)).forwardRef(({ style: style  }, ref)=>{
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
        className: $7bddd0981542c764$export$34e0f9847d4c02dd,
        style: style,
        ref: ref,
        children: [
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
                className: $7bddd0981542c764$export$2347d5adf642377e
            }),
            /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
                className: $7bddd0981542c764$export$53f1d5ea8de3d7c
            })
        ]
    });
});
var $7146933080e590f9$export$2e2bcd8739ae039 = $7146933080e590f9$var$LiveIndicator;


($parcel$interopDefault($8zHUo$dayjs)).extend(($parcel$interopDefault($8zHUo$dayjsplugincustomParseFormat)));
const $9e9c494d63e0cbec$var$Guide = ({ epg: epg  })=>{
    const liveRef = $8zHUo$react.useRef(null);
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
            const firstHour = ($parcel$interopDefault($8zHUo$dayjs))(channel.schedules[0].start).hour();
            const lastHour = ($parcel$interopDefault($8zHUo$dayjs))(channel.schedules[channel.schedules.length - 1].end).hour();
            if (firstHour < startHour) startHour = firstHour;
            if (lastHour > endHour) endHour = lastHour;
        }
    });
    const minutesFromStart = ($parcel$interopDefault($8zHUo$dayjs))().diff(($parcel$interopDefault($8zHUo$dayjs))(`${startHour}:00:00`, 'H:mm:ss'), 'minutes');
    // 150 is width of the ChannelColumn
    const liveOffset = minutesFromStart * $0c3c8b91ddb06a1c$export$be15ff444ccef421 + 150;
    const handleNowButtonClick = ()=>{
        liveRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    };
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
        className: $cb10d6aca11019f3$export$34e0f9847d4c02dd,
        children: /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
            className: $cb10d6aca11019f3$export$675bc0f5721dbbd7,
            children: [
                /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("div", {
                    className: $cb10d6aca11019f3$export$8a72154329c4894f,
                    children: /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($52773a3260ed17e9$export$2e2bcd8739ae039, {
                        children: channels.map(({ logo: logo , name: name  })=>/*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($0805e885300d760b$export$2e2bcd8739ae039, {
                                logo: logo,
                                name: name
                            }, name)
                        )
                    })
                }),
                /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs("div", {
                    className: $cb10d6aca11019f3$export$62c3fdea1232bbe6,
                    children: [
                        /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($7146933080e590f9$export$2e2bcd8739ae039, {
                            style: {
                                left: liveOffset
                            },
                            ref: liveRef
                        }),
                        /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($5621853ad471e9fe$export$2e2bcd8739ae039, {
                            startHour: startHour,
                            endHour: endHour
                        }),
                        schedules.map((channel, index)=>{
                            return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx($61592090e7fd7062$export$2e2bcd8739ae039, {
                                schedules: channel.schedules,
                                className: $cb10d6aca11019f3$export$f58742ec0087f4f5
                            }, channels[index].name);
                        })
                    ]
                }),
                /*#__PURE__*/ $8zHUo$reactjsxruntime.jsx("button", {
                    className: $cb10d6aca11019f3$export$380ba132e7e1f4be,
                    onClick: handleNowButtonClick,
                    type: "button",
                    children: "Now"
                })
            ]
        })
    });
};
var $9e9c494d63e0cbec$export$2e2bcd8739ae039 = $9e9c494d63e0cbec$var$Guide;


$parcel$exportWildcard(module.exports, $9e9c494d63e0cbec$exports);


//# sourceMappingURL=main.js.map
