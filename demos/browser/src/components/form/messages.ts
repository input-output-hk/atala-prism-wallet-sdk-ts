export const patterns = {
  url: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_.~#?&=]*)',
  noSpace: /^([^\s]*)?$/,
  hypenInBetween: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
};

export const messages = {
  [`${patterns.noSpace}`.replaceAll('/', '')]: 'No space allowed',
  [`${patterns.url}`]: 'This field must be a URL',
  [`${patterns.hypenInBetween}`.replaceAll('/', '')]:
    'This field should be hypen (-) separated words, e.g: (my-name), and it cannot contain special chars e.g: []&* ',
  minLength: 'This field must be at least {{count}} characters',
  maxLength: 'This field must be maximum {{count}} characters',
  required: 'This field is required',
};
