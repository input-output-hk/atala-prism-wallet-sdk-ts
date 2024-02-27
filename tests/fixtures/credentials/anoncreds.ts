import { Anoncreds, AttachmentDescriptor, LinkSecret } from "../../../src/domain";
import { ProtocolType } from "../../../src/prism-agent/protocols/ProtocolTypes";
import { OfferCredential } from "../../../src/prism-agent/protocols/issueCredential/OfferCredential";
import { list } from "../dids";

export const linkSecret = new LinkSecret("11713282333014162675185775227133916651856831195832037281552411830422122210216");

export const schema: Anoncreds.Schema = {
  name: "schema name",
  version: "1.0",
  attrNames: ["name", "age"],
  issuerId: "did:web:xyz",
};

export const schemaId = "did:web:xyz/resource/schema";
export const schemas = { [schemaId]: schema };
export const credDefId = "did:web:xyz/resource/cred-def";

export const credentialOffer: Anoncreds.CredentialOffer = {
  schema_id: schemaId,
  cred_def_id: credDefId,
  key_correctness_proof: {
    c: "76557819503450570442357976029271303987759136289314846847024757974752606615433",
    xz_cap:
      "26047879363332547950920668394631678475313752008082689588028385075806198959009721480298642181417611387120760535340960652992598169976318796059443404652478753165940963938026715950444631637055579596396026982943529446772342056118213731997539494790069972362712412848545977350411933491687478962150552753933891241069977903236245408595467016248045708851235686828269686277218325172481148269365738838667311348922929239876501229218854901336077610669087389670091204141817761014674154146755628794442065539896048607369184947340323162627521384048677015174858428761829211514983844416604741456701465732354883642257230400665085164493995639836946749428712602480384130632356640901418646806091518373306556288954289",
    xr_cap: [
      [
        "age",
        "37523550844923066276917545265534491936001653058431807699727798378094010348017417786213033463012541464861614713651678817589894752131766899552202186956509278956052677681349590167219631006515597935364124683509557223008283580029502931430380055551345019089794453342866634865505293670597130041956152064268604570574775784367900164625667326244382433984825612756021533073304839324299187948682509607641828855308845653725291687712265043071582873816295392972053358963210517456371474273531564989381194134152519027319325114667103082545250397114009229013996244896611333191925354781709243382864211341173108829209135657104587482214147977220885303413739052442209985783183870139853950883453738389448581714672060",
      ],
      [
        "name",
        "40114198290379256041372995441628703701697468212013103904320488156133624512624518776636636679936428767628511100834703945932272277119352677403376670387372871153129929576812118980029243346717913240254947965865744085397369091151556546260636586787167694200525462305016276069215035338546740434877965464035950368040654082423013022634233986285166071269362922845761571385784692708141028444335024777471220924204393976065258643143210131836379590020472238396839577304048276973858344620772092596583905864740719861059017160818497762374044149149314046526512381034705421360416522645565343294048956673555742143144006335123972014910685697417095527968642708567895812407107903351826576984395268441796123152869510",
      ],
      [
        "master_secret",
        "17378775238119039681239435504832690562693139985297581004609697280961799415478395227365074603387798682709917541921746683788459574112268962573229585691444414002163279289000517128970409045422613794886895141511303902319051161040962745971806552893764259050521879639998894425230406084402232911982800786217758930274472277822969507777888869816351683032762867227108504826294469816717150773627310267951901092893045791169831629487768555281136526127037211876008761095116571863850777229858315210904916939671575373966848439177870458227542504890675195429629741131074431032162974747956977739339739205375284664571315097532432745565887768994606184944468164941808835757519277660700337481958408893690556466192208",
      ],
    ],
  },
  nonce: "1155389807945475146571300",
  method_name: "anoncreds",
};

