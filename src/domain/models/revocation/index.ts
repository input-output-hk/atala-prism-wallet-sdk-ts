

export const revocationJsonldDocuments = {
    "https://w3id.org/vc/status-list/2021/v1": {
        "@context": {
            "@protected": true,

            "StatusList2021Credential": {
                "@id":
                    "https://w3id.org/vc/status-list#StatusList2021Credential",
                "@context": {
                    "@protected": true,

                    "id": "@id",
                    "type": "@type",

                    "description": "http://schema.org/description",
                    "name": "http://schema.org/name"
                }
            },

            "StatusList2021": {
                "@id":
                    "https://w3id.org/vc/status-list#StatusList2021",
                "@context": {
                    "@protected": true,

                    "id": "@id",
                    "type": "@type",

                    "statusPurpose":
                        "https://w3id.org/vc/status-list#statusPurpose",
                    "encodedList": "https://w3id.org/vc/status-list#encodedList"
                }
            },

            "StatusList2021Entry": {
                "@id":
                    "https://w3id.org/vc/status-list#StatusList2021Entry",
                "@context": {
                    "@protected": true,

                    "id": "@id",
                    "type": "@type",

                    "statusPurpose":
                        "https://w3id.org/vc/status-list#statusPurpose",
                    "statusListIndex":
                        "https://w3id.org/vc/status-list#statusListIndex",
                    "statusListCredential": {
                        "@id":
                            "https://w3id.org/vc/status-list#statusListCredential",
                        "@type": "@id"
                    }
                }
            }
        }
    },
    "https://www.w3.org/2018/credentials/v1": {
        "@context": {
            "@version": 1.1,
            "@protected": true,
            "id": "@id",
            "type": "@type",
            "VerifiableCredential": {
                "@id": "https://www.w3.org/2018/credentials#VerifiableCredential",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "id": "@id",
                    "type": "@type",
                    "cred": "https://www.w3.org/2018/credentials#",
                    "sec": "https://w3id.org/security#",
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "credentialSchema": {
                        "@id": "cred:credentialSchema",
                        "@type": "@id",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "cred": "https://www.w3.org/2018/credentials#",
                            "JsonSchemaValidator2018": "cred:JsonSchemaValidator2018"
                        }
                    },
                    "credentialStatus": {
                        "@id": "cred:credentialStatus",
                        "@type": "@id"
                    },
                    "credentialSubject": {
                        "@id": "cred:credentialSubject",
                        "@type": "@id"
                    },
                    "evidence": {
                        "@id": "cred:evidence",
                        "@type": "@id"
                    },
                    "expirationDate": {
                        "@id": "cred:expirationDate",
                        "@type": "xsd:dateTime"
                    },
                    "holder": {
                        "@id": "cred:holder",
                        "@type": "@id"
                    },
                    "issued": {
                        "@id": "cred:issued",
                        "@type": "xsd:dateTime"
                    },
                    "issuer": {
                        "@id": "cred:issuer",
                        "@type": "@id"
                    },
                    "issuanceDate": {
                        "@id": "cred:issuanceDate",
                        "@type": "xsd:dateTime"
                    },
                    "proof": {
                        "@id": "sec:proof",
                        "@type": "@id",
                        "@container": "@graph"
                    },
                    "refreshService": {
                        "@id": "cred:refreshService",
                        "@type": "@id",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "cred": "https://www.w3.org/2018/credentials#",
                            "ManualRefreshService2018": "cred:ManualRefreshService2018"
                        }
                    },
                    "termsOfUse": {
                        "@id": "cred:termsOfUse",
                        "@type": "@id"
                    },
                    "validFrom": {
                        "@id": "cred:validFrom",
                        "@type": "xsd:dateTime"
                    },
                    "validUntil": {
                        "@id": "cred:validUntil",
                        "@type": "xsd:dateTime"
                    }
                }
            },
            "VerifiablePresentation": {
                "@id": "https://www.w3.org/2018/credentials#VerifiablePresentation",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "id": "@id",
                    "type": "@type",
                    "cred": "https://www.w3.org/2018/credentials#",
                    "sec": "https://w3id.org/security#",
                    "holder": {
                        "@id": "cred:holder",
                        "@type": "@id"
                    },
                    "proof": {
                        "@id": "sec:proof",
                        "@type": "@id",
                        "@container": "@graph"
                    },
                    "verifiableCredential": {
                        "@id": "cred:verifiableCredential",
                        "@type": "@id",
                        "@container": "@graph"
                    }
                }
            },
            "EcdsaSecp256k1Signature2019": {
                "@id": "https://w3id.org/security#EcdsaSecp256k1Signature2019",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "id": "@id",
                    "type": "@type",
                    "sec": "https://w3id.org/security#",
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "challenge": "sec:challenge",
                    "created": {
                        "@id": "http://purl.org/dc/terms/created",
                        "@type": "xsd:dateTime"
                    },
                    "domain": "sec:domain",
                    "expires": {
                        "@id": "sec:expiration",
                        "@type": "xsd:dateTime"
                    },
                    "jws": "sec:jws",
                    "nonce": "sec:nonce",
                    "proofPurpose": {
                        "@id": "sec:proofPurpose",
                        "@type": "@vocab",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "sec": "https://w3id.org/security#",
                            "assertionMethod": {
                                "@id": "sec:assertionMethod",
                                "@type": "@id",
                                "@container": "@set"
                            },
                            "authentication": {
                                "@id": "sec:authenticationMethod",
                                "@type": "@id",
                                "@container": "@set"
                            }
                        }
                    },
                    "proofValue": "sec:proofValue",
                    "verificationMethod": {
                        "@id": "sec:verificationMethod",
                        "@type": "@id"
                    }
                }
            },
            "EcdsaSecp256r1Signature2019": {
                "@id": "https://w3id.org/security#EcdsaSecp256r1Signature2019",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "id": "@id",
                    "type": "@type",
                    "sec": "https://w3id.org/security#",
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "challenge": "sec:challenge",
                    "created": {
                        "@id": "http://purl.org/dc/terms/created",
                        "@type": "xsd:dateTime"
                    },
                    "domain": "sec:domain",
                    "expires": {
                        "@id": "sec:expiration",
                        "@type": "xsd:dateTime"
                    },
                    "jws": "sec:jws",
                    "nonce": "sec:nonce",
                    "proofPurpose": {
                        "@id": "sec:proofPurpose",
                        "@type": "@vocab",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "sec": "https://w3id.org/security#",
                            "assertionMethod": {
                                "@id": "sec:assertionMethod",
                                "@type": "@id",
                                "@container": "@set"
                            },
                            "authentication": {
                                "@id": "sec:authenticationMethod",
                                "@type": "@id",
                                "@container": "@set"
                            }
                        }
                    },
                    "proofValue": "sec:proofValue",
                    "verificationMethod": {
                        "@id": "sec:verificationMethod",
                        "@type": "@id"
                    }
                }
            },
            "Ed25519Signature2018": {
                "@id": "https://w3id.org/security#Ed25519Signature2018",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "id": "@id",
                    "type": "@type",
                    "sec": "https://w3id.org/security#",
                    "xsd": "http://www.w3.org/2001/XMLSchema#",
                    "challenge": "sec:challenge",
                    "created": {
                        "@id": "http://purl.org/dc/terms/created",
                        "@type": "xsd:dateTime"
                    },
                    "domain": "sec:domain",
                    "expires": {
                        "@id": "sec:expiration",
                        "@type": "xsd:dateTime"
                    },
                    "jws": "sec:jws",
                    "nonce": "sec:nonce",
                    "proofPurpose": {
                        "@id": "sec:proofPurpose",
                        "@type": "@vocab",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "sec": "https://w3id.org/security#",
                            "assertionMethod": {
                                "@id": "sec:assertionMethod",
                                "@type": "@id",
                                "@container": "@set"
                            },
                            "authentication": {
                                "@id": "sec:authenticationMethod",
                                "@type": "@id",
                                "@container": "@set"
                            }
                        }
                    },
                    "proofValue": "sec:proofValue",
                    "verificationMethod": {
                        "@id": "sec:verificationMethod",
                        "@type": "@id"
                    }
                }
            },
            "RsaSignature2018": {
                "@id": "https://w3id.org/security#RsaSignature2018",
                "@context": {
                    "@version": 1.1,
                    "@protected": true,
                    "challenge": "sec:challenge",
                    "created": {
                        "@id": "http://purl.org/dc/terms/created",
                        "@type": "xsd:dateTime"
                    },
                    "domain": "sec:domain",
                    "expires": {
                        "@id": "sec:expiration",
                        "@type": "xsd:dateTime"
                    },
                    "jws": "sec:jws",
                    "nonce": "sec:nonce",
                    "proofPurpose": {
                        "@id": "sec:proofPurpose",
                        "@type": "@vocab",
                        "@context": {
                            "@version": 1.1,
                            "@protected": true,
                            "id": "@id",
                            "type": "@type",
                            "sec": "https://w3id.org/security#",
                            "assertionMethod": {
                                "@id": "sec:assertionMethod",
                                "@type": "@id",
                                "@container": "@set"
                            },
                            "authentication": {
                                "@id": "sec:authenticationMethod",
                                "@type": "@id",
                                "@container": "@set"
                            }
                        }
                    },
                    "proofValue": "sec:proofValue",
                    "verificationMethod": {
                        "@id": "sec:verificationMethod",
                        "@type": "@id"
                    }
                }
            },
            "proof": {
                "@id": "https://w3id.org/security#proof",
                "@type": "@id",
                "@container": "@graph"
            }
        }
    }
}