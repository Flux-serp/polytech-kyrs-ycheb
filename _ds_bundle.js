/* @ds-bundle: {"format":4,"namespace":"DesignSystem_a62ddd","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"GradientBlock","sourcePath":"components/brand/GradientBlock.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"TriadStripe","sourcePath":"components/brand/TriadStripe.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"37b201c529fc","components/actions/Button.jsx":"f28009687e1a","components/actions/IconButton.jsx":"38489344ad26","components/brand/GradientBlock.jsx":"65fedf28bcdc","components/brand/Logo.jsx":"ab0873122a47","components/brand/TriadStripe.jsx":"62bacf1ff2fb","components/core/Icon.jsx":"1883370fc994","components/display/Accordion.jsx":"933e7d3972d6","components/display/Badge.jsx":"40ba0d48c92b","components/display/Card.jsx":"79a2be847657","components/display/ProgressBar.jsx":"858489d1addd","components/display/Tag.jsx":"70fb896b640c","components/feedback/Dialog.jsx":"7fab5a5619f7","components/feedback/Toast.jsx":"d9b8da4e81a4","components/feedback/Tooltip.jsx":"7a9eda461284","components/forms/Checkbox.jsx":"fbcc74224990","components/forms/Input.jsx":"5188f7b9aed6","components/forms/Radio.jsx":"5d6ba3e92b80","components/forms/Select.jsx":"2d489e3e7044","components/forms/Switch.jsx":"00d6aa41dc94","components/navigation/NavLink.jsx":"069aa38bdbad","components/navigation/Tabs.jsx":"7daa1e40a1da","ui_kits/b2b-school/B2BFooter.jsx":"a63420a6b45d","ui_kits/b2b-school/B2BHeader.jsx":"86f5f78036ab","ui_kits/b2b-school/Corp.jsx":"321cbe70434f","ui_kits/b2b-school/CourseBottom.jsx":"047fd5d5b6c3","ui_kits/b2b-school/CourseTop.jsx":"aec0a1716b02","ui_kits/b2b-school/Courses.jsx":"ec647666627a","ui_kits/b2b-school/Hero.jsx":"c0be777f6e56","ui_kits/b2b-school/Hub.jsx":"ee110efc812a","ui_kits/b2b-school/Overlays.jsx":"b2aae3441adf","ui_kits/b2b-school/Sections.jsx":"8fc0c2bdc2de","ui_kits/b2b-school/corp-data.js":"4057d1c9a32a","ui_kits/b2b-school/course-data.js":"329ca2dbe60e","ui_kits/b2b-school/course3d.js":"7d41803cf36b","ui_kits/b2b-school/data.js":"61eb2e8eff8e","ui_kits/b2b-school/image-slot.js":"fff26d081c8d","ui_kits/b2b-school/scene.js":"acea4bf142d9","ui_kits/course-site/CourseFooter.jsx":"f4450d1fb901","ui_kits/course-site/CourseHeader.jsx":"c733e8470353","ui_kits/course-site/EnrollDialog.jsx":"228a3830785c","ui_kits/course-site/HomeScreen.jsx":"a6aab25f1595","ui_kits/course-site/LessonScreen.jsx":"550fee376b75","ui_kits/course-site/ProgramScreen.jsx":"7229d5f24364","ui_kits/course-site/data.js":"052c4be04a93"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_a62ddd = window.DesignSystem_a62ddd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const V = {
  primary: {
    bg: 'var(--pt-green)',
    fg: 'var(--pt-white)',
    bd: 'var(--pt-green)',
    hbg: 'var(--pt-green-dark)',
    hfg: 'var(--pt-white)',
    hbd: 'var(--pt-green-dark)'
  },
  secondary: {
    bg: 'var(--pt-black)',
    fg: 'var(--pt-white)',
    bd: 'var(--pt-black)',
    hbg: 'var(--pt-grey-900)',
    hfg: 'var(--pt-white)',
    hbd: 'var(--pt-grey-900)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--pt-black)',
    bd: 'var(--pt-black)',
    hbg: 'var(--pt-black)',
    hfg: 'var(--pt-white)',
    hbd: 'var(--pt-black)'
  },
  inverse: {
    bg: 'var(--pt-white)',
    fg: 'var(--pt-black)',
    bd: 'var(--pt-white)',
    hbg: 'var(--pt-grey-100)',
    hfg: 'var(--pt-black)',
    hbd: 'var(--pt-grey-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--pt-black)',
    bd: 'transparent',
    hbg: 'var(--pt-grey-100)',
    hfg: 'var(--pt-black)',
    hbd: 'transparent'
  }
};
const S = {
  sm: {
    h: 36,
    px: 16,
    fs: 13
  },
  md: {
    h: 48,
    px: 24,
    fs: 15
  },
  lg: {
    h: 60,
    px: 32,
    fs: 17
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  const on = h && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      borderRadius: 0,
      border: '1px solid ' + (on ? v.hbd : v.bd),
      background: on ? v.hbg : v.bg,
      color: on ? v.hfg : v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/GradientBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BG = {
  green: 'var(--grad-green-block)',
  greenFlat: 'var(--pt-green)',
  greenDark: 'var(--pt-green-dark)',
  violet: 'var(--grad-violet)',
  orange: 'var(--grad-orange)',
  white: 'var(--pt-white)',
  grey: 'var(--grad-poster-bg)'
};
function GradientBlock({
  tone = 'green',
  padding = 24,
  children,
  style,
  ...rest
}) {
  const light = tone === 'white' || tone === 'grey' || tone === 'orange';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: BG[tone] || BG.green,
      color: light ? 'var(--pt-black)' : 'var(--pt-white)',
      padding,
      borderRadius: 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { GradientBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  version = 'short',
  tone = 'color',
  height = 32,
  assetBase = 'assets/',
  alt = 'Политех',
  style
}) {
  const file = version === 'mark' ? 'mark-pi-' + (tone === 'black' ? 'color' : tone) : 'logo-' + version + '-' + tone;
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + file + '.png',
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/TriadStripe.jsx
try { (() => {
function TriadStripe({
  height = 8,
  pair = 'triad',
  style
}) {
  const bg = pair === 'violet' ? 'linear-gradient(90deg,var(--pt-green) 0 60%,var(--pt-violet) 60%,var(--pt-violet-dark) 100%)' : pair === 'orange' ? 'linear-gradient(90deg,var(--pt-green) 0 60%,var(--pt-orange) 60%,var(--pt-orange-light) 100%)' : pair === 'green' ? 'var(--grad-green)' : 'var(--grad-triad-stripe)';
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    style: {
      height,
      background: bg,
      ...style
    }
  });
}
Object.assign(__ds_scope, { TriadStripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TriadStripe.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.468.0/icons/';
function Icon({
  name = 'arrow-right',
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function ArrowLink({
  children,
  href = '#',
  inverse,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const c = inverse ? 'var(--pt-white)' : 'var(--pt-black)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      textDecoration: 'none',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + c,
      background: h ? c : 'transparent',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "move-right",
    size: 20,
    color: h ? inverse ? 'var(--pt-black)' : 'var(--pt-white)' : c
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, children));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  icon = 'x',
  label,
  variant = 'outline',
  size = 40,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const bg = {
    outline: h ? 'var(--pt-black)' : 'transparent',
    primary: h ? 'var(--pt-green-dark)' : 'var(--pt-green)',
    ghost: h ? 'var(--pt-grey-100)' : 'transparent'
  }[variant];
  const fg = variant === 'primary' || variant === 'outline' && h ? 'var(--pt-white)' : 'var(--pt-black)';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: 0,
      border: variant === 'outline' ? '1px solid var(--pt-black)' : '1px solid transparent',
      background: bg,
      color: fg,
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
const {
  useState
} = React;
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [o, setO] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--pt-black)',
      ...style
    }
  }, items.map((it, i) => {
    const open = o === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--pt-black)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setO(open ? -1 : i),
      "aria-expanded": open,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        color: 'var(--pt-black)'
      }
    }, it.index != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--pt-green)',
        width: 36,
        flex: 'none'
      }
    }, it.index), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        textTransform: 'uppercase'
      }
    }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        color: 'var(--pt-grey-600)'
      }
    }, it.meta), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: open ? 'minus' : 'plus',
      size: 20
    })), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 24px ' + (it.index != null ? 52 : 0) + 'px',
        fontFamily: 'var(--font-ui)',
        fontSize: 15,
        lineHeight: 1.5
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  green: ['var(--pt-green)', 'var(--pt-white)'],
  dark: ['var(--pt-black)', 'var(--pt-white)'],
  violet: ['var(--pt-violet)', 'var(--pt-white)'],
  orange: ['var(--pt-orange)', 'var(--pt-white)'],
  light: ['var(--pt-grey-100)', 'var(--pt-black)']
};
function Badge({
  tone = 'green',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  image,
  eyebrow,
  title,
  children,
  meta,
  tone = 'white',
  href,
  onClick,
  style
}) {
  const [h, setH] = useState(false);
  const dark = tone === 'green' || tone === 'violet' || tone === 'dark';
  const bg = {
    white: 'var(--pt-white)',
    grey: 'var(--pt-grey-50)',
    green: 'var(--grad-green-block)',
    violet: 'var(--grad-violet)',
    dark: 'var(--pt-black)'
  }[tone];
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: bg,
      color: dark ? 'var(--pt-white)' : 'var(--pt-black)',
      border: tone === 'white' ? '1px solid ' + (h && (href || onClick) ? 'var(--pt-black)' : 'var(--pt-grey-200)') : 'none',
      textDecoration: 'none',
      cursor: href || onClick ? 'pointer' : 'default',
      transition: 'border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: 'url(' + image + ') center/cover var(--pt-grey-100)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: dark ? 'var(--pt-white)' : 'var(--pt-violet)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      lineHeight: 1.05,
      textTransform: 'uppercase'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      lineHeight: 1.5,
      color: dark ? 'var(--pt-white)' : 'var(--pt-grey-600)'
    }
  }, children), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13
    }
  }, meta)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  height = 8,
  style
}) {
  const p = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", null, Math.round(p), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": Math.round(p),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      height,
      background: 'var(--pt-grey-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p + '%',
      height: '100%',
      background: 'var(--grad-green)',
      backgroundSize: (p > 0 ? 10000 / p : 100) + '% 100%',
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 14px',
      borderRadius: 0,
      border: '1px solid ' + (selected ? 'var(--pt-black)' : 'var(--pt-grey-200)'),
      background: selected ? 'var(--pt-black)' : 'var(--pt-white)',
      color: selected ? 'var(--pt-white)' : 'var(--pt-black)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, color && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: color,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 560
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--pt-white)',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--grad-triad-stripe)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '28px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 1,
      textTransform: 'uppercase'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 32px 28px',
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      lineHeight: 1.5
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end',
      padding: '20px 32px',
      borderTop: '1px solid var(--pt-grey-200)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: ['var(--pt-green)', 'circle-check'],
  info: ['var(--pt-violet)', 'info'],
  error: ['var(--pt-orange)', 'circle-alert']
};
function Toast({
  tone = 'success',
  title,
  children,
  onClose,
  style
}) {
  const [c, ic] = T[tone] || T.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '16px 18px',
      background: 'var(--pt-black)',
      color: 'var(--pt-white)',
      borderLeft: 'none',
      boxShadow: 'var(--shadow-overlay)',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 8,
      background: c
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 20,
    color: c,
    style: {
      marginLeft: 6,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      textTransform: 'uppercase'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      marginTop: 2,
      color: 'var(--pt-grey-200)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--pt-white)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  text,
  children,
  placement = 'top'
}) {
  const [s, setS] = useState(false);
  const pos = placement === 'bottom' ? {
    top: '100%',
    marginTop: 8
  } : {
    bottom: '100%',
    marginBottom: 8
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setS(true),
    onMouseLeave: () => setS(false),
    onFocus: () => setS(true),
    onBlur: () => setS(false)
  }, children, s && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--pt-black)',
      color: 'var(--pt-white)',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      zIndex: 50
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (on ? 'var(--pt-green)' : 'var(--pt-black)'),
      background: on ? 'var(--pt-green)' : 'var(--pt-white)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--pt-white)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const lab = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 13,
  marginBottom: 6,
  color: 'var(--pt-black)'
};
function Input({
  label,
  hint,
  error,
  id,
  style,
  inputStyle,
  ...rest
}) {
  const [f, setF] = useState(false);
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: lab
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 48,
      padding: '0 14px',
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      color: 'var(--pt-black)',
      background: 'var(--pt-white)',
      border: '1px solid ' + (error ? 'var(--pt-orange)' : f ? 'var(--pt-green)' : 'var(--pt-black)'),
      boxShadow: f ? 'inset 0 0 0 1px ' + (error ? 'var(--pt-orange)' : 'var(--pt-green)') : 'none',
      borderRadius: 0,
      outline: 'none',
      ...inputStyle
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      fontFamily: 'var(--font-ui)',
      color: error ? 'var(--pt-orange)' : 'var(--pt-grey-600)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    className: "pt-radio"
  }), /*#__PURE__*/React.createElement("span", {
    "data-dot": true,
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: '1px solid var(--pt-black)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pt-white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: checked ? 'var(--pt-green)' : 'transparent'
    }
  })), label);
}
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  style
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value !== undefined ? value : v;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 24 : 12,
      ...style
    }
  }, options.map(o => {
    const ov = typeof o === 'string' ? o : o.value,
      ol = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: ov,
      name: name,
      value: ov,
      label: ol,
      checked: cur === ov,
      onChange: () => {
        setV(ov);
        onChange && onChange(ov);
      }
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const lab = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 13,
  marginBottom: 6,
  color: 'var(--pt-black)'
};
function Select({
  label,
  options = [],
  id,
  style,
  ...rest
}) {
  const fid = id || (label ? 'sel-' + label.replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: lab
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest, {
    style: {
      width: '100%',
      height: 48,
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      color: 'var(--pt-black)',
      background: 'var(--pt-white)',
      border: '1px solid var(--pt-black)',
      borderRadius: 0,
      cursor: 'pointer'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      flex: 'none',
      position: 'relative',
      background: on ? 'var(--pt-green)' : 'var(--pt-grey-200)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 18,
      height: 18,
      background: 'var(--pt-white)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
const {
  useState
} = React;
function NavLink({
  children,
  href = '#',
  active,
  inverse,
  onClick,
  style
}) {
  const [h, setH] = useState(false);
  const c = inverse ? 'var(--pt-white)' : 'var(--pt-black)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      textTransform: 'uppercase',
      color: c,
      textDecoration: 'none',
      paddingBottom: 4,
      borderBottom: '2px solid ' + (active ? 'var(--pt-green)' : h ? c : 'transparent'),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [v, setV] = useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      borderBottom: '1px solid var(--pt-black)',
      ...style
    }
  }, tabs.map(t => {
    const tv = t.value ?? t,
      tl = t.label ?? t,
      on = cur === tv;
    return /*#__PURE__*/React.createElement("button", {
      key: tv,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setV(tv);
        onChange && onChange(tv);
      },
      style: {
        position: 'relative',
        padding: '0 0 14px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: on ? 700 : 500,
        fontSize: 15,
        textTransform: 'uppercase',
        color: on ? 'var(--pt-black)' : 'var(--pt-grey-600)'
      }
    }, tl, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 4,
        background: on ? 'var(--pt-green)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/B2BFooter.jsx
try { (() => {
function SiteFooter({
  ctx
}) {
  const {
    Logo,
    TriadStripe,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const t = ctx.t,
    ft = t.foot;
  const socials = [['VK', 'https://vk.com/'], ['Telegram', 'https://t.me/'], ['YouTube', 'https://youtube.com/'], ['Дзен', 'https://dzen.ru/']];
  const L = (k, txt, fn) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      fn && fn();
    }
  }, txt);
  return /*#__PURE__*/React.createElement("footer", {
    id: "contacts",
    className: "ftr",
    "data-screen-label": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }, /*#__PURE__*/React.createElement(TriadStripe, {
    height: 10
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    version: "full",
    tone: "white",
    height: 60,
    assetBase: window.B2B_A
  }), /*#__PURE__*/React.createElement("div", {
    className: "ftr-school"
  }, t.school1, " ", t.school2)), /*#__PURE__*/React.createElement("div", {
    className: "ftr-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => (ctx.page || ctx.go)('courses'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 20
    })
  }, ft.cta), /*#__PURE__*/React.createElement(Tools, {
    ctx: ctx
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr-h"
  }, ft.nav), /*#__PURE__*/React.createElement("ul", {
    className: "ftr-ul"
  }, window.B2B.nav.map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, L(n, t.nav[n], () => (ctx.page || ctx.go)(n)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr-h"
  }, ft.contacts), /*#__PURE__*/React.createElement("ul", {
    className: "ftr-ul ftr-plain"
  }, /*#__PURE__*/React.createElement("li", null, "195251, \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433,", /*#__PURE__*/React.createElement("br", null), "\u0443\u043B. \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F, 29"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+78120000000"
  }, "+7 (812) 000-00-00")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:b2b@spbstu.ru"
  }, "b2b@spbstu.ru")), /*#__PURE__*/React.createElement("li", {
    className: "ftr-dim"
  }, ft.hours))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr-h"
  }, ft.students), /*#__PURE__*/React.createElement("ul", {
    className: "ftr-ul"
  }, /*#__PURE__*/React.createElement("li", null, L('c', t.tools.cabinet, ctx.openCab)), /*#__PURE__*/React.createElement("li", null, L('lv', t.tools.lv, ctx.toggleLv)), /*#__PURE__*/React.createElement("li", null, L('o', t.orgInfo)), /*#__PURE__*/React.createElement("li", null, L('p', t.policy)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ftr-h"
  }, ft.social), /*#__PURE__*/React.createElement("div", {
    className: "soc"
  }, socials.map(([n, u]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: u,
    target: "_blank",
    rel: "noopener",
    className: "soc-i"
  }, n, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-legal"
  }, /*#__PURE__*/React.createElement("p", null, "\u0424\u0413\u0410\u041E\u0423 \u0412\u041E \xAB\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u041F\u0435\u0442\u0440\u0430 \u0412\u0435\u043B\u0438\u043A\u043E\u0433\u043E\xBB \xB7 \u0418\u041D\u041D XXXXXXXXXX \xB7 \u041E\u0413\u0420\u041D XXXXXXXXXXXXX"), /*#__PURE__*/React.createElement("p", null, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u2116 XXXX \u043E\u0442 XX.XX.XXXX, \u0432\u044B\u0434\u0430\u043D\u0430 \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043B\u0443\u0436\u0431\u043E\u0439 \u043F\u043E \u043D\u0430\u0434\u0437\u043E\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043D\u0430\u0443\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "ftr-bot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\xA9 2026 \u0421\u041F\u0431\u041F\u0423."), " ", ft.rights), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, t.policy), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, t.orgInfo), /*#__PURE__*/React.createElement("span", {
    className: "ftr-slogan"
  }, ft.slogan))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/B2BFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/B2BHeader.jsx