export const credentialOfferMessage = new OfferCredential(
  {
    "formats": [],
    "credential_preview": {
      "body": {
        "attributes": [
          {
            "media_type": null,
            "name": "familyName",
            "value": "Wonderland"
          },
        ]
      },
      "schema_id": schemaId,
      "type": ProtocolType.DidcommCredentialPreview
    },
    "comment": undefined
  } as any,
  [
    new AttachmentDescriptor({
      // base64: "eyJzY2hlbWFfaWQiOiJodHRwOi8vaG9zdC5kb2NrZXIuaW50ZXJuYWw6ODAwMC9wcmlzbS1hZ2VudC9zY2hlbWEtcmVnaXN0cnkvc2NoZW1hcy9kMjgwMzAzMC1jODc1LTNjMmItOWZhZi05OGEwOGY0MDIzZDMiLCJjcmVkX2RlZl9pZCI6Imh0dHA6Ly8xOTIuMTY4LjEuMTY1OjgwMDAvcHJpc20tYWdlbnQvY3JlZGVudGlhbC1kZWZpbml0aW9uLXJlZ2lzdHJ5L2RlZmluaXRpb25zLzhjMzIxYTRhLWE4YmItMzhkMS1iNDZhLTBhZDM1MWE5NGVlZC9kZWZpbml0aW9uIiwia2V5X2NvcnJlY3RuZXNzX3Byb29mIjp7ImMiOiI1MzIwMDc5MzY1NTY5MjE0MTcxODI0NzIyNTA5MDY4MDkyMzM1NTYzOTY2ODA3NTk4Mjk1Mzc2Njc0Nzg5OTg1OTUxMDIxNzAyNjgwMiIsInh6X2NhcCI6IjE1OTM0OTMwNzcxOTk1NjM5ODA0MzU0MDg3ODY3MzUwNDA4MTg5NjQ2NDA3MzY1NzI5ODgxMDEzOTY0MjYzNDczNDYwOTQ5Njg2Njg1NTg5OTkwOTM4NTEzMzQzOTEyMzM2NTIxNzQ1OTYyNDY4ODAyNDQwNjc2ODIyNDkxNTc3ODYxMTM4ODA4Nzg3NTkxMjc4OTQ2ODE4NDI1MTc5ODU5NzQxNjc4Mjc5MTY4ODAyMTY5NDMwMTU2NTIzNjI3Mzg2NDM1MzQwMTQ5ODc5NzgxNzkyNTIxMTQzNzcxODY5MDk2MTA3ODg2Nzc1NDQ0NDc3NTUxNTkxNzQxMzM1NjE5Mjg2MDI3MjEyMzQ5NjU4MzI4MDAyNjE2ODE4OTI3Njg3NjQ0MTY5NzU3MzA1NTk4Mjk3NDE4MjcyMDAwNjYzMDI1OTc1NDY2MTM4MjQ5MDg4MDQ0NTQ3Njk5OTAzMTY0NTk3MTUwMDA4NzMxMjcyMjQ2NDg4MTU2NDQxNTU2NzgzNDA5MTY2OTY1NTk4NDMzOTAxNjczOTEyODU0NjEwNDU0MDUzMDIxODUzMDgzNzEzNjI0NTkzOTk1Nzc4NDYxNTM5MjY1NDkyMTkyNjA4MjgzOTcxNDc1MDkyNjg0MjMwMjM2NDA2MDU1MjU5OTA5NDkwMDI3OTcxNzkzNzQ2NzU5NzQ1ODI0NTkzNzYwODAxODgyMjE1MTg2MjA4NTA2MjIwNTEzNDA5MDEyMjU1OTU2MDk2MjU3NzU0NDIzNjE3MTk1MzQyNzQzMzk4ODYxNjIwNDYzNzE1MTQ1NDA3Mjk5NTUzNjEwMTg0NTU5NDkxNTE0MzQxNDYyNzgzNTM3OTkyODU0NTc5NjI5MTgyNjAyNDYwNjg3NTQ4Nzg0Mzc4ODgxOTIwMTk3OTQ2MTQ5NDAxNyIsInhyX2NhcCI6W1sibWFzdGVyX3NlY3JldCIsIjEyMjM0Mjg1MjA5NTA1ODg2Mzk4ODgzOTY5MjA3MzM5ODg3ODA3NjU5OTQ1NzU2NjIxODg2NTg0ODM1MDQxNTgwMzEzNDgyNDc5MjMwMjk5NTg5NTYyNjYwNzkyMTQzNTMzOTI0MTIzOTA5OTEwMzM0OTI1OTIxNDgyMDU5MDA0MDU1Njk5MzEzNDAzNDY2MDgzOTcxNTgwNTU0Mzk5MzQ3MjY0Mjc2OTkyNDcxNTY4Nzc5MDMxNjYzNTg1NzIzNDA2MTIzMjc2MTUwODEzODEzMDQwNTEzOTQ0NjUxOTIzOTU1NTc3MjA5MDIzODg3NjA3MzU0NTI2NDkyNDk5MzgxNTYyODc2ODYxNzE5MDU5NjYwNjM4MTQwMTkzOTU1OTEzMTEwNTUxNTQ4OTQ0NzA2NDMxMjE0MDE5NzUyMjY1NjM0ODU3MTMwNDA2NDUyMTE1NjA4NzY3NjM5MTU0Mjc0ODQwMDY3ODAzNDQ4OTk3MjgwNDUzNTc5MzY5MTg5Nzc2OTc5NDU5NzcxOTA4NzM5NTA0ODc1Mzc3ODMxNDAzNDYxMjYzNTE1Njc0Njg5MzE4MTMyNDI1MTU2MTQzNDc2MzU0NDk2NTkxMjEzODYwMjUyMzQ1MTU0NTY4NjAyMjMwMDYxMTE1MzIwMjkxNTIxOTU0NTA0OTU1ODY3Mjk3NDI5MjI5OTgwNTk1NTQ0NDM2MjgwMzcwNjM4MzcxODI0MTk4MzgxMzAyNzAwNDYzOTMwMDk2MTI1MzIzOTIwNjIzODkyNzQ0MDU5NDAwMjA0OTc5NjY4OTUwNDIzOTYyODkxNTU2NTc3Mzk5NzQzMTQzNzA5Nzk0ODQwODA4MzUwMDE1MTkxNzY1MjE4Mzg0ODQzNjI2OTEwNjYwNTEwNzIzODcyMDMzNDAwMDgyNzUwNjk5NTUiXSxbImVtYWlsYWRkcmVzcyIsIjcyNDQxODEzMjQwMzI5ODczNTkyMDA0MzA0OTAyODgzMjkyODMzNTgwNzYyNDg0Mjg2Nzk5NjgzMTI0MDM1NDQ3MDI5NzIwNTk3ODE0NTAzNDAwNDU2NTMwODc3NjMyNjk1Mzk2MzI5ODcxMjAwOTI4NTk2MTMyODQ2NjkxMzMxMTkyNDc4MDA5MjExMTUxNzE4ODA0NTk3MjA3ODE5Nzc5MjcyNTExNzgzNzYwNjA1MTc1ODg3ODkzMDIzNzQ0NDEyMzgwMjI0ODE1MTEwOTU2MDU5Nzc0NjE5NTg3NjM2NTc4ODk1MjExOTU4NzIyNDYzNjk5MTI2MzI1NDUzMTIyODE2ODE1ODQ2NzM5NTg5NDY0MjAyNDk0Mzg1NzA2NDA2MzI4OTY3MjQwNjA0ODAwNDU3OTU1MjE4Mjc3ODY0NDcwMDQ4MDE1NzY1NjMwMjI2ODE4NjY4OTIwMjcxNjc0MDYzMjYyODA3NjU5NzMzNjEyNzAwMDUwNzI2Mjg4NDYyODUwNzIwNTY3Mzc2NjA5MDM4MjgzNDE2MjcxNTA1MzA0NDY0OTczMzIzMzU0MTc5NzUzMzk4NzQxODk2NzAyMzA4ODQxNjI2MzQ5MTIwNDAyMDQzNzMxMzY5NDc3NzA0NjI4NzcwNDg3Njc3NjgwMTI2NDcxMjU4NTUyODE1MzcwMjI3MTQxMTQwMjY2NjIzNDUyMDM1NDkwMTg0Mjc3OTAxMDE4NDEwMjE4NDc4OTIyNjYxMzM1MTQyMDMxMTY5MjQ2NTQyMTIzMDE2NDI1NzEyMDg1NDMyOTQwMjg1MzM3Nzg3MjY1MTk4NDAwOTk4ODI1NjA4MjY4NTgxMzg0NDUzNTk2NDMzODk5Mjc0OTIxNDc1MzQyNzY5MjI0MjcyOTY4OTE1MjAyNDY4OTA5Njk5NCJdLFsiZGF0ZW9maXNzdWFuY2UiLCIxMzA3MzcxODQwMTcxMTMwMDE2MTMxNzAyMzE3NTYwMzc1OTkyNzkwODg1NjA3MDQ0NzgyNjk0MDA5NDY3NDMzMTYxNjY0MDA3NTcwNjg4MTYzNzc1Nzg4NTQxMjI3MDk1Njk2NTIyNTkxMTQxNjgzNjAwMDMzODc5OTcxODA0NjgzMDkwNzI1MTk2NzQzMzAzODgxNzE1NTcwOTk0NjgyNzU1OTg0NzMyMTIxNzA5MTkyNjI4Njc0MTEwNzg5NDgzMDU3MTYyNzA0NTU4ODM1NzQ4MDcxOTI3NDk0ODc5NDg3NTk2NTM5MzEzMTA0Njg5ODg0NTk5ODMzODkxNzYyMjUwNzA5NDE4OTM4NzM4NjQ5NTg1MDE3NzA3Nzc0NzI3MzI2MDQ1NzUzODU1MTg3NDMxOTk2NjIzMDQ0MDA5MTQzMzM2MTUyMzAyODY3OTgzNDMxODM2NTkzMDY0NTc1NTM4Njc2ODkyNzI4NzU3NDg2MzY0MTEzMzE5Mzg0Njg1Mzc0NDg1NDI2Mjg3ODMyNjAzNTQ0MTY2MDM2NzA2NzkzOTgzOTg1OTM2NDEzOTA5ODE2ODgwMjI3NjUzMzI0NTUwODc0MzI3NDc1MDM4NjQxNzg4NjcxNjU4MzM1NTA0ODkzOTI3OTUzMTg3OTE1NTI3NjM0ODQ1MjIyNzIzNTYzNzg0MDQzOTUyNTkzMjEyNjAyNTMxMjA2NzMxNTUwNDQ5ODE1ODI5NTk2NTYxMjMyMzY2ODE3MTQ0MjczODI4ODUyNjcyMTEzMDgxMTU4NDc5MTIzMjY2MTE1MzI3ODk5MDIwMjQwNzY2MjI5MzA5MDQzNzIyMDM3MjUxODY0Nzk1NjU5MDE0MzQ5ODA0MTcwMDg1MjEzNzQ5MzE0NzM2MjU2MTY4NjkzMjY5MDcwMjM0Mjc2Il0sWyJkcml2aW5nbGljZW5zZWlkIiwiNzM0MDkwODE5NDI0NDA2Mjk3MTcxNDEwMjAyMTU0MDM5MDk1Mzk2MzQ5NTU2NDg2NTI3NDc4MTU5ODg2MzEwNDE2ODEzNTkzNTcwNzAyMDM2ODQxMzQ5MDcyMDk2NjE1NTQwNTU4MzQ1MDY0NzU0OTY1Mzc2OTk4NjQzMDMwNjcwNzMyNzA2MTQyNDgwMTc5MDE4NjQ1NTc2MTYwNTE1MTMwNzY3NzM5NTQ4MDU2MjcxNjIxNjM2MTA0MjM5Mjc3MTExNjA4Mzc0NjIzNjMxMDkyNzQ1OTg3MTQ4MjI4NzAwNzY4OTEwMDM1MDQ1OTM2Mzg2NjIwNjY3NjcyNzgxNTMyMTI1Mjc1MzgyNTA5MjE3MzA0MjE1MjM0ODUzNzIxNjU0MTY4NzY3NzI2NzEzNzM2ODIxNDIwNTk1ODg0NDI2MTgzNjcyMjQ5MDEzNTUwMDU2OTE0MjYxMDkxNzgwNzgwNzc5ODgzNzg0Nzc1OTc3NzE1OTgxNjgyNzUzODg3MzQ0NTQ3MzU0Mzk5MjkyNTU1NzMxNjg4MjQzNDQ2MzU2NTYzMjgwMzQ3OTc2MzA5NDkzMzkzNTg3NzkzMzQ0ODc1OTQ3NjEwODUzNDc3NjU4NTk4ODU3ODAzODIwNDkxMDQyMzg5NzAyODk0NTkxMzI0NzAzOTg4MjMyMDMyNjk2MDc2MjY0MDIyMDQ2NTI3MzM1NDQ5NTM4NzQ3OTM4NTcyNDAwMjE1MTUzNzEwNjU3Njg4MTgwNzk3NDE3MjQyNDY4MTI0MTA1Njg0MjAwNDIyNjU2MDIxOTgxMTAyMzUzNzExOTg0OTkyODg5NTc3NjY4OTA2Mzk2OTEwODE5ODg4ODY0OTcwNDUzNjg4Njk3NTI5MzIyMDQ1Mjc1NzI0MjY5NTM3NjM4ODQxNzQwMjEwMTAiXSxbImZhbWlseW5hbWUiLCIyNDA3MDg3MjAyMDYyNjI1MTcwNzExNDcxNTQ3MDg1MTAxMTUwNjgzNzEyODkwNTA5NDM2MTkyOTIxMzg5MDU3ODk5OTQ0NDk3NjM0MjkwMTk1MjA5MDc5ODIzNzAyNjg0MzU5Mzk2OTU4NjA1NTgxNDU2NzA4NDEwMzc5NzMzNjc4NjUwMTcwMDE4NDcyMjI0NjQ4NDU5ODk4MzM1ODY2MTcwNjg2Mzk0MjU2NTA4NzI0Njg5MjEzMTIxMjgyOTkzODc2NTA2OTAyNDkwODQxODU4NzQ3OTYyMjY2Mzk3ODg5NDA3Nzc2NDExODQxODIzMDI1Nzc1NzA2ODk2ODIzMzkzNzY5Njg1NzEzNzY3MDAwNDI0MTM5MjkxMTM1MjI0MTI0MTAzNTEwMjY1ODAzOTgzMzY2ODc0NzE2NTIxMzY1NzQ4MTc4MDgzNTY4MjE0NDk0NTE3MDc0ODYxMTk1MDc5NjMwMDEzMjUwODIyNzU2MDQyMzkxODQxOTM3MjM2NTE1NDYwOTk5MTY5NzA1NDkyNjU4MzIxMzcyOTY4ODA5MTY1Mzc3MjYwMzE1MDAxNDQ0MjIwODEwMDA2MjExMzE3OTk1MDEyNDkwOTA4MTQ2NTUxNjYzNTQ3NTY1ODkwNTk2NzQ1NTQ1NzMxNzUzMTg0MjI4NjU1MzA1OTM1NDk5NzkxMDM1ODY0Mjc0MjA0MTcyMjgwOTQ4Njc0MjE1OTE3Mzc3MzkwNzQ5Nzg2Nzk4OTk0NjA0MTcxOTg1MzA4NjA3MDAwMDg5MjgyNTU2OTgyNDQwMjcwNTM1NzYzNzUwNTE2ODYyOTEwMDQyOTQ3NjkwNzEwODc2NjY3MTk1MjQxNDU0MzYwMTI2ODA3MjU5ODI5NjE2MTU3MDEzODY1OTk0NDQ5NzAyNDQ0NTQzNDcxMTciXSxbImRyaXZpbmdjbGFzcyIsIjk2ODcxMTMwMjg1OTIyOTczOTgzMDA0NzM2NjkwNTAzMzE1MTg5OTg0NTY4Mzg3MjIyNTM4MDM1NDI3NDk4NjU2Njk1MjAyNDIyMTI3NjM3MjI1MTMxMTYzOTQ3ODk4MzU0NTkxNTQyNTIyNDM4OTA4MTk0MzA3MjMwMTI0NjgzODk3NjMxMjgyMzM1MTY3MjI5OTY2NjAyMTk3OTk2ODMxMzEyNjIxMjgwMjY2Njg1ODI1MzIwMzQzMTE1MDY2NDMwMjg1Njk2ODY0MjQ1MDE4ODM5NDgxNTQyNDk5MjM2MjQ0NzI3NzYyMzQwMzM0MDczNTM1MzIzMzQ1NTQ0Njk4MzU4OTY3MTcwMTIzODc4MTQxMTUyMDcyNzc5ODg2MTMyOTA2MjcwOTAwMTQ3NTY0NDYwNTExODYzMTg4Nzg2NDY4NDI4ODIyMDM5Mzc5MDQ1MzM5MjQ3MDIyNDkwMjEyNTEyMDAyMDczMzg4ODc4ODI5MTk1NjQ3NjQwMTI0NDMwNDMzNDE3MjgzMTcxMzIxNTc4NzMwNDkyNTA0MDA5NTY2NjQ5MjYxNTU3MTI3OTMxMTMzOTM1OTQ0NzkzNDM5MDY2MTgzMTU4NTI0Njg2NDkxMzQ5MDg4NjAyMjE2MjE4MDA4NjQyMzcyMTM5NzEyNzIyOTQwMzY5NTM3NDkxODYxNTgxODY0ODg5NjA0MDQyMzM3OTUxNjAzOTM3MDE5MzEzNDAyOTU5MzMxMTM2NjI2NDY1NTQyODU4NTk5MTU5NjUwOTc4MzAwNjMxMTgxOTk2MzMwNzMyNjU5OTUzMDYzODU3NjE1MjcyMTMyMjk1MTAwMjM4Mzc1NDI0NDk3ODUyNzMwMzUzODI5MjYwNTQzODIyMTA2MTc1OTkwMjUzMTE0NjAzMTMwOTc1OTc2ODUzOCJdXX0sIm5vbmNlIjoiNDMwMjAxNTM4MjQzNjU0OTI1NjEzMTc1In0=",
      base64: Buffer.from(JSON.stringify(credentialOffer)).toString("base64")
    },
      undefined,
      "8356b08d-7505-4c6f-885b-b8a8997d0931",
      undefined,
      "anoncreds/credential-offer@v1.0"
    )
  ],
  list[2],
  list[3],
  "4195ffdf-6bdc-45b2-b149-0aa40575ece2",
  "4fd78c22-ec2a-4d64-9238-a96689fcd8c0"
);

