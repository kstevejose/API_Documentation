"use strict";(self.webpackChunknewsite=self.webpackChunknewsite||[]).push([[9121],{19849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>x,default:()=>v,frontMatter:()=>g,metadata:()=>i,toc:()=>b});const i=JSON.parse('{"id":"api/delink-accounts","title":"API used to delink customer FIP accounts.","description":"This API will be used to delete a previously established account link to the user\'s profile. Once deleted, the financial information can not be retrieved for that account through Account Aggregator.","source":"@site/docs/api/delink-accounts.api.mdx","sourceDirName":"api","slug":"/api/delink-accounts","permalink":"/API-Documentation/docs/api/delink-accounts","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delink-accounts","title":"API used to delink customer FIP accounts.","description":"This API will be used to delete a previously established account link to the user\'s profile. Once deleted, the financial information can not be retrieved for that account through Account Aggregator.","sidebar_label":"API used to delink customer FIP accounts.","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"docs/api/financial-information-provider-api","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/API-Documentation/docs/api/financial-information-provider-api"},"next":{"title":"APi used to discover customer FIP accounts.","permalink":"/API-Documentation/docs/api/discovered-accounts"}}');var s=r(74848),n=r(28453),o=r(33617),a=r.n(o),d=r(17543),p=r.n(d),c=r(86013),l=r.n(c),m=r(63723),u=r.n(m),h=(r(18766),r(79329),r(9303));const g={id:"delink-accounts",title:"API used to delink customer FIP accounts.",description:"This API will be used to delete a previously established account link to the user's profile. Once deleted, the financial information can not be retrieved for that account through Account Aggregator.",sidebar_label:"API used to delink customer FIP accounts.",hide_title:!0,hide_table_of_contents:!0,api:"eJztnOtu2zoSgF9lwP1xTgHLsXNpHWOxOG6TLnzapkYuZ4Ftg4IWRzZPJVIlKSfeIMC+xr7ePsliSEmWL02aolgUifMnjkWRM0PONyOKkxvm+MSy/gc2iGNdKAdH0sZ6hmYOXAl4K9VnqSbsssV0joY7qdVQsD47wlSqz+VNlrWYQBsbmVMD1mfnU2lhMBrClUxTGCMUFgU4DQJTdAgccoMzqQubzgGt4+NU2ikK4KUY1Du1d1N/r/nFQm50IlNsw3sVY9mRaPkWiVRcxZKnIFWiTeblhJgrUNrR8AadkThDAYk24Kbc1SO5qdHFZAqVAQaTicEJd9q0P6qPCv46NrDztxPtsA8f2Sl+KdA6eKnFHI6veZanCH/wtMCPzFuMmthcK4t27fpEzlDBGFN9BdJ6UWSaFtaRYWcIeWFyTTdqlc7brMVybniGDg1N0Q1TPEPWZ9fRn1c2snKiuCsMshaTZPMpcoFmbSqO0PGYTPv7P85AJ95eYy3mrMUMfimkQcH6zhTYYjaeYsZZ/4a5eU4jWWdo9m9vL0NjtI4UpxaxVg6Vo488z1MZe5vv/Glp0JtGV4tB6kXGWszJjKY9y+nztZKCtdgMDS20cmw9/hNjapobWnpOoqXuqNGagKs608qbobH0V4thmAbWZ7vtTrvDWuw6S73gzhk5LhwGA9zeNuW6d5BXBsM6q++pzJuhtXyCNINhNbI+E9xhRC2XBers7kWd59Hu8/Pui/5Bt9/ttfe7u/+8W0Zvr3vlu1DyS4HgDFeWx15SKVA5mUg0wSFpBeZGz6SQagJcASrvpf6X4THysUyl82txIXSyd/DieZfH0T7v9qJuF3vR4fMkiTq7L17ww2ScoIjvVKBaBiurIy6s0xmagRAGLUGFKHCKyUmRjb9lbax2cK+Jhgt7lFP3quwCJqiIdyhAFHSvv2pwIoO3agVX0k1hMFi2TSXCJx5k+I3zTwur32mVZWXvlf0UEzRIKFT+DuCWkIACxnN4PRwBt5Bz40izim0lzmFkdIzWLot+3fy5Q9JbEnbF3yCV1o9UU1UTdkklFIu+SoAN4vitV9YThXm3c2l55QiXrtFgi0WS8NSi/6ZkLPW62+nQr2WR3r9hrRKJvtEqNNdu2MTJapgKmF8H5G3ru4lI6tLgMrVPHYw/L/P2u514V+wiMQ8r5nXwQcxrTvQD0ddi1nFX2C0Dfw4G1vNxr4hnvt0GAZbGPTp+Ozx5c3z0UOzWgNIJxFolssp9aZVXLBY+V2+zjZgN97PQ/f4mkr7kAioc/6xIXfYBNEabV1rgpun5in1bDFWRkS8O1YynUixULr+4OB0u/ni74p7l12cYF0Y6UuysssuRRnui3Tvu4im7XJ/FU4xR0qMJVyBDNwsrJUZn4SEot84gz8CimfkheZq+T/xzwQO0Xx76mJpCrAUCdcCl8l4eHrsWslSG+DGm+z4blfagvILXMrWXzNAE6sIIrfD5nZ38P6Nr+6Hh9dvi2/lSYFv4VLAGvCusf9y1PENiH12c0cMnWFQOpGo2X5KwM+51u73uYXTY2d+P9nsHz6NxBzHqxb1eZ+8g6fUOer/8qARhMZuN6XjAk1K3v7fX39tvH3QO735S+j5XkEp40pQBLzd6nGIWYt2y/e4ZmdbcNw5cZkZhEC6EpKs8BRHyhTYcK1sYBKVpKq30+wXNzQ5pQao4LQSKap6x2fPygmxoa3OMZSLj5eZs3Qf/TtmAjCHcW81hG86qDpYvWMBrR0lViTBpmxHIt11En8vFlZe85sfmrwm9dbzqrkedC8ULN9VG/gsFBd2QTz3+uNXUexNDN9tli88tPrf4fDz4bHp56eQVK/fXSXeiHbzWhRJPgpAn+qyIp3/U+x/lE9mJdsEGG6BJBkpKA/2AhHsYfANteAfhARPEgeFRtZYWS7B0FRAarX+VkVGC7DctrqX1LrbYzXmg+huzbD8c+ucPXZgY4YqHgb0Ntun2Nl5s48Xjihc1/DZ9uZRqH66HgVdaJamMH8W+0NquaJZrhyqeBztfTVHBxcXwaGcoaPYJioXfbf6mjZGV7jbR92FDbjm85fCWw4+HwzVKS9x2d9e5OTIYaxWMBAmXKT6NvL2p9+ug9gZ+DhykyOk1tMJKt7xxp4W5Lho5tpDCI3WqU7EF6haoW6A+KqBugEZA68Gml5xD5dCQoc7867Ugw5OAa6X5V/PSY+V3SdBUryhLS/lh2zAi6NKRiznwCZdqi9ItSrcofVQorRAR2BhAUbF0wws42jMdklYZKvdEUtQT7Zoqb8DouZmXhyu435YnlhZKLm6CBL1JdgajYdufuCFyhl2AKyzPrCGMefz5ihsBsc5y7iQfp0hH7bebs1vwbsH7uMC7QpWKuXvr1CQ0yxjhQvEZlylB4Ulwt9S7qfYG9lbWkRaKJQNtgbkF5haYjweYG3BQnpy+jkjgCaqonIGImBaVFSkl3/yg5IGh3u4zzn253dfvbDHvIVUPJEqGbqqpRDLXfppz7qasz3aqWsmdcBybaOrT6TBUYVJq5Huw1QFZujAYfOK5/ORF+XDZvHxGQA2AaTaqlwzP5Rucr3OmbkvTXmaVvgKCDsyP5372BwPWqqp1OK87X640JLMS3U8XlYHH1SIpoVfDq+HgdxW9lST71hKzRiHZWt3D/WUIK8UGK4f/STvyEW/Rcnm9rutMhw3vGQUbGsrC18z9Fzgrsoyb+Ud1PkW4uwcLv74ejuwzyLhUdBy7OsNvK1pXStk2UHfrRauQ8Xl9boRmlCoBNtfHrnYJhSVs4TUFb+kAU4yd0UrGVFtAQcCCHpNYtF7KslkhDcau7iRsD4UgU4o4GloQmPi7pmgQuEFoPveUa440D4U44ZFmTTV/VZT1ycDrMf/77//YylAtOshOKi5VEodKH1F1/aWg+uZS/c22GXOqFdJqYQ0hJ9LxNJ1DWWKybp6gsDd6YdwUTT2PIZrauhbE272yqZfsOlT+0gWlaYmG9MkXUVsNg0FVziyTOUgHfKyLcIAonnI1QVuBezFIOUBrpRCEjFEuEAvoYl/mHEURCykcj70/YcZl6r0/4rn8zeBYurY2k7ZUVLBXHTtqpCdRmI8oVJRTxslzWQH2Hs+hZf/M+w+5HZEz4z5rrCoGR8NmCTkVh9crztf5lG7SXvW/RqHytij9xxSll+HF4bXbyVMe1oOPXzdlsKsLvcM/BvDh7rLFphQQ+x/YzQ1514VJb2/pa++NFNwomBq/n+FDXfX44sOgkJYuVCWgd8zyr9XOyTO4o/R9oxJVvF8tr69iPLttVUnBqzBedE79LFqsPfgs7qDDmLm7s20zexi9PztnrZBW9G9Y5vNQZvgV1e3zK5KG/ieDC8nKTfjuhqVcTQpKwfos9Ek//wN1FO18",sidebar_class_name:"post api-method",info_path:"docs/api/financial-information-provider-api",custom_edit_url:null},x=void 0,f={},b=[];function y(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"API used to delink customer FIP accounts."}),"\n",(0,s.jsx)(a(),{method:"post",path:"/Accounts/delink",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"This API will be used to delete a previously established account link to the user's profile. Once deleted, the financial information can not be retrieved for that account through Account Aggregator."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("br",{}),'Note: "Request Body Example Value" and "Responses Example Value" given below is for illustrative purposes only.']}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(p(),{parameters:[{name:"x-jws-signature",in:"header",description:"Detached JWS of the body",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{required:["Account","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version",example:"2.0.0",xml:{attribute:!0}},timestamp:{type:"string",description:"Creation timestamp of the message.",format:"date-time",example:"2023-06-26T17:51:18.412Z",xml:{attribute:!0}},txnid:{type:"string",description:"Unique transaction identifier used for providing an end to end traceability.",example:"f35761ac-4a18-11e8-96ff-0277a9fbfedc",xml:{attribute:!0}},Account:{required:["customerAddress","linkRefNumber"],type:"object",properties:{customerAddress:{type:"string",description:"Identifier of the Customer generated during the registration with AA.",example:"customer_address@aa_identifier",xml:{attribute:!0}},linkRefNumber:{type:"string",description:"Reference number assigned by FIP as part of Account Linking Process.",example:"xxxxxxxxxxxxx",xml:{attribute:!0}}}}},description:"A list of account to be linked",xml:{name:"AccLinkRequest"},title:"AccDeLinkRequest"}}},required:!1}}),"\n",(0,s.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{required:["AccLinkDetails","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version",example:"2.0.0",xml:{attribute:!0}},timestamp:{type:"string",description:"Creation timestamp of the message.",format:"date-time",xml:{attribute:!0}},txnid:{type:"string",description:"Unique transaction identifier used for providing an end to end traceability.",example:"410c2d2e-4a1e-11e8-960e-0277a9fbfedc",xml:{attribute:!0}},AccLinkDetails:{required:["customerAddress","linkRefNumber","status"],type:"object",properties:{customerAddress:{type:"string",description:"Identifier of the Customer generated during the registration with AA.",example:"customer_address@aa_identifier",xml:{attribute:!0}},linkRefNumber:{type:"string",description:"Reference number assigned by FIP as part of Account Linking Process.",example:"xxxxxxxxxxxxx",xml:{attribute:!0}},status:{type:"string",description:"Status of Account Linking",example:"DELINKED",xml:{attribute:!0}}}}},description:"A response of confirmation for account delink.",title:"AccDeLinkResponse"}}}},400:{description:"Bad Request",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["InvalidRequest","InvalidURI","InvalidLinkRefNumber","InvalidSecurity","SignatureDoesNotMatch"]}},description:"Received an invalid response from the upstream server",allOf:[{properties:{errorCode:{type:"string",description:"Error code pertaining to the invalid request",xml:{attribute:!0},enum:["InvalidRequest","InvalidURI","InvalidSecurity","SignatureDoesNotMatch"]}},description:"Response to bad request.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"BadRequest"}],title:"BadRequestLink"}}}},401:{description:"Unauthorized Access",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["Unauthorized"]}},description:"Unauthorized Access",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"UnauthorizedAccess"}}}},404:{description:"Not Found",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["NoSuchVersion","AccountNotFound"]}},description:"Not found",allOf:[{properties:{errorCode:{type:"string",description:"Indicates that the version ID specified in the request does not match an existing version",xml:{attribute:!0},enum:["NoSuchVersion"]}},description:"Requested resource was not found.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"NotFound"}],title:"NotFoundLink"}}}},409:{description:"Conflict",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",description:"IdempotencyError when UUID/Id is not unique",xml:{attribute:!0},enum:["IdempotencyError"]}},description:"IdempotencyError when UUID/Id is not unique",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"Conflict"}}}},412:{description:"Precondition failed",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["PreconditionFailed"]}},description:"At least one of the preconditions you specified did not hold",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"PreconditionFailed"}}}},500:{description:"Internal Server Error",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["InternalError"]}},description:"Encountered an internal error. Please try again",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"InternalServerError"}}}},501:{description:"Not Implemented",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["NotImplemented"]}},description:"Trying to access an unimplemented feature/API. Required when we provide backward compatiable API.",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"NotImplemented"}}}},503:{description:"Service Unavailable",headers:{"x-jws-signature":{description:"Detached JWS of the response body",schema:{type:"string"}}},content:{"application/json":{schema:{properties:{errorCode:{type:"string",xml:{attribute:!0},enum:["ServiceUnavailable"]}},description:"Service is unavailable",allOf:[{required:["errorCode","errorMsg","timestamp","txnid","ver"],type:"object",properties:{ver:{type:"string",description:"API version.",example:"2.0.0",xml:{attribute:!0}},txnid:{type:"string",description:"Transaction id of the request. Must be same as the value sent in the request",example:"0b811819-9044-4856-b0ee-8c88035f8858'",xml:{attribute:!0}},timestamp:{type:"string",description:"Response timestamp",format:"date-time",example:"2023-06-26T11:33:34.509Z",xml:{attribute:!0}},errorCode:{type:"string",description:"Error code indicating the problem with the request",xml:{attribute:!0}},errorMsg:{type:"string",description:"Error message with additional details. Ensure no sensitive information is included in the error message.",example:"Error code specific error message"}},description:"Generic Error Response. Specific Error Responses extend from this.",title:"ErrorResponse"}],title:"ServiceUnavailable"}}}}}})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}}}]);