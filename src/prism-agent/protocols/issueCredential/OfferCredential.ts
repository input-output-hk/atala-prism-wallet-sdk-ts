import { uuid } from "@stablelib/uuid";
import { AgentError } from "../../../domain/models/Errors";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialFormat } from "./CredentialFormat";
import { ProtocolHelpers } from "../../helpers/ProtocolHelpers";
import { CredentialPreview } from "./CredentialPreview";
import { ProposeCredential } from "./ProposeCredential";
import { OfferCredentialBody } from "../types";

export class OfferCredential {
  public static type = ProtocolType.DidcommOfferCredential;

  constructor(
    public body: OfferCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from?: DID,
    public to?: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    if (!from || !to) {
      new AgentError.InvalidOfferCredentialMessageError(
        "Invalid offer credential message error."
      );
    }
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      OfferCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static makeOfferFromProposedCredential(
    proposed: ProposeCredential
  ): OfferCredential {
    return new OfferCredential(
      createOfferCredentialBody(
        proposed.body.credential_preview,
        proposed.body.formats,
        proposed.body.goalCode,
        proposed.body.comment
      ),
      proposed.attachments,
      proposed.to,
      proposed.from,
      proposed.id
    );
  }

  static fromMessage(fromMessage: Message): OfferCredential {
    if (
      fromMessage.piuri !== ProtocolType.DidcommOfferCredential ||
      !fromMessage.from
    ) {
      throw new AgentError.InvalidOfferCredentialMessageError(
        "Invalid offer credential message error."
      );
    }
    const type = fromMessage.piuri as ProtocolType;
    const offerCredentialBody =
      ProtocolHelpers.safeParseBody<OfferCredentialBody>(
        fromMessage.body,
        type
      );
    const fromDID = fromMessage.from;
    const toDID = fromMessage.to;
    return new OfferCredential(
      offerCredentialBody,
      fromMessage.attachments,
      fromDID,
      toDID,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static build<T>(
    credentialPreview: CredentialPreview,
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ) {
    const { formats, attachments } =
      ProtocolHelpers.parseCredentials(credentials);

    const offerCredentialBody = createOfferCredentialBody(
      credentialPreview,
      formats
    );

    return new OfferCredential(
      offerCredentialBody,
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}

export function createOfferCredentialBody(
  credentialPreview: CredentialPreview,
  formats: CredentialFormat[],
  goalCode?: string,
  comment?: string,
  replacementId?: string,
  multipleAvailable?: string
): OfferCredentialBody {
  return {
    formats,
    credential_preview: credentialPreview,
    goalCode,
    comment,
    replacementId,
    multipleAvailable,
  };
}
