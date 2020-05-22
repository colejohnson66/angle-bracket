// https://infra.spec.whatwg.org/#namespaces
export const namespaces = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

export const quirks = {
    none: "none",
    quirks: "quirks",
    limited: "limited"
};

// TODO: add MathML tags from chapter 4 and 5
//   https://www.w3.org/Math/draft-spec/chapter4.html
//   https://www.w3.org/Math/draft-spec/chapter5.html
//   All MathML tags: https://www.w3.org/Math/draft-spec/appendixi.html#index.elem
export const tagNames = {
    a: "a", // HTML and SVG
    abbr: "abbr",
    address: "address",
    animate: "animate", // SVG
    animateMotion: "animateMotion", // SVG
    animateTransform: "animateTransform", // SVG
    area: "area",
    article: "article",
    aside: "aside",
    audio: "audio",

    b: "b",
    base: "base",
    bdi: "bdi",
    bdo: "bdo",
    blockquote: "blockquote",
    body: "body",
    br: "br",
    button: "button",

    canvas: "canvas",
    caption: "caption",
    circle: "circle", // SVG
    cite: "cite",
    clipPath: "clipPath", // SVG
    col: "col",
    colgroup: "colgroup",
    code: "code",

    data: "data",
    datalist: "datalist",
    dd: "dd",
    defs: "defs", // SVG
    del: "del",
    desc: "desc", // SVG
    details: "details",
    dfn: "dfn",
    dialog: "dialog",
    discard: "discard", // SVG
    div: "div",
    dl: "dl",
    dt: "dt",

    ellipse: "ellipse", // SVG
    em: "em",
    embed: "embed",

    feBlend: "feBlend", // SVG
    feColorMatrix: "feColorMatrix", // SVG
    feComponentTransfer: "feComponentTransfer", // SVG
    feComposite: "feComposite", // SVG
    feConvoluteMatrix: "feConvoluteMatrix", // SVG
    feDiffuseLighting: "feDiffuseLighting", // SVG
    feDisplacementMap: "feDisplacementMap", // SVG
    feDistantLight: "feDistandLight", // SVG
    feDropShadow: "feDropShadow", // SVG
    feFlood: "feFlood", // SVG
    feFuncA: "feFuncA", // SVG
    feFuncB: "feFuncB", // SVG
    feFuncG: "feFuncG", // SVG
    feFuncR: "feFuncR", // SVG
    feGaussianBlur: "feGaussianBlur", // SVG
    feImage: "feImage", // SVG
    feMerge: "feMerge", // SVG
    feMergeNode: "feMergeNode", // SVG
    feMorphology: "feMorphology", // SVG
    feOffset: "feOffset", // SVG
    fePointLight: "fePointLight", // SVG
    feSpecularLighting: "feSpecularLighting", // SVG
    feSpotLight: "feSpotLight", // SVG
    feTile: "feTile", // SVG
    feTurbulence: "feTurbulence", // SVG
    fieldset: "fieldset",
    figcaption: "figcaption",
    figure: "figure",
    filter: "filter", // SVG
    footer: "footer",
    foreignObject: "foreignObject", // SVG
    form: "form",

    g: "g", // SVG

    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    head: "head",
    header: "header",
    hgroup: "hgroup",
    hr: "hr",
    html: "html",

    i: "i",
    iframe: "iframe",
    image: "image", // SVG
    img: "img",
    input: "input",
    ins: "ins",

    kbd: "kbd",

    label: "label",
    legend: "legend",
    li: "li",
    line: "line", // SVG
    linearGradient: "linearGradient", // SVG
    link: "link",

    maction: "maction", // MathML
    main: "main",
    maligngroup: "maligngroup", // MathML
    malignmark: "malignmark", // MathML
    map: "map",
    mark: "mark",
    marker: "marker", // SVG
    mask: "mask", // SVG
    math: "math", // MathML
    menu: "menu",
    menclose: "menclose", // MathML
    meta: "meta",
    metadata: "metadata", // SVG
    merror: "merror", // MathML
    meter: "meter",
    mfenced: "mfenced", // MathML
    mfrac: "mfrac", // MathML
    mglyph: "mglyph", // MathML
    mi: "mi", // MathML
    mlabeldtr: "mlabeldtr", // MathML
    mlongdiv: "mlongdiv", // MathML
    mmultiscripts: "mmultiscripts", // MathML
    mn: "mn", // MathML
    mo: "mo", // MathML
    mover: "mover", // MathML
    mpadded: "mpadded", // MathML
    mpath: "mpath", // SVG
    mphantom: "mphantom", // MathML
    mtext: "mtext", // MathML
    mroot: "mroot", // MathML
    mrow: "mrow", // MathML
    ms: "ms", // MathML
    mscarries: "mscarries", // MathML
    mscarry: "mscarry", // MathML
    msgroup: "msgroup", // MathML
    msline: "msline", // MathML
    mspace: "mspace", // MathML
    msrow: "msrow", // MathML
    mstack: "mstack", // MathML
    mstyle: "mstyle", // MathML
    msub: "msub", // MathML
    msubsup: "msubsup", // MathML
    msup: "msup", // MathML
    mqrt: "msqrt", // MathML
    mtable: "mtable", // MathML
    mtd: "mtd", // MathML
    mtr: "mtr", // MathML
    munder: "munder", // MathML
    munderover: "munderover", // MathML

    nav: "nav",
    noscript: "noscript",

    object: "object",
    ol: "ol",
    optgroup: "optgroup",
    option: "option",
    output: "output",

    p: "p",
    param: "param",
    path: "path", // SVG
    pattern: "pattern", // SVG
    picture: "picture",
    polygon: "polygon", // SVG
    polyline: "polyline", // SVG
    pre: "pre",
    progress: "progress",

    q: "q",

    radialGradient: "radialGradient", // SVG
    rb: "rb", // not mentioned in WhatWG standard?
    rect: "rect", // SVG
    rp: "rp",
    rt: "rt",
    rtc: "rtc", // not mentioned in WhatWG standard?
    ruby: "ruby",

    s: "s",
    samp: "samp",
    script: "script", // HTML and SVG
    section: "section",
    select: "select",
    set: "set", // SVG
    slot: "slot",
    small: "small",
    source: "source",
    span: "span",
    stop: "stop", // SVG
    strong: "strong",
    style: "style", // HTML and SVG
    sub: "sub",
    summary: "summary",
    sup: "sup",
    svg: "svg", // SVG
    switch: "switch", // SVG
    symbol: "symbol", // SVG

    table: "table",
    tbody: "tbody",
    td: "td",
    template: "template",
    text: "text", // SVG
    textPath: "textPath", // SVG
    textarea: "textarea",
    tfoot: "tfoot",
    th: "th",
    thead: "thead",
    time: "time",
    title: "title", // HTML and SVG
    tr: "tr",
    track: "track",
    tspan: "tspan", // SVG

    u: "u",
    ul: "ul",
    use: "use", // SVG

    var: "var",
    video: "video",
    view: "view", // SVG

    wbr: "wbr",
};
export const $ = tagNames; // idea copied from parse5