try { (() => {
const B2B_A = '../../assets/';
function IconBtn({
  icon,
  label,
  onClick,
  active,
  children
}) {
  const {
    Icon,
    Tooltip
  } = window.DesignSystem_a62ddd;
  return /*#__PURE__*/React.createElement(Tooltip, {
    text: label,
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-pressed": active ? true : undefined,
    onClick: onClick,
    className: "ibtn",
    "data-active": active ? '1' : undefined
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  }), children));
}
function Tools({
  ctx
}) {
  const t = ctx.t.tools;
  return /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "search",
    label: t.search,
    onClick: ctx.openSearch
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "eye",
    label: t.lv,
    onClick: ctx.toggleLv,
    active: ctx.lv
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: ctx.theme === 'dark' ? 'sun' : 'moon',
    label: t.theme,
    onClick: ctx.toggleTheme
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "globe",
    label: t.lang,
    onClick: ctx.toggleLang
  }, /*#__PURE__*/React.createElement("span", {
    className: "ibtn-lang"
  }, ctx.lang.toUpperCase())), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "user-round",
    label: t.cabinet,
    onClick: ctx.openCab
  }));
}
function SiteHeader({
  ctx
}) {
  const {
    Logo,
    NavLink
  } = window.DesignSystem_a62ddd;
  const [sc, setSc] = React.useState(false);
  const bar = React.useRef();
  React.useEffect(() => {
    const on = () => {
      setSc(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const dark = ctx.theme === 'dark';
  return /*#__PURE__*/React.createElement("header", {
    className: 'hdr' + (sc ? ' hdr-sc' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "brand",
    onClick: e => {
      e.preventDefault();
      ctx.go('home');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    version: "short",
    tone: dark ? 'white' : 'color',
    height: sc ? 24 : 28,
    assetBase: B2B_A,
    style: {
      transition: 'height .3s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-div"
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, ctx.t.school1, /*#__PURE__*/React.createElement("br", null), ctx.t.school2)), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, window.B2B.nav.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n,
    href: '#' + n,
    active: ctx.active === n,
    inverse: dark,
    onClick: e => {
      e.preventDefault();
      (ctx.page || ctx.go)(n);
    }
  }, ctx.t.nav[n]))), /*#__PURE__*/React.createElement(Tools, {
    ctx: ctx
  }), /*#__PURE__*/React.createElement("div", {
    className: "burger"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: ctx.menu ? 'x' : 'menu',
    label: ctx.t.tools.menu,
    onClick: ctx.toggleMenu
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hdr-bar"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bar,
    className: "hdr-bar-fill"
  })));
}
function MobileMenu({
  ctx
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mmenu' + (ctx.menu ? ' open' : ''),
    "aria-hidden": !ctx.menu
  }, window.B2B.nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: '#' + n,
    style: {
      transitionDelay: (ctx.menu ? 80 + i * 50 : 0) + 'ms'
    },
    onClick: e => {
      e.preventDefault();
      ctx.toggleMenu();
      (ctx.page || ctx.go)(n);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-i"
  }, "0", i + 1), ctx.t.nav[n])));
}
function SectionRail({
  ctx
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, window.B2B.nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    className: 'rail-i' + (ctx.active === n ? ' on' : ''),
    onClick: () => ctx.go(n),
    "aria-label": ctx.t.nav[n]
  }, /*#__PURE__*/React.createElement("span", {
    className: "rail-l"
  }, ctx.t.nav[n]), /*#__PURE__*/React.createElement("span", {
    className: "rail-b"
  }))));
}
Object.assign(window, {
  IconBtn,
  Tools,
  SiteHeader,
  MobileMenu,
  SectionRail,
  B2B_A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/B2BHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Corp.jsx
try { (() => {
function KHero({
  ctx
}) {
  const {
    GradientBlock,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_CORP;
  const cv = React.useRef();
  React.useEffect(() => {
    if (!window.THREE || ctx.lv || !cv.current) return;
    const s = window.createNetwork(cv.current);
    return () => s.dispose();
  }, [ctx.lv]);
  const jump = id => {
    const el = document.getElementById(id);
    el && scrollTo({
      top: el.getBoundingClientRect().top + scrollY - 90,
      behavior: ctx.lv ? 'auto' : 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "kh wrap",
    "data-screen-label": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u2014 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kh-l"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")), /*#__PURE__*/React.createElement("h1", {
    className: "h-hero kh-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435")), /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transitionDelay: '.12s'
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "h-block"
  }, "\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")))), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, K.lead), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => jump('k-apply'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down-right",
      size: 20
    })
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: ctx.theme === 'dark' ? 'inverse' : 'outline',
    onClick: () => jump('k-person')
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C"))), /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "green",
    padding: 0,
    className: "kh-r"
  }, !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    "aria-label": "3D-\u043C\u043E\u0434\u0435\u043B\u044C \u0441\u0435\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kh-facts"
  }, K.facts.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "kh-fact"
  }, /*#__PURE__*/React.createElement("b", null, a), /*#__PURE__*/React.createElement("span", null, b))))));
}
function KFormats({
  ctx
}) {
  const {
    GradientBlock
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_CORP;
  return /*#__PURE__*/React.createElement("section", {
    className: "kf wrap",
    "data-screen-label": "\u0424\u043E\u0440\u043C\u0430\u0442\u044B"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u0424\u043E\u0440\u043C\u0430\u0442\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead rv"
  }, "\u0424\u043E\u0440\u043C\u0430\u0442 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0432\u0430\u043C\u0438 \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438.")), /*#__PURE__*/React.createElement("div", {
    className: "kf-grid"
  }, K.formats.map(([t, d, tone], i) => /*#__PURE__*/React.createElement(GradientBlock, {
    key: i,
    tone: tone,
    padding: "28px",
    className: "kf-i rv",
    style: {
      transitionDelay: i * 100 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kf-n"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "kf-t"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "kf-d"
  }, d)))));
}
function KSteps({
  ctx
}) {
  const K = window.B2B_CORP;
  const [a, setA] = React.useState(0);
  React.useEffect(() => {
    if (ctx.lv) return;
    const i = setInterval(() => setA(x => (x + 1) % K.steps.length), 3800);
    return () => clearInterval(i);
  }, [ctx.lv]);
  return /*#__PURE__*/React.createElement("section", {
    className: "ks wrap",
    "data-screen-label": "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "ks-tabs rv"
  }, K.steps.map(([t], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: 'ks-tab' + (i === a ? ' on' : ''),
    onClick: () => setA(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ks-tab-n"
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    className: "ks-tab-bar"
  }, /*#__PURE__*/React.createElement("span", {
    key: i === a ? 'on' + a : 'off'
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "ks-body rv"
  }, /*#__PURE__*/React.createElement("span", {
    key: a,
    className: "ks-big"
  }, "0", a + 1), /*#__PURE__*/React.createElement("div", {
    key: 't' + a,
    className: "ks-txt"
  }, /*#__PURE__*/React.createElement("h3", null, K.steps[a][0]), /*#__PURE__*/React.createElement("p", null, K.steps[a][1]))));
}
function KPerson({
  ctx
}) {
  const {
    Icon,
    TriadStripe
  } = window.DesignSystem_a62ddd;
  const P = window.B2B_CORP.lead_person;
  const [cp, setCp] = React.useState('');
  const copy = (v, k) => {
    navigator.clipboard && navigator.clipboard.writeText(v).catch(() => {});
    setCp(k);
    setTimeout(() => setCp(''), 1600);
  };
  const rows = [['phone', 'Телефон', P.phone, 'tel:' + P.tel], ['mail', 'Почта', P.mail, 'mailto:' + P.mail], ['send', 'Telegram', P.tg, '#']];
  return /*#__PURE__*/React.createElement("section", {
    id: "k-person",
    className: "kp wrap",
    "data-screen-label": "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kp-ph rv"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "corp-lead-photo",
    shape: "rect",
    placeholder: "\u0424\u043E\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E"
  }), /*#__PURE__*/React.createElement(TriadStripe, {
    height: 8,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "kp-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sq"
  }), "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, P.name), /*#__PURE__*/React.createElement("p", {
    className: "kp-role rv"
  }, P.role), /*#__PURE__*/React.createElement("p", {
    className: "about-p rv"
  }, P.text), /*#__PURE__*/React.createElement("ul", {
    className: "kp-list"
  }, rows.map(([ic, l, v, href], i) => /*#__PURE__*/React.createElement("li", {
    key: ic,
    className: "rv",
    style: {
      transitionDelay: i * 80 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    className: "kp-l"
  }, l), /*#__PURE__*/React.createElement("a", {
    href: href
  }, v), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn",
    "aria-label": 'Скопировать: ' + l,
    onClick: () => copy(v, ic)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: cp === ic ? 'check' : 'copy',
    size: 18
  })))))));
}
function KApply({
  ctx
}) {
  const {
    GradientBlock,
    Input,
    Select,
    Checkbox,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const [v, setV] = React.useState({
    company: '',
    name: '',
    phone: '',
    email: ''
  });
  const [err, setErr] = React.useState({});
  const [ok, setOk] = React.useState(false);
  const [goals, setGoals] = React.useState([]);
  const G = ['Выстроить e-com канал', 'Сложные сделки и переговоры', 'Ключевые клиенты', 'Управление отделом', 'CRM и AI'];
  const tg = g => setGoals(goals.includes(g) ? goals.filter(x => x !== g) : [...goals, g]);
  const ch = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  const send = e => {
    e.preventDefault();
    const er = {};
    if (!v.company.trim()) er.company = 'Укажите компанию';
    if (!v.name.trim()) er.name = 'Укажите имя';
    if (v.phone.replace(/\D/g, '').length < 10) er.phone = 'Укажите телефон';
    if (!/.+@.+\..+/.test(v.email)) er.email = 'Укажите корректный адрес';
    setErr(er);
    if (Object.keys(er).length) return;
    setOk(true);
    ctx.notify('Заявка отправлена', 'Ответственный за направление свяжется с вами в течение рабочего дня');
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "k-apply",
    className: "ca wrap",
    "data-screen-label": "\u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u044F\u0432\u043A\u0438"
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "violet",
    padding: 0,
    className: "ca-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-l"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 h2-inv rv"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "corp-lead rv"
  }, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u0445. \u041E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-k"
  }, "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "kg"
  }, G.map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    type: "button",
    className: 'kg-i' + (goals.includes(g) ? ' on' : ''),
    onClick: () => tg(g)
  }, goals.includes(g) && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), g))))), /*#__PURE__*/React.createElement("div", {
    className: "ca-r"
  }, ok ? /*#__PURE__*/React.createElement("div", {
    className: "ca-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ca-ok-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 40
  })), /*#__PURE__*/React.createElement("h3", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", null, "\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 ", v.phone, " \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setOk(false);
      setV({
        company: '',
        name: '',
        phone: '',
        email: ''
      });
      setGoals([]);
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : /*#__PURE__*/React.createElement("form", {
    className: "ca-form",
    onSubmit: send,
    noValidate: true
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    placeholder: "\u041E\u041E\u041E \xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\xBB",
    value: v.company,
    onChange: ch('company'),
    error: err.company
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E",
    placeholder: "\u0410\u043D\u043D\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u0430",
    value: v.name,
    onChange: ch('name'),
    error: err.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "kf2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+7 (900) 000-00-00",
    value: v.phone,
    onChange: ch('phone'),
    error: err.phone
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    placeholder: "name@company.ru",
    value: v.email,
    onChange: ch('email'),
    error: err.email
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
    options: ['до 10 человек', '10–50 человек', '50–200 человек', 'более 200 человек']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0424\u043E\u0440\u043C\u0430\u0442",
    options: ['На площадке Политеха', 'На территории компании', 'Онлайн', 'Пока не знаем']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")))));
}
function KContacts({
  ctx
}) {
  const {
    Icon,
    Accordion
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_CORP;
  return /*#__PURE__*/React.createElement("section", {
    id: "k-contacts",
    className: "kc wrap",
    "data-screen-label": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("ul", {
    className: "kc-list"
  }, K.contacts.map(([l, v, ic], i) => /*#__PURE__*/React.createElement("li", {
    key: l,
    className: "rv",
    style: {
      transitionDelay: i * 80 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "kp-l"
  }, l), /*#__PURE__*/React.createElement("b", null, v)))), /*#__PURE__*/React.createElement("div", {
    className: "kc-map rv"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "corp-map",
    shape: "rect",
    placeholder: "\u041A\u0430\u0440\u0442\u0430 \u0438\u043B\u0438 \u0444\u043E\u0442\u043E \u043A\u0430\u043C\u043F\u0443\u0441\u0430"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: K.faq.map(([t, c], i) => ({
      index: '0' + (i + 1),
      title: t,
      content: c
    })),
    defaultOpen: 0
  }))));
}
Object.assign(window, {
  KHero,
  KFormats,
  KSteps,
  KPerson,
  KApply,
  KContacts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Corp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/CourseBottom.jsx
try { (() => {
function MiniTile({
  k,
  t,
  d,
  i,
  ctx
}) {
  const {
    GradientBlock
  } = window.DesignSystem_a62ddd;
  const cv = React.useRef(),
    host = React.useRef();
  const tones = ['green', 'violet', 'orange', 'greenDark', 'violet', 'green'];
  React.useEffect(() => {
    if (!window.THREE || ctx.lv || !cv.current) return;
    let s;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting && !s) {
        s = window.createMini(cv.current, k);
        io.disconnect();
      }
    }, {
      rootMargin: '200px'
    });
    io.observe(cv.current);
    return () => {
      io.disconnect();
      s && s.dispose();
    };
  }, [ctx.lv]);
  return /*#__PURE__*/React.createElement("article", {
    ref: host,
    "data-mini-host": "",
    className: "ce-i rv",
    style: {
      transitionDelay: i % 3 * 100 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: tones[i],
    padding: 0,
    className: "ce-3d"
  }, !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ce-n"
  }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
    className: "ce-t"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "ce-d"
  }, d));
}
function CExpect({
  ctx
}) {
  const K = window.B2B_COURSE;
  return /*#__PURE__*/React.createElement("section", {
    id: "expect",
    className: "ce wrap",
    "data-screen-label": "\u0427\u0442\u043E \u0436\u0434\u0451\u0442 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u0427\u0442\u043E \u0436\u0434\u0451\u0442 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead rv"
  }, "\u041D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u2014 \u043C\u043E\u0434\u0435\u043B\u044C \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0441\u044F.")), /*#__PURE__*/React.createElement("div", {
    className: "ce-grid"
  }, K.expect.map(([k, t, d], i) => /*#__PURE__*/React.createElement(MiniTile, {
    key: k,
    k: k,
    t: t,
    d: d,
    i: i,
    ctx: ctx
  }))));
}
function CTeam({
  ctx
}) {
  const {
    Badge,
    TriadStripe
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_COURSE;
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "ct wrap",
    "data-screen-label": "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0441\u043E\u0441\u0442\u0430\u0432"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead rv"
  }, "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 B2B \u0438 e-com \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438 \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0430.")), /*#__PURE__*/React.createElement("div", {
    className: "ct-grid"
  }, K.team.map(([n, m, r, id], i) => /*#__PURE__*/React.createElement("article", {
    key: id,
    className: "ct-i rv",
    style: {
      transitionDelay: i * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ct-ph"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'teacher-' + id,
    shape: "rect",
    placeholder: "\u0424\u043E\u0442\u043E \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ct-tri"
  }, /*#__PURE__*/React.createElement(TriadStripe, {
    height: 8
  }))), /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, m), /*#__PURE__*/React.createElement("h3", {
    className: "ct-n"
  }, n), /*#__PURE__*/React.createElement("p", {
    className: "ct-r"
  }, r)))));
}
function CDoc({
  ctx
}) {
  const {
    Logo,
    TriadStripe
  } = window.DesignSystem_a62ddd;
  const ref = React.useRef();
  const move = e => {
    if (ctx.lv) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5,
      y = (e.clientY - r.top) / r.height - .5;
    ref.current.style.transform = 'rotateY(' + x * 16 + 'deg) rotateX(' + -y * 12 + 'deg)';
    ref.current.style.setProperty('--sx', (x + .5) * 100 + '%');
    ref.current.style.setProperty('--sy', (y + .5) * 100 + '%');
  };
  const leave = () => {
    ref.current.style.transform = '';
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "doc",
    className: "cd wrap",
    "data-screen-label": "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043E\u0431 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-txt"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442", /*#__PURE__*/React.createElement("br", null), "\u043E\u0431 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "about-p rv"
  }, "\u041F\u043E\u0441\u043B\u0435 \u0438\u0442\u043E\u0433\u043E\u0432\u043E\u0439 \u0437\u0430\u0449\u0438\u0442\u044B \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u0440\u043E\u0434\u0430\u0436 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442, \u0434\u0438\u043F\u043B\u043E\u043C \u043E \u0414\u041E (\u043F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438)."), /*#__PURE__*/React.createElement("ul", {
    className: "cd-list"
  }, ['Сертификат, диплом о ДО (при наличии лицензии)', 'Около 70 часов нагрузки', 'Итоговая защита системы продаж'].map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "rv",
    style: {
      transitionDelay: i * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sq"
  }), x)))), /*#__PURE__*/React.createElement("div", {
    className: "cd-stage rv",
    onMouseMove: move,
    onMouseLeave: leave
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "cert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cert-shine"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cert-top"
  }, /*#__PURE__*/React.createElement(Logo, {
    version: "full",
    tone: "color",
    height: 46,
    assetBase: B2B_A
  })), /*#__PURE__*/React.createElement("div", {
    className: "cert-k"
  }, "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442"), /*#__PURE__*/React.createElement("div", {
    className: "cert-t"
  }, "\u043E \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    className: "cert-line"
  }, /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0432\u044B\u0434\u0430\u043D"), /*#__PURE__*/React.createElement("b", null, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E")), /*#__PURE__*/React.createElement("div", {
    className: "cert-line"
  }, /*#__PURE__*/React.createElement("span", null, "\u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043E\u043D(\u0430) \u043F\u0440\u043E\u0448\u0451\u043B(\u0430) \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435"), /*#__PURE__*/React.createElement("b", null, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 B2B-\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438 \u2014 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "cert-f"
  }, /*#__PURE__*/React.createElement("span", null, "\u0432 \u043E\u0431\u044A\u0451\u043C\u0435 ", /*#__PURE__*/React.createElement("b", null, "70"), " \u0447\u0430\u0441\u043E\u0432"), /*#__PURE__*/React.createElement("span", {
    className: "cert-reg"
  }, "\u0420\u0435\u0433. \u2116 0000000")), /*#__PURE__*/React.createElement(TriadStripe, {
    height: 8,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }))));
}
function CReviews({
  ctx
}) {
  const {
    Icon
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_COURSE;
  const tr = React.useRef();
  const [p, setP] = React.useState(0);
  const drag = React.useRef(null);
  const on = () => {
    const el = tr.current;
    if (!el) return;
    const m = el.scrollWidth - el.clientWidth;
    setP(m > 0 ? el.scrollLeft / m : 0);
  };
  const step = d => {
    const el = tr.current;
    const w = el.firstChild.getBoundingClientRect().width + 24;
    el.scrollBy({
      left: d * w,
      behavior: 'smooth'
    });
  };
  const down = e => {
    if (e.pointerType !== 'mouse') return;
    drag.current = {
      x: e.clientX,
      s: tr.current.scrollLeft
    };
    tr.current.classList.add('drag');
  };
  const mv = e => {
    if (!drag.current) return;
    tr.current.scrollLeft = drag.current.s - (e.clientX - drag.current.x);
  };
  const up = () => {
    if (!drag.current) return;
    drag.current = null;
    tr.current.classList.remove('drag');
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "cr",
    "data-screen-label": "\u041E\u0442\u0437\u044B\u0432\u044B"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap sec-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041E\u0442\u0437\u044B\u0432\u044B \u043E \u043A\u0443\u0440\u0441\u0435"), /*#__PURE__*/React.createElement("div", {
    className: "cr-ctl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog cr-prog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog-f",
    style: {
      transform: 'scaleX(' + Math.max(.08, p) + ')'
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn",
    "aria-label": "\u041D\u0430\u0437\u0430\u0434",
    onClick: () => step(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn",
    "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434",
    onClick: () => step(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    ref: tr,
    className: "cr-track",
    onScroll: on,
    onPointerDown: down,
    onPointerMove: mv,
    onPointerUp: up,
    onPointerLeave: up
  }, K.reviews.map(([n, r, q], i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: "cr-i rv",
    style: {
      transitionDelay: i * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cr-q"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", null, q), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("b", null, n), /*#__PURE__*/React.createElement("span", null, r))))));
}
function Countdown({
  to
}) {
  const [n, setN] = React.useState(Date.now());
  React.useEffect(() => {
    const i = setInterval(() => setN(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const d = Math.max(0, to - n);
  const parts = [[Math.floor(d / 864e5), 'дней'], [Math.floor(d / 36e5) % 24, 'часов'], [Math.floor(d / 6e4) % 60, 'минут'], [Math.floor(d / 1e3) % 60, 'секунд']];
  return /*#__PURE__*/React.createElement("div", {
    className: "cdn"
  }, parts.map(([v, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cdn-i"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cdn-v"
  }, /*#__PURE__*/React.createElement("span", {
    key: v
  }, String(v).padStart(2, '0'))), /*#__PURE__*/React.createElement("span", {
    className: "cdn-l"
  }, l))));
}
function CApply({
  ctx
}) {
  const {
    GradientBlock,
    Input,
    Select,
    Checkbox,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const [v, setV] = React.useState({
    name: '',
    phone: '',
    email: ''
  });
  const [err, setErr] = React.useState({});
  const [ok, setOk] = React.useState(false);
  const ch = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  const send = e => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = 'Укажите имя';
    if (v.phone.replace(/\D/g, '').length < 10) er.phone = 'Укажите телефон';
    if (!/.+@.+\..+/.test(v.email)) er.email = 'Укажите корректный адрес';
    setErr(er);
    if (Object.keys(er).length) return;
    setOk(true);
    ctx.notify('Заявка на курс принята', 'Менеджер свяжется с вами в течение рабочего дня');
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "apply",
    className: "ca wrap",
    "data-screen-label": "\u0424\u043E\u0440\u043C\u0430 \u0437\u0430\u044F\u0432\u043A\u0438"
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "green",
    padding: 0,
    className: "ca-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-l"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 h2-inv rv"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "corp-lead rv"
  }, "\u0421\u0442\u0430\u0440\u0442 \u043F\u043E\u0442\u043E\u043A\u0430 \u2014 12 \u044F\u043D\u0432\u0430\u0440\u044F 2027, \u0433\u0440\u0443\u043F\u043F\u0430 20-25 \u0447\u0435\u043B\u043E\u0432\u0435\u043A. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442 \u043C\u0435\u0441\u0442\u043E \u0438 \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u0434\u043E\u0433\u043E\u0432\u043E\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ca-k"
  }, "\u0414\u043E \u0441\u0442\u0430\u0440\u0442\u0430"), /*#__PURE__*/React.createElement(Countdown, {
    to: new Date(2027, 0, 12, 10).getTime()
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ca-r"
  }, ok ? /*#__PURE__*/React.createElement("div", {
    className: "ca-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ca-ok-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 40
  })), /*#__PURE__*/React.createElement("h3", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", null, "\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 ", v.phone, " \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setOk(false);
      setV({
        name: '',
        phone: '',
        email: ''
      });
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : /*#__PURE__*/React.createElement("form", {
    className: "ca-form",
    onSubmit: send,
    noValidate: true
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F",
    placeholder: "\u0410\u043D\u043D\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u0430",
    value: v.name,
    onChange: ch('name'),
    error: err.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+7 (900) 000-00-00",
    value: v.phone,
    onChange: ch('phone'),
    error: err.phone
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    placeholder: "name@company.ru",
    value: v.email,
    onChange: ch('email'),
    error: err.email
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0438 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
    placeholder: "\u041E\u041E\u041E \xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\xBB, \u0420\u041E\u041F"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u044F",
    options: ['Смешанный формат — лично', 'Смешанный формат — от компании', 'Очный 2-дневный интенсив для руководителей']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")))));
}
Object.assign(window, {
  CExpect,
  CTeam,
  CDoc,
  CReviews,
  CApply
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/CourseBottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/CourseTop.jsx
try { (() => {
function CHero({
  ctx
}) {
  const {
    Badge,
    TriadStripe
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_COURSE;
  const cv = React.useRef();
  const [hov, setHov] = React.useState(-1);
  React.useEffect(() => {
    if (!window.THREE || ctx.lv || !cv.current) return;
    const s = window.createTower(cv.current, K.modules.map(m => m.h), setHov);
    return () => s.dispose();
  }, [ctx.lv]);
  const tw = s => s.split(/(\{B2B\})/).map((p, i) => p === '{B2B}' ? /*#__PURE__*/React.createElement("b", {
    key: i,
    className: "h-block"
  }, "B2B") : p);
  return /*#__PURE__*/React.createElement("section", {
    className: "ch wrap",
    "data-screen-label": "\u041A\u0443\u0440\u0441 \u2014 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ch-l"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: "courses.html"
  }, "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "ch-badges"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "\u0424\u043B\u0430\u0433\u043C\u0430\u043D"), /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, "\u041D\u0430\u0431\u043E\u0440 \u043E\u0442\u043A\u0440\u044B\u0442")), /*#__PURE__*/React.createElement("h1", {
    className: "h-hero ch-h1"
  }, K.title.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transitionDelay: i * .12 + 's'
    }
  }, tw(l))))), /*#__PURE__*/React.createElement("p", {
    className: "ch-sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sq"
  }), K.sub), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, K.lead)), /*#__PURE__*/React.createElement("div", {
    className: "ch-r"
  }, !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    "aria-label": "3D-\u043C\u043E\u0434\u0435\u043B\u044C: \u043C\u043E\u0434\u0443\u043B\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u0432\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u0430 \u2014 \u0447\u0438\u0441\u043B\u043E \u0447\u0430\u0441\u043E\u0432"
  }), /*#__PURE__*/React.createElement("div", {
    className: 'ch-tip' + (hov >= 0 ? ' on' : '')
  }, hov >= 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "\u041C\u043E\u0434\u0443\u043B\u044C ", hov + 1, " \xB7 ", K.modules[hov].h, " \u0447"), /*#__PURE__*/React.createElement("span", null, K.modules[hov].t))), /*#__PURE__*/React.createElement("div", {
    className: "hint ch-hint"
  }, "\u041D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043C\u043E\u0434\u0443\u043B\u044F")), /*#__PURE__*/React.createElement("div", {
    className: "ch-facts"
  }, K.facts.map(([k, a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ch-fact rv",
    style: {
      transitionDelay: i * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ch-fact-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: 'ch-fact-a' + (i === 1 ? ' big' : '')
  }, i === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u2248", /*#__PURE__*/React.createElement(Counter, {
    to: 70
  })) : a), /*#__PURE__*/React.createElement("span", {
    className: "ch-fact-b"
  }, b)))), /*#__PURE__*/React.createElement(TriadStripe, {
    height: 6,
    style: {
      gridColumn: '1/-1'
    }
  }));
}
function CSubNav({
  ctx
}) {
  const {
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_COURSE;
  const [act, setAct] = React.useState('');
  const fill = React.useRef();
  React.useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) setAct(e.target.id);
    }), {
      rootMargin: '-40% 0px -55% 0px'
    });
    K.nav.forEach(([id]) => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (fill.current) fill.current.style.transform = 'scaleX(' + (h > 0 ? scrollY / h : 0) + ')';
    };
    on();
    addEventListener('scroll', on, {
      passive: true
    });
    return () => {
      io.disconnect();
      removeEventListener('scroll', on);
    };
  }, []);
  const jump = id => {
    const el = document.getElementById(id);
    if (!el) return;
    scrollTo({
      top: el.getBoundingClientRect().top + scrollY - 130,
      behavior: ctx.lv ? 'auto' : 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "csn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap csn-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "csn-l"
  }, K.nav.map(([id, l], i) => /*#__PURE__*/React.createElement("button", {
    key: id,
    type: "button",
    className: 'csn-a' + (act === id ? ' on' : ''),
    onClick: () => jump(id)
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1), l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => jump('apply'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down-right",
      size: 16
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")), /*#__PURE__*/React.createElement("div", {
    className: "csn-p"
  }, /*#__PURE__*/React.createElement("div", {
    ref: fill
  })));
}
function CFormat({
  ctx
}) {
  const K = window.B2B_COURSE;
  const [h, setH] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    id: "format",
    className: "cfm wrap",
    "data-screen-label": "\u0424\u043E\u0440\u043C\u0430\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043E", /*#__PURE__*/React.createElement("br", null), "\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead rv"
  }, "\u0423\u0441\u043B\u043E\u0432\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B.")), /*#__PURE__*/React.createElement("div", {
    className: "cfm-grid"
  }, K.spec.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'cfm-i rv' + (h === i ? ' on' : ''),
    style: {
      transitionDelay: i % 3 * 70 + 'ms'
    },
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(-1)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cfm-n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "cfm-k"
  }, a), /*#__PURE__*/React.createElement("span", {
    className: "cfm-v"
  }, b)))));
}
function CProgram({
  ctx
}) {
  const {
    Icon
  } = window.DesignSystem_a62ddd;
  const K = window.B2B_COURSE;
  const [open, setOpen] = React.useState(0);
  const [hov, setHov] = React.useState(-1);
  const tones = ['var(--pt-green)', '#56975b', 'var(--pt-violet)', 'var(--pt-orange)', 'var(--pt-green-dark)'];
  const total = K.modules.reduce((s, m) => s + m.h, 0);
  const a = hov >= 0 ? hov : open;
  return /*#__PURE__*/React.createElement("section", {
    id: "program",
    className: "cp wrap",
    "data-screen-label": "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043A\u0443\u0440\u0441\u0430"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cp-sticky"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043A\u0443\u0440\u0441\u0430"), /*#__PURE__*/React.createElement("p", {
    className: "cp-note rv"
  }, "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u043C\u043E\u0434\u0443\u043B\u044C \u0437\u0430 \u043C\u043E\u0434\u0443\u043B\u0435\u043C: 8 \u043D\u0435\u0434\u0435\u043B\u044C + 2 \u043D\u0435\u0434\u0435\u043B\u0438 \u0432 \u0437\u0430\u0449\u0438\u0442\u0443 \u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u044E\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F. \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u2014 \u043E\u043A\u043E\u043B\u043E 70 \u0447\u0430\u0441\u043E\u0432."), /*#__PURE__*/React.createElement("div", {
    className: "cp-total rv"
  }, /*#__PURE__*/React.createElement("span", {
    key: a,
    className: "cp-total-n"
  }, K.modules[a].h), /*#__PURE__*/React.createElement("span", {
    className: "cp-total-l"
  }, "\u0447\u0430\u0441\u043E\u0432", /*#__PURE__*/React.createElement("br", null), "\u0432 \u043C\u043E\u0434\u0443\u043B\u0435 ", a + 1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u0438\u0437 ", total))), /*#__PURE__*/React.createElement("div", {
    className: "cp-bar rv"
  }, K.modules.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flexGrow: m.h,
      background: tones[i],
      opacity: i === a ? 1 : .28
    },
    onMouseEnter: () => setHov(i),
    onMouseLeave: () => setHov(-1),
    onClick: () => setOpen(i)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "cp-r"
  }, K.modules.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'cpm rv' + (open === i ? ' open' : ''),
    onMouseEnter: () => setHov(i),
    onMouseLeave: () => setHov(-1)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cpm-h",
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cpm-n",
    style: {
      color: tones[i]
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "cpm-t"
  }, m.t), /*#__PURE__*/React.createElement("span", {
    className: "cpm-hrs"
  }, /*#__PURE__*/React.createElement("b", null, m.h), " \u0447"), /*#__PURE__*/React.createElement("span", {
    className: "cpm-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cpm-b"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cpm-meter"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: m.h / 20 * 100 + '%',
      background: tones[i]
    }
  })), /*#__PURE__*/React.createElement("ul", {
    className: "cpm-list"
  }, m.d.replace(/\.$/, '').split('; ').map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      transitionDelay: (open === i ? j * 60 : 0) + 'ms'
    }
  }, x)))))))));
}
function CStages({
  ctx
}) {
  const K = window.B2B_COURSE;
  const sec = React.useRef();
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      if (!sec.current) return;
      const r = sec.current.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, (innerHeight * .75 - r.top) / (r.height * .8))));
    };
    on();
    addEventListener('scroll', on, {
      passive: true
    });
    return () => removeEventListener('scroll', on);
  }, []);
  const n = K.stages.length;
  return /*#__PURE__*/React.createElement("section", {
    id: "stages",
    ref: sec,
    className: "cs wrap",
    "data-screen-label": "\u042D\u0442\u0430\u043F\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, "\u042D\u0442\u0430\u043F\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "cs-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-fill",
    style: {
      transform: 'scaleX(' + (ctx.lv ? 1 : p) + ')'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-grid"
  }, K.stages.map(([t, d, w], i) => {
    const on = ctx.lv || p >= i / (n - .6);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'cs-i' + (on ? ' on' : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "cs-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "cs-k"
    }, "\u042D\u0442\u0430\u043F 0", i + 1, " \xB7 ", w), /*#__PURE__*/React.createElement("h3", {
      className: "cs-t"
    }, t), /*#__PURE__*/React.createElement("p", {
      className: "cs-d"
    }, d));
  })));
}
Object.assign(window, {
  CFormat,
  CHero,
  CSubNav,
  CProgram,
  CStages
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/CourseTop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Courses.jsx
try { (() => {
function TiltCard({
  c,
  ctx,
  onOpen,
  style
}) {
  const {
    GradientBlock,
    Badge,
    ArrowLink
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  const ref = React.useRef();
  const move = e => {
    if (ctx.lv) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5,
      y = (e.clientY - r.top) / r.height - .5;
    ref.current.style.transform = 'perspective(900px) rotateY(' + x * 10 + 'deg) rotateX(' + -y * 10 + 'deg) translateZ(0)';
    ref.current.style.setProperty('--gx', 50 + x * 60 + '%');
  };
  const leave = () => {
    ref.current.style.transform = '';
  };
  return /*#__PURE__*/React.createElement("article", {
    ref: ref,
    className: "ccard",
    style: style,
    onMouseMove: move,
    onMouseLeave: leave
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: c.tone,
    padding: 24,
    className: "ccard-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccard-n"
  }, c.id), /*#__PURE__*/React.createElement("div", {
    className: "ccard-w"
  }, c.hours ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, c.hours), " ", ctx.lang === 'ru' ? 'ак. ч' : 'hrs') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, c.weeks), " ", t.weeks))), /*#__PURE__*/React.createElement("div", {
    className: "ccard-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccard-meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, t.formats[c.format]), c.flagship && /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, ctx.lang === 'ru' ? 'Флагман' : 'Flagship'), /*#__PURE__*/React.createElement("span", {
    className: "ccard-cat"
  }, t.cats[c.cat])), /*#__PURE__*/React.createElement("h3", {
    className: "ccard-t"
  }, c[ctx.lang]), /*#__PURE__*/React.createElement("p", {
    className: "ccard-d"
  }, ctx.lang === 'ru' ? c.dru : c.den), /*#__PURE__*/React.createElement("div", {
    className: "ccard-f"
  }, /*#__PURE__*/React.createElement("span", null, t.start, " ", /*#__PURE__*/React.createElement("b", null, c.start)), /*#__PURE__*/React.createElement(ArrowLink, {
    href: c.page || '#',
    inverse: ctx.theme === 'dark',
    onClick: e => {
      if (c.page) return;
      e.preventDefault();
      onOpen && onOpen(c);
    }
  }, t.more))));
}
function Courses({
  ctx
}) {
  const {
    Tag,
    ArrowLink
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  const [cat, setCat] = React.useState('all');
  const list = window.B2B.courses.filter(c => cat === 'all' || c.cat === cat);
  const sec = React.useRef(),
    track = React.useRef(),
    fill = React.useRef();
  const [h, setH] = React.useState(null);
  React.useLayoutEffect(() => {
    const calc = () => {
      if (window.innerWidth <= 900 || !track.current) {
        setH(null);
        return;
      }
      const extra = Math.max(0, track.current.scrollWidth - track.current.parentElement.clientWidth);
      setH(window.innerHeight + extra);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [list.length, ctx.lang, ctx.lv]);
  React.useEffect(() => {
    const on = () => {
      if (!sec.current || !track.current) return;
      if (window.innerWidth <= 900) {
        track.current.style.transform = '';
        return;
      }
      const r = sec.current.getBoundingClientRect();
      const max = sec.current.offsetHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, -r.top / max)) : 0;
      const ex = Math.max(0, track.current.scrollWidth - track.current.parentElement.clientWidth);
      track.current.style.transform = 'translate3d(' + -p * ex + 'px,0,0)';
      if (fill.current) fill.current.style.transform = 'scaleX(' + p + ')';
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, [h]);
  const choose = k => {
    setCat(k);
    const y = sec.current.getBoundingClientRect().top + window.scrollY - 70;
    if (window.scrollY > y) window.scrollTo({
      top: y
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "courses",
    ref: sec,
    className: "courses",
    style: {
      height: h ? h + 'px' : 'auto'
    },
    "data-screen-label": "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B"
  }, /*#__PURE__*/React.createElement("div", {
    className: "courses-pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap courses-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h2-n"
  }, String(list.length).padStart(2, '0')), t.nav.courses), /*#__PURE__*/React.createElement("div", {
    className: "tags rv"
  }, Object.keys(t.cats).map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: cat === k,
    onClick: () => choose(k)
  }, t.cats[k])))), /*#__PURE__*/React.createElement("div", {
    className: "wrap courses-vp"
  }, /*#__PURE__*/React.createElement("div", {
    ref: track,
    className: "track"
  }, list.map(c => /*#__PURE__*/React.createElement(TiltCard, {
    key: c.id,
    c: c,
    ctx: ctx
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wrap courses-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog"
  }, /*#__PURE__*/React.createElement("div", {
    ref: fill,
    className: "prog-f"
  })), /*#__PURE__*/React.createElement("span", {
    className: "courses-hint"
  }, t.scrollHint), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "courses.html",
    inverse: ctx.theme === 'dark'
  }, ctx.lang === 'ru' ? 'Каталог курсов' : 'Course catalogue'))));
}
Object.assign(window, {
  Courses,
  TiltCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Courses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Hero.jsx
try { (() => {
function Decode({
  text,
  delay = 900
}) {
  const [out, setOut] = React.useState(text.replace(/\S/g, '·'));
  React.useEffect(() => {
    const chars = '01π/#<>+=';
    let f = 0,
      id;
    const total = text.length;
    const run = () => {
      f++;
      const done = Math.floor(f * 1.2);
      setOut(text.split('').map((c, i) => c === ' ' ? ' ' : i < done ? c : chars[(i + f) % chars.length]).join(''));
      if (done < total) id = setTimeout(run, 28);
    };
    const s = setTimeout(run, delay);
    return () => {
      clearTimeout(s);
      clearTimeout(id);
    };
  }, [text]);
  return /*#__PURE__*/React.createElement("span", null, out);
}
function HeroTitle({
  lines
}) {
  return /*#__PURE__*/React.createElement("h1", {
    className: "h-hero"
  }, lines.map((l, i) => {
    const parts = l.split('{B2B}');
    return /*#__PURE__*/React.createElement("span", {
      key: l + i,
      className: "ln"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        transitionDelay: i * 110 + 'ms'
      }
    }, parts.length > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, parts[0], /*#__PURE__*/React.createElement("b", {
      className: "h-block"
    }, "B2B"), parts[1]) : l));
  }));
}
function Hero({
  ctx
}) {
  const {
    Button,
    Icon,
    GradientBlock
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  const cv = React.useRef(),
    txt = React.useRef();
  React.useEffect(() => {
    if (!window.THREE || ctx.lv) return;
    const s = window.createFunnel(cv.current);
    const on = () => {
      const p = Math.min(1, window.scrollY / window.innerHeight);
      s.setScroll(p);
      if (txt.current) {
        txt.current.style.transform = 'translateY(' + -p * 90 + 'px)';
        txt.current.style.opacity = String(1 - p * 1.1);
      }
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => {
      s.dispose();
      window.removeEventListener('scroll', on);
    };
  }, [ctx.lv]);
  const pi = window.B2B.PI;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero",
    "data-screen-label": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pi-tex",
    "aria-hidden": "true"
  }, (pi + pi + pi).split('').join(' ')), !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    className: "hero-cv",
    "aria-label": "3D-\u043C\u043E\u0434\u0435\u043B\u044C \u0432\u043E\u0440\u043E\u043D\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0436 \u0438\u0437 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-in",
    ref: txt
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sq"
  }), /*#__PURE__*/React.createElement(Decode, {
    key: ctx.lang,
    text: t.eyebrow
  })), /*#__PURE__*/React.createElement(HeroTitle, {
    key: ctx.lang,
    lines: t.h1
  }), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, t.lead), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => ctx.go('courses'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down-right",
      size: 20
    })
  }, t.pick), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: ctx.theme === 'dark' ? 'inverse' : 'outline',
    onClick: () => (ctx.page || ctx.go)('corporate')
  }, t.nav.corporate)), !ctx.lv && /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mouse-pointer-2",
    size: 14
  }), t.hint)), /*#__PURE__*/React.createElement("div", {
    className: "wrap facts-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facts"
  }, t.facts.map(([a, b], i) => i === 0 ? /*#__PURE__*/React.createElement(GradientBlock, {
    key: i,
    tone: "orange",
    padding: "20px 24px",
    className: "fact fact-hot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact-s"
  }, a), /*#__PURE__*/React.createElement("div", {
    className: "fact-big"
  }, b)) : /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact-a"
  }, a), /*#__PURE__*/React.createElement("div", {
    className: "fact-s"
  }, b))))));
}
function Marquee({
  ctx
}) {
  const items = ctx.t.marquee;
  const row = /*#__PURE__*/React.createElement("div", {
    className: "mq-row"
  }, items.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "mq-i"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mq-sq",
    style: {
      background: ['var(--pt-green)', 'var(--pt-violet)', 'var(--pt-orange)'][i % 3]
    }
  }), m)));
  return /*#__PURE__*/React.createElement("div", {
    className: "mq",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mq-track"
  }, row, row));
}
Object.assign(window, {
  Hero,
  Marquee,
  Decode
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Hub.jsx
try { (() => {
const HUB_T = {
  ru: {
    crumb: 'Главная',
    title: 'Все курсы',
    lead: 'Каталог программ повышения квалификации школы. Выберите направление и формат, откройте курс, чтобы увидеть детали и записаться.',
    q: 'Название или тема',
    cat: 'Направление',
    fmt: 'Формат',
    all: 'Все',
    found: 'Найдено',
    reset: 'Сбросить фильтры',
    empty: 'По заданным условиям курсов нет',
    grid: 'Плиткой',
    list: 'Списком',
    dur: 'Длительность',
    doc: 'Документ',
    docV: 'Удостоверение о повышении квалификации СПбПУ',
    enroll: 'Записаться на курс',
    corp: 'Обучить команду',
    sent: 'Заявка на курс принята',
    sentT: 'Менеджер свяжется с вами в течение рабочего дня',
    prev: 'Предыдущий курс',
    next: 'Следующий курс',
    ctaT: 'Нужна программа под вашу компанию?',
    ctaL: 'Соберём курс из модулей каталога и адаптируем его под задачи вашей команды продаж.',
    open: 'Открыть'
  },
  en: {
    crumb: 'Home',
    title: 'All courses',
    lead: 'The school’s professional development catalogue. Pick a track and format, open a course to see the details and enrol.',
    q: 'Title or topic',
    cat: 'Track',
    fmt: 'Format',
    all: 'All',
    found: 'Found',
    reset: 'Reset filters',
    empty: 'No courses match these filters',
    grid: 'Grid',
    list: 'List',
    dur: 'Duration',
    doc: 'Certificate',
    docV: 'SPbPU professional development certificate',
    enroll: 'Enrol',
    corp: 'Train your team',
    sent: 'Enrolment request received',
    sentT: 'A manager will contact you within one business day',
    prev: 'Previous course',
    next: 'Next course',
    ctaT: 'Need a programme for your company?',
    ctaL: 'We will assemble a course from catalogue modules and tailor it to your sales team.',
    open: 'Open'
  }
};
function HubHero({
  ctx,
  count
}) {
  const {
    GradientBlock
  } = window.DesignSystem_a62ddd;
  const h = HUB_T[ctx.lang];
  const cv = React.useRef();
  React.useEffect(() => {
    if (!window.THREE || ctx.lv || !cv.current) return;
    const s = window.createNetwork(cv.current);
    return () => s && s.dispose && s.dispose();
  }, [ctx.lv]);
  return /*#__PURE__*/React.createElement("section", {
    className: "hub-hero wrap",
    "data-screen-label": "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B \u2014 \u0448\u0430\u043F\u043A\u0430"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hub-hero-txt"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, h.crumb), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, h.title)), /*#__PURE__*/React.createElement("h1", {
    className: "h-hero hub-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", null, h.title)), /*#__PURE__*/React.createElement("span", {
    className: "ln"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    className: "h-block"
  }, String(count).padStart(2, '0')), " ", ctx.lang === 'ru' ? 'программ' : 'programmes'))), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, h.lead)), /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "green",
    padding: 0,
    className: "hub-hero-3d"
  }, !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    "aria-label": "3D-\u043C\u043E\u0434\u0435\u043B\u044C \u0441\u0435\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"
  })));
}
function HubFilters({
  ctx,
  f,
  set,
  total
}) {
  const {
    Tag,
    Icon
  } = window.DesignSystem_a62ddd;
  const t = ctx.t,
    h = HUB_T[ctx.lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "hub-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hub-bar-in"
  }, /*#__PURE__*/React.createElement("label", {
    className: "hub-q"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement("input", {
    value: f.q,
    onChange: e => set({
      q: e.target.value
    }, true),
    placeholder: h.q
  }), f.q && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn",
    "aria-label": h.reset,
    onClick: () => set({
      q: ''
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hub-grp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-lbl"
  }, h.cat), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, Object.keys(t.cats).map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: f.cat === k,
    onClick: () => set({
      cat: k
    })
  }, t.cats[k])))), /*#__PURE__*/React.createElement("div", {
    className: "hub-grp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-lbl"
  }, h.fmt), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, ['all', 'online', 'offline', 'blended'].map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: f.fmt === k,
    onClick: () => set({
      fmt: k
    })
  }, k === 'all' ? h.all : t.formats[k])))), /*#__PURE__*/React.createElement("div", {
    className: "hub-end"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-cnt"
  }, h.found, ": ", /*#__PURE__*/React.createElement("b", null, total)), /*#__PURE__*/React.createElement("div", {
    className: "hub-view"
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "layout-grid",
    label: h.grid,
    active: f.view === 'grid',
    onClick: () => set({
      view: 'grid'
    })
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "list",
    label: h.list,
    active: f.view === 'list',
    onClick: () => set({
      view: 'list'
    })
  })))));
}
function HubRow({
  c,
  ctx,
  onOpen
}) {
  const {
    Badge,
    Icon
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  return /*#__PURE__*/React.createElement("a", {
    href: '#c-' + c.id,
    className: "hub-row",
    style: {
      viewTransitionName: 'cc' + c.id
    },
    onClick: e => {
      e.preventDefault();
      onOpen(c);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'hub-row-n hub-tone-' + c.tone
  }, c.id), /*#__PURE__*/React.createElement("span", {
    className: "hub-row-m"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hub-row-t"
  }, c[ctx.lang]), /*#__PURE__*/React.createElement("span", {
    className: "hub-row-d"
  }, ctx.lang === 'ru' ? c.dru : c.den)), /*#__PURE__*/React.createElement("span", {
    className: "ccard-cat"
  }, t.cats[c.cat]), /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, t.formats[c.format]), /*#__PURE__*/React.createElement("span", {
    className: "hub-row-w"
  }, /*#__PURE__*/React.createElement("b", null, c.weeks), " ", t.weeks), /*#__PURE__*/React.createElement("span", {
    className: "hub-row-s"
  }, t.start, " ", /*#__PURE__*/React.createElement("b", null, c.start)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 22
  }));
}
function CourseDrawer({
  ctx,
  c,
  list,
  onOpen,
  onClose
}) {
  const {
    GradientBlock,
    Badge,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const t = ctx.t,
    h = HUB_T[ctx.lang];
  const [shown, setShown] = React.useState(c);
  React.useEffect(() => {
    if (c) setShown(c);
  }, [c]);
  React.useEffect(() => {
    const k = e => {
      if (!c) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  });
  const all = window.B2B.courses;
  const step = d => {
    if (!c) return;
    const i = all.findIndex(x => x.id === c.id);
    onOpen(all[(i + d + all.length) % all.length]);
  };
  const x = shown;
  return /*#__PURE__*/React.createElement("div", {
    className: 'drw' + (c ? ' open' : ''),
    "aria-hidden": !c
  }, /*#__PURE__*/React.createElement("div", {
    className: "drw-bg",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "drw-p",
    role: "dialog",
    "aria-label": x ? x[ctx.lang] : ''
  }, x && /*#__PURE__*/React.createElement(React.Fragment, {
    key: x.id
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: x.tone,
    padding: "24px 28px",
    className: "drw-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drw-nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn drw-ib",
    "aria-label": h.prev,
    onClick: () => step(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn drw-ib",
    "aria-label": h.next,
    onClick: () => step(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn drw-ib",
    "aria-label": t.search.close,
    onClick: onClose,
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "drw-n"
  }, x.id)), /*#__PURE__*/React.createElement("div", {
    className: "drw-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ccard-meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "light"
  }, t.formats[x.format]), /*#__PURE__*/React.createElement("span", {
    className: "ccard-cat"
  }, t.cats[x.cat])), /*#__PURE__*/React.createElement("h2", {
    className: "drw-t"
  }, x[ctx.lang]), /*#__PURE__*/React.createElement("p", {
    className: "drw-d"
  }, ctx.lang === 'ru' ? x.dru : x.den), /*#__PURE__*/React.createElement("dl", {
    className: "drw-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, h.dur), /*#__PURE__*/React.createElement("dd", null, x.weeks, " ", t.weeks)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, t.start), /*#__PURE__*/React.createElement("dd", null, x.start)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, h.fmt), /*#__PURE__*/React.createElement("dd", null, t.formats[x.format])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, h.doc), /*#__PURE__*/React.createElement("dd", null, h.docV))), /*#__PURE__*/React.createElement("div", {
    className: "drw-f"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => {
      onClose();
      ctx.notify(h.sent, h.sentT);
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 20
    })
  }, h.enroll), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: ctx.theme === 'dark' ? 'inverse' : 'outline',
    onClick: () => {
      location.href = 'corporate.html';
    }
  }, h.corp))))));
}
function HubCta({
  ctx
}) {
  const {
    GradientBlock,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const h = HUB_T[ctx.lang];
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap hub-cta rv"
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "violet",
    padding: "48px 56px",
    className: "hub-cta-in"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h2 h2-inv"
  }, h.ctaT), /*#__PURE__*/React.createElement("p", {
    className: "corp-lead",
    style: {
      marginTop: 20
    }
  }, h.ctaL)), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => {
      location.href = 'corporate.html';
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 20
    })
  }, ctx.t.nav.corporate)));
}
function CourseHub({
  ctx
}) {
  const {
    Button
  } = window.DesignSystem_a62ddd;
  const h = HUB_T[ctx.lang];
  const [f, setF] = React.useState({
    q: '',
    cat: 'all',
    fmt: 'all',
    view: localStorage.getItem('pt-b2b-view') || 'grid'
  });
  const set = (p, quiet) => {
    const fn = () => setF(o => ({
      ...o,
      ...p
    }));
    if (p.view) localStorage.setItem('pt-b2b-view', p.view);
    if (!quiet && document.startViewTransition && !ctx.lv) {
      document.documentElement.classList.add('vt-f');
      const tr = document.startViewTransition(() => ReactDOM.flushSync(fn));
      tr.finished.finally(() => document.documentElement.classList.remove('vt-f'));
    } else fn();
  };
  const q = f.q.trim().toLowerCase();
  const list = window.B2B.courses.filter(c => (f.cat === 'all' || c.cat === f.cat) && (f.fmt === 'all' || c.format === f.fmt) && (!q || (c.ru + ' ' + c.en + ' ' + c.dru + ' ' + c.den).toLowerCase().includes(q)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HubHero, {
    ctx: ctx,
    count: window.B2B.courses.length
  }), /*#__PURE__*/React.createElement(HubFilters, {
    ctx: ctx,
    f: f,
    set: set,
    total: list.length
  }), /*#__PURE__*/React.createElement("section", {
    className: "wrap hub-list",
    "data-screen-label": "\u0412\u0441\u0435 \u043A\u0443\u0440\u0441\u044B \u2014 \u043A\u0430\u0442\u0430\u043B\u043E\u0433"
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "hub-empty"
  }, /*#__PURE__*/React.createElement("p", null, h.empty), /*#__PURE__*/React.createElement(Button, {
    variant: ctx.theme === 'dark' ? 'inverse' : 'outline',
    onClick: () => set({
      q: '',
      cat: 'all',
      fmt: 'all'
    })
  }, h.reset)) : f.view === 'grid' ? /*#__PURE__*/React.createElement("div", {
    className: "hub-grid"
  }, list.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "hub-cell rv",
    style: {
      viewTransitionName: 'cc' + c.id,
      transitionDelay: i % 3 * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement(TiltCard, {
    c: c,
    ctx: ctx,
    onOpen: ctx.openCourse
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "hub-rows"
  }, list.map(c => /*#__PURE__*/React.createElement(HubRow, {
    key: c.id,
    c: c,
    ctx: ctx,
    onOpen: ctx.openCourse
  })))), /*#__PURE__*/React.createElement(HubCta, {
    ctx: ctx
  }));
}
Object.assign(window, {
  CourseHub,
  CourseDrawer,
  HUB_T
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Hub.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Overlays.jsx
try { (() => {
function SearchOverlay({
  ctx
}) {
  const {
    Icon,
    Badge
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  const [q, setQ] = React.useState('');
  const inp = React.useRef();
  React.useEffect(() => {
    if (ctx.search) {
      setQ('');
      setTimeout(() => inp.current && inp.current.focus(), 250);
    }
    const k = e => {
      if (e.key === 'Escape') ctx.closeSearch();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [ctx.search]);
  const res = window.B2B.courses.filter(c => !q || (c.ru + ' ' + c.en + ' ' + c.dru).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: 'srch' + (ctx.search ? ' open' : ''),
    "aria-hidden": !ctx.search
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "srch-top"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 32
  }), /*#__PURE__*/React.createElement("input", {
    ref: inp,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t.search.ph,
    className: "srch-in"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ibtn",
    onClick: ctx.closeSearch,
    "aria-label": t.search.close
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: "srch-res"
  }, res.length ? res.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: "#courses",
    className: "srch-r",
    style: {
      transitionDelay: (ctx.search ? 120 + i * 40 : 0) + 'ms'
    },
    onClick: e => {
      e.preventDefault();
      ctx.closeSearch();
      if (c.page) {
        location.href = c.page;
        return;
      }
      ctx.openCourse ? ctx.openCourse(c) : (ctx.page || ctx.go)('courses');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "srch-n"
  }, c.id), /*#__PURE__*/React.createElement("span", {
    className: "srch-t"
  }, c[ctx.lang]), /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone === 'violet' ? 'violet' : c.tone === 'orange' ? 'orange' : 'green'
  }, t.cats[c.cat]), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "srch-empty"
  }, t.search.empty))));
}
function CabinetDialog({
  ctx
}) {
  const {
    Dialog,
    Input,
    Checkbox,
    Button
  } = window.DesignSystem_a62ddd;
  const c = ctx.t.cab;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: ctx.cab,
    title: c.title,
    onClose: ctx.closeCab,
    width: 480,
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => {
        ctx.closeCab();
        ctx.notify(c.ok);
      }
    }, c.login)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: c.email,
    placeholder: "name@company.ru"
  }), /*#__PURE__*/React.createElement(Input, {
    label: c.pass,
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: c.remember,
    defaultChecked: true
  })));
}
function CookieBar({
  ctx
}) {
  const {
    Button
  } = window.DesignSystem_a62ddd;
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem('pt-b2b-cookie')) return;
    const s = setTimeout(() => setShow(true), 2600);
    return () => clearTimeout(s);
  }, []);
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "cookie"
  }, /*#__PURE__*/React.createElement("p", null, ctx.t.cookie, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, ctx.t.policy.toLowerCase()), "."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "inverse",
    onClick: () => {
      localStorage.setItem('pt-b2b-cookie', '1');
      setShow(false);
    }
  }, ctx.t.cookieOk));
}
Object.assign(window, {
  SearchOverlay,
  CabinetDialog,
  CookieBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/Sections.jsx
try { (() => {
function Steps({
  ctx
}) {
  const t = ctx.t;
  const [act, setAct] = React.useState(0);
  const refs = React.useRef([]);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) setAct(Number(e.target.dataset.i));
      });
    }, {
      rootMargin: '-45% 0px -45% 0px'
    });
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, [ctx.lang]);
  return /*#__PURE__*/React.createElement("section", {
    className: "steps wrap",
    "data-screen-label": "\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement("div", {
    className: "steps-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "steps-sticky"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, t.stepsTitle), /*#__PURE__*/React.createElement("div", {
    className: "steps-num"
  }, /*#__PURE__*/React.createElement("span", {
    key: act,
    className: "steps-num-in"
  }, "0", act + 1)), /*#__PURE__*/React.createElement("div", {
    className: "steps-bar"
  }, t.steps.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i <= act ? 'on' : ''
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "steps-r"
  }, t.steps.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    "data-i": i,
    ref: el => refs.current[i] = el,
    className: 'step' + (i === act ? ' on' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-k"
  }, "0", i + 1, " / 0", t.steps.length), /*#__PURE__*/React.createElement("h3", {
    className: "step-t"
  }, a), /*#__PURE__*/React.createElement("p", {
    className: "step-d"
  }, b)))));
}
function Corporate({
  ctx
}) {
  const {
    GradientBlock,
    Input,
    Select,
    Checkbox,
    Button,
    Icon
  } = window.DesignSystem_a62ddd;
  const t = ctx.t,
    f = t.form;
  const blk = React.useRef(),
    cv = React.useRef();
  const [mail, setMail] = React.useState('');
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    const on = () => {
      if (!blk.current) return;
      const r = blk.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight * .75)));
      const k = ctx.lv ? 0 : 1 - p;
      blk.current.style.clipPath = 'inset(0 ' + k * 14 + '% 0 ' + k * 14 + '%)';
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, [ctx.lv]);
  React.useEffect(() => {
    if (!window.THREE || ctx.lv || !cv.current) return;
    const s = window.createNetwork(cv.current);
    return () => s.dispose();
  }, [ctx.lv]);
  const send = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(mail)) {
      setErr(f.err);
      return;
    }
    setErr('');
    setMail('');
    ctx.notify(t.toastSent, t.toastSentT);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "corporate",
    className: "corp",
    "data-screen-label": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    ref: blk,
    className: "corp-blk"
  }, /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "green",
    padding: 0,
    className: "corp-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "corp-txt"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 h2-inv rv"
  }, t.corpTitle), /*#__PURE__*/React.createElement("p", {
    className: "corp-lead rv"
  }, t.corpLead), /*#__PURE__*/React.createElement("ul", {
    className: "corp-list"
  }, t.corpOffers.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "rv",
    style: {
      transitionDelay: i * 90 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "corp-i"
  }, "0", i + 1), o, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 20
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "corp-3d"
  }, !ctx.lv && /*#__PURE__*/React.createElement("canvas", {
    ref: cv,
    "aria-label": "3D-\u0441\u0435\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439-\u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432"
  }))), /*#__PURE__*/React.createElement("form", {
    className: "corp-form",
    onSubmit: send
  }, /*#__PURE__*/React.createElement(Input, {
    label: f.company,
    placeholder: "\u041E\u041E\u041E \xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\xBB"
  }), /*#__PURE__*/React.createElement(Input, {
    label: f.name,
    placeholder: "\u0410\u043D\u043D\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u0430"
  }), /*#__PURE__*/React.createElement(Input, {
    label: f.email,
    placeholder: "name@company.ru",
    value: mail,
    onChange: e => setMail(e.target.value),
    error: err
  }), /*#__PURE__*/React.createElement(Select, {
    label: f.size,
    options: f.sizes
  }), /*#__PURE__*/React.createElement("div", {
    className: "corp-form-f"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: f.agree,
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, f.send))))));
}
function Counter({
  to,
  suffix
}) {
  const ref = React.useRef();
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const io = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const s = performance.now();
      const step = n => {
        const p = Math.min(1, (n - s) / 1600);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, {
      threshold: .4
    });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, v, suffix);
}
function About({
  ctx
}) {
  const {
    TriadStripe,
    ArrowLink
  } = window.DesignSystem_a62ddd;
  const t = ctx.t;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "about wrap",
    "data-screen-label": "\u041E \u0448\u043A\u043E\u043B\u0435"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-img rv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-ph"
  }), /*#__PURE__*/React.createElement("div", {
    className: "curtain"
  }), /*#__PURE__*/React.createElement(TriadStripe, {
    height: 10
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-txt"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 rv"
  }, t.aboutTitle), /*#__PURE__*/React.createElement("p", {
    className: "about-p rv"
  }, t.aboutText), /*#__PURE__*/React.createElement("div", {
    className: "counters"
  }, t.counters.map(([n, s, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cnt rv",
    style: {
      transitionDelay: i * 100 + 'ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cnt-n"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: n,
    suffix: s
  })), /*#__PURE__*/React.createElement("div", {
    className: "cnt-l"
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "rv"
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    inverse: ctx.theme === 'dark',
    onClick: e => e.preventDefault()
  }, t.orgInfo))));
}
Object.assign(window, {
  Steps,
  Corporate,
  About,
  Counter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/corp-data.js
try { (() => {
window.B2B_CORP = {
  lead: 'Программы для команд продаж промышленных и e-com компаний. Проводим диагностику, собираем курс из модулей школы под ваши задачи и обучаем сотрудников на материалах ваших сделок.',
  facts: [['от 8', 'человек в группе'], ['2–12', 'недель обучения'], ['3', 'формата проведения']],
  formats: [['На площадке Политеха', 'Очные интенсивы в аудиториях университета в Санкт-Петербурге.', 'green'], ['На территории компании', 'Преподаватели проводят занятия в вашем офисе или на производстве.', 'violet'], ['Онлайн для распределённых команд', 'Вебинары, практикумы и разбор сделок для филиалов и удалённых менеджеров.', 'orange']],
  steps: [['Заявка', 'Оставляете контакты, и в течение рабочего дня ответственный за направление связывается с вами.'], ['Диагностика', 'Интервью с руководителем продаж и разбор воронки. Фиксируем цели и метрики.'], ['Программа и договор', 'Предлагаем состав модулей, формат и график, согласуем коммерческое предложение.'], ['Обучение', 'Занятия с разбором ваших сделок. Промежуточные отчёты для руководителя.'], ['Итоги', 'Защита проектов, удостоверения о повышении квалификации и отчёт по метрикам.']],
  lead_person: {
    name: 'Екатерина Смирнова',
    role: 'Руководитель направления корпоративного обучения',
    text: 'Отвечаю за подбор программы, договор и сопровождение группы на всех этапах обучения.',
    phone: '+7 (812) 000-00-01',
    tel: '+78120000001',
    mail: 'corp-b2b@spbstu.ru',
    tg: '@polytech_b2b_corp'
  },
  contacts: [['Адрес', '195251, Санкт-Петербург, ул. Политехническая, 29', 'map-pin'], ['Телефон', '+7 (812) 000-00-00', 'phone'], ['Почта', 'b2b@spbstu.ru', 'mail'], ['Часы работы', 'Пн–Пт, 10:00–18:00', 'clock']],
  faq: [['Можно ли обучить одного сотрудника?', 'Да. Для одного-двух сотрудников подойдут открытые курсы каталога, оплату можно провести от компании по договору.'], ['Какой документ получают сотрудники?', 'Удостоверение о повышении квалификации СПбПУ установленного образца. Сведения вносятся в реестр ФИС ФРДО.'], ['Сколько времени занимает подготовка программы?', 'Обычно 1–2 недели от диагностики до согласования программы и договора.'], ['Работаете ли вы с регионами?', 'Да. Проводим обучение онлайн или выезжаем на площадку компании.']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/corp-data.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/course-data.js
try { (() => {
window.B2B_COURSE = {
  id: '01',
  title: ['Управление', '{B2B}-продажами'],
  sub: 'Комплексная программа',
  lead: 'Программа для руководителей и менеджеров, которые строят B2B-продажи в e-com: от стратегии онлайн-канала до CRM, автоматизации и AI.',
  facts: [['Формат', 'Смешанный', 'самост. работа + живые практикумы в группе'], ['Нагрузка', '70', 'около 70 часов'], ['Длительность', '8 + 2 нед.', '8 недель + 2 недели в защиту и догоняющие задания'], ['Документ', 'Сертификат', 'диплом о ДО (при наличии лицензии)']],
  spec: [['Основная модель', 'Смешанная: самост. работа + живые практикумы в группе'], ['Длительность', '8 недель + 2 недели в защиту и догоняющие задания'], ['Нагрузка', 'Около 70 часов'], ['Практика', 'Разбор реальных воронок интернет-магазинов, личных кабинетов, маркетплейсов'], ['Живые занятия', '1 занятие 90 минут + 1 практикум 90 минут в неделю'], ['Самостоятельная работа', 'Короткие видео и материалы, основной объём - практика'], ['Размер группы', '20-25 человек'], ['Вход', 'Опыт в продажах 6-12 месяцев в B2B сегменте'], ['Рабочая база', 'Своя сделка или сквозной кейс B2B e-com: от регистрации клиента до повторной закупки'], ['Обратная связь', 'Еженедельная проверка + групповые разборы'], ['Оценивание', 'Диагностика, контрольные точки, итоговая защита системы продаж'], ['Документ', 'Сертификат, диплом о ДО (при наличии лицензии)'], ['Доступ', 'Материалы по 12 месяцев; записи минимум 6 мес.'], ['Нетворкинг', 'Группы по 4-5 человек + общий чат'], ['Очный вариант', 'Отдельный 2-дневный интенсив для руководителей']],
  nav: [['format', 'Формат'], ['program', 'Программа'], ['stages', 'Этапы'], ['expect', 'Что ждёт'], ['team', 'Преподаватели'], ['doc', 'Документ'], ['reviews', 'Отзывы'], ['apply', 'Заявка']],
  modules: [{
    h: 12,
    t: 'Стратегия и архитектура B2B-продаж e-com',
    d: 'Портрет идеального онлайн-клиента (B2B-закупщик); сегментация: опт, дилеры, маркетплейсы, тендеры; карта закупочного комитета в digital-закупках; воронка: от регистрации до повторной закупки; метрики онлайн-канала: CR, LTV, частота, средний чек'
  }, {
    h: 20,
    t: 'Управление сложной сделкой',
    d: 'Поиск клиентов через digital-каналы: SEO, маркетплейсы, тендерные площадки; триггеры: регистрация, брошенная корзина, запрос КП; выявление потребностей онлайн и в переговорах; квалификация сложных сделок в e-com; план переговоров с учётом онлайн-канала.'
  }, {
    h: 10,
    t: 'Ключевые клиенты и развитие выручки',
    d: 'Управление аккаунтом в личном кабинете; карта стейкхолдеров онлайн-закупок; продления и повторные закупки через маркетплейс; квартальные встречи и план роста на 90 дней.'
  }, {
    h: 16,
    t: 'Управление e-com отделом продаж',
    d: 'Показатели онлайн-канала и опта; прогноз по каналам; разбор воронки: регистрация - заказ - повтор; наставничество и мотивация менеджеров онлайн-продаж.'
  }, {
    h: 10,
    t: 'CRM, автоматизация и AI в продажах',
    d: 'Архитектура: CRM + 1С + личный кабинет + маркетплейс; автоматические задачи и триггеры; речевая аналитика звонков и чатов; AI-агенты: рекомендации, скоринг, прогноз оттока; карта автоматизации и 3 сценария ИИ с метриками.'
  }],
  stages: [['Диагностика на входе', 'Для слушателей с опытом продаж 6-12 месяцев в B2B сегменте. Выбираете рабочую базу: свою сделку или сквозной кейс B2B e-com.', 'старт'], ['Модули 1–5', 'Каждую неделю 1 занятие 90 минут + 1 практикум 90 минут. Короткие видео и материалы, основной объём - практика.', '8 недель'], ['Контрольные точки', 'Еженедельная проверка заданий и групповые разборы. Работа в группах по 4-5 человек.', 'каждую неделю'], ['Защита', 'Итоговая защита системы продаж и догоняющие задания. Сертификат, диплом о ДО (при наличии лицензии).', '2 недели']],
  expect: [['deals', 'Разбор реальных воронок', 'Практика на воронках интернет-магазинов, личных кабинетов и маркетплейсов.'], ['experts', 'Живые занятия каждую неделю', '1 занятие 90 минут + 1 практикум 90 минут в неделю в группе 20-25 человек.'], ['map', 'Своя сделка как рабочая база', 'Сквозной кейс B2B e-com: от регистрации клиента до повторной закупки.'], ['ai', 'Еженедельная обратная связь', 'Проверка заданий каждую неделю + групповые разборы.'], ['network', 'Нетворкинг', 'Работа в группах по 4-5 человек + общий чат потока.'], ['growth', 'Доступ после обучения', 'Материалы доступны 12 месяцев, записи занятий — минимум 6 месяцев.']],
  team: [['Анна Соколова', 'Модуль 1', 'Директор по e-com, промышленный дистрибьютор', 'tA'], ['Игорь Белов', 'Модуль 2', 'Руководитель направления сложных продаж', 'tB'], ['Мария Орлова', 'Модули 3–4', 'Коммерческий директор, производство оборудования', 'tC'], ['Дмитрий Ким', 'Модуль 5', 'Архитектор CRM и AI-решений для продаж', 'tD']],
  reviews: [['Елена Р.', 'Руководитель отдела продаж, производство упаковки', 'Самое ценное — разбор нашей воронки. После модуля про сложные сделки переписали скрипты квалификации и сократили цикл сделки.'], ['Павел М.', 'Коммерческий директор, дистрибуция', 'Программа хорошо связывает маркетплейсы, тендеры и прямые продажи. Карту автоматизации забрал в работу без изменений.'], ['Ольга Т.', 'Аккаунт-менеджер, промышленное оборудование', 'Квартальные встречи с клиентами теперь проводим по шаблону из курса. План роста на 90 дней — понятный инструмент.'], ['Сергей Н.', 'Руководитель e-com, химическая промышленность', 'Модуль про AI получился практичным: попробовали скоринг на своих данных и запустили пилот.']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/course-data.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/course3d.js
try { (() => {
(function () {
  const C = {
    green: 0x37b34a,
    mid: 0x56975b,
    dark: 0x244128,
    violet: 0x724897,
    orange: 0xdb4928
  };
  function base(canvas, fov) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 300);
    const fit = () => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    fit();
    let vis = true;
    const io = new IntersectionObserver(e => {
      vis = e[0].isIntersecting;
    });
    io.observe(canvas);
    return {
      renderer,
      scene,
      camera,
      isVis: () => vis,
      stop() {
        ro.disconnect();
        io.disconnect();
        renderer.dispose();
      }
    };
  }
  const ease = x => 1 - Math.pow(1 - x, 3);
  const m4 = new THREE.Matrix4(),
    q = new THREE.Quaternion(),
    e = new THREE.Euler(),
    v = new THREE.Vector3(),
    sc = new THREE.Vector3();

  // Hero: 5 columns of cubes, height ∝ module hours
  window.createTower = function (canvas, hours, onHover) {
    const b = base(canvas, 32);
    const {
      renderer,
      scene,
      camera
    } = b;
    camera.position.set(0, 6, 34);
    camera.lookAt(0, 4.5, 0);
    scene.add(new THREE.AmbientLight(0xffffff, .6));
    const d = new THREE.DirectionalLight(0xffffff, .9);
    d.position.set(10, 18, 14);
    scene.add(d);
    const d2 = new THREE.DirectionalLight(0xffffff, .3);
    d2.position.set(-10, -4, -8);
    scene.add(d2);
    const pal = [C.green, C.mid, C.violet, C.orange, C.dark];
    const items = [];
    hours.forEach((hh, m) => {
      const n = Math.round(hh / 2);
      const x0 = (m - (hours.length - 1) / 2) * 2.6;
      for (let y = 0; y < n; y++) for (let a = 0; a < 2; a++) for (let c = 0; c < 2; c++) items.push({
        m,
        x: x0 + (a - .5) * 1.05,
        y: y * 1.05 + .5,
        z: (c - .5) * 1.05
      });
    });
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(.92, .92, .92), new THREE.MeshStandardMaterial({
      roughness: .45,
      metalness: .05
    }), items.length);
    const col = new THREE.Color();
    items.forEach((it, k) => {
      col.setHex(pal[it.m]);
      mesh.setColorAt(k, col);
      it.sx = (Math.random() - .5) * 60;
      it.sy = 20 + Math.random() * 30;
      it.sz = (Math.random() - .5) * 30;
      it.dl = .2 + it.m * .18 + it.y * .03 + Math.random() * .25;
    });
    const g = new THREE.Group();
    g.add(mesh);
    scene.add(g);
    const ray = new THREE.Raycaster(),
      ptr = new THREE.Vector2();
    let tx = 0,
      ty = 0,
      mx = 0,
      my = 0,
      inside = false,
      hov = -1,
      start = null,
      raf;
    const lift = hours.map(() => 0);
    const onMove = ev => {
      const r = canvas.getBoundingClientRect();
      tx = (ev.clientX - r.left) / r.width * 2 - 1;
      ty = (ev.clientY - r.top) / r.height * 2 - 1;
      inside = Math.abs(tx) < 1 && Math.abs(ty) < 1;
      ptr.set(tx, -ty);
    };
    window.addEventListener('pointermove', onMove, {
      passive: true
    });
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!b.isVis()) return;
      if (start === null) start = now;
      const t = (now - start) / 1000;
      mx += (Math.max(-1, Math.min(1, tx)) - mx) * .05;
      my += (Math.max(-1, Math.min(1, ty)) - my) * .05;
      g.rotation.y = -.5 + Math.sin(t * .25) * .25 + mx * .5;
      g.rotation.x = .12 + my * .08;
      let h = -1;
      if (inside && t > 2) {
        ray.setFromCamera(ptr, camera);
        const hit = ray.intersectObject(mesh)[0];
        if (hit && hit.instanceId != null) h = items[hit.instanceId].m;
      }
      if (h !== hov) {
        hov = h;
        onHover && onHover(h);
      }
      lift.forEach((l, i) => lift[i] += ((i === hov ? 1 : 0) - l) * .12);
      for (let k = 0; k < items.length; k++) {
        const it = items[k];
        const p = ease(Math.min(1, Math.max(0, (t - it.dl) / 1.4)));
        const L = lift[it.m];
        v.set(it.sx + (it.x - it.sx) * p, it.sy + (it.y * (1 + L * .12) + L * .6 + Math.sin(t * 1.4 + it.m + it.y * .3) * .05 - it.sy) * p, it.sz + (it.z - it.sz) * p);
        e.set((1 - p) * 2.5, (1 - p) * 3, 0);
        q.setFromEuler(e);
        const s = 1 - L * .08;
        sc.set(s, s, s);
        m4.compose(v, q, sc);
        mesh.setMatrixAt(k, m4);
      }
      mesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    return {
      dispose() {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        b.stop();
      }
    };
  };

  // Small white objects for "what to expect" tiles
  window.createMini = function (canvas, kind) {
    const b = base(canvas, 35);
    const {
      renderer,
      scene,
      camera
    } = b;
    camera.position.set(0, 0, 12);
    scene.add(new THREE.AmbientLight(0xffffff, .78));
    const d = new THREE.DirectionalLight(0xffffff, .7);
    d.position.set(5, 8, 9);
    scene.add(d);
    const W = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: .5
    });
    const LW = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: .55
    });
    const g = new THREE.Group();
    scene.add(g);
    let tick = () => {};
    if (kind === 'deals') {
      const n = 7;
      const ps = [];
      for (let i = 0; i < n; i++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(3.2, .22, 4.2), W);
        g.add(m);
        ps.push(m);
      }
      tick = t => ps.forEach((m, i) => {
        const k = (Math.sin(t * 1.2 - i * .5) + 1) / 2;
        m.position.y = (i - n / 2) * .42 + k * .25;
        m.rotation.y = i * .08 + k * .25;
        m.position.x = k * .3;
      });
      g.rotation.x = .5;
    } else if (kind === 'experts') {
      const o = new THREE.Mesh(new THREE.IcosahedronGeometry(2.9, 0), W);
      o.material = W.clone();
      o.material.wireframe = true;
      const i = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 0), W);
      g.add(o, i);
      tick = t => {
        o.rotation.set(t * .3, t * .4, 0);
        i.rotation.set(-t * .6, -t * .5, 0);
      };
    } else if (kind === 'ai') {
      const N = 420,
        pos = new Float32Array(N * 3);
      for (let k = 0; k < N; k++) {
        const y = 1 - 2 * (k + .5) / N,
          r = Math.sqrt(1 - y * y),
          th = k * 2.39996;
        pos.set([Math.cos(th) * r * 3, y * 3, Math.sin(th) * r * 3], k * 3);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const base0 = pos.slice();
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({
        color: 0xffffff,
        size: .11
      }));
      const core = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), W);
      g.add(pts, core);
      tick = t => {
        for (let k = 0; k < N; k++) {
          const f = 1 + Math.sin(t * 2 + base0[k * 3 + 1] * 1.6) * .07;
          pos[k * 3] = base0[k * 3] * f;
          pos[k * 3 + 1] = base0[k * 3 + 1] * f;
          pos[k * 3 + 2] = base0[k * 3 + 2] * f;
        }
        geo.attributes.position.needsUpdate = true;
        pts.rotation.y = t * .3;
        core.rotation.set(t * .7, t * .9, 0);
      };
    } else if (kind === 'map') {
      const n = 6,
        cs = [];
      for (let a = 0; a < n; a++) for (let c = 0; c < n; c++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(.72, .72, .72), W);
        m.userData = {
          a: a - (n - 1) / 2,
          c: c - (n - 1) / 2
        };
        g.add(m);
        cs.push(m);
      }
      g.rotation.set(.75, .6, 0);
      tick = t => cs.forEach(m => {
        const {
          a,
          c
        } = m.userData;
        m.position.set(a * .92, Math.sin(t * 2 - Math.hypot(a, c) * .9) * .45, c * .92);
      });
    } else if (kind === 'network') {
      const P = 14,
        pts = [];
      for (let k = 0; k < P; k++) {
        const y = 1 - 2 * (k + .5) / P,
          r = Math.sqrt(1 - y * y),
          th = k * 2.39996;
        pts.push(new THREE.Vector3(Math.cos(th) * r * 3, y * 3, Math.sin(th) * r * 3));
      }
      pts.forEach(p => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(.42, .42, .42), W);
        m.position.copy(p);
        g.add(m);
      });
      const ar = [];
      pts.forEach((p, i) => pts.forEach((o, j) => {
        if (i < j && p.distanceTo(o) < 3.1) ar.push(p.x, p.y, p.z, o.x, o.y, o.z);
      }));
      const lg = new THREE.BufferGeometry();
      lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ar), 3));
      g.add(new THREE.LineSegments(lg, LW));
      tick = t => {
        g.rotation.set(Math.sin(t * .4) * .3, t * .35, 0);
      };
    } else if (kind === 'growth') {
      const n = 6,
        bs = [];
      for (let i = 0; i < n; i++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(.8, 1, .8), W);
        m.position.x = (i - (n - 1) / 2) * 1.05;
        g.add(m);
        bs.push(m);
      }
      g.rotation.set(.35, -.5, 0);
      tick = t => bs.forEach((m, i) => {
        const p = Math.min(1, Math.max(0, (t % 5 - i * .18) / 1.2));
        const h = .4 + (i + 1) * .75 * ease(p);
        m.scale.y = h;
        m.position.y = h / 2 - 2.4;
      });
    }
    let hover = 0,
      hv = 0,
      start = null,
      raf;
    const enter = () => hover = 1,
      leave = () => hover = 0;
    const host = canvas.closest('[data-mini-host]') || canvas;
    host.addEventListener('pointerenter', enter);
    host.addEventListener('pointerleave', leave);
    let tt = 0,
      last = null;
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!b.isVis()) {
        last = now;
        return;
      }
      const dt = last === null ? 0 : Math.min(.05, (now - last) / 1000);
      last = now;
      hv += (hover - hv) * .08;
      tt += dt * (1 + hv * 1.6);
      g.scale.setScalar(1 + hv * .08);
      tick(tt);
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    return {
      dispose() {
        cancelAnimationFrame(raf);
        host.removeEventListener('pointerenter', enter);
        host.removeEventListener('pointerleave', leave);
        b.stop();
      }
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/course3d.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/data.js
try { (() => {
window.B2B = {
  nav: ['home', 'courses', 'corporate', 'about', 'contacts'],
  PI: '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094',
  courses: [{
    id: '01',
    cat: 'team',
    tone: 'green',
    flagship: true,
    page: 'course-b2b-complex.html',
    ru: 'Управление B2B-продажами — комплексная программа',
    en: 'B2B sales management — comprehensive programme',
    dru: 'Смешанная модель: самостоятельная работа + живые практикумы в группе. 8 недель + 2 недели на защиту, около 70 часов.',
    den: 'Blended: self-study + live group workshops. 8 weeks + 2 weeks for defence, about 70 hours.',
    weeks: 10,
    hours: 70,
    format: 'blended',
    start: '12/01/27'
  }, {
    id: '02',
    cat: 'strategy',
    tone: 'green',
    ru: 'Стратегия B2B-продаж',
    en: 'B2B sales strategy',
    dru: 'Сегментация рынка, ценностное предложение и воронка для сложных сделок с длинным циклом.',
    den: 'Market segmentation, value proposition and a funnel for long-cycle complex deals.',
    weeks: 6,
    format: 'online',
    start: '02/11/26'
  }, {
    id: '03',
    cat: 'clients',
    tone: 'orange',
    ru: 'Управление ключевыми клиентами (KAM)',
    en: 'Key account management (KAM)',
    dru: 'Планирование по аккаунтам, карта влияния, развитие и удержание крупных заказчиков.',
    den: 'Account planning, stakeholder maps, growing and retaining major customers.',
    weeks: 8,
    format: 'offline',
    start: '16/11/26'
  }, {
    id: '04',
    cat: 'clients',
    tone: 'orange',
    ru: 'Сложные переговоры в B2B',
    en: 'Complex B2B negotiations',
    dru: 'Подготовка позиции, работа с закупками и комитетами, торг по цене и условиям.',
    den: 'Positioning, procurement and buying committees, price and terms bargaining.',
    weeks: 4,
    format: 'offline',
    start: '09/11/26'
  }, {
    id: '05',
    cat: 'strategy',
    tone: 'green',
    ru: 'Тендерные продажи и закупки',
    en: 'Tender sales and procurement',
    dru: '44-ФЗ и 223-ФЗ, корпоративные закупки, подготовка конкурентной заявки.',
    den: 'Public and corporate procurement, building a winning bid.',
    weeks: 5,
    format: 'online',
    start: '23/11/26'
  }, {
    id: '06',
    cat: 'analytics',
    tone: 'violet',
    ru: 'CRM, воронка и аналитика продаж',
    en: 'CRM, funnel and sales analytics',
    dru: 'Метрики отдела, прогнозирование выручки, дашборды и автоматизация в CRM.',
    den: 'Team metrics, revenue forecasting, dashboards and CRM automation.',
    weeks: 6,
    format: 'online',
    start: '02/11/26'
  }, {
    id: '07',
    cat: 'strategy',
    tone: 'green',
    ru: 'Ценообразование и коммерческие предложения',
    en: 'Pricing and commercial proposals',
    dru: 'Ценовые модели, скидочная политика и КП, которое защищает маржу.',
    den: 'Pricing models, discount policy and proposals that protect margin.',
    weeks: 4,
    format: 'blended',
    start: '30/11/26'
  }, {
    id: '08',
    cat: 'team',
    tone: 'greenDark',
    ru: 'Руководитель отдела продаж',
    en: 'Head of sales',
    dru: 'Найм, адаптация, мотивация и операционное управление командой продаж.',
    den: 'Hiring, onboarding, motivation and day-to-day management of a sales team.',
    weeks: 16,
    format: 'blended',
    start: '07/12/26'
  }, {
    id: '09',
    cat: 'clients',
    tone: 'orange',
    ru: 'Продажи технологических решений',
    en: 'Selling technology solutions',
    dru: 'Консультативные продажи инженерных и ИТ-решений, пилоты и ТЭО для заказчика.',
    den: 'Consultative selling of engineering and IT solutions, pilots and business cases.',
    weeks: 8,
    format: 'offline',
    start: '14/12/26'
  }],
  i18n: {
    ru: {
      school1: 'Школа управления',
      school2: 'B2B-продажами',
      nav: {
        home: 'Главная',
        courses: 'Все курсы',
        corporate: 'Корпоративное обучение',
        about: 'О школе',
        contacts: 'Контакты'
      },
      tools: {
        search: 'Поиск',
        lv: 'Версия для слабовидящих',
        theme: 'Сменить тему',
        lang: 'Язык: English',
        cabinet: 'Личный кабинет',
        menu: 'Меню'
      },
      eyebrow: 'Политех · Дополнительное профессиональное образование',
      h1: ['Управление', '{B2B}-', 'продажами'],
      lead: 'Программы повышения квалификации для руководителей отделов продаж, аккаунт-менеджеров и коммерческих директоров промышленных и технологических компаний.',
      pick: 'Выбрать курс',
      hint: 'Наведите курсор на модель',
      facts: [['Ближайший старт', '02/11/26'], ['9 программ', 'от 4 до 16 недель'], ['Очно и онлайн', 'Политехническая, 29'], ['Удостоверение', 'о повышении квалификации СПбПУ']],
      marquee: ['Стратегия продаж', 'Ключевые клиенты', 'Сложные переговоры', 'Тендеры и закупки', 'CRM и аналитика', 'Ценообразование', 'Управление командой'],
      cats: {
        all: 'Все',
        strategy: 'Стратегия',
        clients: 'Клиенты и переговоры',
        analytics: 'CRM и аналитика',
        team: 'Команда'
      },
      formats: {
        online: 'Онлайн',
        offline: 'Очно',
        blended: 'Смешанный'
      },
      weeks: 'нед.',
      start: 'Старт',
      more: 'Подробнее',
      scrollHint: 'Прокрутите, чтобы листать',
      stepsTitle: 'Как проходит обучение',
      steps: [['Диагностика', 'Оцениваем воронку, роли и метрики вашего отдела продаж и собираем индивидуальный маршрут.'], ['Модули', 'Лекции и практикумы с преподавателями Политеха и практиками из промышленных компаний.'], ['Кейсы', 'Разбираем реальные сделки слушателей: от квалификации лида до подписания контракта.'], ['Итоговый проект', 'Защита проекта перед экспертной комиссией и удостоверение о повышении квалификации СПбПУ.']],
      corpTitle: 'Корпоративное обучение',
      corpLead: 'Соберём программу под задачи компании и обучим всю команду продаж — на площадке Политеха или у вас.',
      corpOffers: ['Программы под задачи компании', 'Обучение на материалах ваших сделок', 'Оценка и развитие команды продаж'],
      form: {
        company: 'Компания',
        name: 'Контактное лицо',
        email: 'Электронная почта',
        size: 'Размер команды',
        sizes: ['до 10 человек', '10–50 человек', '50–200 человек', 'более 200'],
        agree: 'Согласен с политикой обработки персональных данных',
        send: 'Оставить заявку',
        err: 'Укажите корректный адрес'
      },
      aboutTitle: 'О школе',
      aboutText: 'Школа управления B2B-продажами — направление дополнительного профессионального образования Санкт-Петербургского политехнического университета Петра Великого. Мы соединяем инженерную культуру Политеха и практику продаж промышленных компаний.',
      counters: [[1899, '', 'год основания Политеха'], [9, '', 'программ школы'], [40, '+', 'преподавателей-практиков']],
      orgInfo: 'Сведения об образовательной организации',
      policy: 'Политика обработки персональных данных',
      foot: {
        nav: 'Навигация',
        contacts: 'Контакты',
        students: 'Слушателям',
        social: 'Мы в соцсетях',
        hours: 'Пн–Пт, 10:00–18:00',
        rights: 'Все права защищены.',
        slogan: 'Мыслить будущим',
        cta: 'Подобрать программу'
      },
      toastSent: 'Заявка отправлена',
      toastSentT: 'Менеджер свяжется с вами в течение рабочего дня',
      search: {
        ph: 'Найти курс',
        empty: 'Ничего не найдено',
        close: 'Закрыть'
      },
      cab: {
        title: 'Личный кабинет',
        email: 'Электронная почта',
        pass: 'Пароль',
        remember: 'Запомнить меня',
        login: 'Войти',
        ok: 'Вы вошли в кабинет'
      },
      cookie: 'Мы используем cookie и обрабатываем данные о посещениях в соответствии с ',
      cookieOk: 'Принять'
    },
    en: {
      school1: 'School of',
      school2: 'B2B Sales Management',
      nav: {
        home: 'Home',
        courses: 'All courses',
        corporate: 'Corporate training',
        about: 'About',
        contacts: 'Contacts'
      },
      tools: {
        search: 'Search',
        lv: 'Low-vision mode',
        theme: 'Switch theme',
        lang: 'Язык: русский',
        cabinet: 'My account',
        menu: 'Menu'
      },
      eyebrow: 'Polytech · Continuing professional education',
      h1: ['{B2B} sales', 'manage-', 'ment'],
      lead: 'Professional development programmes for heads of sales, account managers and commercial directors of industrial and technology companies.',
      pick: 'Choose a course',
      hint: 'Hover over the model',
      facts: [['Next intake', '02/11/26'], ['9 programmes', '4 to 16 weeks'], ['On campus & online', '29 Polytechnicheskaya St'], ['Certificate', 'of professional development, SPbPU']],
      marquee: ['Sales strategy', 'Key accounts', 'Complex negotiations', 'Tenders', 'CRM & analytics', 'Pricing', 'Team management'],
      cats: {
        all: 'All',
        strategy: 'Strategy',
        clients: 'Clients & negotiations',
        analytics: 'CRM & analytics',
        team: 'Team'
      },
      formats: {
        online: 'Online',
        offline: 'On campus',
        blended: 'Blended'
      },
      weeks: 'wks',
      start: 'Starts',
      more: 'Details',
      scrollHint: 'Scroll to browse',
      stepsTitle: 'How it works',
      steps: [['Assessment', 'We review your funnel, roles and metrics and build an individual track.'], ['Modules', 'Lectures and workshops with Polytech faculty and industry practitioners.'], ['Cases', 'We work through participants’ real deals, from lead qualification to signed contract.'], ['Final project', 'Project defence before an expert panel and an SPbPU professional development certificate.']],
      corpTitle: 'Corporate training',
      corpLead: 'We design a programme around your goals and train the whole sales team — on campus or at your site.',
      corpOffers: ['Programmes tailored to your company', 'Training on your own deals', 'Sales team assessment and development'],
      form: {
        company: 'Company',
        name: 'Contact person',
        email: 'Email',
        size: 'Team size',
        sizes: ['up to 10', '10–50', '50–200', '200+'],
        agree: 'I agree to the personal data policy',
        send: 'Send request',
        err: 'Enter a valid email'
      },
      aboutTitle: 'About the school',
      aboutText: 'The School of B2B Sales Management is a continuing education track of Peter the Great St. Petersburg Polytechnic University, joining Polytech’s engineering culture with the sales practice of industrial companies.',
      counters: [[1899, '', 'Polytech founded'], [9, '', 'programmes'], [40, '+', 'practitioner faculty']],
      orgInfo: 'About the educational organisation',
      policy: 'Personal data policy',
      foot: {
        nav: 'Navigation',
        contacts: 'Contacts',
        students: 'Students',
        social: 'Social',
        hours: 'Mon–Fri, 10:00–18:00',
        rights: 'All rights reserved.',
        slogan: 'Think the future',
        cta: 'Find a programme'
      },
      toastSent: 'Request sent',
      toastSentT: 'A manager will contact you within one business day',
      search: {
        ph: 'Find a course',
        empty: 'Nothing found',
        close: 'Close'
      },
      cab: {
        title: 'My account',
        email: 'Email',
        pass: 'Password',
        remember: 'Remember me',
        login: 'Sign in',
        ok: 'Signed in'
      },
      cookie: 'We use cookies and process visit data in accordance with the ',
      cookieOk: 'Accept'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/data.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/b2b-school/scene.js
try { (() => {
(function () {
  const C = {
    green: 0x37b34a,
    mid: 0x56975b,
    dark: 0x244128,
    violet: 0x724897,
    vdark: 0x373062,
    orange: 0xdb4928,
    olight: 0xf39869
  };
  function base(canvas, fov) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 300);
    const fit = () => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    fit();
    let vis = true;
    const io = new IntersectionObserver(e => {
      vis = e[0].isIntersecting;
    });
    io.observe(canvas);
    return {
      renderer,
      scene,
      camera,
      isVis: () => vis,
      stop() {
        ro.disconnect();
        io.disconnect();
        renderer.dispose();
      }
    };
  }
  const ease = x => 1 - Math.pow(1 - x, 3);

  // Hero: a sales funnel built from square brand blocks
  window.createFunnel = function (canvas) {
    const b = base(canvas, 30);
    const {
      renderer,
      scene,
      camera
    } = b;
    camera.position.set(0, 3, 40);
    camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0xffffff, .62));
    const d1 = new THREE.DirectionalLight(0xffffff, .95);
    d1.position.set(8, 16, 12);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, .28);
    d2.position.set(-12, -6, -8);
    scene.add(d2);
    const L = 7,
      items = [];
    const pal = [[C.green, C.mid], [C.green, C.green, C.mid], [C.mid, C.green], [C.mid, C.dark], [C.violet, C.vdark], [C.vdark, C.violet], [C.orange, C.olight], [C.olight]];
    for (let i = 0; i <= L; i++) {
      const n = L - i,
        y = (L / 2 - i) * 1.18;
      if (!n) {
        items.push({
          x: 0,
          y,
          z: 0,
          l: i
        });
        continue;
      }
      for (let a = -n; a <= n; a++) for (let c = -n; c <= n; c++) {
        if (Math.abs(a) !== n && Math.abs(c) !== n) continue;
        items.push({
          x: a,
          y,
          z: c,
          l: i
        });
      }
    }
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(.84, .84, .84), new THREE.MeshStandardMaterial({
      roughness: .48,
      metalness: .06
    }), items.length);
    const col = new THREE.Color();
    items.forEach((it, k) => {
      const p = pal[it.l];
      col.setHex(p[k % p.length]);
      mesh.setColorAt(k, col);
      it.sx = (Math.random() - .5) * 70;
      it.sy = (Math.random() - .5) * 44;
      it.sz = (Math.random() - .5) * 40;
      it.lift = 0;
      it.ang = Math.atan2(it.z, it.x);
      it.dl = .15 + Math.random() * .5 + it.l * .07;
    });
    const g = new THREE.Group();
    g.add(mesh);
    scene.add(g);
    const m4 = new THREE.Matrix4(),
      q = new THREE.Quaternion(),
      e = new THREE.Euler(),
      v = new THREE.Vector3(),
      s1 = new THREE.Vector3(1, 1, 1);
    const ray = new THREE.Raycaster(),
      ptr = new THREE.Vector2();
    let mx = 0,
      my = 0,
      tx = 0,
      ty = 0,
      scroll = 0,
      inside = false,
      start = null,
      raf;
    const onMove = ev => {
      const r = canvas.getBoundingClientRect();
      tx = (ev.clientX - r.left) / r.width * 2 - 1;
      ty = (ev.clientY - r.top) / r.height * 2 - 1;
      inside = Math.abs(tx) < 1 && Math.abs(ty) < 1;
      ptr.set(tx, -ty);
    };
    window.addEventListener('pointermove', onMove, {
      passive: true
    });
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!b.isVis()) return;
      if (start === null) start = now;
      const t = (now - start) / 1000;
      mx += (Math.max(-1, Math.min(1, tx)) - mx) * .05;
      my += (Math.max(-1, Math.min(1, ty)) - my) * .05;
      g.rotation.y = t * .16 + mx * .55;
      g.rotation.x = .4 + my * .12 + scroll * .55;
      g.position.y = -scroll * 4;
      if (inside) {
        ray.setFromCamera(ptr, camera);
        const h = ray.intersectObject(mesh)[0];
        if (h && h.instanceId != null) {
          items[h.instanceId].lift = 1;
        }
      }
      for (let k = 0; k < items.length; k++) {
        const it = items[k];
        const p = ease(Math.min(1, Math.max(0, (t - it.dl) / 1.7)));
        it.lift *= .955;
        const w = Math.sin(t * 1.5 + it.ang * 2 + it.l * .7) * .16,
          o = 1 + it.lift * .22;
        v.set(it.sx + (it.x * o - it.sx) * p, it.sy + (it.y + w + it.lift * .9 - it.sy) * p, it.sz + (it.z * o - it.sz) * p);
        e.set((1 - p) * 3 + it.lift * .5, (1 - p) * 2.4, 0);
        q.setFromEuler(e);
        m4.compose(v, q, s1);
        mesh.setMatrixAt(k, m4);
      }
      mesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    return {
      setScroll(p) {
        scroll = p;
      },
      dispose() {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        b.stop();
      }
    };
  };

  // Corporate: white network of companies (only white graphics on brand blocks)
  window.createNetwork = function (canvas) {
    const b = base(canvas, 40);
    const {
      renderer,
      scene,
      camera
    } = b;
    camera.position.set(0, 0, 30);
    const N = 54,
      pts = [];
    for (let i = 0; i < N; i++) {
      const u = Math.random() * 2 - 1,
        th = Math.random() * Math.PI * 2,
        r = 7 + Math.random() * 4.5,
        s = Math.sqrt(1 - u * u);
      pts.push(new THREE.Vector3(r * s * Math.cos(th), r * u * .8, r * s * Math.sin(th)));
    }
    const nodes = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
      color: 0xffffff
    }), N);
    const m4 = new THREE.Matrix4(),
      q = new THREE.Quaternion(),
      sc = new THREE.Vector3();
    pts.forEach((p, i) => {
      const s = i % 9 === 0 ? .7 : .32;
      sc.set(s, s, s);
      m4.compose(p, q, sc);
      nodes.setMatrixAt(i, m4);
    });
    const edges = [];
    pts.forEach((p, i) => {
      pts.map((o, j) => [j, p.distanceTo(o)]).filter(x => x[0] !== i).sort((a, b) => a[1] - b[1]).slice(0, 3).forEach(([j]) => {
        if (i < j) edges.push([i, j]);
      });
    });
    const pos = new Float32Array(edges.length * 6);
    edges.forEach(([i, j], k) => {
      pos.set([pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z], k * 6);
    });
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: .32
    }));
    const P = 16,
      packets = new THREE.InstancedMesh(new THREE.BoxGeometry(.22, .22, .22), new THREE.MeshBasicMaterial({
        color: 0xffffff
      }), P);
    const pk = [...Array(P)].map(() => ({
      e: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      sp: .25 + Math.random() * .5
    }));
    const g = new THREE.Group();
    g.add(nodes, lines, packets);
    scene.add(g);
    let mx = 0,
      tx = 0,
      my = 0,
      ty = 0,
      raf,
      last = null;
    const v = new THREE.Vector3(),
      one = new THREE.Vector3(1, 1, 1);
    const onMove = ev => {
      tx = ev.clientX / window.innerWidth * 2 - 1;
      ty = ev.clientY / window.innerHeight * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, {
      passive: true
    });
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!b.isVis()) {
        last = now;
        return;
      }
      const dt = last === null ? 0 : Math.min(.05, (now - last) / 1000);
      last = now;
      mx += (tx - mx) * .04;
      my += (ty - my) * .04;
      g.rotation.y += dt * .12;
      g.rotation.x = my * .25;
      g.position.x = mx * 1.2;
      pk.forEach((p, i) => {
        p.t += dt * p.sp;
        if (p.t > 1) {
          p.t = 0;
          p.e = Math.floor(Math.random() * edges.length);
        }
        const [a, c] = edges[p.e];
        v.lerpVectors(pts[a], pts[c], p.t);
        m4.compose(v, q, one);
        packets.setMatrixAt(i, m4);
      });
      packets.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    return {
      dispose() {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onMove);
        b.stop();
      }
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/b2b-school/scene.js", error: String((e && e.message) || e) }); }

