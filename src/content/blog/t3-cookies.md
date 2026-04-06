---
title: "T3 Stack Cookies Problem"
date: "2024-03-09"
description: "How to set cookie header in T3 Stack App Router API response without installing any third-party dependencies."
tags: ["react", "nextjs", "t3", "cookies"]
---

Today is 10/3/2024. By the time I'm writing this, the bug might already been fixed. Long story short, I was migrating my code base from pure Next.JS to T3 Stack and stumbled across a problem where I can't set a cookie header in my API response. As I'm googling for solutions, I found that many people also faced the same problem. After surfing the Internet for a good hour, I solved the problem without installing any third-party dependencies; just changing some code!

## Steps

Navigate to your `src/trpc/react.tsx` and look for this useState, then change `unstable_httpBatchStreamLink` to `httpBatchLink` imported from `@trpc/client`

```typescript
const [trpcClient] = useState(() =>
  api.createClient({
    transformer,
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NODE_ENV === "development" ||
          (op.direction === "down" && op.result instanceof Error),
      }),
      httpBatchLink({
        url: getUrl(),
      }),
    ],
  })
);
```

Navigate to your `src/app/api/trpc/[trpc]/route.ts` and look for this code and update the `createContext` property to the following. You may get typescript error at first, but bear with me.

```typescript
const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: ({ resHeaders }) => createTRPCContext({ req, resHeaders }),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
```

Final step, update your src/server/api/trpc.ts and look for this code and update it to the following:

```typescript
export const createTRPCContext = async (opts: {
  req: NextRequest;
  resHeaders: Headers;
}) => {
  return {
    ...opts,
  };
};
```

Voila! Now you can set header in your TRPC router like so:

Credits:

[https://github.com/trpc/trpc/discussions/4800#discussioncomment-7027502](https://github.com/trpc/trpc/discussions/4800#discussioncomment-7027502)

[https://www.answeroverflow.com/m/1165005090562789416](https://www.answeroverflow.com/m/1165005090562789416)
