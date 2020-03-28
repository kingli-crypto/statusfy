import _url from 'url'
import _isURL from 'validator/lib/isURL'
import _isRFC3339 from 'validator/lib/isRFC3339'

export const isURL = (value: string): Boolean => {
  const url = _url.parse(value)

  if (url.pathname && url.pathname.startsWith('//')) {
    return false
  } else if (url.pathname && url.pathname.startsWith('/') && !url.hostname) {
    return true
  } else {
    return _isURL(value, {
      protocols: ['http', 'https'],
      require_tld: true,
      require_protocol: true,
      require_host: true,
      require_valid_protocol: true
    })
  }
}

export const isRFC3339 = _isRFC3339
