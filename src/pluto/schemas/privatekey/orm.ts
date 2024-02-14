import {
    Domain,
    Ed25519PrivateKey,
    Secp256k1PrivateKey,
    X25519PrivateKey
} from '../../..';
import {
    KeyProperties
} from '../../../domain';
import {
    PrivateKeyDocument,
    PrivateKeyMethodTypes
} from './types';

export const PrivateKeyMethods: PrivateKeyMethodTypes = {
    toDomainPrivateKey: function toDomainPrivateKey(this: PrivateKeyDocument) {
        const { type, keySpecification } = this
        const curve = keySpecification.find(
            (item) => item.name === KeyProperties.curve
        )
        const raw = keySpecification.find(
            (item) => item.name === KeyProperties.rawKey
        )
        if (!(type in Domain.KeyTypes)) {
            throw new Error(`Invalid KeyType ${type || 'undefined'}`)
        }
        if (!curve) {
            throw new Error('Undefined key curve')
        }

        if (
            curve.value !== Domain.Curve.SECP256K1 &&
            curve.value !== Domain.Curve.ED25519 &&
            curve.value !== Domain.Curve.X25519
        ) {
            throw new Error(`Invalid key curve ${curve.value}`)
        }

        if (!raw) {
            throw new Error('Undefined key raw')
        }

        /* istanbul ignore else -- @preserve */
        if (curve.value === Domain.Curve.SECP256K1) {
            const index = keySpecification.find(
                (item) => item.name === KeyProperties.index
            )
            const seed = keySpecification.find(
                (item) => item.name === KeyProperties.seed
            )

            const privateKey = new Secp256k1PrivateKey(
                Buffer.from(raw.value, 'hex')
            )

            privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                Domain.KeyProperties.curve,
                Domain.Curve.SECP256K1
            )

            if (index) {
                privateKey.keySpecification.set(
                    Domain.KeyProperties.index,
                    index.value
                )
            }

            if (seed) {
                privateKey.keySpecification.set(
                    Domain.KeyProperties.seed,
                    seed.value
                )
            }

            return privateKey
        } else if (curve.value === Domain.Curve.ED25519) {
            const privateKey = new Ed25519PrivateKey(Buffer.from(raw.value, 'hex'))

            privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                Domain.KeyProperties.curve,
                Domain.Curve.ED25519
            )

            return privateKey
        } else if (curve.value === Domain.Curve.X25519) {
            const privateKey = new X25519PrivateKey(Buffer.from(raw.value, 'hex'))

            privateKey.keySpecification.set(Domain.KeyProperties.rawKey, raw.value)

            privateKey.keySpecification.set(
                Domain.KeyProperties.curve,
                Domain.Curve.X25519
            )

            return privateKey
        } else {
            /* istanbul ignore next -- @preserve */
            throw new Error(`Invalid key ${curve.value} ${type}`)
        }
    }
}