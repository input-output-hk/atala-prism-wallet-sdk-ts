
import { AnonCredsRecoveryId, AnonCredsCredential, AnonCredsCredentialProperties } from '../../../pollux/models/AnonCredsVerifiableCredential';
import { JWTVerifiableCredentialRecoveryId, JWTCredential } from '../../../pollux/models/JWTVerifiableCredential';
import { CredentialMethodTypes, CredentialSchemaType } from './types';

export const CredentialMethods: CredentialMethodTypes = {
    toDomainCredential: function toDomainCredential(this: CredentialSchemaType) {
        if (this.recoveryId === JWTVerifiableCredentialRecoveryId) {
            const jwtString = Buffer.from(this.credentialData).toString()
            const jwtObj = JSON.parse(jwtString)
            const fromJWT = JWTCredential.fromJWT(jwtObj, jwtObj.jti)
            return fromJWT
        } else if (this.recoveryId === AnonCredsRecoveryId) {
            const credentialData = Buffer.from(this.credentialData).toString()
            const credentialJson = JSON.parse(credentialData)
            return new AnonCredsCredential({
                schema_id: credentialJson[AnonCredsCredentialProperties.schemaId],
                cred_def_id: credentialJson[AnonCredsCredentialProperties.credentialDefinitionId],
                values: credentialJson[AnonCredsCredentialProperties.values],
                signature: credentialJson[AnonCredsCredentialProperties.signature],
                signature_correctness_proof:
                    credentialJson[
                    AnonCredsCredentialProperties.signatureCorrectnessProof
                    ]
            })
        } else {
            throw new Error('Unsupported key type from db storage')
        }
    }
}