// ui_kits/course-site/CourseFooter.jsx
try { (() => {
function SiteFooter() {
  const {
    Logo,
    TriadStripe,
    ArrowLink
  } = window.DesignSystem_a62ddd;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#000',
      color: '#fff',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(TriadStripe, {
    height: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '48px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    version: "full",
    tone: "white",
    height: 64,
    assetBase: "../../assets/"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "195251, \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433,", /*#__PURE__*/React.createElement("br", null), "\u0443\u043B. \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F, 29", /*#__PURE__*/React.createElement("br", null), "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    inverse: true
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430_\u043A\u0443\u0440\u0441\u0430.pdf"), /*#__PURE__*/React.createElement(ArrowLink, {
    inverse: true
  }, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435_\u043E_\u043A\u0443\u0440\u0441\u0435.pdf"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #454343'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '16px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\u0421\u041F\u0431\u041F\u0423 2025"), /*#__PURE__*/React.createElement("span", null, "\u041C\u044B\u0441\u043B\u0438\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0438\u043C"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/CourseFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/CourseHeader.jsx
try { (() => {
function SiteHeader({
  page,
  go,
  onEnroll
}) {
  const {
    Logo,
    NavLink,
    Button
  } = window.DesignSystem_a62ddd;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid #000',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 48px',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    version: "short",
    height: 30,
    assetBase: "../../assets/"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    active: page === 'home',
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, "\u041E \u043A\u0443\u0440\u0441\u0435"), /*#__PURE__*/React.createElement(NavLink, {
    active: page === 'program',
    onClick: e => {
      e.preventDefault();
      go('program');
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"), /*#__PURE__*/React.createElement(NavLink, {
    active: page === 'lesson',
    onClick: e => {
      e.preventDefault();
      go('lesson');
    }
  }, "\u041C\u043E\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onEnroll
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/CourseHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/EnrollDialog.jsx
try { (() => {
function EnrollDialog({
  open,
  onClose,
  onDone
}) {
  const {
    Dialog,
    Input,
    Select,
    RadioGroup,
    Checkbox,
    Button
  } = window.DesignSystem_a62ddd;
  const [mail, setMail] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = () => {
    if (!/.+@.+\..+/.test(mail)) {
      setErr('Проверьте адрес почты');
      return;
    }
    setErr('');
    onDone();
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043A\u0443\u0440\u0441",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/React.createElement(Button, {
      onClick: submit
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F",
    placeholder: "\u0410\u043D\u043D\u0430 \u0418\u0432\u0430\u043D\u043E\u0432\u0430"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    placeholder: "name@edu.spbstu.ru",
    value: mail,
    onChange: e => setMail(e.target.value),
    error: err,
    hint: "\u041D\u0430 \u043D\u0435\u0451 \u043F\u0440\u0438\u0434\u0451\u0442 \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0443\u0440\u0441"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u0418\u043D\u0441\u0442\u0438\u0442\u0443\u0442",
    options: ['Институт компьютерных наук и кибербезопасности', 'Физико-механический институт', 'Институт энергетики', 'Другое']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      marginBottom: 10
    }
  }, "\u0424\u043E\u0440\u043C\u0430\u0442"), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "fmt",
    options: ['Очно', 'Онлайн'],
    defaultValue: "\u041E\u0447\u043D\u043E",
    direction: "row"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    defaultChecked: true
  })));
}
window.EnrollDialog = EnrollDialog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/EnrollDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go,
  onEnroll
}) {
  const {
    Button,
    Icon,
    GradientBlock,
    Accordion,
    Card,
    Badge,
    ArrowLink
  } = window.DesignSystem_a62ddd;
  const C = window.COURSE;
  const H = t => /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 32px',
      font: '800 var(--fs-h2)/var(--lh-h2) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, t);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '48px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,1fr)',
      gridTemplateRows: 'repeat(6,72px)',
      background: 'var(--grad-poster-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/6',
      gridRow: '1/3',
      padding: '32px 32px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.3 var(--font-sans)',
      color: 'var(--pt-violet)',
      textTransform: 'uppercase'
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u0443\u0440\u0441 \xB7 ", C.institute), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 40px/0.95 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "\u041A\u0443\u0440\u0441", /*#__PURE__*/React.createElement("br", null), "2025")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/8',
      gridRow: '3/7',
      background: 'url(../../assets/photo-lecture.jpg) center 30%/cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8/11',
      gridRow: '1/4',
      background: 'var(--grad-orange)',
      padding: 24,
      font: '800 64px/0.95 var(--font-display)'
    }
  }, C.start[0], /*#__PURE__*/React.createElement("br", null), C.start[1], /*#__PURE__*/React.createElement("br", null), C.start[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '11/13',
      gridRow: '1/3',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '800 36px var(--font-display)'
    }
  }, C.time), /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "green",
    padding: 32,
    style: {
      gridColumn: '6/13',
      gridRow: '4/7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 40px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, C.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: onEnroll,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      borderColor: '#fff',
      color: '#fff'
    },
    onClick: () => go('program')
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '11/13',
      gridRow: '3/4',
      background: 'var(--grad-violet)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderBottom: '1px solid #000'
    }
  }, C.facts.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '24px 0 24px ' + (i ? 24 : 0) + 'px',
      borderLeft: i ? '1px solid #000' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 24px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-ui)',
      color: 'var(--pt-grey-600)',
      marginTop: 6
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '96px 48px 0',
      display: 'grid',
      gridTemplateColumns: '4fr 8fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, H('О курсе'), /*#__PURE__*/React.createElement(ArrowLink, null, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430_\u043A\u0443\u0440\u0441\u0430.pdf")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 var(--fs-lead)/1.35 var(--font-display)'
    }
  }, "\u041A\u0443\u0440\u0441 \u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442 \u0441 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u0435\u0442\u043E\u0434\u0430\u043C\u0438 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0438\u0445 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u0432 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \u0438 \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445. \u041A\u0430\u0436\u0434\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442 \u043B\u0435\u043A\u0446\u0438\u044E \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445; \u0432 \u0444\u0438\u043D\u0430\u043B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0449\u0438\u0449\u0430\u044E\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '96px 48px 0'
    }
  }, H('Программа'), /*#__PURE__*/React.createElement(Accordion, {
    items: C.modules.map(m => ({
      index: m.i,
      title: m.t,
      meta: m.n + ' занятия',
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 16,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: m.type === 'Практики' ? 'violet' : m.type === 'Проект' ? 'orange' : 'green'
      }, m.type), m.d)
    }))
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '96px 48px 0'
    }
  }, H('Преподаватели'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 24
    }
  }, C.teachers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.n,
    image: t.img,
    eyebrow: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C",
    title: t.n
  }, t.r)), /*#__PURE__*/React.createElement(GradientBlock, {
    tone: "violet",
    padding: 32,
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 28px/1 var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "\u041C\u044B\u0441\u043B\u0438\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0438\u043C"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-ui)'
    }
  }, "\u0417\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0432 \u0413\u043B\u0430\u0432\u043D\u043E\u043C \u0443\u0447\u0435\u0431\u043D\u043E\u043C \u043A\u043E\u0440\u043F\u0443\u0441\u0435 \u0438 \u043E\u043D\u043B\u0430\u0439\u043D.")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/LessonScreen.jsx