export const credentialDefinition: Anoncreds.CredentialDefinition = {
  schemaId: schemaId,
  issuerId: "did:web:xyz",
  type: "CL",
  tag: "default-tag",
  value: {
    primary: {
      n: "2138440416314633374591088195063696546043123277066922638020134791602273076278733265198390559999196639059617332341897171969471396384426442263407149455313654361683364983454358134154449737184762832549626365860664862681300853260092245460133629393197506797813510115597160823513332022868942084864264115026443220310847039670437343802177458713870037673612155704946372493840496386886773727466495489416209443026828278038061798339071661238983028310965032474627760641708951476779486574582009667149594572417153818776817059886544993889576267253226541766667935646506220326294624143640755229768275395867260209310406030868988219396673",
      s: "375783515905172479678189694439438293124410653823481120500720236836905424414937248674149487774807325687499797860172928285508262280982970486768785344476352731223145346966890620843636512852741061102998942506714117113306492151964896503097722677379824165340858924427501815041684806109662866453098916197117471136063544146802291756839519730104512053670312142976363639936614666586671853469442125677481817693926232925010812196258066027716393514210467312905260647664980944899919627823305269563954240416713003055413714633135095057064137982879242895058862234484222386526805971607419993779687534728535549485529895709794024363544",
      r: {
        "name":
          "1339792759576954480492376578847792893360328516229286900150133471363186583829749911481667461401130501227404036403509999655715920590906655449568921973193383734895050724786440176443319672836559729173248746986868722909818220919403659226270224677749054849267437090960630699131904219878221761847284501312771606158271185560102808030298570761806506842137173746368720591853713380684958166350096104972264094294658573736651672550243062941442151223970367393394495048879093769466881961496855436604768494279534819818767775118321755604018201554330386132841353338949038092004967328970916219672468954833865033319360866074670007780618",
        "master_secret":
          "812744365608357986515546951213735794905780531247400654485983675689007345252680783465620382756268298324619070095212727671013163587057960315104611505032391159923993186222992472271453158974000542388378728270352857044809506169036309424352546411124179707638441673291158450401569249553417829367721202384508794163270341742020366880294131562095198464204914661778362000567741892826931098757894984606489166588347686099839472171239690638334264704817162009248984017866176802917792042053625420351082400053844639007943327226933542386763152742005797026693758548721701645341688448869500455939673371665799883665035196100593742820765",
        "age":
          "1449485663749865112122084718309651799315876369399955386403349647157857267039738681846930133397399422116354888183111371765400737684123480339059046850189555156190164677867617134270296041268333092741226364695203773774260453734976395787415140818149909781659096210986518767963537521355538341046796673590463001432519694523140909453262132434115275751962728302009629278131044645113553957913861064628840202634780565720519420413110235161108122048945955929418529430552412537083201815025931848807079298247150295522314313662791060217650118275501496403633416974085086279896777251419212772606455298376048561561660554033200664561122",
      },
      rctxt:
        "860911025032267966121537116747511648169210971555331852297327983657139587085942104673653614121933222003762276431341903715802016467096443789060052518852455149260273877263078757890535509188798812965587842763977780248898565717270220023917514653105171642271549164940634714174542454453494892988595340755873769347520154470471770549002457696766440819869518496811070236983222777464118573117519720995323647212086015212164299500917094183811610380285975565511188317704996015410378305078269879189003145417420690660051014495457659387330566369572172736139469523933999250778057312091553667159949004204624608553681313568626037528816",
      z: "2121804520854046155333146480946067403536032620048509173296488461620991470957905025190073393533065162826019376175710496819562862443921284310624809586091960645852195207737003870600962592140196338174630044646719556493115513937191171697377398878248566738696903934756282960488248731988728585511385043106689590903854157937005001256453527432445636221995990491062748065236450143241984118701723276135733985922648057616666342802697522278188836392945197544183484607303781398698553490093880903336637463635680300818603734335511536928765778308620191754963249571453280495676312497378814397081522448865551665149984638461990456850881",
    },
  },
};

