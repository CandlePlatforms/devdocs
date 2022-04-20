---
id: introduction
title: Introduction
---

## DID
A DID is essentially a unique identifier, that has been created without the presence of a central authority.  DID in context of Verifiable Credentials is used to sign documents, thereby facilitating the user to prove ownership of the document when required.

## Polygon DID Method
The Polygon DID method definition conforms to the DID-Core specifications and standards. A DID URI is composed of three components separated by colons, the scheme, followed by the method name and finally a method specific identifier. For Polygon the URI looks like
```
did:polygon:<Ethereum address>
```
Here the scheme is ‘did’, method name is ‘polygon’ and method specific identifier is an ethereum address. 

## Polygon DID Implementation

Polygon DID can be implemented with help of two packages, user can import the respective npm libraries and use them to incorporate Polygon DID methodologies in thier respective applications. Details for implementation are provided in next section.