try { (() => {
function LessonScreen({
  go
}) {
  const {
    Tabs,
    IconButton,
    ArrowLink,
    ProgressBar,
    Icon,
    Button,
    Tooltip,
    Checkbox
  } = window.DesignSystem_a62ddd;
  const C = window.COURSE;
  const [tab, setTab] = React.useState('Материалы');
  const [cur, setCur] = React.useState(3);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '32px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-ui)',
      color: 'var(--pt-grey-600)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('program');
    },
    style: {
      color: 'inherit'
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"), " / \u041C\u043E\u0434\u0443\u043B\u044C 02 \xB7 \u0427\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '8fr 4fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 24px',
      font: '800 var(--fs-h2)/var(--lh-h2) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, C.lessons[cur].t), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      background: 'url(../../assets/photo-students-laptop.jpg) center/cover #000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.35)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "play",
    label: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0435\u043A\u0446\u0438\u044E",
    variant: "primary",
    size: 72,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: 'var(--grad-green-block)',
      color: '#fff',
      padding: '12px 20px',
      font: '700 14px var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "\u041B\u0435\u043A\u0446\u0438\u044F \xB7 42 \u043C\u0438\u043D")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Материалы', 'Задание', 'Обсуждение'],
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 0',
      font: '400 16px/1.5 var(--font-ui)'
    }
  }, tab === 'Материалы' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, null, "\u041A\u043E\u043D\u0441\u043F\u0435\u043A\u0442_\u043B\u0435\u043A\u0446\u0438\u0438_04.pdf"), /*#__PURE__*/React.createElement(ArrowLink, null, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F_\u043C\u0435\u0442\u043E\u0434_\u041D\u044C\u044E\u0442\u043E\u043D\u0430.pptx"), /*#__PURE__*/React.createElement(ArrowLink, null, "\u041D\u043E\u0443\u0442\u0431\u0443\u043A_newton.ipynb")), tab === 'Задание' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 \u041D\u044C\u044E\u0442\u043E\u043D\u0430 \u0434\u043B\u044F \u0443\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F f(x) = x\xB3 \u2212 2x \u2212 5 \u0438 \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0441 \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0431\u0438\u0441\u0435\u043A\u0446\u0438\u0438."), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u041A\u043E\u0434 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435"))), tab === 'Обсуждение' && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--pt-grey-600)'
    }
  }, "\u0412\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid #000',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "\u041C\u043E\u0434\u0443\u043B\u044C 02",
    value: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      borderTop: '1px solid #000'
    }
  }, C.lessons.map((l, i) => {
    const on = i === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setCur(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 0',
        background: 'none',
        border: 0,
        borderBottom: '1px solid var(--pt-grey-200)',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: l.done ? 'var(--pt-green)' : on ? '#000' : 'var(--pt-grey-100)',
        color: '#fff',
        font: '700 12px var(--font-sans)'
      }
    }, l.done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: (on ? '700 ' : '400 ') + '15px var(--font-ui)',
        color: '#000'
      }
    }, l.t));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    text: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "\u041D\u0430\u0437\u0430\u0434",
    onClick: () => setCur(Math.max(0, cur - 1))
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    },
    onClick: () => setCur(Math.min(C.lessons.length - 1, cur + 1))
  }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435")))));
}
window.LessonScreen = LessonScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/ProgramScreen.jsx
try { (() => {
function ProgramScreen({
  go
}) {
  const {
    Tag,
    Card,
    Badge,
    TriadStripe
  } = window.DesignSystem_a62ddd;
  const C = window.COURSE;
  const [f, setF] = React.useState('Все');
  const list = C.modules.filter(m => f === 'Все' || m.type === f);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '48px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'end',
      gap: 24,
      paddingBottom: 32,
      borderBottom: '1px solid #000'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--pt-violet)',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, C.short), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '800 var(--fs-h1)/var(--lh-h1) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043A\u0443\u0440\u0441\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Все', 'Лекции', 'Практики', 'Проект'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: f === t,
    onClick: () => setF(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 32
    }
  }, list.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.i,
    eyebrow: 'Модуль ' + m.i,
    title: m.t,
    onClick: () => go('lesson'),
    meta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, m.n, " \u0437\u0430\u043D\u044F\u0442\u0438\u044F"), /*#__PURE__*/React.createElement(Badge, {
      tone: m.type === 'Практики' ? 'violet' : m.type === 'Проект' ? 'orange' : 'green'
    }, m.type))
  }, m.d))));
}
window.ProgramScreen = ProgramScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/ProgramScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/course-site/data.js
try { (() => {
window.COURSE = {
  title: 'Информационные технологии и математическое моделирование',
  short: 'ИТ и моделирование',
  institute: 'Институт компьютерных наук и кибербезопасности',
  start: ['09/', '/04', '25'],
  time: '18:00',
  facts: [['8 недель', 'длительность'], ['16 занятий', 'лекции и практики'], ['Очно и онлайн', 'формат'], ['Сертификат', 'СПбПУ']],
  modules: [{
    i: '01',
    t: 'Введение в моделирование',
    type: 'Лекции',
    n: 3,
    d: 'Что такое математическая модель, этапы моделирования, классификация моделей.'
  }, {
    i: '02',
    t: 'Численные методы',
    type: 'Практики',
    n: 4,
    d: 'Решение уравнений, интерполяция, численное интегрирование на Python.'
  }, {
    i: '03',
    t: 'Моделирование динамических систем',
    type: 'Лекции',
    n: 3,
    d: 'Дифференциальные уравнения, устойчивость, фазовые портреты.'
  }, {
    i: '04',
    t: 'Данные и статистические модели',
    type: 'Практики',
    n: 3,
    d: 'Регрессия, проверка гипотез, работа с реальными наборами данных.'
  }, {
    i: '05',
    t: 'Итоговый проект',
    type: 'Проект',
    n: 3,
    d: 'Командная работа над моделью прикладной задачи и защита.'
  }],
  teachers: [{
    n: 'Анна Смирнова',
    r: 'к. ф.-м. н., доцент ИКНК',
    img: '../../assets/photo-lecture.jpg'
  }, {
    n: 'Илья Петров',
    r: 'старший преподаватель, ВШ ПИ',
    img: '../../assets/photo-students-laptop.jpg'
  }],
  lessons: [{
    t: 'Что такое модель',
    done: true
  }, {
    t: 'Этапы моделирования',
    done: true
  }, {
    t: 'Классификация моделей',
    done: true
  }, {
    t: 'Метод Ньютона',
    done: false,
    current: true
  }, {
    t: 'Интерполяция',
    done: false
  }, {
    t: 'Численное интегрирование',
    done: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/course-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.GradientBlock = __ds_scope.GradientBlock;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TriadStripe = __ds_scope.TriadStripe;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
