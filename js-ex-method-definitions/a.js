// [Method definitions | mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

{
    const obj = {
        foo: function() {
            return 'foo';
        }
    }
    console.log(obj.foo());
}

{
    const obj = {
        foo() {
            return 'bar';
        }
    }
    console.log(obj.foo());
}
