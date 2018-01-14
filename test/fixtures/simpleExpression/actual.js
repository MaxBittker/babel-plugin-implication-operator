let a = undefined;

function die() {
    return a.foo();
}

a >> die();
