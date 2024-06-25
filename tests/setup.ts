
import { Buffer } from 'buffer';
import crypto from 'crypto';
import util from 'util';
if (typeof window !== 'undefined') {
    window.Buffer = Buffer;

} else {
    global.Buffer = Buffer;
}
