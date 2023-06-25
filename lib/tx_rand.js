function tx_rand(h) {
  const b58de = (
    s,
    a = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
  ) => [...s].reduce((m, c) => (m * a.length + a.indexOf(c)) | 0, 0)

  return ((a, b, c, d) => () => {
    a |= 0
    b |= 0
    c |= 0
    d |= 0
    let t = (((a + b) | 0) + d) | 0
    d = (d + 1) | 0
    a = b ^ (b >>> 9)
    b = (c + (c << 3)) | 0
    c = (c << 21) | (c >>> 11)
    c = (c + t) | 0
    return (t >>> 0) / 4294967296
  })(
    ...h.match(new RegExp(`.{${(h.length / 4) | 0}}`, 'g')).map((p) => b58de(p))
  )
}
