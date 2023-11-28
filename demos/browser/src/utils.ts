import {ROOT_FONT_SIZE} from './config/constants';

export function trimString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

export default function getSize(px: number, unit = 'rem'): string {
  return `${px / ROOT_FONT_SIZE}${unit}`;
}

export function removeRef<type>(obj: unknown) {
  return JSON.parse(JSON.stringify(obj)) as type;
}

export function makeRandomChars(length: number) {
  return Array(length).fill('0').join(' ');
}

export async function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function removeEmptyProperties(obj: object) {
  Object.keys(obj).forEach((item) => {
    const value = obj[item as keyof object] as string | number | undefined;
    if (value === undefined || (typeof value === 'string' && !value.length)) {
      // eslint-disable-next-line no-param-reassign
      delete obj[item as keyof object];
    }
  });
}

export function hasObjectChanged(obj1: object, obj2: object) {
  // Check if the objects are of the same type
  if (typeof obj1 !== typeof obj2) {
    return true;
  }

  // Handle special cases for null, arrays, and objects
  if (obj1 === null || obj2 === null) {
    return obj1 !== obj2;
  }

  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return true;
    }

    for (let i = 0; i < obj1.length; i++) {
      if (hasObjectChanged(obj1[i], obj2[i])) {
        return true;
      }
    }
  } else if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return true;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys1) {
      if (hasObjectChanged(obj1[key as keyof object], obj2[key as keyof object])) {
        return true;
      }
    }
  } else {
    return obj1 !== obj2;
  }

  return false;
}


export function truncateDID(did: string, count = 4) {
  const [identifier, method, hash1, hash2] = did.split(':');
  let hash: string;
  const hash1Start = hash1.substring(0, count);
  const hash1End = hash1.substring(hash1.length - count, hash1.length);
  let hash2Start: string;
  let hash2End: string;
  if (hash2) {
    hash2Start = hash2.substring(0, 3);
    hash2End = hash2.substring(hash1.length - count, hash1.length);
    hash = `${hash1Start}...:...${hash2End}`;
  } else {
    hash = `${hash1Start}...${hash1End}`;
  }

  return `${identifier}:${method}:${hash}`;
}