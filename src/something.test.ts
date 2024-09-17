import { doSomethinElse, doSomething } from "./something"

const mockFn = jest.fn(() => true)

test('test a function in a script', () => {
    expect(doSomething(1,2) === 3)
})

test('test mocking a callback', () => {
    expect(doSomethinElse(mockFn))
})