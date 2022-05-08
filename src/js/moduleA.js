export function hello(name) {
    const temp = `Hello, ${name}!`;
    return temp;
}

export function later(name) {
    const temp = `Later, ${name}!`;
    return temp;
}

export * from './moduleC.js'