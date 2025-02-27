import { expect, test } from 'vitest'
import { removeDupes } from '../../src/components/hangmanGame/removeDupes'

test.each([
    {a: ['A', 'A', 'A'], expected: ['A']},
    {a: ['A', 'B', 'A'], expected: ['A', 'B']},
    {a: ['A', 'B', 'C'], expected: ['A', 'B', 'C']}
])('removeDupes($a) -> $expected', ({a, expected}) => {
    expect(removeDupes(a)).toStrictEqual(expected)
});

