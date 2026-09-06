'use client';
import { useState } from 'react';

export function KaprekarDemo() {
  const [input, setInput] = useState('3524');
  const [start, setStart] = useState('3524');
  const [error, setError] = useState('');
  let current = start;
  const steps: string[] = [];
  for (let i = 0; i < 8 && current !== '6174'; i++) {
    const asc = current.split('').sort().join('');
    const desc = asc.split('').reverse().join('');
    const next = String(Number(desc) - Number(asc)).padStart(4, '0');
    steps.push(`${desc} − ${asc} = ${next}`);
    current = next;
  }
  return (
    <div className="demo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!/^\d{4}$/.test(input) || new Set(input).size < 2) {
            setError('Enter four digits with at least two different digits.');
            return;
          }
          setError('');
          setStart(input);
        }}
      >
        <label htmlFor="kaprekar">Try any four-digit number</label>
        <div>
          <input
            id="kaprekar"
            inputMode="numeric"
            maxLength={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-describedby={error ? 'kaprekar-error' : undefined}
          />
          <button type="submit">Find the pattern ↗</button>
        </div>
      </form>
      {error && (
        <p id="kaprekar-error" role="alert">
          {error}
        </p>
      )}
      <div className="demo-steps" aria-live="polite">
        {steps.length ? (
          steps.map((s, i) => <span key={i}>{s}</span>)
        ) : (
          <span>7641 − 1467 = 6174</span>
        )}
        <b>6174 · A fixed point.</b>
      </div>
    </div>
  );
}