export const credDefs = { [credDefId]: credentialDefinition };

// const credDefPriv = {
//   "value": {
//     "p_key": {
//       "p": "50957104779909256103124046877585200990122958021510336324811109332243264019916518884734527881265883842621638651654138490519910150300760403922440096583671349490817049335499202114611822414702382654926011129027005412479617902635084437633763504925074183412568150803936466930898538894851651557633454598251971107809",
//       "q": "10491375175016573457585293513392903024998926255120494898394963144797031598175840061318800357102546956338040887264817924662213691105270498051144266695095608728931613833327774345858281962092640166096046546529516160506450017427427976259238226819990743491753216693649399753293272555863963917899883903072136222933"
//     }
//   }
// }

export const credentialRequest: Anoncreds.CredentialRequest = {
  entropy: "1142072380108314237650942",
  cred_def_id: credDefId,
  blinded_ms: {
    u: "1689118228499446512233622257512093565697307724292581649558067177977418468270198965652811628162971531653287828688563734239904664304777674434320073129202690357380670047380799442724400847752832751883133766939722789567723445341747984677611661770576642039812763366326185395720295282741159279142280867904740565776042592587201816060455542296015709288294073549478080891219873161483301963939722197552825817554941200030210422587866865729456493892069007132396066298262359019717617849345976044354738699902854323047875368597660148094152688141439134827658160348552663224993475343731590726822875055781746561775476750380795220458475",
    hidden_attributes: ["master_secret"],
    committed_attributes: {},
  },
  blinded_ms_correctness_proof: {
    c: "66313855905026889529980608692072082629931918652483171255543772571602677402964",
    v_dash_cap:
      "5169550801697455452242140093025634390909463674518663245298788153074915061866285807795131214304665249607508339027392741342474552185959153947891355293312372375992664031738281615148506496627296648854559949991529011662582011823152841897508308130727641710061732039511015112200242146700318075469845897598082241604602595487318534183174095737080690601832186511518843917267635908294989035820804195001800265358424796940923877579933235620422232509769910651095999059119219693308067578315305849513409783117926247736735031036559762928888681321158267204066723213460886611196422126382373283555495126584422249760791618292555007495744442992223904200449973108151100616684034513176358273661487064377851931953350803343616377476337036135",
    m_caps: {
      master_secret:
        "25690651387661944211068998447908992962509881026695021483165455589548891160470881743048912805501050149385219761286042175899628999699678098478915881268695707431098806973140185979800",
    },
    r_caps: {},
  },
  nonce: "384669312299348345170475",
};

