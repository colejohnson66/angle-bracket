// https://infra.spec.whatwg.org/#namespaces
export const Namespaces = {
    html: "http://www.w3.org/1999/xhtml",
    mathML: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

export type Quirks = "none" | "quirks" | "limited"

// ???: Do we need all these MathML and SVG tags? The HTML spec doesn't deal with them, only a few
// TODO: add MathML tags from chapter 4 and 5
//   https://www.w3.org/Math/draft-spec/chapter4.html
//   https://www.w3.org/Math/draft-spec/chapter5.html
//   All MathML tags: https://www.w3.org/Math/draft-spec/appendixi.html#index.elem
export enum $ {
    a, // HTML and SVG
    abbr,
    address,
    acronym, // obsolete
    animate, // SVG
    animateMotion, // SVG
    animateTransform, // SVG
    applet, // obsolete
    area,
    article,
    aside,
    audio,

    b,
    base,
    basefont, // obsolete
    bdi,
    bdo,
    bgsound, // obsolete
    big, // obsolete
    blink, // obsolete
    blockquote,
    body,
    br,
    button,

    canvas,
    caption,
    center, // obsolete
    circle, // SVG
    cite,
    clipPath, // SVG
    code,
    col,
    colgroup,
    command, // obsolete
    content, // obsolete

    data,
    datalist,
    dd,
    defs, // SVG
    del,
    desc, // SVG
    details,
    dfn,
    dialog,
    dir, // obsolete
    discard, // SVG
    div,
    dl,
    dt,

    element, // obsolete
    ellipse, // SVG
    em,
    embed,

    feBlend, // SVG
    feColorMatrix, // SVG
    feComponentTransfer, // SVG
    feComposite, // SVG
    feConvoluteMatrix, // SVG
    feDiffuseLighting, // SVG
    feDisplacementMap, // SVG
    feDistantLight, // SVG
    feDropShadow, // SVG
    feFlood, // SVG
    feFuncA, // SVG
    feFuncB, // SVG
    feFuncG, // SVG
    feFuncR, // SVG
    feGaussianBlur, // SVG
    feImage, // SVG
    feMerge, // SVG
    feMergeNode, // SVG
    feMorphology, // SVG
    feOffset, // SVG
    fePointLight, // SVG
    feSpecularLighting, // SVG
    feSpotLight, // SVG
    feTile, // SVG
    feTurbulence, // SVG
    fieldset,
    figcaption,
    figure,
    filter, // SVG
    font, // obsolete
    footer,
    foreignObject, // SVG
    form,
    frame, // obsolete
    frameset, // obsolete

    g, // SVG

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    head,
    header,
    hgroup,
    hr,
    html,

    i,
    iframe,
    image, // obsolete and SVG
    img,
    input,
    ins,
    isindex, // obsolete

    kbd,
    keygen, // obsolete

    label,
    legend,
    li,
    line, // SVG
    linearGradient, // SVG
    link,
    listing, // obsolete

    maction, // MathML
    main,
    maligngroup, // MathML
    malignmark, // MathML
    map,
    mark,
    marker, // SVG
    marquee, // obsolete
    mask, // SVG
    math, // MathML
    menu,
    menclose, // MathML
    menuitem, // obsolete
    meta,
    metadata, // SVG
    merror, // MathML
    meter,
    mfenced, // MathML
    mfrac, // MathML
    mglyph, // MathML
    mi, // MathML
    mlabeldtr, // MathML
    mlongdiv, // MathML
    mmultiscripts, // MathML
    mn, // MathML
    mo, // MathML
    mover, // MathML
    mpadded, // MathML
    mpath, // SVG
    mphantom, // MathML
    mtext, // MathML
    mroot, // MathML
    mrow, // MathML
    ms, // MathML
    mscarries, // MathML
    mscarry, // MathML
    msgroup, // MathML
    msline, // MathML
    mspace, // MathML
    msrow, // MathML
    mstack, // MathML
    mstyle, // MathML
    msub, // MathML
    msubsup, // MathML
    msup, // MathML
    mqrt, // MathML
    mtable, // MathML
    mtd, // MathML
    mtr, // MathML
    multicol, // obsolete
    munder, // MathML
    munderover, // MathML

    nav,
    nextid, // obsolete
    nobr, // obsolete
    noembed, // obsolete
    noframes, // obsolete
    noscript,

    object,
    ol,
    optgroup,
    option,
    output,

    p,
    param,
    path, // SVG
    pattern, // SVG
    picture,
    plaintext, // obsolete
    polygon, // SVG
    polyline, // SVG
    pre,
    progress,

    q,

    radialGradient, // SVG
    rb, // not mentioned in WhatWG standard?
    rect, // SVG
    rp,
    rt,
    rtc, // not mentioned in WhatWG standard?
    ruby,

    s,
    samp,
    script, // HTML and SVG
    section,
    select,
    set, // SVG
    shadow, // obsolete
    slot,
    small,
    source,
    spacer, // obsolete
    span,
    stop, // SVG
    strike, // obsolete
    strong,
    style, // HTML and SVG
    sub,
    summary,
    sup,
    svg, // SVG
    switch, // SVG
    symbol, // SVG

    table,
    tbody,
    td,
    template,
    text, // SVG
    textPath, // SVG
    textarea,
    tfoot,
    th,
    thead,
    time,
    title, // HTML and SVG
    tr,
    track,
    tspan, // SVG
    tt, // obsolete

    u,
    ul,
    use, // SVG

    var,
    video,
    view, // SVG

    wbr,

    xmp, // obsolete
}
export type TagNames = $;

export const SpecialElements = {
    [Namespaces.html]: {
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
    [Namespaces.mathML]: {
        // TODO: uncomment when all MathML tags added
        //[$.annotation_xml]: true,
        [$.mi]: true,
        [$.mo]: true,
        [$.mn]: true,
        [$.ms]: true,
        [$.mtext]: true
    },
    [Namespaces.svg]: {
        [$.desc]: true,
        [$.foreignObject]: true,
        [$.title]: true
    }
};

export const FormattingElements = {
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
