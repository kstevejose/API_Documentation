"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[5319],{49621:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"api/request-fi","title":"API used to request for financial information.","description":"This API is used by the AA to request for financial information from the FIP.  The FIP will validate the request against the signed consent and return a  sessionID which can then be used by the AA to fetch the required data.","source":"@site/docs/api/request-fi.api.mdx","sourceDirName":"api","slug":"/api/request-fi","permalink":"/API-Documentation/docs/api/request-fi","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"request-fi","title":"API used to request for financial information.","description":"This API is used by the AA to request for financial information from the FIP.  The FIP will validate the request against the signed consent and return a  sessionID which can then be used by the AA to fetch the required data.","sidebar_label":"API used to request for financial information.","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"docs/api/financial-information-provider-api","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"API used to notify consent status change.","permalink":"/API-Documentation/docs/api/notify-consent-status"},"next":{"title":"API used to send consent artefact.","permalink":"/API-Documentation/docs/api/send-consent-artefact"}}');var s=i(74848),n=i(28453),o=i(33617),a=i.n(o),d=i(17543),p=i.n(d),c=i(86013),m=i.n(c),l=i(63723),u=i.n(l),h=(i(18766),i(79329),i(9303));const f={id:"request-fi",title:"API used to request for financial information.",description:"This API is used by the AA to request for financial information from the FIP.  The FIP will validate the request against the signed consent and return a  sessionID which can then be used by the AA to fetch the required data.",sidebar_label:"API used to request for financial information.",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"docs/api/financial-information-provider-api",custom_edit_url:null},g=void 0,b={},y=[];function x(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"API used to request for financial information."}),"\n",(0,s.jsx)(a(),{method:"post",path:"/FI/request",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"This API is used by the AA to request for financial information from the FIP.  The FIP will validate the request against the signed consent and return a  sessionID which can then be used by the AA to fetch the required data."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("br",{}),'Note: "Request Body Example Value" and "Responses Example Value" given below is for illustrative purposes only.']}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(p(),{parameters:[{name:"x-jws-signature",in:"header",description:"Detached JWS of the body",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(m(),{title:"Body",body:{description:"Initialization parameters for requesting the financial information",content:{"application/json":{schema:{required:["Consent","FIDataRange","KeyMaterial","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version",example:"2.0.0",xml:{attribute:!0}},timestamp:{type:"string",description:"Creation timestamp of the message.",format:"date-time",example:"2023-06-26T09:58:50.505Z",xml:{attribute:!0}},txnid:{type:"string",description:"Unique transaction identifier used for providing an end to end traceability.",example:"c4a1450c-d08a-45b4-a475-0468bd10e380",xml:{attribute:!0}},Consent:{required:["digitalSignature","id"],type:"object",properties:{id:{type:"string",description:"Unique ID generated by AA after consent approval is given by the customer.",example:"654024c8-29c8-11e8-8868-0289437bf331",xml:{attribute:!0}},digitalSignature:{type:"string",description:"Signature part of the Consent JWS. The receiver has to check if the given signature matches with the signature in the original consent JWS.",example:"NdjwMjLortTb10dxcJezkvdOxPVvEdZvIqwqVWOHnE8pS_YDswcRPLTRmds2xO-Tvm_A2cFv1qKYpaZnv8Bl6xmZoOsG_F8_40gRZqIhz5hF9puzp8lEEhMlZ6NaX2Y2OYkwHcOBBpCIXpLXB4CMWiefUEWjO9zKDd5JJwZ4vLWeT4qgwvPfRqE60B33tzVlF5E6OA2mKK17sGRXsfrI9obEjL52RMdGo_9bv1HnHfvPlbj5ihj6d_5iTtoh7HUC_X8CrJGvkgkCjP_7of1jPb5QgJ9nx_Yfsxj3vf8zEseZIVISjF3MwBzW7Di4CpfQl4wlnpkQO9MKu78F69Z9Ig"}},description:"Consent Artefact details."},FIDataRange:{required:["from","to"],type:"object",properties:{from:{type:"string",description:"Date-time from which the financial information is requested",format:"date-time",example:"2018-11-27T06:26:29.761Z",xml:{attribute:!0}},to:{type:"string",description:"Date-time till which the financial information is requested",format:"date-time",example:"2018-12-27T06:26:29.761Z",xml:{attribute:!0}}},description:"Specifies the date time range for which the financial information is requested"},KeyMaterial:{required:["DHPublicKey","Nonce","cryptoAlg","curve"],type:"object",properties:{cryptoAlg:{type:"string",description:"Specifies the cryptographic standard algorithm used for encrypting/decrypting the financial information. Currently ECDH is a crypto algorithm that is supported",example:"ECDH",xml:{attribute:!0}},curve:{type:"string",description:"Describes a secure elliptic curve standard that is used to perform ECDH.",example:"Curve25519",xml:{attribute:!0},enum:["Curve25519","X25519"]},params:{type:"string",description:"Specifies the secure standard cryptographic primitives to perform end to end encryption.  Use Key-Value pair separated by a semicolon. The value given for cryptographic primitives in  example should be used for symmetric encryption(AES-256 bits, GCM-128 bits and No Padding) and key exchange protocol(ECDH).",example:"cipher=AES/GCM/NoPadding;KeyPairGenerator=ECDH",xml:{attribute:!0}},DHPublicKey:{required:["KeyValue","expiry"],type:"object",properties:{expiry:{type:"string",description:"Specifies expiry date of the public key.",format:"date-time",example:"2019-06-01T09:58:50.505Z",xml:{attribute:!0}},Parameters:{type:"string",description:"Defines the public parameters used to calculate session (data\n                  encryption/decryption) key."},KeyValue:{type:"string",description:"Contains the value of emphemeral public key"}},description:"Contains the public information for performing the ECDH key exchange."},Nonce:{type:"string",description:"Nonce is a random string generated every time during  the publishing of Ephemeral public key to ensure that  old communications cannot be reused in replay attacks. Nonce should have a fixed length. Unlike random numbers,  random strings do not require byte ordering.  Hence session keys can be generated in a platform  independent way. Ref: https://tools.ietf.org/html/rfc5116.                         ",example:"29512b70-ca84-46b5-9471-63765599cf15"}},description:"Contains the cryptographic parameters that are required to perform End-to-End encryption for sharing the financial information between the producer and the consumer in a secure manner. Please refer this link for more information: https://tools.ietf.org/html/rfc4492",xml:{name:"KeyMaterial"},title:"KeyMaterial"}},description:"A request of financial information to the FIP based on a consent",title:"FIRequest"}}},required:!0}}),"\n",(0,s.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{required:["consentId","sessionId","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version",example:"2.0.0",xml:{attribute:!0}},timestamp:{type:"string",description:"Creation timestamp of the message.",format:"date-time",example:"2023-06-26T10:05:50.505Z",xml:{attribute:!0}},txnid:{type:"string",description:"Unique transaction identifier used for providing an end to end traceability. Base-64 encoded UUID",example:"c4a1450c-d08a-45b4-a475-0468bd10e380",xml:{attribute:!0}},consentId:{type:"string",description:"Unique ID generated by AA after consent approval is given by the customer.",example:"654024c8-29c8-11e8-8868-0289437bf331",xml:{attribute:!0}},sessionId:{type:"string",description:"A session ID is a base-64 encoded UUID number that FIP returns to the AA for each financial information access request.",example:"caa2f259-2dc2-4075-87aa-6d81018b6183",xml:{attribute:!0}}},description:"Session id and other details to fetch the financial information.",title:"FIResponse"}}}},400:{description:"Bad Request",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["InvalidRequest","InvalidURI","InvalidSecurity","SignatureDoesNotMatch","InvalidKey","InvalidDateRange","InvalidConsentId","InvalidConsentStatus","InvalidConsentDetail","InvalidConsentUse"]}},description:"Bad Request during FIRequest",allOf:[{properties:{errorCode:{type:"string",description:"Error code pertaining to the invalid request",xml:{attribute:!0},enum:["InvalidRequest","InvalidURI","InvalidSecurity","SignatureDoesNotMatch"]}},description:"Response to bad request.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"BadRequest"}],title:"BadRequestFIRequest"}}}},401:{description:"Unauthorized Access",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["Unauthorized"]}},description:"Unauthorized Access",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"UnauthorizedAccess"}}}},403:{description:"Forbidden",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{type:"object",properties:{ver:{type:"string",description:"API version",example:"2.0.0",xml:{attribute:!0}},timestamp:{type:"string",description:"Creation timestamp of the message.",format:"date-time",xml:{attribute:!0}},txnid:{type:"string",description:"Unique transaction identifier used for providing an end to end traceability.",example:"f35761ac-4a18-11e8-96ff-0277a9fbfed"},errorCode:{type:"string",xml:{attribute:!0},enum:["ConsentExpired","ConsentRevoked","ConsentPaused"]},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Access is forbidden.",title:"ForbiddenFIRequest"}}}},404:{description:"Not Found",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["NoSuchVersion","ExpiredKeyMaterial"]}},description:"Not Found error during FI Request",allOf:[{properties:{errorCode:{type:"string",description:"Indicates that the version ID specified in the request does not match an existing version",xml:{attribute:!0},enum:["NoSuchVersion"]}},description:"Requested resource was not found.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"NotFound"}],title:"NotFoundFIRequest"}}}},409:{description:"Conflict",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",description:"IdempotencyError when UUID/Id is not unique",xml:{attribute:!0},enum:["IdempotencyError"]}},description:"IdempotencyError when UUID/Id is not unique",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"Conflict"}}}},412:{description:"Precondition failed",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["PreconditionFailed"]}},description:"At least one of the preconditions you specified did not hold",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"PreconditionFailed"}}}},500:{description:"Internal Server Error",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["InternalError"]}},description:"Encountered an internal error. Please try again",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"InternalServerError"}}}},501:{description:"Not Implemented",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["NotImplemented"]}},description:"Trying to access an unimplemented feature/API. Required when we provide backward compatiable API.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"NotImplemented"}}}},503:{description:"Service Unavailable",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["ServiceUnavailable"]}},description:"Service is unavailable",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"ServiceUnavailable"}}}}}})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);