export const credentialRequestMeta: Anoncreds.CredentialRequestMeta = {
  link_secret_blinding_data: {
    v_prime:
      "77955816791910907008648197625607251151043985904464685610589268755863823710042524325116894319321593903274621305101429675982328480929558765668395477286044036175023571135951855240427212072392115346223990606637530234412828281763675277786130736667970888577953183545724972075795470500481480587504146888168295548415330994692518385699942377815143595346327569474696881929936106990569016082555989993978175098221779656764883735585641835663445021379504408712254130562797706300716047105206280868009518894051808092685428634143160521444146484478798980767637798519834481411563284127214784285274598304432830695507876151369513892826498610123007743998318639",
  },
  nonce: "384669312299348345170475",
  link_secret_name: "link-secret-id",
};

export const credentialIssued: Anoncreds.CredentialIssued = {
  schema_id: schemaId,
  cred_def_id: credDefId,
  values: [
    ["age", { raw: "28", encoded: "28" }],
    [
      "name",
      {
        raw: "john",
        encoded:
          "68231017646261521938414776289104528029572365316885701689085572319872983785594",
      },
    ],
  ],
  signature: {
    p_credential: {
      m_2: "90069112451055455821909400594406389902973279602878070870495376996444562816830",
      a: "863206875070883508185084882433898034597056397288064150964909699848368101345942320681713420008320908172031366175764418516990530197118497873083108998836069955208560561365885178868957934721121818800195152765722925303482592098299043872531270628211279296662298703380533421005111978188231514326269144788469626292012467891951834985914306479999402596193828005218601831577836972155135721113555056320950898902900812022442212634154104525444865293627714269994627396682813488336112739630599692616934030468341046723507920859605204701140679082157987867742695138146865893004386171114420488126218257552981621418620795971402342420055",
      e: "259344723055062059907025491480697571938277889515152306249728583105665800713306759149981690559193987143012367913206299323899696942213235956742930103453519678657228466134629917218519",
      v: "8143446409913772255034152121328368039740626498888186354398879911744619763092523700068534155970316639325500748530790803346133400742208591972338832230481355996998878663423674449927007017103519158518841363025981102486265082027859231212785242394349018269859142047237847004466507505310624703221646956096334505927823727535128643408929895721360649486881661653430795374387398186589089307192641017475854047689060015396792244392488752028709889494148392343976206977761336843050968984216787674405343600492400040342034954879243301323597723425634111031850182237417361092482780483169862079554189749933027076569428078736298787846257330215373212181232245606400244542414366394276001432386415321137893700290570865313825552071290779533007084933667485178966714254743589959898887425372871525225305207025738953531478454150168638254081854031392",
    },
  },
  signature_correctness_proof: {
    se: "471472993450654125094815726148197965574424476578333157254325140782961168825105331051644868767781028679788350834880525043676296586472820693042050052742548830411776592846473749819901073592049502739648801719081538069485917308909817697575396656049685055624390272024518499392129521543088779385005671778669761735194904527436501886256576199999327721691983944094804259738379761906169617912917061639899452266237275643426312858778978574970646335896180734752298062049872360989081844266166354770197707949373253367460986810798494254673065207170398218825977487917435335438139842606666094711078074326163791098396957184806668244832",
    c: "99614365014321274953096367476703930366339506406903542322778818757090357462808",
  },
};

