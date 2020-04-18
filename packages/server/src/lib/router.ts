// Adapted from https://github.com/cloudflare/worker-template-router/blob/master/router.js

enum Method {
  Connect,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
  Trace,
}

type Condition = (request: Request) => boolean;
type Handler = (request: Request) => Promise<Response> | Response;

const MethodCondition = (method: Method) => (request: Request) => {
  return request.method.toLowerCase() === Method[method].toLowerCase();
};

export const PathCondition = (regExp: string) => (request: Request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  const match = path.match(regExp) || [];
  return match[0] === path;
};

export class Router {
  routes: { conditions: Condition[]; handler: Handler }[] = [];

  handle(conditions: Condition[], handler: Handler) {
    this.routes.push({
      conditions,
      handler,
    });
    return this;
  }

  connect(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Connect), PathCondition(url)],
      handler
    );
  }

  delete(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Delete), PathCondition(url)],
      handler
    );
  }

  get(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Get), PathCondition(url)],
      handler
    );
  }

  head(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Head), PathCondition(url)],
      handler
    );
  }

  options(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Options), PathCondition(url)],
      handler
    );
  }

  patch(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Patch), PathCondition(url)],
      handler
    );
  }

  post(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Post), PathCondition(url)],
      handler
    );
  }

  put(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Put), PathCondition(url)],
      handler
    );
  }

  trace(url: string, handler: Handler) {
    return this.handle(
      [MethodCondition(Method.Trace), PathCondition(url)],
      handler
    );
  }

  all(handler: Handler) {
    return this.handle([], handler);
  }

  route(request: Request) {
    const route = this.resolve(request);

    if (route) {
      return route.handler(request);
    }

    return Promise.resolve(
      new Response(`Not Found`, {
        status: 404,
        headers: {
          "content-type": `text/plain`,
        },
      })
    );
  }

  resolve(request: Request) {
    return this.routes.find((route) =>
      route.conditions.every((condition) => condition(request))
    );
  }
}
