export const select = (el, all = false) => {
    el = el.trim();
    if (all) return [...document.querySelectorAll(el)];

    else return document.querySelector(el);
}

export const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (!selectEl) return

    if (all) return selectEl.forEach(e => e.addEventListener(type, listener))

    selectEl.addEventListener(type, listener);

}

export const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
}

