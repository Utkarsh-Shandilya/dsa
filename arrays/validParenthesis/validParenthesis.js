const validParenthesis = (str) => {
    const stack = [];
    const opening = new Map([['{', 1], ['[', 1], ['(', 1]]);
    const closing = new Map([['}', '{'], [']', '['], [')', '(']]);
    for (let item of str) {
        if (opening.has(item)) {
            stack.push(item);
        } else {
            if (stack.length === 0 || closing.get(item) !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}