export const credential: Anoncreds.Credential = {
  schema_id: schemaId,
  cred_def_id: credDefId,
  values: {
    age: { raw: "28", encoded: "28" },
    name: {
      raw: "john",
      encoded:
        "68231017646261521938414776289104528029572365316885701689085572319872983785594",
    },
  },
  signature: {
    p_credential: {
      m_2: "44464127759225804519154260573419200504082381909738430963545801214806379436064",
      a: "4537093391274769048096905159867126949796909025225705224288954426921640171597704111462819825617374294108404940914249093987521800994422747620422237663353318349538212446299317549769860217938061892913286650903703191184650468358753495384259696015863082143942130772453625379145160833167625443727300379461113840992040673390152473109881787323947549593943193422187939170423266230278853266010138491464195728326470785577942674918868687554820469863575976976842158342515770141736893925669434969474230626897791544468183409975721336631836607332492090712899267952140246958856618288956346080173935900268326283043910354065577411320896",
      e: "259344723055062059907025491480697571938277889515152306249728583105665800713306759149981690559193987143012367913206299323899696942213235956742929986006193869737621598678085866827301",
      v: "9259439468257080624702657279317076457784371346197579350398676902451470102901305135163779143395478781488036554400159214422602284838947178836568958872839093728310470237336423201753170881188949011971246634807284985960512457975072488345097240843795412599039645126829814652430311761529220871006204494970762650009007357965031195398576261929291211465378072523743172274028104055480002684830645264592927956253693601224667189419286367838489675614266379084995825960438015604703287451802463025157131219113523264602741907957555134204992240614133777399824953738569444150873673866695904092665521917028475360321444290066521380644310208228136998456229515335950223378498342441478007066967057797006052608363058916415738209454728029472820767157010892676064998497283258253989213347359055530545535915626346987134455308526307998704009879280191",
    },
  },
  signature_correctness_proof: {
    se: "458197117500805803113092667913428302739803190185140352164656096414394114260974240312605498033333230577574855178094418623817675929226156550219299725765047122236285990829595873752648028995868809797487431911394109873926745812946936281018995735115057546374253192634973048574386543206990701654517370092636041001997823858039503257362688554915616100036978001284928087927691285908506045055799764944276914237939333808694823754060184338188432545205806931317878854327970145987857326463785125668610034885767913620646353914158897289360719952836067583720159385447153839016913970434799054088445343924844006850592504185359038118972",
    c: "103527574142031093658342914946489223141816611848327315663987950136315136076360",
  },
};

export const presentationRequest: Anoncreds.PresentationRequest = {
  nonce: "742809673342769044929402",
  name: "example_presentation_request",
  version: "0.1",
  requested_attributes: {
    attr1_referent: {
      name: "name",
      restrictions: {
        cred_def_id: credDefId,
      },
    },
  },
  requested_predicates: {
    predicate1_referent: { name: "age", p_type: ">=", p_value: 18 },
  },
};
