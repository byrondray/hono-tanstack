/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedRoundHistoryImport } from './routes/_authenticated/roundHistory'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedFriendsImport } from './routes/_authenticated/friends'

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedRoundHistoryRoute = AuthenticatedRoundHistoryImport.update({
  id: '/roundHistory',
  path: '/roundHistory',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedFriendsRoute = AuthenticatedFriendsImport.update({
  id: '/friends',
  path: '/friends',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/friends': {
      id: '/_authenticated/friends'
      path: '/friends'
      fullPath: '/friends'
      preLoaderRoute: typeof AuthenticatedFriendsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/roundHistory': {
      id: '/_authenticated/roundHistory'
      path: '/roundHistory'
      fullPath: '/roundHistory'
      preLoaderRoute: typeof AuthenticatedRoundHistoryImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedFriendsRoute: typeof AuthenticatedFriendsRoute
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute
  AuthenticatedRoundHistoryRoute: typeof AuthenticatedRoundHistoryRoute
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedFriendsRoute: AuthenticatedFriendsRoute,
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
  AuthenticatedRoundHistoryRoute: AuthenticatedRoundHistoryRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren
  '/friends': typeof AuthenticatedFriendsRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/roundHistory': typeof AuthenticatedRoundHistoryRoute
  '/': typeof AuthenticatedIndexRoute
}

export interface FileRoutesByTo {
  '/friends': typeof AuthenticatedFriendsRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/roundHistory': typeof AuthenticatedRoundHistoryRoute
  '/': typeof AuthenticatedIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/_authenticated/friends': typeof AuthenticatedFriendsRoute
  '/_authenticated/profile': typeof AuthenticatedProfileRoute
  '/_authenticated/roundHistory': typeof AuthenticatedRoundHistoryRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/friends' | '/profile' | '/roundHistory' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/friends' | '/profile' | '/roundHistory' | '/'
  id:
    | '__root__'
    | '/_authenticated'
    | '/_authenticated/friends'
    | '/_authenticated/profile'
    | '/_authenticated/roundHistory'
    | '/_authenticated/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/friends",
        "/_authenticated/profile",
        "/_authenticated/roundHistory",
        "/_authenticated/"
      ]
    },
    "/_authenticated/friends": {
      "filePath": "_authenticated/friends.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/roundHistory": {
      "filePath": "_authenticated/roundHistory.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