export const obsoleteTagNames = {
    acronym: "acronym",
    applet: "applet",
    basefont: "basefont",
    bgsound: "bgsound",
    big: "big",
    blink: "blink",
    center: "center",
    command: "command",
    content: "content",
    dir: "dir",
    element: "element",
    font: "font",
    frame: "frame",
    frameset: "frameset",
    image: "image",
    isindex: "isindex",
    keygen: "keygen",
    listing: "listing",
    marquee: "marquee",
    menuitem: "menuitem",
    multicol: "multicol",
    nextid: "nextid",
    nobr: "nobr",
    noembed: "noembed",
    noframes: "noframes",
    plaintext: "plaintext",
    shadow: "shadow",
    spacer: "spacer",
    strike: "strike",
    tt: "tt",
    xmp: "xmp"
};

export const specialElements = {
    [namespaces.html]: {
        [$.address]: true,
        [$.applet]: true,
        [$.area]: true,
        [$.article]: true,
        [$.aside]: true,
        [$.base]: true,
        [$.basefont]: true,
        [$.bgsound]: true,
        [$.blockquote]: true,
        [$.body]: true,
        [$.br]: true,
        [$.button]: true,
        [$.caption]: true,
        [$.center]: true,
        [$.col]: true,
        [$.colgroup]: true,
        [$.dd]: true,
        [$.details]: true,
        [$.dir]: true,
        [$.div]: true,
        [$.dl]: true,
        [$.dt]: true,
        [$.embed]: true,
        [$.fieldset]: true,
        [$.figcaption]: true,
        [$.figure]: true,
        [$.footer]: true,
        [$.form]: true,
        [$.frame]: true,
        [$.frameset]: true,
        [$.h1]: true,
        [$.h2]: true,
        [$.h3]: true,
        [$.h4]: true,
        [$.h5]: true,
        [$.h6]: true,
        [$.head]: true,
        [$.header]: true,
        [$.hgroup]: true,
        [$.hr]: true,
        [$.html]: true,
        [$.iframe]: true,
        [$.img]: true,
        [$.input]: true,
        [$.li]: true,
        [$.link]: true,
        [$.listing]: true,
        [$.main]: true,
        [$.marquee]: true,
        [$.menu]: true,
        [$.meta]: true,
        [$.nav]: true,
        [$.noembed]: true,
        [$.noframes]: true,
        [$.noscript]: true,
        [$.object]: true,
        [$.ol]: true,
        [$.p]: true,
        [$.param]: true,
        [$.plaintext]: true,
        [$.pre]: true,
        [$.script]: true,
        [$.section]: true,
        [$.select]: true,
        [$.source]: true,
        [$.style]: true,
        [$.summary]: true,
        [$.table]: true,
        [$.tbody]: true,
        [$.td]: true,
        [$.template]: true,
        [$.textarea]: true,
        [$.tfoot]: true,
        [$.th]: true,
        [$.thead]: true,
        [$.title]: true,
        [$.tr]: true,
        [$.track]: true,
        [$.ul]: true,
        [$.wbr]: true,
        [$.xmp]: true
    },
    [namespaces.mathml]: {
        // TODO: uncomment when all MathML tags added
        //[$.annotation_xml]: true,
        [$.mi]: true,
        [$.mo]: true,
        [$.mn]: true,
        [$.ms]: true,
        [$.mtext]: true
    },
    [namespaces.svg]: {
        [$.desc]: true,
        [$.foreignObject]: true,
        [$.title]: true
    }
};

export const formattingElements = {
    [$.a]: true,
    [$.b]: true,
    [$.big]: true,
    [$.code]: true,
    [$.em]: true,
    [$.font]: true,
    [$.i]: true,
    [$.nobr]: true,
    [$.s]: true,
    [$.small]: true,
    [$.strike]: true,
    [$.strong]: true,
    [$.tt]: true,
    [$.u]: true
};
